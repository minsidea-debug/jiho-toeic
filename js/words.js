'use strict';
/* ============================================================
   단어 외우기
   - 오늘의 단어(하루 10~50개, 난이도 초등·중등·고등·대학)
   - 5지선다 퀴즈 → 정답/오답 + 예문 + 품사 바꾼 예문
   - 틀린 단어 다시 풀기
   ============================================================ */

const WORD_LEVELS = { elem: '초등', middle: '중등', high: '고등', univ: '대학' };
const WORD_LEVEL_DESC = { elem: '기초 생활 단어', middle: '중학교 필수', high: '고교·토익 기본', univ: '토익 고득점·비즈니스' };
const WORDS = {}, WORDS_BY_LEVEL = {};
Object.keys(WORD_LEVELS).forEach(lv => {
  WORDS_BY_LEVEL[lv] = [];
  ((window.TOEIC_WORDS || {})[lv] || []).forEach(([w, m, pos, ex, ko, forms, syns]) => {
    const id = lv + ':' + w;
    if (WORDS[id]) return;  // 같은 단어가 두 번 들어오면 처음 것만 사용
    const o = { id, level: lv, w, m, pos, ex, ko, forms: forms || [], syns: syns || null,
      senses: meaningTokens(m) };
    WORDS[id] = o;
    WORDS_BY_LEVEL[lv].push(o);
  });
});
// 두 단어의 뜻이 같거나 한쪽이 다른 쪽을 포함하면(예: 면제 / 면제된) 겹친다고 봄
function sensesOverlap(a, b) {
  return a.senses.some(s => b.senses.some(t => s === t || (s.length >= 2 && t.length >= 2 && (s.includes(t) || t.includes(s)))));
}
// 뜻을 낱말 단위로 나눔: "옮기다, 이사하다" → ["옮기다", "이사하다"]  (괄호 설명은 빼고 비교)
function meaningTokens(m) {
  return String(m).split(/[,;/·]/).map(s => s.replace(/\(.*?\)/g, '').replace(/\s+/g, '').replace(/[~…]/g, '')).filter(Boolean);
}

/* ---------- 오늘의 단어 목록 만들기 ---------- */
function getWordDay() {
  const ws = Store.data.wordSettings, lv = ws.level, bank = WORDS_BY_LEVEL[lv] || [];
  let day = Store.data.wordDays[lv];
  if (!day || day.date !== today()) day = { date: today(), ids: [], results: {} };
  const want = Math.min(ws.daily, bank.length);

  if (day.ids.length < want) {
    const inDay = new Set(day.ids);
    // 1) 아직 한 번도 안 본 새 단어
    //    (목록 순서 = 자주 쓰이는 단어부터. 하루 안에서는 섞어서 출제)
    let add = shuffle(bank.filter(w => !Store.data.words[w.id] && !inDay.has(w.id))
      .slice(0, want - day.ids.length)).map(w => w.id);
    // 2) 새 단어가 모자라면 정답률 낮은 단어로 복습
    if (day.ids.length + add.length < want) {
      const acc = w => { const a = Store.data.words[w.id]; return a.c / a.n; };
      const review = bank.filter(w => Store.data.words[w.id] && !inDay.has(w.id) && !add.includes(w.id))
        .sort((a, b) => acc(a) - acc(b) || Store.data.words[a.id].at - Store.data.words[b.id].at);
      add = add.concat(review.slice(0, want - day.ids.length - add.length).map(w => w.id));
    }
    day.ids = day.ids.concat(add);
  } else if (day.ids.length > want) {
    // 수량을 줄이면: 이미 푼 단어는 남기고 안 푼 단어부터 뺌
    const done = day.ids.filter(id => id in day.results);
    const rest = day.ids.filter(id => !(id in day.results));
    day.ids = done.concat(rest).slice(0, Math.max(want, done.length));
  }
  Store.setWordDay(lv, day);
  return day;
}

