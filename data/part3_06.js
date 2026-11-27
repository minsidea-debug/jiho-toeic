/* Part 3 · 짧은 대화 추가 묶음 06 (세트 p3-s51 ~ s60, 문제 p3-151 ~ 180) — 직접 창작. 형식은 part3_02.js 참고
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(3, 51, 151, [
  { title: '카페 · 단체 주문', voices: { M: 'AU', W: 'US' },
    script: [
      ['M', 'Hi, I\'d like to place an order for a meeting tomorrow morning. Twenty coffees and some pastries.'],
      ['W', 'Sure. What time would you like to pick them up?'],
      ['M', 'Actually, could you deliver them? Our office is just across the street, in the Harbor Building.'],
      ['W', 'We can deliver orders over fifty dollars. Yours will be well over that, so no problem.'],
    ],
    ko: ['안녕하세요, 내일 아침 회의용으로 주문하려고요. 커피 20잔이랑 페이스트리 좀요.', '좋아요. 몇 시에 가지러 오실 거예요?', '사실 배달해 줄 수 있어요? 저희 사무실이 길 건너 하버 빌딩이에요.', '50달러 넘는 주문은 배달해 드려요. 손님 주문은 그보다 훨씬 많으니 괜찮아요.'],
    qs: [
      ['Why is the man ordering food?', ['For a meeting', 'For a birthday', 'For a training class', 'For a store opening'], 0, '목적', '내일 아침 회의용이라고 했으므로 (A)가 정답.', '남자는 왜 음식을 주문하는가?'],
      ['What does the man ask the woman to do?', ['Deliver an order', 'Give a discount', 'Change a menu', 'Send an invoice'], 0, '요청', '배달해 줄 수 있느냐고 했으므로 (A)가 정답.', '남자는 여자에게 무엇을 해 달라고 하는가?'],
      ['What does the woman say about deliveries?', ['There is a minimum order amount.', 'They are only on weekdays.', 'They cost ten dollars.', 'They take an hour.'], 0, '세부 사항', '50달러 넘는 주문만 배달한다고 했으므로 최소 주문 금액이 있다는 (A)가 정답.', '여자는 배달에 대해 무엇을 말하는가?'],
    ] },

  { title: '회사 · 영업 실적 발표 준비', voices: { W: 'CA', M: 'UK' },
    script: [
      ['W', 'Kenji, are you ready for your presentation to the board on Friday?'],
      ['M', 'Mostly. I\'m still waiting for the final numbers from the Asia region.'],
      ['W', 'Ms. Patel in the Singapore office handles that. I can e-mail her for you.'],
      ['M', 'That would help a lot. I\'d like to practice the whole presentation on Thursday.'],
    ],
    ko: ['켄지, 금요일 이사회 발표 준비됐어요?', '거의요. 아시아 지역 최종 수치를 아직 기다리고 있어요.', '싱가포르 사무소의 파텔 씨가 그걸 담당해요. 제가 대신 이메일 보내 줄 수 있어요.', '그러면 정말 도움이 돼요. 목요일에 발표 전체를 연습해 보고 싶어요.'],
    qs: [
      ['What is the man preparing for?', ['A presentation to the board', 'A trip to Singapore', 'A job interview', 'A training workshop'], 0, '세부 사항', '금요일 이사회 발표를 준비 중이므로 (A)가 정답.', '남자는 무엇을 준비하고 있는가?'],
      ['What is the man waiting for?', ['Some sales figures', 'A plane ticket', 'A new computer', 'A meeting room'], 0, '세부 사항', '아시아 지역 최종 수치를 기다린다고 했으므로 (A)가 정답.', '남자는 무엇을 기다리고 있는가?'],
      ['What does the woman offer to do?', ['Contact a colleague', 'Give the presentation', 'Book a flight', 'Review the slides'], 0, '제안', '파텔 씨에게 이메일을 보내 주겠다고 했으므로 (A)가 정답.', '여자는 무엇을 해 주겠다고 하는가?'],
    ] },

  { title: '박물관 · 단체 관람 예약', voices: { M: 'US', W: 'AU' },
    script: [
      ['M', 'Hello, I\'m a teacher at Westside High School. I\'d like to bring thirty students to the museum next month.'],
      ['W', 'Wonderful. School groups get free admission on weekdays. Would you like a guided tour as well?'],
      ['M', 'Yes, please. Is there a tour about local history?'],
      ['W', 'Yes, it lasts about ninety minutes. I\'ll send you a booking form to fill out.'],
    ],
    ko: ['안녕하세요, 웨스트사이드 고등학교 교사인데요. 다음 달에 학생 30명을 데리고 박물관에 가고 싶어요.', '좋아요. 학교 단체는 평일에 무료 입장이에요. 가이드 투어도 원하세요?', '네, 부탁해요. 지역 역사에 관한 투어가 있나요?', '네, 90분 정도 걸려요. 작성하실 예약 신청서를 보내 드릴게요.'],
    qs: [
      ['Who most likely is the man?', ['A teacher', 'A tour guide', 'A museum director', 'A bus driver'], 0, '화자 정체', '고등학교 교사라고 자기소개를 했으므로 (A)가 정답.', '남자는 누구일 것 같은가?'],
      ['What is offered to school groups on weekdays?', ['Free admission', 'A free lunch', 'Free parking', 'Discounted gifts'], 0, '세부 사항', '평일에 무료 입장이라고 했으므로 (A)가 정답.', '평일에 학교 단체에게 무엇이 제공되는가?'],
      ['What will the woman send?', ['A booking form', 'A museum map', 'Tickets', 'A history book'], 0, '다음 할 일', '예약 신청서를 보내겠다고 했으므로 (A)가 정답.', '여자는 무엇을 보낼 것인가?'],
    ] },

  { title: '회사 · 사무용품 주문 (표)', voices: { W: 'UK', M: 'CA' },
    graphic: { title: 'Office Supply Order', rows: [['Item', 'Quantity'], ['Printer paper', '20 boxes'], ['Ink cartridges', '12'], ['Notebooks', '50'], ['Pens', '200']] },
    script: [
      ['W', 'Mike, I\'m about to send our office supply order. Can you check it once more?'],
      ['M', 'Sure. Hmm, I think we need to change one thing. We just got a delivery of pens yesterday.'],
      ['W', 'Oh, right. Should I remove them from the order?'],
      ['M', 'Yes, take them off. And let\'s add some sticky notes instead.'],
    ],
    ko: ['마이크, 사무용품 주문을 보내려고 해요. 한 번 더 확인해 줄래요?', '그럼요. 음, 하나 바꿔야 할 것 같아요. 어제 펜이 배달됐거든요.', '아, 맞다. 주문에서 빼야 할까요?', '네, 빼 주세요. 대신 접착식 메모지를 좀 추가해요.'],
    qs: [
      ['What is the woman about to do?', ['Send an order', 'Check a delivery', 'Count inventory', 'Pay an invoice'], 0, '세부 사항', '사무용품 주문을 보내려 한다고 했으므로 (A)가 정답.', '여자는 무엇을 하려는 참인가?'],
      ['Look at the graphic. Which quantity will be removed from the order?', ['20 boxes', '12', '50', '200'], 3, '시각 정보', '어제 펜이 배달돼서 펜을 빼기로 했습니다. 표에서 펜(Pens)은 200개.', '표를 보시오. 주문에서 어떤 수량이 빠지는가?'],
      ['What will be added to the order?', ['Sticky notes', 'Folders', 'Envelopes', 'Staplers'], 0, '세부 사항', '대신 접착식 메모지를 추가하자고 했으므로 (A)가 정답.', '주문에 무엇이 추가되는가?'],
    ] },

  { title: '병원 · 처방약 수령', voices: { W: 'US', M: 'UK' },
    script: [
      ['W', 'Hi, I\'m here to pick up a prescription for Laura Kim.'],
      ['M', 'Let me check. It\'s not quite ready yet. We\'re waiting for one of the medicines to arrive from our warehouse.'],
      ['W', 'Oh, when will it be ready?'],
      ['M', 'By four this afternoon. If you\'d like, we can deliver it to your home for free.'],
      ['W', 'That would be great. I\'d rather not come back.'],
    ],
    ko: ['안녕하세요, 로라 킴 처방약을 받으러 왔어요.', '확인해 볼게요. 아직 다 준비되지 않았어요. 약 하나가 창고에서 오길 기다리고 있어요.', '아, 언제 준비돼요?', '오늘 오후 4시까지요. 원하시면 댁으로 무료 배달해 드릴 수 있어요.', '그러면 좋겠어요. 다시 오고 싶지 않거든요.'],
    qs: [
      ['Where most likely are the speakers?', ['At a pharmacy', 'At a warehouse', 'At a hospital ward', 'At a post office'], 0, '장소', '처방약을 받으러 왔으므로 약국입니다. (A)가 정답.', '화자들은 어디에 있을 것 같은가?'],
      ['Why is the order not ready?', ['A medicine has not arrived.', 'The doctor has not called.', 'The system is down.', 'The pharmacist is busy.'], 0, '이유', '약 하나가 창고에서 오길 기다린다고 했으므로 (A)가 정답.', '왜 아직 준비되지 않았는가?'],
      ['What will the woman probably do?', ['Have the order delivered', 'Wait in the store', 'Come back at four', 'Call her doctor'], 0, '다음 할 일', '무료 배달 제안에 그러면 좋겠다고 했으므로 (A)가 정답.', '여자는 무엇을 할 것 같은가?'],
    ] },

  { title: '회사 · 신규 고객 계약 (3명)', voices: { M: 'CA', W: 'US', M2: 'AU' },
    script: [
      ['M', 'I have good news. Bayside Hotels wants to sign a two-year contract with us for their laundry services.'],
      ['W', 'That\'s fantastic! That\'s our biggest client so far.'],
      ['M2', 'It is, but can we handle the extra work? They have six hotels.'],
      ['M', 'We\'ll need to buy two more washing machines and hire about five people.'],
      ['W', 'I\'ll start posting the job openings this afternoon.'],
    ],
    ko: ['좋은 소식이 있어요. 베이사이드 호텔이 세탁 서비스로 우리와 2년 계약을 하고 싶어 해요.', '대단해요! 지금까지 중 가장 큰 고객이네요.', '그렇긴 한데 늘어나는 일을 감당할 수 있을까요? 호텔이 여섯 곳이에요.', '세탁기 두 대를 더 사고 다섯 명 정도를 채용해야 해요.', '오늘 오후부터 채용 공고를 올릴게요.'],
    qs: [
      ['What type of business do the speakers work for?', ['A laundry service', 'A hotel chain', 'A furniture store', 'A cleaning supply company'], 0, '업종', '호텔이 세탁 서비스 계약을 맺으려 하므로 화자들은 세탁 업체입니다. (A)가 정답.', '화자들은 어떤 업체에서 일하는가?'],
      ['What concern does one of the men raise?', ['Whether they can handle more work', 'Whether the price is too low', 'Whether the contract is too short', 'Whether the hotels are too far'], 0, '걱정', '늘어난 일을 감당할 수 있을지 걱정했으므로 (A)가 정답.', '남자 중 한 명은 어떤 걱정을 제기하는가?'],
      ['What will the woman do this afternoon?', ['Post job advertisements', 'Buy washing machines', 'Visit a hotel', 'Sign a contract'], 0, '다음 할 일', '오후에 채용 공고를 올리겠다고 했으므로 (A)가 정답.', '여자는 오늘 오후에 무엇을 할 것인가?'],
    ] },

  { title: '대학 · 강의실 장비', voices: { W: 'AU', M: 'US' },
    script: [
      ['W', 'Excuse me, I\'m giving a guest lecture in Room 210 at one, but the microphone isn\'t working.'],
      ['M', 'Let me take a look. Ah, the batteries are dead. I\'ll get new ones from the office.'],
      ['W', 'Thank you. Also, is there a way to connect my laptop to the projector?'],
      ['M', 'Yes, there\'s a cable in the drawer under the desk. I\'ll show you when I get back.'],
    ],
    ko: ['실례합니다, 1시에 210호에서 초청 강연을 하는데 마이크가 안 돼요.', '한번 볼게요. 아, 배터리가 다 됐네요. 사무실에서 새것 가져올게요.', '고마워요. 그리고 노트북을 프로젝터에 연결할 방법이 있어요?', '네, 책상 아래 서랍에 케이블이 있어요. 돌아와서 보여 드릴게요.'],
    qs: [
      ['What is the woman going to do at one o\'clock?', ['Give a lecture', 'Attend a class', 'Repair a projector', 'Meet a student'], 0, '세부 사항', '1시에 초청 강연을 한다고 했으므로 (A)가 정답.', '여자는 1시에 무엇을 할 것인가?'],
      ['What is wrong with the microphone?', ['Its batteries are dead.', 'Its cable is missing.', 'It is too loud.', 'It is the wrong model.'], 0, '문제점', '배터리가 다 됐다고 했으므로 (A)가 정답.', '마이크에 무슨 문제가 있는가?'],
      ['Where is the cable?', ['In a desk drawer', 'In the office', 'On the projector', 'In the woman\'s bag'], 0, '세부 사항', '책상 아래 서랍에 있다고 했으므로 (A)가 정답.', '케이블은 어디에 있는가?'],
    ] },

  { title: '회사 · 회의록 담당', voices: { M: 'UK', W: 'CA' },
    script: [
      ['M', 'Who\'s taking notes at today\'s planning meeting? Julia usually does it, but she\'s out sick.'],
      ['W', 'I can do it. Should I send the notes to everyone afterward?'],
      ['M', 'Yes, please. And make sure to include the list of action items with names and deadlines.'],
      ['W', 'Got it. I\'ll have them out by the end of the day.'],
    ],
    ko: ['오늘 기획 회의에서 누가 회의록을 써요? 보통 줄리아가 하는데 아파서 결근했어요.', '제가 할게요. 끝나고 모두에게 보내면 돼요?', '네, 부탁해요. 할 일 목록에 담당자 이름과 마감일도 꼭 넣어 주세요.', '알겠어요. 오늘 퇴근 전까지 보낼게요.'],
    qs: [
      ['Why can\'t Julia take notes?', ['She is sick.', 'She is on vacation.', 'She is leading the meeting.', 'She is at another meeting.'], 0, '이유', '아파서 결근했다고 했으므로 (A)가 정답.', '줄리아는 왜 회의록을 쓸 수 없는가?'],
      ['What does the man ask the woman to include?', ['A list of tasks', 'A budget summary', 'A meeting schedule', 'Photos of the whiteboard'], 0, '요청', '할 일 목록(action items)을 넣어 달라고 했으므로 (A)가 정답.', '남자는 여자에게 무엇을 포함해 달라고 하는가?'],
      ['When will the woman send the notes?', ['By the end of the day', 'Tomorrow morning', 'Next week', 'Before the meeting'], 0, '세부 사항', '오늘 퇴근 전까지 보내겠다고 했으므로 (A)가 정답.', '여자는 언제 회의록을 보낼 것인가?'],
    ] },

  { title: '공연장 · 티켓 교환', voices: { W: 'US', M: 'AU' },
    script: [
      ['W', 'Hi, I have two tickets for tonight\'s concert, but I can\'t make it. Can I exchange them for another date?'],
      ['M', 'You can exchange them for any show this season, but there\'s a five-dollar fee per ticket.'],
      ['W', 'That\'s fine. Are there seats for next Friday?'],
      ['M', 'Let me see... yes, there are a few left in the balcony.'],
    ],
    ko: ['안녕하세요, 오늘 밤 콘서트 표가 두 장 있는데 못 가게 됐어요. 다른 날로 바꿀 수 있어요?', '이번 시즌 어느 공연으로든 바꿀 수 있지만, 표 한 장에 5달러 수수료가 있어요.', '괜찮아요. 다음 주 금요일 자리 있어요?', '볼게요… 네, 발코니석이 몇 개 남아 있어요.'],
    qs: [
      ['What does the woman want to do?', ['Exchange some tickets', 'Buy more tickets', 'Get a refund', 'Upgrade her seats'], 0, '목적', '표를 다른 날로 바꾸고 싶다고 했으므로 (A)가 정답.', '여자는 무엇을 하고 싶어 하는가?'],
      ['What does the man mention?', ['There is an exchange fee.', 'Tonight\'s show is canceled.', 'Tickets are non-refundable.', 'The season has ended.'], 0, '세부 사항', '한 장에 5달러 수수료가 있다고 했으므로 (A)가 정답.', '남자는 무엇을 언급하는가?'],
      ['Where are the available seats for next Friday?', ['In the balcony', 'In the front row', 'Near the stage', 'In a private box'], 0, '세부 사항', '발코니석이 몇 개 남았다고 했으므로 (A)가 정답.', '다음 주 금요일 남은 자리는 어디인가?'],
    ] },

  { title: '회사 · 주차 공간 변경', voices: { M: 'CA', W: 'UK' },
    script: [
      ['M', 'Did you get the e-mail about the parking lot?'],
      ['W', 'Yes. It\'s being repaved next week, so we can\'t park there for five days.'],
      ['M', 'Where are we supposed to park?'],
      ['W', 'The company rented spaces at the garage on Elm Street. It\'s a ten-minute walk, though.'],
      ['M', 'Maybe I\'ll just take the bus that week.'],
    ],
    ko: ['주차장에 관한 이메일 받았어요?', '네. 다음 주에 재포장 공사를 해서 5일 동안 주차를 못 해요.', '그럼 어디에 주차해야 해요?', '회사가 엘름가 주차 건물에 자리를 빌렸어요. 그런데 걸어서 10분 거리예요.', '그 주엔 그냥 버스를 탈까 봐요.'],
    qs: [
      ['What will happen to the parking lot?', ['It will be repaved.', 'It will be expanded.', 'It will be closed permanently.', 'It will get new lights.'], 0, '세부 사항', '재포장 공사를 한다고 했으므로 (A)가 정답.', '주차장에 무슨 일이 있을 것인가?'],
      ['Where can employees park next week?', ['At a garage on Elm Street', 'On the street', 'At a nearby mall', 'Behind the building'], 0, '세부 사항', '엘름가 주차 건물을 빌렸다고 했으므로 (A)가 정답.', '직원들은 다음 주에 어디에 주차할 수 있는가?'],
      ['What does the man say he might do?', ['Take the bus', 'Work from home', 'Walk to work', 'Rent a parking space'], 0, '다음 할 일', '그 주엔 버스를 탈까 한다고 했으므로 (A)가 정답.', '남자는 무엇을 할 수도 있다고 하는가?'],
    ] },
]);
