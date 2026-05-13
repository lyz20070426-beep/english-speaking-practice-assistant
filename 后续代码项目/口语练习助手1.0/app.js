const words = [
  ["automobile", "/ˈɔːtəməbiːl/", "汽车", "The automobile industry is changing rapidly.", true],
  ["banner", "/ˈbænər/", "横幅；旗帜", "A welcome banner was hanging above the gate.", false],
  ["budget", "/ˈbʌdʒɪt/", "预算", "Students should learn how to manage a monthly budget.", true],
  ["cardinal", "/ˈkɑːrdɪnl/", "主要的；基本的", "Respect is a cardinal rule in communication.", true],
  ["catatonic", "/ˌkætəˈtɑːnɪk/", "紧张症的；木僵状态的", "The patient appeared catatonic and did not respond.", true],
  ["certificate", "/sərˈtɪfɪkət/", "证书；证明", "She received a certificate after completing the course.", false],
  ["chin", "/tʃɪn/", "下巴", "He rested his chin on his hand while thinking.", false],
  ["dealer", "/ˈdiːlər/", "经销商；交易商", "The dealer explained the price of the automobile.", false],
  ["declare", "/dɪˈkler/", "宣布；声明", "The student stood up to declare his opinion.", true],
  ["dedicate", "/ˈdedɪkeɪt/", "献身；致力于", "She decided to dedicate more time to English practice.", true],
  ["deliberately", "/dɪˈlɪbərətli/", "故意地；深思熟虑地", "He spoke slowly and deliberately during the presentation.", true],
  ["disapprove", "/ˌdɪsəˈpruːv/", "不赞成", "Some people disapprove of using phones in class.", true],
  ["display", "/dɪˈspleɪ/", "展示；陈列", "The screen will display the word and its meaning.", false],
  ["exhale", "/eksˈheɪl/", "呼气", "Take a deep breath and exhale slowly.", true],
  ["feature", "/ˈfiːtʃər/", "特征；以……为特色", "This app will feature word reading and dialogue practice.", false],
  ["felicity", "/fəˈlɪsəti/", "幸福；恰当的表达", "The writer was admired for the felicity of her words.", true],
  ["fiction", "/ˈfɪkʃn/", "小说；虚构", "Many students enjoy reading science fiction.", false],
  ["flawless", "/ˈflɔːləs/", "完美无瑕的", "Her pronunciation was almost flawless.", true],
  ["force", "/fɔːrs/", "力量；迫使", "You should not force yourself to speak too fast.", false],
  ["heighten", "/ˈhaɪtn/", "提高；增强", "Repeated practice can heighten your confidence.", true],
  ["hormone", "/ˈhɔːrmoʊn/", "激素", "A hormone can influence changes in the body.", false],
  ["inherent", "/ɪnˈhɪrənt/", "固有的；内在的", "Every language has its inherent rhythm.", true],
  ["insatiability", "/ɪnˌseɪʃəˈbɪləti/", "贪得无厌；无法满足", "The story describes his insatiability for power.", true],
  ["issue", "/ˈɪʃuː/", "问题；发行", "Pronunciation is an important issue for many learners.", false],
  ["knave", "/neɪv/", "无赖；恶棍", "The old story describes him as a clever knave.", true],
  ["laxative", "/ˈlæksətɪv/", "泻药；通便的", "The doctor mentioned a mild laxative in the treatment plan.", true],
  ["license", "/ˈlaɪsns/", "许可证；许可", "You need a license to drive an automobile.", false],
  ["orthopedics", "/ˌɔːrθəˈpiːdɪks/", "骨科", "Orthopedics focuses on bones and joints.", true],
  ["patriotism", "/ˈpeɪtriətɪzəm/", "爱国主义", "Patriotism can be expressed through service to society.", false],
  ["perception", "/pərˈsepʃn/", "感知；看法", "Practice can change your perception of speaking English.", true],
  ["perpetual", "/pərˈpetʃuəl/", "永久的；持续的", "The speaker seemed to live in perpetual anxiety.", true],
  ["pharmacopoeia", "/ˌfɑːrməkəˈpiːə/", "药典", "The pharmacopoeia lists official medicines and standards.", true],
  ["pursuit", "/pərˈsuːt/", "追求", "The pursuit of knowledge requires patience.", false],
  ["release", "/rɪˈliːs/", "释放；发布", "The team will release the first version this month.", false],
  ["sake", "/seɪk/", "缘故；目的", "For the sake of practice, please read the sentence aloud.", false],
  ["salve", "/sæv/", "药膏；缓解", "The salve helped reduce the pain.", true],
  ["stocking", "/ˈstɑːkɪŋ/", "长袜", "She bought a pair of warm stockings.", false],
  ["tablet", "/ˈtæblət/", "药片；平板电脑", "Students can use a tablet to practice speaking.", false],
  ["therapy", "/ˈθerəpi/", "治疗", "Music therapy can help people relax.", false],
  ["torture", "/ˈtɔːrtʃər/", "折磨；拷问", "The long wait felt like torture.", false],
  ["underline", "/ˌʌndərˈlaɪn/", "在……下面画线；强调", "Please underline the words you find difficult.", false],
  ["uplifting", "/ʌpˈlɪftɪŋ/", "令人振奋的", "Her speech was warm and uplifting.", false],
  ["vaguely", "/ˈveɪɡli/", "含糊地；模糊地", "I vaguely remember seeing this word before.", false],
].map(([word, phonetic, meaning, example, important]) => ({
  word,
  phonetic,
  meaning,
  example,
  important,
}));

