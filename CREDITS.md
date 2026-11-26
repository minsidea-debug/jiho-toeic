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
