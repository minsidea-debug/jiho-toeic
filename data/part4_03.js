/* Part 4 · 짧은 담화 추가 묶음 03 (세트 p4-s21 ~ s30, 문제 p4-061 ~ 090) — 직접 창작. 형식은 part3_02.js 참고 (화자 1명)
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(4, 21, 61, [
  { title: '전화 메시지 · 인테리어 견적', voices: { M: 'UK' },
    script: [
      ['M', 'Hi, Ms. Ortiz. This is Brian from Woodline Interiors, returning your call about remodeling your kitchen.'],
      ['M', 'I\'d be happy to give you a price estimate, but first I\'ll need to see the space and take some measurements.'],
      ['M', 'I\'m free on Wednesday or Thursday afternoon. Please send me a text message at this number to let me know which day is better.'],
    ],
    ko: ['안녕하세요, 오르티스 씨. 우드라인 인테리어의 브라이언입니다. 부엌 리모델링 건으로 다시 전화드려요.', '견적을 드리고 싶은데, 먼저 공간을 보고 치수를 재야 해요.', '수요일이나 목요일 오후에 시간이 돼요. 어느 날이 좋은지 이 번호로 문자 보내 주세요.'],
    qs: [
      ['What is the purpose of the call?', ['To respond to a request about remodeling', 'To advertise a sale', 'To confirm a payment', 'To cancel a project'], 0, '목적', '부엌 리모델링 건으로 다시 전화했다고 했으므로 (A)가 정답.', '전화의 목적은 무엇인가?'],
      ['What does the speaker need to do first?', ['Measure a space', 'Order materials', 'Hire workers', 'Send a contract'], 0, '세부 사항', '먼저 공간을 보고 치수를 재야 한다고 했으므로 (A)가 정답.', '화자는 먼저 무엇을 해야 하는가?'],
      ['How should the listener respond?', ['By text message', 'By e-mail', 'By calling the office', 'By visiting the store'], 0, '요청', '문자로 알려 달라고 했으므로 (A)가 정답.', '듣는 사람은 어떻게 답해야 하는가?'],
    ] },

  { title: '쇼핑몰 안내방송 · 분실 아동', voices: { W: 'CA' },
    script: [
      ['W', 'Attention, shoppers. We have a young boy named Leo at the information desk on the first floor, near the main entrance.'],
      ['W', 'He is wearing a red jacket and is looking for his parents.'],
      ['W', 'If you are with Leo, please come to the information desk. Thank you.'],
    ],
    ko: ['쇼핑객 여러분께 알려 드립니다. 1층 정문 근처 안내 데스크에 레오라는 어린 남자아이가 있습니다.', '빨간 재킷을 입고 있고 부모님을 찾고 있습니다.', '레오의 보호자께서는 안내 데스크로 와 주세요. 감사합니다.'],
    qs: [
      ['Where is the announcement being made?', ['At a shopping mall', 'At a school', 'At an airport', 'At a hospital'], 0, '장소', '쇼핑객에게 하는 방송이므로 쇼핑몰입니다. (A)가 정답.', '이 방송은 어디에서 나오는가?'],
      ['What is Leo wearing?', ['A red jacket', 'A blue hat', 'A green shirt', 'A yellow raincoat'], 0, '세부 사항', '빨간 재킷을 입고 있다고 했으므로 (A)가 정답.', '레오는 무엇을 입고 있는가?'],
      ['Where is the information desk?', ['Near the main entrance', 'On the second floor', 'Next to the food court', 'By the parking lot'], 0, '세부 사항', '1층 정문 근처라고 했으므로 (A)가 정답.', '안내 데스크는 어디에 있는가?'],
    ] },

  { title: '광고 · 온라인 외국어 강좌', voices: { W: 'US' },
    script: [
      ['W', 'Want to learn a new language but don\'t have time for classes? Try LinguaGo, the online language school.'],
      ['W', 'Our native-speaking teachers offer one-on-one lessons any time of day, so you can study whenever it suits you.'],
      ['W', 'Sign up now and your first two lessons are free. Visit linguago dot com to choose your teacher.'],
    ],
    ko: ['새 언어를 배우고 싶은데 수업 들을 시간이 없으세요? 온라인 어학원 링구아고를 이용해 보세요.', '원어민 선생님들이 하루 중 아무 때나 일대일 수업을 해 드려서, 편한 시간에 언제든 공부할 수 있어요.', '지금 가입하시면 처음 두 번의 수업이 무료입니다. linguago.com에서 선생님을 고르세요.'],
    qs: [
      ['What is being advertised?', ['An online language school', 'A travel agency', 'A translation service', 'A bookstore'], 0, '주제', '온라인 어학원 광고이므로 (A)가 정답.', '무엇이 광고되고 있는가?'],
      ['What is an advantage of the service?', ['Lessons are available at any time.', 'Classes are held in large groups.', 'Textbooks are free.', 'It is the cheapest in the city.'], 0, '세부 사항', '하루 중 아무 때나 수업이 가능하다고 했으므로 (A)가 정답.', '이 서비스의 장점은 무엇인가?'],
      ['What do new members receive?', ['Two free lessons', 'A discount on books', 'A free trip', 'A certificate'], 0, '세부 사항', '처음 두 번의 수업이 무료라고 했으므로 (A)가 정답.', '신규 회원은 무엇을 받는가?'],
    ] },

  { title: '공장 안내 · 안전 교육 (표)', voices: { M: 'AU' },
    graphic: { title: 'Factory Tour Schedule', rows: [['Time', 'Area'], ['10:00', 'Safety Briefing'], ['10:20', 'Assembly Line'], ['11:00', 'Packaging'], ['11:30', 'Quality Control Lab']] },
    script: [
      ['M', 'Good morning, and welcome to Hanson Motors. Before we start the tour, here are a few safety rules.'],
      ['M', 'Please wear the safety glasses we gave you at all times, and stay inside the yellow lines on the floor.'],
      ['M', 'One change to the schedule: the packaging area is being cleaned this morning, so we\'ll skip it and go straight to the lab after the assembly line.'],
    ],
    ko: ['좋은 아침입니다. 핸슨 모터스에 오신 걸 환영합니다. 견학을 시작하기 전에 몇 가지 안전 수칙을 알려 드릴게요.', '나눠 드린 보안경을 항상 쓰시고, 바닥의 노란 선 안쪽에 계세요.', '일정에 한 가지 변경이 있어요. 포장 구역이 오늘 아침 청소 중이라 건너뛰고 조립 라인 다음에 바로 실험실로 갑니다.'],
    qs: [
      ['What are listeners asked to do?', ['Wear safety glasses', 'Turn off their phones', 'Sign a form', 'Stay in their cars'], 0, '요청', '보안경을 항상 쓰라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 해 달라는 요청을 받는가?'],
      ['Look at the graphic. Which area will NOT be visited?', ['Safety Briefing', 'Assembly Line', 'Packaging', 'Quality Control Lab'], 2, '시각 정보', '포장 구역이 청소 중이라 건너뛴다고 했으므로 Packaging입니다.', '표를 보시오. 어느 구역을 방문하지 않는가?'],
      ['What does the company most likely produce?', ['Cars', 'Furniture', 'Clothing', 'Food'], 0, '업종', '회사 이름이 핸슨 모터스(Motors)이므로 자동차입니다. (A)가 정답.', '회사는 무엇을 생산할 것 같은가?'],
    ] },

  { title: '뉴스 · 새 도서관 개관', voices: { W: 'UK' },
    script: [
      ['W', 'In local news, the new Westbrook Public Library will open its doors this Saturday.'],
      ['W', 'The three-story building includes a large children\'s area, a computer lab, and a rooftop garden where visitors can read outdoors.'],
      ['W', 'The opening ceremony begins at ten a.m., and the first one hundred visitors will receive a free tote bag.'],
    ],
    ko: ['지역 소식입니다. 새 웨스트브룩 공공 도서관이 이번 토요일에 문을 엽니다.', '3층 건물에는 넓은 어린이 공간, 컴퓨터실, 그리고 야외에서 책을 읽을 수 있는 옥상 정원이 있습니다.', '개관식은 오전 10시에 시작하며, 선착순 100명에게 무료 에코백을 드립니다.'],
    qs: [
      ['What is the news report about?', ['A library opening', 'A book festival', 'A school renovation', 'A garden show'], 0, '주제', '새 도서관 개관 소식이므로 (A)가 정답.', '이 뉴스는 무엇에 관한 것인가?'],
      ['What is mentioned about the building?', ['It has a rooftop garden.', 'It has a café.', 'It is ten stories tall.', 'It used to be a school.'], 0, '세부 사항', '옥상 정원이 있다고 했으므로 (A)가 정답.', '건물에 대해 무엇이 언급되는가?'],
      ['What will the first one hundred visitors receive?', ['A tote bag', 'A library card', 'A book', 'A coffee coupon'], 0, '세부 사항', '선착순 100명에게 에코백을 준다고 했으므로 (A)가 정답.', '선착순 100명은 무엇을 받는가?'],
    ] },

  { title: '사내 교육 · 고객 응대', voices: { M: 'CA' },
    script: [
      ['M', 'Welcome to today\'s customer service training. I\'m Jason from the training department.'],
      ['M', 'This morning, we\'ll practice handling difficult phone calls. I\'ll play some recordings of real calls, and then you\'ll work in pairs to role-play better responses.'],
      ['M', 'Lunch will be served in the cafeteria at noon. Please be back here by one o\'clock for the afternoon session.'],
    ],
    ko: ['오늘 고객 서비스 교육에 오신 걸 환영합니다. 교육부의 제이슨입니다.', '오늘 오전에는 까다로운 전화 응대를 연습할 거예요. 실제 통화 녹음을 들려 드리고, 둘씩 짝을 지어 더 나은 응대를 역할극으로 해 볼 거예요.', '점심은 정오에 구내식당에서 제공됩니다. 오후 수업을 위해 1시까지 여기로 돌아와 주세요.'],
    qs: [
      ['Who most likely are the listeners?', ['Customer service staff', 'Sales managers', 'New engineers', 'Cafeteria workers'], 0, '청자', '고객 서비스 교육에 참석한 사람들이므로 (A)가 정답.', '듣는 사람들은 누구일 것 같은가?'],
      ['What will the listeners do in pairs?', ['Role-play phone calls', 'Write reports', 'Review sales data', 'Interview customers'], 0, '세부 사항', '둘씩 짝지어 역할극을 한다고 했으므로 (A)가 정답.', '듣는 사람들은 짝을 지어 무엇을 하는가?'],
      ['What time should listeners return after lunch?', ['By 1:00', 'By 12:00', 'By 12:30', 'By 2:00'], 0, '세부 사항', '1시까지 돌아오라고 했으므로 (A)가 정답.', '듣는 사람들은 점심 후 몇 시까지 돌아와야 하는가?'],
    ] },

  { title: '팟캐스트 · 재테크', voices: { W: 'AU' },
    script: [
      ['W', 'Welcome back to "Money Matters," the podcast that helps you make smart financial decisions.'],
      ['W', 'Today\'s topic is saving for retirement. My guest is financial advisor Tom Reyes, who has helped hundreds of people plan for their future.'],
      ['W', 'If you have a question for Tom, send it to us through our Web site, and he may answer it on next week\'s show.'],
    ],
    ko: ['현명한 재정 결정을 돕는 팟캐스트 "머니 매터스"에 다시 오신 걸 환영합니다.', '오늘의 주제는 은퇴 자금 저축입니다. 수백 명의 미래 계획을 도와 온 재무 상담사 톰 레예스 씨가 게스트로 나왔습니다.', '톰에게 질문이 있으면 웹사이트로 보내 주세요. 다음 주 방송에서 답해 드릴 수도 있습니다.'],
    qs: [
      ['What is the topic of today\'s episode?', ['Saving for retirement', 'Buying a home', 'Starting a business', 'Paying off loans'], 0, '주제', '은퇴 자금 저축이 주제라고 했으므로 (A)가 정답.', '오늘 방송의 주제는 무엇인가?'],
      ['Who is Tom Reyes?', ['A financial advisor', 'A bank manager', 'A podcast producer', 'A real estate agent'], 0, '화자 정체', '재무 상담사라고 소개했으므로 (A)가 정답.', '톰 레예스는 누구인가?'],
      ['How can listeners send questions?', ['Through a Web site', 'By phone', 'By mail', 'On social media'], 0, '세부 사항', '웹사이트로 보내라고 했으므로 (A)가 정답.', '듣는 사람은 어떻게 질문을 보낼 수 있는가?'],
    ] },

  { title: '회의 · 사무실 재활용 정책', voices: { M: 'US' },
    script: [
      ['M', 'I\'d like to talk briefly about our new recycling policy, which starts on Monday.'],
      ['M', 'Each floor will now have three bins: one for paper, one for plastic, and one for general waste. Please don\'t put food in the paper bin.'],
      ['M', 'I know it seems like a small thing, but last year we threw away over two tons of paper that could have been recycled.'],
    ],
    ko: ['월요일부터 시작하는 새 재활용 정책에 대해 잠깐 말씀드리고 싶어요.', '이제 층마다 종이, 플라스틱, 일반 쓰레기용 통이 세 개씩 있습니다. 종이 통에 음식을 넣지 마세요.', '사소한 일처럼 보이겠지만, 작년에 재활용할 수 있었던 종이를 2톤 넘게 버렸어요.'],
    qs: [
      ['What is the talk mainly about?', ['A recycling policy', 'A new cafeteria', 'Office cleaning hours', 'A paper supplier'], 0, '주제', '새 재활용 정책 이야기이므로 (A)가 정답.', '이 담화는 주로 무엇에 관한 것인가?'],
      ['What are listeners asked not to do?', ['Put food in the paper bin', 'Print documents', 'Use plastic bottles', 'Eat at their desks'], 0, '요청', '종이 통에 음식을 넣지 말라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 하지 말라는 요청을 받는가?'],
      ['Why does the speaker mention two tons of paper?', ['To show why the policy is important', 'To report a new record', 'To complain about the supplier', 'To ask for a bigger budget'], 0, '의도 파악', '작년에 버린 종이 양을 말한 것은 이 정책이 중요한 이유를 보여 주려는 것입니다. (A)가 정답.', '화자는 왜 종이 2톤을 언급하는가?'],
    ] },

  { title: '날씨 · 주말 예보', voices: { W: 'CA' },
    script: [
      ['W', 'And now for the weekend weather. Saturday will be sunny and warm, with temperatures reaching twenty-five degrees.'],
      ['W', 'But on Sunday, a storm is expected to move in from the west, bringing heavy rain and strong winds in the afternoon.'],
      ['W', 'So if you\'re planning any outdoor activities, Saturday is the better day. Stay tuned for the evening news at six.'],
    ],
    ko: ['이제 주말 날씨입니다. 토요일은 맑고 따뜻하겠으며 기온이 25도까지 오르겠습니다.', '하지만 일요일에는 서쪽에서 폭풍이 다가와 오후에 많은 비와 강한 바람이 예상됩니다.', '그러니 야외 활동을 계획하신다면 토요일이 더 좋겠습니다. 6시 저녁 뉴스도 계속 지켜봐 주세요.'],
    qs: [
      ['What will the weather be like on Saturday?', ['Sunny and warm', 'Rainy', 'Cold and windy', 'Cloudy'], 0, '세부 사항', '토요일은 맑고 따뜻하다고 했으므로 (A)가 정답.', '토요일 날씨는 어떠한가?'],
      ['What is expected on Sunday afternoon?', ['A storm', 'Snow', 'Fog', 'Clear skies'], 0, '세부 사항', '일요일 오후에 폭풍이 온다고 했으므로 (A)가 정답.', '일요일 오후에 무엇이 예상되는가?'],
      ['What does the speaker suggest?', ['Planning outdoor activities for Saturday', 'Staying home all weekend', 'Leaving the city', 'Buying an umbrella'], 0, '제안', '야외 활동은 토요일이 더 좋다고 했으므로 (A)가 정답.', '화자는 무엇을 제안하는가?'],
    ] },

  { title: '박람회 개막 연설', voices: { M: 'UK' },
    script: [
      ['M', 'Good morning, and welcome to the tenth annual Green Building Expo.'],
      ['M', 'This year, more than two hundred companies are showing their latest energy-saving products, from solar panels to smart windows.'],
      ['M', 'Be sure to visit the main stage at two o\'clock, where the winner of this year\'s Green Design Award will be announced.'],
    ],
    ko: ['좋은 아침입니다. 제10회 그린 빌딩 엑스포에 오신 걸 환영합니다.', '올해는 200개가 넘는 회사가 태양광 패널부터 스마트 창문까지 최신 에너지 절약 제품을 선보입니다.', '2시에 메인 무대를 꼭 방문해 주세요. 올해 그린 디자인상 수상자가 발표됩니다.'],
    qs: [
      ['What kind of event is being held?', ['An exhibition', 'A sports competition', 'A music festival', 'A job fair'], 0, '주제', '엑스포(박람회)에 오신 걸 환영한다고 했으므로 (A)가 정답.', '어떤 행사가 열리고 있는가?'],
      ['What products are being shown?', ['Energy-saving products', 'Electronic games', 'Office furniture', 'Kitchen appliances'], 0, '세부 사항', '최신 에너지 절약 제품을 선보인다고 했으므로 (A)가 정답.', '어떤 제품들이 전시되는가?'],
      ['What will happen at two o\'clock?', ['An award winner will be announced.', 'The expo will close.', 'A product will be launched.', 'Lunch will be served.'], 0, '세부 사항', '2시에 그린 디자인상 수상자가 발표된다고 했으므로 (A)가 정답.', '2시에 무슨 일이 있는가?'],
    ] },
]);
