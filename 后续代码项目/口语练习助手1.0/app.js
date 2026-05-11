const words = [
  {
    word: "automobile",
    phonetic: "/ˈɔːtəməbiːl/",
    meaning: "汽车",
    example: "The automobile industry is changing rapidly.",
    important: true,
  },
  {
    word: "banner",
    phonetic: "/ˈbænər/",
    meaning: "横幅；旗帜",
    example: "A welcome banner was hanging above the gate.",
    important: false,
  },
  {
    word: "budget",
    phonetic: "/ˈbʌdʒɪt/",
    meaning: "预算",
    example: "Students should learn how to manage a monthly budget.",
    important: true,
  },
  {
    word: "cardinal",
    phonetic: "/ˈkɑːrdɪnl/",
    meaning: "主要的；基本的",
    example: "Respect is a cardinal rule in communication.",
    important: true,
  },
  {
    word: "catatonic",
    phonetic: "/ˌkætəˈtɑːnɪk/",
    meaning: "紧张症的；木僵状态的",
    example: "The patient appeared catatonic and did not respond.",
    important: true,
  },
  {
    word: "certificate",
    phonetic: "/sərˈtɪfɪkət/",
    meaning: "证书；证明",
    example: "She received a certificate after completing the course.",
    important: false,
  },
  {
    word: "chin",
    phonetic: "/tʃɪn/",
    meaning: "下巴",
    example: "He rested his chin on his hand while thinking.",
    important: false,
  },
  {
    word: "dealer",
    phonetic: "/ˈdiːlər/",
    meaning: "经销商；交易商",
    example: "The dealer explained the price of the automobile.",
    important: false,
  },
  {
    word: "declare",
    phonetic: "/dɪˈkler/",
    meaning: "宣布；声明",
    example: "The student stood up to declare his opinion.",
    important: true,
  },
  {
    word: "dedicate",
    phonetic: "/ˈdedɪkeɪt/",
    meaning: "献身；致力于",
    example: "She decided to dedicate more time to English practice.",
    important: true,
  },
  {
    word: "deliberately",
    phonetic: "/dɪˈlɪbərətli/",
    meaning: "故意地；深思熟虑地",
    example: "He spoke slowly and deliberately during the presentation.",
    important: true,
  },
  {
    word: "disapprove",
    phonetic: "/ˌdɪsəˈpruːv/",
    meaning: "不赞成",
    example: "Some people disapprove of using phones in class.",
    important: true,
  },
  {
    word: "display",
    phonetic: "/dɪˈspleɪ/",
    meaning: "展示；陈列",
    example: "The screen will display the word and its meaning.",
    important: false,
  },
  {
    word: "exhale",
    phonetic: "/eksˈheɪl/",
    meaning: "呼气",
    example: "Take a deep breath and exhale slowly.",
    important: true,
  },
  {
    word: "feature",
    phonetic: "/ˈfiːtʃər/",
    meaning: "特征；以……为特色",
    example: "This app will feature word reading and dialogue practice.",
    important: false,
  },
  {
    word: "felicity",
    phonetic: "/fəˈlɪsəti/",
    meaning: "幸福；恰当的表达",
    example: "The writer was admired for the felicity of her words.",
    important: true,
  },
  {
    word: "fiction",
    phonetic: "/ˈfɪkʃn/",
    meaning: "小说；虚构",
    example: "Many students enjoy reading science fiction.",
    important: false,
  },
  {
    word: "flawless",
    phonetic: "/ˈflɔːləs/",
    meaning: "完美无瑕的",
    example: "Her pronunciation was almost flawless.",
    important: true,
  },
  {
    word: "force",
    phonetic: "/fɔːrs/",
    meaning: "力量；迫使",
    example: "You should not force yourself to speak too fast.",
    important: false,
  },
  {
    word: "heighten",
    phonetic: "/ˈhaɪtn/",
    meaning: "提高；增强",
    example: "Repeated practice can heighten your confidence.",
    important: true,
  },
  {
    word: "hormone",
    phonetic: "/ˈhɔːrmoʊn/",
    meaning: "激素",
    example: "A hormone can influence changes in the body.",
    important: false,
  },
  {
    word: "inherent",
    phonetic: "/ɪnˈhɪrənt/",
    meaning: "固有的；内在的",
    example: "Every language has its inherent rhythm.",
    important: true,
  },
  {
    word: "insatiability",
    phonetic: "/ɪnˌseɪʃəˈbɪləti/",
    meaning: "贪得无厌；无法满足",
    example: "The story describes his insatiability for power.",
    important: true,
  },
  {
    word: "issue",
    phonetic: "/ˈɪʃuː/",
    meaning: "问题；发行",
    example: "Pronunciation is an important issue for many learners.",
    important: false,
  },
  {
    word: "knave",
    phonetic: "/neɪv/",
    meaning: "无赖；恶棍",
    example: "The old story describes him as a clever knave.",
    important: true,
  },
  {
    word: "laxative",
    phonetic: "/ˈlæksətɪv/",
    meaning: "泻药；通便的",
    example: "The doctor mentioned a mild laxative in the treatment plan.",
    important: true,
  },
  {
    word: "license",
    phonetic: "/ˈlaɪsns/",
    meaning: "许可证；许可",
    example: "You need a license to drive an automobile.",
    important: false,
  },
  {
    word: "orthopedics",
    phonetic: "/ˌɔːrθəˈpiːdɪks/",
    meaning: "骨科",
    example: "Orthopedics focuses on bones and joints.",
    important: true,
  },
  {
    word: "patriotism",
    phonetic: "/ˈpeɪtriətɪzəm/",
    meaning: "爱国主义",
    example: "Patriotism can be expressed through service to society.",
    important: false,
  },
  {
    word: "perception",
    phonetic: "/pərˈsepʃn/",
    meaning: "感知；看法",
    example: "Practice can change your perception of speaking English.",
    important: true,
  },
  {
    word: "perpetual",
    phonetic: "/pərˈpetʃuəl/",
    meaning: "永久的；持续的",
    example: "The speaker seemed to live in perpetual anxiety.",
    important: true,
  },
  {
    word: "pharmacopoeia",
    phonetic: "/ˌfɑːrməkəˈpiːə/",
    meaning: "药典",
    example: "The pharmacopoeia lists official medicines and standards.",
    important: true,
  },
  {
    word: "pursuit",
    phonetic: "/pərˈsuːt/",
    meaning: "追求",
    example: "The pursuit of knowledge requires patience.",
    important: false,
  },
  {
    word: "release",
    phonetic: "/rɪˈliːs/",
    meaning: "释放；发布",
    example: "The team will release the first version this month.",
    important: false,
  },
  {
    word: "sake",
    phonetic: "/seɪk/",
    meaning: "缘故；目的",
    example: "For the sake of practice, please read the sentence aloud.",
    important: false,
  },
  {
    word: "salve",
    phonetic: "/sæv/",
    meaning: "药膏；缓解",
    example: "The salve helped reduce the pain.",
    important: true,
  },
  {
    word: "stocking",
    phonetic: "/ˈstɑːkɪŋ/",
    meaning: "长袜",
    example: "She bought a pair of warm stockings.",
    important: false,
  },
  {
    word: "tablet",
    phonetic: "/ˈtæblət/",
    meaning: "药片；平板电脑",
    example: "Students can use a tablet to practice speaking.",
    important: false,
  },
  {
    word: "therapy",
    phonetic: "/ˈθerəpi/",
    meaning: "治疗",
    example: "Music therapy can help people relax.",
    important: false,
  },
  {
    word: "torture",
    phonetic: "/ˈtɔːrtʃər/",
    meaning: "折磨；拷问",
    example: "The long wait felt like torture.",
    important: false,
  },
  {
    word: "underline",
    phonetic: "/ˌʌndərˈlaɪn/",
    meaning: "在……下面画线；强调",
    example: "Please underline the words you find difficult.",
    important: false,
  },
  {
    word: "uplifting",
    phonetic: "/ʌpˈlɪftɪŋ/",
    meaning: "令人振奋的",
    example: "Her speech was warm and uplifting.",
    important: false,
  },
  {
    word: "vaguely",
    phonetic: "/ˈveɪɡli/",
    meaning: "含糊地；模糊地",
    example: "I vaguely remember seeing this word before.",
    important: false,
  },
];

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

