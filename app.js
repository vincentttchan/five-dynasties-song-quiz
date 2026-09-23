const mcqData = [
  {topic:0,q:"五代依次更替的正確次序是甚麼？",options:["後梁、後唐、後晉、後漢、後周","後唐、後梁、後周、後漢、後晉","後梁、後晉、後唐、後周、後漢","後周、後漢、後晉、後唐、後梁"],answer:0,exp:"五代是後梁、後唐、後晉、後漢、後周五個先後更替的中原政權。"},
  {topic:0,q:"五代與十國在地域和出現方式上有何主要分別？",options:["五代在南方同時並立，十國在北方先後更替","五代主要在北方先後更替，十國多在南方同時割據","兩者都只位於黃河流域","兩者都是宋代設立的行政區"],answer:1,exp:"五代主要位於北方黃河流域，政權先後更替；十國多分布於南方長江流域，往往同時割據。"},
  {topic:0,q:"下列哪一項最能概括五代政局的特點？",options:["文人專政、中央穩固","武人專政、地方力量強大","商人掌權、經濟停頓","外戚專政、國祚悠長"],answer:1,exp:"五代武將掌握軍隊，常以兵變奪取政權，造成政權更替頻繁、國祚短促。"},
  {topic:0,q:"石敬瑭為取得契丹支持，割讓了哪個地區？",options:["河西走廊","嶺南地區","燕雲十六州","江南十州"],answer:2,exp:"石敬瑭把燕雲十六州割讓給契丹，使後來的北宋失去長城一帶的天然防線。"},
  {topic:1,q:"趙匡胤被士兵黃袍加身、建立北宋的事件稱為甚麼？",options:["玄武門之變","陳橋兵變","安史之亂","靖康之變"],answer:1,exp:"趙匡胤在陳橋驛被擁立為帝，迫使後周恭帝退位，史稱陳橋兵變。"},
  {topic:1,q:"北宋建立後定都何處？",options:["長安","洛陽","臨安","汴京"],answer:3,exp:"宋太祖建立北宋，定都汴京，即今天的開封。"},
  {topic:2,q:"宋太祖統一各地時採取哪項策略？",options:["先北後南","先南後北","只守不攻","聯遼滅南"],answer:1,exp:"宋太祖採取先南後北策略，先消滅南方較弱政權，再處理北方勢力。"},
  {topic:3,q:"宋太祖推行中央集權政策，最直接是要防止哪種情況重演？",options:["地方與武將勢力過大，威脅中央","海外貿易發展過快","科舉考生人數太多","農民遷往城市"],answer:0,exp:"五代的教訓是地方和武將力量過大、篡弒頻生，因此宋太祖致力把權力集中於中央。"},
  {topic:3,q:"「強幹弱枝」中的「幹」和「枝」分別指甚麼？",options:["文官與武將","中央與地方","皇帝與宰相","禁軍與廂軍"],answer:1,exp:"「幹」指中央，「枝」指地方；政策目的是加強中央、削弱地方。"},
  {topic:3,q:"北宋設三司使，主要分割宰相的哪一項權力？",options:["財政權","軍事權","司法權","監察權"],answer:0,exp:"三司使掌財政，樞密使掌軍政，參知政事為副相，藉此分化和制衡宰相權力。"},
  {topic:3,q:"樞密使在北宋中央主要掌管甚麼？",options:["地方稅收","國家軍政","科舉考試","皇室禮儀"],answer:1,exp:"樞密使掌國家軍政，以分割宰相的軍事權力。"},
  {topic:3,q:"北宋設置「通判」的主要作用是甚麼？",options:["統領禁軍","監察地方長官知州","管理中央財政","主持科舉"],answer:1,exp:"地方由文官任知州，再設通判監察知州，使地方權力受到分化和監督。"},
  {topic:3,q:"北宋如何削弱地方財權？",options:["地方可自行保留全部稅收","取消一切地方開支","除必要開支外，地方稅收上繳中央","把中央稅收交給知州"],answer:2,exp:"除地方必要開支外，地方稅收一律上繳中央，避免地方積聚財力。"},
  {topic:3,q:"關於北宋禁軍與廂軍的安排，哪項正確？",options:["精銳禁軍置於中央，老弱廂軍鎮守地方","禁軍和廂軍都由地方掌握","老弱禁軍駐中央，精銳廂軍駐地方","北宋完全取消地方軍隊"],answer:0,exp:"北宋把精銳禁軍置於中央，地方多留老弱廂軍，防止地方軍力過強。"},
  {topic:4,q:"「更戍法」規定軍隊定期調防，主要目的為何？",options:["鼓勵將領長期經營地方","使兵將不相知，減少武將割據機會","增加地方軍隊的財政收入","讓文官直接訓練禁軍"],answer:1,exp:"軍隊約每三年調防，使兵將缺乏長期私人聯繫，降低武將擁兵自重的風險。"}
];

