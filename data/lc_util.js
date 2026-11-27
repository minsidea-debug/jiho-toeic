/* 리스닝 추가 문제 묶음용 도우미 (data/part*_NN.js 보다 먼저 로드)
   - 정답 위치가 한쪽에 몰리지 않게, 문제 번호에 따라 보기 순서를 돌려 놓음 (항상 같은 결과)
     해설 속 (A)(B)(C)(D) 글자도 함께 바꿔 줌
   - LC.p2(시작번호, rows, 목소리표)        : Part 2 묶음 등록
   - LC.talks(part, 시작세트번호, 시작문제번호, sets) : Part 3·4 묶음 등록 */
window.LC = (function () {
  const L = ['A', 'B', 'C', 'D'];
  // q.choices 를 k 칸 돌림 → 원래 i 번 보기는 (i + k) % n 자리로
  function rot(q, k) {
    const n = q.choices.length; k = ((k % n) + n) % n;
    if (!k) return q;
    const move = a => { if (!a) return a; const out = []; a.forEach((x, i) => { out[(i + k) % n] = x; }); return out; };
    q.choices = move(q.choices);
    if (q.choicesKo) q.choicesKo = move(q.choicesKo);
    q.answer = (q.answer + k) % n;
    if (q.explain) q.explain = q.explain.replace(/\(([A-D])\)/g, (m, c) => { const i = L.indexOf(c); return i < n ? '(' + L[(i + k) % n] + ')' : m; });
    return q;
  }
  const pad = n => String(n).padStart(3, '0');
  function push(set) { (window.TOEIC_SETS = window.TOEIC_SETS || []).push(set); }

  function p2(start, rows, V) {
    rows.forEach((r, i) => {
      const no = start + i, id = 'p2-' + pad(no);
      const q = { id, q: r[0], choices: r[1], answer: r[2], type: r[3], voices: V[r[4]], explain: r[5], ko: r[6], choicesKo: r[7] };
      push({ id: 'set-' + id, part: 2, questions: [rot(q, no)] });
    });
  }
  // sets: [{ title, voices, script, ko, graphic?, qs: [[문제, [보기4], 정답, 유형, 해설, 문제해석], ×3] }]
  function talks(part, setStart, qStart, sets) {
    let qn = qStart;
    sets.forEach((s, i) => {
      const id = 'p' + part + '-s' + String(setStart + i).padStart(2, '0');
      const questions = s.qs.map(r => {
        const no = qn++;
        const q = { id: 'p' + part + '-' + pad(no), q: r[0], choices: r[1], answer: r[2], type: r[3], explain: r[4], ko: r[5] };
        return s.graphic && r[3] === '시각 정보' ? q : rot(q, no);   // 표 문제는 보기 순서(표 순서) 유지
      });
      push({ id, part, title: s.title, voices: s.voices, script: s.script, ko: s.ko, graphic: s.graphic, questions });
    });
  }
  // Part 1: rows = [[사진번호, 목소리, 사진 설명(한국어), 유형, [문장 4], 정답, 해설, [해석 4]], ...]
  //   문제 ID = p1-<사진번호 3자리>, 사진 = images/part1/p1-<2자리>.jpg
  function p1(rows) {
    rows.forEach(r => {
      const n = r[0], id = 'p1-' + pad(n);
      const q = { id, img: 'images/part1/p1-' + String(n).padStart(2, '0') + '.jpg', voice: r[1], q: '사진: ' + r[2], type: r[3], choices: r[4], answer: r[5], explain: r[6], choicesKo: r[7] };
      push({ id: 'set-' + id, part: 1, questions: [rot(q, n)] });
    });
  }
  return { rot, p1, p2, talks };
})();
