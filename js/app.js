'use strict';
/* ============================================================
   Jiho 토익공부 - 앱 동작
   화면(Views) / 버튼 동작(Actions) / 키보드 단축키
   ============================================================ */

/* ---------- 문제 데이터 정리 ---------- */
const SETS = {};   // 세트ID → { id, part, title, passage, ko, questions }
const Q = {};      // 문제ID → 문제 (setId, part 포함)
(window.TOEIC_SETS || []).forEach(set => {
  SETS[set.id] = set;
  set.questions.forEach((q, i) => { Object.assign(q, { setId: set.id, part: set.part, no: i + 1 }); Q[q.id] = q; });
});

const PART_INFO = {
  2: { name: 'Part 2', title: '질의응답', desc: '질문 듣고 알맞은 응답 고르기 (보기 3개)', icon: '💬', sec: 25, listen: true },
  5: { name: 'Part 5', title: '단문 빈칸 채우기', desc: '한 문장 속 빈칸 – 문법·어휘', icon: '✏️', sec: 30 },
  6: { name: 'Part 6', title: '장문 빈칸 채우기', desc: '지문 속 빈칸 4개 – 문장 삽입 포함', icon: '📄', sec: 45 },
  7: { name: 'Part 7', title: '독해', desc: '이메일·기사·메시지 읽고 답하기', icon: '📰', sec: 60 },
};
const LETTERS = ['A', 'B', 'C', 'D'];
const isListenPart = p => !!(PART_INFO[p] && PART_INFO[p].listen);
const LISTEN_PARTS = [1, 2, 3, 4];
const LISTEN_SOON = { 1: ['📷', '사진 묘사', '사진을 보고 알맞은 설명 고르기'], 3: ['👥', '짧은 대화', '2~3명의 대화 듣고 3문제'], 4: ['📢', '짧은 담화', '안내방송·메시지 듣고 3문제'] };

