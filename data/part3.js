/* =========================================================
   Part 3 · 짧은 대화 (리스닝) — 직접 창작한 문제 (ETS 기출 복제 아님)
   ---------------------------------------------------------
   대화 세트 하나의 모양:
   {
     id: 'p3-s01', part: 3,
     title: '상황 (정답 후에만 보임)',
     voices: { W: 'US', M: 'UK', M2: 'AU' },   // 화자별 발음  US·UK·AU·CA
     script: [['W', '대사'], ['M', '대사'], ...], // W=여자, M=남자, W2/M2 = 세 번째 화자
     ko: ['대사 해석', ...],                      // script 와 같은 순서
     graphic: { title: '표 제목', rows: [['칸', '칸'], ...] },  // (선택) 표를 보고 푸는 문제
     questions: [ { id, q, choices: [4개], answer: 0~3, type, explain, ko(문제 해석) }, ×3 ]
   }
   ========================================================= */
(function () {
  const sets = [
    { id: 'p3-s01', title: '사무실 · 프린터 토너 주문', voices: { W: 'US', M: 'UK' },
      script: [
        ['W', 'Hi, Tom. The printer near my desk keeps showing a low toner warning. Do we have any spare cartridges?'],
        ['M', 'I checked the supply closet this morning, and we\'re completely out. I was planning to place an order this afternoon.'],
        ['W', 'Could you order a few extra this time? We\'re printing a lot of handouts for next week\'s client workshop.'],
        ['M', 'Sure. I\'ll order five instead of two. If you need to print something urgently today, the printer in the conference room still works fine.'],
      ],
      ko: [
        '안녕하세요, 톰. 제 책상 근처 프린터에 계속 토너 부족 경고가 떠요. 여분 카트리지 있나요?',
        '오늘 아침에 비품실을 확인했는데 완전히 떨어졌어요. 오늘 오후에 주문하려던 참이었어요.',
        '이번에는 몇 개 더 주문해 줄 수 있어요? 다음 주 고객 워크숍용 유인물을 많이 인쇄하거든요.',
        '그럼요. 두 개 대신 다섯 개 주문할게요. 오늘 급하게 인쇄할 게 있으면 회의실 프린터는 아직 잘 돼요.',
      ],
      questions: [
        { id: 'p3-001', q: 'What problem does the woman mention?', ko: '여자는 어떤 문제를 언급하는가?',
          choices: ['A printer is low on toner.', 'A meeting room is unavailable.', 'A delivery has been delayed.', 'A computer will not turn on.'], answer: 0, type: '문제점',
          explain: '여자가 첫 대사에서 "프린터에 토너 부족 경고가 계속 뜬다"고 말합니다. low toner warning → low on toner로 바꿔 표현했습니다.' },
        { id: 'p3-002', q: 'Why does the woman need extra supplies?', ko: '여자는 왜 추가 물품이 필요한가?',
          choices: ['A new employee is starting.', 'She is preparing materials for a workshop.', 'The office is moving next week.', 'Some supplies were damaged.'], answer: 1, type: '이유',
          explain: '"다음 주 고객 워크숍용 유인물을 많이 인쇄한다"고 했으므로 (B). handouts → materials로 바꿔 말했습니다.' },
        { id: 'p3-003', q: 'What does the man suggest the woman do today?', ko: '남자는 여자에게 오늘 무엇을 하라고 제안하는가?',
          choices: ['Contact a supplier', 'Print fewer copies', 'Use a different printer', 'Check the supply closet'], answer: 2, type: '제안',
          explain: '마지막에 "급하면 회의실 프린터는 잘 된다"고 했으므로 다른 프린터를 쓰라는 (C)가 정답입니다.' },
      ] },

    { id: 'p3-s02', title: '식당 · 단체 예약 변경', voices: { M: 'US', W: 'AU' },
      script: [
        ['M', 'Good afternoon, Rosa\'s Kitchen. How can I help you?'],
        ['W', 'Hello, I made a reservation for a party of eight this Friday at seven. I\'m calling to see if I can add two more people.'],
        ['M', 'Let me check. Hmm, our large table only seats eight, but we have a private room that holds up to fifteen. There\'s no extra charge for it on weekdays.'],
        ['W', 'That would be perfect. Also, one of our guests doesn\'t eat meat. Do you have vegetarian options?'],
        ['M', 'Yes, we do. I\'ll e-mail you our full menu so you can take a look before Friday.'],
      ],
      ko: [
        '안녕하세요, 로사스 키친입니다. 무엇을 도와드릴까요?',
        '안녕하세요, 이번 금요일 7시에 8명 예약했는데요. 두 명을 더 추가할 수 있는지 알아보려고 전화했어요.',
        '확인해 볼게요. 음, 큰 테이블은 8명까지만 앉을 수 있지만, 15명까지 들어가는 별실이 있어요. 평일에는 추가 요금이 없습니다.',
        '그거 딱 좋네요. 그리고 손님 중 한 명이 고기를 안 먹어요. 채식 메뉴가 있나요?',
        '네, 있어요. 금요일 전에 보실 수 있게 전체 메뉴를 이메일로 보내 드릴게요.',
      ],
      questions: [
        { id: 'p3-004', q: 'Why is the woman calling?', ko: '여자는 왜 전화하는가?',
          choices: ['To cancel a reservation', 'To change the number of guests', 'To ask about opening hours', 'To complain about a meal'], answer: 1, type: '목적',
          explain: '"두 명을 더 추가할 수 있는지" 물으려고 전화했으므로 인원 변경인 (B)가 정답입니다.' },
        { id: 'p3-005', q: 'What does the man offer?', ko: '남자는 무엇을 제공하겠다고 하는가?',
          choices: ['A discount on drinks', 'A free dessert', 'A private room', 'An earlier time slot'], answer: 2, type: '제안',
          explain: '큰 테이블은 8명까지라서 "15명까지 들어가는 별실"을 권했습니다. (C)가 정답입니다.' },
        { id: 'p3-006', q: 'What will the man send to the woman?', ko: '남자는 여자에게 무엇을 보낼 것인가?',
          choices: ['A menu', 'A receipt', 'A map', 'A coupon'], answer: 0, type: '다음 할 일',
          explain: '마지막에 "전체 메뉴를 이메일로 보내 주겠다"고 했습니다.' },
      ] },

    { id: 'p3-s03', title: '회사 · 신입 사원 교육 일정 (표)', voices: { W: 'CA', M: 'US' },
      graphic: { title: 'New Employee Orientation – Monday', rows: [['Time', 'Session'], ['9:00', 'Welcome & Company Overview'], ['10:30', 'Safety Training'], ['1:00', 'Computer System Setup'], ['3:00', 'Meet Your Team']] },
      script: [
        ['W', 'Mark, have you seen the schedule for Monday\'s orientation? The new sales staff are starting then.'],
        ['M', 'Yes, I have it here. But there\'s a problem. The IT technician just told me he can\'t come in until three o\'clock.'],
        ['W', 'Then we\'ll have to switch his session with the last one. The team can meet the new hires right after lunch instead.'],
        ['M', 'Good idea. I\'ll update the schedule and send it to everyone involved.'],
      ],
      ko: [
        '마크, 월요일 오리엔테이션 일정 봤어요? 새 영업 직원들이 그날 시작해요.',
        '네, 여기 있어요. 그런데 문제가 있어요. IT 기술자가 3시나 돼야 올 수 있다고 방금 말했어요.',
        '그럼 그 사람 시간을 마지막 시간이랑 바꿔야겠네요. 대신 팀이 점심 직후에 신입 사원을 만나면 되겠어요.',
        '좋은 생각이에요. 일정을 고쳐서 관련된 모든 사람에게 보낼게요.',
      ],
      questions: [
        { id: 'p3-007', q: 'Who is starting work on Monday?', ko: '월요일에 누가 일을 시작하는가?',
          choices: ['IT technicians', 'Sales staff', 'Safety inspectors', 'Team managers'], answer: 1, type: '세부 사항',
          explain: '여자가 "새 영업 직원들이 그날 시작한다"고 말합니다.' },
        { id: 'p3-008', q: 'Look at the graphic. What time will the computer system setup now begin?', ko: '표를 보시오. 컴퓨터 시스템 설치 시간은 이제 몇 시에 시작하는가?',
          choices: ['9:00', '10:30', '1:00', '3:00'], answer: 3, type: '시각 정보',
          explain: 'IT 기술자가 늦게 와서 그의 시간(1:00, 컴퓨터 시스템 설치)을 "마지막 시간"과 바꾸기로 했습니다. 표의 마지막 시간은 3:00이므로 (D).' },
        { id: 'p3-009', q: 'What will the man do next?', ko: '남자는 다음에 무엇을 할 것인가?',
          choices: ['Call the technician', 'Book a training room', 'Revise a schedule', 'Order lunch'], answer: 2, type: '다음 할 일',
          explain: '"일정을 고쳐서 보내겠다(update the schedule)"고 했으므로 (C). update → revise로 바꿔 표현했습니다.' },
      ] },

    { id: 'p3-s04', title: '매장 · 노트북 수리 (3명 대화)', voices: { M: 'UK', W: 'US', M2: 'AU' },
      script: [
        ['M', 'Hello, I dropped off my laptop for repair last Tuesday. I was told it would be ready today.'],
        ['W', 'Let me look it up. Ah, it seems we\'re still waiting for a replacement screen. Kevin, do you know when the part is arriving?'],
        ['M2', 'The supplier said it should arrive tomorrow morning. Once it\'s here, the repair only takes about an hour.'],
        ['M', 'I see. I need the laptop for a business trip on Thursday. Will it definitely be ready by then?'],
        ['M2', 'It will. And because of the delay, we\'ll give you twenty percent off the repair cost.'],
        ['W', 'I\'ll send you a text message as soon as it\'s ready for pickup.'],
      ],
      ko: [
        '안녕하세요, 지난 화요일에 노트북 수리를 맡겼는데요. 오늘 된다고 들었어요.',
        '찾아볼게요. 아, 아직 교체용 화면을 기다리고 있는 것 같네요. 케빈, 부품이 언제 도착하는지 알아요?',
        '공급업체 말로는 내일 아침에 도착할 거래요. 도착하면 수리는 한 시간 정도면 끝나요.',
        '그렇군요. 목요일 출장 때 노트북이 필요해요. 그때까지 확실히 될까요?',
        '될 거예요. 그리고 지연된 대신 수리비를 20퍼센트 할인해 드릴게요.',
        '찾아가실 준비가 되면 바로 문자 메시지를 보내 드릴게요.',
      ],
      questions: [
        { id: 'p3-010', q: 'Why is the laptop not ready?', ko: '노트북은 왜 아직 준비되지 않았는가?',
          choices: ['A technician is on vacation.', 'A part has not arrived.', 'The customer gave the wrong address.', 'The store was closed.'], answer: 1, type: '이유',
          explain: '"교체용 화면(부품)을 아직 기다리고 있다"고 했으므로 (B)가 정답입니다.' },
        { id: 'p3-011', q: 'What does Kevin offer the man?', ko: '케빈은 남자에게 무엇을 제안하는가?',
          choices: ['A free laptop bag', 'A discount', 'A loaner computer', 'Express delivery'], answer: 1, type: '제안',
          explain: '케빈(두 번째 남자)이 "수리비 20퍼센트 할인"을 해 주겠다고 했습니다.' },
        { id: 'p3-012', q: 'How will the man be notified?', ko: '남자는 어떻게 연락을 받게 되는가?',
          choices: ['By e-mail', 'By phone call', 'By text message', 'By mail'], answer: 2, type: '세부 사항',
          explain: '여자가 마지막에 "문자 메시지를 보내 주겠다"고 했습니다.' },
      ] },

    { id: 'p3-s05', title: '공항 · 항공편 결항', voices: { W: 'UK', M: 'CA' },
      script: [
        ['W', 'Excuse me, my flight to Chicago was just canceled because of the snowstorm. What are my options?'],
        ['M', 'I\'m sorry about that. The next available flight leaves tomorrow at 8 A.M. I can rebook you on it at no cost.'],
        ['W', 'Tomorrow? I have an important meeting there at noon. I guess that still works if the flight is on time.'],
        ['M', 'It should be. Since you have to stay overnight, here\'s a voucher for the airport hotel. The shuttle stops right outside door four.'],
      ],
      ko: [
        '실례합니다, 시카고행 비행기가 눈보라 때문에 방금 결항됐어요. 어떻게 해야 하죠?',
        '죄송합니다. 다음 이용 가능한 비행기는 내일 오전 8시에 출발해요. 무료로 그 편으로 다시 예약해 드릴 수 있어요.',
        '내일이요? 거기서 정오에 중요한 회의가 있어요. 비행기가 제시간에 뜨면 그래도 괜찮겠네요.',
        '그럴 거예요. 하룻밤 묵으셔야 하니, 여기 공항 호텔 숙박권이요. 셔틀은 4번 출입문 바로 밖에 서요.',
      ],
      questions: [
        { id: 'p3-013', q: 'Why was the flight canceled?', ko: '비행편은 왜 결항되었는가?',
          choices: ['Bad weather', 'A mechanical problem', 'A staff shortage', 'Low ticket sales'], answer: 0, type: '이유',
          explain: '"눈보라(snowstorm) 때문에" 결항됐으므로 (A) 나쁜 날씨가 정답입니다.' },
        { id: 'p3-014', q: 'What is the woman concerned about?', ko: '여자는 무엇을 걱정하는가?',
          choices: ['Paying an extra fee', 'Arriving in time for a meeting', 'Losing her luggage', 'Finding a taxi'], answer: 1, type: '걱정',
          explain: '"정오에 중요한 회의가 있다"며 내일 비행기로 시간에 맞출 수 있을지 걱정합니다.' },
        { id: 'p3-015', q: 'What does the man give the woman?', ko: '남자는 여자에게 무엇을 주는가?',
          choices: ['A meal coupon', 'A hotel voucher', 'A boarding pass', 'A refund'], answer: 1, type: '세부 사항',
          explain: '"공항 호텔 숙박권(voucher)"을 줍니다.' },
      ] },

    { id: 'p3-s06', title: '부동산 · 사무실 임대', voices: { M: 'US', W: 'UK' },
      script: [
        ['M', 'Thanks for showing me the office space, Ms. Clarke. It\'s bright, and I like the view of the river.'],
        ['W', 'It\'s one of our most popular buildings. The rent includes electricity and Internet, and there\'s a parking garage underneath.'],
        ['M', 'That\'s convenient. My only concern is the size. We\'re hiring six more people next year.'],
        ['W', 'The office next door will become available in March. You could rent both and remove the wall between them.'],
        ['M', 'Interesting. Could you send me the floor plans for both units? I\'d like to discuss it with my business partner.'],
      ],
      ko: [
        '사무실 공간을 보여 주셔서 고마워요, 클라크 씨. 밝고 강이 보이는 전망이 좋네요.',
        '저희 건물 중 가장 인기 있는 곳 중 하나예요. 임대료에 전기와 인터넷이 포함되고, 지하에 주차장도 있어요.',
        '편리하네요. 제 유일한 걱정은 크기예요. 내년에 여섯 명을 더 채용하거든요.',
        '옆 사무실이 3월에 비어요. 두 곳을 다 빌려서 사이의 벽을 없애셔도 돼요.',
        '흥미롭네요. 두 곳의 평면도를 보내 주시겠어요? 사업 파트너와 의논해 보고 싶어요.',
      ],
      questions: [
        { id: 'p3-016', q: 'Who most likely is the woman?', ko: '여자는 누구일 가능성이 가장 높은가?',
          choices: ['A real estate agent', 'An architect', 'A bank teller', 'A job applicant'], answer: 0, type: '화자 정체',
          explain: '사무실을 보여 주고 임대료·조건을 설명하므로 부동산 중개인(A)입니다.' },
        { id: 'p3-017', q: 'What is the man concerned about?', ko: '남자는 무엇을 걱정하는가?',
          choices: ['The price', 'The location', 'The size of the space', 'The parking fee'], answer: 2, type: '걱정',
          explain: '"유일한 걱정은 크기"라고 했습니다. 내년에 직원을 더 뽑기 때문입니다.' },
        { id: 'p3-018', q: 'What does the man ask for?', ko: '남자는 무엇을 요청하는가?',
          choices: ['A lower rent', 'Floor plans', 'A second tour', 'A parking pass'], answer: 1, type: '요청',
          explain: '"두 곳의 평면도(floor plans)를 보내 달라"고 했습니다.' },
      ] },

    { id: 'p3-s07', title: '병원 · 진료 예약', voices: { W: 'AU', M: 'US' },
      script: [
        ['W', 'Riverside Dental Clinic, this is Emma speaking.'],
        ['M', 'Hi, this is David Park. I have a cleaning appointment on Wednesday at ten, but something came up at work. Is there any time on Thursday?'],
        ['W', 'Thursday is fully booked, I\'m afraid. We do have an opening on Friday at four thirty, though.'],
        ['M', 'Hmm, I usually finish work at five. Well, I\'ll just leave a little early. Please put me down for that.'],
        ['W', 'Done. Remember to bring your new insurance card. Our records show your old one expired last month.'],
      ],
      ko: [
        '리버사이드 치과입니다, 엠마입니다.',
        '안녕하세요, 데이비드 박입니다. 수요일 10시에 스케일링 예약이 있는데 회사에 일이 생겼어요. 목요일에 시간 있나요?',
        '죄송하지만 목요일은 예약이 꽉 찼어요. 대신 금요일 4시 30분에 자리가 있어요.',
        '음, 저는 보통 5시에 퇴근해요. 뭐, 조금 일찍 나오면 되죠. 그 시간으로 넣어 주세요.',
        '됐습니다. 새 보험증을 꼭 가져오세요. 기록상 예전 것은 지난달에 만료됐어요.',
      ],
      questions: [
        { id: 'p3-019', q: 'Why is the man calling?', ko: '남자는 왜 전화하는가?',
          choices: ['To reschedule an appointment', 'To ask about a bill', 'To get directions', 'To cancel his insurance'], answer: 0, type: '목적',
          explain: '수요일 예약을 다른 날로 바꾸려고 전화했습니다. 일정 변경 = reschedule.' },
        { id: 'p3-020', q: 'What does the man mean when he says, "I usually finish work at five"?', ko: '남자가 "저는 보통 5시에 퇴근해요"라고 말한 의도는?',
          choices: ['He wants a later appointment.', 'The suggested time is a little difficult.', 'He works part-time.', 'He cannot come on Friday.'], answer: 1, type: '의도 파악',
          explain: '4시 30분 제안에 "보통 5시에 퇴근한다"고 한 것은 그 시간이 조금 곤란하다는 뜻입니다. 바로 뒤에 "조금 일찍 나오면 된다"며 받아들입니다.' },
        { id: 'p3-021', q: 'What does the woman remind the man to bring?', ko: '여자는 남자에게 무엇을 가져오라고 상기시키는가?',
          choices: ['A payment receipt', 'A medical form', 'An insurance card', 'A photo ID'], answer: 2, type: '세부 사항',
          explain: '"새 보험증(insurance card)을 꼭 가져오라"고 했습니다.' },
      ] },

    { id: 'p3-s08', title: '회사 · 판매 실적 (그래프)', voices: { M: 'CA', W: 'US' },
      graphic: { title: 'Monthly Sales – Smart Watches (units)', rows: [['Month', 'Units sold'], ['January', '1,200'], ['February', '950'], ['March', '1,600'], ['April', '1,350']] },
      script: [
        ['M', 'Lisa, I\'m preparing the slides for tomorrow\'s sales meeting. Do you know why our smart watch sales dropped so much in one month?'],
        ['W', 'That was the month our main competitor released a cheaper model. But sales went back up right after we launched our online advertising campaign.'],
        ['M', 'That\'s a good point to include. Do you think the managers will want to continue the campaign?'],
        ['W', 'Probably. I\'ll pull together the advertising costs so you can show them in the meeting.'],
      ],
      ko: [
        '리사, 내일 영업 회의 슬라이드를 준비 중이에요. 스마트워치 판매가 한 달 동안 왜 그렇게 많이 떨어졌는지 알아요?',
        '그달에 주요 경쟁사가 더 싼 모델을 출시했어요. 하지만 우리가 온라인 광고 캠페인을 시작한 바로 뒤에 판매가 다시 올랐어요.',
        '넣으면 좋은 내용이네요. 관리자들이 캠페인을 계속하고 싶어 할까요?',
        '아마도요. 회의에서 보여 줄 수 있게 광고 비용을 정리해 드릴게요.',
      ],
      questions: [
        { id: 'p3-022', q: 'What is the man preparing?', ko: '남자는 무엇을 준비하고 있는가?',
          choices: ['A product launch', 'A presentation for a meeting', 'A job interview', 'A customer survey'], answer: 1, type: '세부 사항',
          explain: '"내일 영업 회의 슬라이드를 준비 중"이라고 했으므로 회의 발표 자료인 (B).' },
        { id: 'p3-023', q: 'Look at the graphic. In which month did a competitor release a new product?', ko: '그래프를 보시오. 경쟁사는 몇 월에 새 제품을 출시했는가?',
          choices: ['January', 'February', 'March', 'April'], answer: 1, type: '시각 정보',
          explain: '판매가 크게 떨어진 달에 경쟁사가 싼 모델을 냈다고 했습니다. 표에서 판매가 떨어진 달은 2월(950)입니다.' },
        { id: 'p3-024', q: 'What will the woman do?', ko: '여자는 무엇을 할 것인가?',
          choices: ['Contact a competitor', 'Lower a price', 'Gather cost information', 'Cancel a campaign'], answer: 2, type: '다음 할 일',
          explain: '"광고 비용을 정리하겠다(pull together the advertising costs)"고 했으므로 (C).' },
      ] },

    { id: 'p3-s09', title: '호텔 · 체크인 (3명 대화)', voices: { W: 'UK', M: 'US', W2: 'CA' },
      script: [
        ['W', 'Welcome to the Harbor Hotel. Are you checking in?'],
        ['M', 'Yes, under the name Ortiz. My colleague and I are here for the technology conference.'],
        ['W2', 'We booked two rooms with ocean views. Could you also tell us how to get to the convention center?'],
        ['W', 'Of course. Your rooms are on the twelfth floor. A free shuttle to the convention center leaves from the lobby every thirty minutes.'],
        ['M', 'Great. Is breakfast included?'],
        ['W', 'It is. It\'s served in the restaurant on the second floor from six thirty to ten.'],
      ],
      ko: [
        '하버 호텔에 오신 것을 환영합니다. 체크인하시나요?',
        '네, 오티스라는 이름으로요. 동료와 저는 기술 컨퍼런스 때문에 왔어요.',
        '바다 전망 방 두 개를 예약했어요. 컨벤션 센터 가는 방법도 알려 주시겠어요?',
        '물론이죠. 방은 12층에 있어요. 컨벤션 센터행 무료 셔틀이 로비에서 30분마다 출발해요.',
        '좋네요. 아침 식사가 포함인가요?',
        '네. 2층 식당에서 6시 30분부터 10시까지 제공돼요.',
      ],
      questions: [
        { id: 'p3-025', q: 'Why are the speakers in the city?', ko: '화자들은 왜 이 도시에 왔는가?',
          choices: ['To go on vacation', 'To attend a conference', 'To visit a client', 'To look for an apartment'], answer: 1, type: '목적',
          explain: '"기술 컨퍼런스 때문에 왔다"고 했습니다.' },
        { id: 'p3-026', q: 'According to the hotel clerk, what leaves every thirty minutes?', ko: '호텔 직원에 따르면, 30분마다 무엇이 출발하는가?',
          choices: ['A ferry', 'A tour bus', 'A shuttle', 'A train'], answer: 2, type: '세부 사항',
          explain: '"컨벤션 센터행 무료 셔틀이 30분마다 출발한다"고 했습니다.' },
        { id: 'p3-027', q: 'Where is breakfast served?', ko: '아침 식사는 어디에서 제공되는가?',
          choices: ['In the lobby', 'In the guest rooms', 'On the twelfth floor', 'On the second floor'], answer: 3, type: '세부 사항',
          explain: '"2층 식당"에서 제공된다고 했습니다. 12층은 객실 층이라 함정입니다.' },
      ] },

    { id: 'p3-s10', title: '회사 · 사내 행사 준비', voices: { M: 'AU', W: 'CA' },
      script: [
        ['M', 'Hi, Grace. Have you decided where to hold the company picnic this year?'],
        ['W', 'I was thinking of Lakeview Park again, but I heard part of it is closed for construction until August.'],
        ['M', 'That\'s a shame. What about the community garden on Pine Street? My department had a lunch there last spring, and it has plenty of tables.'],
        ['W', 'Good suggestion. I\'ll call them this afternoon to check if it\'s available on June twentieth. Could you ask your team how many people are coming?'],
        ['M', 'Sure, I\'ll send out a quick survey today.'],
      ],
      ko: [
        '안녕하세요, 그레이스. 올해 회사 야유회 장소 정했어요?',
        '또 레이크뷰 공원으로 할까 했는데, 공사 때문에 8월까지 일부가 닫혀 있다고 들었어요.',
        '아쉽네요. 파인가에 있는 지역 공동 정원은 어때요? 우리 부서가 지난봄에 거기서 점심을 먹었는데, 테이블이 많아요.',
        '좋은 제안이에요. 6월 20일에 이용 가능한지 오늘 오후에 전화해 볼게요. 팀에 몇 명이 오는지 물어봐 줄래요?',
        '그럼요, 오늘 간단한 설문을 보낼게요.',
      ],
      questions: [
        { id: 'p3-028', q: 'What are the speakers mainly discussing?', ko: '화자들은 주로 무엇에 대해 이야기하는가?',
          choices: ['A construction project', 'A location for a company event', 'A new garden design', 'A department budget'], answer: 1, type: '주제',
          explain: '회사 야유회를 어디서 할지 이야기하고 있으므로 (B)가 정답입니다.' },
        { id: 'p3-029', q: 'What problem does the woman mention about Lakeview Park?', ko: '여자는 레이크뷰 공원에 대해 어떤 문제를 언급하는가?',
          choices: ['It is too far away.', 'It is too expensive.', 'Part of it is closed.', 'It has no tables.'], answer: 2, type: '문제점',
          explain: '"공사 때문에 일부가 닫혀 있다"고 했습니다. 테이블이 많다는 말은 다른 장소(공동 정원)에 대한 것이라 (D)는 함정입니다.' },
        { id: 'p3-030', q: 'What does the man say he will do today?', ko: '남자는 오늘 무엇을 하겠다고 하는가?',
          choices: ['Call the garden', 'Send a survey', 'Visit the park', 'Book a caterer'], answer: 1, type: '다음 할 일',
          explain: '남자는 "오늘 간단한 설문을 보내겠다"고 했습니다. 정원에 전화하는 것은 여자가 할 일이라 (A)는 함정입니다.' },
      ] },
  ];
  window.TOEIC_SETS = window.TOEIC_SETS || [];
  sets.forEach(s => window.TOEIC_SETS.push(Object.assign({ part: 3 }, s)));
})();