const scenarios = [
  {
    id: "intro",
    title: "自我介绍",
    opening: "Hello! Please introduce yourself in three sentences.",
    replies: [
      "Nice start. Can you tell me one hobby you enjoy after class?",
      "Good. Why do you think this hobby is helpful for your college life?",
      "Thanks. Try to speak a little more naturally and use one example next time.",
    ],
  },
  {
    id: "campus",
    title: "校园生活",
    opening: "What is your favorite place on campus, and why?",
    replies: [
      "That sounds interesting. How often do you go there?",
      "Can you describe what students usually do there?",
      "Good practice. Pay attention to complete sentences and clear reasons.",
    ],
  },
  {
    id: "class",
    title: "课堂问答",
    opening: "What did you learn in your English class this week?",
    replies: [
      "Good. Can you give me one new word from the lesson?",
      "How would you use this word in a sentence?",
      "Well done. Try to slow down and make your pronunciation clearer.",
    ],
  },
  {
    id: "interview",
    title: "人物采访",
    opening: "Imagine you are interviewing a classmate. What is your first question?",
    replies: [
      "Good question. What follow-up question can you ask?",
      "Now please summarize your classmate's answer in one sentence.",
      "Nice work. You can make the interview smoother with linking words.",
    ],
  },
];

const storageKey = "speaking-assistant-demo-records-v2";

const state = {
  activeWordIndex: 0,
  mediaRecorder: null,
  audioChunks: [],
  audioUrl: "",
  scenario: scenarios[0],
  dialogueStep: 0,
  recognition: null,
  scoringTimer: null,
  scoringActive: false,
  xfScoringActive: false,
  xfAudioContext: null,
  xfSource: null,
  xfProcessor: null,
  xfStream: null,
  xfSamples: [],
  xfRecordStartedAt: 0,
  xfPeakLevel: 0,
  records: loadRecords(),
};

