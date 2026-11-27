/* 리스닝 음성
   1순위: 미리 만들어 둔 AI 음성 파일 (audio/<id>.mp3, 목록은 data/audio_index.js 의 window.TOEIC_AUDIO)
   2순위: 파일이 없으면 브라우저 내장 음성(Web Speech API)으로 대본을 읽음
     - 높낮이는 바꾸지 않음 (바꾸면 소리가 뭉개지고 잡음이 생김)
     - 기기 목소리 중 품질 좋은 것(Natural·Neural·Enhanced·Google 등)을 먼저 고르고, 화자마다 다른 목소리
     - 설정 > 리스닝 목소리 (settings.listenVoice = voiceURI) 를 고르면 그 목소리를 가장 먼저 사용
   - 속도: settings.listenRate (0.8 / 1 / 1.2)
   Listen.part1(q) / Listen.part2(q) / Listen.talk(set) / Listen.stop() */
(function () {
  const LANG = { US: 'en-US', UK: 'en-GB', AU: 'en-AU', CA: 'en-CA' };
  const ABC = ['A', 'B', 'C', 'D'];
  let token = 0, playing = false, audio = null;
  const listeners = [];

  function settings() { return (typeof Store !== 'undefined' && Store.data && Store.data.settings) || {}; }   // (Store 는 const 라 window.Store 로는 안 보임)
  function rate() { return settings().listenRate || 1; }
  function setPlaying(v) { playing = v; listeners.forEach(f => f(v)); }

  /* ---------- 기기 목소리 고르기 ---------- */
  function englishVoices() {
    return ('speechSynthesis' in window ? speechSynthesis.getVoices() : []).filter(v => /^en[-_]/i.test(v.lang));
  }
  // 품질 점수: 이름에 붙은 말로 대략 판단
  function quality(v) {
    const n = v.name;
    let s = 0;
    if (/natural|neural/i.test(n)) s += 6;
    if (/enhanced|premium|wavenet|studio/i.test(n)) s += 4;
    if (/google/i.test(n)) s += 3;
    if (v.localService === false) s += 1;          // 온라인 음성은 대체로 더 자연스러움
    if (/compact|espeak|robot/i.test(n)) s -= 5;
    if (v.voiceURI === settings().listenVoice) s += 100;
    return s;
  }
  const norm = l => l.replace('_', '-').toLowerCase();
  function pickVoice(accent, nth) {
    const all = englishVoices();
    if (!all.length) return null;
    const want = norm(LANG[accent] || 'en-US');
    const ranked = all.slice().sort((a, b) => (norm(b.lang) === want) - (norm(a.lang) === want) || quality(b) - quality(a));
    const same = ranked.filter(v => norm(v.lang) === want);
    const pool = same.length > nth ? same : ranked;    // 그 나라 목소리가 모자라면 다른 영어 목소리
    return pool[nth % pool.length];
  }
  function bestVoices() { return englishVoices().sort((a, b) => quality(b) - quality(a)); }

  /* ---------- 재생 ---------- */
  function stop() {
    token++;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    if (audio) { audio.pause(); audio = null; }
    if (playing) setPlaying(false);
  }
  // lines: [[accent, text, pause(ms), 화자번호], ...]
  function speakLines(lines, my) {
    if (!('speechSynthesis' in window)) { setPlaying(false); alert('이 기기에서는 음성 재생을 지원하지 않아요.'); return; }
    let i = 0;
    const next = () => {
      if (my !== token) return;
      if (i >= lines.length) { setPlaying(false); return; }
      const [accent, text, pause, who] = lines[i++];
      const u = new SpeechSynthesisUtterance(text);
      const v = pickVoice(accent, who || 0);
      u.lang = LANG[accent] || 'en-US';
      if (v) u.voice = v;
      u.rate = 0.95 * rate();
      u.onend = u.onerror = () => { if (my === token) setTimeout(next, pause || 500); };
      speechSynthesis.speak(u);
    };
    next();
  }
  // 음성 파일이 있으면 파일로, 없거나 실패하면 기기 음성으로
  function play(key, lines) {
    stop();
    const my = ++token;
    setPlaying(true);
    if (window.TOEIC_AUDIO && TOEIC_AUDIO[key]) {
      audio = new Audio('audio/' + key + '.mp3');
      audio.defaultPlaybackRate = audio.playbackRate = rate();   // (불러올 때 playbackRate 가 default 로 돌아가므로 둘 다)
      audio.onended = () => { if (my === token) { audio = null; setPlaying(false); } };
      audio.onerror = () => { if (my === token) { audio = null; speakLines(lines, my); } };
      audio.play().catch(() => { if (my === token) { audio = null; speakLines(lines, my); } });
      return;
    }
    speakLines(lines, my);
  }

  // Part 1: 사진 묘사 문장 (A)~(D)
  function part1(q) {
    play(q.id, q.choices.map((c, i) => [q.voice || 'US', ABC[i] + '. ' + c, 900, 0]));
  }
  // Part 2: 질문 → 응답 (A)(B)(C)
  function part2(q) {
    const [qa, aa] = q.voices || ['US', 'UK'];
    const lines = [[qa, q.q, 900, 0]];
    q.choices.forEach((c, i) => lines.push([aa, ABC[i] + '. ' + c, 800, 1]));
    play(q.id, lines);
  }
  // Part 3·4: 대화·담화 (화자마다 다른 목소리)
  function talk(set) {
    const order = {};
    play(set.id, set.script.map(([who, text]) => {
      if (!(who in order)) order[who] = Object.keys(order).length;
      return [(set.voices || {})[who] || 'US', text, 600, order[who]];
    }));
  }
  // 설정 화면 '미리 듣기'
  function sample(voiceURI) {
    stop();
    const v = englishVoices().find(x => x.voiceURI === voiceURI) || bestVoices()[0];
    const u = new SpeechSynthesisUtterance('Hello. This is a sample of the listening voice.');
    if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = 0.95 * rate();
    speechSynthesis.speak(u);
  }

  // 목소리 목록은 늦게 준비되는 기기가 있어 미리 불러 둠
  if ('speechSynthesis' in window) { speechSynthesis.getVoices(); speechSynthesis.addEventListener('voiceschanged', () => listeners.forEach(f => f(playing))); }

  // 속도를 바꾸면 재생 중인 음성 파일에도 바로 적용
  function applyRate() { if (audio) audio.defaultPlaybackRate = audio.playbackRate = rate(); }

  window.Listen = { part1, part2, talk, stop, sample, applyRate, voices: bestVoices, isPlaying: () => playing, onChange: f => listeners.push(f) };
})();