const blanks = [
  ["五代主要位於","黃河","流域；十國多位於長江流域。"],
  ["五代政治常見","武人","專政，地方力量過強。"],
  ["趙匡胤在","陳橋","驛被黃袍加身。"],
  ["北宋定都","汴京","，即今天的開封。"],
  ["宋太祖採取「先","南","後北」的統一策略。"],
  ["北宋國策可概括為「強","幹","弱枝」。"],
  ["北宋亦奉行「重","文","輕武」。"],
  ["三司使掌國家","財政","大權。"],
  ["樞密使掌國家","軍政","大權。"],
  ["地方稅收除必要開支外，一律","上繳","中央。"],
  ["精銳的","禁","軍置於中央。"],
  ["更戍法使軍隊每","三","年調防。"]
];

const matches = [
  ["三司使","掌控國家財政"],["樞密使","掌控國家軍政"],["參知政事","作為副相制衡宰相"],
  ["通判","監察地方長官知州"],["禁軍","精銳部隊置於中央"],["廂軍","老弱部隊鎮守地方"]
];

const questions = [
  ...mcqData.map(item => ({type:"mcq",...item})),
  ...blanks.map(([before,answer,after]) => ({type:"blank",before,answer,after})),
  ...matches.map(([role,answer]) => ({type:"match",role,answer}))
];
const matchChoices = matches.map(([,answer]) => answer);
const letters = ["A","B","C","D"];
const $ = id => document.getElementById(id);
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char]);
let answers = Array(questions.length).fill(null);
let current = 0;

function isAnswered(index){
  const answer = answers[index];
  return answer !== null && String(answer).trim() !== "";
}

function firstUnanswered(){
  const index = questions.findIndex((_,i) => !isAnswered(i));
  return index === -1 ? questions.length : index;
}

function renderProgress(){
  const completed = answers.filter((_,i) => isAnswered(i)).length;
  const unlockedThrough = firstUnanswered();
  $("question-counter").textContent = `第 ${current+1} 題／共 ${questions.length} 題`;
  $("progress-label").textContent = `已完成 ${completed}／${questions.length} 題`;
  $("progress-fill").style.width = `${completed/questions.length*100}%`;
  $("answered-count").textContent = completed;
  $("score-ring").style.setProperty("--ring",`${completed/questions.length*100}%`);
  $("question-grid").innerHTML = questions.map((_,i) => {
    const locked = i > unlockedThrough;
    const state = i === current ? "current" : locked ? "locked" : isAnswered(i) ? "answered" : "";
    return `<button class="q-jump ${state}" data-jump="${i}" aria-label="第 ${i+1} 題${locked?"，尚未解鎖":""}" ${locked?"disabled":""}>${i+1}</button>`;
  }).join("");
  $("prev-question").disabled = current === 0;
  $("next-question").disabled = !isAnswered(current);
  $("next-question").textContent = current === questions.length-1 ? "完成並查看總分" : "下一題";
}

function renderQuestion(){
  const item = questions[current];
  $("question-kind").textContent = item.type === "mcq" ? "選擇題" : item.type === "blank" ? "填空題" : "配對題";
  if(item.type === "mcq"){
    $("question-title").textContent = item.q;
    $("question-body").innerHTML = `<div class="options">${item.options.map((option,i) => `<button class="option ${answers[current]===i?"selected":""}" data-option="${i}" aria-pressed="${answers[current]===i}"><span class="option-letter">${letters[i]}</span><span>${escapeHtml(option)}</span></button>`).join("")}</div>`;
  } else if(item.type === "blank"){
    $("question-title").textContent = "填入正確詞語";
    $("question-body").innerHTML = `<label class="blank-question">${escapeHtml(item.before)}<input id="answer-input" aria-label="第 ${current+1} 題填空答案" autocomplete="off" spellcheck="false" value="${escapeHtml(answers[current]??"")}">${escapeHtml(item.after)}</label>`;
  } else {
    $("question-title").textContent = `「${item.role}」對應哪項職責？`;
    $("question-body").innerHTML = `<label class="match-question" for="answer-input">請選擇正確職責</label><select id="answer-input"><option value="">請選擇職責</option>${matchChoices.map(choice => `<option value="${escapeHtml(choice)}" ${answers[current]===choice?"selected":""}>${escapeHtml(choice)}</option>`).join("")}</select>`;
  }
  renderProgress();
}