/* ---------- 도우미 ---------- */
const $view = document.getElementById('view');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmtTime = s => { const neg = s < 0; s = Math.abs(Math.round(s)); return (neg ? '-' : '') + Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
const today = () => Store.dayKey(Date.now());
const qidsOfPart = p => Object.values(Q).filter(q => q.part === p).map(q => q.id);
function go(hash) { if (location.hash === hash) router(); else location.hash = hash; }

function overallAcc() {
  let n = 0, c = 0;
  Object.values(Store.data.attempts).forEach(a => { n += a.n; c += a.c; });
  return n ? Math.round(c / n * 100) : '-';
}
function streak() {
  const daily = Store.data.daily;
  let t = Date.now(), count = 0;
  if (!daily[Store.dayKey(t)]) t -= 86400000;          // 오늘 아직 안 했으면 어제부터 계산
  while (daily[Store.dayKey(t)]) { count++; t -= 86400000; }
  return count;
}
function partStat(p) {
  const ids = qidsOfPart(p);
  let solved = 0, n = 0, c = 0;
  ids.forEach(id => { const a = Store.data.attempts[id]; if (a) { solved++; n += a.n; c += a.c; } });
  return { total: ids.length, solved, acc: n ? Math.round(c / n * 100) : null };
}
function userName() { return (Store.data.settings.userName || '').trim() || '학습자'; }
// Today's Quote: 날짜마다 1,000개 중 하나 (같은 날엔 같은 명언)
function todaysQuote() {
  const Qs = window.TOEIC_QUOTES, QA = window.TOEIC_QUOTE_AUTHORS;
  if (!Qs || !Qs.length) return '';
  const d = new Date(), day = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
  const [text, ai] = Qs[(day * 7) % Qs.length], [en, ko, bio] = QA[ai];
  return `<section class="card quote-card">
      <div class="quote-head"><span class="quote-label">💬 Today's Quote</span><span class="muted small">${cheer()}</span></div>
      <p class="quote-line en">“${esc(text)}” <span class="quote-by">by ${esc(en)}</span></p>
      <p class="quote-bio small"><b>${esc(ko)}</b>: ${esc(bio)}</p>
    </section>`;
}
// 명언 한 줄 맞추기: 넘치면 글자를 줄여 한 줄에 들어가게
function fitQuote() {
  const el = document.querySelector('.quote-line'); if (!el) return;
  el.style.fontSize = '';
  let fs = parseFloat(getComputedStyle(el).fontSize);
  const min = innerWidth <= 800 ? 999 : 11;  // 폰(800px 이하)은 글자를 줄이지 않고 줄바꿈
  while (el.scrollWidth > el.clientWidth && fs > min) { fs -= 0.5; el.style.fontSize = fs + 'px'; }
  el.classList.toggle('wrap', el.scrollWidth > el.clientWidth);
}
window.addEventListener('resize', fitQuote);
function cheer() {
  const list = ['오늘도 한 문제씩, 꾸준함이 점수를 만듭니다!', '틀린 문제가 곧 실력이 됩니다 💪', '10분만 집중해봐요!', '어제의 나보다 한 문제 더!', '목표 점수까지 화이팅! 🔥'];
  return list[new Date().getDate() % list.length];
}

/* ---------- 라우터 ---------- */
const Views = {};
const NAV_MAP = { setup: 'reading', session: 'reading', result: 'reading', flash: 'words', vocab: 'words', wordquiz: 'words', wordresult: 'words' };
let timerId = null;
function currentRoute() { return location.hash.replace(/^#\/?/, '').split('/')[0] || 'home'; }
function router() {
  clearInterval(timerId); timerId = null;
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  const name = Views[parts[0]] ? parts[0] : 'home';
  if (window.Listen) Listen.stop();
  let navKey = NAV_MAP[name] || name;
  if (['setup', 'session', 'result'].includes(name) && isListenPart(name === 'setup' ? +parts[1] : S && S.part)) navKey = 'listening';
  document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('active', a.dataset.nav === navKey));
  $view.innerHTML = '';
  Views[name](parts[1]);
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', () => { if (window.Sound) Sound.beep(); router(); });

/* ============================================================
   홈
   ============================================================ */
Views.home = () => {
  const d = Store.data;
  const todayN = (d.daily[today()] || { n: 0 }).n;
  const goal = d.settings.goal;
  const pct = Math.min(100, Math.round(todayN / goal * 100));
  const wrongN = d.wrong.filter(id => Q[id]).length;
  const wd = getWordDay(), wDone = wd.ids.filter(id => id in wd.results).length;
  $view.innerHTML = `
    <header class="page-head"><h1>안녕하세요, ${esc(userName())}님 👋</h1>
      <button class="btn ghost small mobile-only" data-act="nav" data-arg="#/settings">⚙️ 설정 (테마·글꼴·백업)</button></header>
    ${todaysQuote()}
    <section class="grid3 home-stats">
      <div class="card stat"><div class="label">오늘 푼 문제</div><div class="big">${todayN}<small> / ${goal}</small></div>
        <div class="bar"><i style="width:${pct}%"></i></div>${todayN >= goal ? '<div class="ok-text">🎉 오늘 목표 달성!</div>' : ''}</div>
      <div class="card stat"><div class="label">연속 학습</div><div class="big">${streak()}<small>일</small></div></div>
      <div class="card stat"><div class="label">전체 정답률</div><div class="big">${overallAcc()}<small>%</small></div></div>
    </section>
    <h2>바로 시작</h2>
    <section class="grid2 home-quick">
      <button class="card action" data-act="quick" data-arg="p5"><span class="ico">✏️</span><b>Part 5 · 10문제</b><span>가볍게 문법·어휘 연습</span></button>
      <button class="card action" data-act="quick" data-arg="mock"><span class="ico">⏱️</span><b>미니 모의고사</b><span>Part 5·6·7 섞어서 실전처럼</span></button>
      <button class="card action" data-act="quick" data-arg="wrong" ${wrongN ? '' : 'disabled'}><span class="ico">❌</span><b>오답 복습</b><span>${wrongN ? wrongN + '문제 남음' : '오답이 없어요'}</span></button>
      <button class="card action" data-act="nav" data-arg="#/words"><span class="ico">🔤</span><b>오늘의 단어 · ${WORD_LEVELS[Store.data.wordSettings.level]}</b><span>${wDone >= wd.ids.length && wd.ids.length ? '🎉 오늘 완료!' : `${wDone} / ${wd.ids.length}개 학습`}</span></button>
    </section>
    <section class="home-quick"><button class="card action" data-act="quick" data-arg="p2"><span class="ico">🎧</span><b>리스닝 Part 2 · 10문제</b><span>질문을 듣고 알맞은 응답 고르기</span></button></section>`;
  fitQuote();
};

/* ============================================================
   리딩 메뉴
   ============================================================ */
Views.reading = () => {
  const cards = [5, 6, 7].map(p => {
    const info = PART_INFO[p], st = partStat(p);
    const prog = st.total ? Math.round(st.solved / st.total * 100) : 0;
    return `<button class="card part" data-act="setup" data-arg="${p}">
      <div class="part-top"><span class="ico">${info.icon}</span><span class="badge">${info.name}</span></div>
      <b>${info.title}</b><span class="muted">${info.desc}</span>
      <div class="bar"><i style="width:${prog}%"></i></div>
      <span class="small muted">${st.solved} / ${st.total}문제 풀이 · 정답률 ${st.acc == null ? '-' : st.acc + '%'}</span>
    </button>`;
  }).join('');
  $view.innerHTML = `
    <header class="page-head"><h1>📖 리딩</h1><p class="muted">파트를 골라 연습하세요. 연습 모드는 바로 해설이, 실전 모드는 끝나고 채점됩니다.</p></header>
    <section class="grid3">${cards}</section>
    <h2>실전 연습</h2>
    <section class="grid2">
      <button class="card action" data-act="quick" data-arg="mock"><span class="ico">⏱️</span><b>미니 모의고사</b><span>Part 5 10문제 + Part 6 1지문 + Part 7 2지문 · 타이머</span></button>
      <button class="card action" data-act="quick" data-arg="wrong"><span class="ico">❌</span><b>오답만 다시 풀기</b><span>틀린 문제를 맞힐 때까지</span></button>
    </section>`;
};

/* ---------- 세션 설정 ---------- */
Views.setup = arg => {
  const p = +arg;
  if (!PART_INFO[p]) return go('#/reading');
  const info = PART_INFO[p];
  const counts = p === 5 || p === 2
    ? [['10', '10문제'], ['20', '20문제'], ['all', '전체']]
    : [['1', '지문 1개'], ['2', '지문 2개'], ['all', '전체 지문']];
  $view.innerHTML = `
    <header class="page-head"><h1>${info.icon} ${info.name} · ${info.title}</h1><p class="muted">${info.desc}</p></header>
    <section class="card form">
      <div class="field"><div class="label">문제 수</div>
        <div class="seg">${counts.map(([v, t], i) => `<label><input type="radio" name="cnt" value="${v}" ${i === 0 ? 'checked' : ''}><span>${t}</span></label>`).join('')}</div>
      </div>
      <div class="field"><div class="label">모드</div>
        <div class="seg">
          <label><input type="radio" name="mode" value="practice" checked><span>📘 연습 모드<small>한 문제마다 정답·해설</small></span></label>
          <label><input type="radio" name="mode" value="test"><span>⏱️ 실전 모드<small>타이머 · 끝나고 채점</small></span></label>
        </div>
      </div>
      <p class="small muted">안 푼 문제가 먼저 나오고, 다 풀었으면 섞어서 다시 나옵니다.</p>
      ${info.listen ? '<p class="small muted">🔊 소리를 켜 주세요. 기기에 있는 영어 목소리로 읽어 줍니다. (연습 모드: 정답 확인 후 대본·해석 공개)</p>' : ''}
      <button class="btn primary big" data-act="start" data-arg="${p}">시작하기 →</button>
    </section>`;
};

function pickQids(part, count) {
  const sets = Object.values(SETS).filter(s => s.part === part);
  const seen = s => s.questions.some(q => Store.data.attempts[q.id]);
  const ordered = [...shuffle(sets.filter(s => !seen(s))), ...shuffle(sets.filter(seen))];
  const chosen = count === 'all' ? ordered : ordered.slice(0, +count);
  return chosen.flatMap(s => s.questions.map(q => q.id));
}

/* ============================================================
   문제 풀이 세션
   ============================================================ */
let S = null;  // 현재 세션

function startSession({ title, part, qids, mode }) {
  if (!qids.length) { alert('풀 문제가 없습니다.'); return; }
  S = {
    title, part, mode, qids, idx: 0, picks: {}, checked: {}, startAt: Date.now(), done: false,
    limit: qids.reduce((s, id) => s + PART_INFO[Q[id].part].sec, 0),
  };
  go('#/session');
}
const curId = () => S.qids[S.idx];

Views.session = () => {
  if (!S) return go('#/reading');
  if (S.done) return go('#/result');
  renderSession();
  timerId = setInterval(updateTimer, 1000);
};

function renderPassage(set, q) {
  return esc(set.passage).replace(/\[\[(\d+)\]\]/g, (m, n) =>
    `<span class="blank ${q && q.blank == n ? 'current' : ''}">(${n}) ________</span>`);
}

function vocabChips(vocab, src) {
  if (!vocab || !vocab.length) return '';
  return `<div class="chips"><span class="small muted">단어장에 추가:</span>${vocab.map(([w, m]) => {
    const has = Store.hasVocab(w);
    return `<button class="chip ${has ? 'on' : ''}" data-act="addvocab" data-arg="${esc(w)}|${esc(m)}|${esc(src || '')}">${has ? '✓' : '+'} ${esc(w)} <small>${esc(m)}</small></button>`;
  }).join('')}</div>`;
}

function explainBox(q, pick) {
  const ok = pick === q.answer;
  const set = SETS[q.setId];
  return `<div class="explain ${ok ? 'ok' : 'no'}">
    <div class="verdict">${ok ? '⭕ 정답입니다!' : (pick == null ? '⚪ 풀지 않은 문제 · 정답은 (' + LETTERS[q.answer] + ')' : '❌ 아쉬워요! 정답은 (' + LETTERS[q.answer] + ')')}</div>
    ${q.type ? `<span class="tag">${esc(q.type)}</span>` : ''}
    <p>${esc(q.explain)}</p>
    ${q.ko && !isListenPart(q.part) ? `<p class="ko">🇰🇷 ${esc(q.ko)}</p>` : ''}
    ${set.ko ? `<details><summary>지문 해석 보기</summary><p class="ko pre">${esc(set.ko)}</p></details>` : ''}
    ${vocabChips(q.vocab, q.id)}
  </div>`;
}

function renderSession() {
  const id = curId(), q = Q[id], set = SETS[q.setId];
  const test = S.mode === 'test', n = S.qids.length;
  const checked = S.checked[id], pick = S.picks[id];
  const answered = Object.keys(test ? S.picks : S.checked).length;

  const listen = isListenPart(q.part), reveal = listen && !test && checked;
  const choices = q.choices.map((c, i) => {
    let cls = 'choice';
    if (!test && checked) { if (i === q.answer) cls += ' correct'; else if (i === pick) cls += ' wrong'; }
    else if (pick === i) cls += ' picked';
    const label = listen && !reveal ? `<span class="muted">응답 (${LETTERS[i]})</span>` : `<span>${esc(c)}</span>`;
    return `<button class="${cls}" data-act="pick" data-arg="${i}" ${!test && checked ? 'disabled' : ''}><span class="letter">${LETTERS[i]}</span>${label}</button>`;
  }).join('');

  const passage = set.passage
    ? `<article class="card passage">${set.title ? `<div class="passage-title">${esc(set.title)}</div>` : ''}<div class="passage-body">${renderPassage(set, q)}</div></article>`
    : '';

  let nav;
  if (test) {
    nav = `<div class="row">
        <button class="btn" data-act="prev" ${S.idx === 0 ? 'disabled' : ''}>← 이전</button>
        ${S.idx < n - 1 ? '<button class="btn primary" data-act="next">다음 →</button>' : '<button class="btn primary" data-act="submit">제출하기 ✔</button>'}
      </div>
      <div class="qgrid">${S.qids.map((x, i) => `<button class="${i === S.idx ? 'cur' : ''} ${S.picks[x] != null ? 'done' : ''}" data-act="goto" data-arg="${i}">${i + 1}</button>`).join('')}</div>
      ${S.idx < n - 1 ? '<button class="btn ghost small" data-act="submit">답안 제출하기</button>' : ''}`;
  } else {
    nav = checked
      ? `<button class="btn primary" data-act="next">${S.idx < n - 1 ? '다음 문제 →' : '결과 보기 ✔'}</button> <span class="small muted">Enter</span>`
      : `<p class="small muted">보기를 클릭하거나 키보드 <kbd>1</kbd>~<kbd>4</kbd> 또는 <kbd>A</kbd>~<kbd>D</kbd>를 누르세요.</p>`;
  }

  $view.innerHTML = `
    <div class="session-head">
      <div><b>${esc(S.title)}</b> <span class="pill">${test ? '실전 모드' : '연습 모드'}</span></div>
      <div class="timer" data-timer></div>
      <button class="btn ghost small" data-act="quit">그만하기</button>
    </div>
    <div class="bar thin"><i style="width:${answered / n * 100}%"></i></div>
    <div class="${passage ? 'split' : 'single'}">
      ${passage}
      <section class="card qpanel">
        <div class="qnum">${PART_INFO[q.part].name} · 문제 ${S.idx + 1} / ${n}</div>
        ${listen ? listenBox(q, reveal) : `<div class="qtext">${esc(q.q)}</div>`}
        <div class="choices">${choices}</div>
        ${!test && checked ? explainBox(q, pick) : ''}
        <div class="qnav">${nav}</div>
      </section>
    </div>`;
  updateTimer();
  // 리스닝: 새 문제로 넘어오면 자동 재생 (같은 문제를 다시 그릴 때는 재생 안 함)
  if (listen && S.playedId !== id) { S.playedId = id; Listen.part2(q); }
  const cur = document.querySelector('.blank.current');
  if (cur) cur.scrollIntoView({ block: 'nearest' });
}

/* ---------- 리스닝: 재생 버튼 · 속도 · (정답 후) 대본 ---------- */
const RATES = [[0.8, '0.8배'], [1, '1.0배'], [1.2, '1.2배']];
function listenBox(q, reveal) {
  const r = Store.data.settings.listenRate || 1;
  return `<div class="listen-box">
    <div class="listen-guide">🎧 질문과 응답 3개를 듣고 가장 알맞은 응답을 고르세요.</div>
    <div class="listen-ctrl">
      <button class="btn primary" data-act="lplay">${Listen.isPlaying() ? '⏹ 멈추기' : '▶ 다시 듣기'}</button>
      <div class="tabs small-tabs">${RATES.map(([v, t]) => `<button class="${v === r ? 'on' : ''}" data-act="lrate" data-arg="${v}">${t}</button>`).join('')}</div>
    </div>
    ${reveal ? `<div class="script"><div class="small muted">📜 대본</div><div class="script-q"><b>Q.</b> ${esc(q.q)}<div class="ko small">${esc(q.ko || '')}</div></div>
      ${q.choices.map((c, i) => `<div class="script-a ${i === q.answer ? 'ans' : ''}"><b>(${LETTERS[i]})</b> ${esc(c)}<div class="ko small">${esc((q.choicesKo || [])[i] || '')}</div></div>`).join('')}</div>` : ''}
  </div>`;
}
if (window.Listen) Listen.onChange(() => { const b = document.querySelector('[data-act="lplay"]'); if (b) b.textContent = Listen.isPlaying() ? '⏹ 멈추기' : '▶ 다시 듣기'; });

function updateTimer() {
  const el = document.querySelector('[data-timer]');
  if (!el || !S) return;
  const elapsed = (Date.now() - S.startAt) / 1000;
  if (S.mode === 'test') {
    const remain = S.limit - elapsed;
    el.textContent = remain >= 0 ? '⏱ 남은 시간 ' + fmtTime(remain) : '⏰ 시간 초과 ' + fmtTime(-remain);
    el.classList.toggle('over', remain < 0);
  } else {
    el.textContent = '⏱ ' + fmtTime(elapsed);
  }
}

function finishSession() {
  if (S.mode === 'test') S.qids.forEach(id => Store.recordAnswer(id, S.picks[id] === Q[id].answer, S.picks[id]));
  S.correct = S.qids.filter(id => S.picks[id] === Q[id].answer).length;
  S.done = true; S.endAt = Date.now();
  Store.addHistory({ at: S.endAt, title: S.title, mode: S.mode, total: S.qids.length, correct: S.correct, sec: Math.round((S.endAt - S.startAt) / 1000) });
  go('#/result');
}

/* ---------- 결과 ---------- */
Views.result = () => {
  if (!S || !S.done) return go('#/reading');
  const n = S.qids.length, c = S.correct, pct = Math.round(c / n * 100);
  const sec = Math.round((S.endAt - S.startAt) / 1000);
  const wrongIds = S.qids.filter(id => S.picks[id] !== Q[id].answer);
  const msg = pct >= 90 ? '훌륭해요! 🎉' : pct >= 70 ? '잘했어요! 👍' : pct >= 50 ? '조금만 더! 💪' : '오답노트로 복습해봐요 📚';
  const rows = S.qids.map((id, i) => {
    const q = Q[id], set = SETS[q.setId], p = S.picks[id], ok = p === q.answer;
    return `<details class="card review ${ok ? 'ok' : 'no'}">
      <summary><span>${ok ? '⭕' : '❌'}</span> <b>${i + 1}.</b> ${PART_INFO[q.part].name} <span class="muted small">내 답 ${p != null ? LETTERS[p] : '-'} · 정답 ${LETTERS[q.answer]}</span></summary>
      <div class="review-body">
        ${set.passage ? `<details><summary>지문 보기</summary><div class="passage-body">${renderPassage(set, q)}</div></details>` : ''}
        <div class="qtext">${esc(q.q)}${isListenPart(q.part) && q.ko ? `<div class="ko small">${esc(q.ko)}</div>` : ''}</div>
        ${isListenPart(q.part) ? `<button class="btn ghost small" data-act="lplayq" data-arg="${q.id}">🔊 다시 듣기</button>` : ''}
        <ol class="opts">${q.choices.map((ch, j) => `<li class="${j === q.answer ? 'ans' : j === p ? 'mine' : ''}">(${LETTERS[j]}) ${esc(ch)}</li>`).join('')}</ol>
        ${explainBox(q, p)}
      </div></details>`;
  }).join('');
  $view.innerHTML = `
    <header class="page-head"><h1>결과 · ${esc(S.title)}</h1></header>
    <section class="card result-top">
      <div class="score">${c}<small> / ${n}</small></div>
      <div><div class="big-msg">${msg}</div><div class="muted">정답률 ${pct}% · 걸린 시간 ${fmtTime(sec)}</div></div>
    </section>
    <div class="row wrap">
      ${wrongIds.length ? `<button class="btn primary" data-act="retrySession">❌ 틀린 ${wrongIds.length}문제 다시 풀기</button>` : ''}
      ${S.part ? `<button class="btn" data-act="setup" data-arg="${S.part}">같은 파트 더 풀기</button>` : ''}
      ${isListenPart(S.part) ? '<button class="btn" data-act="nav" data-arg="#/listening">리스닝 메뉴</button>' : '<button class="btn" data-act="nav" data-arg="#/reading">리딩 메뉴</button>'}
    </div>
    <h2>문제별 해설 <span class="small muted">(눌러서 펼치기)</span></h2>
    ${rows}`;
};

/* ============================================================
   오답노트
   ============================================================ */
Views.wrong = () => {
  const ids = Store.data.wrong.filter(id => Q[id]);
  if (!ids.length) {
    $view.innerHTML = `<header class="page-head"><h1>❌ 오답노트</h1></header>
      <section class="card empty">오답이 없어요 🎉<br><span class="muted">문제를 틀리면 자동으로 여기에 모이고, 다시 맞히면 사라집니다.</span></section>`;
    return;
  }
  const groups = [2, 5, 6, 7].map(p => {
    const list = ids.filter(id => Q[id].part === p);
    if (!list.length) return '';
    return `<h2>${PART_INFO[p].name} · ${PART_INFO[p].title} <span class="muted small">${list.length}문제</span>
        <button class="btn small" data-act="retryWrong" data-arg="${p}">이 파트만 다시 풀기</button></h2>
      ${list.map(id => {
        const q = Q[id], set = SETS[q.setId], a = Store.data.attempts[id] || { n: 0, c: 0 };
        return `<div class="card wrong-row">
          <div class="grow">${set.title ? `<div class="small muted">${esc(set.title)}</div>` : ''}<div>${esc(q.q)}</div>
          <div class="small muted">${q.type ? esc(q.type) + ' · ' : ''}${a.n}번 풀어 ${a.c}번 맞힘</div></div>
          <button class="btn ghost small" data-act="removeWrong" data-arg="${id}" title="오답노트에서 빼기">빼기</button>
        </div>`;
      }).join('')}`;
  }).join('');
  $view.innerHTML = `
    <header class="page-head"><h1>❌ 오답노트</h1><p class="muted">틀린 문제 ${ids.length}개 · 다시 풀어서 맞히면 자동으로 빠집니다.</p></header>
    <button class="btn primary big" data-act="retryWrong" data-arg="all">오답 전체 다시 풀기 →</button>
    ${groups}`;
};

/* ============================================================
   단어장
   ============================================================ */
let vocabFilter = 'learning';
Views.vocab = () => {
  const all = Store.data.vocab;
  const learning = all.filter(v => !v.known);
  const list = vocabFilter === 'learning' ? learning : vocabFilter === 'known' ? all.filter(v => v.known) : all;
  const ko2en = Store.data.settings.vocabDir === 'ko2en';   // 목록 배열: 영→한 / 한→영
  $view.innerHTML = `
    <button class="btn ghost small" data-act="nav" data-arg="#/words">← 단어 외우기</button>
    <header class="page-head"><h1>📒 내 단어장</h1><p class="muted">해설 화면의 단어 버튼을 누르거나 직접 추가하세요.</p></header>
    <section class="card form-inline">
      <input id="vw" placeholder="영어 단어 (예: deadline)" autocomplete="off">
      <input id="vm" placeholder="뜻 (예: 마감일)" autocomplete="off">
      <button class="btn primary" data-act="vadd">추가</button>
    </section>
    <div class="row wrap">
      <div class="tabs">
        <button class="${vocabFilter === 'learning' ? 'on' : ''}" data-act="vfilter" data-arg="learning">외우는 중 ${learning.length}</button>
        <button class="${vocabFilter === 'known' ? 'on' : ''}" data-act="vfilter" data-arg="known">외웠음 ${all.length - learning.length}</button>
        <button class="${vocabFilter === 'all' ? 'on' : ''}" data-act="vfilter" data-arg="all">전체 ${all.length}</button>
      </div>
      <div class="tabs">
        <button class="${ko2en ? '' : 'on'}" data-act="vdir" data-arg="en2ko">영 → 한</button>
        <button class="${ko2en ? 'on' : ''}" data-act="vdir" data-arg="ko2en">한 → 영</button>
      </div>
      <button class="btn primary" data-act="nav" data-arg="#/flash" ${all.length ? '' : 'disabled'}>🃏 플래시카드 시작</button>
    </div>
    ${list.length ? `<div class="vocab-list">${list.map(v => `
      <div class="card vocab-row ${v.known ? 'known' : ''}">
        ${ko2en ? `<b>${esc(v.m)}</b><span class="grow">${esc(v.w)}</span>` : `<b>${esc(v.w)}</b><span class="grow">${esc(v.m)}</span>`}
        <button class="btn small" data-act="vknown" data-arg="${v.id}">${v.known ? '↩ 다시 외우기' : '✓ 외웠음'}</button>
        <button class="btn ghost small" data-act="vdel" data-arg="${v.id}" title="삭제">🗑</button>
      </div>`).join('')}</div>`
      : '<section class="card empty">단어가 없어요.</section>'}`;
};

/* ---------- 플래시카드 ---------- */
// 발음기호(data/word_ipa.js) — 사전에 없는 단어(직접 추가한 단어 등)는 빈칸
const ipaOf = w => (window.TOEIC_IPA || {})[String(w).toLowerCase().trim()] || '';
let F = null;
Views.flash = () => {
  const all = Store.data.vocab;
  if (!all.length) return go('#/vocab');
  const learning = all.filter(v => !v.known);
  F = { deck: shuffle(learning.length ? learning : all), i: 0, flipped: false, know: 0, dont: 0 };
  renderFlash();
};
function renderFlash() {
  if (F.i >= F.deck.length) {
    $view.innerHTML = `<header class="page-head"><h1>🃏 플래시카드 완료!</h1></header>
      <section class="card result-top"><div class="score">${F.know}<small> / ${F.deck.length}</small></div>
      <div><div class="big-msg">알아요 ${F.know} · 몰라요 ${F.dont}</div><div class="muted">'알아요' 단어는 '외웠음'으로 옮겨졌어요.</div></div></section>
      <div class="row"><button class="btn primary" data-act="nav" data-arg="#/flash">한 번 더</button><button class="btn" data-act="nav" data-arg="#/vocab">단어장으로</button></div>`;
    return;
  }
  const v = F.deck[F.i];
  const ipa = ipaOf(v.w);
  $view.innerHTML = `
    <div class="session-head"><b>🃏 플래시카드</b><span class="muted">${F.i + 1} / ${F.deck.length}</span><button class="btn ghost small" data-act="nav" data-arg="#/vocab">그만하기</button></div>
    <div class="flashcard ${F.flipped ? 'flipped' : ''}" data-act="flip" role="button" tabindex="0">
      <div class="fw">${esc(v.w)}</div>
      ${F.flipped
        ? `<div class="f-ipa">${ipa ? `<span>/${esc(ipa)}/</span>` : ''}<button class="speak sm" data-act="speak" data-arg="${esc(v.w)}" title="발음 듣기">🔊</button></div>
           <div class="fm">${esc(v.m)}</div>`
        : `<button class="btn f-listen" data-act="speak" data-arg="${esc(v.w)}">🔊 듣기</button>
           <div class="small muted">카드를 클릭(또는 Space)해서 뜻 보기</div>`}
    </div>
    <div class="row center">
      <button class="btn big" data-act="fdont">😅 몰라요 <kbd>←</kbd></button>
      <button class="btn primary big" data-act="fknow">😎 알아요 <kbd>→</kbd></button>
    </div>`;
}

/* ============================================================
   통계
   ============================================================ */
Views.stats = () => {
  const d = Store.data;
  let n = 0, c = 0;
  Object.values(d.attempts).forEach(a => { n += a.n; c += a.c; });
  const days = Object.keys(d.daily).length;

  const partBars = [2, 5, 6, 7].map(p => {
    const st = partStat(p);
    return hbar(`${PART_INFO[p].name} ${PART_INFO[p].title}`, st.acc, `${st.solved}/${st.total}문제`);
  }).join('');

  const types = {};
  Object.entries(d.attempts).forEach(([id, a]) => {
    const q = Q[id]; if (!q || !q.type) return;
    const t = types[q.type] || (types[q.type] = { n: 0, c: 0 });
    t.n += a.n; t.c += a.c;
  });
  typeRows = Object.entries(types).map(([t, v]) => [t, Math.round(v.c / v.n * 100), v.n]);


  $view.innerHTML = `
    <header class="page-head"><h1>📊 통계</h1></header>
    <section class="grid4">
      <div class="card stat"><div class="label">총 풀이</div><div class="big">${n}<small>회</small></div></div>
      <div class="card stat"><div class="label">정답률</div><div class="big">${n ? Math.round(c / n * 100) : '-'}<small>%</small></div></div>
      <div class="card stat"><div class="label">공부한 날</div><div class="big">${days}<small>일</small></div></div>
      <div class="card stat"><div class="label">단어</div><div class="big">${d.vocab.length}<small>개</small></div></div>
    </section>
    <section class="grid2">
      ${recentCard()}
      <div class="card"><h3>파트별 정답률</h3>${partBars}</div>
    </section>
    ${typeCard()}
    ${histCard()}`;
};
/* ---------- 최근 풀이량: 1주일(막대) / 1개월(달력) + 날짜 누르면 정답·오답 ---------- */
let recentRange = 'week', recentDay = null;
const DOW = ['일', '월', '화', '수', '목', '금', '토'];
function recentCard() {
  const d = Store.data, goal = d.settings.goal;
  const day = k => d.daily[k] || { n: 0, c: 0 };
  let body;
  if (recentRange === 'week') {
    const week = [];
    for (let i = 6; i >= 0; i--) { const t = Date.now() - i * 86400000, k = Store.dayKey(t); week.push({ k, label: DOW[new Date(t).getDay()], n: day(k).n }); }
    const max = Math.max(goal, ...week.map(w => w.n));
    body = `<div class="cols">${week.map(w => `<button class="col ${w.k === recentDay ? 'on' : ''}" data-act="rday" data-arg="${w.k}"><span class="small">${w.n || ''}</span><i style="height:${w.n / max * 100}%"></i><span class="small muted">${w.label}</span></button>`).join('')}</div>`;
  } else {
    // 이번 달 달력 (요일은 맨 윗줄)
    const now = new Date(), y = now.getFullYear(), m = now.getMonth();
    const first = new Date(y, m, 1).getDay(), last = new Date(y, m + 1, 0).getDate(), todayD = now.getDate();
    const keys = []; for (let i = 1; i <= last; i++) keys.push(Store.dayKey(new Date(y, m, i).getTime()));
    const max = Math.max(goal, ...keys.map(k => day(k).n));
    let cells = DOW.map((w, i) => `<div class="cal-dow ${i === 0 ? 'sun' : i === 6 ? 'sat' : ''}">${w}</div>`).join('');
    for (let i = 0; i < first; i++) cells += '<div></div>';
    keys.forEach((k, i) => {
      const v = day(k), future = i + 1 > todayD;
      cells += future ? `<div class="cal-cell future"><span class="cal-date">${i + 1}</span></div>`
        : `<button class="cal-cell ${k === recentDay ? 'on' : ''}" data-act="rday" data-arg="${k}"><span class="cal-date">${i + 1}</span>
            <span class="cal-bar"><i style="height:${v.n / max * 100}%"></i></span><span class="cal-n">${v.n || ''}</span></button>`;
    });
    body = `<div class="cal-title small muted">${y}년 ${m + 1}월</div><div class="cal">${cells}</div>`;
  }
  return `<div class="card" id="recent"><div class="recent-head"><h3>최근 풀이량</h3>
      <div class="tabs small-tabs"><button class="${recentRange === 'week' ? 'on' : ''}" data-act="rrange" data-arg="week">1주일</button><button class="${recentRange === 'month' ? 'on' : ''}" data-act="rrange" data-arg="month">1개월</button></div></div>
    ${body}${recentDetail()}</div>`;
}
// 날짜를 눌렀을 때 아래 정답·오답 부분 (막대는 다시 그리지 않음)
function recentDetail() {
  const d = Store.data, goal = d.settings.goal, day = k => d.daily[k] || { n: 0, c: 0 };
  let detail = '<div class="small muted">막대를 누르면 그날의 정답·오답을 볼 수 있어요. · 하루 목표 ' + goal + '문제</div>';
  if (recentDay) {
    const v = day(recentDay), wrong = v.n - v.c, mx = Math.max(v.n, 1);
    const [yy, mm, dd] = recentDay.split('-').map(Number);
    detail = `<div class="day-detail"><div class="small"><b>${mm}월 ${dd}일 (${DOW[new Date(yy, mm - 1, dd).getDay()]})</b> · ${v.n}문제</div>
      <div class="dd-row"><span>정답</span><div class="dd-bar ok"><i style="width:${v.c / mx * 100}%"></i></div><b>${v.c}</b></div>
      <div class="dd-row"><span>오답</span><div class="dd-bar no"><i style="width:${wrong / mx * 100}%"></i></div><b>${wrong}</b></div></div>`;
  }
  return `<div id="recent-detail">${detail}</div>`;
}
/* ---------- 유형별 정답률: Top 5 + 정렬(▲ 높은 순 / ▼ 낮은 순) + 펼치기/접기 ---------- */
let typeRows = [], typeSort = 'down', typeOpen = false;
function typeCard() {
  const rows = typeRows.slice().sort((a, b) => typeSort === 'up' ? b[1] - a[1] || b[2] - a[2] : a[1] - b[1] || b[2] - a[2]);
  const shown = typeOpen ? rows : rows.slice(0, 5);
  const sortBtn = (k, t, tip) => `<button class="${typeSort === k ? 'on' : ''}" data-act="tsort" data-arg="${k}" title="${tip}">${t}</button>`;
  return `<section class="card" id="typecard"><div class="recent-head"><h3>유형별 정답률</h3>
      <div class="row-inline"><span class="small muted">달성률</span><div class="tabs small-tabs">${sortBtn('up', '▲', '높은 순')}${sortBtn('down', '▼', '낮은 순 (약점 먼저)')}</div></div></div>
    <div class="small muted" style="margin:4px 0 10px">${typeSort === 'up' ? '정답률 높은 순' : '정답률 낮은 순 = 약점'} · ${typeOpen ? `전체 ${rows.length}개` : 'Top 5'}</div>
    ${shown.length ? shown.map(([t, acc, cnt]) => hbar(t, acc, `${cnt}회`)).join('') : '<p class="muted">아직 기록이 없어요.</p>'}
    ${rows.length > 5 ? `<div class="fold-row"><button class="btn ghost small" data-act="topen">${typeOpen ? '접기 ▴' : `펼치기 ▾ (${rows.length - 5}개 더)`}</button></div>` : ''}
  </section>`;
}
/* ---------- 최근 학습 기록: 최근 5회 + 펼치기(나머지 전체) / 접기 ---------- */
let histOpen = false;
function histCard() {
  const all = Store.data.history.slice().reverse();
  const shown = histOpen ? all : all.slice(0, 5);
  const rows = shown.map(h => {
    const dt = new Date(h.at);
    return `<tr><td>${dt.getMonth() + 1}/${dt.getDate()} ${String(dt.getHours()).padStart(2, '0')}:${String(dt.getMinutes()).padStart(2, '0')}</td><td>${esc(h.title)}</td><td>${h.correct}/${h.total}</td><td>${fmtTime(h.sec)}</td></tr>`;
  }).join('');
  return `<section class="card" id="histcard"><h3>최근 학습 기록</h3>
    <div class="small muted" style="margin:-4px 0 10px">${histOpen ? `전체 ${all.length}회` : '최근 5회'}</div>
    ${rows ? `<table class="tbl"><thead><tr><th>시간</th><th>내용</th><th>점수</th><th>시간</th></tr></thead><tbody>${rows}</tbody></table>` : '<p class="muted">아직 기록이 없어요.</p>'}
    ${all.length > 5 ? `<div class="fold-row"><button class="btn ghost small" data-act="hopen">${histOpen ? '접기 ▴' : `펼치기 ▾ (${all.length - 5}개 더)`}</button></div>` : ''}
  </section>`;
}
function refreshTypes() { const el = document.getElementById('typecard'); if (el) el.outerHTML = typeCard(); }
function refreshRecent() { const el = document.getElementById('recent'); if (el) el.outerHTML = recentCard(); }

function hbar(label, acc, sub) {
  const cls = acc == null ? '' : acc >= 80 ? 'good' : acc >= 60 ? 'mid' : 'low';
  return `<div class="hbar"><div class="hbar-label"><span>${esc(label)}</span><span class="muted small">${acc == null ? '-' : acc + '%'} · ${sub}</span></div>
    <div class="bar ${cls}"><i style="width:${acc || 0}%"></i></div></div>`;
}

/* ============================================================
   리스닝 (2단계 예정) / 설정
   ============================================================ */
Views.listening = () => {
  const cards = LISTEN_PARTS.map(p => {
    if (!PART_INFO[p]) {
      const [ico, title, desc] = LISTEN_SOON[p];
      return `<div class="card part soon-part"><div class="part-top"><span class="ico">${ico}</span><span class="badge">Part ${p}</span></div>
        <b>${title}</b><span class="muted">${desc}</span><span class="small muted">🛠 준비 중</span></div>`;
    }
    const info = PART_INFO[p], st = partStat(p);
    const prog = st.total ? Math.round(st.solved / st.total * 100) : 0;
    return `<button class="card part" data-act="setup" data-arg="${p}">
      <div class="part-top"><span class="ico">${info.icon}</span><span class="badge">${info.name}</span></div>
      <b>${info.title}</b><span class="muted">${info.desc}</span>
      <div class="bar"><i style="width:${prog}%"></i></div>
      <span class="small muted">${st.solved} / ${st.total}문제 풀이 · 정답률 ${st.acc == null ? '-' : st.acc + '%'}</span>
    </button>`;
  }).join('');
  $view.innerHTML = `
    <header class="page-head"><h1>🎧 리스닝</h1><p class="muted">기기의 영어 목소리(미국·영국·호주·캐나다)로 들려줍니다. 소리를 켜 주세요.</p></header>
    <section class="grid2">${cards}</section>`;
};

Views.settings = () => {
  const d = Store.data, s = d.settings;
  const themeOpts = [['light', '☀️ 라이트', '밝은 화면'], ['dark', '🌙 다크', '어두운 화면'], ['system', '💻 시스템', '기기 설정 따라가기']];
  $view.innerHTML = `
    <header class="page-head"><h1>⚙️ 설정</h1></header>
    <section class="card form">
      <h3>👤 사용자 이름</h3>
      <div class="form-inline"><input id="userName" type="text" maxlength="20" placeholder="이름을 입력하세요" value="${esc(s.userName || '')}"><button class="btn primary" data-act="saveName">저장</button></div>
      <p class="small muted">홈 화면 인사말 "안녕하세요, ○○님"에 표시됩니다.</p>
    </section>
    <section class="card form">
      <h3>🎨 화면</h3>
      <div class="pref-row"><div class="label">테마</div>
        <div class="seg">${themeOpts.map(([k, t, sub]) =>
          `<label><input type="radio" name="theme" value="${k}" ${s.theme === k ? 'checked' : ''}><span>${t}<small>${sub}</small></span></label>`).join('')}</div>
      </div>
      <div class="pref-row font-row"><div class="label">한글 글꼴</div>
        <select id="fontKo" class="font-select" title="화면 글자·한글에 쓰는 글꼴">${fontOptions(KO_FONTS, s.fontKo)}</select>
        <span class="font-preview" id="fontKoPreview" style="font-family:${esc(KO_FONTS[s.fontKo].stack)}">가나다라 한글 미리보기</span>
      </div>
      <div class="pref-row font-row"><div class="label">영어 글꼴</div>
        <select id="fontEn" class="font-select" title="영어 문제·지문·예문에 쓰는 글꼴">${fontOptions(EN_FONTS, s.fontEn)}</select>
        <span class="font-preview" id="fontEnPreview" style="font-family:${esc(enStack(s.fontEn, s.fontKo))}">The quick brown fox</span>
      </div>
      <div class="pref-row"><div class="label">글자 크기</div>
        <div class="range-row">
          <button class="btn small" data-act="fontSmaller" title="작게">가−</button>
          <input type="range" id="fsize" class="range" min="13" max="22" step="1" value="${s.fontSize}">
          <button class="btn small" data-act="fontBigger" title="크게">가+</button>
          <b class="pri" id="fsizeVal">${fontSizeLabel(s.fontSize)}</b>
          <button class="btn ghost small" data-act="fontReset">기본값</button>
        </div>
      </div>
      <div class="font-sample">
        <div>미리보기: 오늘도 한 문제씩, 꾸준함이 점수를 만듭니다.</div>
        <div class="en">The quarterly report must be approved by the manager.</div>
      </div>
      <p class="small muted">사이드바는 왼쪽 위 <b>접기 버튼</b>이나 <kbd>Ctrl</kbd>+<kbd>B</kbd>로 접고 펼 수 있어요. (PC)</p>
    </section>
    <section class="card form">
      <h3>효과음</h3>
      <div class="seg center">${[[true, '켜기'], [false, '끄기']].map(([v, t]) => `<label><input type="radio" name="sound" value="${v}" ${(s.sound !== false) === v ? 'checked' : ''}><span>${t}</span></label>`).join('')}</div>
      <p class="small muted">정답: 도-미-솔-도 · 오답: 내려가는 단조 · 메뉴 이동: 짧은 삑</p>
    </section>
    <section class="card form">
      <h3>하루 목표</h3>
      <div class="form-inline"><input id="goal" type="number" min="5" max="300" value="${d.settings.goal}"><span>문제</span><button class="btn primary" data-act="saveGoal">저장</button></div>
    </section>
    <section class="card form">
      <h3>백업 · 옮기기</h3>
      <p class="small muted">학습 기록은 이 컴퓨터의 앱 안에 저장됩니다. 다른 기기(갤럭시 S24 등)로 옮기거나 안전하게 보관하려면 백업 파일을 저장하세요.</p>
      <div class="row wrap">
        <button class="btn primary" data-act="export">💾 백업 파일 저장</button>
        <label class="btn">📂 백업 불러오기<input type="file" id="importFile" accept=".json,application/json" hidden></label>
      </div>
    </section>
    <section class="card form">
      <h3>앱 정보</h3>
      <p class="small">문제 수: Part 5 ${qidsOfPart(5).length} · Part 6 ${qidsOfPart(6).length} · Part 7 ${qidsOfPart(7).length} (총 ${Object.keys(Q).length}문제)</p>
      <button class="btn danger small" data-act="reset">학습 기록 전체 초기화</button>
      <p class="small muted" style="margin-top:12px;text-align:center">2026 Copyleft by 지호 abba</p>
    </section>`;
  document.getElementById('importFile').addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try { Store.importJSON(r.result); alert('백업을 불러왔습니다!'); go('#/home'); }
      catch (err) { alert('불러오기 실패: ' + err.message); }
    };
    r.readAsText(f);
  });
  document.querySelectorAll('input[name=theme]').forEach(r => r.addEventListener('change', () => { Store.setSetting('theme', r.value); applyPrefs(); }));
  document.querySelectorAll('input[name=sound]').forEach(r => r.addEventListener('change', () => { Store.setSetting('sound', r.value === 'true'); if (r.value === 'true') Sound.correct(); }));
  const koSel = document.getElementById('fontKo'), enSel = document.getElementById('fontEn');
  const syncFontPreview = () => {
    const st = Store.data.settings;
    document.getElementById('fontKoPreview').style.fontFamily = KO_FONTS[st.fontKo].stack;
    document.getElementById('fontEnPreview').style.fontFamily = enStack(st.fontEn, st.fontKo);
  };
  koSel.addEventListener('change', () => { Store.setSetting('fontKo', koSel.value); applyPrefs(); syncFontPreview(); });
  enSel.addEventListener('change', () => { Store.setSetting('fontEn', enSel.value); applyPrefs(); syncFontPreview(); });
  const fs = document.getElementById('fsize');
  fs.addEventListener('input', () => setFontSize(+fs.value, false));   // 끌면서 바로 미리보기
  fs.addEventListener('change', () => setFontSize(+fs.value, true));   // 놓으면 저장
};

