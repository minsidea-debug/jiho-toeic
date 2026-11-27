/* Part 3 · 짧은 대화 추가 묶음 03 (세트 p3-s21 ~ s30, 문제 p3-061 ~ 090) — 직접 창작. 형식은 part3_02.js 참고
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(3, 21, 61, [
  { title: '식당 · 음식 배달 누락', voices: { W: 'US', M: 'AU' },
    script: [
      ['W', 'Hi, I just got a delivery from your restaurant, but the soup I ordered is missing.'],
      ['M', 'I\'m so sorry. Can you tell me your order number?'],
      ['W', 'It\'s 4-5-7-2. I paid for two soups and three sandwiches.'],
      ['M', 'I see the mistake. I\'ll send the soups right away, and I\'ll refund the delivery fee to your card.'],
    ],
    ko: ['안녕하세요, 방금 식당에서 배달을 받았는데 주문한 수프가 없어요.', '정말 죄송합니다. 주문 번호를 알려 주시겠어요?', '4572예요. 수프 두 개와 샌드위치 세 개 값을 냈어요.', '실수가 확인되네요. 수프를 바로 보내 드리고, 배달비는 카드로 환불해 드릴게요.'],
    qs: [
      ['What problem does the woman report?', ['Part of her order is missing.', 'Her food is cold.', 'She was charged too much.', 'The delivery was late.'], 0, '문제점', '주문한 수프가 빠졌다고 했으므로 일부가 누락된 (A)가 정답.', '여자는 어떤 문제를 알리는가?'],
      ['What does the man ask for?', ['An order number', 'A home address', 'A phone number', 'A receipt'], 0, '요청', '주문 번호를 알려 달라고 했으므로 (A)가 정답.', '남자는 무엇을 요청하는가?'],
      ['What will the woman receive?', ['A refund of the delivery fee', 'A free dessert', 'A discount coupon', 'A new sandwich'], 0, '세부 사항', '배달비를 카드로 환불해 주겠다고 했으므로 (A)가 정답.', '여자는 무엇을 받게 되는가?'],
    ] },

  { title: '회사 · 신입 사원 멘토', voices: { M: 'UK', W: 'CA' },
    script: [
      ['M', 'Jessica, we have a new designer starting next week. Would you be willing to be her mentor?'],
      ['W', 'I\'d be happy to. What would that involve?'],
      ['M', 'Mainly meeting with her once a week for the first three months and answering her questions.'],
      ['W', 'Sure. I\'m in the Chicago office every other Monday, though, so we\'d need to meet on another day.'],
    ],
    ko: ['제시카, 다음 주에 새 디자이너가 들어와요. 그분의 멘토가 되어 줄 수 있어요?', '기꺼이요. 어떤 일을 하면 되죠?', '주로 처음 석 달 동안 일주일에 한 번 만나서 질문에 답해 주는 거예요.', '좋아요. 다만 저는 격주 월요일마다 시카고 사무소에 가서, 다른 요일에 만나야 할 거예요.'],
    qs: [
      ['What does the man ask the woman to do?', ['Mentor a new employee', 'Interview a designer', 'Lead a project', 'Visit the Chicago office'], 0, '요청', '새 디자이너의 멘토가 되어 달라고 했으므로 (A)가 정답.', '남자는 여자에게 무엇을 해 달라고 하는가?'],
      ['How often will the mentor meet the new employee?', ['Once a week', 'Every day', 'Twice a month', 'Once a month'], 0, '세부 사항', '일주일에 한 번 만난다고 했으므로 (A)가 정답.', '멘토는 신입 사원을 얼마나 자주 만나게 되는가?'],
      ['What does the woman mention about her schedule?', ['She works in another office on some Mondays.', 'She is going on vacation.', 'She is free every afternoon.', 'She works part-time.'], 0, '세부 사항', '격주 월요일마다 시카고 사무소에 간다고 했으므로 (A)가 정답.', '여자는 자기 일정에 대해 무엇을 말하는가?'],
    ] },

  { title: '전자 매장 · 프린터 구매', voices: { W: 'AU', M: 'US' },
    script: [
      ['W', 'Excuse me, I\'m looking for a printer for my small office. Something that can also scan documents.'],
      ['M', 'This model is very popular. It prints, scans, and copies, and it connects wirelessly.'],
      ['W', 'It looks good, but it\'s a bit more than I planned to spend.'],
      ['M', 'Well, it\'s actually going on sale this weekend. It\'ll be twenty percent off starting Saturday.'],
      ['W', 'Oh, then I\'ll come back on Saturday.'],
    ],
    ko: ['실례합니다, 작은 사무실용 프린터를 찾고 있어요. 문서 스캔도 되는 걸로요.', '이 모델이 아주 인기 있어요. 인쇄, 스캔, 복사가 되고 무선으로 연결돼요.', '좋아 보이는데 생각했던 것보다 조금 비싸네요.', '그런데 이게 이번 주말에 세일해요. 토요일부터 20퍼센트 할인돼요.', '아, 그럼 토요일에 다시 올게요.'],
    qs: [
      ['What is the woman shopping for?', ['A printer', 'A laptop', 'A desk', 'A phone'], 0, '세부 사항', '사무실용 프린터를 찾는다고 했으므로 (A)가 정답.', '여자는 무엇을 사려고 하는가?'],
      ['What does the woman mean when she says, "it\'s a bit more than I planned to spend"?', ['The price is too high for her.', 'She wants a bigger model.', 'She needs more features.', 'She will pay by card.'], 0, '의도 파악', '생각보다 비싸다는 말은 가격이 부담된다는 뜻입니다. (A)가 정답.', '여자가 "생각했던 것보다 조금 비싸네요"라고 말한 의도는?'],
      ['What will the woman most likely do?', ['Return to the store on Saturday', 'Buy the printer now', 'Order online', 'Look at another model'], 0, '다음 할 일', '토요일에 다시 오겠다고 했으므로 (A)가 정답.', '여자는 무엇을 할 것 같은가?'],
    ] },

  { title: '회사 · 직원 설문 결과 (그래프)', voices: { M: 'CA', W: 'UK' },
    graphic: { title: 'Employee Survey – Most Requested Benefits', rows: [['Benefit', 'Votes'], ['Flexible hours', '58'], ['Free lunch', '41'], ['Gym membership', '33'], ['Extra vacation', '27']] },
    script: [
      ['M', 'Helen, I\'ve got the results of the employee benefits survey.'],
      ['W', 'Great. What did people want most?'],
      ['M', 'Flexible hours were the clear winner. But management says that one is difficult for our customer service team.'],
      ['W', 'Then let\'s propose the second most popular option at the next board meeting. I\'ll put together the costs.'],
    ],
    ko: ['헬렌, 직원 복지 설문 결과를 받았어요.', '좋아요. 직원들이 가장 원한 게 뭐예요?', '유연 근무가 확실한 1위예요. 그런데 경영진은 그건 고객 서비스팀 때문에 어렵다고 하네요.', '그럼 다음 이사회 회의에서 두 번째로 인기 있는 걸 제안해요. 제가 비용을 정리할게요.'],
    qs: [
      ['What are the speakers discussing?', ['Survey results', 'A hiring plan', 'A sales report', 'A training program'], 0, '주제', '직원 복지 설문 결과를 이야기합니다. (A)가 정답.', '화자들은 무엇에 대해 이야기하는가?'],
      ['Look at the graphic. Which benefit will the speakers propose?', ['Flexible hours', 'Free lunch', 'Gym membership', 'Extra vacation'], 1, '시각 정보', '1위(유연 근무)는 어렵다고 해서 두 번째로 인기 있는 것을 제안하기로 했습니다. 표에서 2위는 Free lunch(41표).', '표를 보시오. 화자들은 어떤 복지를 제안할 것인가?'],
      ['What will the woman do?', ['Prepare cost information', 'Call a manager', 'Conduct a new survey', 'Hire more staff'], 0, '다음 할 일', '비용을 정리하겠다고 했으므로 (A)가 정답.', '여자는 무엇을 할 것인가?'],
    ] },

  { title: '렌터카 · 차량 반납', voices: { W: 'US', M: 'CA' },
    script: [
      ['W', 'Hi, I\'m returning the car I rented on Monday. Here are the keys.'],
      ['M', 'Thank you. Did you fill up the gas tank before returning it?'],
      ['W', 'Oh no, I forgot. Is there a gas station nearby?'],
      ['M', 'There\'s one about a mile away, but if you\'d rather not go, we can fill it for you. There\'s a small service charge, though.'],
      ['W', 'I\'m in a hurry to catch my flight, so please go ahead and do that.'],
    ],
    ko: ['안녕하세요, 월요일에 빌린 차를 반납하려고요. 여기 열쇠요.', '고맙습니다. 반납하기 전에 기름을 가득 채우셨나요?', '아이고, 깜빡했네요. 근처에 주유소가 있나요?', '1마일쯤 떨어진 곳에 하나 있는데, 가기 싫으시면 저희가 채워 드릴 수 있어요. 다만 약간의 서비스 요금이 있어요.', '비행기를 타야 해서 급하니까 그렇게 해 주세요.'],
    qs: [
      ['Where most likely does the conversation take place?', ['At a car rental counter', 'At a gas station', 'At a parking garage', 'At a repair shop'], 0, '장소', '빌린 차를 반납하는 대화이므로 렌터카 카운터입니다. (A)가 정답.', '대화는 어디에서 이루어질 것 같은가?'],
      ['What did the woman forget to do?', ['Refill the gas tank', 'Return the keys', 'Clean the car', 'Pay a deposit'], 0, '세부 사항', '기름을 채우는 것을 깜빡했다고 했으므로 (A)가 정답.', '여자는 무엇을 하는 것을 잊었는가?'],
      ['Why does the woman accept the man\'s offer?', ['She needs to catch a flight.', 'The fee is very low.', 'The gas station is closed.', 'She does not have a map.'], 0, '이유', '비행기를 타야 해서 급하다고 했으므로 (A)가 정답.', '여자는 왜 남자의 제안을 받아들이는가?'],
    ] },

  { title: '출판사 · 원고 마감 (3명)', voices: { W: 'UK', M: 'US', W2: 'AU' },
    script: [
      ['W', 'Good morning. Thanks for meeting with us, Mr. Ward. We\'re excited about your new cookbook.'],
      ['M', 'Thank you. I\'ve finished about eighty recipes, but I still need to take the photos.'],
      ['W2', 'We have a photographer we often work with. She could do the photos at our studio.'],
      ['M', 'That would save me a lot of time.'],
      ['W', 'Great. Then could you send us the remaining recipes by the end of next month?'],
      ['M', 'Yes, I can do that.'],
    ],
    ko: ['안녕하세요. 만나 주셔서 고마워요, 워드 씨. 새 요리책이 정말 기대돼요.', '고마워요. 레시피는 80개 정도 끝냈는데, 아직 사진을 찍어야 해요.', '저희가 자주 같이 일하는 사진작가가 있어요. 저희 스튜디오에서 사진을 찍을 수 있어요.', '그러면 시간이 많이 절약되겠네요.', '좋아요. 그럼 남은 레시피를 다음 달 말까지 보내 주실 수 있어요?', '네, 그렇게 할게요.'],
    qs: [
      ['Who most likely is the man?', ['A cookbook author', 'A photographer', 'A restaurant owner', 'A publisher'], 0, '화자 정체', '새 요리책의 레시피를 쓰고 있으므로 요리책 저자입니다. (A)가 정답.', '남자는 누구일 것 같은가?'],
      ['What does the second woman offer?', ['The services of a photographer', 'A higher payment', 'A new kitchen', 'An editing assistant'], 0, '제안', '자주 일하는 사진작가가 스튜디오에서 사진을 찍을 수 있다고 했으므로 (A)가 정답.', '두 번째 여자는 무엇을 제안하는가?'],
      ['What does the man agree to do?', ['Send the rest of the recipes', 'Take the photos himself', 'Visit the studio tomorrow', 'Sign a contract today'], 0, '세부 사항', '남은 레시피를 다음 달 말까지 보내겠다고 동의했습니다. (A)가 정답.', '남자는 무엇을 하기로 동의하는가?'],
    ] },

  { title: '헬스장 · 회원 등록', voices: { M: 'AU', W: 'CA' },
    script: [
      ['M', 'Hi, I\'m interested in joining the gym. Do you offer any classes?'],
      ['W', 'Yes, we have yoga, cycling, and swimming classes. They\'re all included in the monthly membership.'],
      ['M', 'That sounds good. I usually work late, though. How late are you open?'],
      ['W', 'Until eleven on weekdays. And if you sign up today, you won\'t have to pay the registration fee.'],
    ],
    ko: ['안녕하세요, 헬스장에 가입하려고 하는데요. 수업도 있나요?', '네, 요가, 사이클, 수영 수업이 있어요. 모두 월 회비에 포함돼요.', '좋네요. 그런데 저는 보통 늦게까지 일해요. 몇 시까지 열어요?', '평일엔 11시까지요. 그리고 오늘 등록하시면 가입비를 안 내셔도 돼요.'],
    qs: [
      ['What is included in the membership?', ['Group classes', 'Personal training', 'Free parking', 'Meals'], 0, '세부 사항', '요가·사이클·수영 수업이 월 회비에 포함된다고 했으므로 (A)가 정답.', '회원권에는 무엇이 포함되는가?'],
      ['Why does the man ask about opening hours?', ['He often finishes work late.', 'He wants to exercise early.', 'He lives far away.', 'He works on weekends.'], 0, '이유', '보통 늦게까지 일한다고 했으므로 (A)가 정답.', '남자는 왜 운영 시간을 묻는가?'],
      ['What does the woman say about signing up today?', ['A fee will be waived.', 'A free towel is given.', 'Classes are discounted.', 'Parking is free.'], 0, '세부 사항', '오늘 등록하면 가입비를 안 낸다고 했으므로 수수료 면제인 (A)가 정답.', '여자는 오늘 등록하는 것에 대해 무엇을 말하는가?'],
    ] },

  { title: '회사 · 고객 방문 준비', voices: { W: 'US', M: 'UK' },
    script: [
      ['W', 'Brian, the clients from Tokyo are visiting on Wednesday. Have you planned the factory tour?'],
      ['M', 'Yes, I\'ve arranged it with the plant manager. The tour starts at ten.'],
      ['W', 'Good. One of them mentioned she\'d like to see our new packaging line.'],
      ['M', 'Unfortunately, that line is being serviced on Wednesday. But I can show them a video of it in operation.'],
    ],
    ko: ['브라이언, 도쿄 고객들이 수요일에 방문해요. 공장 견학 계획은 세웠어요?', '네, 공장장과 준비해 뒀어요. 견학은 10시에 시작해요.', '좋아요. 그중 한 분이 새 포장 라인을 보고 싶다고 했어요.', '안타깝게도 그 라인은 수요일에 정비 중이에요. 하지만 가동 중인 영상을 보여 드릴 수 있어요.'],
    qs: [
      ['Who is visiting on Wednesday?', ['Some clients', 'A new manager', 'Safety inspectors', 'Job applicants'], 0, '세부 사항', '도쿄 고객들이 방문한다고 했으므로 (A)가 정답.', '수요일에 누가 방문하는가?'],
      ['What problem does the man mention?', ['A production line will be under maintenance.', 'The plant manager is away.', 'The tour was canceled.', 'A video is not ready.'], 0, '문제점', '그 라인이 수요일에 정비 중이라고 했으므로 (A)가 정답.', '남자는 어떤 문제를 언급하는가?'],
      ['What does the man offer to do?', ['Show a video', 'Change the tour date', 'Call the clients', 'Visit Tokyo'], 0, '제안', '가동 영상을 보여 주겠다고 했으므로 (A)가 정답.', '남자는 무엇을 하겠다고 하는가?'],
    ] },

  { title: '여행사 · 투어 예약', voices: { M: 'UK', W: 'AU' },
    script: [
      ['M', 'Hello, I\'d like to book the city bus tour for this Sunday for two people.'],
      ['W', 'I\'m afraid the Sunday tour is fully booked. We do have seats on Saturday.'],
      ['M', 'Saturday... my wife and I have a dinner that evening. What time does the tour end?'],
      ['W', 'It ends at four, so you\'d have plenty of time.'],
      ['M', 'Great, we\'ll take two tickets for Saturday then.'],
    ],
    ko: ['안녕하세요, 이번 주 일요일 시내 버스 투어를 두 명 예약하고 싶어요.', '죄송하지만 일요일 투어는 예약이 다 찼어요. 토요일엔 자리가 있어요.', '토요일이라… 아내와 저는 그날 저녁에 식사 약속이 있어요. 투어가 몇 시에 끝나요?', '4시에 끝나니까 시간이 충분하실 거예요.', '좋아요, 그럼 토요일 표 두 장으로 할게요.'],
    qs: [
      ['What does the man want to do?', ['Book a tour', 'Rent a car', 'Reserve a restaurant', 'Buy a bus pass'], 0, '목적', '시내 버스 투어를 예약하고 싶다고 했으므로 (A)가 정답.', '남자는 무엇을 하고 싶어 하는가?'],
      ['What problem does the woman mention?', ['The Sunday tour has no seats left.', 'The bus is being repaired.', 'The price has increased.', 'The tour was canceled.'], 0, '문제점', '일요일 투어가 꽉 찼다고 했으므로 (A)가 정답.', '여자는 어떤 문제를 언급하는가?'],
      ['Why does the man ask when the tour ends?', ['He has evening plans.', 'He has to catch a train.', 'He wants a longer tour.', 'He needs to pick up his children.'], 0, '이유', '그날 저녁에 식사 약속이 있다고 했으므로 (A)가 정답.', '남자는 왜 투어가 언제 끝나는지 묻는가?'],
    ] },

  { title: '사내 · 행사 장소 변경', voices: { W: 'CA', M: 'AU' },
    script: [
      ['W', 'Tony, I just heard that the hotel where we\'re holding the sales conference has a problem with its ballroom.'],
      ['M', 'Really? What happened?'],
      ['W', 'A pipe burst and the floor was damaged. They\'ve offered us two smaller rooms instead.'],
      ['M', 'Hmm, we have over two hundred people registered.'],
      ['W', 'I know. I\'m going to call the convention center to see if they have anything available that week.'],
    ],
    ko: ['토니, 방금 들었는데 영업 회의를 열 호텔 연회장에 문제가 생겼대요.', '정말요? 무슨 일이에요?', '파이프가 터져서 바닥이 손상됐대요. 대신 작은 방 두 개를 제안했어요.', '음, 등록한 사람이 200명이 넘는데요.', '알아요. 그 주에 쓸 수 있는 곳이 있는지 컨벤션 센터에 전화해 볼게요.'],
    qs: [
      ['What problem are the speakers discussing?', ['An event space was damaged.', 'A speaker canceled.', 'Registration is low.', 'The hotel raised its prices.'], 0, '문제점', '파이프가 터져 연회장 바닥이 손상됐다고 했으므로 (A)가 정답.', '화자들은 어떤 문제를 이야기하는가?'],
      ['Why does the man say, "we have over two hundred people registered"?', ['To suggest the new rooms are too small', 'To report a successful campaign', 'To ask for a bigger budget', 'To complain about the hotel staff'], 0, '의도 파악', '작은 방 두 개를 제안받은 상황에서 200명이 넘는다고 한 것은 공간이 너무 작다는 뜻입니다. (A)가 정답.', '남자가 "등록한 사람이 200명이 넘어요"라고 말한 이유는?'],
      ['What will the woman do next?', ['Contact another venue', 'Cancel the conference', 'Visit the hotel', 'E-mail the attendees'], 0, '다음 할 일', '컨벤션 센터에 전화해 보겠다고 했으므로 다른 장소에 연락하는 (A)가 정답.', '여자는 다음에 무엇을 할 것인가?'],
    ] },
]);
