/* Part 3 · 짧은 대화 추가 묶음 08 (세트 p3-s71 ~ s80, 문제 p3-211 ~ 240) — 직접 창작. 형식은 part3_02.js 참고
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(3, 71, 211, [
  { title: '사무실 · 난방 문제', voices: { M: 'UK', W: 'US' },
    script: [
      ['M', 'Is it just me, or is it really cold in here today?'],
      ['W', 'It\'s not just you. The heating system on this floor stopped working this morning.'],
      ['M', 'Has anyone called the building manager?'],
      ['W', 'Yes, a technician is coming at noon. Until then, there are some space heaters in the storage room.'],
      ['M', 'I\'ll go and get a couple for our area.'],
    ],
    ko: ['저만 그런가요, 아니면 오늘 여기 정말 추운 거예요?', '당신만 그런 거 아니에요. 오늘 아침에 이 층 난방 장치가 멈췄어요.', '누가 건물 관리인에게 연락했어요?', '네, 정오에 기술자가 와요. 그때까지 창고에 전기 난로가 몇 개 있어요.', '우리 구역에 쓸 걸 두 개 가져올게요.'],
    qs: [
      ['What problem are the speakers discussing?', ['The heating is not working.', 'The lights are off.', 'The elevator is broken.', 'The windows are open.'], 0, '문제점', '이 층 난방 장치가 멈췄다고 했으므로 (A)가 정답.', '화자들은 어떤 문제를 이야기하는가?'],
      ['When will a technician arrive?', ['At noon', 'This evening', 'Tomorrow morning', 'In ten minutes'], 0, '세부 사항', '정오에 기술자가 온다고 했으므로 (A)가 정답.', '기술자는 언제 도착하는가?'],
      ['What will the man do next?', ['Get some heaters', 'Call the building manager', 'Go home early', 'Close the windows'], 0, '다음 할 일', '전기 난로를 가져오겠다고 했으므로 (A)가 정답.', '남자는 다음에 무엇을 할 것인가?'],
    ] },

  { title: '채용 · 면접 일정', voices: { W: 'CA', M: 'AU' },
    script: [
      ['W', 'Hello, Mr. Novak? This is Diana from Larson Engineering. We\'d like to invite you for an interview.'],
      ['M', 'That\'s great news. When would it be?'],
      ['W', 'We\'re available next Tuesday or Wednesday afternoon.'],
      ['M', 'Wednesday would be better for me.'],
      ['W', 'Perfect. I\'ll e-mail you the details, including directions to our office.'],
    ],
    ko: ['안녕하세요, 노박 씨죠? 라슨 엔지니어링의 다이애나예요. 면접에 모시고 싶어요.', '좋은 소식이네요. 언제인가요?', '다음 주 화요일이나 수요일 오후가 가능해요.', '저는 수요일이 더 좋아요.', '좋아요. 사무실 오시는 길을 포함해서 자세한 내용을 이메일로 보낼게요.'],
    qs: [
      ['Why is the woman calling?', ['To invite the man to an interview', 'To offer the man a job', 'To cancel a meeting', 'To ask for a reference'], 0, '목적', '면접에 초대하려고 전화했으므로 (A)가 정답.', '여자는 왜 전화하는가?'],
      ['When will the interview most likely take place?', ['On Wednesday afternoon', 'On Tuesday afternoon', 'On Wednesday morning', 'On Monday'], 0, '세부 사항', '남자가 수요일이 낫다고 했고 일정은 오후이므로 (A)가 정답.', '면접은 언제 있을 것 같은가?'],
      ['What will the woman send?', ['Interview details', 'A contract', 'A job description', 'A company brochure'], 0, '다음 할 일', '오시는 길을 포함한 자세한 내용을 보내겠다고 했으므로 (A)가 정답.', '여자는 무엇을 보낼 것인가?'],
    ] },

  { title: '식료품점 · 상품 위치', voices: { W: 'UK', M: 'CA' },
    script: [
      ['W', 'Excuse me, I can\'t find the gluten-free bread. Do you still sell it?'],
      ['M', 'Yes, we moved it last week. It\'s now in the health food section, aisle nine.'],
      ['W', 'Thanks. And do you have any of the organic orange juice? The shelf was empty.'],
      ['M', 'We\'re getting a delivery this afternoon. I can put a bottle aside for you if you\'d like.'],
    ],
    ko: ['실례합니다, 글루텐 프리 빵을 못 찾겠어요. 아직 파나요?', '네, 지난주에 위치를 옮겼어요. 지금은 9번 통로 건강식품 코너에 있어요.', '고마워요. 유기농 오렌지 주스도 있어요? 선반이 비어 있던데요.', '오늘 오후에 물건이 들어와요. 원하시면 한 병 따로 챙겨 둘게요.'],
    qs: [
      ['Where most likely are the speakers?', ['At a grocery store', 'At a bakery', 'At a restaurant', 'At a pharmacy'], 0, '장소', '빵과 주스가 진열된 통로 이야기이므로 식료품점입니다. (A)가 정답.', '화자들은 어디에 있을 것 같은가?'],
      ['What does the man say about the bread?', ['It was moved to another aisle.', 'It is sold out.', 'It is on sale.', 'It is no longer sold.'], 0, '세부 사항', '지난주에 9번 통로로 옮겼다고 했으므로 (A)가 정답.', '남자는 빵에 대해 무엇을 말하는가?'],
      ['What does the man offer to do?', ['Save a product for the woman', 'Give her a discount', 'Order more bread', 'Call another store'], 0, '제안', '주스를 한 병 따로 챙겨 두겠다고 했으므로 (A)가 정답.', '남자는 무엇을 해 주겠다고 하는가?'],
    ] },

  { title: '회사 · 웹사이트 방문자 (그래프)', voices: { M: 'US', W: 'AU' },
    graphic: { title: 'Web Site Visitors (thousands)', rows: [['Month', 'Visitors'], ['June', '42'], ['July', '38'], ['August', '65'], ['September', '51']] },
    script: [
      ['M', 'Look at our Web site traffic. There was a huge jump in one month.'],
      ['W', 'That\'s when the travel blogger wrote about our hiking gear.'],
      ['M', 'Right. It shows how much influence those bloggers have.'],
      ['W', 'Maybe we should contact a few more bloggers and send them free samples.'],
    ],
    ko: ['웹사이트 방문자 좀 보세요. 한 달에 엄청 뛰었어요.', '여행 블로거가 우리 등산 장비에 대해 글을 쓴 때예요.', '맞아요. 그런 블로거들 영향력이 얼마나 큰지 보여 주네요.', '블로거 몇 명에게 더 연락해서 무료 샘플을 보내 보는 게 좋겠어요.'],
    qs: [
      ['What does the speakers\' company most likely sell?', ['Outdoor equipment', 'Travel insurance', 'Computers', 'Books'], 0, '업종', '등산 장비(hiking gear)를 판다고 했으므로 (A)가 정답.', '화자들의 회사는 무엇을 팔 것 같은가?'],
      ['Look at the graphic. When did the blogger write about the company?', ['June', 'July', 'August', 'September'], 2, '시각 정보', '방문자가 크게 뛴 달에 블로거가 글을 썼다고 했습니다. 표에서 크게 뛴 달은 8월(65).', '표를 보시오. 블로거는 언제 회사에 대해 글을 썼는가?'],
      ['What does the woman suggest?', ['Sending samples to bloggers', 'Lowering prices', 'Redesigning the Web site', 'Hiring a travel writer'], 0, '제안', '블로거들에게 무료 샘플을 보내자고 했으므로 (A)가 정답.', '여자는 무엇을 제안하는가?'],
    ] },

  { title: '렌터카 · 업그레이드', voices: { M: 'AU', W: 'US' },
    script: [
      ['M', 'Hi, I reserved a small car for the week. The name is Bennett.'],
      ['W', 'Yes, Mr. Bennett. Unfortunately, all our small cars are out right now. We\'ll give you a larger one for the same price.'],
      ['M', 'Oh, that\'s fine. Will it use more gas, though?'],
      ['W', 'A little, but it\'s a hybrid, so it\'s still quite efficient.'],
    ],
    ko: ['안녕하세요, 일주일 동안 소형차를 예약했어요. 이름은 베넷이에요.', '네, 베넷 씨. 안타깝게도 지금 소형차가 다 나갔어요. 같은 가격에 더 큰 차를 드릴게요.', '아, 괜찮아요. 그런데 기름이 더 들까요?', '조금요. 하지만 하이브리드라 여전히 연비가 꽤 좋아요.'],
    qs: [
      ['What problem does the woman mention?', ['No small cars are available.', 'The reservation was lost.', 'The price has gone up.', 'The office is closing.'], 0, '문제점', '소형차가 다 나갔다고 했으므로 (A)가 정답.', '여자는 어떤 문제를 언급하는가?'],
      ['What does the woman offer?', ['A larger car at no extra cost', 'A discount coupon', 'A free GPS', 'A different pickup time'], 0, '제안', '같은 가격에 더 큰 차를 준다고 했으므로 (A)가 정답.', '여자는 무엇을 제공하는가?'],
      ['What is the man concerned about?', ['Fuel use', 'Parking space', 'Insurance', 'Safety'], 0, '걱정', '기름이 더 드는지 물었으므로 연료 사용인 (A)가 정답.', '남자는 무엇을 걱정하는가?'],
    ] },

  { title: '회사 · 출장 경비 처리 (3명)', voices: { W: 'US', M: 'CA', M2: 'UK' },
    script: [
      ['W', 'Hi, Ken and Leo. Did you both submit your expense reports from the Boston trip?'],
      ['M', 'I did mine yesterday.'],
      ['M2', 'I haven\'t yet. I lost the receipt for one of my taxi rides.'],
      ['W', 'That\'s OK. Just fill out a missing receipt form. It\'s on the finance team\'s page.'],
      ['M2', 'Great, I\'ll do that this afternoon.'],
    ],
    ko: ['안녕하세요, 켄, 레오. 보스턴 출장 경비 보고서 둘 다 제출했어요?', '저는 어제 했어요.', '저는 아직이요. 택시 영수증 하나를 잃어버렸어요.', '괜찮아요. 영수증 분실 양식만 작성하면 돼요. 재무팀 페이지에 있어요.', '좋아요, 오늘 오후에 할게요.'],
    qs: [
      ['What are the speakers discussing?', ['Expense reports', 'A sales meeting', 'Travel plans', 'A taxi company'], 0, '주제', '출장 경비 보고서 제출 이야기이므로 (A)가 정답.', '화자들은 무엇에 대해 이야기하는가?'],
      ['What problem does one of the men have?', ['He lost a receipt.', 'He missed a flight.', 'He forgot a password.', 'He was overcharged.'], 0, '문제점', '택시 영수증 하나를 잃어버렸다고 했으므로 (A)가 정답.', '남자 중 한 명은 어떤 문제가 있는가?'],
      ['What does the woman tell the man to do?', ['Fill out a form', 'Call the taxi company', 'Pay for the taxi himself', 'Talk to his manager'], 0, '요청', '영수증 분실 양식을 작성하라고 했으므로 (A)가 정답.', '여자는 남자에게 무엇을 하라고 하는가?'],
    ] },

  { title: '도서관 · 연체 도서', voices: { M: 'CA', W: 'UK' },
    script: [
      ['M', 'Hi, I got an e-mail saying I have an overdue book. I thought I returned it last week.'],
      ['W', 'Let me check. The record shows it hasn\'t been returned. Did you use the outside drop box?'],
      ['M', 'Yes, on Sunday evening.'],
      ['W', 'The box was being repaired on Sunday, so some books were put in the wrong place. I\'ll look for it in the back room.'],
    ],
    ko: ['안녕하세요, 연체된 책이 있다는 이메일을 받았는데요. 지난주에 반납한 줄 알았어요.', '확인해 볼게요. 기록상 반납이 안 됐어요. 바깥 반납함을 이용하셨어요?', '네, 일요일 저녁에요.', '일요일에 반납함을 수리하고 있어서 책 몇 권이 엉뚱한 곳에 놓였어요. 뒤쪽 방에서 찾아볼게요.'],
    qs: [
      ['Why did the man receive an e-mail?', ['A book is listed as overdue.', 'A book he wanted is available.', 'His card has expired.', 'The library hours changed.'], 0, '이유', '연체된 책이 있다는 이메일을 받았다고 했으므로 (A)가 정답.', '남자는 왜 이메일을 받았는가?'],
      ['How did the man return the book?', ['He used a drop box.', 'He mailed it.', 'He gave it to a librarian.', 'He asked a friend.'], 0, '세부 사항', '바깥 반납함을 이용했다고 했으므로 (A)가 정답.', '남자는 어떻게 책을 반납했는가?'],
      ['What will the woman do?', ['Search for the book', 'Charge a late fee', 'Repair the drop box', 'Issue a new card'], 0, '다음 할 일', '뒤쪽 방에서 찾아보겠다고 했으므로 (A)가 정답.', '여자는 무엇을 할 것인가?'],
    ] },

  { title: '회사 · 고객 불만 처리', voices: { W: 'AU', M: 'US' },
    script: [
      ['W', 'Mark, we received a complaint from a customer who says our delivery driver left a package in the rain.'],
      ['M', 'Was the item damaged?'],
      ['W', 'Yes, it was a box of books, and they got wet.'],
      ['M', 'Let\'s send her a replacement right away, and I\'ll remind the drivers to leave packages under cover.'],
    ],
    ko: ['마크, 배송 기사가 소포를 비 오는 데 두고 갔다는 고객 불만이 들어왔어요.', '물건이 손상됐어요?', '네, 책 한 상자였는데 젖었대요.', '바로 교체품을 보내 드리고, 기사들에게 소포를 비 안 맞는 곳에 두라고 다시 알릴게요.'],
    qs: [
      ['What is the customer\'s complaint?', ['A package was left in the rain.', 'A delivery was late.', 'The wrong item was sent.', 'A driver was rude.'], 0, '문제점', '소포를 비 오는 데 두고 갔다는 불만이므로 (A)가 정답.', '고객의 불만은 무엇인가?'],
      ['What was in the package?', ['Books', 'Clothes', 'Electronics', 'Food'], 0, '세부 사항', '책 한 상자였다고 했으므로 (A)가 정답.', '소포에는 무엇이 들어 있었는가?'],
      ['What will the man do?', ['Remind drivers of a rule', 'Call the customer', 'Give a refund', 'Hire new drivers'], 0, '다음 할 일', '기사들에게 소포를 비 안 맞는 곳에 두라고 알리겠다고 했으므로 (A)가 정답.', '남자는 무엇을 할 것인가?'],
    ] },

  { title: '부동산 · 집 보러 가기', voices: { M: 'UK', W: 'CA' },
    script: [
      ['M', 'Hi, I\'m calling about the three-bedroom house on Lake Road. Is it still for sale?'],
      ['W', 'Yes, it is. In fact, we\'re holding an open house this Saturday from ten to two.'],
      ['M', 'I\'m traveling this weekend. Could I see it on Friday instead?'],
      ['W', 'Sure. I can show it to you on Friday at five. Let me get your contact number.'],
    ],
    ko: ['안녕하세요, 레이크로에 있는 방 세 개짜리 집 때문에 전화했어요. 아직 팔려고 내놓았나요?', '네, 그래요. 사실 이번 토요일 10시부터 2시까지 오픈하우스를 열어요.', '저는 이번 주말에 여행을 가요. 대신 금요일에 볼 수 있을까요?', '그럼요. 금요일 5시에 보여 드릴 수 있어요. 연락처를 알려 주세요.'],
    qs: [
      ['What is the man interested in?', ['Buying a house', 'Renting an office', 'Selling his home', 'Hiring an agent'], 0, '목적', '팔려고 내놓은 집에 대해 문의했으므로 (A)가 정답.', '남자는 무엇에 관심이 있는가?'],
      ['Why can\'t the man attend the open house?', ['He will be traveling.', 'He has to work.', 'He lives far away.', 'He is sick.'], 0, '이유', '이번 주말에 여행을 간다고 했으므로 (A)가 정답.', '남자는 왜 오픈하우스에 갈 수 없는가?'],
      ['When will the man see the house?', ['On Friday at five', 'On Saturday at ten', 'On Saturday at two', 'On Sunday'], 0, '세부 사항', '금요일 5시에 보여 주겠다고 했으므로 (A)가 정답.', '남자는 언제 집을 보게 되는가?'],
    ] },

  { title: '회사 · 신입 노트북 설정', voices: { W: 'US', M: 'AU' },
    script: [
      ['W', 'Hi, I\'m new in the marketing department. I can\'t log in to the company e-mail system.'],
      ['M', 'Did you get a temporary password from human resources?'],
      ['W', 'Yes, but it says it has expired.'],
      ['M', 'They expire after twenty-four hours. I\'ll reset it for you now. You\'ll need to create a new one when you log in.'],
    ],
    ko: ['안녕하세요, 마케팅 부서 신입인데요. 회사 이메일 시스템에 로그인이 안 돼요.', '인사팀에서 임시 비밀번호 받았어요?', '네, 그런데 만료됐다고 나와요.', '24시간 지나면 만료돼요. 지금 재설정해 드릴게요. 로그인하면 새 비밀번호를 만드셔야 해요.'],
    qs: [
      ['Who most likely is the woman?', ['A new employee', 'An IT technician', 'A human resources manager', 'A client'], 0, '화자 정체', '마케팅 부서 신입이라고 했으므로 (A)가 정답.', '여자는 누구일 것 같은가?'],
      ['What is the woman\'s problem?', ['She cannot log in to her e-mail.', 'She lost her laptop.', 'She has no desk.', 'She missed a meeting.'], 0, '문제점', '회사 이메일에 로그인이 안 된다고 했으므로 (A)가 정답.', '여자의 문제는 무엇인가?'],
      ['What will the woman need to do?', ['Create a new password', 'Call human resources', 'Restart her computer', 'Fill out a form'], 0, '다음 할 일', '로그인하면 새 비밀번호를 만들어야 한다고 했으므로 (A)가 정답.', '여자는 무엇을 해야 하는가?'],
    ] },
]);
