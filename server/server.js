const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const rootDir = path.resolve(__dirname, "..");
const appDir = path.join(rootDir, "app");
loadEnv(path.join(__dirname, ".env"));

const config = {
  appId: process.env.XF_APPID,
  apiKey: process.env.XF_API_KEY,
  apiSecret: process.env.XF_API_SECRET,
  port: Number(process.env.PORT || 8787),
};

const server = http.createServer(async (req, res) => {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/api/ise-score") {
    handleScore(req, res).catch((error) => {
      sendJson(res, 500, {
        ok: false,
        error: error.message || "评分失败",
      });
    });
    return;
  }

  serveStatic(req, res);
});

server.listen(config.port, "127.0.0.1", () => {
  console.log(`英语口语练习助手后端已启动：http://127.0.0.1:${config.port}`);
});

async function handleScore(req, res) {
  ensureConfig();
  const body = await readJson(req);
  const text = String(body.text || "").trim();
  const audioBase64 = String(body.audioBase64 || "");

  if (!text) {
    sendJson(res, 400, { ok: false, error: "缺少评测文本" });
    return;
  }

  if (!audioBase64) {
    sendJson(res, 400, { ok: false, error: "缺少音频数据" });
    return;
  }

  const pcm = Buffer.from(audioBase64, "base64");
  if (pcm.length < 800) {
    sendJson(res, 400, { ok: false, error: "音频太短，请重新录制" });
    return;
  }

  const result = await scoreWithXfyun({
    pcm,
    text,
    category: body.category === "read_sentence" ? "read_sentence" : "read_word",
  });

  sendJson(res, 200, {
    ok: true,
    ...result,
  });
}

function ensureConfig() {
  const missing = [];
  if (!config.appId) missing.push("XF_APPID");
  if (!config.apiKey) missing.push("XF_API_KEY");
  if (!config.apiSecret) missing.push("XF_API_SECRET");
  if (missing.length) {
    throw new Error(`缺少环境变量：${missing.join(", ")}。请复制 server/.env.example 为 server/.env 并填入讯飞密钥。`);
  }
}

function scoreWithXfyun({ pcm, text, category }) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(buildAuthUrl());
    let finalXml = "";
    let finalPayload = null;
    let settled = false;
    const timeout = setTimeout(() => {
      fail(new Error("讯飞评分超时，请稍后重试"));
    }, 30000);

    function fail(error) {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      try {
        ws.close();
      } catch {}
      reject(error);
    }

    function done(result) {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      try {
        ws.close(1000);
      } catch {}
      resolve(result);
    }

    ws.addEventListener("open", () => {
      const paperText = category === "read_word" ? `\uFEFF[word]\n${text}` : `\uFEFF${text}`;
      ws.send(
        JSON.stringify({
          common: {
            app_id: config.appId,
          },
          business: {
            aue: "raw",
            auf: "audio/L16;rate=16000",
            category,
            cmd: "ssb",
            ent: "en_vip",
            sub: "ise",
            text: paperText,
            tte: "utf-8",
            ttp_skip: true,
            rstcd: "utf8",
            rst: "entirety",
            ise_unite: "1",
            extra_ability: "multi_dimension",
            plev: "0",
          },
          data: {
            status: 0,
          },
        }),
      );
      sendAudioFrames(ws, pcm);
    });

    ws.addEventListener("message", (event) => {
      let payload;
      try {
        payload = JSON.parse(String(event.data));
      } catch {
        return;
      }

      if (payload.code !== 0) {
        fail(new Error(`讯飞接口错误 ${payload.code}：${payload.message || "未知错误"}`));
        return;
      }

      if (payload.data?.data) {
        finalXml = Buffer.from(payload.data.data, "base64").toString("utf8");
        finalPayload = payload;
      }

      if (payload.data?.status === 2) {
        done(parseXfyunXml(finalXml, finalPayload));
      }
    });

    ws.addEventListener("error", () => {
      fail(new Error("无法连接讯飞语音评测服务，请检查网络和密钥"));
    });
  });
}

function sendAudioFrames(ws, pcm) {
  const frameSize = 1280;
  const chunks = [];
  for (let start = 0; start < pcm.length; start += frameSize) {
    chunks.push(pcm.subarray(start, Math.min(start + frameSize, pcm.length)));
  }

  chunks.forEach((chunk, index) => {
    const isFirst = index === 0;
    const isLast = index === chunks.length - 1;
    setTimeout(() => {
      ws.send(
        JSON.stringify({
          business: {
            cmd: "auw",
            aus: isLast ? 4 : isFirst ? 1 : 2,
          },
          data: {
            status: isLast ? 2 : 1,
            data: chunk.toString("base64"),
          },
        }),
      );
    }, index * 40);
  });
}