function showQuestion(index){
  if(index < 0 || index >= questions.length || index > firstUnanswered()) return;
  current = index;
  renderQuestion();
  if(window.innerWidth < 700) $("quiz-layout").scrollIntoView({behavior:"smooth"});
}

$("question-body").addEventListener("click",event => {
  const button = event.target.closest("[data-option]");
  if(!button) return;
  answers[current] = Number(button.dataset.option);
  renderQuestion();
});
$("question-body").addEventListener("input",event => {
  if(event.target.id !== "answer-input") return;
  answers[current] = event.target.value;
  renderProgress();
});
$("question-body").addEventListener("change",event => {
  if(event.target.id !== "answer-input") return;
  answers[current] = event.target.value;
  renderProgress();
});
$("question-grid").addEventListener("click",event => {
  const button = event.target.closest("[data-jump]");
  if(button) showQuestion(Number(button.dataset.jump));
});
$("prev-question").addEventListener("click",() => showQuestion(current-1));
$("next-question").addEventListener("click",() => {
  if(!isAnswered(current)) return;
  if(current === questions.length-1) finishQuiz();
  else showQuestion(current+1);
});

function answerText(item,answer){
  if(item.type === "mcq") return `${letters[answer]}．${item.options[answer]}`;
  return String(answer).trim();
}

function finishQuiz(){
  if(firstUnanswered() !== questions.length) return;
  const mcqScore = mcqData.reduce((score,item,i) => score+(answers[i]===item.answer?1:0),0);
  const blankScore = blanks.reduce((score,item,i) => score+(String(answers[mcqData.length+i]).trim()===item[1]?1:0),0);
  const matchScore = matches.reduce((score,item,i) => score+(answers[mcqData.length+blanks.length+i]===item[1]?1:0),0);
  const total = mcqScore+blankScore+matchScore;
  $("total-score").textContent = total;
  $("mcq-score").textContent = `${mcqScore}／${mcqData.length}`;
  $("blank-score").textContent = `${blankScore}／${blanks.length}`;
  $("match-score").textContent = `${matchScore}／${matches.length}`;
  $("result-message").textContent = `你已完成全部 ${questions.length} 題。可在下方核對答案，或重新作答再挑戰。`;
  $("review-list").innerHTML = questions.map((item,i) => {
    const correct = item.type === "mcq" ? answers[i]===item.answer : String(answers[i]).trim()===item.answer;
    const title = item.type === "mcq" ? item.q : item.type === "blank" ? `${item.before}＿＿${item.after}` : `「${item.role}」對應哪項職責？`;
    const rightAnswer = item.type === "mcq" ? answerText(item,item.answer) : item.answer;
    return `<details class="review-item ${correct?"right":"wrong"}"><summary>第 ${i+1} 題 · ${correct?"答對":"待重溫"} · ${escapeHtml(title)}</summary><div class="review-detail"><p>你的答案：${escapeHtml(answerText(item,answers[i]))}</p><p>正確答案：${escapeHtml(rightAnswer)}</p>${item.exp?`<p>解析：${escapeHtml(item.exp)}</p>`:""}</div></details>`;
  }).join("");
  $("view-quiz").hidden = true;
  $("view-results").hidden = false;
  $("side-panel").hidden = true;
  $("quiz-layout").classList.add("results-mode");
  window.scrollTo({top:0,behavior:"auto"});
}

$("restart-quiz").addEventListener("click",() => {
  answers = Array(questions.length).fill(null);
  current = 0;
  $("view-results").hidden = true;
  $("view-quiz").hidden = false;
  $("side-panel").hidden = false;
  $("quiz-layout").classList.remove("results-mode");
  renderQuestion();
  window.scrollTo({top:0,behavior:"auto"});
});

renderQuestion();
