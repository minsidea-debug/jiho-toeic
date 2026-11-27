# Jiho 토익공부 앱

사용자는 개발 경험이 없습니다. 설명은 쉬운 한국어로, 설치·빌드 도구가 필요 없는 방식을 유지하세요.

## 구조 (빌드 없는 순수 HTML/CSS/JS + PWA)
- `index.html` – 진입점. `<script>` 순서: data → store → app (ES 모듈·fetch 금지: file:// 로 열어도 동작해야 함)
- `data/part5.js`, `part6.js`, `part7.js` – 문제 데이터 (`window.TOEIC_SETS`에 push). 형식은 각 파일 상단 주석 참고
  - Part 6 빈칸은 지문 안 `[[1]]`~`[[4]]`, 문제의 `blank` 번호와 일치
  - `answer`는 0~3 (A~D), 보기는 항상 4개, `id`는 중복 금지(학습 기록 키)
  - 문제는 직접 창작(ETS 기출 복제 금지)
- `data/part1.js` – 리스닝 Part 1 (사진 묘사). 세트 1개 = 문제 1개, `img`(images/part1/, StockSnap CC0 · 출처 CREDITS.md)·`voice`·`choicesKo`. 사진 추가 시 sw.js FILES 에도 추가
- `data/part2.js` – 리스닝 Part 2 (질의응답) 문제. 리딩과 같은 `TOEIC_SETS`(세트 1개 = 문제 1개, part 2), 보기 3개, `voices`(US/UK/AU/CA)·`choicesKo` 추가. 형식은 파일 상단 주석
- `data/part3.js` – 리스닝 Part 3 (짧은 대화). 세트 = 대화 1개 + 문제 3개, `script`([화자, 대사])·`ko`·`voices`·`graphic`(표 문제). Part 4 도 같은 형식(`data/part4.js`, 화자 1명)
- `audio/*.mp3` + `data/audio_index.js` – 리스닝 AI 음성(Kokoro). **Part 1~4 대본을 고치거나 문제를 추가하면** `node sources/tts/dump_sets.js > sources/tts/sets.json` → `sources/tts/.venv/Scripts/python.exe sources/tts/make_audio.py` (고친 문제는 해당 mp3 를 지우고 실행). 파일이 없으면 기기 음성으로 자동 대체
- `js/listen.js` – 리스닝 음성(Web Speech API, 파일 없음). `Listen.part2(q)` / `Listen.stop()`, 속도 `settings.listenRate`. 조사·계획: `sources/LISTENING_PLAN.md`
- `data/words_elem|middle|high|univ.js` – 단어 외우기 데이터 (`window.TOEIC_WORDS.<level>`), 형식은 `words_elem.js` 상단 주석
  - 같은 난이도 안에서 뜻(m)이 겹치면 안 됨 (5지선다 오답 보기로 사용)
- `data/word_synonyms.js` – 유사 단어(thesaurus) `window.TOEIC_SYNONYMS[단어] = [[유사어, 뜻], ...]`. 단어를 추가하면 여기도 추가
- `js/words.js` – 단어 외우기(난이도 탭·문제 방향 영→한/한→영/섞기·유사 단어 포함)(오늘의 단어·5지선다·예문·품사 변형·틀린 단어 재풀이). app.js 뒤에 로드
- `data/words_loader.js` + `data/words/<level>_<nn>.js` – NGSL·TSL 기반 추가 단어 묶음 (`addWords(level, [...])`, 7번째 칸 = 유사 단어)
  - 작업 절차·진행 상황: `sources/PROGRESS.md` (묶음 작성 → `node sources/check_words.js` → `python -I sources/update_lists.py`)
  - 출처 표기: `CREDITS.md` (CC BY-SA 4.0)
- `js/store.js` – localStorage 학습 기록 (key `jiho-toeic-v1`)
- `js/app.js` – 해시 라우터(`#/home` 등), Views/Actions, 키보드 단축키
- `css/style.css` – 800px 이하에서 모바일(하단 탭) 레이아웃
  - 색은 모두 CSS 변수(`:root` / `:root[data-theme="dark"]`)로, 고정 색상 직접 쓰지 말 것. 글자 크기는 rem(설정의 글자 크기 = html font-size)
  - 글꼴은 `--font-ui`(한글·UI = settings.fontKo), `--font-en`(영어 지문·예문 = settings.fontEn + 한글 글꼴) 변수
- 화면 설정(`js/app.js` 의 FONTS·applyPrefs): 테마(라이트/다크/시스템)·한글 글꼴·영어 글꼴(각각 드롭다운, KO_FONTS·EN_FONTS)·글자 크기 13~22px·사이드바 접기(Ctrl+B), `settings`에 저장
- `sw.js`, `manifest.webmanifest`, `icons/` – PWA (http(s)로 열 때만). 파일 바꾸면 `sw.js`의 VERSION 올리기
- `토익공부 실행.bat` – Edge 앱 창으로 index.html 실행 (PC용)

## 계획
1. 리딩(Part 5·6·7) ✔
2. 리스닝(Part 1~4, 기기 음성) ← 현재 (Part 1~4 완료)
3. 갤럭시 S24: GitHub Pages 등에 올려 "홈 화면에 추가"(PWA). 기록은 설정 > 백업으로 이동

## 확인 방법
`.claude/launch.json`의 `toeic-app`(python http.server 8765)으로 미리보기.
