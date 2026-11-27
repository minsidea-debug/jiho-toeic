/* Part 3 · 짧은 대화 추가 묶음 02 (세트 p3-s11 ~ s20, 문제 p3-031 ~ 060) — 직접 창작
   세트: { title, voices, script: [[화자, 대사]], ko: [해석], graphic?, qs: [[문제, [보기 4], 정답, 유형, 해설, 문제 해석] ×3] }
   정답 위치는 LC.talks 가 문제 번호에 따라 고르게 섞음 (표 문제는 표 순서 유지) — data/lc_util.js
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(3, 11, 31, [
  { title: '사무실 · 회의실 예약 겹침', voices: { W: 'US', M: 'UK' },
    script: [
      ['W', 'Hi, Daniel. I booked Conference Room B for two o\'clock, but there\'s already a group in there.'],
      ['M', 'Oh, sorry. That\'s my team. Our client meeting ran longer than expected.'],
      ['W', 'I see. My candidates for the interviews are arriving in ten minutes.'],
      ['M', 'We\'ll be done in five minutes. In the meantime, you could use my office to greet them.'],
    ],
    ko: ['안녕하세요, 대니얼. 제가 B 회의실을 2시로 예약했는데 이미 사람들이 있네요.', '아, 미안해요. 우리 팀이에요. 고객 회의가 예상보다 길어졌어요.', '그렇군요. 면접 지원자들이 10분 후에 도착해요.', '5분 안에 끝낼게요. 그동안 제 사무실에서 그분들을 맞이하셔도 돼요.'],
    qs: [
      ['What problem does the woman mention?', ['A room she reserved is occupied.', 'A client canceled a meeting.', 'Some candidates are late.', 'Her office is being cleaned.'], 0, '문제점', '예약한 회의실에 이미 사람들이 있다고 했으므로 (A)가 정답.', '여자는 어떤 문제를 언급하는가?'],
      ['What is the woman going to do soon?', ['Conduct job interviews', 'Meet a client', 'Clean a room', 'Leave for lunch'], 0, '세부 사항', '면접 지원자들이 곧 도착한다고 했으므로 면접을 볼 예정입니다. (A)가 정답.', '여자는 곧 무엇을 할 것인가?'],
      ['What does the man offer?', ['The use of his office', 'A larger meeting room', 'A different time slot', 'Help with interviews'], 0, '제안', '그동안 자기 사무실을 쓰라고 했으므로 (A)가 정답.', '남자는 무엇을 제안하는가?'],
    ] },

  { title: '매장 · 주문한 신발 사이즈', voices: { M: 'CA', W: 'AU' },
    script: [
      ['M', 'Hello, I ordered a pair of running shoes from your Web site, but they\'re too small.'],
      ['W', 'I\'m sorry to hear that. Would you like to exchange them for a larger size?'],
      ['M', 'Yes, please. Can I do that at your store downtown, or do I have to mail them back?'],
      ['W', 'You can bring them to any of our stores. Just make sure to bring your order confirmation e-mail.'],
    ],
    ko: ['안녕하세요, 웹사이트에서 운동화를 주문했는데 너무 작아요.', '불편을 드려 죄송해요. 더 큰 사이즈로 교환하시겠어요?', '네, 부탁해요. 시내 매장에서 할 수 있나요, 아니면 우편으로 돌려보내야 하나요?', '어느 매장이든 가져오시면 돼요. 주문 확인 이메일만 꼭 가져오세요.'],
    qs: [
      ['What is the man\'s problem?', ['His shoes do not fit.', 'His order has not arrived.', 'He was charged twice.', 'A store is closed.'], 0, '문제점', '신발이 너무 작다고 했으므로 맞지 않는다는 (A)가 정답.', '남자의 문제는 무엇인가?'],
      ['What does the man want to know?', ['Whether he can exchange the item in a store', 'How much shipping costs', 'When a sale will end', 'Where his package is'], 0, '세부 사항', '매장에서 교환이 되는지 물었으므로 (A)가 정답.', '남자는 무엇을 알고 싶어 하는가?'],
      ['What should the man bring?', ['An order confirmation', 'A credit card', 'A photo ID', 'The original box'], 0, '요청', '주문 확인 이메일을 가져오라고 했으므로 (A)가 정답.', '남자는 무엇을 가져와야 하는가?'],
    ] },

  { title: '회사 · 출장 항공편 (표)', voices: { W: 'UK', M: 'US' },
    graphic: { title: 'Flights to Denver – Friday', rows: [['Flight', 'Departs', 'Price'], ['AZ 101', '7:00 A.M.', '$320'], ['AZ 205', '10:30 A.M.', '$280'], ['AZ 310', '1:15 P.M.', '$250'], ['AZ 418', '6:45 P.M.', '$210']] },
    script: [
      ['W', 'Kevin, I\'m booking your flight to Denver for Friday. Here are the options.'],
      ['M', 'Thanks. The trade show starts at four, so I need to arrive by about three.'],
      ['W', 'The flight takes two hours, so the cheapest one that gets you there in time is this one.'],
      ['M', 'Perfect. Could you also reserve a hotel near the convention center?'],
    ],
    ko: ['케빈, 금요일 덴버행 비행기 예약 중이에요. 여기 선택지가 있어요.', '고마워요. 박람회가 4시에 시작해서 3시쯤까지는 도착해야 해요.', '비행시간이 두 시간이니까, 제시간에 도착하는 것 중 가장 싼 건 이거예요.', '좋아요. 컨벤션 센터 근처 호텔도 예약해 줄래요?'],
    qs: [
      ['Why is the man traveling to Denver?', ['To attend a trade show', 'To meet a new client', 'To visit a factory', 'To give a training session'], 0, '목적', '박람회가 4시에 시작한다고 했으므로 박람회 참석이 목적입니다. (A)가 정답.', '남자는 왜 덴버에 가는가?'],
      ['Look at the graphic. Which flight will the man most likely take?', ['AZ 101', 'AZ 205', 'AZ 310', 'AZ 418'], 1, '시각 정보', '3시까지 도착해야 하고 비행이 2시간이므로 1시 전 출발편 중 가장 싼 10:30 AZ 205입니다. 1:15편은 3:15 도착이라 늦습니다.', '표를 보시오. 남자는 어느 비행편을 탈 것 같은가?'],
      ['What does the man ask the woman to do?', ['Book a hotel', 'Print a ticket', 'Call a taxi', 'Send a schedule'], 0, '요청', '컨벤션 센터 근처 호텔을 예약해 달라고 했으므로 (A)가 정답.', '남자는 여자에게 무엇을 해 달라고 하는가?'],
    ] },

  { title: '병원 접수 · 첫 진료', voices: { M: 'AU', W: 'US' },
    script: [
      ['M', 'Good morning. I have an appointment with Dr. Hamilton at nine. It\'s my first visit.'],
      ['W', 'Welcome. Since you\'re a new patient, I\'ll need you to fill out this health questionnaire.'],
      ['M', 'Sure. Oh, I forgot to bring my reading glasses. The print is quite small.'],
      ['W', 'No problem. I can go through the questions with you and fill it in for you.'],
    ],
    ko: ['안녕하세요. 9시에 해밀턴 선생님 진료 예약이 있어요. 처음 왔어요.', '환영합니다. 처음 오신 환자분이라 이 건강 설문지를 작성해 주셔야 해요.', '네. 아, 돋보기안경을 안 가져왔네요. 글씨가 꽤 작아요.', '괜찮아요. 제가 질문을 같이 읽고 대신 써 드릴게요.'],
    qs: [
      ['Where most likely are the speakers?', ['At a medical clinic', 'At an optician\'s shop', 'At a library', 'At a bank'], 0, '장소', '진료 예약과 건강 설문지 이야기를 하므로 병원입니다. (A)가 정답.', '화자들은 어디에 있을 것 같은가?'],
      ['What does the man say he forgot?', ['His glasses', 'His insurance card', 'His appointment time', 'His wallet'], 0, '세부 사항', '돋보기안경을 안 가져왔다고 했으므로 (A)가 정답.', '남자는 무엇을 잊었다고 하는가?'],
      ['What does the woman offer to do?', ['Help complete a form', 'Lend him a pen', 'Reschedule his visit', 'Call the doctor'], 0, '제안', '질문을 함께 읽고 대신 써 주겠다고 했으므로 서식 작성을 돕겠다는 (A)가 정답.', '여자는 무엇을 해 주겠다고 하는가?'],
    ] },

  { title: '공장 · 생산 라인 지연 (3명)', voices: { W: 'CA', M: 'UK', M2: 'US' },
    script: [
      ['W', 'Peter, Raj, we\'re behind on the order for Lindell Electronics. What happened?'],
      ['M', 'One of the packaging machines broke down yesterday afternoon.'],
      ['M2', 'The repair technician fixed it this morning, but we lost about six hours of production.'],
      ['W', 'The client needs the shipment by Thursday. Can we catch up?'],
      ['M2', 'If we add an extra shift tonight and tomorrow night, we should make it.'],
      ['W', 'All right. I\'ll approve the overtime and let the client know.'],
    ],
    ko: ['피터, 라즈, 린델 전자 주문이 늦어지고 있어요. 무슨 일이에요?', '포장 기계 하나가 어제 오후에 고장 났어요.', '수리 기사가 오늘 아침에 고쳤지만 생산 시간을 6시간 정도 잃었어요.', '고객은 목요일까지 배송품이 필요해요. 따라잡을 수 있을까요?', '오늘 밤과 내일 밤에 근무조를 하나 더 넣으면 맞출 수 있을 거예요.', '좋아요. 초과 근무를 승인하고 고객에게 알릴게요.'],
    qs: [
      ['What caused the delay?', ['A machine broke down.', 'Materials arrived late.', 'Workers were sick.', 'The order was changed.'], 0, '이유', '포장 기계가 고장 났다고 했으므로 (A)가 정답.', '무엇이 지연을 일으켰는가?'],
      ['What do the men suggest?', ['Adding extra work shifts', 'Hiring a new technician', 'Asking for a later deadline', 'Using a different supplier'], 0, '제안', '오늘 밤과 내일 밤 근무조를 추가하자고 했으므로 (A)가 정답.', '남자들은 무엇을 제안하는가?'],
      ['What will the woman do next?', ['Approve overtime', 'Repair a machine', 'Visit the client', 'Cancel an order'], 0, '다음 할 일', '초과 근무를 승인하겠다고 했으므로 (A)가 정답.', '여자는 다음에 무엇을 할 것인가?'],
    ] },

  { title: '호텔 · 객실 문제', voices: { W: 'UK', M: 'CA' },
    script: [
      ['W', 'Front desk, how can I help you?'],
      ['M', 'Hi, this is Mr. Lopez in room 814. The air conditioner in my room is making a loud noise, and I can\'t sleep.'],
      ['W', 'I\'m very sorry about that. Our maintenance staff have left for the night, but I can move you to another room right away.'],
      ['M', 'That would be great. I\'ll pack my things now.'],
      ['W', 'I\'ll send someone up with a new key and help with your luggage in a few minutes.'],
    ],
    ko: ['프런트입니다. 무엇을 도와드릴까요?', '안녕하세요, 814호 로페즈입니다. 방 에어컨에서 큰 소리가 나서 잠을 잘 수가 없어요.', '정말 죄송합니다. 시설 직원들은 퇴근했지만, 바로 다른 방으로 옮겨 드릴 수 있어요.', '그러면 좋겠어요. 지금 짐을 쌀게요.', '몇 분 안에 새 열쇠를 가지고 짐을 도와드릴 직원을 올려 보낼게요.'],
    qs: [
      ['Why is the man calling?', ['To report a noisy air conditioner', 'To order room service', 'To ask for a late checkout', 'To book a taxi'], 0, '목적', '에어컨 소음 때문에 잠을 못 잔다고 알리려고 전화했습니다. (A)가 정답.', '남자는 왜 전화하는가?'],
      ['Why can\'t the problem be fixed now?', ['Maintenance workers have gone home.', 'A part is not available.', 'The hotel is fully booked.', 'The manager is away.'], 0, '이유', '시설 직원들이 퇴근했다고 했으므로 (A)가 정답.', '왜 지금 문제를 고칠 수 없는가?'],
      ['What will happen in a few minutes?', ['Someone will bring a new key.', 'A technician will arrive.', 'The man will receive a refund.', 'The air conditioner will be replaced.'], 0, '다음 할 일', '새 열쇠를 가진 직원을 보내겠다고 했으므로 (A)가 정답.', '몇 분 후에 무슨 일이 일어날 것인가?'],
    ] },

  { title: '회사 · 신제품 광고 의견', voices: { M: 'US', W: 'AU' },
    script: [
      ['M', 'Ana, have you seen the draft of the video ad for our new coffee maker?'],
      ['W', 'I watched it this morning. It looks great, but it\'s ninety seconds long.'],
      ['M', 'Hmm. Most social media ads are under thirty seconds.'],
      ['W', 'Exactly. I think we should ask the agency to make a shorter version as well.'],
      ['M', 'Good idea. I\'ll call them after lunch.'],
    ],
    ko: ['애나, 새 커피 메이커 동영상 광고 초안 봤어요?', '오늘 아침에 봤어요. 멋져 보이는데 길이가 90초예요.', '음. 소셜 미디어 광고는 대부분 30초가 안 되죠.', '바로 그거예요. 대행사에 더 짧은 버전도 만들어 달라고 해야 할 것 같아요.', '좋은 생각이에요. 점심 후에 전화할게요.'],
    qs: [
      ['What are the speakers discussing?', ['An advertisement', 'A product design', 'A sales report', 'A new employee'], 0, '주제', '새 커피 메이커의 동영상 광고 초안을 이야기합니다. (A)가 정답.', '화자들은 무엇에 대해 이야기하는가?'],
      ['What does the man imply when he says, "Most social media ads are under thirty seconds"?', ['The video is too long.', 'The video should be posted soon.', 'Social media is too expensive.', 'He prefers television ads.'], 0, '의도 파악', '90초짜리 광고에 대해 대부분 30초 미만이라고 한 것은 너무 길다는 뜻입니다. (A)가 정답.', '남자가 "소셜 미디어 광고는 대부분 30초가 안 돼요"라고 말한 의도는?'],
      ['What will the man do after lunch?', ['Contact an agency', 'Watch a video', 'Write a script', 'Meet a client'], 0, '다음 할 일', '점심 후에 대행사에 전화하겠다고 했으므로 (A)가 정답.', '남자는 점심 후에 무엇을 할 것인가?'],
    ] },

  { title: '도서관 · 회의실 대여', voices: { W: 'CA', M: 'UK' },
    script: [
      ['W', 'Hello, I\'d like to reserve one of the library\'s study rooms for Saturday afternoon.'],
      ['M', 'Certainly. Do you have a library card?'],
      ['W', 'No, I just moved here last week.'],
      ['M', 'Study rooms are only for cardholders, but you can sign up for a card today. It\'s free for local residents. I just need to see something with your current address on it.'],
    ],
    ko: ['안녕하세요, 토요일 오후에 도서관 스터디룸 하나를 예약하고 싶어요.', '물론이죠. 도서관 카드 있으세요?', '아니요, 지난주에 막 이사 왔어요.', '스터디룸은 카드 소지자만 쓸 수 있지만, 오늘 카드를 신청하시면 돼요. 지역 주민은 무료예요. 현재 주소가 적힌 걸 보여 주시기만 하면 돼요.'],
    qs: [
      ['What does the woman want to do?', ['Reserve a study room', 'Return some books', 'Attend a lecture', 'Use a computer'], 0, '목적', '스터디룸을 예약하고 싶다고 했으므로 (A)가 정답.', '여자는 무엇을 하고 싶어 하는가?'],
      ['What does the woman say about herself?', ['She recently moved to the area.', 'She works at the library.', 'She is a student.', 'She lost her card.'], 0, '세부 사항', '지난주에 이사 왔다고 했으므로 (A)가 정답.', '여자는 자신에 대해 무엇을 말하는가?'],
      ['What does the man ask the woman to show?', ['Proof of her address', 'A credit card', 'A student ID', 'A reservation number'], 0, '요청', '현재 주소가 적힌 것을 보여 달라고 했으므로 주소 증명인 (A)가 정답.', '남자는 여자에게 무엇을 보여 달라고 하는가?'],
    ] },

  { title: '부동산 · 매장 임대 문의', voices: { M: 'CA', W: 'US' },
    script: [
      ['M', 'Hi, I\'m calling about the retail space for rent on Maple Street.'],
      ['W', 'Yes, it\'s still available. It used to be a bakery, so the kitchen equipment is already installed.'],
      ['M', 'That\'s perfect. I\'m planning to open a small café.'],
      ['W', 'Great. Would you like to see it? I\'m free tomorrow at ten.'],
      ['M', 'Tomorrow morning I have another appointment. How about two in the afternoon?'],
    ],
    ko: ['안녕하세요, 메이플가에 임대로 나온 상가 때문에 전화했어요.', '네, 아직 비어 있어요. 원래 빵집이어서 주방 설비가 이미 설치되어 있어요.', '딱 좋네요. 작은 카페를 열 계획이거든요.', '좋아요. 보러 오시겠어요? 저는 내일 10시에 시간이 돼요.', '내일 오전엔 다른 약속이 있어요. 오후 2시는 어때요?'],
    qs: [
      ['What was the space previously used as?', ['A bakery', 'A bookstore', 'A café', 'An office'], 0, '세부 사항', '원래 빵집이었다고 했으므로 (A)가 정답. 카페는 남자가 열 계획인 것이라 (C)는 함정.', '그 공간은 이전에 무엇으로 쓰였는가?'],
      ['What does the man plan to do?', ['Open a café', 'Sell kitchen equipment', 'Move his office', 'Expand his bakery'], 0, '세부 사항', '작은 카페를 열 계획이라고 했으므로 (A)가 정답.', '남자는 무엇을 할 계획인가?'],
      ['Why does the man suggest a different time?', ['He has another appointment.', 'He works in the morning.', 'The space is busy.', 'He lives far away.'], 0, '이유', '내일 오전에 다른 약속이 있다고 했으므로 (A)가 정답.', '남자는 왜 다른 시간을 제안하는가?'],
    ] },

  { title: '사내 · 컴퓨터 교체', voices: { W: 'AU', M: 'US' },
    script: [
      ['W', 'Hi, Mark. IT told me my new laptop is ready. Should I pick it up from your office?'],
      ['M', 'Actually, I can bring it to your desk. I also need to transfer your files from the old computer.'],
      ['W', 'How long will that take? I have a presentation at three.'],
      ['M', 'About an hour. If I come at eleven, you\'ll have plenty of time to prepare.'],
    ],
    ko: ['안녕하세요, 마크. IT팀에서 제 새 노트북이 준비됐다고 하던데요. 사무실에서 가져가면 돼요?', '사실 제가 책상으로 가져다 드릴 수 있어요. 예전 컴퓨터에서 파일도 옮겨야 하거든요.', '얼마나 걸려요? 3시에 발표가 있어요.', '한 시간 정도요. 11시에 가면 준비할 시간이 충분할 거예요.'],
    qs: [
      ['Who most likely is the man?', ['An IT technician', 'A sales manager', 'A delivery driver', 'A presenter'], 0, '화자 정체', '노트북을 가져다주고 파일을 옮겨 주는 사람이므로 IT 기술자입니다. (A)가 정답.', '남자는 누구일 것 같은가?'],
      ['What is the woman concerned about?', ['Having time to prepare for a presentation', 'Losing her files', 'The cost of a laptop', 'Finding the IT office'], 0, '걱정', '3시에 발표가 있다며 시간을 걱정하므로 (A)가 정답.', '여자는 무엇을 걱정하는가?'],
      ['When will the man come to the woman\'s desk?', ['At 11:00', 'At 12:00', 'At 2:00', 'At 3:00'], 0, '세부 사항', '11시에 가겠다고 했으므로 (A)가 정답. 3시는 발표 시간이라 함정.', '남자는 언제 여자의 책상에 갈 것인가?'],
    ] },
]);
