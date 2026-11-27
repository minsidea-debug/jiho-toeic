/* 리스닝 음성 — 브라우저 내장 음성(Web Speech API, 공개 웹 표준)으로 대본을 읽어 줌
   - 파일·설치 없음. 기기에 있는 영어 목소리 사용 (미국 US · 영국 UK · 호주 AU · 캐나다 CA)
   - 그 나라 목소리가 없으면 다른 영어 목소리 + 높낮이를 바꿔 화자를 구분
   - 속도: Store.data.settings.listenRate (0.8 / 1 / 1.2)
   Listen.part2(q)  질문 → (A) (B) (C) 응답을 차례로 읽기
   Listen.talk(set) Part 3·4 대화·담화 대본 읽기 (화자별 목소리·높낮이)
   Listen.stop()    멈추기 */
(function () {
  const LANG = { US: 'en-US', UK: 'en-GB', AU: 'en-AU', CA: 'en-CA' };
  let token = 0, playing = false;
  const listeners = [];

  function voices() { return 'speechSynthesis' in window ? speechSynthesis.getVoices() : []; }
  function pickVoice(accent, nth) {
    const all = voices().filter(v => /^en[-_]/i.test(v.lang));
    const want = (LANG[accent] || 'en-US').toLowerCase();
    const same = all.filter(v => v.lang.replace('_', '-').toLowerCase() === want);
    const list = same.length ? same : all;
    return list.length ? list[nth % list.length] : null;
  }
  function rate() { const r = window.Store && Store.data.settings.listenRate; return r || 1; }
  function setPlaying(v) { playing = v; listeners.forEach(f => f(v)); }

  // lines: [[accent, text, pause(ms)], ...] — 순서대로 읽고, 줄 사이에 잠깐 쉼
  function playLines(lines) {
    if (!('speechSynthesis' in window)) { alert('이 기기에서는 음성 재생을 지원하지 않아요.'); return; }
    stop();
    const my = ++token;
    setPlaying(true);
    let i = 0;
    const next = () => {
      if (my !== token) return;
      if (i >= lines.length) { setPlaying(false); return; }
      const [accent, text, pause, who, pitch] = lines[i++];
      const u = new SpeechSynthesisUtterance(text);
      const v = pickVoice(accent, who || 0);
      u.lang = LANG[accent] || 'en-US';
      if (v) u.voice = v;
      u.rate = 0.95 * rate();
      // 같은 목소리밖에 없을 때도 화자가 구분되게 높낮이를 다르게
      u.pitch = pitch || (who ? 1.2 : 0.95);
      u.onend = u.onerror = () => { if (my === token) setTimeout(next, pause || 500); };
      speechSynthesis.speak(u);
    };
    next();
  }
  function stop() {
    token++;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    if (playing) setPlaying(false);
  }
  function part2(q) {
    const [qa, aa] = q.voices || ['US', 'UK'];
    const lines = [[qa, q.q, 900, 0]];
    q.choices.forEach((c, i) => lines.push([aa, ['A', 'B', 'C', 'D'][i] + '. ' + c, 800, 1]));
    playLines(lines);
  }
  // Part 3·4: 대화/담화 세트 읽기. 화자 W·W2 = 여자(높게), M·M2 = 남자(낮게)
  const PITCH = { W: 1.15, W2: 1.3, M: 0.8, M2: 0.95 };
  function talk(set) {
    const order = {};
    const lines = set.script.map(([who, text]) => {
      if (!(who in order)) order[who] = Object.keys(order).length;
      const accent = (set.voices || {})[who] || 'US';
      return [accent, text, 600, order[who], PITCH[who] || 1];
    });
    playLines(lines);
  }
  // 목소리 목록은 늦게 준비되는 기기가 있어 미리 한 번 불러 둠
  if ('speechSynthesis' in window) { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices(); }

  window.Listen = { part2, talk, stop, playLines, isPlaying: () => playing, onChange: f => listeners.push(f) };
})();
