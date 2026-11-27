# 출처 (Credits)

## 단어 목록
이 앱의 추가 단어는 아래 공개 단어 목록에서 **단어 선정(어떤 단어를 배울지)** 에만 사용했습니다.
뜻·예문·해석·품사 변형·유사 단어는 이 앱을 위해 새로 작성한 내용입니다.

- **New General Service List (NGSL) 1.2** – Browne, C., Culligan, B., & Phillips, J.
  https://www.newgeneralservicelist.com/new-general-service-list
  Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
  → 초등·중등·고등 난이도 (빈도 순위로 구분)

- **TOEIC Service List (TSL) 1.2** – Browne, C., & Culligan, B.
  https://www.newgeneralservicelist.com/toeic-service-list
  Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
  → 대학(토익) 난이도

### 2차 추가 (총 10,000개 목표)
- **New Academic Word List (NAWL) 1.2** – Browne, C., Culligan, B., & Phillips, J.
  https://www.newgeneralservicelist.com/new-academic-word-list – CC BY-SA 4.0 → 대학 난이도
- **Business Service List (BSL) 1.20** – Browne, C., & Culligan, B.
  https://www.newgeneralservicelist.com/business-service-list – CC BY-SA 4.0 → 대학 난이도
- **NGSL 1.2 with SFI (31K 빈도 목록)** – Browne, C., Culligan, B., & Phillips, J.
  https://www.newgeneralservicelist.com/new-general-service-list – CC BY-SA 4.0 → 고등·대학 난이도 (빈도순)

원본: `sources/NAWL_12_lemmatized_for_teaching.csv`, `sources/BSL_120_stats.csv`, `sources/NGSLwithSFI-31K.xlsx`(→ `sources/NGSL_31K_ranked.csv`)

라이선스: https://creativecommons.org/licenses/by-sa/4.0/
CC BY-SA 4.0 조건에 따라, 위 목록을 바탕으로 만든 단어 데이터(`data/words/`)를 다른 사람에게 배포할 때는
이 출처 표기를 함께 남기고 같은 라이선스로 공유해야 합니다.

원본 목록 파일: `sources/NGSL_1.2_stats.csv`, `sources/TSL_1.2_stats.csv`

## Today's Quote (data/quotes.js)
- 명언 원문·인물 정보: Quotable 데이터 — https://github.com/quotable-io/data (원문 출처: Wikiquote 등 공개 자료)
- 영미권 인물의 짧은 명언 1,000개(인물 416명)를 골랐고, 한글 이름·이력은 직접 작성

## 발음기호 (data/word_ipa.js)
- 출처: [open-dict-data/ipa-dict](https://github.com/open-dict-data/ipa-dict) `en_US` (미국식 IPA)
- 라이선스: MIT License, Copyright (c) 2016 dohliam
- 앱에 맞게 첫 번째 발음만 골라 쓰고, `ɹ`·`ɫ` 를 `r`·`l` 로 바꿔 표기했습니다.

## 리스닝 Part 1 사진 (images/part1/)
- 모두 [StockSnap](https://stocksnap.io) 사진, 라이선스 **CC0 1.0 (퍼블릭 도메인)** — 출처 표기 의무는 없지만 감사의 뜻으로 적어 둡니다.
- 앱에 맞게 가로 800px로 줄이고 다시 압축했습니다. 문제 문장은 직접 창작했습니다.

| 파일 | 원본 | 촬영자 |
|---|---|---|
| p1-01.jpg | https://stocksnap.io/photo/laptop-typing-YBKJ1G35EX | LinkedIn Sales Navigator |
| p1-02.jpg | https://stocksnap.io/photo/business-man-BOBKRBMPVF | Direct Media |
| p1-03.jpg | https://stocksnap.io/photo/business-man-DUJOCEA5HW | Direct Media |
| p1-04.jpg | https://stocksnap.io/photo/working-women-DC7JUJKYTQ | Kristin Hardwick |
| p1-05.jpg | https://stocksnap.io/photo/people-man-RDHCSMZPFF | Roman Kraft |
| p1-06.jpg | https://stocksnap.io/photo/barista-pouring-MD4L58LL1E | Burst |
| p1-07.jpg | https://stocksnap.io/photo/street-road-Z44OU0YBB6 | Brandon Wong |
| p1-08.jpg | https://stocksnap.io/photo/boat-ship-0JUYCJ6O5E | AJ Montpetit |
| p1-09.jpg | https://stocksnap.io/photo/woman-blue-CXXONEIULG | Bruce Mars |
| p1-10.jpg | https://stocksnap.io/photo/crosswalk-intersection-FRIV8HI9GP | Peter Miranda |
| p1-11.jpg | https://stocksnap.io/photo/books-bookshop-K4BCIJPVOE | Suzy Hazelwood |
| p1-12.jpg | https://stocksnap.io/photo/woman-shop-E1KVAKFMUK | Burst |
| p1-13.jpg | https://stocksnap.io/photo/man-entering-7GXMY2JMR4 | Bruce Mars |
| p1-14.jpg | https://stocksnap.io/photo/art-gallery-7B52AC0C5F | Ryan McGuire |

## 리스닝 AI 음성 (audio/*.mp3)
- [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) (Apache License 2.0) 으로 직접 창작한 대본을 읽어 만든 음성입니다.
- 실행 도구: [kokoro-onnx](https://github.com/thewh1teagle/kokoro-onnx), MP3 변환: lameenc
- 목소리: af_heart · af_bella · am_michael · am_fenrir (미국식), bf_emma · bf_isabella · bm_george · bm_fable (영국식)
