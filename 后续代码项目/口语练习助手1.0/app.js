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
  scoreButton: document.querySelector("#scoreButton"),
  audioPlayer: document.querySelector("#audioPlayer"),
  scoreValue: document.querySelector("#scoreValue"),
  recognizedText: document.querySelector("#recognizedText"),
  scoreAdvice: document.querySelector("#scoreAdvice"),
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
  els.recognizedText.textContent = "点击“朗读评分”，读出当前单词。";
  els.scoreAdvice.textContent = "免费版评分基于浏览器语音识别结果，仅用于练习参考。";
  els.manualScoreInput.value = "";
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

function recognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition;
}

function startScoring() {
  if (state.scoringActive && state.recognition) {
    stopScoring("manual");
    return;
  }

  const SpeechRecognition = recognitionConstructor();
  if (!SpeechRecognition) {
    els.scoreValue.textContent = "--";
    els.recognizedText.textContent = "当前浏览器不支持语音识别评分。";
    els.scoreAdvice.textContent = "建议使用 Chrome 或 Edge。若学校电脑禁用语音识别，可先用录音回放和人工判断。";
    return;
  }

  if (state.recognition) {
    state.recognition.abort();
  }

  const recognition = new SpeechRecognition();
  let hasResult = false;
  let hasError = false;
  state.recognition = recognition;
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  state.scoringActive = true;
  els.scoreButton.disabled = false;
  els.scoreButton.textContent = "停止评分";
  els.scoreValue.textContent = "--";
  els.recognizedText.textContent = `请读出：${activeWord().word}`;
  els.scoreAdvice.textContent = "请对着麦克风清楚朗读当前单词。系统会在 6 秒内自动结束。";
  els.manualScoreInput.value = "";

  clearTimeout(state.scoringTimer);
  state.scoringTimer = window.setTimeout(() => {
    showNoSpeechResult("timeout");
    forceStopRecognition();
    finishScoring();
  }, 6000);

  recognition.addEventListener("result", (event) => {
    hasResult = true;
    const alternatives = Array.from(event.results[0]).map((result) => result.transcript);
    const best = scoreAlternatives(activeWord().word, alternatives);
    showScore(best.score, best.text);
    saveScore(best.score, best.text);
    stopScoring("result");
  });

  recognition.addEventListener("speechend", () => {
    stopScoring("speechend");
  });

  recognition.addEventListener("error", (event) => {
    hasError = true;
    els.scoreValue.textContent = "--";
    els.recognizedText.textContent = "没有识别成功。";
    els.scoreAdvice.textContent =
      event.error === "not-allowed"
        ? "浏览器没有麦克风权限，请允许麦克风后重试。"
        : "请靠近麦克风，读清楚一些，或换用 Chrome / Edge 后重试。";
    finishScoring();
  });

  recognition.addEventListener("end", () => {
    if (!hasResult && !hasError && state.scoringActive) {
      els.scoreValue.textContent = "--";
      els.recognizedText.textContent = "没有收到可评分的识别结果。";
      els.scoreAdvice.textContent = "可以重新点击“朗读评分”，读完单词后停顿一下。";
    }
    finishScoring();
  });

  try {
    recognition.start();
  } catch {
    els.scoreValue.textContent = "--";
    els.recognizedText.textContent = "评分启动失败。";
    els.scoreAdvice.textContent = "请刷新页面后重试，或先使用录音回放功能。";
    finishScoring();
  }
}

function stopScoring(reason) {
  if (!state.recognition) {
    finishScoring();
    return;
  }

  if (reason === "manual") {
    showNoSpeechResult("manual");
  }

  forceStopRecognition();
  finishScoring();
}

function forceStopRecognition() {
  if (!state.recognition) {
    return;
  }

  try {
    state.recognition.stop();
  } catch {
    try {
      state.recognition.abort();
    } catch {
      // Some browser implementations throw while already stopping.
    }
  }
}

function finishScoring() {
  clearTimeout(state.scoringTimer);
  state.scoringTimer = null;
  state.scoringActive = false;
  state.recognition = null;
  els.scoreButton.disabled = false;
  els.scoreButton.textContent = "朗读评分";
}

function showNoSpeechResult(reason) {
  els.scoreValue.textContent = "--";
  els.recognizedText.textContent = "浏览器没有返回可评分的识别结果。";
  els.scoreAdvice.textContent =
    reason === "timeout"
      ? "本次已自动结束。可以重试，或在下方手动输入英文进行演示评分。"
      : "本次已停止。可以重试，或在下方手动输入英文进行演示评分。";
}

function scoreAlternatives(target, alternatives) {
  const cleaned = alternatives.map((text) => normalizeSpeechText(text)).filter(Boolean);
  if (cleaned.length === 0) {
    return { score: 0, text: "" };
  }

  return cleaned
    .map((text) => ({ text, score: scorePronunciation(target, text) }))
    .sort((a, b) => b.score - a.score)[0];
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
els.scoreButton.addEventListener("click", startScoring);
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