function parseXfyunXml(xml, payload) {
  const readWordAttrs = readAttrs(xml.match(/<read_word\b([^>]*)>/)?.[1] || "");
  const readSentenceAttrs = readAttrs(xml.match(/<read_sentence\b([^>]*)>/)?.[1] || "");
  const readChapterAttrs = readAttrs(xml.match(/<read_chapter\b([^>]*)>/)?.[1] || "");
  const wordAttrs = readAttrs(xml.match(/<word\b([^>]*)>/)?.[1] || "");
  const attrs = { ...readChapterAttrs, ...readSentenceAttrs, ...readWordAttrs };
  const scoreAttrs = collectScoreAttrs(xml);

  const score =
    numberValue(attrs.total_score) ??
    numberValue(wordAttrs.total_score) ??
    numberValue(attrs.accuracy_score) ??
    firstScore(scoreAttrs, ["total_score", "total", "score", "accuracy_score"]);

  return {
    score: score === null ? null : Math.round(score),
    rawScore: score,
    totalScore: numberValue(attrs.total_score) ?? firstScore(scoreAttrs, ["total_score", "total"]),
    accuracyScore: numberValue(attrs.accuracy_score) ?? firstScore(scoreAttrs, ["accuracy_score", "accuracy"]),
    fluencyScore: numberValue(attrs.fluency_score) ?? firstScore(scoreAttrs, ["fluency_score", "fluency"]),
    standardScore: numberValue(attrs.standard_score) ?? firstScore(scoreAttrs, ["standard_score", "standard"]),
    integrityScore: numberValue(attrs.integrity_score) ?? firstScore(scoreAttrs, ["integrity_score", "integrity"]),
    phoneScore: firstScore(scoreAttrs, ["phone_score"]),
    toneScore: firstScore(scoreAttrs, ["tone_score"]),
    wordScore: numberValue(wordAttrs.total_score) ?? firstScore(scoreAttrs, ["word_score"]),
    scoreAttrs,
    isRejected: attrs.is_rejected || null,
    exceptInfo: attrs.except_info || null,
    sid: payload?.sid || null,
    xml,
  };
}

function collectScoreAttrs(xml) {
  const scores = {};
  const tagPattern = /<([a-zA-Z_:-]+)\b([^>]*)>/g;
  let tagMatch;
  while ((tagMatch = tagPattern.exec(xml))) {
    const tag = tagMatch[1];
    const attrs = readAttrs(tagMatch[2] || "");
    Object.entries(attrs).forEach(([key, value]) => {
      if (!/score|total|accuracy|fluency|standard|integrity|phone|tone/i.test(key)) {
        return;
      }
      const number = numberValue(value);
      if (number === null) {
        return;
      }
      const fullKey = `${tag}.${key}`;
      scores[fullKey] = number;
      if (scores[key] === undefined) {
        scores[key] = number;
      }
    });
  }
  return scores;
}

function firstScore(scores, keys) {
  for (const key of keys) {
    if (scores[key] !== undefined) {
      return scores[key];
    }
    const match = Object.entries(scores).find(([scoreKey]) => scoreKey.endsWith(`.${key}`));
    if (match) {
      return match[1];
    }
  }
  return null;
}

function readAttrs(source) {
  const attrs = {};
  const pattern = /([:\w-]+)="([^"]*)"/g;
  let match;
  while ((match = pattern.exec(source))) {
    attrs[match[1]] = decodeXml(match[2]);
  }
  return attrs;
}

function numberValue(value) {
  if (value === undefined || value === null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function decodeXml(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function buildAuthUrl() {
  const host = "ise-api.xfyun.cn";
  const pathName = "/v2/open-ise";
  const date = new Date().toUTCString();
  const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${pathName} HTTP/1.1`;
  const signature = crypto
    .createHmac("sha256", config.apiSecret)
    .update(signatureOrigin)
    .digest("base64");
  const authorizationOrigin = `api_key="${config.apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = Buffer.from(authorizationOrigin).toString("base64");
  const params = new URLSearchParams({
    authorization,
    date,
    host,
  });
  return `wss://${host}${pathName}?${params.toString()}`;
}

function serveStatic(req, res) {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  const filePath = path.normalize(path.join(appDir, pathname));

  if (!filePath.startsWith(appDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "content-type": contentType(filePath) });
    res.end(content);
  });
}

function contentType(filePath) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  return "application/octet-stream";
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}"));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, data) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

function setCors(res) {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "GET,POST,OPTIONS");
  res.setHeader("access-control-allow-headers", "content-type");
}

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const index = trimmed.indexOf("=");
    if (index === -1) return;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) {
      process.env[key] = value;
    }
  });
}
