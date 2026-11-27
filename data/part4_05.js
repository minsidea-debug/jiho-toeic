/* Part 4 · 짧은 담화 추가 묶음 05 (세트 p4-s41 ~ s50, 문제 p4-121 ~ 150) — 직접 창작. 형식은 part3_02.js 참고 (화자 1명)
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(4, 41, 121, [
  { title: '전화 메시지 · 주문 상품 품절', voices: { M: 'US' },
    script: [
      ['M', 'Hello, this is Victor from Home Plus calling for Ms. Allen about your order for a blue office chair.'],
      ['M', 'Unfortunately, that color is sold out, and the manufacturer has stopped making it. We do have the same chair in black or gray.'],
      ['M', 'If you\'d like to switch colors, just reply to the e-mail we sent you this morning. Otherwise, we\'ll give you a full refund.'],
    ],
    ko: ['안녕하세요, 홈 플러스의 빅터입니다. 앨런 씨가 주문하신 파란 사무용 의자 건으로 전화드려요.', '안타깝게도 그 색상은 품절이고 제조사가 생산을 중단했어요. 같은 의자로 검은색이나 회색은 있어요.', '색을 바꾸고 싶으시면 오늘 아침 보낸 이메일에 답장만 해 주세요. 아니면 전액 환불해 드릴게요.'],
    qs: [
      ['What is the problem with the order?', ['An item is not available.', 'An item was damaged.', 'A delivery was late.', 'The price was wrong.'], 0, '문제점', '파란색이 품절이라고 했으므로 (A)가 정답.', '주문에 어떤 문제가 있는가?'],
      ['What does the speaker offer?', ['A different color', 'A larger size', 'Free delivery', 'A discount coupon'], 0, '제안', '검은색이나 회색으로 바꿀 수 있다고 했으므로 (A)가 정답.', '화자는 무엇을 제안하는가?'],
      ['How should the listener respond?', ['By replying to an e-mail', 'By calling back', 'By visiting the store', 'By filling out a form'], 0, '요청', '오늘 아침 보낸 이메일에 답장하라고 했으므로 (A)가 정답.', '듣는 사람은 어떻게 답해야 하는가?'],
    ] },

  { title: '미술관 안내방송 · 폐관', voices: { W: 'UK' },
    script: [
      ['W', 'Good afternoon, visitors. The museum will be closing in thirty minutes, at five o\'clock.'],
      ['W', 'The gift shop on the first floor will remain open until five thirty.'],
      ['W', 'Don\'t forget that our special exhibition of modern sculpture ends this Sunday. Thank you for visiting.'],
    ],
    ko: ['관람객 여러분, 안녕하세요. 미술관은 30분 후인 5시에 문을 닫습니다.', '1층 기념품점은 5시 30분까지 엽니다.', '현대 조각 특별전이 이번 일요일에 끝난다는 걸 잊지 마세요. 방문해 주셔서 감사합니다.'],
    qs: [
      ['What time will the museum close?', ['At five o\'clock', 'At five thirty', 'At four thirty', 'At six o\'clock'], 0, '세부 사항', '30분 후인 5시에 닫는다고 했으므로 (A)가 정답. 5시 30분은 기념품점이라 함정.', '미술관은 몇 시에 닫는가?'],
      ['What is mentioned about the gift shop?', ['It stays open later.', 'It is having a sale.', 'It is on the second floor.', 'It is closed today.'], 0, '세부 사항', '기념품점은 5시 30분까지 연다고 했으므로 (A)가 정답.', '기념품점에 대해 무엇이 언급되는가?'],
      ['What will happen this Sunday?', ['A special exhibition will end.', 'A new exhibition will open.', 'The museum will be closed.', 'Admission will be free.'], 0, '세부 사항', '현대 조각 특별전이 일요일에 끝난다고 했으므로 (A)가 정답.', '이번 일요일에 무슨 일이 있는가?'],
    ] },

  { title: '광고 · 가전제품 매장 세일', voices: { M: 'AU' },
    script: [
      ['M', 'It\'s the biggest sale of the year at Electro World!'],
      ['M', 'From now until Sunday, all televisions and laptops are up to forty percent off, and we\'re offering free installation on all washing machines.'],
      ['M', 'Plus, the first fifty customers each day will receive a free pair of headphones. Don\'t miss out!'],
    ],
    ko: ['일렉트로 월드의 연중 최대 세일입니다!', '지금부터 일요일까지 모든 TV와 노트북이 최대 40퍼센트 할인되고, 모든 세탁기는 무료로 설치해 드립니다.', '게다가 매일 선착순 50명에게 헤드폰을 무료로 드립니다. 놓치지 마세요!'],
    qs: [
      ['What kind of business is being advertised?', ['An electronics store', 'A furniture store', 'A clothing store', 'A grocery store'], 0, '업종', 'TV·노트북·세탁기를 파는 일렉트로 월드이므로 (A)가 정답.', '어떤 업체가 광고되고 있는가?'],
      ['What is offered with washing machines?', ['Free installation', 'A longer warranty', 'A gift card', 'Free detergent'], 0, '세부 사항', '세탁기는 무료로 설치해 준다고 했으므로 (A)가 정답.', '세탁기와 함께 무엇이 제공되는가?'],
      ['Who will receive free headphones?', ['The first fifty customers each day', 'All laptop buyers', 'Members only', 'Customers who spend over $500'], 0, '세부 사항', '매일 선착순 50명이라고 했으므로 (A)가 정답.', '누가 무료 헤드폰을 받는가?'],
    ] },

  { title: '회의 · 출장 일정 (표)', voices: { W: 'CA' },
    graphic: { title: 'Business Trip – Week of March 3', rows: [['Day', 'City'], ['Monday', 'London'], ['Tuesday', 'Paris'], ['Wednesday', 'Berlin'], ['Thursday', 'Madrid']] },
    script: [
      ['W', 'I want to go over the schedule for next week\'s trip to visit our European clients.'],
      ['W', 'There\'s been one change. The client we were going to meet on Wednesday has asked to meet a day earlier, so we\'ll go to that city on Tuesday instead and visit Paris on Wednesday.'],
      ['W', 'I\'ve already changed the train tickets, and I\'ll e-mail the updated plan to you this afternoon.'],
    ],
    ko: ['다음 주 유럽 고객 방문 출장 일정을 검토하고 싶어요.', '한 가지 바뀌었어요. 수요일에 만나기로 한 고객이 하루 일찍 보자고 해서, 그 도시에 화요일에 가고 파리는 수요일에 가요.', '기차표는 이미 바꿨고, 오늘 오후에 수정된 계획을 이메일로 보낼게요.'],
    qs: [
      ['What is the purpose of the trip?', ['To visit clients', 'To attend a conference', 'To open an office', 'To go on vacation'], 0, '목적', '유럽 고객을 방문하는 출장이므로 (A)가 정답.', '출장의 목적은 무엇인가?'],
      ['Look at the graphic. Which city will the speakers visit on Tuesday?', ['London', 'Paris', 'Berlin', 'Madrid'], 2, '시각 정보', '원래 수요일 도시(베를린)를 화요일로 앞당긴다고 했으므로 Berlin입니다.', '표를 보시오. 화자들은 화요일에 어느 도시를 방문하는가?'],
      ['What will the speaker do this afternoon?', ['E-mail an updated plan', 'Buy train tickets', 'Call a client', 'Book a hotel'], 0, '다음 할 일', '오후에 수정된 계획을 이메일로 보내겠다고 했으므로 (A)가 정답.', '화자는 오늘 오후에 무엇을 할 것인가?'],
    ] },

  { title: '라디오 · 비즈니스 뉴스', voices: { M: 'UK' },
    script: [
      ['M', 'In business news, Harper Foods announced today that it will open a new factory in Springfield next year.'],
      ['M', 'The factory will produce frozen meals and is expected to create about four hundred jobs.'],
      ['M', 'The company says it chose Springfield because of its location near major highways, which will make it easier to ship products across the country.'],
    ],
    ko: ['비즈니스 뉴스입니다. 하퍼 푸드는 오늘 내년에 스프링필드에 새 공장을 연다고 발표했습니다.', '이 공장은 냉동식품을 생산하며 약 400개의 일자리를 만들 것으로 예상됩니다.', '회사는 주요 고속도로와 가까워 전국으로 제품을 운송하기 쉽다는 점 때문에 스프링필드를 선택했다고 밝혔습니다.'],
    qs: [
      ['What did Harper Foods announce?', ['A new factory', 'A new CEO', 'A price increase', 'A product recall'], 0, '주제', '새 공장을 연다고 발표했으므로 (A)가 정답.', '하퍼 푸드는 무엇을 발표했는가?'],
      ['How many jobs are expected to be created?', ['About four hundred', 'About forty', 'About four thousand', 'About one hundred'], 0, '세부 사항', '약 400개라고 했으므로 (A)가 정답.', '일자리는 몇 개 생길 것으로 예상되는가?'],
      ['Why was Springfield chosen?', ['It is near major highways.', 'Land is cheap there.', 'The company is from there.', 'It has many farms.'], 0, '이유', '주요 고속도로와 가깝다는 이유라고 했으므로 (A)가 정답.', '스프링필드는 왜 선택되었는가?'],
    ] },

  { title: '사내 공지 · 엘리베이터 점검', voices: { W: 'US' },
    script: [
      ['W', 'Attention, all staff. The elevators in the east wing will be out of service this Saturday for annual maintenance.'],
      ['W', 'If you\'re working on Saturday, please use the elevators in the west wing, which will be operating as usual.'],
      ['W', 'The work should be finished by Sunday morning. Thank you for your understanding.'],
    ],
    ko: ['전 직원께 알려 드립니다. 동관 엘리베이터가 이번 토요일 연례 점검으로 운행하지 않습니다.', '토요일에 근무하시는 분은 평소처럼 운행하는 서관 엘리베이터를 이용해 주세요.', '작업은 일요일 아침까지 끝날 예정입니다. 양해해 주셔서 감사합니다.'],
    qs: [
      ['What will happen on Saturday?', ['Elevator maintenance', 'A fire drill', 'An office move', 'A power outage'], 0, '주제', '동관 엘리베이터 연례 점검이 있다고 했으므로 (A)가 정답.', '토요일에 무슨 일이 있는가?'],
      ['What are staff working on Saturday asked to do?', ['Use elevators in another wing', 'Take the stairs', 'Work from home', 'Arrive early'], 0, '요청', '서관 엘리베이터를 이용하라고 했으므로 (A)가 정답.', '토요일 근무자는 무엇을 하라는 요청을 받는가?'],
      ['When should the work be finished?', ['By Sunday morning', 'By Saturday evening', 'By Monday', 'By Friday'], 0, '세부 사항', '일요일 아침까지 끝난다고 했으므로 (A)가 정답.', '작업은 언제 끝날 것인가?'],
    ] },

  { title: '요리 교실 소개', voices: { M: 'CA' },
    script: [
      ['M', 'Welcome to tonight\'s cooking class. I\'m Chef Marco, and today we\'re going to make fresh pasta from scratch.'],
      ['M', 'You\'ll find all the ingredients on the table in front of you. Please wash your hands and put on the aprons before we begin.'],
      ['M', 'At the end of the class, you can take home whatever you make, and I\'ll e-mail you the recipes.'],
    ],
    ko: ['오늘 밤 요리 교실에 오신 걸 환영합니다. 저는 셰프 마르코이고, 오늘은 생파스타를 처음부터 만들어 볼 거예요.', '재료는 모두 앞에 있는 탁자에 있어요. 시작하기 전에 손을 씻고 앞치마를 둘러 주세요.', '수업이 끝나면 만든 건 다 가져가실 수 있고, 레시피는 이메일로 보내 드릴게요.'],
    qs: [
      ['What will the listeners make?', ['Pasta', 'Bread', 'Soup', 'Pizza'], 0, '세부 사항', '생파스타를 만든다고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 만들 것인가?'],
      ['What are listeners asked to do first?', ['Wash their hands', 'Read the recipe', 'Buy ingredients', 'Turn on the oven'], 0, '요청', '시작 전에 손을 씻고 앞치마를 두르라고 했으므로 (A)가 정답.', '듣는 사람들은 먼저 무엇을 해 달라는 요청을 받는가?'],
      ['What will the speaker send by e-mail?', ['Recipes', 'Photos', 'A schedule', 'A receipt'], 0, '세부 사항', '레시피를 이메일로 보내 준다고 했으므로 (A)가 정답.', '화자는 이메일로 무엇을 보낼 것인가?'],
    ] },

  { title: '회의 · 고객 만족도 조사', voices: { W: 'AU' },
    script: [
      ['W', 'Thanks for joining today\'s meeting. Let\'s look at the results of our customer satisfaction survey.'],
      ['W', 'Overall, customers were very happy with the quality of our products. However, many said it takes too long to get a response from our support team.'],
      ['W', 'To fix this, we\'re going to add an online chat service. I\'d like each of you to suggest ideas for how it should work by Friday.'],
    ],
    ko: ['오늘 회의에 참석해 주셔서 고마워요. 고객 만족도 조사 결과를 봅시다.', '전반적으로 고객들은 제품 품질에 매우 만족했어요. 하지만 지원팀 답변을 받는 데 너무 오래 걸린다는 의견이 많았어요.', '이를 해결하기 위해 온라인 채팅 서비스를 추가할 거예요. 금요일까지 각자 어떻게 운영하면 좋을지 아이디어를 내 주세요.'],
    qs: [
      ['What were customers happy with?', ['Product quality', 'Prices', 'Delivery speed', 'The Web site'], 0, '세부 사항', '제품 품질에 매우 만족했다고 했으므로 (A)가 정답.', '고객들은 무엇에 만족했는가?'],
      ['What did many customers complain about?', ['Slow responses from support', 'Damaged products', 'High prices', 'Rude staff'], 0, '문제점', '지원팀 답변이 너무 오래 걸린다고 했으므로 (A)가 정답.', '많은 고객이 무엇에 대해 불평했는가?'],
      ['What are listeners asked to do by Friday?', ['Suggest ideas', 'Call customers', 'Complete a survey', 'Hire new staff'], 0, '요청', '금요일까지 아이디어를 내 달라고 했으므로 (A)가 정답.', '듣는 사람들은 금요일까지 무엇을 해 달라는 요청을 받는가?'],
    ] },

  { title: '공원 안내 · 등산로', voices: { M: 'US' },
    script: [
      ['M', 'Good morning, hikers, and welcome to Pine Mountain National Park.'],
      ['M', 'Today we\'ll be taking the Lake Trail, which is about eight kilometers long. We\'ll stop for lunch at the lake around noon.'],
      ['M', 'Please stay on the marked trail at all times. Some areas off the trail are home to rare plants that are easily damaged.'],
    ],
    ko: ['등산객 여러분, 좋은 아침입니다. 파인 마운틴 국립공원에 오신 걸 환영합니다.', '오늘은 약 8킬로미터 길이의 호수 길을 걸을 거예요. 정오쯤 호수에서 점심을 먹으며 쉴 거예요.', '항상 표시된 길로만 다녀 주세요. 길 밖 일부 지역에는 쉽게 훼손되는 희귀 식물이 자라고 있어요.'],
    qs: [
      ['Where is the talk taking place?', ['At a national park', 'At a lake resort', 'At a botanical garden', 'At a ski area'], 0, '장소', '국립공원에 오신 걸 환영한다고 했으므로 (A)가 정답.', '담화는 어디에서 이루어지는가?'],
      ['Where will the group have lunch?', ['At a lake', 'At a visitor center', 'At the top of the mountain', 'In a restaurant'], 0, '세부 사항', '정오쯤 호수에서 점심을 먹는다고 했으므로 (A)가 정답.', '일행은 어디에서 점심을 먹는가?'],
      ['Why are listeners asked to stay on the trail?', ['To protect rare plants', 'Because of wild animals', 'Because the ground is wet', 'To avoid getting lost'], 0, '이유', '길 밖에 쉽게 훼손되는 희귀 식물이 있다고 했으므로 (A)가 정답.', '왜 길로만 다니라고 하는가?'],
    ] },

  { title: '시상식 · 공로상 소개', voices: { W: 'UK' },
    script: [
      ['W', 'Our next award recognizes an employee who has gone above and beyond for our customers.'],
      ['W', 'This year, it goes to Henry Lopez from our Denver store. Henry started a free repair workshop for customers on weekends, and it has become hugely popular.'],
      ['W', 'Unfortunately, Henry couldn\'t be here tonight, so his manager will accept the award on his behalf.'],
    ],
    ko: ['다음 상은 고객을 위해 기대 이상의 노력을 한 직원에게 드리는 상입니다.', '올해는 덴버 매장의 헨리 로페즈에게 돌아갑니다. 헨리는 주말에 고객을 위한 무료 수리 워크숍을 시작했고, 이 워크숍은 큰 인기를 얻었습니다.', '안타깝게도 헨리는 오늘 밤 오지 못해서 그의 매니저가 대신 상을 받겠습니다.'],
    qs: [
      ['What is the purpose of the talk?', ['To present an award', 'To introduce a new store', 'To announce a workshop', 'To welcome new staff'], 0, '목적', '상을 수여하는 내용이므로 (A)가 정답.', '이 담화의 목적은 무엇인가?'],
      ['What did Henry Lopez start?', ['A free repair workshop', 'A new store', 'A customer survey', 'An online shop'], 0, '세부 사항', '무료 수리 워크숍을 시작했다고 했으므로 (A)가 정답.', '헨리 로페즈는 무엇을 시작했는가?'],
      ['Who will accept the award?', ['Henry\'s manager', 'Henry himself', 'A customer', 'The speaker'], 0, '세부 사항', '그의 매니저가 대신 받는다고 했으므로 (A)가 정답.', '누가 상을 받을 것인가?'],
    ] },
]);
