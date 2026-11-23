/* 단어 데이터 로더 – 추가 단어 묶음(data/words/*.js)이 addWords('난이도', [...]) 로 등록합니다.
   단어 한 개: ["영어", "뜻", "품사", "예문", "예문 해석", [품사 변형...], [["유사 단어", "뜻"], ...]] */
window.TOEIC_WORDS = window.TOEIC_WORDS || {};
window.addWords = function (level, list) {
  (window.TOEIC_WORDS[level] = window.TOEIC_WORDS[level] || []).push.apply(window.TOEIC_WORDS[level], list);
};