const els = {
  tabs: document.querySelectorAll(".nav-tab"),
  panels: document.querySelectorAll(".tab-panel"),
  studentName: document.querySelector("#studentName"),
  wordList: document.querySelector("#wordList"),
  wordSearch: document.querySelector("#wordSearch"),
  activeWord: document.querySelector("#activeWord"),
  activePhonetic: document.querySelector("#activePhonetic"),
  activeMeaning: document.querySelector("#activeMeaning"),
  activeExample: document.querySelector("#activeExample"),
  wordTag: document.querySelector("#wordTag"),
  speakWord: document.querySelector("#speakWord"),
  recordButton: document.querySelector("#recordButton"),
  playRecord: document.querySelector("#playRecord"),
  xfScoreButton: document.querySelector("#xfScoreButton"),
  audioPlayer: document.querySelector("#audioPlayer"),
  xfAudioPlayer: document.querySelector("#xfAudioPlayer"),
  micLevelPanel: document.querySelector("#micLevelPanel"),
  micLevelBar: document.querySelector("#micLevelBar"),
  micLevelText: document.querySelector("#micLevelText"),
  scoreValue: document.querySelector("#scoreValue"),
  recognizedText: document.querySelector("#recognizedText"),
  scoreAdvice: document.querySelector("#scoreAdvice"),
  xfAudioTip: document.querySelector("#xfAudioTip"),
  manualScoreInput: document.querySelector("#manualScoreInput"),
  manualScoreButton: document.querySelector("#manualScoreButton"),
  markKnown: document.querySelector("#markKnown"),
  markReview: document.querySelector("#markReview"),
  todayCount: document.querySelector("#todayCount"),
  scenarioSelect: document.querySelector("#scenarioSelect"),
  chatBox: document.querySelector("#chatBox"),
  replyForm: document.querySelector("#replyForm"),
  replyInput: document.querySelector("#replyInput"),
  knownMetric: document.querySelector("#knownMetric"),
  reviewMetric: document.querySelector("#reviewMetric"),
  dialogueMetric: document.querySelector("#dialogueMetric"),
  averageScoreMetric: document.querySelector("#averageScoreMetric"),
  reviewWords: document.querySelector("#reviewWords"),
  scoreHistory: document.querySelector("#scoreHistory"),
  openDiagnostic: document.querySelector("#openDiagnostic"),
  exportRecords: document.querySelector("#exportRecords"),
  resetDemo: document.querySelector("#resetDemo"),
};

function defaultRecords() {
  return {
    studentName: "",
    known: [],
    review: [],
    dialogues: 0,
    practicedToday: [],
    scores: [],
  };
}

function loadRecords() {
  try {
    return { ...defaultRecords(), ...(JSON.parse(localStorage.getItem(storageKey)) || {}) };
  } catch {
    return defaultRecords();
  }
}

function saveRecords() {
  localStorage.setItem(storageKey, JSON.stringify(state.records));
  renderMetrics();
}

function uniquePush(list, value) {
  if (!list.includes(value)) {
    list.push(value);
  }
}

function removeFrom(list, value) {
  const index = list.indexOf(value);
  if (index >= 0) {
    list.splice(index, 1);
  }
}

function activeWord() {
  return words[state.activeWordIndex];
}

function renderWords(filter = "") {
  const search = filter.trim().toLowerCase();
  els.wordList.innerHTML = "";

  words
    .filter((item) => item.word.toLowerCase().includes(search) || item.meaning.includes(search))
    .forEach((item) => {
      const realIndex = words.findIndex((word) => word.word === item.word);
      const button = document.createElement("button");
      button.className = `word-item ${realIndex === state.activeWordIndex ? "active" : ""}`;
      button.type = "button";
      button.innerHTML = `
        <span>
          <strong>${item.word}</strong>
          <span>${item.meaning}</span>
        </span>
        <span class="badge ${state.records.review.includes(item.word) ? "review" : ""}">
          ${state.records.review.includes(item.word) ? "需复习" : item.important ? "重点" : "练习"}
        </span>
      `;
      button.addEventListener("click", () => selectWord(realIndex));
      els.wordList.appendChild(button);
    });
}

function selectWord(index) {
  state.activeWordIndex = index;
  state.audioUrl = "";
  els.audioPlayer.hidden = true;
  els.playRecord.disabled = true;
  resetScorePanel();
  renderActiveWord();
  renderWords(els.wordSearch.value);
}

function renderActiveWord() {
  const item = activeWord();
  els.activeWord.textContent = item.word;
  els.activePhonetic.textContent = item.phonetic;
  els.activeMeaning.textContent = item.meaning;
  els.activeExample.textContent = item.example;
  els.wordTag.textContent = item.important ? "重点词" : "练习词";
}