/* ============================================================
   화면 설정: 테마 · 글꼴 · 글자 크기 · 사이드바 접기
   ============================================================ */
// 한글 글꼴(화면 전체·한글)과 영어 글꼴(영어 문제·지문·예문)을 따로 고름
// Windows 기본 글꼴이라 갤럭시 S24 등에는 없을 수 있음 → 비슷한 기본 글꼴로 대체됨
const KO_FONTS = {
  malgun: { name: '맑은 고딕 (기본)', stack: "'Pretendard', 'Malgun Gothic', 'Apple SD Gothic Neo', system-ui, sans-serif" },
  gulim: { name: '굴림', stack: "'Gulim', 'Malgun Gothic', sans-serif" },
  dotum: { name: '돋움', stack: "'Dotum', 'Malgun Gothic', sans-serif" },
  batang: { name: '바탕', stack: "'Batang', 'Noto Serif KR', 'Nanum Myeongjo', serif" },
  gungsuh: { name: '궁서', stack: "'Gungsuh', 'Batang', serif" },
  system: { name: '시스템 기본', stack: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" },
};
const EN_FONTS = {
  georgia: { name: 'Georgia (기본)', stack: 'Georgia' },
  times: { name: 'Times New Roman', stack: "'Times New Roman'" },
  arial: { name: 'Arial', stack: 'Arial' },
  segoe: { name: 'Segoe UI', stack: "'Segoe UI'" },
  calibri: { name: 'Calibri', stack: 'Calibri' },
  cambria: { name: 'Cambria', stack: 'Cambria' },
  verdana: { name: 'Verdana', stack: 'Verdana' },
  tahoma: { name: 'Tahoma', stack: 'Tahoma' },
  trebuchet: { name: 'Trebuchet MS', stack: "'Trebuchet MS'" },
  courier: { name: 'Courier New', stack: "'Courier New'" },
  consolas: { name: 'Consolas', stack: 'Consolas' },
  same: { name: '한글 글꼴과 같게', stack: '' },
};
// 영어 글꼴 뒤에 한글 글꼴을 붙여, 영어 문장 속 한글도 고른 한글 글꼴로 보이게 함
function enStack(enKey, koKey) {
  const en = (EN_FONTS[enKey] || EN_FONTS.georgia).stack, ko = (KO_FONTS[koKey] || KO_FONTS.malgun).stack;
  return en ? `${en}, ${ko}` : ko;
}
function fontOptions(list, current) {
  return Object.entries(list).map(([k, f]) =>
    `<option value="${k}" ${k === current ? 'selected' : ''} style="font-family:${esc(f.stack || 'inherit')}">${f.name}</option>`).join('');
}
// 예전 한 가지 글꼴 설정(settings.font) → 한글/영어 두 설정으로 옮기기
(function migrateFont() {
  const st = Store.data.settings;
  if (!('font' in st)) return;
  const map = { gothic: ['malgun', 'segoe'], serif: ['batang', 'georgia'], system: ['system', 'same'],
    malgun: ['malgun', 'same'], gulim: ['gulim', 'same'], dotum: ['dotum', 'same'], batang: ['batang', 'same'], gungsuh: ['gungsuh', 'same'],
    times: ['batang', 'times'], georgia: ['batang', 'georgia'], cambria: ['batang', 'cambria'], courier: ['batang', 'courier'] };
  if (map[st.font]) { st.fontKo = map[st.font][0]; st.fontEn = map[st.font][1]; }
  else if (EN_FONTS[st.font]) { st.fontKo = 'malgun'; st.fontEn = st.font; }
  delete st.font;
  Store.save();
})();
const darkMQ = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
function fontSizeLabel(px) { return px + 'px' + (px === 16 ? ' (보통)' : px < 16 ? ' (작게)' : ' (크게)'); }

function applyPrefs() {
  const s = Store.data.settings, root = document.documentElement;
  const dark = s.theme === 'dark' || (s.theme === 'system' && !!(darkMQ && darkMQ.matches));
  root.dataset.theme = dark ? 'dark' : 'light';
  if (!KO_FONTS[s.fontKo]) s.fontKo = 'malgun';
  if (!EN_FONTS[s.fontEn]) s.fontEn = 'georgia';
  root.style.setProperty('--font-ui', KO_FONTS[s.fontKo].stack);
  root.style.setProperty('--font-en', enStack(s.fontEn, s.fontKo));
  root.style.fontSize = (s.fontSize || 16) + 'px';
  document.getElementById('app').classList.toggle('nav-folded', !!s.navFolded);
  const meta = document.querySelector('meta[name=theme-color]');
  if (meta) meta.content = dark ? '#191c24' : '#4f46e5';
  const fb = document.getElementById('navFold');
  if (fb) {
    fb.title = s.navFolded ? '사이드바 펼치기 (Ctrl+B)' : '사이드바 접기 (Ctrl+B)';
    fb.setAttribute('aria-label', fb.title);
    fb.setAttribute('aria-expanded', String(!s.navFolded));
  }
}
function setFontSize(px, save) {
  px = Math.max(13, Math.min(22, px));
  if (save) Store.setSetting('fontSize', px); else Store.data.settings.fontSize = px;
  applyPrefs();
  const slider = document.getElementById('fsize'), label = document.getElementById('fsizeVal');
  if (slider) slider.value = px;
  if (label) label.textContent = fontSizeLabel(px);
}
function toggleNav() { Store.setSetting('navFolded', !Store.data.settings.navFolded); applyPrefs(); }

// 사이드바 위쪽에 접기 버튼 넣기 (Claude Code 사이드바 버튼과 같은 모양)
(function setupNavFold() {
  const nav = document.getElementById('nav'), brand = nav.querySelector('.brand');
  const row = document.createElement('div');
  row.className = 'brand-row';
  brand.replaceWith(row);
  row.appendChild(brand);
  const btn = document.createElement('button');
  btn.id = 'navFold'; btn.className = 'fold-btn'; btn.type = 'button';
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/></svg>';
  btn.addEventListener('click', toggleNav);
  row.appendChild(btn);
  nav.querySelectorAll('a').forEach(a => { a.title = a.textContent.trim(); });  // 접혔을 때 아이콘에 이름 표시
})();
if (darkMQ) darkMQ.addEventListener('change', () => { if (Store.data.settings.theme === 'system') applyPrefs(); });
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && e.key.toLowerCase() === 'b') { e.preventDefault(); toggleNav(); }
});
applyPrefs();

