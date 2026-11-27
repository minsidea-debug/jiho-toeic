/* Part 4 · 짧은 담화 추가 묶음 04 (세트 p4-s31 ~ s40, 문제 p4-091 ~ 120) — 직접 창작. 형식은 part3_02.js 참고 (화자 1명)
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(4, 31, 91, [
  { title: '전화 메시지 · 면접 일정', voices: { W: 'US' },
    script: [
      ['W', 'Hello, Mr. Park. This is Nancy Lee from the human resources department at Vista Software.'],
      ['W', 'Thank you for applying for the project manager position. We\'d like to invite you to an interview next Tuesday at ten a.m.'],
      ['W', 'The interview will take about an hour. Please bring a list of three references. Call me back at 555-0193 to confirm.'],
    ],
    ko: ['안녕하세요, 박 씨. 비스타 소프트웨어 인사부의 낸시 리입니다.', '프로젝트 매니저 자리에 지원해 주셔서 감사합니다. 다음 주 화요일 오전 10시 면접에 모시고 싶어요.', '면접은 한 시간 정도 걸려요. 추천인 세 명의 명단을 가져와 주세요. 555-0193으로 전화 주셔서 확인해 주세요.'],
    qs: [
      ['What position did the listener apply for?', ['Project manager', 'Software engineer', 'Sales director', 'HR assistant'], 0, '세부 사항', '프로젝트 매니저 자리라고 했으므로 (A)가 정답.', '듣는 사람은 어떤 자리에 지원했는가?'],
      ['How long will the interview take?', ['About an hour', 'About thirty minutes', 'About two hours', 'A whole day'], 0, '세부 사항', '한 시간 정도 걸린다고 했으므로 (A)가 정답.', '면접은 얼마나 걸리는가?'],
      ['What should the listener bring?', ['A list of references', 'A portfolio', 'A photo ID', 'A cover letter'], 0, '요청', '추천인 세 명의 명단을 가져오라고 했으므로 (A)가 정답.', '듣는 사람은 무엇을 가져와야 하는가?'],
    ] },

  { title: '항공기 기내방송 · 착륙 안내', voices: { M: 'UK' },
    script: [
      ['M', 'Ladies and gentlemen, this is your captain speaking. We\'ve started our descent into Singapore and will be landing in about twenty minutes.'],
      ['M', 'The weather there is sunny, with a temperature of thirty-one degrees.'],
      ['M', 'Passengers with connecting flights should check the screens inside the terminal for gate information. Thank you for flying with Pacific Air.'],
    ],
    ko: ['승객 여러분, 기장입니다. 싱가포르로 하강을 시작했으며 약 20분 후에 착륙합니다.', '그곳 날씨는 맑고 기온은 31도입니다.', '연결 항공편을 이용하시는 승객은 터미널 안 화면에서 게이트 정보를 확인하세요. 퍼시픽 항공을 이용해 주셔서 감사합니다.'],
    qs: [
      ['Who is the speaker?', ['A pilot', 'A flight attendant', 'A travel agent', 'An airport worker'], 0, '화자 정체', '기장이라고 자기소개를 했으므로 (A)가 정답.', '화자는 누구인가?'],
      ['When will the plane land?', ['In about twenty minutes', 'In about an hour', 'In about five minutes', 'In about forty minutes'], 0, '세부 사항', '약 20분 후 착륙한다고 했으므로 (A)가 정답.', '비행기는 언제 착륙하는가?'],
      ['What should passengers with connecting flights do?', ['Check screens for gate information', 'Talk to a flight attendant', 'Stay on the plane', 'Go to the baggage claim'], 0, '요청', '터미널 화면에서 게이트 정보를 확인하라고 했으므로 (A)가 정답.', '연결 항공편 승객은 무엇을 해야 하는가?'],
    ] },

  { title: '광고 · 동네 빵집', voices: { W: 'AU' },
    script: [
      ['W', 'Looking for fresh bread every morning? Come to Golden Crust Bakery on Elm Street!'],
      ['W', 'We bake everything from scratch using local ingredients, and we open at six a.m., so you can grab breakfast before work.'],
      ['W', 'This week only, buy any two loaves of bread and get a free coffee. See you soon!'],
    ],
    ko: ['매일 아침 신선한 빵을 찾으세요? 엘름가의 골든 크러스트 베이커리로 오세요!', '지역 재료로 모든 걸 직접 만들고, 오전 6시에 문을 열어 출근 전에 아침을 챙겨 가실 수 있어요.', '이번 주에만 빵 두 덩이를 사시면 커피가 무료입니다. 곧 만나요!'],
    qs: [
      ['What is being advertised?', ['A bakery', 'A coffee shop chain', 'A farmers market', 'A restaurant'], 0, '주제', '골든 크러스트 베이커리 광고이므로 (A)가 정답.', '무엇이 광고되고 있는가?'],
      ['What time does the business open?', ['At 6:00 A.M.', 'At 7:00 A.M.', 'At 8:00 A.M.', 'At 5:00 A.M.'], 0, '세부 사항', '오전 6시에 문을 연다고 했으므로 (A)가 정답.', '이 가게는 몇 시에 문을 여는가?'],
      ['How can customers get a free coffee?', ['By buying two loaves of bread', 'By visiting before 7 A.M.', 'By joining a club', 'By bringing their own cup'], 0, '세부 사항', '빵 두 덩이를 사면 커피가 무료라고 했으므로 (A)가 정답.', '고객은 어떻게 무료 커피를 받을 수 있는가?'],
    ] },

  { title: '회의 · 웹사이트 개편 일정 (표)', voices: { M: 'CA' },
    graphic: { title: 'Web Site Redesign Schedule', rows: [['Stage', 'Deadline'], ['Design', 'May 10'], ['Development', 'June 15'], ['Testing', 'June 30'], ['Launch', 'July 5']] },
    script: [
      ['M', 'I\'d like to give you an update on the Web site redesign project.'],
      ['M', 'The design stage was finished on time, and the development team is making good progress.'],
      ['M', 'However, the testing company we hired just told us they need an extra week. So the stage after development will now end one week later than planned, and we\'ll have to move the launch as well.'],
    ],
    ko: ['웹사이트 개편 프로젝트 진행 상황을 알려 드릴게요.', '디자인 단계는 제때 끝났고, 개발팀도 잘 진행하고 있어요.', '그런데 우리가 고용한 테스트 업체가 한 주가 더 필요하다고 방금 알려 왔어요. 그래서 개발 다음 단계가 계획보다 한 주 늦게 끝나고, 출시도 옮겨야 해요.'],
    qs: [
      ['What is the talk mainly about?', ['A project update', 'A new product', 'A hiring plan', 'A budget cut'], 0, '주제', '웹사이트 개편 프로젝트 진행 상황을 알리고 있으므로 (A)가 정답.', '이 담화는 주로 무엇에 관한 것인가?'],
      ['Look at the graphic. Which deadline will change by one week?', ['May 10', 'June 15', 'June 30', 'July 5'], 2, '시각 정보', '개발 다음 단계인 테스트(Testing)가 한 주 늦어진다고 했으므로 June 30이 바뀝니다.', '표를 보시오. 어느 마감일이 한 주 바뀌는가?'],
      ['What does the speaker say about the launch?', ['It will be moved.', 'It was canceled.', 'It will happen early.', 'It will be online only.'], 0, '세부 사항', '출시도 옮겨야 한다고 했으므로 (A)가 정답.', '화자는 출시에 대해 무엇을 말하는가?'],
    ] },

  { title: '라디오 · 지역 축제 소식', voices: { W: 'UK' },
    script: [
      ['W', 'The annual Riverside Food Festival returns this weekend to Central Park.'],
      ['W', 'More than fifty local restaurants will be serving dishes from around the world, and there will be live music on two stages.'],
      ['W', 'Because parking near the park is limited, organizers are encouraging visitors to take the free shuttle buses from the downtown train station.'],
    ],
    ko: ['연례 리버사이드 음식 축제가 이번 주말 센트럴 파크에서 다시 열립니다.', '50개가 넘는 지역 식당이 세계 각국 요리를 선보이고, 무대 두 곳에서 라이브 음악 공연이 있습니다.', '공원 근처 주차 공간이 부족해 주최 측은 방문객들에게 시내 기차역에서 출발하는 무료 셔틀버스를 이용하라고 권하고 있습니다.'],
    qs: [
      ['What event is being described?', ['A food festival', 'A music competition', 'A farmers market', 'A sports event'], 0, '주제', '리버사이드 음식 축제를 소개하므로 (A)가 정답.', '어떤 행사가 소개되고 있는가?'],
      ['How many restaurants will participate?', ['More than fifty', 'About twenty', 'Exactly thirty', 'Over one hundred'], 0, '세부 사항', '50개가 넘는 식당이라고 했으므로 (A)가 정답.', '몇 개의 식당이 참여하는가?'],
      ['What are visitors encouraged to do?', ['Take a shuttle bus', 'Arrive early', 'Buy tickets online', 'Bring their own food'], 0, '제안', '무료 셔틀버스를 이용하라고 권했으므로 (A)가 정답.', '방문객들은 무엇을 하도록 권장되는가?'],
    ] },

  { title: '호텔 · 투숙객 안내', voices: { M: 'US' },
    script: [
      ['M', 'Welcome to the Seaside Resort. I\'m Daniel, the guest services manager.'],
      ['M', 'Breakfast is served every morning from six thirty to ten in the Ocean Restaurant on the ground floor. The swimming pool is open until nine p.m.'],
      ['M', 'Tonight, we\'re hosting a welcome reception on the terrace at seven. Drinks and snacks are free for all guests, so I hope to see you there.'],
    ],
    ko: ['시사이드 리조트에 오신 걸 환영합니다. 고객 서비스 매니저 대니얼입니다.', '아침 식사는 매일 6시 30분부터 10시까지 1층 오션 레스토랑에서 제공됩니다. 수영장은 밤 9시까지 엽니다.', '오늘 밤 7시에 테라스에서 환영 리셉션을 엽니다. 모든 투숙객에게 음료와 간식이 무료이니 그곳에서 뵙길 바랍니다.'],
    qs: [
      ['Who is the speaker?', ['A hotel manager', 'A tour guide', 'A chef', 'A lifeguard'], 0, '화자 정체', '고객 서비스 매니저라고 소개했으므로 (A)가 정답.', '화자는 누구인가?'],
      ['Until what time is the pool open?', ['9:00 P.M.', '10:00 P.M.', '7:00 P.M.', '6:30 P.M.'], 0, '세부 사항', '수영장은 밤 9시까지라고 했으므로 (A)가 정답.', '수영장은 몇 시까지 여는가?'],
      ['What will happen at seven tonight?', ['A welcome reception', 'A cooking class', 'A pool party', 'A concert'], 0, '세부 사항', '7시에 테라스에서 환영 리셉션이 있다고 했으므로 (A)가 정답.', '오늘 밤 7시에 무슨 일이 있는가?'],
    ] },

  { title: '사내 공지 · 독감 예방접종', voices: { W: 'CA' },
    script: [
      ['W', 'Hello, everyone. This is a reminder that free flu shots will be offered here at the office next Wednesday.'],
      ['W', 'Nurses from City Health Clinic will be in the training room from nine a.m. to three p.m.'],
      ['W', 'If you\'d like to get a shot, please sign up for a time slot on the sheet outside the HR office by Monday.'],
    ],
    ko: ['안녕하세요, 여러분. 다음 주 수요일 사무실에서 무료 독감 예방접종을 한다는 걸 다시 알려 드려요.', '시티 헬스 클리닉 간호사들이 오전 9시부터 오후 3시까지 교육실에 있을 거예요.', '접종을 원하시면 월요일까지 인사팀 사무실 밖 신청지에 시간대를 적어 주세요.'],
    qs: [
      ['What is being offered next Wednesday?', ['Free flu shots', 'A health seminar', 'Free lunch', 'Eye exams'], 0, '주제', '무료 독감 예방접종이라고 했으므로 (A)가 정답.', '다음 주 수요일에 무엇이 제공되는가?'],
      ['Where will the nurses be?', ['In the training room', 'In the cafeteria', 'At the clinic', 'In the HR office'], 0, '세부 사항', '교육실에 있을 거라고 했으므로 (A)가 정답.', '간호사들은 어디에 있을 것인가?'],
      ['What should listeners do by Monday?', ['Sign up for a time slot', 'Visit the clinic', 'Call a nurse', 'Pay a fee'], 0, '요청', '월요일까지 신청지에 시간대를 적으라고 했으므로 (A)가 정답.', '듣는 사람들은 월요일까지 무엇을 해야 하는가?'],
    ] },

  { title: '투어 · 역사 지구 도보 관광', voices: { M: 'AU' },
    script: [
      ['M', 'Hello, everyone, and welcome to the Old Town walking tour. My name is Sam.'],
      ['M', 'We\'ll be walking for about two hours and visiting buildings that are more than three hundred years old.'],
      ['M', 'Our first stop is the clock tower, but before we go, please make sure you have water. It\'s going to be a hot afternoon.'],
    ],
    ko: ['안녕하세요, 여러분. 구시가지 도보 투어에 오신 걸 환영합니다. 저는 샘입니다.', '두 시간 정도 걸으면서 300년이 넘은 건물들을 방문할 거예요.', '첫 번째 장소는 시계탑인데, 가기 전에 물을 꼭 챙기세요. 더운 오후가 될 거예요.'],
    qs: [
      ['How long is the tour?', ['About two hours', 'About one hour', 'About three hours', 'Half a day'], 0, '세부 사항', '두 시간 정도 걷는다고 했으므로 (A)가 정답.', '투어는 얼마나 걸리는가?'],
      ['What is the first stop?', ['A clock tower', 'A museum', 'A church', 'A market'], 0, '세부 사항', '첫 번째 장소는 시계탑이라고 했으므로 (A)가 정답.', '첫 번째 방문지는 어디인가?'],
      ['Why does the speaker mention water?', ['The weather will be hot.', 'Water is sold at the tower.', 'The tour passes a river.', 'Drinks are not allowed.'], 0, '이유', '더운 오후가 될 거라 물을 챙기라고 했으므로 (A)가 정답.', '화자는 왜 물을 언급하는가?'],
    ] },

  { title: '회의 · 신제품 출시 지연', voices: { W: 'US' },
    script: [
      ['W', 'I have some disappointing news about our new tablet. The launch planned for next month has been delayed.'],
      ['W', 'Our battery supplier had a problem at its factory, and they won\'t be able to send the parts until September.'],
      ['W', 'In the meantime, the marketing team will continue preparing the ad campaign, so it\'ll be ready as soon as we have a new date.'],
    ],
    ko: ['새 태블릿에 관해 아쉬운 소식이 있어요. 다음 달로 계획했던 출시가 미뤄졌어요.', '배터리 공급업체 공장에 문제가 생겨서 9월이 되어야 부품을 보낼 수 있대요.', '그동안 마케팅팀은 광고 캠페인 준비를 계속해서, 새 날짜가 정해지면 바로 준비되도록 할 거예요.'],
    qs: [
      ['What is the speaker mainly discussing?', ['A product launch delay', 'A new advertising agency', 'A factory tour', 'A battery recall'], 0, '주제', '새 태블릿 출시가 미뤄졌다는 이야기이므로 (A)가 정답.', '화자는 주로 무엇에 대해 이야기하는가?'],
      ['What caused the problem?', ['An issue at a supplier\'s factory', 'Poor sales', 'A design error', 'A shortage of staff'], 0, '이유', '배터리 공급업체 공장에 문제가 생겼다고 했으므로 (A)가 정답.', '무엇이 문제를 일으켰는가?'],
      ['What will the marketing team do?', ['Continue preparing a campaign', 'Cancel the ads', 'Find a new supplier', 'Conduct a survey'], 0, '다음 할 일', '광고 캠페인 준비를 계속한다고 했으므로 (A)가 정답.', '마케팅팀은 무엇을 할 것인가?'],
    ] },

  { title: '전화 자동 안내 · 시청', voices: { M: 'CA' },
    script: [
      ['M', 'You have reached the Greenville City Hall information line. Our offices are open Monday through Friday, from eight thirty to five.'],
      ['M', 'Please note that City Hall will be closed this Monday for a national holiday.'],
      ['M', 'For questions about garbage collection, press 1. For parking permits, press 2. For all other questions, please visit our Web site.'],
    ],
    ko: ['그린빌 시청 안내 전화입니다. 사무실은 월요일부터 금요일, 8시 30분부터 5시까지 엽니다.', '이번 월요일은 국경일이라 시청이 문을 닫으니 유의해 주세요.', '쓰레기 수거 문의는 1번, 주차 허가증은 2번을 누르세요. 그 밖의 문의는 웹사이트를 방문해 주세요.'],
    qs: [
      ['What is mentioned about this Monday?', ['City Hall will be closed.', 'Office hours will be extended.', 'A new service will start.', 'Parking will be free.'], 0, '세부 사항', '이번 월요일은 국경일이라 문을 닫는다고 했으므로 (A)가 정답.', '이번 월요일에 대해 무엇이 언급되는가?'],
      ['What should callers do for parking permits?', ['Press 2', 'Press 1', 'Visit the Web site', 'Stay on the line'], 0, '세부 사항', '주차 허가증은 2번이라고 했으므로 (A)가 정답.', '주차 허가증 문의는 어떻게 해야 하는가?'],
      ['How can callers get help with other questions?', ['By visiting a Web site', 'By pressing 3', 'By sending a letter', 'By visiting on Saturday'], 0, '세부 사항', '그 밖의 문의는 웹사이트를 방문하라고 했으므로 (A)가 정답.', '그 밖의 질문은 어떻게 도움을 받을 수 있는가?'],
    ] },
]);