function resetScorePanel() {
  els.scoreValue.textContent = "--";
  els.recognizedText.textContent = "点击“讯飞正式评分”，读完整个单词后停止并评分。";
  els.scoreAdvice.textContent = "当前主流程使用讯飞正式评分。请完整读完单词后停止并评分。";
  els.manualScoreInput.value = "";
  els.xfAudioPlayer.hidden = true;
  els.xfAudioTip.hidden = true;
  resetMicLevel();
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("当前浏览器不支持标准发音功能，请换用 Chrome 或 Edge。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

async function toggleRecording() {
  if (state.mediaRecorder && state.mediaRecorder.state === "recording") {
    state.mediaRecorder.stop();
    els.recordButton.textContent = "录音跟读";
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    alert("当前浏览器不支持录音功能，请换用 Chrome 或 Edge。");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.audioChunks = [];
    state.mediaRecorder = new MediaRecorder(stream);

    state.mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        state.audioChunks.push(event.data);
      }
    });

    state.mediaRecorder.addEventListener("stop", () => {
      const blob = new Blob(state.audioChunks, { type: "audio/webm" });
      state.audioUrl = URL.createObjectURL(blob);
      els.audioPlayer.src = state.audioUrl;
      els.audioPlayer.hidden = false;
      els.playRecord.disabled = false;
      stream.getTracks().forEach((track) => track.stop());
    });

    state.mediaRecorder.start();
    els.recordButton.textContent = "停止录音";
  } catch {
    alert("没有获取到麦克风权限，录音功能暂时不可用。");
  }
}

function normalizeSpeechText(text) {
  return text.toLowerCase().replace(/[^a-z\s-]/g, "").trim();
}

function scorePronunciation(target, spoken) {
  const targetText = normalizeSpeechText(target);
  const spokenWords = spoken.split(/\s+/).filter(Boolean);
  const candidates = spokenWords.length ? spokenWords : [spoken];
  const bestDistance = Math.min(...candidates.map((candidate) => levenshtein(targetText, candidate)));
  const maxLength = Math.max(targetText.length, 1);
  const raw = Math.round((1 - bestDistance / maxLength) * 100);
  return Math.max(0, Math.min(100, raw));
}

function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) dp[0][j] = j;

  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }

  return dp[a.length][b.length];
}

function showScore(score, recognized) {
  els.scoreValue.textContent = score;
  els.recognizedText.textContent = recognized || "未识别到有效英文";

  if (score >= 90) {
    els.scoreAdvice.textContent = "很好，识别结果与目标单词高度一致。";
  } else if (score >= 75) {
    els.scoreAdvice.textContent = "不错，建议再听一遍标准发音，注意重音和结尾音。";
  } else if (score >= 55) {
    els.scoreAdvice.textContent = "还需要练习。可以放慢速度，分音节跟读。";
  } else {
    els.scoreAdvice.textContent = "识别差异较大。建议先听标准发音，再重新朗读。";
  }
}

function scoreManualInput() {
  const text = els.manualScoreInput.value.trim();
  if (!text) {
    els.scoreValue.textContent = "--";
    els.recognizedText.textContent = "请先输入要评分的英文。";
    els.scoreAdvice.textContent = "例如当前单词是 banner，就输入 banner 后点击“手动评分”。";
    return;
  }

  const score = scorePronunciation(activeWord().word, text);
  showScore(score, text);
  saveScore(score, text);
}

async function startXfScore() {
  if (state.xfScoringActive) {
    stopXfRecording();
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    showXfError("当前浏览器不支持录音，请换用 Chrome 或 Edge。");
    return;
  }

  state.xfSamples = [];
  state.xfScoringActive = true;
  state.xfPeakLevel = 0;
  state.xfRecordStartedAt = Date.now();
  els.xfScoreButton.textContent = "停止并评分";
  els.xfScoreButton.disabled = false;
  els.scoreValue.textContent = "--";
  els.recognizedText.textContent = `讯飞正式评分：请读出 ${activeWord().word}`;
  els.scoreAdvice.textContent = "正在录音。请清楚读完整个单词，读完后点击“停止并评分”。";
  els.xfAudioPlayer.hidden = true;
  els.xfAudioTip.hidden = true;
  els.micLevelPanel.hidden = false;
  updateMicLevel(0);

  try {
    state.xfStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        autoGainControl: true,
        channelCount: 1,
        echoCancellation: false,
        noiseSuppression: false,
      },
    });
    state.xfAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    await state.xfAudioContext.resume();
    state.xfSource = state.xfAudioContext.createMediaStreamSource(state.xfStream);
    state.xfProcessor = state.xfAudioContext.createScriptProcessor(4096, 1, 1);

    state.xfProcessor.onaudioprocess = (event) => {
      if (!state.xfScoringActive) return;
      const chunk = new Float32Array(event.inputBuffer.getChannelData(0));
      state.xfSamples.push(chunk);
      const level = calculateRmsLevel(chunk);
      state.xfPeakLevel = Math.max(state.xfPeakLevel, level);
      updateMicLevel(level);
    };

    state.xfSource.connect(state.xfProcessor);
    state.xfProcessor.connect(state.xfAudioContext.destination);

    window.setTimeout(() => {
      if (state.xfScoringActive) {
        els.scoreAdvice.textContent = "仍在录音。读完后请点击“停止并评分”。";
      }
    }, 5000);
  } catch {
    showXfError("无法获取麦克风权限，请允许麦克风后重试。");
    cleanupXfRecording();
  }
}

