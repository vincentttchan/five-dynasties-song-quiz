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

const saqs = [
  {q:"宋太祖為何要大力推行中央集權？請結合五代政局說明。",hint:"可從武人專政、地方力量和政權更替三方面思考。",a:"五代時武人專政，地方軍事力量過強，武將常靠兵變篡位，政權更替頻繁。宋太祖本人亦由陳橋兵變取得帝位，因此希望把政治、經濟和軍事權力集中中央，防止地方或武將再次作亂，建立較長治久安的統治。"},
  {q:"列出兩項北宋削弱地方權力的措施，並解釋其作用。",hint:"措施與作用要一一對應。",a:"例如：（一）派文官任知州並設通判監察，分化地方行政權；（二）除必要開支外，地方稅收上繳中央，削弱地方財力；（三）精銳禁軍置於中央，地方只留老弱廂軍，削弱地方軍力。任答兩項並說明作用即可。"},
  {q:"「重文輕武」有助鞏固宋朝統治，但可能帶來甚麼問題？",hint:"嘗試從官員、軍事與國家發展三方面分析。",a:"重文輕武有助防止武將專權並提高文官地位，但也可能造成官員數目增加、行政效率下降和財政負擔；武將地位受壓亦可能削弱軍隊指揮與戰鬥力。這些都是中央集權政策可能付出的代價。"}
];

let current = 0;
let answers = Array(mcqData.length).fill(null);
let submitted = false;
const $ = id => document.getElementById(id);
const letters = ["A","B","C","D"];

function renderQuestion(){
  const item=mcqData[current];
  const answered=answers.filter(v=>v!==null).length;
  $("question-counter").textContent=`第 ${current+1} 題／共 ${mcqData.length} 題`;
  $("progress-label").textContent=`作答進度 ${Math.round(answered/mcqData.length*100)}%`;
  $("progress-fill").style.width=`${answered/mcqData.length*100}%`;
  $("question-title").textContent=item.q;
  $("options").innerHTML=item.options.map((text,index)=>{
    let state="";
    if(submitted){if(index===item.answer)state="correct";else if(index===answers[current])state="incorrect"}
    else if(index===answers[current])state="selected";
    return `<button class="option ${state}" data-option="${index}" aria-pressed="${answers[current]===index}" ${submitted?"disabled":""}><span class="option-letter">${letters[index]}</span><span>${text}</span></button>`;
  }).join("");
  const exp=$("explanation");
  if(submitted){exp.hidden=false;exp.innerHTML=`<strong>${answers[current]===item.answer?"答對了":`正確答案：${letters[item.answer]}`}</strong>${item.exp}`}else exp.hidden=true;
  $("prev-question").disabled=current===0;
  $("next-question").textContent=current===mcqData.length-1?"前往填空與配對":"下一題";
  document.querySelectorAll(".topic-list li").forEach((li,i)=>li.classList.toggle("active",i===item.topic));
  updateOverview(answered);
}

function updateOverview(answered=answers.filter(v=>v!==null).length){
  $("answered-count").textContent=answered;
  $("score-ring").style.setProperty("--ring",`${answered/mcqData.length*100}%`);
  $("score-stats").hidden=!submitted;
  if(submitted){
    const correct=answers.reduce((n,v,i)=>n+(v===mcqData[i].answer?1:0),0);
    $("correct-count").textContent=correct;
    $("wrong-count").textContent=answered-correct;
  }
  $("question-grid").innerHTML=mcqData.map((_,i)=>{
    const state=i===current?"current":answers[i]===null?"":submitted?(answers[i]===mcqData[i].answer?"right":"wrong"):"answered";
    return `<button class="q-jump ${state}" data-jump="${i}" aria-label="前往第 ${i+1} 題">${i+1}</button>`;
  }).join("");
}

$("options").addEventListener("click",e=>{const b=e.target.closest("[data-option]");if(!b||submitted)return;answers[current]=Number(b.dataset.option);$("submission-result").hidden=true;renderQuestion()});
$("question-grid").addEventListener("click",e=>{const b=e.target.closest("[data-jump]");if(b){current=Number(b.dataset.jump);renderQuestion();scrollToQuiz()}});
$("prev-question").addEventListener("click",()=>{if(current>0){current--;renderQuestion();scrollToQuiz()}});
$("next-question").addEventListener("click",()=>{if(current===mcqData.length-1){switchView("blanks");scrollToQuiz()}else{current++;renderQuestion();scrollToQuiz()}});
$("reset-mcq").addEventListener("click",resetQuiz);
$("restart-quiz").addEventListener("click",resetQuiz);
function scrollToQuiz(){if(window.innerWidth<700)document.querySelector(".main-panel").scrollIntoView({behavior:"smooth"})}

