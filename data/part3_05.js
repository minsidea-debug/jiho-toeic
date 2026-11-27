/* Part 3 · 짧은 대화 추가 묶음 05 (세트 p3-s41 ~ s50, 문제 p3-121 ~ 150) — 직접 창작. 형식은 part3_02.js 참고
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(3, 41, 121, [
  { title: '서점 · 책 주문', voices: { W: 'UK', M: 'US' },
    script: [
      ['W', 'Hello, I\'m looking for a book called "Smart Saving for Small Businesses." I couldn\'t find it on the shelves.'],
      ['M', 'Let me check. Hmm, we sold our last copy yesterday. I can order one for you, though.'],
      ['W', 'How long would that take?'],
      ['M', 'Usually three to four days. We\'ll call you when it arrives.'],
      ['W', 'That\'s fine. Can I pay for it now?'],
    ],
    ko: ['안녕하세요, "소상공인을 위한 똑똑한 저축"이라는 책을 찾는데요. 서가에서 못 찾겠어요.', '확인해 볼게요. 음, 어제 마지막 한 권이 팔렸네요. 하지만 주문해 드릴 수 있어요.', '얼마나 걸려요?', '보통 3~4일이요. 도착하면 전화드릴게요.', '괜찮아요. 지금 계산해도 돼요?'],
    qs: [
      ['What is the woman looking for?', ['A book', 'A magazine', 'A calendar', 'A notebook'], 0, '세부 사항', '책을 찾는다고 했으므로 (A)가 정답.', '여자는 무엇을 찾고 있는가?'],
      ['What does the man offer to do?', ['Order an item', 'Give a discount', 'Check another store', 'Hold a copy'], 0, '제안', '주문해 주겠다고 했으므로 (A)가 정답.', '남자는 무엇을 해 주겠다고 하는가?'],
      ['How will the woman be informed?', ['By phone', 'By e-mail', 'By text message', 'By mail'], 0, '세부 사항', '도착하면 전화하겠다고 했으므로 (A)가 정답.', '여자는 어떻게 연락을 받게 되는가?'],
    ] },

  { title: '사무실 · 새 커피 머신', voices: { M: 'CA', W: 'US' },
    script: [
      ['M', 'Have you tried the new coffee machine in the break room?'],
      ['W', 'Not yet. Is it any good?'],
      ['M', 'The coffee is much better, but you need to use your employee ID card to pay.'],
      ['W', 'Really? I left my card at home today.'],
      ['M', 'You can borrow mine. Just pay me back tomorrow.'],
    ],
    ko: ['휴게실 새 커피 머신 써 봤어요?', '아직이요. 괜찮아요?', '커피는 훨씬 맛있는데, 사원증으로 계산해야 해요.', '정말요? 오늘 카드를 집에 두고 왔어요.', '제 거 빌려 써요. 내일 갚으면 돼요.'],
    qs: [
      ['What are the speakers talking about?', ['A coffee machine', 'A new cafeteria', 'An ID card policy', 'A break schedule'], 0, '주제', '휴게실의 새 커피 머신 이야기입니다. (A)가 정답.', '화자들은 무엇에 대해 이야기하는가?'],
      ['What problem does the woman have?', ['She does not have her card.', 'She does not like coffee.', 'She has no cash.', 'The machine is broken.'], 0, '문제점', '카드를 집에 두고 왔다고 했으므로 (A)가 정답.', '여자는 어떤 문제가 있는가?'],
      ['What does the man offer?', ['To lend his card', 'To buy her lunch', 'To fix the machine', 'To call security'], 0, '제안', '자기 카드를 빌려주겠다고 했으므로 (A)가 정답.', '남자는 무엇을 제안하는가?'],
    ] },

  { title: '여행 · 호텔 체크아웃 연장', voices: { W: 'AU', M: 'UK' },
    script: [
      ['W', 'Good morning. I\'m in room 302. My flight isn\'t until nine tonight. Is it possible to check out late?'],
      ['M', 'We can extend your checkout to two o\'clock at no charge. After that, there\'s a fee of forty dollars.'],
      ['W', 'Two o\'clock is fine. Could you also keep my luggage after I check out?'],
      ['M', 'Of course. Just leave it with the bell staff, and they\'ll give you a ticket.'],
    ],
    ko: ['안녕하세요. 302호인데요. 비행기가 밤 9시예요. 늦게 체크아웃할 수 있을까요?', '2시까지는 무료로 연장해 드릴 수 있어요. 그 이후엔 40달러 요금이 있어요.', '2시면 괜찮아요. 체크아웃 후에 짐도 맡아 주실 수 있어요?', '물론이죠. 벨 데스크 직원에게 맡기시면 번호표를 드릴 거예요.'],
    qs: [
      ['What does the woman ask for?', ['A late checkout', 'A room upgrade', 'A taxi', 'An early breakfast'], 0, '요청', '늦게 체크아웃할 수 있는지 물었으므로 (A)가 정답.', '여자는 무엇을 요청하는가?'],
      ['Until what time can the woman stay for free?', ['2:00 P.M.', '12:00 P.M.', '4:00 P.M.', '9:00 P.M.'], 0, '세부 사항', '2시까지 무료라고 했으므로 (A)가 정답. 9시는 비행기 시간이라 함정.', '여자는 몇 시까지 무료로 머물 수 있는가?'],
      ['What will the woman probably do after checking out?', ['Leave her bags with hotel staff', 'Go to the airport immediately', 'Pay a fee', 'Book another night'], 0, '다음 할 일', '짐을 벨 데스크에 맡기라고 안내받았으므로 (A)가 정답.', '여자는 체크아웃 후 무엇을 할 것 같은가?'],
    ] },

  { title: '회사 · 신규 지점 매니저 선정 (3명)', voices: { M: 'US', W: 'UK', W2: 'CA' },
    script: [
      ['M', 'We need to decide who\'ll manage the new branch in Seattle.'],
      ['W', 'I\'d recommend Mina Cho. She\'s been our top salesperson for three years.'],
      ['W2', 'I agree, but she\'s never managed a team before.'],
      ['M', 'That\'s a fair point. What if we send her to the leadership training program first?'],
      ['W', 'Good idea. The next program starts in two weeks, before the branch opens.'],
    ],
    ko: ['시애틀 새 지점을 누가 맡을지 정해야 해요.', '조미나 씨를 추천해요. 3년 동안 최고 영업 사원이었어요.', '동의하지만, 그녀는 팀을 관리해 본 적이 없어요.', '일리 있는 말이에요. 먼저 리더십 교육 프로그램에 보내면 어때요?', '좋은 생각이에요. 다음 프로그램이 지점이 열기 전, 2주 후에 시작해요.'],
    qs: [
      ['What are the speakers deciding?', ['Who will manage a new branch', 'Where to open a branch', 'How to train salespeople', 'When to hire new staff'], 0, '주제', '새 지점을 누가 맡을지 정하고 있으므로 (A)가 정답.', '화자들은 무엇을 정하고 있는가?'],
      ['What concern is mentioned about Ms. Cho?', ['She lacks management experience.', 'She lives far from Seattle.', 'Her sales numbers dropped.', 'She is going on leave.'], 0, '걱정', '팀을 관리해 본 적이 없다고 했으므로 (A)가 정답.', '조 씨에 대해 어떤 걱정이 언급되는가?'],
      ['What does the man suggest?', ['Sending Ms. Cho to a training program', 'Hiring someone from outside', 'Delaying the branch opening', 'Giving Ms. Cho a bonus'], 0, '제안', '먼저 리더십 교육에 보내자고 했으므로 (A)가 정답.', '남자는 무엇을 제안하는가?'],
    ] },

  { title: '피트니스 · 개인 트레이닝 (표)', voices: { W: 'US', M: 'AU' },
    graphic: { title: 'Personal Training Packages', rows: [['Package', 'Sessions', 'Price'], ['Starter', '4', '$160'], ['Standard', '8', '$300'], ['Plus', '12', '$420'], ['Premium', '20', '$650']] },
    script: [
      ['W', 'I\'m interested in personal training. What packages do you have?'],
      ['M', 'Here\'s our price list. How often would you like to train?'],
      ['W', 'Twice a week for about a month, I think.'],
      ['M', 'Then this package is the right one for you. And if you buy it this week, you\'ll get a free fitness assessment.'],
    ],
    ko: ['개인 트레이닝에 관심이 있어요. 어떤 패키지가 있나요?', '여기 가격표예요. 얼마나 자주 운동하고 싶으세요?', '한 달 정도 일주일에 두 번이요.', '그럼 이 패키지가 딱 맞아요. 이번 주에 사시면 무료 체력 평가도 받으세요.'],
    qs: [
      ['What is the woman interested in?', ['Personal training', 'A yoga class', 'A swimming lesson', 'A diet plan'], 0, '세부 사항', '개인 트레이닝에 관심 있다고 했으므로 (A)가 정답.', '여자는 무엇에 관심이 있는가?'],
      ['Look at the graphic. How much will the woman most likely pay?', ['$160', '$300', '$420', '$650'], 1, '시각 정보', '한 달 동안 일주일에 두 번이면 약 8회입니다. 8회 패키지는 Standard, $300.', '표를 보시오. 여자는 얼마를 낼 것 같은가?'],
      ['What will the woman get if she buys this week?', ['A free fitness assessment', 'An extra session', 'A free T-shirt', 'A discount on drinks'], 0, '세부 사항', '이번 주에 사면 무료 체력 평가를 받는다고 했으므로 (A)가 정답.', '여자가 이번 주에 사면 무엇을 받는가?'],
    ] },

  { title: '회사 · 원격 회의 장비 문제', voices: { M: 'UK', W: 'CA' },
    script: [
      ['M', 'Erin, the video call with the London office starts in five minutes, but the camera in this room isn\'t working.'],
      ['W', 'Did you try restarting the computer?'],
      ['M', 'Twice. It still doesn\'t recognize the camera.'],
      ['W', 'Let\'s move to Room 6. The equipment there was just updated last week.'],
    ],
    ko: ['에린, 런던 사무소와 화상 통화가 5분 후에 시작하는데 이 방 카메라가 안 돼요.', '컴퓨터 다시 켜 봤어요?', '두 번이나요. 여전히 카메라를 인식 못 해요.', '6호실로 옮겨요. 거기 장비는 지난주에 막 업데이트됐어요.'],
    qs: [
      ['What are the speakers about to do?', ['Join a video call', 'Visit London', 'Repair a camera', 'Interview a candidate'], 0, '세부 사항', '런던 사무소와 화상 통화가 곧 시작된다고 했으므로 (A)가 정답.', '화자들은 무엇을 하려는 참인가?'],
      ['What has the man already done?', ['Restarted a computer', 'Called technical support', 'Bought a new camera', 'Canceled the meeting'], 0, '세부 사항', '컴퓨터를 두 번 다시 켰다고 했으므로 (A)가 정답.', '남자는 이미 무엇을 했는가?'],
      ['What does the woman suggest?', ['Using a different room', 'Postponing the call', 'Using a phone instead', 'Asking the London office to call back'], 0, '제안', '6호실로 옮기자고 했으므로 (A)가 정답.', '여자는 무엇을 제안하는가?'],
    ] },

  { title: '부동산 · 아파트 관리', voices: { W: 'UK', M: 'US' },
    script: [
      ['W', 'Hi, I\'m a tenant in apartment 5C. The kitchen sink has been leaking since last night.'],
      ['M', 'Sorry to hear that. I can send a plumber this afternoon. Will you be home?'],
      ['W', 'I have to go to work. Can the plumber come in while I\'m out?'],
      ['M', 'Sure, I have a spare key. I\'ll go with the plumber and lock up afterward.'],
    ],
    ko: ['안녕하세요, 5C호 세입자인데요. 어젯밤부터 부엌 싱크대에서 물이 새요.', '안됐네요. 오늘 오후에 배관공을 보낼 수 있어요. 집에 계실 거예요?', '출근해야 해요. 제가 없을 때 배관공이 들어가도 될까요?', '그럼요, 제게 여분 열쇠가 있어요. 배관공과 같이 가서 끝나면 문을 잠글게요.'],
    qs: [
      ['Who most likely is the man?', ['A building manager', 'A plumber', 'A real estate agent', 'A neighbor'], 0, '화자 정체', '배관공을 보내 주고 여분 열쇠를 가진 사람이므로 건물 관리인입니다. (A)가 정답.', '남자는 누구일 것 같은가?'],
      ['What problem does the woman report?', ['A leaking sink', 'A broken window', 'A noisy neighbor', 'A lost key'], 0, '문제점', '부엌 싱크대에서 물이 샌다고 했으므로 (A)가 정답.', '여자는 어떤 문제를 알리는가?'],
      ['What does the man say he will do?', ['Let the plumber into the apartment', 'Lower the rent', 'Repair the sink himself', 'Call the woman at work'], 0, '다음 할 일', '배관공과 같이 가서 문을 잠그겠다고 했으므로 (A)가 정답.', '남자는 무엇을 하겠다고 하는가?'],
    ] },

  { title: '광고 회사 · 고객 미팅 준비', voices: { M: 'CA', W: 'AU' },
    script: [
      ['M', 'Rachel, are the materials ready for tomorrow\'s meeting with Fresh Juice Company?'],
      ['W', 'Almost. I just need to print the posters for our new campaign idea.'],
      ['M', 'Great. The client also asked to see last year\'s sales results.'],
      ['W', 'I didn\'t know that. I\'ll ask the research team for the latest figures.'],
    ],
    ko: ['레이첼, 내일 프레시 주스 회사와의 미팅 자료 준비됐어요?', '거의요. 새 캠페인 아이디어 포스터만 출력하면 돼요.', '좋아요. 고객이 작년 판매 결과도 보고 싶다고 했어요.', '몰랐네요. 리서치팀에 최신 수치를 요청할게요.'],
    qs: [
      ['What will happen tomorrow?', ['A meeting with a client', 'A product launch', 'A poster contest', 'A team lunch'], 0, '세부 사항', '내일 프레시 주스 회사와 미팅이 있다고 했으므로 (A)가 정답.', '내일 무슨 일이 있는가?'],
      ['What does the woman still need to do?', ['Print some posters', 'Write a speech', 'Book a room', 'Call the client'], 0, '세부 사항', '포스터만 출력하면 된다고 했으므로 (A)가 정답.', '여자는 아직 무엇을 해야 하는가?'],
      ['What will the woman ask the research team for?', ['Recent sales figures', 'Customer reviews', 'Design ideas', 'A meeting schedule'], 0, '다음 할 일', '리서치팀에 최신 수치를 요청하겠다고 했으므로 (A)가 정답.', '여자는 리서치팀에 무엇을 요청할 것인가?'],
    ] },

  { title: '택배 · 배송 시간 변경', voices: { W: 'CA', M: 'AU' },
    script: [
      ['W', 'Hello, I got a message that my package will be delivered today between one and five.'],
      ['M', 'Yes, that\'s right. Is there a problem?'],
      ['W', 'I won\'t be home until six. Could it be left at the front desk of my building?'],
      ['M', 'I can arrange that. I just need your name and the tracking number.'],
    ],
    ko: ['안녕하세요, 오늘 1시에서 5시 사이에 소포가 배달된다는 메시지를 받았어요.', '네, 맞아요. 무슨 문제 있으세요?', '6시나 돼야 집에 가요. 건물 안내 데스크에 맡겨 줄 수 있어요?', '그렇게 해 드릴게요. 성함과 운송장 번호만 알려 주세요.'],
    qs: [
      ['Why is the woman calling?', ['To change where a package is left', 'To complain about a damaged item', 'To cancel an order', 'To ask about shipping fees'], 0, '목적', '집에 없으니 안내 데스크에 맡겨 달라고 했으므로 (A)가 정답.', '여자는 왜 전화하는가?'],
      ['What time will the woman get home?', ['At six', 'At five', 'At one', 'At seven'], 0, '세부 사항', '6시나 돼야 집에 간다고 했으므로 (A)가 정답.', '여자는 몇 시에 집에 오는가?'],
      ['What does the man ask for?', ['A name and a tracking number', 'A new address', 'A phone number', 'A payment'], 0, '요청', '성함과 운송장 번호를 달라고 했으므로 (A)가 정답.', '남자는 무엇을 요청하는가?'],
    ] },

  { title: '회사 · 휴가 대체 근무', voices: { M: 'US', W: 'UK' },
    script: [
      ['M', 'Sophie, I\'m on vacation next week. Could you handle my client calls while I\'m away?'],
      ['W', 'Sure. Is there anything urgent I should know about?'],
      ['M', 'Just one thing. Greenfield Foods might call about changing their delivery schedule.'],
      ['W', 'OK. Should I make the change myself?'],
      ['M', 'Yes, you can. Their account details are in the shared folder.'],
    ],
    ko: ['소피, 저 다음 주에 휴가예요. 제가 없는 동안 고객 전화 좀 맡아 줄래요?', '그럼요. 급하게 알아야 할 게 있어요?', '하나만요. 그린필드 푸드가 배송 일정 변경 건으로 전화할 수도 있어요.', '알겠어요. 제가 직접 변경해도 돼요?', '네, 그래도 돼요. 계정 정보는 공유 폴더에 있어요.'],
    qs: [
      ['What does the man ask the woman to do?', ['Handle his calls', 'Visit a client', 'Plan a vacation', 'Train a new employee'], 0, '요청', '자기 고객 전화를 맡아 달라고 했으므로 (A)가 정답.', '남자는 여자에게 무엇을 해 달라고 하는가?'],
      ['What might Greenfield Foods want to change?', ['A delivery schedule', 'A product order', 'A contract price', 'A contact person'], 0, '세부 사항', '배송 일정 변경 건으로 전화할 수 있다고 했으므로 (A)가 정답.', '그린필드 푸드는 무엇을 바꾸고 싶어 할 수 있는가?'],
      ['Where can the woman find the client\'s information?', ['In a shared folder', 'In the man\'s desk', 'On the company Web site', 'In an e-mail'], 0, '세부 사항', '공유 폴더에 계정 정보가 있다고 했으므로 (A)가 정답.', '여자는 고객 정보를 어디에서 찾을 수 있는가?'],
    ] },
]);
