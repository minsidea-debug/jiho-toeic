/* Part 4 · 짧은 담화 추가 묶음 08 (세트 p4-s71 ~ s80, 문제 p4-211 ~ 240) — 직접 창작. 형식은 part3_02.js 참고 (화자 1명)
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(4, 71, 211, [
  { title: '전화 메시지 · 신용카드 확인', voices: { W: 'CA' },
    script: [
      ['W', 'Hello, this is the security team at First City Bank calling for Mr. Davis.'],
      ['W', 'We noticed a large purchase on your credit card this morning from an online store in another country. For your protection, we\'ve temporarily stopped the card.'],
      ['W', 'If you made this purchase, please call us at the number on the back of your card so we can reactivate it.'],
    ],
    ko: ['안녕하세요, 퍼스트 시티 은행 보안팀입니다. 데이비스 씨께 전화드려요.', '오늘 아침 고객님 신용카드로 다른 나라 온라인 상점에서 큰 금액 결제가 있었어요. 고객님 보호를 위해 카드를 일시 정지했습니다.', '직접 결제하신 거라면 카드 뒷면 번호로 전화 주세요. 다시 쓰실 수 있게 해 드릴게요.'],
    qs: [
      ['Who most likely is the speaker?', ['A bank employee', 'A store clerk', 'A police officer', 'A travel agent'], 0, '화자 정체', '은행 보안팀이라고 했으므로 (A)가 정답.', '화자는 누구일 것 같은가?'],
      ['Why was the card stopped?', ['An unusual purchase was made.', 'The card expired.', 'A payment was missed.', 'The card was reported lost.'], 0, '이유', '다른 나라 온라인 상점에서 큰 결제가 있었다고 했으므로 (A)가 정답.', '카드는 왜 정지되었는가?'],
      ['What should the listener do if he made the purchase?', ['Call the bank', 'Visit a branch', 'Cancel the order', 'Get a new card'], 0, '요청', '카드 뒷면 번호로 전화하라고 했으므로 (A)가 정답.', '듣는 사람이 직접 결제했다면 무엇을 해야 하는가?'],
    ] },

  { title: '백화점 안내방송 · 시식 행사', voices: { M: 'US' },
    script: [
      ['M', 'Good afternoon, shoppers. Visit our food hall on the basement level for a special tasting event happening now.'],
      ['M', 'Chefs from Bella Italia restaurant are serving free samples of their new pasta sauces until four o\'clock.'],
      ['M', 'All sauces are twenty percent off today only, so don\'t miss this chance.'],
    ],
    ko: ['쇼핑객 여러분, 안녕하세요. 지하 식품관에서 지금 열리는 특별 시식 행사에 들러 주세요.', '벨라 이탈리아 식당 셰프들이 4시까지 새 파스타 소스를 무료로 시식하게 해 드립니다.', '오늘 하루만 모든 소스가 20퍼센트 할인되니 이 기회를 놓치지 마세요.'],
    qs: [
      ['Where is the tasting event?', ['In the food hall', 'On the first floor', 'At the restaurant', 'Outside the store'], 0, '세부 사항', '지하 식품관이라고 했으므로 (A)가 정답.', '시식 행사는 어디에서 열리는가?'],
      ['What are the chefs serving?', ['Pasta sauces', 'Pizza', 'Desserts', 'Coffee'], 0, '세부 사항', '새 파스타 소스를 시식하게 해 준다고 했으므로 (A)가 정답.', '셰프들은 무엇을 제공하는가?'],
      ['What is offered today only?', ['A discount on sauces', 'A free cooking class', 'Free parking', 'A gift bag'], 0, '세부 사항', '오늘만 소스 20퍼센트 할인이라고 했으므로 (A)가 정답.', '오늘만 무엇이 제공되는가?'],
    ] },

  { title: '광고 · 이삿짐 센터', voices: { W: 'UK' },
    script: [
      ['W', 'Moving to a new home or office? Let Swift Movers make it easy.'],
      ['W', 'Our team will pack, load, and deliver your belongings safely, and we provide boxes at no extra charge.'],
      ['W', 'Call today for a free price estimate. We\'re available seven days a week, including evenings.'],
    ],
    ko: ['새 집이나 사무실로 이사하세요? 스위프트 무버스가 쉽게 해 드립니다.', '저희 팀이 짐을 싸고 싣고 안전하게 배달해 드리며, 상자는 추가 요금 없이 제공합니다.', '오늘 전화하시면 무료로 견적을 드립니다. 저녁을 포함해 주 7일 이용 가능합니다.'],
    qs: [
      ['What type of business is being advertised?', ['A moving company', 'A real estate agency', 'A storage facility', 'A furniture store'], 0, '업종', '이삿짐 서비스 광고이므로 (A)가 정답.', '어떤 업체가 광고되고 있는가?'],
      ['What does the business provide for free?', ['Boxes', 'Insurance', 'Cleaning', 'Storage'], 0, '세부 사항', '상자를 추가 요금 없이 준다고 했으므로 (A)가 정답.', '이 업체는 무엇을 무료로 제공하는가?'],
      ['What can listeners get by calling today?', ['A free estimate', 'A discount', 'Same-day service', 'A free box set'], 0, '세부 사항', '오늘 전화하면 무료 견적을 준다고 했으므로 (A)가 정답.', '오늘 전화하면 무엇을 받을 수 있는가?'],
    ] },

  { title: '회의 · 매장별 판매 (그래프)', voices: { M: 'CA' },
    graphic: { title: 'Sales by Store – March (units)', rows: [['Store', 'Sales'], ['Downtown', '1,500'], ['Airport', '900'], ['Mall', '1,200'], ['University', '600']] },
    script: [
      ['M', 'Let\'s look at March sales for our four coffee shops. Downtown did the best again.'],
      ['M', 'I\'m worried about the store with the lowest sales, though. Students have been on spring break, which may explain it.'],
      ['M', 'Still, I\'d like the manager there to try a student discount next month to see if it helps.'],
    ],
    ko: ['네 개 커피숍의 3월 판매를 봅시다. 시내점이 또 1등이에요.', '그런데 판매가 가장 낮은 매장이 걱정이에요. 학생들이 봄방학이었으니 그게 이유일 수도 있어요.', '그래도 그 매장 매니저에게 다음 달 학생 할인을 시도해서 효과가 있는지 보라고 하고 싶어요.'],
    qs: [
      ['What kind of business does the speaker work for?', ['A coffee shop chain', 'A university', 'An airport', 'A shopping mall'], 0, '업종', '네 개 커피숍 판매를 이야기하므로 (A)가 정답.', '화자는 어떤 업체에서 일하는가?'],
      ['Look at the graphic. Which store is the speaker worried about?', ['Downtown', 'Airport', 'Mall', 'University'], 3, '시각 정보', '판매가 가장 낮은 매장이 걱정이라고 했고, 학생 봄방학도 언급했습니다. 표에서 가장 낮은 곳은 University(600).', '표를 보시오. 화자는 어느 매장을 걱정하는가?'],
      ['What does the speaker want to try?', ['A student discount', 'Longer hours', 'A new menu', 'More staff'], 0, '제안', '학생 할인을 시도하고 싶다고 했으므로 (A)가 정답.', '화자는 무엇을 시도하고 싶어 하는가?'],
    ] },

  { title: '라디오 · 지역 뉴스 공원 개장', voices: { W: 'US' },
    script: [
      ['W', 'In local news, the newly renovated Lakeside Park reopened this morning after eight months of work.'],
      ['W', 'The park now has a larger playground, new walking paths, and an outdoor stage for summer concerts.'],
      ['W', 'The first concert is scheduled for next Friday evening and is free to the public.'],
    ],
    ko: ['지역 소식입니다. 새로 단장한 레이크사이드 공원이 8개월간의 공사를 마치고 오늘 아침 다시 문을 열었습니다.', '공원에는 이제 더 넓은 놀이터, 새 산책로, 여름 콘서트를 위한 야외 무대가 있습니다.', '첫 콘서트는 다음 주 금요일 저녁에 열리며 일반인에게 무료입니다.'],
    qs: [
      ['How long did the renovation take?', ['Eight months', 'Eight weeks', 'One year', 'Six months'], 0, '세부 사항', '8개월 공사를 마쳤다고 했으므로 (A)가 정답.', '보수 공사는 얼마나 걸렸는가?'],
      ['What was added to the park?', ['An outdoor stage', 'A swimming pool', 'A café', 'A parking garage'], 0, '세부 사항', '여름 콘서트용 야외 무대가 생겼다고 했으므로 (A)가 정답.', '공원에 무엇이 추가되었는가?'],
      ['What is said about the first concert?', ['It is free.', 'It is sold out.', 'It is on Saturday.', 'It was canceled.'], 0, '세부 사항', '일반인에게 무료라고 했으므로 (A)가 정답.', '첫 콘서트에 대해 무엇을 말하는가?'],
    ] },

  { title: '사내 공지 · 사내 체육관 개장', voices: { M: 'AU' },
    script: [
      ['M', 'I\'m happy to announce that our new employee gym on the fifth floor will open next Monday.'],
      ['M', 'It will be open from six a.m. to nine p.m., and it\'s free for all employees. Showers and lockers are also available.'],
      ['M', 'To use the gym, you\'ll need to complete a short safety form, which you can find on the HR page of the intranet.'],
    ],
    ko: ['5층 새 직원 체육관이 다음 주 월요일에 문을 연다는 소식을 기쁘게 알려 드립니다.', '오전 6시부터 오후 9시까지 운영하며 모든 직원에게 무료입니다. 샤워실과 사물함도 있어요.', '체육관을 이용하려면 짧은 안전 서식을 작성해야 하는데, 인트라넷 인사팀 페이지에 있어요.'],
    qs: [
      ['What will open next Monday?', ['An employee gym', 'A cafeteria', 'A parking garage', 'A day-care center'], 0, '주제', '직원 체육관이 문을 연다고 했으므로 (A)가 정답.', '다음 주 월요일에 무엇이 문을 여는가?'],
      ['What is mentioned about the facility?', ['It has lockers.', 'It charges a monthly fee.', 'It is open 24 hours.', 'It offers yoga classes.'], 0, '세부 사항', '샤워실과 사물함이 있다고 했으므로 (A)가 정답.', '시설에 대해 무엇이 언급되는가?'],
      ['What must employees do before using the gym?', ['Complete a safety form', 'Pay a deposit', 'Take a fitness test', 'Attend a meeting'], 0, '요청', '짧은 안전 서식을 작성해야 한다고 했으므로 (A)가 정답.', '직원들은 체육관 이용 전에 무엇을 해야 하는가?'],
    ] },

  { title: '관광 안내 · 섬 투어 버스', voices: { W: 'CA' },
    script: [
      ['W', 'Good morning and welcome aboard the Island Explorer tour. Today we\'ll visit three of the island\'s most famous beaches.'],
      ['W', 'At each stop, you\'ll have forty-five minutes to swim or take photos. Please be back on the bus on time so we can stay on schedule.'],
      ['W', 'Lunch is included and will be served at a seafood restaurant at our second stop.'],
    ],
    ko: ['좋은 아침입니다. 아일랜드 익스플로러 투어에 탑승하신 걸 환영합니다. 오늘은 섬에서 가장 유명한 해변 세 곳을 방문합니다.', '정류장마다 수영하거나 사진 찍을 시간이 45분 있어요. 일정을 지킬 수 있게 제시간에 버스로 돌아와 주세요.', '점심은 포함되어 있으며, 두 번째 정류장의 해산물 식당에서 제공됩니다.'],
    qs: [
      ['How many beaches will the group visit?', ['Three', 'Two', 'Four', 'Five'], 0, '세부 사항', '해변 세 곳을 방문한다고 했으므로 (A)가 정답.', '일행은 해변 몇 곳을 방문하는가?'],
      ['What are listeners asked to do?', ['Return to the bus on time', 'Bring their own lunch', 'Stay together at all times', 'Wear sunscreen'], 0, '요청', '제시간에 버스로 돌아오라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 해 달라는 요청을 받는가?'],
      ['Where will lunch be served?', ['At a seafood restaurant', 'On the bus', 'At a hotel', 'On the beach'], 0, '세부 사항', '해산물 식당에서 제공된다고 했으므로 (A)가 정답.', '점심은 어디에서 제공되는가?'],
    ] },

  { title: '회의 · 원격 근무 정책', voices: { M: 'UK' },
    script: [
      ['M', 'Starting in September, employees may work from home up to two days per week.'],
      ['M', 'You\'ll need to agree on which days with your manager, and everyone must be in the office on Tuesdays for team meetings.'],
      ['M', 'I know many of you asked for this, so I hope it makes your schedules easier. Please send any questions to me by e-mail.'],
    ],
    ko: ['9월부터 직원들은 일주일에 이틀까지 재택근무를 할 수 있습니다.', '어느 요일로 할지 매니저와 합의해야 하고, 팀 회의가 있는 화요일에는 모두 사무실에 나와야 합니다.', '많은 분이 요청하셨던 거라 일정이 좀 더 편해지길 바랍니다. 질문은 이메일로 보내 주세요.'],
    qs: [
      ['What is the talk mainly about?', ['A work-from-home policy', 'A new office', 'A training program', 'A holiday schedule'], 0, '주제', '재택근무 정책 이야기이므로 (A)가 정답.', '이 담화는 주로 무엇에 관한 것인가?'],
      ['What must all employees do on Tuesdays?', ['Come to the office', 'Submit reports', 'Work from home', 'Meet clients'], 0, '세부 사항', '화요일엔 모두 사무실에 나와야 한다고 했으므로 (A)가 정답.', '모든 직원은 화요일에 무엇을 해야 하는가?'],
      ['How should listeners send questions?', ['By e-mail', 'By phone', 'In a meeting', 'Through a form'], 0, '요청', '질문은 이메일로 보내라고 했으므로 (A)가 정답.', '질문은 어떻게 보내야 하는가?'],
    ] },

  { title: '전화 자동 안내 · 영화관', voices: { W: 'AU' },
    script: [
      ['W', 'Thank you for calling Star Cinema. This week we\'re showing the new action movie "Skyline" at five, seven thirty, and ten p.m.'],
      ['W', 'Every Tuesday, all tickets are half price.'],
      ['W', 'To buy tickets, please use our mobile app or Web site. Tickets are not sold over the phone.'],
    ],
    ko: ['스타 시네마에 전화해 주셔서 감사합니다. 이번 주에는 새 액션 영화 "스카이라인"을 오후 5시, 7시 30분, 10시에 상영합니다.', '매주 화요일에는 모든 표가 반값입니다.', '표는 모바일 앱이나 웹사이트에서 구매해 주세요. 전화로는 표를 판매하지 않습니다.'],
    qs: [
      ['What is being described?', ['Movie showtimes', 'A concert', 'A play', 'A sports game'], 0, '주제', '영화 상영 시간 안내이므로 (A)가 정답.', '무엇이 안내되고 있는가?'],
      ['What is special about Tuesdays?', ['Tickets are half price.', 'Popcorn is free.', 'The cinema is closed.', 'New movies open.'], 0, '세부 사항', '화요일엔 모든 표가 반값이라고 했으므로 (A)가 정답.', '화요일에는 무엇이 특별한가?'],
      ['How can callers buy tickets?', ['Through an app or Web site', 'Over the phone', 'At a convenience store', 'By e-mail'], 0, '세부 사항', '모바일 앱이나 웹사이트로 사라고 했으므로 (A)가 정답. 전화로는 팔지 않습니다.', '표는 어떻게 살 수 있는가?'],
    ] },

  { title: '세미나 · 연사 소개', voices: { M: 'US' },
    script: [
      ['M', 'Good morning, and thank you for joining our small business seminar.'],
      ['M', 'Our first speaker is Dr. Emily Stone, a professor of economics who has written three books about running a successful online store.'],
      ['M', 'Her talk will last about forty minutes. Copies of her latest book are available at the registration desk at a special price.'],
    ],
    ko: ['좋은 아침입니다. 소상공인 세미나에 참석해 주셔서 감사합니다.', '첫 연사는 성공적인 온라인 상점 운영에 관한 책을 세 권 쓴 경제학 교수 에밀리 스톤 박사입니다.', '강연은 40분 정도 진행됩니다. 박사님의 최신 저서는 등록 데스크에서 특별가에 구매하실 수 있습니다.'],
    qs: [
      ['Who is Dr. Emily Stone?', ['A professor', 'A store owner', 'A publisher', 'A journalist'], 0, '화자 정체', '경제학 교수라고 소개했으므로 (A)가 정답.', '에밀리 스톤 박사는 누구인가?'],
      ['What have Dr. Stone\'s books been about?', ['Running online stores', 'Personal finance', 'Marketing on TV', 'Starting restaurants'], 0, '세부 사항', '성공적인 온라인 상점 운영에 관한 책이라고 했으므로 (A)가 정답.', '스톤 박사의 책은 무엇에 관한 것인가?'],
      ['What is available at the registration desk?', ['Books at a special price', 'Free lunch tickets', 'Name tags', 'Seminar recordings'], 0, '세부 사항', '최신 저서를 특별가에 판다고 했으므로 (A)가 정답.', '등록 데스크에서 무엇을 구할 수 있는가?'],
    ] },
]);