async function stopXfRecording() {
  if (!state.xfScoringActive) return;
  state.xfScoringActive = false;
  els.xfScoreButton.textContent = "正在评分...";
  els.xfScoreButton.disabled = true;

  const sampleRate = state.xfAudioContext?.sampleRate || 48000;
  const samples = mergeFloat32(state.xfSamples);
  const durationMs = Date.now() - state.xfRecordStartedAt;
  const peakLevel = state.xfPeakLevel;
  cleanupXfRecording();

  if (durationMs < 500 || samples.length < sampleRate * 0.4) {
    showXfError("录音太短，请点击“讯飞正式评分”后完整读出当前单词，再点击“停止并评分”。");
    return;
  }

  if (peakLevel < 0.015) {
    showXfError("本次没有录到有效声音，所以没有上传给讯飞。请确认页面上的“麦克风输入”有明显跳动，再重新评分。");
    return;
  }

  try {
    const pcm = floatTo16BitPcm(downsample(samples, sampleRate, 16000));
    showUploadedAudio(pcm);
    const audioBase64 = arrayBufferToBase64(pcm.buffer);
    const response = await fetch("http://127.0.0.1:8787/api/ise-score", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        text: activeWord().word,
        category: "read_word",
        audioBase64,
      }),
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      throw new Error(data.error || "讯飞评分失败");
    }
    showXfScore(data);
  } catch (error) {
    showXfError(error.message || "讯飞评分失败，请确认本地后端已启动。");
  } finally {
    els.xfScoreButton.disabled = false;
    els.xfScoreButton.textContent = "讯飞正式评分";
  }
}

function showUploadedAudio(pcm) {
  const wav = pcmToWav(pcm, 16000);
  const url = URL.createObjectURL(new Blob([wav], { type: "audio/wav" }));
  if (els.xfAudioPlayer.src) {
    URL.revokeObjectURL(els.xfAudioPlayer.src);
  }
  els.xfAudioPlayer.src = url;
  els.xfAudioPlayer.hidden = false;
  els.xfAudioTip.hidden = false;
}

function showXfScore(data) {
  const score = pickDisplayScore(data);
  els.scoreValue.textContent = score ?? "--";
  els.recognizedText.textContent = `讯飞返回评分：${score ?? "--"} 分`;
  els.scoreAdvice.textContent = [
    data.totalScore != null ? `总分 ${Math.round(data.totalScore)} 分` : "",
    data.accuracyScore != null ? `准确度 ${Math.round(data.accuracyScore)} 分` : "",
    data.fluencyScore != null ? `流利度 ${Math.round(data.fluencyScore)} 分` : "",
    data.integrityScore != null ? `完整度 ${Math.round(data.integrityScore)} 分` : "",
    data.phoneScore != null ? `音素 ${Math.round(data.phoneScore)} 分` : "",
    data.wordScore != null ? `单词 ${Math.round(data.wordScore)} 分` : "",
  ]
    .filter(Boolean)
    .join("，") || `已收到讯飞评测结果，但未解析到总分。sid=${data.sid || ""}`;
  saveScore(score ?? 0, `讯飞评分 sid=${data.sid || ""}`);
}

function pickDisplayScore(data) {
  const candidates = [
    data.score,
    data.totalScore,
    data.wordScore,
    data.accuracyScore,
    data.standardScore,
    data.phoneScore,
    data.fluencyScore,
    data.integrityScore,
  ];
  const value = candidates.find((item) => item !== null && item !== undefined && Number.isFinite(Number(item)));
  return value === undefined ? null : Math.round(Number(value));
}

function showXfError(message) {
  els.scoreValue.textContent = "--";
  els.recognizedText.textContent = "讯飞正式评分未完成。";
  els.scoreAdvice.textContent = message;
  els.xfScoreButton.disabled = false;
  els.xfScoreButton.textContent = "讯飞正式评分";
  resetMicLevel();
}

