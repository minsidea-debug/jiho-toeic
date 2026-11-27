/* Part 3 · 짧은 대화 추가 묶음 04 (세트 p3-s31 ~ s40, 문제 p3-091 ~ 120) — 직접 창작. 형식은 part3_02.js 참고
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(3, 31, 91, [
  { title: '은행 · 계좌 개설', voices: { M: 'US', W: 'UK' },
    script: [
      ['M', 'Good morning. I\'d like to open a business account for my new company.'],
      ['W', 'Certainly. Do you have your business registration certificate with you?'],
      ['M', 'I have a copy on my phone. Is that OK?'],
      ['W', 'I\'m afraid we need the original document. If you bring it tomorrow, I can set up the account in about twenty minutes.'],
    ],
    ko: ['안녕하세요. 새 회사의 사업자 계좌를 열고 싶어요.', '물론이죠. 사업자 등록증을 가지고 오셨어요?', '휴대전화에 사본이 있어요. 그걸로 될까요?', '죄송하지만 원본 서류가 필요해요. 내일 가져오시면 20분 정도면 계좌를 만들어 드릴 수 있어요.'],
    qs: [
      ['What does the man want to do?', ['Open a business account', 'Apply for a loan', 'Change his address', 'Close an account'], 0, '목적', '새 회사의 사업자 계좌를 열고 싶다고 했으므로 (A)가 정답.', '남자는 무엇을 하고 싶어 하는가?'],
      ['What problem does the woman mention?', ['An original document is required.', 'The bank is closing soon.', 'The man\'s phone is not working.', 'A fee must be paid first.'], 0, '문제점', '원본 서류가 필요하다고 했으므로 (A)가 정답.', '여자는 어떤 문제를 언급하는가?'],
      ['How long will it take to set up the account?', ['About twenty minutes', 'About an hour', 'Two days', 'One week'], 0, '세부 사항', '20분 정도면 된다고 했으므로 (A)가 정답.', '계좌를 만드는 데 얼마나 걸리는가?'],
    ] },

  { title: '사무실 · 이사 준비', voices: { W: 'AU', M: 'CA' },
    script: [
      ['W', 'Paul, the movers are coming on Friday to take everything to our new office.'],
      ['M', 'Right. Should we pack our own desks, or will the moving company do it?'],
      ['W', 'They\'ll move the furniture, but we have to pack our personal items and files. Boxes will be delivered tomorrow.'],
      ['M', 'OK. And what about the computers?'],
      ['W', 'The IT team will disconnect them on Thursday evening.'],
    ],
    ko: ['폴, 금요일에 이삿짐 업체가 와서 새 사무실로 다 옮겨 갈 거예요.', '그렇죠. 우리 책상은 우리가 싸야 하나요, 아니면 이삿짐 업체가 해 주나요?', '가구는 그쪽이 옮기지만, 개인 물품과 서류는 우리가 싸야 해요. 상자는 내일 배달돼요.', '알겠어요. 컴퓨터는요?', 'IT팀이 목요일 저녁에 연결을 끊을 거예요.'],
    qs: [
      ['What will happen on Friday?', ['An office move', 'A computer upgrade', 'A staff meeting', 'A building inspection'], 0, '세부 사항', '금요일에 이삿짐 업체가 새 사무실로 옮긴다고 했으므로 (A)가 정답.', '금요일에 무슨 일이 있는가?'],
      ['What are employees asked to do?', ['Pack their own belongings', 'Move their furniture', 'Work from home', 'Order new computers'], 0, '요청', '개인 물품과 서류는 직접 싸야 한다고 했으므로 (A)가 정답.', '직원들은 무엇을 해 달라는 요청을 받는가?'],
      ['When will the computers be disconnected?', ['On Thursday evening', 'On Friday morning', 'Tomorrow morning', 'Next Monday'], 0, '세부 사항', '목요일 저녁에 연결을 끊는다고 했으므로 (A)가 정답.', '컴퓨터는 언제 연결이 끊기는가?'],
    ] },

  { title: '꽃집 · 행사용 꽃 주문', voices: { M: 'UK', W: 'US' },
    script: [
      ['M', 'Hello, this is Blossom Florists. How can I help you?'],
      ['W', 'Hi, I\'m organizing a company dinner next Thursday, and I\'d like flowers for fifteen tables.'],
      ['M', 'Sure. Do you have any color preferences?'],
      ['W', 'Our company colors are blue and white, so something in those colors would be nice.'],
      ['M', 'No problem. I\'ll e-mail you some photos of arrangements we\'ve done before so you can choose.'],
    ],
    ko: ['안녕하세요, 블로섬 꽃집입니다. 무엇을 도와드릴까요?', '안녕하세요, 다음 주 목요일 회사 만찬을 준비 중인데 테이블 15개에 놓을 꽃을 주문하고 싶어요.', '좋아요. 원하시는 색이 있나요?', '회사 색이 파랑과 흰색이라 그런 색이면 좋겠어요.', '문제없어요. 전에 만든 꽃 장식 사진을 이메일로 보내 드릴 테니 골라 보세요.'],
    qs: [
      ['What is the woman preparing for?', ['A company dinner', 'A wedding', 'A store opening', 'A birthday party'], 0, '세부 사항', '다음 주 목요일 회사 만찬을 준비 중이라고 했으므로 (A)가 정답.', '여자는 무엇을 준비하고 있는가?'],
      ['Why does the woman want blue and white flowers?', ['They are her company\'s colors.', 'They are on sale.', 'They last longer.', 'They match the room.'], 0, '이유', '회사 색이 파랑과 흰색이라고 했으므로 (A)가 정답.', '여자는 왜 파란색과 흰색 꽃을 원하는가?'],
      ['What will the man send?', ['Photos of past work', 'A price list', 'A contract', 'Some flower samples'], 0, '다음 할 일', '전에 만든 꽃 장식 사진을 보내겠다고 했으므로 (A)가 정답.', '남자는 무엇을 보낼 것인가?'],
    ] },

  { title: '회사 · 프로젝트 예산 (표)', voices: { W: 'UK', M: 'AU' },
    graphic: { title: 'Web Site Redesign – Quotes', rows: [['Company', 'Price', 'Time'], ['PixelWorks', '$9,000', '6 weeks'], ['Brightline', '$7,500', '10 weeks'], ['WebCraft', '$8,200', '7 weeks'], ['Nova Design', '$6,800', '12 weeks']] },
    script: [
      ['W', 'We\'ve received four quotes for redesigning our Web site. Which one do you think we should choose?'],
      ['M', 'Our budget is eight and a half thousand dollars, so PixelWorks is out.'],
      ['W', 'True. And we need the new site before the product launch in two months.'],
      ['M', 'Then there\'s only one company that fits both. I\'ll call them this afternoon to confirm.'],
    ],
    ko: ['웹사이트 개편 견적을 네 곳에서 받았어요. 어디를 골라야 할까요?', '예산이 8,500달러라서 픽셀웍스는 안 돼요.', '맞아요. 그리고 두 달 후 제품 출시 전에 새 사이트가 필요해요.', '그럼 둘 다 맞는 회사는 한 곳뿐이네요. 오늘 오후에 전화해서 확정할게요.'],
    qs: [
      ['What are the speakers trying to do?', ['Choose a company for a project', 'Plan a product launch', 'Hire a new designer', 'Reduce office costs'], 0, '주제', '웹사이트 개편 업체를 고르고 있으므로 (A)가 정답.', '화자들은 무엇을 하려고 하는가?'],
      ['Look at the graphic. Which company will the speakers most likely choose?', ['PixelWorks', 'Brightline', 'WebCraft', 'Nova Design'], 2, '시각 정보', '예산 8,500달러 이하이면서 두 달(약 8주) 안에 끝나는 곳은 WebCraft($8,200, 7주)뿐입니다.', '표를 보시오. 화자들은 어느 회사를 고를 것 같은가?'],
      ['What will the man do this afternoon?', ['Call a company', 'Revise the budget', 'Launch a product', 'Meet a designer'], 0, '다음 할 일', '오늘 오후에 그 회사에 전화하겠다고 했으므로 (A)가 정답.', '남자는 오늘 오후에 무엇을 할 것인가?'],
    ] },

  { title: '자동차 정비소 · 점검', voices: { M: 'CA', W: 'AU' },
    script: [
      ['M', 'Hi, I brought my car in for its regular service this morning. Is it ready?'],
      ['W', 'Almost. While we were checking it, we noticed your front tires are quite worn.'],
      ['M', 'Oh, really? How much would it cost to replace them?'],
      ['W', 'About three hundred dollars for the pair. We can do it today, but it\'ll take another hour.'],
      ['M', 'Hmm, I need the car to pick up my kids at three. Let me think about it and come back next week.'],
    ],
    ko: ['안녕하세요, 오늘 아침에 정기 점검 맡긴 차인데요. 다 됐나요?', '거의요. 점검하다 보니 앞 타이어가 꽤 닳았더라고요.', '아, 그래요? 교체하려면 얼마예요?', '두 개에 300달러 정도요. 오늘 할 수 있지만 한 시간 더 걸려요.', '음, 3시에 아이들을 데리러 가야 해서 차가 필요해요. 생각해 보고 다음 주에 다시 올게요.'],
    qs: [
      ['Why did the man bring his car in?', ['For a regular service', 'For a new paint job', 'Because of an accident', 'To sell it'], 0, '목적', '정기 점검을 맡겼다고 했으므로 (A)가 정답.', '남자는 왜 차를 맡겼는가?'],
      ['What did the woman notice?', ['Some tires are worn.', 'The brakes are noisy.', 'A light is broken.', 'The engine is leaking oil.'], 0, '세부 사항', '앞 타이어가 꽤 닳았다고 했으므로 (A)가 정답.', '여자는 무엇을 발견했는가?'],
      ['What does the man decide to do?', ['Return next week', 'Replace the tires now', 'Rent a car', 'Call his family'], 0, '다음 할 일', '생각해 보고 다음 주에 다시 오겠다고 했으므로 (A)가 정답.', '남자는 무엇을 하기로 하는가?'],
    ] },

  { title: '사내 카페테리아 · 메뉴 변경 (3명)', voices: { W: 'US', M: 'UK', M2: 'CA' },
    script: [
      ['W', 'Have you two heard that the cafeteria is changing its food supplier next month?'],
      ['M', 'Yes, I saw the notice. I hope there\'ll be more healthy options.'],
      ['M2', 'Me too. And I hope the prices don\'t go up.'],
      ['W', 'Actually, the notice said they\'d be asking employees to vote on the new menu items.'],
      ['M', 'Really? Where do we vote?'],
      ['W', 'There\'s an online survey link in the company newsletter.'],
    ],
    ko: ['두 분, 다음 달에 구내식당 식자재 업체가 바뀐다는 거 들었어요?', '네, 공지 봤어요. 건강한 메뉴가 더 많아지면 좋겠어요.', '저도요. 가격만 안 오르면 좋겠네요.', '사실 공지에 직원들에게 새 메뉴를 투표로 정하게 한다고 쓰여 있었어요.', '정말요? 어디서 투표해요?', '회사 소식지에 온라인 설문 링크가 있어요.'],
    qs: [
      ['What will change next month?', ['The cafeteria\'s food supplier', 'The cafeteria\'s hours', 'The company newsletter', 'The office location'], 0, '세부 사항', '다음 달에 구내식당 식자재 업체가 바뀐다고 했으므로 (A)가 정답.', '다음 달에 무엇이 바뀌는가?'],
      ['What concern does one of the men express?', ['Prices might increase.', 'The food might be cold.', 'The lines might be long.', 'The cafeteria might close.'], 0, '걱정', '두 번째 남자가 가격이 안 오르면 좋겠다고 했으므로 (A)가 정답.', '남자 중 한 명은 어떤 걱정을 하는가?'],
      ['How can employees vote?', ['Through an online survey', 'By talking to the chef', 'At a staff meeting', 'By sending an e-mail'], 0, '세부 사항', '소식지의 온라인 설문 링크로 투표한다고 했으므로 (A)가 정답.', '직원들은 어떻게 투표할 수 있는가?'],
    ] },

  { title: '공항 · 수하물 분실', voices: { M: 'AU', W: 'UK' },
    script: [
      ['M', 'Excuse me, my suitcase didn\'t come out on the baggage belt. I was on the flight from Madrid.'],
      ['W', 'I\'m sorry. Let me check the system. It looks like your bag was put on a later flight by mistake.'],
      ['M', 'When will it get here?'],
      ['W', 'That flight lands at eight tonight. We can deliver the bag to your hotel by eleven, free of charge.'],
      ['M', 'All right. I\'m staying at the Plaza Hotel downtown.'],
    ],
    ko: ['실례합니다, 제 여행 가방이 수하물 벨트에 안 나왔어요. 마드리드발 비행기를 탔어요.', '죄송합니다. 시스템을 확인해 볼게요. 가방이 실수로 다음 비행기에 실린 것 같아요.', '언제 여기 도착해요?', '그 비행기는 오늘 밤 8시에 착륙해요. 11시까지 호텔로 무료 배달해 드릴 수 있어요.', '알겠어요. 시내 플라자 호텔에 묵어요.'],
    qs: [
      ['What problem does the man have?', ['His luggage did not arrive.', 'His flight was canceled.', 'He lost his passport.', 'His hotel booking is missing.'], 0, '문제점', '여행 가방이 나오지 않았다고 했으므로 (A)가 정답.', '남자는 어떤 문제가 있는가?'],
      ['According to the woman, what happened?', ['A bag was sent on another flight.', 'A belt stopped working.', 'A flight was delayed.', 'A bag was damaged.'], 0, '세부 사항', '가방이 실수로 다음 비행기에 실렸다고 했으므로 (A)가 정답.', '여자에 따르면 무슨 일이 있었는가?'],
      ['What does the woman offer?', ['Free delivery to a hotel', 'A travel voucher', 'A refund', 'A new suitcase'], 0, '제안', '11시까지 호텔로 무료 배달해 주겠다고 했으므로 (A)가 정답.', '여자는 무엇을 제공하겠다고 하는가?'],
    ] },

  { title: '회사 · 교육 일정 변경', voices: { W: 'CA', M: 'US' },
    script: [
      ['W', 'Hi, Sam. I\'m calling about the safety training you\'re leading on Monday.'],
      ['M', 'Yes, is there a problem?'],
      ['W', 'Twelve of the warehouse staff will be at a supplier visit that day. Could we move the training to Wednesday?'],
      ['M', 'Wednesday is fine for me. But I\'ll need a bigger room, since everyone will be there.'],
      ['W', 'I\'ll book the main conference room for you.'],
    ],
    ko: ['안녕하세요, 샘. 월요일에 진행하시는 안전 교육 때문에 전화했어요.', '네, 무슨 문제 있어요?', '창고 직원 12명이 그날 공급업체 방문을 가요. 교육을 수요일로 옮길 수 있을까요?', '저는 수요일 괜찮아요. 그런데 다 오니까 더 큰 방이 필요할 거예요.', '대회의실을 예약해 드릴게요.'],
    qs: [
      ['What is the woman calling about?', ['A training session', 'A supplier contract', 'A warehouse delivery', 'A job opening'], 0, '주제', '월요일 안전 교육 때문에 전화했다고 했으므로 (A)가 정답.', '여자는 무엇 때문에 전화하는가?'],
      ['Why does the woman want to change the date?', ['Some employees will be away.', 'The room is unavailable.', 'The trainer is sick.', 'The warehouse is closed.'], 0, '이유', '창고 직원 12명이 공급업체 방문을 간다고 했으므로 (A)가 정답.', '여자는 왜 날짜를 바꾸고 싶어 하는가?'],
      ['What will the woman do?', ['Book a larger room', 'Call the supplier', 'Cancel the training', 'Send a schedule'], 0, '다음 할 일', '대회의실을 예약하겠다고 했으므로 더 큰 방을 예약하는 (A)가 정답.', '여자는 무엇을 할 것인가?'],
    ] },

  { title: '가전 매장 · 배송 설치', voices: { W: 'AU', M: 'UK' },
    script: [
      ['W', 'I\'d like to buy this refrigerator. Do you offer delivery?'],
      ['M', 'Yes, delivery is free for purchases over five hundred dollars, and we\'ll also take away your old refrigerator.'],
      ['W', 'That\'s great. When could you deliver it?'],
      ['M', 'Our next available slot is Thursday morning between nine and noon.'],
      ['W', 'I work in the mornings, but my neighbor has a key. I\'ll ask her to let you in.'],
    ],
    ko: ['이 냉장고를 사고 싶어요. 배달해 주나요?', '네, 500달러 이상 구매하시면 배달이 무료이고, 쓰시던 냉장고도 가져가 드려요.', '좋네요. 언제 배달해 줄 수 있어요?', '다음 가능한 시간은 목요일 오전 9시에서 12시 사이예요.', '저는 오전에 일하는데, 이웃이 열쇠를 갖고 있어요. 문 열어 달라고 부탁할게요.'],
    qs: [
      ['What does the store offer with delivery?', ['Removal of an old appliance', 'A one-year warranty', 'A discount on installation', 'A free gift'], 0, '세부 사항', '쓰던 냉장고를 가져가 준다고 했으므로 오래된 가전 수거인 (A)가 정답.', '매장은 배달과 함께 무엇을 제공하는가?'],
      ['When will the delivery take place?', ['Thursday morning', 'Thursday evening', 'Friday morning', 'This weekend'], 0, '세부 사항', '목요일 오전 9시~12시라고 했으므로 (A)가 정답.', '배달은 언제 이루어지는가?'],
      ['What will the woman ask her neighbor to do?', ['Let the delivery workers in', 'Pick up the refrigerator', 'Pay for the delivery', 'Call the store'], 0, '다음 할 일', '이웃에게 문을 열어 달라고 부탁하겠다고 했으므로 (A)가 정답.', '여자는 이웃에게 무엇을 부탁할 것인가?'],
    ] },

  { title: '회사 · 보고서 오류', voices: { M: 'US', W: 'CA' },
    script: [
      ['M', 'Laura, I was reviewing the quarterly report, and I think there\'s a mistake in the sales chart.'],
      ['W', 'Oh no. What\'s wrong with it?'],
      ['M', 'The numbers for March and April seem to be switched.'],
      ['W', 'You\'re right. I must have copied them in the wrong order. The report goes to the directors at four.'],
      ['M', 'Don\'t worry, it\'s only two o\'clock. You have time to fix it.'],
    ],
    ko: ['로라, 분기 보고서를 보다 보니 판매 차트에 실수가 있는 것 같아요.', '아이고. 뭐가 잘못됐어요?', '3월과 4월 수치가 바뀐 것 같아요.', '맞네요. 순서를 잘못 옮겨 적었나 봐요. 보고서는 4시에 이사님들께 가요.', '걱정 마요, 이제 겨우 2시예요. 고칠 시간이 있어요.'],
    qs: [
      ['What has the man found?', ['An error in a chart', 'A missing page', 'A late payment', 'A broken link'], 0, '세부 사항', '판매 차트에 실수가 있다고 했으므로 (A)가 정답.', '남자는 무엇을 발견했는가?'],
      ['Who will receive the report?', ['The directors', 'The clients', 'The sales team', 'The accountants'], 0, '세부 사항', '보고서가 4시에 이사들에게 간다고 했으므로 (A)가 정답.', '보고서는 누가 받는가?'],
      ['Why does the man say, "it\'s only two o\'clock"?', ['To reassure the woman she has time', 'To suggest a later meeting', 'To complain about a delay', 'To ask for a break'], 0, '의도 파악', '4시 마감인데 지금 2시라고 한 것은 고칠 시간이 충분하니 안심하라는 뜻입니다. (A)가 정답.', '남자가 "이제 겨우 2시예요"라고 말한 이유는?'],
    ] },
]);