/* ============================================================
   버튼 동작
   ============================================================ */
const Actions = {
  nav: h => go(h),
  setup: p => go('#/setup/' + p),
  quick(kind) {
    if (kind === 'p2') return startSession({ title: 'Part 2 · 10문제', part: 2, qids: pickQids(2, 10), mode: 'practice' });
    if (kind === 'p5') startSession({ title: 'Part 5 · 10문제', part: 5, qids: pickQids(5, 10), mode: 'practice' });
    else if (kind === 'mock') startSession({ title: '미니 모의고사', part: 0, qids: [...pickQids(5, 10), ...pickQids(6, 1), ...pickQids(7, 2)], mode: 'test' });
    else if (kind === 'wrong') Actions.retryWrong('all');
    else if (kind === 'flash') go('#/flash');
  },
  start(p) {
    p = +p;
    const cnt = document.querySelector('input[name=cnt]:checked').value;
    const mode = document.querySelector('input[name=mode]:checked').value;
    startSession({ title: `${PART_INFO[p].name} · ${PART_INFO[p].title}`, part: p, qids: pickQids(p, cnt), mode });
  },
  lplay() { const q = Q[curId()]; if (Listen.isPlaying()) Listen.stop(); else Listen.part2(q); },
  lplayq(id) { Listen.part2(Q[id]); },
  lrate(v) { Store.setSetting('listenRate', +v); document.querySelectorAll('[data-act="lrate"]').forEach(b => b.classList.toggle('on', +b.dataset.arg === +v)); },
  pick(i) {
    i = +i;
    const id = curId(), q = Q[id];
    if (i >= q.choices.length) return;
    if (S.mode === 'test') { S.picks[id] = i; renderSession(); return; }
    if (S.checked[id]) return;
    S.picks[id] = i; S.checked[id] = true;
    Store.recordAnswer(id, i === q.answer, i);
    if (window.Sound) (i === q.answer ? Sound.correct : Sound.wrong)();
    renderSession();
    const ex = document.querySelector('.explain');
    if (ex && window.innerWidth < 800) ex.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },
  next() {
    if (S.idx < S.qids.length - 1) { S.idx++; renderSession(); window.scrollTo(0, 0); }
    else if (S.mode === 'test') Actions.submit();
    else finishSession();
  },
  prev() { if (S.idx > 0) { S.idx--; renderSession(); } },
  goto(i) { S.idx = +i; renderSession(); },
  submit() {
    const un = S.qids.filter(id => S.picks[id] == null).length;
    if (un && !confirm(`아직 ${un}문제를 풀지 않았어요. 그래도 제출할까요?`)) return;
    finishSession();
  },
  quit() {
    if (S.mode === 'test') {
      if (confirm('실전 모드를 그만두면 이번 기록은 저장되지 않아요. 그만할까요?')) { S = null; go('#/reading'); }
      return;
    }
    const done = S.qids.filter(id => S.checked[id]);
    if (!confirm('여기까지만 풀고 결과를 볼까요?')) return;
    if (!done.length) { S = null; go('#/reading'); return; }
    S.qids = done; finishSession();
  },
  retrySession() {
    const ids = S.qids.filter(id => S.picks[id] !== Q[id].answer);
    startSession({ title: '틀린 문제 다시 풀기', part: S.part, qids: ids, mode: 'practice' });
  },
  retryWrong(p) {
    const ids = Store.data.wrong.filter(id => Q[id] && (p === 'all' || Q[id].part === +p));
    if (!ids.length) { alert('오답이 없어요!'); return; }
    startSession({ title: '오답노트 복습', part: p === 'all' ? 0 : +p, qids: ids, mode: 'practice' });
  },
  removeWrong(id) { Store.removeWrong(id); Views.wrong(); },
  addvocab(arg, el) {
    const [w, m, src] = arg.split('|');
    if (Store.addVocab(w, m, src)) {
      el.classList.add('on');
      el.innerHTML = el.textContent.includes('담기') ? '✓ 담음' : `✓ ${esc(w)} <small>${esc(m)}</small>`;
    }
  },
  vadd() {
    const w = document.getElementById('vw'), m = document.getElementById('vm');
    if (!w.value.trim()) { w.focus(); return; }
    if (!Store.addVocab(w.value, m.value, '직접 추가')) { alert('이미 단어장에 있는 단어예요.'); return; }
    vocabFilter = 'learning'; Views.vocab(); document.getElementById('vw').focus();
  },
  hopen() { histOpen = !histOpen; const el = document.getElementById('histcard'); el.outerHTML = histCard(); if (!histOpen) document.getElementById('histcard').scrollIntoView({ block: 'nearest' }); },
  tsort(k) { typeSort = k; refreshTypes(); },
  topen() { typeOpen = !typeOpen; refreshTypes(); if (!typeOpen) document.getElementById('typecard').scrollIntoView({ block: 'nearest' }); },
  rrange(r) { recentRange = r; refreshRecent(); },
  rday(k) {
    recentDay = recentDay === k ? null : k;
    document.querySelectorAll('#recent [data-act="rday"]').forEach(b => {
      b.classList.toggle('on', b.dataset.arg === recentDay);
      // 누른 막대만 잠깐 번쩍 (칸 전체가 아니라 막대 크기만큼)
      const bar = b.dataset.arg === k && b.querySelector('i');
      if (bar && bar.animate) bar.animate([{ filter: 'brightness(1)' }, { filter: 'brightness(1.8)' }, { filter: 'brightness(1)' }], { duration: 350, easing: 'ease-out' });
    });
    document.getElementById('recent-detail').outerHTML = recentDetail();
  },
  vfilter(f) { vocabFilter = f; Views.vocab(); },
  vdir(d) { Store.setSetting('vocabDir', d); Views.vocab(); },
  vknown(id) { Store.setKnown(id); Views.vocab(); },
  vdel(id) { if (confirm('이 단어를 삭제할까요?')) { Store.removeVocab(id); Views.vocab(); } },
  flip() { F.flipped = !F.flipped; renderFlash(); },
  fknow() { Store.setKnown(F.deck[F.i].id, true); F.know++; F.i++; F.flipped = false; renderFlash(); },
  fdont() { Store.setKnown(F.deck[F.i].id, false); F.dont++; F.i++; F.flipped = false; renderFlash(); },
  saveName() {
    const v = document.getElementById('userName').value.trim().slice(0, 20);
    Store.setSetting('userName', v); alert(v ? `이름을 '${v}'(으)로 저장했어요.` : '이름을 지웠어요.');
  },
  saveGoal() {
    const v = Math.max(5, Math.min(300, parseInt(document.getElementById('goal').value, 10) || 30));
    Store.setGoal(v); alert(`하루 목표를 ${v}문제로 저장했어요.`);
  },
  export() {
    const blob = new Blob([Store.exportJSON()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `jiho-toeic-backup-${today()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  },
  fontSmaller() { setFontSize(Store.data.settings.fontSize - 1, true); },
  fontBigger() { setFontSize(Store.data.settings.fontSize + 1, true); },
  fontReset() { setFontSize(16, true); },
  reset() {
    if (confirm('모든 학습 기록·오답·단어장이 삭제됩니다. 정말 초기화할까요?') && confirm('되돌릴 수 없습니다. 한 번 더 확인합니다.')) {
      Store.reset(); go('#/home');
    }
  },
};

$view.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  const fn = Actions[el.dataset.act];
  if (fn) fn(el.dataset.arg, el, e);
});

/* ---------- 키보드 단축키 (PC) ---------- */
document.addEventListener('keydown', e => {
  if (!e.target.matches) return;
  if (e.target.matches('input, textarea')) {
    if (e.key === 'Enter' && (e.target.id === 'vw' || e.target.id === 'vm')) Actions.vadd();
    return;
  }
  if (e.target.tagName === 'BUTTON' && (e.key === 'Enter' || e.key === ' ')) return; // 버튼 기본 동작에 맡김
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  const r = currentRoute(), k = e.key.toLowerCase();
  if (r === 'session' && S && !S.done) {
    const map = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 };
    if (k in map) { e.preventDefault(); Actions.pick(map[k]); }
    else if (k === 'enter') { if (S.mode === 'test' || S.checked[curId()]) { e.preventDefault(); Actions.next(); } }
    else if (S.mode === 'test' && k === 'arrowright') Actions.next();
    else if (S.mode === 'test' && k === 'arrowleft') Actions.prev();
  } else if (r === 'flash' && F && F.i < F.deck.length) {
    if (k === ' ') { e.preventDefault(); Actions.flip(); }
    else if (k === 'arrowright') Actions.fknow();
    else if (k === 'arrowleft') Actions.fdont();
  }
});

/* ---------- 시작 (모든 스크립트를 읽은 뒤) ---------- */
document.addEventListener('DOMContentLoaded', router);
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
