/* Part 3 · 짧은 대화 추가 묶음 07 (세트 p3-s61 ~ s70, 문제 p3-181 ~ 210) — 직접 창작. 형식은 part3_02.js 참고
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(3, 61, 181, [
  { title: '인쇄소 · 명함 주문', voices: { W: 'CA', M: 'US' },
    script: [
      ['W', 'Hi, I\'d like to order business cards for our three new employees.'],
      ['M', 'Sure. Do you have the design ready, or would you like to use one of our templates?'],
      ['W', 'We have our own design. I\'ll e-mail it to you. How soon can they be ready?'],
      ['M', 'Normally in five days, but for an extra fee we can print them in two.'],
      ['W', 'Five days is fine. They don\'t start until the end of the month.'],
    ],
    ko: ['안녕하세요, 신입 사원 세 명의 명함을 주문하고 싶어요.', '좋아요. 디자인이 준비돼 있나요, 아니면 저희 템플릿을 쓰시겠어요?', '자체 디자인이 있어요. 이메일로 보낼게요. 얼마나 빨리 될까요?', '보통 5일인데, 추가 요금을 내시면 이틀 만에 인쇄해 드려요.', '5일이면 괜찮아요. 그분들은 월말에나 출근해요.'],
    qs: [
      ['What is the woman ordering?', ['Business cards', 'Brochures', 'Name tags', 'Posters'], 0, '세부 사항', '명함을 주문한다고 했으므로 (A)가 정답.', '여자는 무엇을 주문하는가?'],
      ['What will the woman send by e-mail?', ['A design', 'A payment', 'A list of names', 'A logo template'], 0, '세부 사항', '자체 디자인을 이메일로 보내겠다고 했으므로 (A)가 정답.', '여자는 이메일로 무엇을 보낼 것인가?'],
      ['Why does the woman choose the regular service?', ['The employees start later in the month.', 'The express service is unavailable.', 'She has a small budget.', 'She needs to check the design.'], 0, '이유', '신입 사원들이 월말에 출근한다고 했으므로 (A)가 정답.', '여자는 왜 일반 서비스를 고르는가?'],
    ] },

  { title: '회사 · 해외 지사 시차', voices: { M: 'UK', W: 'AU' },
    script: [
      ['M', 'I need to set up a call with our team in Sydney. What time works best for them?'],
      ['W', 'They\'re ten hours ahead of us. Early morning here is early evening there.'],
      ['M', 'So if we call at seven a.m., it\'ll be five in the evening for them.'],
      ['W', 'Right. That\'s usually the best time. Most of them are still in the office then.'],
    ],
    ko: ['시드니 팀과 통화 일정을 잡아야 해요. 그쪽은 몇 시가 가장 좋아요?', '그쪽이 우리보다 10시간 빨라요. 여기 이른 아침이 거기 이른 저녁이에요.', '그럼 오전 7시에 전화하면 그쪽은 저녁 5시겠네요.', '맞아요. 보통 그때가 가장 좋아요. 그때는 대부분 아직 사무실에 있거든요.'],
    qs: [
      ['What does the man want to do?', ['Schedule a call', 'Book a flight', 'Hire new staff', 'Visit Sydney'], 0, '목적', '시드니 팀과 통화 일정을 잡으려 하므로 (A)가 정답.', '남자는 무엇을 하고 싶어 하는가?'],
      ['What does the woman say about the Sydney team?', ['They are ahead in time.', 'They work part-time.', 'They are moving offices.', 'They prefer e-mail.'], 0, '세부 사항', '10시간 빠르다고 했으므로 (A)가 정답.', '여자는 시드니 팀에 대해 무엇을 말하는가?'],
      ['What time will it be in Sydney if the man calls at 7 A.M.?', ['5 P.M.', '7 P.M.', '3 P.M.', '9 A.M.'], 0, '세부 사항', '오전 7시에 전화하면 그쪽은 저녁 5시라고 했으므로 (A)가 정답.', '남자가 오전 7시에 전화하면 시드니는 몇 시인가?'],
    ] },

  { title: '가구점 · 소파 색상', voices: { W: 'US', M: 'CA' },
    script: [
      ['W', 'I really like this sofa, but do you have it in a darker color? I have a dog.'],
      ['M', 'It also comes in dark gray and navy blue, but we don\'t have those in the store.'],
      ['W', 'Can I order one?'],
      ['M', 'Yes. It\'ll take about three weeks to arrive from the factory. I can give you some fabric samples to take home.'],
    ],
    ko: ['이 소파 정말 마음에 드는데, 더 진한 색도 있어요? 개를 키우거든요.', '진회색과 남색도 나오는데, 매장에는 없어요.', '주문할 수 있어요?', '네. 공장에서 오는 데 3주 정도 걸려요. 집에 가져가실 천 견본을 드릴게요.'],
    qs: [
      ['Why does the woman want a darker color?', ['She has a pet.', 'It matches her walls.', 'It is cheaper.', 'It is more popular.'], 0, '이유', '개를 키운다고 했으므로 반려동물이 있다는 (A)가 정답.', '여자는 왜 더 진한 색을 원하는가?'],
      ['How long will delivery take?', ['About three weeks', 'About three days', 'About one week', 'About two months'], 0, '세부 사항', '공장에서 오는 데 3주 정도 걸린다고 했으므로 (A)가 정답.', '배송은 얼마나 걸리는가?'],
      ['What does the man offer the woman?', ['Fabric samples', 'A discount', 'Free delivery', 'A catalog'], 0, '제안', '천 견본을 주겠다고 했으므로 (A)가 정답.', '남자는 여자에게 무엇을 주겠다고 하는가?'],
    ] },

  { title: '회사 · 컨퍼런스 등록 (표)', voices: { M: 'AU', W: 'UK' },
    graphic: { title: 'Marketing Conference – Registration Fees', rows: [['Deadline', 'Fee'], ['By May 1', '$250'], ['By June 1', '$300'], ['By July 1', '$350'], ['At the door', '$400']] },
    script: [
      ['M', 'Hannah, are you going to the marketing conference in July?'],
      ['W', 'I\'d like to. I need to register soon, though. Prices go up after each deadline.'],
      ['M', 'Today is May twentieth, so you still have some time before the next increase.'],
      ['W', 'Right. I\'ll ask my manager to approve it today and register this week.'],
    ],
    ko: ['해나, 7월 마케팅 컨퍼런스에 가요?', '가고 싶어요. 근데 빨리 등록해야 해요. 마감일마다 가격이 올라요.', '오늘이 5월 20일이니까 다음 인상까지 아직 시간이 있어요.', '맞아요. 오늘 매니저에게 승인을 요청하고 이번 주에 등록할게요.'],
    qs: [
      ['What are the speakers discussing?', ['Registering for a conference', 'Planning a marketing campaign', 'Hiring a manager', 'Booking a hotel'], 0, '주제', '컨퍼런스 등록 이야기를 하므로 (A)가 정답.', '화자들은 무엇에 대해 이야기하는가?'],
      ['Look at the graphic. How much will the woman most likely pay?', ['$250', '$300', '$350', '$400'], 1, '시각 정보', '오늘이 5월 20일이고 이번 주에 등록하면 6월 1일 마감 요금인 $300를 냅니다.', '표를 보시오. 여자는 얼마를 낼 것 같은가?'],
      ['What will the woman do today?', ['Ask for her manager\'s approval', 'Pay the fee', 'Book a flight', 'Call the organizers'], 0, '다음 할 일', '오늘 매니저에게 승인을 요청하겠다고 했으므로 (A)가 정답.', '여자는 오늘 무엇을 할 것인가?'],
    ] },

  { title: '도시 · 자전거 대여', voices: { W: 'AU', M: 'UK' },
    script: [
      ['W', 'Excuse me, how do I rent one of these city bikes?'],
      ['M', 'You need to download the city bike app and register a credit card.'],
      ['W', 'I\'m a tourist, and my phone doesn\'t have data here.'],
      ['M', 'In that case, you can buy a day pass at the visitor center across the square. They\'ll give you a card to unlock the bikes.'],
    ],
    ko: ['실례합니다, 이 공공 자전거는 어떻게 빌려요?', '공공 자전거 앱을 내려받고 신용카드를 등록해야 해요.', '저는 관광객이라 여기서 휴대전화 데이터가 안 돼요.', '그럼 광장 건너편 관광 안내소에서 1일권을 사시면 돼요. 자전거 잠금을 푸는 카드를 줄 거예요.'],
    qs: [
      ['What does the woman want to do?', ['Rent a bicycle', 'Buy a phone', 'Find a hotel', 'Take a tour'], 0, '목적', '공공 자전거를 빌리는 방법을 물었으므로 (A)가 정답.', '여자는 무엇을 하고 싶어 하는가?'],
      ['What problem does the woman mention?', ['She cannot use mobile data.', 'She lost her credit card.', 'The bikes are all taken.', 'She does not know the way.'], 0, '문제점', '휴대전화 데이터가 안 된다고 했으므로 (A)가 정답.', '여자는 어떤 문제를 언급하는가?'],
      ['Where does the man suggest going?', ['To a visitor center', 'To a bike shop', 'To a phone store', 'To a bank'], 0, '제안', '광장 건너편 관광 안내소에 가라고 했으므로 (A)가 정답.', '남자는 어디에 가라고 제안하는가?'],
    ] },

  { title: '회사 · 연말 파티 준비 (3명)', voices: { W: 'CA', M: 'US', W2: 'UK' },
    script: [
      ['W', 'OK, let\'s finalize the plans for the year-end party. Grace, did you find a band?'],
      ['W2', 'Yes, a jazz band that played at another company\'s party. They\'re available on December fifteenth.'],
      ['M', 'That\'s the date we chose. What about food?'],
      ['W', 'The caterer needs the final number of guests by Friday.'],
      ['M', 'I\'ll send a reminder to everyone who hasn\'t replied yet.'],
    ],
    ko: ['자, 연말 파티 계획을 확정하죠. 그레이스, 밴드 찾았어요?', '네, 다른 회사 파티에서 공연한 재즈 밴드요. 12월 15일에 시간이 된대요.', '우리가 정한 날이네요. 음식은요?', '출장 요리 업체가 금요일까지 최종 손님 수를 알려 달래요.', '아직 답장 안 한 사람들에게 다시 알림을 보낼게요.'],
    qs: [
      ['What are the speakers planning?', ['A year-end party', 'A product launch', 'A client dinner', 'A music festival'], 0, '주제', '연말 파티 계획을 확정하고 있으므로 (A)가 정답.', '화자들은 무엇을 계획하고 있는가?'],
      ['What does the caterer need?', ['A final guest count', 'A deposit', 'A menu choice', 'A venue address'], 0, '세부 사항', '금요일까지 최종 손님 수가 필요하다고 했으므로 (A)가 정답.', '출장 요리 업체는 무엇이 필요한가?'],
      ['What will the man do?', ['Send a reminder', 'Call the band', 'Book a venue', 'Order food'], 0, '다음 할 일', '답장 안 한 사람들에게 알림을 보내겠다고 했으므로 (A)가 정답.', '남자는 무엇을 할 것인가?'],
    ] },

  { title: '치과 · 예약 확인 전화', voices: { M: 'CA', W: 'US' },
    script: [
      ['M', 'Hi, this is Riverside Dental calling to confirm your appointment tomorrow at two.'],
      ['W', 'Oh, thanks for calling. Actually, I\'d like to ask about parking. Is there a lot nearby?'],
      ['M', 'Yes, there\'s a parking lot behind our building. Just bring your ticket inside, and we\'ll validate it.'],
      ['W', 'Great, so parking will be free?'],
      ['M', 'Yes, for up to two hours.'],
    ],
    ko: ['안녕하세요, 리버사이드 치과인데요, 내일 2시 예약을 확인하려고 전화드렸어요.', '아, 전화 고마워요. 사실 주차에 대해 묻고 싶었어요. 근처에 주차장 있나요?', '네, 건물 뒤에 주차장이 있어요. 주차권을 안으로 가져오시면 확인 도장을 찍어 드려요.', '좋아요, 그럼 주차가 무료인 거죠?', '네, 두 시간까지요.'],
    qs: [
      ['Why is the man calling?', ['To confirm an appointment', 'To cancel an appointment', 'To change a doctor', 'To request a payment'], 0, '목적', '내일 예약을 확인하려고 전화했다고 했으므로 (A)가 정답.', '남자는 왜 전화하는가?'],
      ['What does the woman ask about?', ['Parking', 'Prices', 'Insurance', 'Directions'], 0, '세부 사항', '주차에 대해 물었으므로 (A)가 정답.', '여자는 무엇에 대해 묻는가?'],
      ['How long can the woman park for free?', ['Up to two hours', 'Up to one hour', 'All day', 'Thirty minutes'], 0, '세부 사항', '두 시간까지 무료라고 했으므로 (A)가 정답.', '여자는 얼마 동안 무료로 주차할 수 있는가?'],
    ] },

  { title: '회사 · 신제품 테스트 결과', voices: { W: 'UK', M: 'AU' },
    script: [
      ['W', 'How did the customer tests for the new headphones go?'],
      ['M', 'People loved the sound quality, but several said they felt a little heavy.'],
      ['W', 'Hmm, that could be a problem for people who wear them all day.'],
      ['M', 'The engineers think they can use a lighter material for the headband. They\'ll have a new version ready in two weeks.'],
    ],
    ko: ['새 헤드폰 고객 테스트는 어떻게 됐어요?', '음질은 아주 좋아했는데, 여러 명이 조금 무겁다고 했어요.', '음, 하루 종일 쓰는 사람에게는 문제가 될 수 있겠네요.', '엔지니어들이 머리띠 부분에 더 가벼운 소재를 쓸 수 있대요. 2주 후에 새 버전이 준비될 거예요.'],
    qs: [
      ['What product are the speakers discussing?', ['Headphones', 'A laptop', 'A smartwatch', 'A speaker'], 0, '주제', '새 헤드폰 테스트 이야기이므로 (A)가 정답.', '화자들은 어떤 제품에 대해 이야기하는가?'],
      ['What did some customers complain about?', ['The weight', 'The price', 'The color', 'The sound'], 0, '세부 사항', '조금 무겁다고 했으므로 무게인 (A)가 정답. 음질은 좋아했으니 (D)는 함정.', '일부 고객은 무엇에 대해 불평했는가?'],
      ['What will happen in two weeks?', ['A new version will be ready.', 'The product will be launched.', 'More tests will be canceled.', 'The engineers will be hired.'], 0, '세부 사항', '2주 후에 새 버전이 준비된다고 했으므로 (A)가 정답.', '2주 후에 무슨 일이 있는가?'],
    ] },

  { title: '여행사 · 크루즈 문의', voices: { M: 'US', W: 'CA' },
    script: [
      ['M', 'Hi, I saw your advertisement for the seven-day Caribbean cruise. Is the price per person?'],
      ['W', 'Yes, it\'s nine hundred dollars per person, and that includes all meals.'],
      ['M', 'What about drinks and activities on the islands?'],
      ['W', 'Those are extra. But if you book before the end of the month, you get a free island tour.'],
    ],
    ko: ['안녕하세요, 7일짜리 카리브해 크루즈 광고를 봤는데요. 가격이 1인당인가요?', '네, 1인당 900달러이고 식사가 모두 포함돼요.', '음료와 섬에서 하는 활동은요?', '그건 별도예요. 하지만 이달 말 전에 예약하시면 섬 투어가 무료예요.'],
    qs: [
      ['What is the man asking about?', ['A cruise', 'A flight', 'A hotel', 'A car rental'], 0, '주제', '카리브해 크루즈 광고를 보고 문의했으므로 (A)가 정답.', '남자는 무엇에 대해 묻는가?'],
      ['What is included in the price?', ['Meals', 'Drinks', 'Island activities', 'Airfare'], 0, '세부 사항', '식사가 모두 포함된다고 했으므로 (A)가 정답.', '가격에 무엇이 포함되는가?'],
      ['What will customers receive if they book before the end of the month?', ['A free tour', 'A cabin upgrade', 'A discount on drinks', 'A gift bag'], 0, '세부 사항', '이달 말 전 예약 시 섬 투어가 무료라고 했으므로 (A)가 정답.', '이달 말 전에 예약하면 무엇을 받는가?'],
    ] },

  { title: '회사 · 직원 추천 제도', voices: { W: 'AU', M: 'UK' },
    script: [
      ['W', 'Did you know the company pays a bonus if you recommend someone who gets hired?'],
      ['M', 'Really? How much is it?'],
      ['W', 'Five hundred dollars, after the new person has worked here for three months.'],
      ['M', 'My friend is looking for a job in accounting. I\'ll tell her to apply.'],
    ],
    ko: ['추천한 사람이 채용되면 회사가 보너스를 준다는 거 알았어요?', '정말요? 얼마예요?', '500달러요. 새로 온 사람이 여기서 석 달 일하고 나면요.', '제 친구가 회계 쪽 일자리를 찾고 있어요. 지원하라고 말해야겠어요.'],
    qs: [
      ['What are the speakers discussing?', ['An employee referral bonus', 'A salary increase', 'A training program', 'An accounting error'], 0, '주제', '추천한 사람이 채용되면 주는 보너스 이야기이므로 (A)가 정답.', '화자들은 무엇에 대해 이야기하는가?'],
      ['When is the bonus paid?', ['After three months', 'Right after hiring', 'At the end of the year', 'After one month'], 0, '세부 사항', '새 사람이 석 달 일한 후라고 했으므로 (A)가 정답.', '보너스는 언제 지급되는가?'],
      ['What will the man most likely do?', ['Encourage a friend to apply', 'Apply for a new job', 'Talk to the accounting team', 'Ask for a bonus'], 0, '다음 할 일', '친구에게 지원하라고 말하겠다고 했으므로 (A)가 정답.', '남자는 무엇을 할 것 같은가?'],
    ] },
]);