/* ---------- 도우미 ---------- */
// 예문 속 해당 단어(변화형 포함)를 형광펜 표시
function hl(sentence, word) {
  const base = String(word).split(/[\s(]/)[0].toLowerCase();
  const stem = base.length > 4 && /[ey]$/.test(base) ? base.slice(0, -1) : base;
  const re = new RegExp('\\b(' + stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[a-z]*)', 'gi');
  return esc(sentence).replace(re, '<mark>$1</mark>');
}
// 발음 듣기 (기기에 내장된 음성 사용)
function speak(text) {
  if (!('speechSynthesis' in window)) { alert('이 기기에서는 발음 듣기를 지원하지 않아요.'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = 0.9;
  const v = speechSynthesis.getVoices().find(x => /^en[-_]US/i.test(x.lang));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
// 퀴즈 방향
const WORD_DIRS = { en2ko: '영어 → 한국어', ko2en: '한국어 → 영어', mix: '섞어서' };
const WORD_DIR_DESC = { en2ko: '영어를 보고 뜻 고르기', ko2en: '뜻을 보고 영어 고르기', mix: '두 방향을 번갈아' };

// 보기 5개: 정답 단어 + 같은 난이도의 다른 단어 4개 (같은 품사 우선)
//  → { dir, ids: [단어ID 5개], ans: 정답 위치 }
//  정답과 뜻이 겹치거나 유사 단어인 것은 보기에서 제외 → 정답이 두 개가 되는 일 방지
function buildChoices(word, dir) {
  const synWords = new Set(synonymsOf(word).map(([s]) => s.toLowerCase()));
  const clash = w => w.id === word.id || w.w.toLowerCase() === word.w.toLowerCase() || synWords.has(w.w.toLowerCase())
    || sensesOverlap(w, word) || synonymsOf(w).some(([s]) => s.toLowerCase() === word.w.toLowerCase());
  const pool = (WORDS_BY_LEVEL[word.level] || []).filter(w => !clash(w));
  const ordered = shuffle(pool.filter(w => w.pos === word.pos)).concat(shuffle(pool.filter(w => w.pos !== word.pos)));
  // 보기끼리도 뜻이 겹치지 않게
  const picked = [];
  for (const w of ordered) {
    if (picked.length >= 4) break;
    if (!picked.some(p => sensesOverlap(p, w))) picked.push(w);
  }
  const ids = shuffle([word.id, ...picked.map(w => w.id)]);
  return { dir, ids, ans: ids.indexOf(word.id) };
}
const isRight = id => W.choices[id] != null && W.picks[id] === W.choices[id].ans;

// 유사 단어: 단어 데이터의 7번째 칸 → 없으면 data/word_synonyms.js
const synonymsOf = word => word.syns || (window.TOEIC_SYNONYMS || {})[String(word.w).toLowerCase()] || [];

/* ============================================================
   단어 홈
   ============================================================ */
Views.words = () => {
  const ws = Store.data.wordSettings, lv = ws.level, day = getWordDay();
  const total = day.ids.length;
  const answered = day.ids.filter(id => id in day.results);
  const correct = answered.filter(id => day.results[id]).length;
  const finished = total > 0 && answered.length >= total;
  const todayWrongNow = day.ids.filter(id => Store.data.wordWrong.includes(id));
  const wrongN = Store.data.wordWrong.filter(id => WORDS[id]).length;
  const newLeft = WORDS_BY_LEVEL[lv].filter(w => !Store.data.words[w.id]).length;

  // 난이도 선택 (진도 포함)
  const levelTabs = Object.keys(WORD_LEVELS).map(k => {
    const b = WORDS_BY_LEVEL[k], learned = b.filter(w => Store.data.words[w.id]).length;
    const pct = b.length ? Math.round(learned / b.length * 100) : 0;
    return `<button class="level-tab ${k === lv ? 'on' : ''}" data-act="wlevel" data-arg="${k}">
      <b>${WORD_LEVELS[k]}</b><small>${WORD_LEVEL_DESC[k]}</small>
      <span class="lv-prog"><i style="width:${pct}%"></i></span><small>${learned} / ${b.length}개 학습</small>
    </button>`;
  }).join('');
  const dirTabs = Object.keys(WORD_DIRS).map(k =>
    `<button class="${k === ws.dir ? 'on' : ''}" data-act="wdir" data-arg="${k}" title="${WORD_DIR_DESC[k]}">${WORD_DIRS[k]}</button>`).join('');

  $view.innerHTML = `
    <header class="page-head"><h1>🔤 단어 외우기</h1><p class="muted">매일 새 단어를 5지선다로 외워요. 틀린 단어는 맞힐 때까지 다시!</p></header>
    <section class="card">
      <div class="label-row"><b>📶 난이도</b><span class="muted small">고르면 오늘의 단어가 그 수준으로 바뀌어요 (난이도마다 진도는 따로 저장)</span></div>
      <div class="level-tabs">${levelTabs}</div>
      <div class="label-row" style="margin-top:16px"><b>🔀 문제 방향</b><span class="muted small">${WORD_DIR_DESC[ws.dir]}</span></div>
      <div class="tabs dir-tabs">${dirTabs}</div>
    </section>
    <section class="card">
      <div class="row wrap" style="margin:0">
        <div><div class="muted small">오늘의 단어 · ${WORD_LEVELS[lv]} · ${WORD_DIRS[ws.dir]}</div><div class="stat"><div class="big">${answered.length}<small> / ${total}개</small></div></div></div>
        <div class="muted small">정답 ${correct} · 오답 ${answered.length - correct}</div>
      </div>
      <div class="bar"><i style="width:${total ? answered.length / total * 100 : 0}%"></i></div>
      ${!finished
        ? `<button class="btn primary big" data-act="wstart">${answered.length ? `이어서 하기 (${total - answered.length}개 남음) →` : '오늘의 단어 시작 →'}</button>`
        : `<div class="ok-text">🎉 오늘의 단어를 모두 풀었어요!</div>
           <div class="row wrap" style="justify-content:flex-start">
             ${todayWrongNow.length ? `<button class="btn primary" data-act="wtodayWrong">❌ 오늘 틀린 단어 ${todayWrongNow.length}개 다시 풀기</button>` : ''}
             <button class="btn" data-act="wagain">🔁 오늘 단어 한 번 더</button>
           </div>`}
      ${newLeft < ws.daily ? `<p class="small muted">이 난이도의 새 단어가 ${newLeft}개 남았어요. 부족한 만큼은 정답률 낮은 단어로 복습해요.</p>` : ''}
    </section>
    <section class="grid2">
      <button class="card action" data-act="wwrong" ${wrongN ? '' : 'disabled'}><span class="ico">❌</span><b>틀린 단어 복습</b><span>${wrongN ? wrongN + '개 남음 · 맞히면 빠져요' : '틀린 단어가 없어요'}</span></button>
      <button class="card action" data-act="nav" data-arg="#/vocab"><span class="ico">📒</span><b>내 단어장</b><span>담아둔 단어 ${Store.data.vocab.length}개 · 플래시카드</span></button>
    </section>
    <section class="card form">
      <div class="label">⚙️ 하루 단어 수: <b class="pri" id="wdailyVal">${ws.daily}개</b></div>
      <input type="range" id="wdaily" class="range" min="10" max="50" step="5" value="${ws.daily}">
      <div class="range-marks"><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span></div>
      <p class="small muted">바꾸면 오늘의 단어 수가 바로 맞춰져요. 이미 푼 단어는 그대로 유지됩니다.</p>
    </section>`;

  const slider = document.getElementById('wdaily');
  slider.addEventListener('input', () => { document.getElementById('wdailyVal').textContent = slider.value + '개'; });
  slider.addEventListener('change', () => { Store.setWordSettings({ daily: +slider.value }); rerenderWords(); });
};
function rerenderWords() { const y = window.scrollY; Views.words(); window.scrollTo(0, y); }

/* ============================================================
   5지선다 퀴즈
   ============================================================ */
let W = null;
function startWordQuiz(title, ids, kind) {
  ids = ids.filter(id => WORDS[id]);
  if (!ids.length) { alert('풀 단어가 없어요.'); return; }
  W = { title, kind, ids, idx: 0, picks: {}, choices: {}, done: false, dir: Store.data.wordSettings.dir || 'en2ko' };
  go('#/wordquiz');
}

Views.wordquiz = () => {
  if (!W) return go('#/words');
  if (W.done) return go('#/wordresult');
  renderWordQuiz();
};

function renderWordQuiz() {
  const id = W.ids[W.idx], word = WORDS[id], n = W.ids.length;
  if (!W.choices[id]) {
    const dir = W.dir === 'mix' ? (Math.random() < 0.5 ? 'en2ko' : 'ko2en') : W.dir;
    W.choices[id] = buildChoices(word, dir);
  }
  const ch = W.choices[id], ko2en = ch.dir === 'ko2en';
  const pick = W.picks[id], answered = pick != null;

  const btns = ch.ids.map((oid, i) => {
    const o = WORDS[oid];
    let cls = 'choice' + (ko2en ? ' en' : '');
    if (answered) { if (i === ch.ans) cls += ' correct'; else if (i === pick) cls += ' wrong'; }
    // 답한 뒤에는 각 보기의 반대쪽(영어↔뜻)도 보여줌
    const sub = answered ? `<small class="opt-sub">${esc(ko2en ? o.m : o.w)}</small>` : '';
    return `<button class="${cls}" data-act="wpick" data-arg="${i}" ${answered ? 'disabled' : ''}><span class="letter">${i + 1}</span><span>${esc(ko2en ? o.w : o.m)}${sub}</span></button>`;
  }).join('');

  const prompt = ko2en
    ? `<div class="wq-word ko">${esc(word.m)}</div>
       <p class="muted small center">알맞은 <b>영어 단어</b>를 고르세요<span class="desk-hint"> · 키보드 1~5</span></p>`
    : `<div class="wq-word">${esc(word.w)} <button class="speak" data-act="speak" data-arg="${esc(word.w)}" title="발음 듣기">🔊</button></div>
       <p class="muted small center">알맞은 <b>뜻</b>을 고르세요<span class="desk-hint"> · 키보드 1~5</span></p>`;

  $view.innerHTML = `
    <div class="session-head">
      <div><b>${esc(W.title)}</b> <span class="pill">${WORD_LEVELS[word.level]}</span> <span class="pill">${ko2en ? '한 → 영' : '영 → 한'}</span></div>
      <span class="muted">${W.idx + 1} / ${n}</span>
      <button class="btn ghost small" data-act="wquit">그만하기</button>
    </div>
    <div class="bar thin"><i style="width:${Object.keys(W.picks).length / n * 100}%"></i></div>
    <div class="single">
      <section class="card">
        <div class="center"><span class="tag">${esc(word.pos)}</span></div>
        ${prompt}
        <div class="choices">${btns}</div>
        ${answered ? wordFeedback(word, pick === ch.ans, ko2en) : ''}
        ${answered ? `<div class="qnav"><button class="btn primary" data-act="wnext">${W.idx < n - 1 ? '다음 단어 →' : '결과 보기 ✔'}</button> <span class="small muted desk-hint">Enter</span></div>` : ''}
      </section>
    </div>`;
}

function wordFeedback(word, ok, ko2en) {
  const inVocab = Store.hasVocab(word.w);
  const forms = word.forms.map(([f, pos, ex, ko]) => `
    <div class="form-item">
      <div><b class="wf-word">${esc(f)}</b> <span class="tag">${esc(pos)}</span></div>
      <div class="ex-en">${hl(ex, f)} <button class="speak sm" data-act="speak" data-arg="${esc(ex)}" title="문장 듣기">🔊</button></div>
      <div class="ex-ko">${esc(ko)}</div>
    </div>`).join('');
  const syns = synonymsOf(word);
  const synPanel = syns.length ? `<div class="syn-panel" hidden>
      <div class="ex-label">🔁 「${esc(word.w)}」와 비슷한 단어</div>
      ${syns.map(([s, m]) => { const has = Store.hasVocab(s); return `<div class="syn-item">
        <b class="wf-word">${esc(s)}</b><span class="grow">${esc(m)}</span>
        <button class="speak sm" data-act="speak" data-arg="${esc(s)}" title="발음 듣기">🔊</button>
        <button class="chip ${has ? 'on' : ''}" data-act="addvocab" data-arg="${esc(s)}|${esc(m)}|유사 단어(${esc(word.w)})">${has ? '✓ 담음' : '+ 담기'}</button>
      </div>`; }).join('')}
      <p class="small muted">뜻이 비슷해도 쓰임(격식·어울리는 단어)이 조금씩 달라요.</p>
    </div>` : '';
  return `<div class="explain ${ok ? 'ok' : 'no'}">
    <div class="verdict">${ok ? '⭕ 정답!' : '❌ 오답! 정답은 「' + esc(ko2en ? word.w : word.m) + '」'}</div>
    <div class="wf-head"><b class="wf-word">${esc(word.w)}</b> <button class="speak sm" data-act="speak" data-arg="${esc(word.w)}" title="발음 듣기">🔊</button> <span class="tag">${esc(word.pos)}</span> <b>${esc(word.m)}</b></div>
    <div class="ex-block">
      <div class="ex-label">📖 예문</div>
      <div class="ex-en">${hl(word.ex, word.w)} <button class="speak sm" data-act="speak" data-arg="${esc(word.ex)}" title="문장 듣기">🔊</button></div>
      <div class="ex-ko">${esc(word.ko)}</div>
    </div>
    ${forms ? `<div class="ex-block"><div class="ex-label">🔄 품사를 바꿔 쓰면</div>${forms}</div>` : ''}
    <div class="chips">
      <button class="chip ${inVocab ? 'on' : ''}" data-act="addvocab" data-arg="${esc(word.w)}|${esc(word.m)}|단어 외우기">${inVocab ? '✓' : '+'} 내 단어장에 담기</button>
      ${syns.length ? `<button class="chip syn-btn" data-act="wsyn">🔁 유사 단어 ${syns.length}개 ▾</button>` : ''}
    </div>
    ${synPanel}
  </div>`;
}

function finishWordQuiz() { W.done = true; go('#/wordresult'); }

/* ---------- 결과 ---------- */
Views.wordresult = () => {
  if (!W || !W.done) return go('#/words');
  const n = W.ids.length;
  const wrong = W.ids.filter(id => !isRight(id)), right = W.ids.filter(isRight);
  const pct = Math.round(right.length / n * 100);
  const msg = pct === 100 ? '완벽해요! 🎉' : pct >= 80 ? '잘했어요! 👍' : pct >= 50 ? '조금만 더! 💪' : '틀린 단어를 다시 풀어봐요 📚';
  const row = id => { const w = WORDS[id]; return `<div class="card vocab-row"><b>${esc(w.w)}</b><span class="tag">${esc(w.pos)}</span><span class="grow">${esc(w.m)}</span>
    <button class="btn ghost small" data-act="speak" data-arg="${esc(w.w)}" title="발음 듣기">🔊</button></div>`; };
  $view.innerHTML = `
    <header class="page-head"><h1>결과 · ${esc(W.title)}</h1></header>
    <section class="card result-top">
      <div class="score">${right.length}<small> / ${n}</small></div>
      <div><div class="big-msg">${msg}</div><div class="muted">정답률 ${pct}%</div></div>
    </section>
    <div class="row wrap">
      ${wrong.length ? `<button class="btn primary" data-act="wretry">❌ 틀린 ${wrong.length}개 다시 풀기</button>` : '<span class="ok-text">모든 단어를 맞혔어요!</span>'}
      <button class="btn" data-act="nav" data-arg="#/words">단어 홈으로</button>
    </div>
    ${wrong.length ? `<h2>❌ 틀린 단어 <span class="muted small">${wrong.length}개</span></h2>${wrong.map(row).join('')}` : ''}
    ${right.length ? `<h2>⭕ 맞힌 단어 <span class="muted small">${right.length}개</span></h2>${right.map(row).join('')}` : ''}`;
};

/* ---------- 버튼 동작 ---------- */
Object.assign(Actions, {
  wstart() {
    const day = getWordDay();
    startWordQuiz(`오늘의 단어 · ${WORD_LEVELS[Store.data.wordSettings.level]}`, day.ids.filter(id => !(id in day.results)), 'today');
  },
  wagain() { startWordQuiz('오늘의 단어 한 번 더', shuffle(getWordDay().ids), 'again'); },
  wtodayWrong() {
    const day = getWordDay();
    startWordQuiz('오늘 틀린 단어 다시 풀기', shuffle(day.ids.filter(id => Store.data.wordWrong.includes(id))), 'retry');
  },
  wwrong() { startWordQuiz('틀린 단어 복습', shuffle(Store.data.wordWrong), 'retry'); },
  wretry() { startWordQuiz('틀린 단어 다시 풀기', shuffle(W.ids.filter(id => !isRight(id))), 'retry'); },
  wpick(i) {
    i = +i;
    const id = W.ids[W.idx];
    if (W.picks[id] != null) return;
    W.picks[id] = i;
    const ok = isRight(id);
    Store.recordWord(id, ok);
    if (window.Sound) (ok ? Sound.correct : Sound.wrong)();
    if (W.kind === 'today') {
      const lv = WORDS[id].level, day = Store.data.wordDays[lv];
      if (day && day.date === today() && !(id in day.results)) { day.results[id] = ok; Store.setWordDay(lv, day); }
    }
    renderWordQuiz();
    const ex = document.querySelector('.explain');
    if (ex && window.innerWidth < 800) ex.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },
  wnext() {
    if (W.idx < W.ids.length - 1) { W.idx++; renderWordQuiz(); window.scrollTo(0, 0); }
    else finishWordQuiz();
  },
  wquit() {
    if (!confirm('여기까지만 하고 결과를 볼까요? (푼 단어는 저장돼요)')) return;
    const done = W.ids.filter(id => W.picks[id] != null);
    if (!done.length) { W = null; go('#/words'); return; }
    W.ids = done; finishWordQuiz();
  },
  speak(text) { speak(text); },
  wlevel(k) { Store.setWordSettings({ level: k }); rerenderWords(); },
  wdir(k) { Store.setWordSettings({ dir: k }); rerenderWords(); },
  wsyn(arg, el) {
    const panel = el.closest('.explain').querySelector('.syn-panel');
    if (!panel) return;
    panel.hidden = !panel.hidden;
    el.classList.toggle('on', !panel.hidden);
    el.textContent = el.textContent.replace(/[▾▴]/, panel.hidden ? '▾' : '▴');
  },
});

/* ---------- 키보드: 1~5 고르기, Enter 다음 ---------- */
document.addEventListener('keydown', e => {
  if (!e.target.matches || e.target.matches('input, textarea') || e.ctrlKey || e.altKey || e.metaKey) return;
  if (e.target.tagName === 'BUTTON' && (e.key === 'Enter' || e.key === ' ')) return;
  if (currentRoute() !== 'wordquiz' || !W || W.done) return;
  if (/^[1-5]$/.test(e.key)) { e.preventDefault(); Actions.wpick(+e.key - 1); }
  else if (e.key === 'Enter' && W.picks[W.ids[W.idx]] != null) { e.preventDefault(); Actions.wnext(); }
});
