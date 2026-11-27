/* 효과음 — 파일 없이 브라우저 내장 Web Audio API(공개 웹 표준)로 직접 만든 소리
   - Sound.correct(): 도-미-솔-도 (C 장조, 낮은 음→높은 음) 0.5초
   - Sound.wrong():   도-솔-미♭-도 (C 단조, 높은 음→낮은 음) 0.5초
   - Sound.beep():    짧은 삑 0.3초 (메뉴 이동)
   설정 > 효과음 에서 끌 수 있음 (Store.data.settings.sound) */
(function () {
  let ctx = null;
  function ac() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function enabled() {
    return !(typeof Store !== 'undefined' && Store.data && Store.data.settings && Store.data.settings.sound === false);
  }
  // 음 하나: 주파수, 시작 시각(초), 길이(초), 파형, 음량
  function tone(c, freq, start, dur, type, vol) {
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = freq;
    const t = c.currentTime + start;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + dur + 0.02);
  }
  function seq(freqs, total, type, vol) {
    if (!enabled()) return;
    const c = ac(); if (!c) return;
    const step = total / freqs.length;
    freqs.forEach((f, i) => tone(c, f, i * step, i === freqs.length - 1 ? step * 1.6 : step * 1.1, type, vol));
  }
  // 음 높이(Hz): C5 523.25, E5 659.25, G5 783.99, C6 1046.5, E♭5 622.25
  window.Sound = {
    correct() { seq([523.25, 659.25, 783.99, 1046.5], 0.5 / 1.15, 'triangle', 0.25); },
    wrong()   { seq([1046.5, 783.99, 622.25, 523.25], 0.5 / 1.15, 'triangle', 0.22); },
    beep() {
      if (!enabled()) return;
      const c = ac(); if (!c) return;
      tone(c, 880, 0, 0.3, 'sine', 0.12);
    },
  };
})();
