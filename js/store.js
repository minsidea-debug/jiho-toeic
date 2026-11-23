'use strict';
/* 학습 기록 저장소 (브라우저 localStorage에 저장) */
const Store = (() => {
  const KEY = 'jiho-toeic-v1';
  const blank = () => ({
    version: 1,
    attempts: {},   // 문제ID → { n: 푼 횟수, c: 맞힌 횟수, last, pick, at }
    wrong: [],      // 오답노트 문제ID 목록
    vocab: [],      // { id, w, m, src, at, known }
    daily: {},      // 'YYYY-MM-DD' → { n, c }
    history: [],    // 세션 기록
    // 화면 설정: theme(system|light|dark), font(기본 글꼴 키), fontSize(px), navFolded(사이드바 접힘)
    settings: { goal: 30, theme: 'system', fontKo: 'malgun', fontEn: 'georgia', fontSize: 16, navFolded: false, sound: true, userName: 'Jiho' },
    // --- 단어 외우기 ---
    words: {},      // 단어ID → { n, c, last, at }
    wordWrong: [],  // 틀린 단어ID 목록
    wordDays: {},   // 난이도 → { date, ids: [오늘의 단어], results: { 단어ID: true/false } }
    wordSettings: { daily: 20, level: 'middle', dir: 'en2ko' },  // dir: en2ko 영→한 / ko2en 한→영 / mix 섞기
  });
  const merge = raw => {
    const b = blank();
    return Object.assign(b, raw, {
      settings: Object.assign(b.settings, raw.settings || {}),
      wordSettings: Object.assign(b.wordSettings, raw.wordSettings || {}),
    });
  };
  let d;
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    d = raw ? merge(raw) : blank();
  } catch (e) { d = blank(); }

  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(d)); }
    catch (e) { alert('저장 공간이 부족해 기록을 저장하지 못했습니다.'); }
  };
  const dayKey = t => {
    const x = new Date(t);
    return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
  };

  return {
    get data() { return d; },
    dayKey,
    save,
    recordAnswer(id, ok, pick) {
      const a = d.attempts[id] || (d.attempts[id] = { n: 0, c: 0 });
      a.n++; if (ok) a.c++;
      a.last = ok ? 1 : 0; a.pick = pick; a.at = Date.now();
      const day = d.daily[dayKey(Date.now())] || (d.daily[dayKey(Date.now())] = { n: 0, c: 0 });
      day.n++; if (ok) day.c++;
      const i = d.wrong.indexOf(id);
      if (ok) { if (i >= 0) d.wrong.splice(i, 1); }
      else if (i < 0) d.wrong.push(id);
      save();
    },
    removeWrong(id) { d.wrong = d.wrong.filter(x => x !== id); save(); },
    addHistory(h) {
      d.history.push(h);
      if (d.history.length > 2000) d.history.splice(0, d.history.length - 2000);
      save();
    },
    hasVocab(w) { return d.vocab.some(v => v.w.toLowerCase() === String(w).toLowerCase()); },
    addVocab(w, m, src) {
      w = String(w || '').trim(); m = String(m || '').trim();
      if (!w || this.hasVocab(w)) return false;
      d.vocab.unshift({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), w, m, src: src || '', at: Date.now(), known: false });
      save(); return true;
    },
    removeVocab(id) { d.vocab = d.vocab.filter(v => v.id !== id); save(); },
    setKnown(id, val) {
      const v = d.vocab.find(x => x.id === id);
      if (v) { v.known = val === undefined ? !v.known : val; save(); }
    },
    setGoal(n) { d.settings.goal = n; save(); },
    setSetting(key, val) { d.settings[key] = val; save(); },
    // --- 단어 외우기 ---
    recordWord(id, ok) {
      const a = d.words[id] || (d.words[id] = { n: 0, c: 0 });
      a.n++; if (ok) a.c++;
      a.last = ok ? 1 : 0; a.at = Date.now();
      const i = d.wordWrong.indexOf(id);
      if (ok) { if (i >= 0) d.wordWrong.splice(i, 1); }
      else if (i < 0) d.wordWrong.push(id);
      save();
    },
    setWordSettings(obj) { Object.assign(d.wordSettings, obj); save(); },
    setWordDay(level, day) { d.wordDays[level] = day; save(); },
    exportJSON() { return JSON.stringify({ app: 'jiho-toeic', exportedAt: new Date().toISOString(), data: d }, null, 2); },
    importJSON(text) {
      const o = JSON.parse(text);
      if (!o || o.app !== 'jiho-toeic' || !o.data) throw new Error('토익앱 백업 파일이 아닙니다.');
      d = merge(o.data); save();
    },
    reset() { d = blank(); save(); },
  };
})();