function cleanupXfRecording() {
  if (state.xfProcessor) {
    state.xfProcessor.disconnect();
    state.xfProcessor.onaudioprocess = null;
  }
  if (state.xfSource) {
    state.xfSource.disconnect();
  }
  if (state.xfStream) {
    state.xfStream.getTracks().forEach((track) => track.stop());
  }
  if (state.xfAudioContext && state.xfAudioContext.state !== "closed") {
    state.xfAudioContext.close();
  }
  state.xfAudioContext = null;
  state.xfSource = null;
  state.xfProcessor = null;
  state.xfStream = null;
}

function calculateRmsLevel(samples) {
  if (!samples.length) return 0;
  let sum = 0;
  for (let i = 0; i < samples.length; i += 1) {
    sum += samples[i] * samples[i];
  }
  return Math.sqrt(sum / samples.length);
}

function updateMicLevel(level) {
  const percent = Math.min(100, Math.round(level * 420));
  els.micLevelBar.style.width = `${percent}%`;
  els.micLevelText.textContent = `${percent}%`;
}

function resetMicLevel() {
  els.micLevelPanel.hidden = true;
  updateMicLevel(0);
}

function mergeFloat32(chunks) {
  const length = chunks.reduce((total, chunk) => total + chunk.length, 0);
  const result = new Float32Array(length);
  let offset = 0;
  chunks.forEach((chunk) => {
    result.set(chunk, offset);
    offset += chunk.length;
  });
  return result;
}

function downsample(samples, sourceRate, targetRate) {
  if (sourceRate === targetRate) return samples;
  const ratio = sourceRate / targetRate;
  const length = Math.floor(samples.length / ratio);
  const result = new Float32Array(length);
  for (let i = 0; i < length; i += 1) {
    const start = Math.floor(i * ratio);
    const end = Math.floor((i + 1) * ratio);
    let sum = 0;
    let count = 0;
    for (let j = start; j < end && j < samples.length; j += 1) {
      sum += samples[j];
      count += 1;
    }
    result[i] = count ? sum / count : 0;
  }
  return result;
}

function floatTo16BitPcm(samples) {
  const pcm = new Int16Array(samples.length);
  for (let i = 0; i < samples.length; i += 1) {
    const sample = Math.max(-1, Math.min(1, samples[i]));
    pcm[i] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
  }
  return pcm;
}

function pcmToWav(pcm, sampleRate) {
  const buffer = new ArrayBuffer(44 + pcm.byteLength);
  const view = new DataView(buffer);
  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + pcm.byteLength, true);
  writeAscii(view, 8, "WAVE");
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, "data");
  view.setUint32(40, pcm.byteLength, true);
  new Int16Array(buffer, 44).set(pcm);
  return buffer;
}

function writeAscii(view, offset, text) {
  for (let i = 0; i < text.length; i += 1) {
    view.setUint8(offset + i, text.charCodeAt(i));
  }
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function saveScore(score, recognized) {
  const word = activeWord().word;
  uniquePush(state.records.practicedToday, word);

  if (score >= 80) {
    uniquePush(state.records.known, word);
    removeFrom(state.records.review, word);
  } else {
    uniquePush(state.records.review, word);
    removeFrom(state.records.known, word);
  }

  state.records.scores.unshift({
    studentName: state.records.studentName || "未填写",
    word,
    recognized,
    score,
    time: new Date().toLocaleString("zh-CN"),
  });
  state.records.scores = state.records.scores.slice(0, 80);
  saveRecords();
  renderWords(els.wordSearch.value);
}

function markWord(type) {
  const word = activeWord().word;
  uniquePush(state.records.practicedToday, word);

  if (type === "known") {
    uniquePush(state.records.known, word);
    removeFrom(state.records.review, word);
  } else {
    uniquePush(state.records.review, word);
    removeFrom(state.records.known, word);
  }

  saveRecords();
  renderWords(els.wordSearch.value);
}

function renderScenarios() {
  els.scenarioSelect.innerHTML = scenarios
    .map((scenario) => `<option value="${scenario.id}">${scenario.title}</option>`)
    .join("");
}

function startScenario(id) {
  state.scenario = scenarios.find((scenario) => scenario.id === id) || scenarios[0];
  state.dialogueStep = 0;
  els.chatBox.innerHTML = "";
  addMessage(state.scenario.opening, "system");
}

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;
  els.chatBox.appendChild(message);
  els.chatBox.scrollTop = els.chatBox.scrollHeight;
}

