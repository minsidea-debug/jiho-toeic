/* Part 4 · 짧은 담화 추가 묶음 07 (세트 p4-s61 ~ s70, 문제 p4-181 ~ 210) — 직접 창작. 형식은 part3_02.js 참고 (화자 1명)
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(4, 61, 181, [
  { title: '전화 메시지 · 도서 대출 예약', voices: { M: 'UK' },
    script: [
      ['M', 'Hello, this is the Oakwood Public Library calling for Ms. Rivera.'],
      ['M', 'The book you reserved, "Gardening for Beginners," is now available. We\'ll hold it for you at the front desk for seven days.'],
      ['M', 'Please bring your library card when you come to pick it up. Our hours are nine to eight, Monday through Saturday.'],
    ],
    ko: ['안녕하세요, 오크우드 공공 도서관에서 리베라 씨께 전화드립니다.', '예약하신 책 "초보자를 위한 원예"가 이제 대출 가능합니다. 안내 데스크에서 7일 동안 보관해 드릴게요.', '찾으러 오실 때 도서관 카드를 가져오세요. 운영 시간은 월요일부터 토요일, 9시부터 8시까지입니다.'],
    qs: [
      ['Why is the speaker calling?', ['A reserved book is available.', 'A book is overdue.', 'A library card has expired.', 'The library is closing.'], 0, '목적', '예약한 책이 대출 가능하다고 알리려고 전화했으므로 (A)가 정답.', '화자는 왜 전화하는가?'],
      ['How long will the book be held?', ['Seven days', 'Three days', 'Two weeks', 'One month'], 0, '세부 사항', '7일 동안 보관한다고 했으므로 (A)가 정답.', '책은 얼마 동안 보관되는가?'],
      ['What should the listener bring?', ['A library card', 'A receipt', 'A photo ID', 'Another book'], 0, '요청', '도서관 카드를 가져오라고 했으므로 (A)가 정답.', '듣는 사람은 무엇을 가져와야 하는가?'],
    ] },

  { title: '페리 안내방송', voices: { W: 'AU' },
    script: [
      ['W', 'Good morning, passengers, and welcome aboard the ferry to Coral Island. Our trip today will take about fifty minutes.'],
      ['W', 'Snacks and drinks are available at the café on the upper deck.'],
      ['W', 'Because the sea is a little rough this morning, we ask that you remain seated as much as possible and hold the railings when walking.'],
    ],
    ko: ['승객 여러분, 좋은 아침입니다. 코럴섬행 페리에 탑승하신 걸 환영합니다. 오늘 운항은 약 50분 걸립니다.', '간식과 음료는 위층 갑판의 카페에서 이용하실 수 있습니다.', '오늘 아침 바다가 조금 거칠어서 가능한 한 자리에 앉아 계시고, 걸을 때는 난간을 잡아 주시길 바랍니다.'],
    qs: [
      ['How long will the trip take?', ['About fifty minutes', 'About fifteen minutes', 'About two hours', 'About thirty minutes'], 0, '세부 사항', '약 50분 걸린다고 했으므로 (A)가 정답.', '운항은 얼마나 걸리는가?'],
      ['Where can passengers buy snacks?', ['On the upper deck', 'At the ticket office', 'On the island', 'At the lower deck'], 0, '세부 사항', '위층 갑판 카페라고 했으므로 (A)가 정답.', '승객은 어디에서 간식을 살 수 있는가?'],
      ['Why are passengers asked to stay seated?', ['The sea is rough.', 'The ferry is crowded.', 'It is raining.', 'The deck is being cleaned.'], 0, '이유', '바다가 조금 거칠다고 했으므로 (A)가 정답.', '승객들은 왜 자리에 앉아 있으라는 요청을 받는가?'],
    ] },

  { title: '광고 · 사무 공간 공유', voices: { M: 'CA' },
    script: [
      ['M', 'Tired of working from your kitchen table? Try WorkHub, the shared office space in the heart of downtown.'],
      ['M', 'For a low monthly fee, you get a desk, high-speed Internet, and access to meeting rooms. Free coffee is included, of course.'],
      ['M', 'Book a tour on our Web site this month, and you can work here for one week for free.'],
    ],
    ko: ['식탁에서 일하는 게 지겨우세요? 시내 중심의 공유 오피스 워크허브를 이용해 보세요.', '저렴한 월 이용료로 책상, 초고속 인터넷, 회의실 이용이 가능합니다. 물론 커피도 무료입니다.', '이번 달 웹사이트에서 견학을 예약하시면 일주일 동안 무료로 일하실 수 있습니다.'],
    qs: [
      ['What is being advertised?', ['A shared office space', 'A furniture store', 'A coffee shop', 'An Internet provider'], 0, '주제', '공유 오피스 광고이므로 (A)가 정답.', '무엇이 광고되고 있는가?'],
      ['What is included in the monthly fee?', ['Access to meeting rooms', 'Free parking', 'A personal assistant', 'Lunch'], 0, '세부 사항', '책상, 인터넷, 회의실 이용이 포함된다고 했으므로 (A)가 정답.', '월 이용료에 무엇이 포함되는가?'],
      ['What can listeners get by booking a tour this month?', ['One free week', 'A free laptop', 'A discount on coffee', 'A gift card'], 0, '세부 사항', '일주일 무료로 일할 수 있다고 했으므로 (A)가 정답.', '이번 달 견학을 예약하면 무엇을 받는가?'],
    ] },

  { title: '사내 공지 · 회의실 예약 시스템 (표)', voices: { W: 'UK' },
    graphic: { title: 'Meeting Rooms', rows: [['Room', 'Seats'], ['Room A', '6'], ['Room B', '10'], ['Room C', '16'], ['Room D', '30']] },
    script: [
      ['W', 'Hi, everyone. From now on, all meeting rooms must be booked through the new online system.'],
      ['W', 'Please choose a room that fits your group. Last week, a team of five people used our largest room all afternoon while a bigger group had nowhere to meet.'],
      ['W', 'By the way, the room with sixteen seats is closed this week because its projector is being replaced.'],
    ],
    ko: ['안녕하세요, 여러분. 이제부터 모든 회의실은 새 온라인 시스템으로 예약해야 합니다.', '인원에 맞는 방을 골라 주세요. 지난주 다섯 명 팀이 오후 내내 가장 큰 방을 써서 더 큰 그룹이 회의할 곳이 없었어요.', '참고로 16석짜리 방은 프로젝터 교체 때문에 이번 주에 닫혀 있습니다.'],
    qs: [
      ['What is the talk mainly about?', ['Booking meeting rooms', 'Buying a projector', 'Hiring new staff', 'Moving to a new office'], 0, '주제', '회의실 예약 방법 이야기이므로 (A)가 정답.', '이 담화는 주로 무엇에 관한 것인가?'],
      ['What problem does the speaker mention?', ['A small group used a large room.', 'The system is not working.', 'A meeting was canceled.', 'Rooms are too expensive.'], 0, '문제점', '다섯 명 팀이 가장 큰 방을 썼다고 했으므로 (A)가 정답.', '화자는 어떤 문제를 언급하는가?'],
      ['Look at the graphic. Which room is closed this week?', ['Room A', 'Room B', 'Room C', 'Room D'], 2, '시각 정보', '16석짜리 방이 닫혀 있다고 했으므로 Room C입니다.', '표를 보시오. 이번 주에 어느 방이 닫혀 있는가?'],
    ] },

  { title: '라디오 · 지역 마라톤', voices: { M: 'US' },
    script: [
      ['M', 'The city marathon will take place this Sunday, and more than five thousand runners are expected to participate.'],
      ['M', 'Several downtown streets, including Main Street and Park Avenue, will be closed to traffic from six a.m. until two p.m.'],
      ['M', 'Organizers are still looking for volunteers to hand out water to runners. If you\'re interested, you can sign up on the marathon\'s Web site.'],
    ],
    ko: ['시 마라톤이 이번 일요일에 열리며, 5천 명이 넘는 주자가 참가할 것으로 예상됩니다.', '메인가와 파크 애비뉴를 포함한 시내 여러 거리가 오전 6시부터 오후 2시까지 차량 통행이 금지됩니다.', '주최 측은 아직 주자들에게 물을 나눠 줄 자원봉사자를 찾고 있습니다. 관심 있으신 분은 마라톤 웹사이트에서 신청하실 수 있습니다.'],
    qs: [
      ['What event is taking place on Sunday?', ['A marathon', 'A parade', 'A concert', 'A car show'], 0, '주제', '시 마라톤이 열린다고 했으므로 (A)가 정답.', '일요일에 어떤 행사가 열리는가?'],
      ['What will happen from 6 A.M. to 2 P.M.?', ['Some streets will be closed.', 'Buses will be free.', 'Shops will open early.', 'Parking will be free.'], 0, '세부 사항', '시내 거리들이 통행 금지된다고 했으므로 (A)가 정답.', '오전 6시부터 오후 2시까지 무슨 일이 있는가?'],
      ['What are organizers looking for?', ['Volunteers', 'Sponsors', 'Runners', 'Photographers'], 0, '세부 사항', '물을 나눠 줄 자원봉사자를 찾는다고 했으므로 (A)가 정답.', '주최 측은 무엇을 찾고 있는가?'],
    ] },

  { title: '회의 · 사무실 보안 강화', voices: { W: 'CA' },
    script: [
      ['W', 'I want to remind everyone about our security rules. Last week, a visitor was able to walk into the office without signing in.'],
      ['W', 'From now on, all visitors must check in at the front desk and wear a visitor badge at all times.'],
      ['W', 'If you see someone without a badge, please politely direct them to the front desk.'],
    ],
    ko: ['모두에게 보안 규칙을 다시 알려 드리고 싶어요. 지난주 한 방문객이 출입 기록 없이 사무실에 들어올 수 있었어요.', '이제부터 모든 방문객은 안내 데스크에서 확인을 받고 방문증을 항상 착용해야 해요.', '방문증이 없는 사람을 보면 정중하게 안내 데스크로 안내해 주세요.'],
    qs: [
      ['What happened last week?', ['A visitor entered without signing in.', 'A computer was stolen.', 'The front desk was closed.', 'A fire alarm went off.'], 0, '세부 사항', '방문객이 출입 기록 없이 들어왔다고 했으므로 (A)가 정답.', '지난주에 무슨 일이 있었는가?'],
      ['What must visitors wear?', ['A visitor badge', 'A safety helmet', 'A uniform', 'A name tag from their company'], 0, '세부 사항', '방문증을 항상 착용해야 한다고 했으므로 (A)가 정답.', '방문객은 무엇을 착용해야 하는가?'],
      ['What should listeners do if they see someone without a badge?', ['Direct them to the front desk', 'Call the police', 'Ask them to leave', 'Report it to a manager'], 0, '요청', '정중하게 안내 데스크로 안내하라고 했으므로 (A)가 정답.', '방문증 없는 사람을 보면 어떻게 해야 하는가?'],
    ] },

  { title: '견학 · 초콜릿 공장', voices: { M: 'AU' },
    script: [
      ['M', 'Welcome to Sweet Valley Chocolate Factory. I\'m Ben, and I\'ll be your guide today.'],
      ['M', 'First, we\'ll see how cocoa beans are roasted, and then we\'ll watch our machines shape the chocolate bars.'],
      ['M', 'For safety reasons, photos are not allowed inside the production area. But at the end of the tour, you can take pictures in our chocolate shop, and everyone gets a free sample.'],
    ],
    ko: ['스위트 밸리 초콜릿 공장에 오신 걸 환영합니다. 저는 벤이고 오늘 여러분의 가이드입니다.', '먼저 카카오 콩을 볶는 과정을 보고, 이어서 기계가 초콜릿 바를 만드는 걸 보겠습니다.', '안전상의 이유로 생산 구역 안에서는 사진 촬영이 안 됩니다. 하지만 투어가 끝나면 초콜릿 가게에서 사진을 찍을 수 있고, 모두에게 무료 시식품을 드립니다.'],
    qs: [
      ['What will listeners see first?', ['Cocoa beans being roasted', 'Chocolate bars being packed', 'A short film', 'The chocolate shop'], 0, '세부 사항', '먼저 카카오 콩 볶는 과정을 본다고 했으므로 (A)가 정답.', '듣는 사람들은 먼저 무엇을 보게 되는가?'],
      ['What is not allowed in the production area?', ['Taking photos', 'Talking', 'Eating', 'Touching machines'], 0, '세부 사항', '생산 구역에서 사진 촬영이 안 된다고 했으므로 (A)가 정답.', '생산 구역에서 무엇이 금지되는가?'],
      ['What will everyone receive at the end of the tour?', ['A free sample', 'A discount coupon', 'A souvenir photo', 'A recipe book'], 0, '세부 사항', '모두에게 무료 시식품을 준다고 했으므로 (A)가 정답.', '투어가 끝나면 모두 무엇을 받는가?'],
    ] },

  { title: '전화 메시지 · 배관 수리 방문', voices: { W: 'US' },
    script: [
      ['W', 'Hi, this is Maria from Quick Plumbing. I\'m calling about your appointment tomorrow to fix the leak under your bathroom sink.'],
      ['W', 'Our plumber, Tony, is running ahead of schedule, so he could come today at four instead, if that works for you.'],
      ['W', 'If not, he\'ll be there tomorrow at ten as planned. Just call us back to let us know.'],
    ],
    ko: ['안녕하세요, 퀵 배관의 마리아입니다. 내일 욕실 세면대 아래 누수 수리 예약 건으로 전화드려요.', '배관공 토니가 일정보다 빨리 진행되고 있어서, 괜찮으시면 오늘 4시에 갈 수 있어요.', '안 되시면 원래대로 내일 10시에 갈 거예요. 전화로 알려만 주세요.'],
    qs: [
      ['What is the listener\'s problem?', ['A leak in the bathroom', 'A broken heater', 'A clogged kitchen drain', 'A noisy pipe'], 0, '문제점', '욕실 세면대 아래 누수라고 했으므로 (A)가 정답.', '듣는 사람의 문제는 무엇인가?'],
      ['What does the speaker offer?', ['An earlier appointment', 'A discount', 'A free inspection', 'A different plumber'], 0, '제안', '오늘 4시에 갈 수 있다고 했으므로 더 이른 방문인 (A)가 정답.', '화자는 무엇을 제안하는가?'],
      ['What is the listener asked to do?', ['Call back', 'Send an e-mail', 'Turn off the water', 'Pay in advance'], 0, '요청', '전화로 알려 달라고 했으므로 (A)가 정답.', '듣는 사람은 무엇을 해 달라는 요청을 받는가?'],
    ] },

  { title: '연설 · 회사 창립 기념', voices: { M: 'UK' },
    script: [
      ['M', 'Good evening, everyone. Tonight we\'re celebrating the twentieth anniversary of Bright Path Travel.'],
      ['M', 'When we started, we had one small office and three employees. Today, we have offices in eight countries and serve over a million customers a year.'],
      ['M', 'None of this would have been possible without your hard work. To thank you, every employee will receive an extra day of paid vacation this year.'],
    ],
    ko: ['안녕하세요, 여러분. 오늘 밤 우리는 브라이트 패스 여행사 창립 20주년을 축하합니다.', '처음 시작할 때는 작은 사무실 하나와 직원 세 명뿐이었어요. 지금은 8개국에 사무소가 있고 매년 100만 명 넘는 고객을 맞이합니다.', '여러분의 노고가 없었다면 불가능했을 일입니다. 감사의 뜻으로 올해 모든 직원에게 유급 휴가를 하루 더 드립니다.'],
    qs: [
      ['What is being celebrated?', ['A company anniversary', 'A new office', 'An award', 'A retirement'], 0, '주제', '창립 20주년을 축하한다고 했으므로 (A)가 정답.', '무엇을 축하하고 있는가?'],
      ['How many employees did the company have at first?', ['Three', 'Eight', 'Twenty', 'One'], 0, '세부 사항', '처음엔 직원이 세 명이었다고 했으므로 (A)가 정답.', '회사는 처음에 직원이 몇 명이었는가?'],
      ['What will employees receive?', ['An extra vacation day', 'A cash bonus', 'A free trip', 'A gift card'], 0, '세부 사항', '유급 휴가를 하루 더 준다고 했으므로 (A)가 정답.', '직원들은 무엇을 받는가?'],
    ] },

  { title: '라디오 · 건강 코너', voices: { W: 'AU' },
    script: [
      ['W', 'Welcome to "Healthy Living." Today\'s topic is sleep. Experts say most adults need seven to nine hours of sleep a night.'],
      ['W', 'One easy way to sleep better is to stop using your phone or computer an hour before bed, because the light from screens can keep your brain awake.'],
      ['W', 'After the news, we\'ll talk with a doctor about how exercise can also improve your sleep.'],
    ],
    ko: ['"건강한 생활"에 오신 걸 환영합니다. 오늘의 주제는 수면이에요. 전문가들은 대부분의 성인이 하룻밤에 7~9시간 자야 한다고 말해요.', '잠을 더 잘 자는 쉬운 방법 하나는 자기 한 시간 전에 휴대전화나 컴퓨터 사용을 멈추는 거예요. 화면의 빛이 뇌를 깨어 있게 만들 수 있거든요.', '뉴스가 끝나면 운동이 어떻게 수면을 개선하는지 의사와 이야기해 보겠습니다.'],
    qs: [
      ['What is the topic of the program?', ['Sleep', 'Diet', 'Stress', 'Exercise equipment'], 0, '주제', '오늘의 주제는 수면이라고 했으므로 (A)가 정답.', '프로그램의 주제는 무엇인가?'],
      ['What does the speaker recommend?', ['Avoiding screens before bed', 'Drinking warm milk', 'Going to bed earlier', 'Taking a nap'], 0, '제안', '자기 한 시간 전에 휴대전화·컴퓨터 사용을 멈추라고 했으므로 (A)가 정답.', '화자는 무엇을 권하는가?'],
      ['Who will the speaker talk with after the news?', ['A doctor', 'A fitness trainer', 'A scientist', 'A listener'], 0, '다음 할 일', '뉴스 후 의사와 이야기한다고 했으므로 (A)가 정답.', '화자는 뉴스 후 누구와 이야기할 것인가?'],
    ] },
]);