function renderPart2(){
  $("blank-list").innerHTML=blanks.map((b,i)=>`<label class="blank-item">${i+1}. ${b[0]}<input id="blank-${i}" aria-label="第 ${i+1} 題答案">${b[2]}<span id="blank-answer-${i}" class="field-answer" hidden></span></label>`).join("");
  const choices=matches.map(m=>m[1]);
  $("match-list").innerHTML=matches.map((m,i)=>`<label class="match-item"><strong>${i+1}. ${m[0]}</strong><span><select id="match-${i}"><option value="">請選擇正確職責</option>${choices.map(c=>`<option value="${c}">${c}</option>`).join("")}</select><span id="match-answer-${i}" class="field-answer" hidden></span></span></label>`).join("");
}

function gradePart2(){
  let score=0;
  blanks.forEach((b,i)=>{
    const input=$(`blank-${i}`), ok=input.value.trim()===b[1], answer=$(`blank-answer-${i}`);
    input.className=ok?"right":"wrong";input.readOnly=true;
    answer.hidden=ok;answer.textContent=`正確答案：${b[1]}`;
    if(ok)score++;
  });
  matches.forEach((m,i)=>{
    const select=$(`match-${i}`), ok=select.value===m[1], answer=$(`match-answer-${i}`);
    select.className=ok?"right":"wrong";select.disabled=true;
    answer.hidden=ok;answer.textContent=`正確答案：${m[1]}`;
    if(ok)score++;
  });
  $("part2-result").hidden=false;
  $("part2-result").textContent=`填空與配對：答對 ${score}／${blanks.length+matches.length} 項。`;
  return score;
}

function renderSAQ(){
  $("saq-list").innerHTML=saqs.map((s,i)=>`<article class="saq-card"><h3>${i+1}. ${s.q}</h3><p>${s.hint}</p><textarea id="saq-${i}" aria-label="簡答題 ${i+1}" placeholder="請在此整理你的答案……"></textarea><div id="reference-${i}" class="reference" hidden><strong>參考答案：</strong>${s.a}</div></article>`).join("");
}

function switchView(viewName){
  document.querySelectorAll(".mode-tab").forEach(tab=>{
    const active=tab.dataset.view===viewName;
    tab.classList.toggle("active",active);
    tab.setAttribute("aria-selected",String(active));
  });
  document.querySelectorAll(".section-view").forEach(view=>view.hidden=view.id!==`view-${viewName}`);
  document.querySelector(".side-panel").hidden=viewName!=="mcq";
}
document.querySelectorAll(".mode-tab").forEach(tab=>tab.addEventListener("click",()=>switchView(tab.dataset.view)));

function completionCounts(){
  return {
    mcq:answers.filter(v=>v===null).length,
    blanks:blanks.filter((_,i)=>!$(`blank-${i}`).value.trim()).length,
    matches:matches.filter((_,i)=>!$(`match-${i}`).value).length,
    saqs:saqs.filter((_,i)=>!$(`saq-${i}`).value.trim()).length
  };
}

document.addEventListener("input",()=>{if(!submitted)$("submission-result").hidden=true});
document.addEventListener("change",()=>{if(!submitted)$("submission-result").hidden=true});

$("submit-quiz").addEventListener("click",()=>{
  if(submitted)return;
  const missing=completionCounts();
  const missingTotal=Object.values(missing).reduce((sum,n)=>sum+n,0);
  const result=$("submission-result");
  result.hidden=false;
  if(missingTotal){
    result.textContent=`尚有 ${missingTotal} 項未作答：選擇題 ${missing.mcq}、填空 ${missing.blanks}、配對 ${missing.matches}、簡答 ${missing.saqs}。請完成後再交卷。`;
    return;
  }
  submitted=true;
  const mcqScore=answers.reduce((score,value,i)=>score+(value===mcqData[i].answer?1:0),0);
  const part2Score=gradePart2();
  saqs.forEach((_,i)=>{$(`saq-${i}`).readOnly=true;$(`reference-${i}`).hidden=false});
  result.textContent=`已完成！選擇題答對 ${mcqScore}／${mcqData.length} 題，填空與配對答對 ${part2Score}／${blanks.length+matches.length} 項。簡答題請對照下方參考答案自行檢視。`;
  $("submit-quiz").hidden=true;
  $("restart-quiz").hidden=false;
  $("reset-mcq").hidden=false;
  renderQuestion();
});

function resetQuiz(){
  submitted=false;
  current=0;
  answers=Array(mcqData.length).fill(null);
  renderPart2();renderSAQ();renderQuestion();
  $("part2-result").hidden=true;
  $("part2-result").textContent="";
  $("submission-result").hidden=true;
  $("submission-result").textContent="";
  $("submit-quiz").hidden=false;
  $("restart-quiz").hidden=true;
  $("reset-mcq").hidden=true;
  switchView("mcq");
  scrollToQuiz();
}

renderQuestion(); renderPart2(); renderSAQ();