function handleReply(event) {
  event.preventDefault();
  const value = els.replyInput.value.trim();
  if (!value) {
    return;
  }

  addMessage(value, "user");
  els.replyInput.value = "";

  const reply =
    state.scenario.replies[state.dialogueStep] ||
    "Good practice. You completed this scenario. Try again and use more details next time.";

  window.setTimeout(() => addMessage(reply, "system"), 220);
  state.dialogueStep += 1;
  state.records.dialogues += 1;
  saveRecords();
}

function averageScore() {
  if (state.records.scores.length === 0) return "--";
  const sum = state.records.scores.reduce((total, item) => total + item.score, 0);
  return Math.round(sum / state.records.scores.length);
}

function renderMetrics() {
  els.todayCount.textContent = state.records.practicedToday.length;
  els.knownMetric.textContent = state.records.known.length;
  els.reviewMetric.textContent = state.records.review.length;
  els.dialogueMetric.textContent = state.records.dialogues;
  els.averageScoreMetric.textContent = averageScore();

  if (state.records.review.length === 0) {
    els.reviewWords.innerHTML = '<span class="badge">暂无需复习单词</span>';
  } else {
    els.reviewWords.innerHTML = state.records.review
      .map((word) => `<button class="review-chip" type="button" data-word="${word}">${word}</button>`)
      .join("");

    els.reviewWords.querySelectorAll("[data-word]").forEach((button) => {
      button.addEventListener("click", () => {
        selectWord(words.findIndex((item) => item.word === button.dataset.word));
        switchTab("words");
      });
    });
  }

  if (state.records.scores.length === 0) {
    els.scoreHistory.innerHTML = '<p class="empty-text">暂无评分记录</p>';
  } else {
    els.scoreHistory.innerHTML = state.records.scores
      .slice(0, 12)
      .map(
        (item) => `
          <div class="score-row">
            <strong>${item.word}</strong>
            <span>${item.score} 分</span>
            <small>${item.recognized || "未识别"} · ${item.time}</small>
          </div>
        `,
      )
      .join("");
  }
}

function switchTab(tab) {
  els.tabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });

  els.panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${tab}Panel`);
  });
}

function exportRecords() {
  const headers = ["学生姓名", "单词", "识别结果", "得分", "时间"];
  const rows = state.records.scores.map((item) => [
    item.studentName,
    item.word,
    item.recognized,
    item.score,
    item.time,
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `口语练习评分记录-${state.records.studentName || "学生"}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function resetDemo() {
  if (!confirm("确定清空本地练习记录吗？")) {
    return;
  }
  localStorage.removeItem(storageKey);
  state.records = loadRecords();
  els.studentName.value = "";
  renderWords(els.wordSearch.value);
  renderMetrics();
  resetScorePanel();
}

els.tabs.forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.tab)));
els.studentName.addEventListener("input", (event) => {
  state.records.studentName = event.target.value.trim();
  saveRecords();
});
els.wordSearch.addEventListener("input", (event) => renderWords(event.target.value));
els.speakWord.addEventListener("click", () => speak(activeWord().word));
els.recordButton.addEventListener("click", toggleRecording);
els.playRecord.addEventListener("click", () => els.audioPlayer.play());
els.xfScoreButton.addEventListener("click", startXfScore);
els.manualScoreButton.addEventListener("click", scoreManualInput);
els.markKnown.addEventListener("click", () => markWord("known"));
els.markReview.addEventListener("click", () => markWord("review"));
els.scenarioSelect.addEventListener("change", (event) => startScenario(event.target.value));
els.replyForm.addEventListener("submit", handleReply);
els.openDiagnostic.addEventListener("click", () => {
  window.open("speech-diagnostic.html", "_blank", "noopener,noreferrer");
});
els.exportRecords.addEventListener("click", exportRecords);
els.resetDemo.addEventListener("click", resetDemo);

els.studentName.value = state.records.studentName || "";
renderWords();
renderActiveWord();
renderScenarios();
startScenario(scenarios[0].id);
renderMetrics();
