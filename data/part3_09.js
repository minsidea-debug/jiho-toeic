/* Part 3 · 짧은 대화 추가 묶음 09 (세트 p3-s81 ~ s90, 문제 p3-241 ~ 270) — 직접 창작. 형식은 part3_02.js 참고
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(3, 81, 241, [
  { title: '사무실 · 프로젝터 대여', voices: { M: 'CA', W: 'UK' },
    script: [
      ['M', 'Hi, Anna. Can I borrow the portable projector this afternoon? I\'m meeting a client at their office.'],
      ['W', 'Sorry, Tom already reserved it for today. But we have an older model in the supply room.'],
      ['M', 'Does it work with my laptop?'],
      ['W', 'You\'ll need an adapter. There should be one in the same box.'],
    ],
    ko: ['안녕하세요, 애나. 오늘 오후에 휴대용 프로젝터 빌릴 수 있어요? 고객 사무실에서 미팅이 있어요.', '미안해요, 톰이 오늘 이미 예약했어요. 하지만 비품실에 예전 모델이 있어요.', '제 노트북이랑 연결돼요?', '어댑터가 필요할 거예요. 같은 상자 안에 하나 있을 거예요.'],
    qs: [
      ['Why does the man need a projector?', ['For a client meeting', 'For a training session', 'For a movie night', 'For a job interview'], 0, '이유', '고객 사무실에서 미팅이 있다고 했으므로 (A)가 정답.', '남자는 왜 프로젝터가 필요한가?'],
      ['What does the woman say about the portable projector?', ['Someone else reserved it.', 'It is broken.', 'It was sold.', 'It is in the supply room.'], 0, '세부 사항', '톰이 이미 예약했다고 했으므로 (A)가 정답.', '여자는 휴대용 프로젝터에 대해 무엇을 말하는가?'],
      ['What will the man need?', ['An adapter', 'A new laptop', 'A longer cable', 'A screen'], 0, '세부 사항', '어댑터가 필요하다고 했으므로 (A)가 정답.', '남자에게 무엇이 필요한가?'],
    ] },

  { title: '식당 · 예약 시간 변경', voices: { W: 'US', M: 'AU' },
    script: [
      ['W', 'Hi, I have a reservation for six people at seven tonight under the name Garcia.'],
      ['M', 'Yes, Ms. Garcia. How can I help?'],
      ['W', 'Two of our guests are delayed. Could we move it to eight?'],
      ['M', 'Eight is fully booked, but we have a table at eight thirty.'],
      ['W', 'That works. Thank you.'],
    ],
    ko: ['안녕하세요, 오늘 밤 7시에 가르시아 이름으로 6명 예약했어요.', '네, 가르시아 씨. 무엇을 도와드릴까요?', '손님 두 명이 늦어져서요. 8시로 옮길 수 있을까요?', '8시는 꽉 찼지만 8시 반에 자리가 있어요.', '그걸로 할게요. 고마워요.'],
    qs: [
      ['Why is the woman calling?', ['To change a reservation time', 'To cancel a reservation', 'To order food', 'To ask for directions'], 0, '목적', '예약 시간을 옮기고 싶다고 했으므로 (A)가 정답.', '여자는 왜 전화하는가?'],
      ['Why does the woman want to make a change?', ['Some guests are delayed.', 'The restaurant is too busy.', 'She wants a bigger table.', 'Her flight is late.'], 0, '이유', '손님 두 명이 늦어진다고 했으므로 (A)가 정답.', '여자는 왜 변경하려 하는가?'],
      ['What time will the woman\'s group arrive?', ['At 8:30', 'At 8:00', 'At 7:00', 'At 7:30'], 0, '세부 사항', '8시 반 자리로 하겠다고 했으므로 (A)가 정답.', '여자 일행은 몇 시에 도착할 것인가?'],
    ] },

  { title: '회사 · 사내 체육 행사 (3명)', voices: { M: 'US', W: 'CA', M2: 'AU' },
    script: [
      ['M', 'Are you two signing up for the company soccer tournament next month?'],
      ['W', 'I\'d like to, but I haven\'t played in years.'],
      ['M2', 'Don\'t worry. It\'s just for fun. There\'s a practice session every Thursday after work.'],
      ['W', 'Oh, that sounds good. Where do they practice?'],
      ['M2', 'At the park next to the office. I\'ll send you the sign-up link.'],
    ],
    ko: ['두 분 다음 달 회사 축구 대회 신청할 거예요?', '하고 싶은데, 몇 년 동안 안 해 봤어요.', '걱정 마요. 그냥 재미로 하는 거예요. 매주 목요일 퇴근 후에 연습도 있어요.', '아, 좋네요. 어디서 연습해요?', '사무실 옆 공원에서요. 신청 링크 보내 줄게요.'],
    qs: [
      ['What event are the speakers discussing?', ['A soccer tournament', 'A charity run', 'A company picnic', 'A fitness class'], 0, '주제', '회사 축구 대회 이야기이므로 (A)가 정답.', '화자들은 어떤 행사에 대해 이야기하는가?'],
      ['What is the woman concerned about?', ['She has not played in a long time.', 'She has no free time.', 'The event is too far away.', 'She does not have equipment.'], 0, '걱정', '몇 년 동안 안 해 봤다고 했으므로 (A)가 정답.', '여자는 무엇을 걱정하는가?'],
      ['Where are the practice sessions held?', ['At a park near the office', 'In the company gym', 'At a sports stadium', 'At a school'], 0, '세부 사항', '사무실 옆 공원이라고 했으므로 (A)가 정답.', '연습은 어디서 하는가?'],
    ] },

  { title: '전시회 · 부스 배치 (표)', voices: { W: 'AU', M: 'UK' },
    graphic: { title: 'Trade Show Booth Prices', rows: [['Location', 'Price'], ['Main entrance', '$2,000'], ['Center hall', '$1,600'], ['Near the café', '$1,200'], ['Back corner', '$800']] },
    script: [
      ['W', 'We need to choose our booth for the trade show. The ones by the main entrance get the most visitors.'],
      ['M', 'True, but our budget is only fifteen hundred dollars.'],
      ['W', 'Then let\'s take the most expensive one we can afford. People always stop there for coffee anyway.'],
      ['M', 'Good point. I\'ll fill out the application today.'],
    ],
    ko: ['박람회 부스를 골라야 해요. 정문 옆 부스에 방문객이 제일 많아요.', '맞아요, 그런데 예산이 1,500달러밖에 안 돼요.', '그럼 감당할 수 있는 것 중 가장 비싼 걸로 해요. 어차피 사람들이 늘 커피 마시러 거기 들르잖아요.', '좋은 지적이에요. 오늘 신청서를 작성할게요.'],
    qs: [
      ['What are the speakers choosing?', ['A trade show booth', 'A café menu', 'A hotel room', 'A new office'], 0, '주제', '박람회 부스를 고르고 있으므로 (A)가 정답.', '화자들은 무엇을 고르고 있는가?'],
      ['Look at the graphic. How much will the speakers most likely pay?', ['$2,000', '$1,600', '$1,200', '$800'], 2, '시각 정보', '예산 1,500달러로 살 수 있는 가장 비싼 것은 카페 근처 $1,200입니다. 사람들이 커피 마시러 들른다는 말도 단서.', '표를 보시오. 화자들은 얼마를 낼 것 같은가?'],
      ['What will the man do today?', ['Complete an application', 'Visit the venue', 'Buy some coffee', 'Call the organizer'], 0, '다음 할 일', '오늘 신청서를 작성하겠다고 했으므로 (A)가 정답.', '남자는 오늘 무엇을 할 것인가?'],
    ] },

  { title: '병원 · 검진 결과 상담', voices: { M: 'US', W: 'CA' },
    script: [
      ['M', 'Hi, this is Dr. Patel\'s office calling for Ms. Wong. Your test results are ready.'],
      ['W', 'Thank you. Is everything OK?'],
      ['M', 'The doctor would like to go over them with you in person. Are you free on Monday morning?'],
      ['W', 'Monday is difficult. Could I come in on Tuesday instead?'],
      ['M', 'Yes, Tuesday at ten thirty is open.'],
    ],
    ko: ['안녕하세요, 파텔 선생님 진료실인데요, 웡 씨께 전화드렸어요. 검사 결과가 나왔어요.', '고마워요. 다 괜찮나요?', '선생님께서 직접 만나서 설명하고 싶어 하세요. 월요일 오전에 시간 되세요?', '월요일은 어려워요. 대신 화요일에 가도 될까요?', '네, 화요일 10시 반이 비어 있어요.'],
    qs: [
      ['Why is the man calling?', ['To report that test results are ready', 'To cancel an appointment', 'To ask for a payment', 'To confirm insurance'], 0, '목적', '검사 결과가 나왔다고 알리려고 전화했으므로 (A)가 정답.', '남자는 왜 전화하는가?'],
      ['What does the doctor want to do?', ['Discuss the results in person', 'Repeat the test', 'Send the results by e-mail', 'Refer her to a specialist'], 0, '세부 사항', '직접 만나서 설명하고 싶어 한다고 했으므로 (A)가 정답.', '의사는 무엇을 하고 싶어 하는가?'],
      ['When will the woman visit?', ['On Tuesday at 10:30', 'On Monday morning', 'On Tuesday afternoon', 'On Wednesday'], 0, '세부 사항', '화요일 10시 반이 비어 있다고 했으므로 (A)가 정답.', '여자는 언제 방문하는가?'],
    ] },

  { title: '회사 · 재택근무 장비', voices: { W: 'UK', M: 'CA' },
    script: [
      ['W', 'Hi, Jason. I\'ll be working from home three days a week starting next month.'],
      ['M', 'Great. Do you need any equipment for your home office?'],
      ['W', 'A second monitor would be really helpful.'],
      ['M', 'No problem. Fill out the equipment request form, and the IT team will deliver one to your home.'],
    ],
    ko: ['안녕하세요, 제이슨. 다음 달부터 일주일에 3일 재택근무를 해요.', '좋네요. 홈 오피스에 필요한 장비 있어요?', '모니터 하나 더 있으면 정말 도움이 될 것 같아요.', '문제없어요. 장비 요청서를 작성하면 IT팀이 집으로 배달해 줄 거예요.'],
    qs: [
      ['What will the woman start doing next month?', ['Working from home part of the week', 'Managing a new team', 'Traveling for work', 'Taking a training course'], 0, '세부 사항', '다음 달부터 일주일에 3일 재택근무를 한다고 했으므로 (A)가 정답.', '여자는 다음 달부터 무엇을 하는가?'],
      ['What does the woman ask for?', ['A second monitor', 'A new chair', 'A faster laptop', 'A printer'], 0, '요청', '모니터 하나 더 있으면 좋겠다고 했으므로 (A)가 정답.', '여자는 무엇을 요청하는가?'],
      ['What should the woman do?', ['Fill out a request form', 'Buy the item herself', 'Visit the IT office', 'Wait for an e-mail'], 0, '요청', '장비 요청서를 작성하라고 했으므로 (A)가 정답.', '여자는 무엇을 해야 하는가?'],
    ] },

  { title: '가게 · 선물 포장', voices: { M: 'AU', W: 'US' },
    script: [
      ['M', 'I\'d like to buy this scarf as a gift. Do you offer gift wrapping?'],
      ['W', 'Yes, we do. It\'s free for purchases over thirty dollars, and the scarf is forty-five.'],
      ['M', 'Great. Could you also include a gift receipt in case my sister wants to exchange it?'],
      ['W', 'Of course. Exchanges can be made within thirty days.'],
    ],
    ko: ['이 스카프를 선물로 사고 싶어요. 선물 포장해 주나요?', '네, 해 드려요. 30달러 넘게 사시면 무료인데, 스카프가 45달러예요.', '좋아요. 여동생이 교환하고 싶어 할 수도 있으니 교환용 영수증도 넣어 줄래요?', '물론이죠. 교환은 30일 이내에 가능해요.'],
    qs: [
      ['What is the man buying?', ['A scarf', 'A sweater', 'A hat', 'A bag'], 0, '세부 사항', '스카프를 산다고 했으므로 (A)가 정답.', '남자는 무엇을 사는가?'],
      ['Why is the gift wrapping free?', ['The purchase is over a certain amount.', 'It is a holiday sale.', 'The man is a member.', 'The item is on sale.'], 0, '이유', '30달러 넘게 사면 무료이고 스카프가 45달러라 무료입니다. (A)가 정답.', '선물 포장은 왜 무료인가?'],
      ['What does the man request?', ['A gift receipt', 'A discount', 'A different color', 'A gift card'], 0, '요청', '교환용 영수증을 넣어 달라고 했으므로 (A)가 정답.', '남자는 무엇을 요청하는가?'],
    ] },

  { title: '회사 · 공급업체 가격 인상', voices: { W: 'CA', M: 'US' },
    script: [
      ['W', 'Our paper supplier just informed us they\'re raising prices by fifteen percent next quarter.'],
      ['M', 'That\'s a big increase. We use a lot of paper for our printed catalogs.'],
      ['W', 'Exactly. Maybe it\'s time to move more of our catalogs online.'],
      ['M', 'That\'s worth considering. Let\'s bring it up at the marketing meeting on Monday.'],
    ],
    ko: ['종이 공급업체가 다음 분기부터 가격을 15퍼센트 올린다고 방금 알려 왔어요.', '큰 인상이네요. 인쇄 카탈로그에 종이를 많이 쓰는데요.', '그러니까요. 카탈로그를 더 많이 온라인으로 옮길 때가 된 것 같아요.', '고려해 볼 만하네요. 월요일 마케팅 회의에서 이야기해 봐요.'],
    qs: [
      ['What problem are the speakers discussing?', ['A price increase', 'A late delivery', 'A printing error', 'A lost catalog'], 0, '문제점', '공급업체가 가격을 15퍼센트 올린다고 했으므로 (A)가 정답.', '화자들은 어떤 문제를 이야기하는가?'],
      ['What does the woman suggest?', ['Putting more catalogs online', 'Finding a new printer', 'Raising product prices', 'Printing fewer pages'], 0, '제안', '카탈로그를 더 많이 온라인으로 옮기자고 했으므로 (A)가 정답.', '여자는 무엇을 제안하는가?'],
      ['What will happen on Monday?', ['A marketing meeting', 'A supplier visit', 'A catalog launch', 'A price change'], 0, '세부 사항', '월요일 마케팅 회의에서 논의하자고 했으므로 (A)가 정답.', '월요일에 무엇이 있는가?'],
    ] },

  { title: '공항 라운지 · 비행 지연', voices: { M: 'UK', W: 'AU' },
    script: [
      ['M', 'Excuse me, I just saw that my flight to Rome is delayed by three hours. Is there anywhere I can rest?'],
      ['W', 'Because of the delay, you can use the business lounge for free. Just show your boarding pass at the entrance.'],
      ['M', 'That\'s great. Is it far from here?'],
      ['W', 'It\'s on the second floor, right above Gate 14.'],
    ],
    ko: ['실례합니다, 로마행 비행기가 3시간 지연된 걸 방금 봤어요. 쉴 만한 곳이 있을까요?', '지연 때문에 비즈니스 라운지를 무료로 쓰실 수 있어요. 입구에서 탑승권만 보여 주세요.', '좋네요. 여기서 멀어요?', '14번 게이트 바로 위 2층에 있어요.'],
    qs: [
      ['What problem does the man have?', ['His flight is delayed.', 'He lost his ticket.', 'His bag is missing.', 'He missed his flight.'], 0, '문제점', '비행기가 3시간 지연됐다고 했으므로 (A)가 정답.', '남자는 어떤 문제가 있는가?'],
      ['What can the man do for free?', ['Use a lounge', 'Change his flight', 'Get a meal', 'Book a hotel'], 0, '세부 사항', '비즈니스 라운지를 무료로 쓸 수 있다고 했으므로 (A)가 정답.', '남자는 무엇을 무료로 할 수 있는가?'],
      ['Where is the lounge?', ['Above Gate 14', 'Next to Gate 14', 'On the first floor', 'Near the entrance'], 0, '세부 사항', '14번 게이트 바로 위 2층이라고 했으므로 (A)가 정답.', '라운지는 어디에 있는가?'],
    ] },

  { title: '회사 · 회의 시간 착각', voices: { W: 'US', M: 'CA' },
    script: [
      ['W', 'Hi, Ryan. Weren\'t you supposed to be at the budget meeting?'],
      ['M', 'I thought it was at three.'],
      ['W', 'It was moved to one. They sent an e-mail this morning.'],
      ['M', 'Oh no, I haven\'t checked my e-mail today. I\'ll head over there right now.'],
    ],
    ko: ['안녕하세요, 라이언. 예산 회의에 가 있어야 하는 거 아니었어요?', '3시인 줄 알았어요.', '1시로 옮겨졌어요. 오늘 아침에 이메일을 보냈던데요.', '이런, 오늘 이메일을 확인 안 했어요. 지금 바로 갈게요.'],
    qs: [
      ['What meeting are the speakers discussing?', ['A budget meeting', 'A sales meeting', 'A staff training', 'A client meeting'], 0, '주제', '예산 회의 이야기이므로 (A)가 정답.', '화자들은 어떤 회의에 대해 이야기하는가?'],
      ['What does the man imply when he says, "I thought it was at three"?', ['He did not know the time had changed.', 'He wants to reschedule.', 'He is too busy to attend.', 'He already attended.'], 0, '의도 파악', '3시인 줄 알았다는 말은 시간이 바뀐 걸 몰랐다는 뜻입니다. (A)가 정답.', '남자가 "3시인 줄 알았어요"라고 말한 의도는?'],
      ['What will the man do next?', ['Go to the meeting', 'Check his e-mail', 'Call his manager', 'Prepare a report'], 0, '다음 할 일', '지금 바로 가겠다고 했으므로 (A)가 정답.', '남자는 다음에 무엇을 할 것인가?'],
    ] },
]);