const storageKey = "speaking-assistant-demo-records";

const state = {
  activeWordIndex: 0,
  mediaRecorder: null,
  audioChunks: [],
  audioUrl: "",
  scenario: scenarios[0],
  dialogueStep: 0,
  records: loadRecords(),
};

const els = {
  tabs: document.querySelectorAll(".nav-tab"),
  panels: document.querySelectorAll(".tab-panel"),
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
  audioPlayer: document.querySelector("#audioPlayer"),
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
  reviewWords: document.querySelector("#reviewWords"),
  resetDemo: document.querySelector("#resetDemo"),
};

function loadRecords() {
  const fallback = { known: [], review: [], dialogues: 0, practicedToday: [] };
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || fallback;
  } catch {
    return fallback;
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

function renderWords(filter = "") {
  const search = filter.trim().toLowerCase();
  els.wordList.innerHTML = "";

  words
    .filter((item) => {
      return (
        item.word.toLowerCase().includes(search) ||
        item.meaning.toLowerCase().includes(search)
      );
    })
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
  renderActiveWord();
  renderWords(els.wordSearch.value);
}

function renderActiveWord() {
  const item = words[state.activeWordIndex];
  els.activeWord.textContent = item.word;
  els.activePhonetic.textContent = item.phonetic;
  els.activeMeaning.textContent = item.meaning;
  els.activeExample.textContent = item.example;
  els.wordTag.textContent = item.important ? "重点词" : "练习词";
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
    els.recordButton.textContent = "开始录音";
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

function markWord(type) {
  const word = words[state.activeWordIndex].word;
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

function renderMetrics() {
  els.todayCount.textContent = state.records.practicedToday.length;
  els.knownMetric.textContent = state.records.known.length;
  els.reviewMetric.textContent = state.records.review.length;
  els.dialogueMetric.textContent = state.records.dialogues;

  if (state.records.review.length === 0) {
    els.reviewWords.innerHTML = "<span class=\"badge\">暂无需复习单词</span>";
    return;
  }

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

function switchTab(tab) {
  els.tabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });

  els.panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${tab}Panel`);
  });
}

function resetDemo() {
  if (!confirm("确定清空本地演示记录吗？")) {
    return;
  }
  localStorage.removeItem(storageKey);
  state.records = loadRecords();
  renderWords(els.wordSearch.value);
  renderMetrics();
}

els.tabs.forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.tab)));
els.wordSearch.addEventListener("input", (event) => renderWords(event.target.value));
els.speakWord.addEventListener("click", () => speak(words[state.activeWordIndex].word));
els.recordButton.addEventListener("click", toggleRecording);
els.playRecord.addEventListener("click", () => els.audioPlayer.play());
els.markKnown.addEventListener("click", () => markWord("known"));
els.markReview.addEventListener("click", () => markWord("review"));
els.scenarioSelect.addEventListener("change", (event) => startScenario(event.target.value));
els.replyForm.addEventListener("submit", handleReply);
els.resetDemo.addEventListener("click", resetDemo);

renderWords();
renderActiveWord();
renderScenarios();
startScenario(scenarios[0].id);
renderMetrics();
