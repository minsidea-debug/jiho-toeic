/* 오프라인 실행용 서비스워커 (인터넷 주소로 열었을 때만 동작)
   파일을 수정하면 VERSION 숫자를 올려주세요. */
const VERSION = 'jiho-toeic-202611281710'; // VERSION:AUTO
const FILES = [
  './', './index.html', './css/style.css', './data/quotes.js', './js/store.js', './js/sound.js', './js/listen.js', './js/app.js', './js/words.js',
  './data/lc_util.js', './data/part1.js', './data/part1_02.js', './data/part1_03.js', './data/part1_04.js', './data/part1_05.js', './data/part2.js', './data/part2_02.js', './data/part2_03.js', './data/part2_04.js', './data/part2_05.js', './data/part2_06.js', './data/part2_07.js', './data/part2_08.js', './data/part2_09.js', './data/part2_10.js', './data/part3.js', './data/part3_02.js', './data/part3_03.js', './data/part3_04.js', './data/part3_05.js', './data/part3_06.js', './data/part3_07.js', './data/part3_08.js', './data/part3_09.js', './data/part3_10.js', './data/part4.js', './data/part4_02.js', './data/part4_03.js', './data/part4_04.js', './data/part4_05.js', './data/part4_06.js', './data/part4_07.js', './data/part4_08.js', './data/part4_09.js', './data/part4_10.js', './data/listen_directions.js', './data/listen_timing.js', './data/audio_index.js', './data/lc_packs.js', './data/part5.js', './data/part6.js', './data/part7.js',
  './data/words_elem.js', './data/words_middle.js', './data/words_high.js', './data/words_univ.js', './data/word_synonyms.js', './data/word_ipa.js',
  './data/words_loader.js',
  // WORDS:START
  './data/words/elem_01.js',
  './data/words/elem_02.js',
  './data/words/elem_03.js',
  './data/words/elem_04.js',
  './data/words/elem_05.js',
  './data/words/elem_06.js',
  './data/words/elem_07.js',
  './data/words/elem_08.js',
  './data/words/middle_01.js',
  './data/words/middle_02.js',
  './data/words/middle_03.js',
  './data/words/middle_04.js',
  './data/words/middle_05.js',
  './data/words/middle_06.js',
  './data/words/middle_07.js',
  './data/words/middle_08.js',
  './data/words/middle_09.js',
  './data/words/high_01.js',
  './data/words/high_02.js',
  './data/words/high_03.js',
  './data/words/high_04.js',
  './data/words/high_05.js',
  './data/words/high_06.js',
  './data/words/high_07.js',
  './data/words/high_08.js',
  './data/words/high_09.js',
  './data/words/high_10.js',
  './data/words/high_11.js',
  './data/words/high_12.js',
  './data/words/high_13.js',
  './data/words/high_14.js',
  './data/words/high_15.js',
  './data/words/high_16.js',
  './data/words/high_17.js',
  './data/words/high_18.js',
  './data/words/high_19.js',
  './data/words/high_20.js',
  './data/words/high_21.js',
  './data/words/high_22.js',
  './data/words/high_23.js',
  './data/words/high_24.js',
  './data/words/high_25.js',
  './data/words/high_26.js',
  './data/words/high_27.js',
  './data/words/high_28.js',
  './data/words/high_29.js',
  './data/words/high_30.js',
  './data/words/high_31.js',
  './data/words/high_32.js',
  './data/words/high_33.js',
  './data/words/high_34.js',
  './data/words/high_35.js',
  './data/words/high_36.js',
  './data/words/high_37.js',
  './data/words/high_38.js',
  './data/words/high_39.js',
  './data/words/high_40.js',
  './data/words/high_41.js',
  './data/words/high_42.js',
  './data/words/high_43.js',
  './data/words/high_44.js',
  './data/words/high_45.js',
  './data/words/high_46.js',
  './data/words/high_47.js',
  './data/words/high_48.js',
  './data/words/univ_01.js',
  './data/words/univ_02.js',
  './data/words/univ_03.js',
  './data/words/univ_04.js',
  './data/words/univ_05.js',
  './data/words/univ_06.js',
  './data/words/univ_07.js',
  './data/words/univ_08.js',
  './data/words/univ_09.js',
  './data/words/univ_10.js',
  './data/words/univ_11.js',
  './data/words/univ_12.js',
  './data/words/univ_13.js',
  './data/words/univ_14.js',
  './data/words/univ_15.js',
  './data/words/univ_16.js',
  './data/words/univ_17.js',
  './data/words/univ_18.js',
  './data/words/univ_19.js',
  './data/words/univ_20.js',
  './data/words/univ_21.js',
  './data/words/univ_22.js',
  './data/words/univ_23.js',
  './data/words/univ_24.js',
  './data/words/univ_25.js',
  './data/words/univ_26.js',
  './data/words/univ_27.js',
  './data/words/univ_28.js',
  './data/words/univ_29.js',
  './data/words/univ_30.js',
  './data/words/univ_31.js',
  './data/words/univ_32.js',
  './data/words/univ_33.js',
  './data/words/univ_34.js',
  './data/words/univ_35.js',
  // WORDS:END
  './images/part1/p1-01.jpg', './images/part1/p1-02.jpg', './images/part1/p1-03.jpg', './images/part1/p1-04.jpg', './images/part1/p1-05.jpg', './images/part1/p1-06.jpg', './images/part1/p1-07.jpg',
  './images/part1/p1-08.jpg', './images/part1/p1-09.jpg', './images/part1/p1-10.jpg', './images/part1/p1-11.jpg', './images/part1/p1-12.jpg', './images/part1/p1-13.jpg', './images/part1/p1-14.jpg',
  './manifest.webmanifest', './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png',
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  // 'jiho-media' (사용자가 내려받은 리스닝 음성·사진 묶음) 은 앱을 업데이트해도 지우지 않음
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== MEDIA).map(k => caches.delete(k))))
    .then(() => caches.open(MEDIA)).then(c => c.keys().then(reqs => Promise.all(reqs.filter(r => MEDIA_STALE.some(x => r.url.includes(x))).map(r => c.delete(r)))))
    .then(() => self.clients.claim()));
});
const MEDIA = 'jiho-media';
// 내용이 바뀐 음성·사진: 업데이트 때 저장본을 지워서 새로 받게 함 (음성을 다시 만들면 여기에 추가)
const MEDIA_STALE = ['/audio/dir-'];
// 음성·사진: 저장해 둔 게 있으면 그걸 먼저 (데이터 절약), 없으면 받아서 저장
// 나머지(앱 파일): 네트워크 우선, 실패하면(오프라인) 저장해 둔 파일 사용
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (/\/(audio|images)\//.test(url.pathname)) {
    e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      if (res.status === 200) { const copy = res.clone(); caches.open(MEDIA).then(c => c.put(e.request, copy)); }
      return res;
    })));
    return;
  }
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' })  // 항상 서버에 새 버전이 있는지 확인
      .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
