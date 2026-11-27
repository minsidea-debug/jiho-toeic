/* Part 3 · 짧은 대화 추가 묶음 10 (세트 p3-s91 ~ s100, 문제 p3-271 ~ 300) — 직접 창작. 형식은 part3_02.js 참고
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(3, 91, 271, [
  { title: '회사 · 신규 고객 환영 선물', voices: { M: 'UK', W: 'US' },
    script: [
      ['M', 'We just signed the contract with Northwind Logistics. Should we send them a welcome gift?'],
      ['W', 'Good idea. Last time we sent a fruit basket to a new client, and they loved it.'],
      ['M', 'Let\'s do that again. Do you know the name of the shop?'],
      ['W', 'It\'s Fresh Harvest on Market Street. I\'ll call them and place the order.'],
    ],
    ko: ['방금 노스윈드 물류와 계약했어요. 환영 선물을 보낼까요?', '좋은 생각이에요. 지난번 새 고객에게 과일 바구니를 보냈는데 아주 좋아했어요.', '이번에도 그렇게 해요. 가게 이름 알아요?', '마켓가의 프레시 하베스트예요. 제가 전화해서 주문할게요.'],
    qs: [
      ['What did the company just do?', ['Sign a contract', 'Open a new office', 'Hire a manager', 'Launch a product'], 0, '세부 사항', '노스윈드 물류와 계약했다고 했으므로 (A)가 정답.', '회사는 방금 무엇을 했는가?'],
      ['What do the speakers decide to send?', ['A fruit basket', 'Flowers', 'A gift card', 'A company brochure'], 0, '세부 사항', '지난번처럼 과일 바구니를 보내기로 했으므로 (A)가 정답.', '화자들은 무엇을 보내기로 하는가?'],
      ['What will the woman do?', ['Call a shop', 'Write a card', 'Visit the client', 'Check the budget'], 0, '다음 할 일', '가게에 전화해서 주문하겠다고 했으므로 (A)가 정답.', '여자는 무엇을 할 것인가?'],
    ] },

  { title: '택시 · 공항 가는 길', voices: { W: 'AU', M: 'CA' },
    script: [
      ['W', 'Could you take me to the airport, please? International terminal.'],
      ['M', 'Sure. Is there a time you need to be there by?'],
      ['W', 'My flight\'s at six thirty, so I\'d like to arrive by five.'],
      ['M', 'Traffic on the highway is heavy right now, so I\'ll take the coast road. It should take about forty minutes.'],
    ],
    ko: ['공항으로 가 주시겠어요? 국제선 터미널이요.', '그럼요. 몇 시까지 도착해야 하나요?', '비행기가 6시 반이라 5시까지는 도착하고 싶어요.', '지금 고속도로가 많이 막혀서 해안 도로로 갈게요. 40분쯤 걸릴 거예요.'],
    qs: [
      ['Who most likely is the man?', ['A taxi driver', 'A pilot', 'A hotel clerk', 'A travel agent'], 0, '화자 정체', '공항까지 태워 주며 길을 정하므로 택시 기사입니다. (A)가 정답.', '남자는 누구일 것 같은가?'],
      ['When does the woman want to arrive?', ['By five o\'clock', 'By six thirty', 'By four o\'clock', 'By six'], 0, '세부 사항', '5시까지 도착하고 싶다고 했으므로 (A)가 정답. 6시 반은 비행기 시간이라 함정.', '여자는 언제 도착하고 싶어 하는가?'],
      ['Why will the man take the coast road?', ['The highway is busy.', 'It is more scenic.', 'The highway is closed.', 'It is shorter.'], 0, '이유', '고속도로가 많이 막힌다고 했으므로 (A)가 정답.', '남자는 왜 해안 도로로 가는가?'],
    ] },

  { title: '사내 교육 · 엑셀 강좌 (3명)', voices: { W: 'UK', M: 'US', W2: 'AU' },
    script: [
      ['W', 'Hi, everyone. Thanks for coming to the spreadsheet workshop. Before we start, does anyone have questions?'],
      ['M', 'Will we get a copy of the slides?'],
      ['W', 'Yes, I\'ll e-mail them after the session.'],
      ['W2', 'Also, my laptop doesn\'t have the spreadsheet program installed.'],
      ['W', 'No problem. There are a few spare laptops at the back of the room. Please take one.'],
    ],
    ko: ['안녕하세요, 여러분. 스프레드시트 워크숍에 와 주셔서 고마워요. 시작하기 전에 질문 있으세요?', '슬라이드 사본을 받을 수 있나요?', '네, 수업 후에 이메일로 보낼게요.', '그리고 제 노트북에는 스프레드시트 프로그램이 설치되어 있지 않아요.', '괜찮아요. 교실 뒤쪽에 여분 노트북이 몇 대 있어요. 하나 가져가세요.'],
    qs: [
      ['What is the workshop about?', ['Spreadsheet software', 'Public speaking', 'Customer service', 'Time management'], 0, '주제', '스프레드시트 워크숍이라고 했으므로 (A)가 정답.', '워크숍은 무엇에 관한 것인가?'],
      ['What will the woman send after the session?', ['Some slides', 'A certificate', 'A survey', 'A schedule'], 0, '세부 사항', '수업 후 슬라이드를 이메일로 보내겠다고 했으므로 (A)가 정답.', '여자는 수업 후에 무엇을 보낼 것인가?'],
      ['What problem does the second woman mention?', ['A program is not installed on her laptop.', 'Her laptop battery is low.', 'She cannot see the screen.', 'She arrived late.'], 0, '문제점', '노트북에 프로그램이 설치되어 있지 않다고 했으므로 (A)가 정답.', '두 번째 여자는 어떤 문제를 언급하는가?'],
    ] },

  { title: '호텔 · 연회장 예약 (표)', voices: { M: 'CA', W: 'US' },
    graphic: { title: 'Harbor Hotel – Event Rooms', rows: [['Room', 'Capacity'], ['Pearl Room', '40'], ['Coral Room', '80'], ['Ocean Room', '150'], ['Grand Ballroom', '300']] },
    script: [
      ['M', 'Hello, I\'m planning a retirement party for a colleague and need a room at your hotel.'],
      ['W', 'Certainly. How many guests are you expecting?'],
      ['M', 'About sixty, but a few more might come.'],
      ['W', 'Then I\'d recommend the smallest room that can hold your group with some extra space. Shall I send you the menu options?'],
    ],
    ko: ['안녕하세요, 동료 은퇴 파티를 준비 중인데 호텔 연회장이 필요해요.', '물론이죠. 손님은 몇 분 정도 예상하세요?', '60명 정도인데, 몇 명 더 올 수도 있어요.', '그럼 인원을 수용하면서 여유가 조금 있는 가장 작은 방을 추천해요. 메뉴 선택지를 보내 드릴까요?'],
    qs: [
      ['What event is the man planning?', ['A retirement party', 'A wedding', 'A sales conference', 'A birthday party'], 0, '세부 사항', '동료의 은퇴 파티를 준비 중이라고 했으므로 (A)가 정답.', '남자는 어떤 행사를 계획하고 있는가?'],
      ['Look at the graphic. Which room will the woman most likely recommend?', ['Pearl Room', 'Coral Room', 'Ocean Room', 'Grand Ballroom'], 1, '시각 정보', '60명 정도에 여유가 조금 있는 가장 작은 방은 80명 수용의 Coral Room입니다.', '표를 보시오. 여자는 어느 방을 추천할 것 같은가?'],
      ['What does the woman offer to send?', ['Menu options', 'A contract', 'Room photos', 'A price list'], 0, '제안', '메뉴 선택지를 보내 줄지 물었으므로 (A)가 정답.', '여자는 무엇을 보내 주겠다고 하는가?'],
    ] },

  { title: '회사 · 프린터 토너 교체 방법', voices: { W: 'CA', M: 'UK' },
    script: [
      ['W', 'Excuse me, Carl. The printer says it needs new toner. Do you know how to change it?'],
      ['M', 'Sure. Open the front panel, pull out the old cartridge, and slide in the new one.'],
      ['W', 'Where do we keep the new cartridges?'],
      ['M', 'In the cabinet next to the printer. But we only have one left, so we should order more.'],
    ],
    ko: ['실례해요, 칼. 프린터에 새 토너가 필요하다고 나와요. 교체 방법 알아요?', '그럼요. 앞쪽 덮개를 열고 헌 카트리지를 빼고 새것을 밀어 넣으면 돼요.', '새 카트리지는 어디에 보관해요?', '프린터 옆 캐비닛에요. 그런데 하나만 남아서 더 주문해야 해요.'],
    qs: [
      ['What does the woman need help with?', ['Replacing toner', 'Fixing a paper jam', 'Connecting to a printer', 'Ordering paper'], 0, '목적', '토너 교체 방법을 물었으므로 (A)가 정답.', '여자는 무엇에 도움이 필요한가?'],
      ['Where are the cartridges kept?', ['In a cabinet next to the printer', 'In the supply room', 'At the front desk', 'In the man\'s office'], 0, '세부 사항', '프린터 옆 캐비닛이라고 했으므로 (A)가 정답.', '카트리지는 어디에 보관되는가?'],
      ['What does the man say they should do?', ['Order more cartridges', 'Buy a new printer', 'Call a technician', 'Print less'], 0, '제안', '하나만 남았으니 더 주문해야 한다고 했으므로 (A)가 정답.', '남자는 무엇을 해야 한다고 말하는가?'],
    ] },

  { title: '은행 · 카드 분실', voices: { M: 'US', W: 'AU' },
    script: [
      ['M', 'Hi, I think I lost my credit card yesterday. Can you cancel it?'],
      ['W', 'Certainly. I\'ve blocked it now. I don\'t see any new charges since yesterday.'],
      ['M', 'That\'s a relief. How long will it take to get a new card?'],
      ['W', 'It\'ll arrive by mail in five to seven business days. You can also pick it up at a branch in two days.'],
      ['M', 'I\'ll pick it up at the branch, then.'],
    ],
    ko: ['안녕하세요, 어제 신용카드를 잃어버린 것 같아요. 정지할 수 있어요?', '물론이죠. 지금 정지했어요. 어제 이후로 새 결제 내역은 보이지 않네요.', '다행이네요. 새 카드는 얼마나 걸려요?', '우편으로 영업일 5~7일 후 도착해요. 이틀 후 지점에서 찾아가실 수도 있어요.', '그럼 지점에서 찾을게요.'],
    qs: [
      ['Why is the man calling?', ['He lost a credit card.', 'He wants a loan.', 'He was charged twice.', 'He moved to a new address.'], 0, '목적', '신용카드를 잃어버렸다고 했으므로 (A)가 정답.', '남자는 왜 전화하는가?'],
      ['What does the woman say about the card?', ['No new charges have been made.', 'It has been found.', 'It has expired.', 'It was used overseas.'], 0, '세부 사항', '새 결제 내역이 없다고 했으므로 (A)가 정답.', '여자는 카드에 대해 무엇을 말하는가?'],
      ['How will the man get his new card?', ['By picking it up at a branch', 'By mail', 'By courier', 'At an ATM'], 0, '다음 할 일', '지점에서 찾겠다고 했으므로 (A)가 정답.', '남자는 새 카드를 어떻게 받을 것인가?'],
    ] },

  { title: '회사 · 웹 세미나 준비', voices: { W: 'US', M: 'AU' },
    script: [
      ['W', 'Our online seminar on Thursday already has three hundred people registered.'],
      ['M', 'That\'s more than we expected. Can our video platform handle that many?'],
      ['W', 'Our current plan allows up to five hundred, so we\'re fine.'],
      ['M', 'Great. I\'ll send a reminder e-mail with the link to everyone the day before.'],
    ],
    ko: ['목요일 온라인 세미나에 벌써 300명이 등록했어요.', '예상보다 많네요. 우리 영상 플랫폼이 그렇게 많은 인원을 감당할 수 있어요?', '지금 요금제로는 500명까지 되니까 괜찮아요.', '좋아요. 전날 모두에게 링크가 담긴 알림 이메일을 보낼게요.'],
    qs: [
      ['What are the speakers preparing for?', ['An online seminar', 'A trade show', 'A product launch', 'A staff party'], 0, '주제', '목요일 온라인 세미나 이야기이므로 (A)가 정답.', '화자들은 무엇을 준비하고 있는가?'],
      ['What is the man concerned about?', ['Whether the platform can handle many users', 'Whether enough people will register', 'The cost of the seminar', 'Finding a speaker'], 0, '걱정', '플랫폼이 많은 인원을 감당할 수 있는지 물었으므로 (A)가 정답.', '남자는 무엇을 걱정하는가?'],
      ['What will the man do the day before the event?', ['Send a reminder e-mail', 'Test the equipment', 'Call the speakers', 'Upgrade the plan'], 0, '다음 할 일', '전날 알림 이메일을 보내겠다고 했으므로 (A)가 정답.', '남자는 행사 전날 무엇을 할 것인가?'],
    ] },

  { title: '아파트 · 이웃 소음', voices: { M: 'CA', W: 'UK' },
    script: [
      ['M', 'Hi, I\'m your neighbor from 4B. I wanted to let you know we\'re having some work done in our kitchen next week.'],
      ['W', 'Thanks for telling me. Will it be noisy?'],
      ['M', 'It might be for the first two days. The workers will only be here between nine and five.'],
      ['W', 'That\'s fine. I\'m at the office during those hours anyway.'],
    ],
    ko: ['안녕하세요, 4B호 이웃이에요. 다음 주에 부엌 공사를 한다고 알려 드리고 싶었어요.', '알려 줘서 고마워요. 시끄러울까요?', '처음 이틀은 그럴 수도 있어요. 작업자들은 9시부터 5시 사이에만 있을 거예요.', '괜찮아요. 어차피 그 시간엔 사무실에 있어요.'],
    qs: [
      ['Why is the man talking to the woman?', ['To inform her about renovation work', 'To complain about noise', 'To borrow some tools', 'To invite her to dinner'], 0, '목적', '다음 주 부엌 공사를 알리려고 왔으므로 (A)가 정답.', '남자는 왜 여자에게 말을 거는가?'],
      ['When will the workers be there?', ['Between nine and five', 'In the evening', 'On weekends only', 'All day and night'], 0, '세부 사항', '9시부터 5시 사이라고 했으므로 (A)가 정답.', '작업자들은 언제 와 있는가?'],
      ['What does the woman mean when she says, "I\'m at the office during those hours anyway"?', ['The noise will not bother her.', 'She wants to change her schedule.', 'She works from home.', 'She will complain to the manager.'], 0, '의도 파악', '그 시간엔 어차피 집에 없으니 소음이 신경 쓰이지 않는다는 뜻입니다. (A)가 정답.', '여자가 "어차피 그 시간엔 사무실에 있어요"라고 말한 의도는?'],
    ] },

  { title: '사진관 · 증명사진', voices: { W: 'AU', M: 'US' },
    script: [
      ['W', 'Hi, I need passport photos. Can you take them now?'],
      ['M', 'Sure. It takes about ten minutes. But you\'ll need to take off your glasses for the photo.'],
      ['W', 'Oh, OK. How many photos do I get?'],
      ['M', 'Four photos, and we\'ll also e-mail you a digital copy for online applications.'],
    ],
    ko: ['안녕하세요, 여권 사진이 필요해요. 지금 찍을 수 있어요?', '그럼요. 10분 정도 걸려요. 그런데 사진 찍을 때 안경을 벗으셔야 해요.', '아, 알겠어요. 사진은 몇 장 받아요?', '네 장이고, 온라인 신청용 디지털 사본도 이메일로 보내 드려요.'],
    qs: [
      ['What does the woman need?', ['Passport photos', 'A new passport', 'Glasses', 'A photo frame'], 0, '목적', '여권 사진이 필요하다고 했으므로 (A)가 정답.', '여자는 무엇이 필요한가?'],
      ['What does the man ask the woman to do?', ['Remove her glasses', 'Come back later', 'Fill out a form', 'Pay in advance'], 0, '요청', '안경을 벗어야 한다고 했으므로 (A)가 정답.', '남자는 여자에게 무엇을 하라고 하는가?'],
      ['What will the woman receive by e-mail?', ['A digital copy', 'A receipt', 'A discount code', 'An application form'], 0, '세부 사항', '디지털 사본을 이메일로 보내 준다고 했으므로 (A)가 정답.', '여자는 이메일로 무엇을 받는가?'],
    ] },

  { title: '회사 · 연간 평가 면담', voices: { M: 'UK', W: 'CA' },
    script: [
      ['M', 'Hi, Olivia. I\'d like to schedule your annual performance review for next week.'],
      ['W', 'Sure. I\'m free any afternoon except Wednesday.'],
      ['M', 'How about Thursday at two? Please fill out the self-evaluation form before then.'],
      ['W', 'OK. Should I send it to you or to human resources?'],
      ['M', 'Send it to me. I\'ll forward it to HR afterward.'],
    ],
    ko: ['안녕하세요, 올리비아. 다음 주에 연간 업무 평가 면담 일정을 잡고 싶어요.', '좋아요. 수요일만 빼고 오후엔 아무 때나 괜찮아요.', '목요일 2시 어때요? 그 전에 자기 평가서를 작성해 주세요.', '알겠어요. 평가서는 당신에게 보내요, 인사팀에 보내요?', '저한테 보내요. 나중에 제가 인사팀에 전달할게요.'],
    qs: [
      ['What are the speakers scheduling?', ['A performance review', 'A job interview', 'A training session', 'A client visit'], 0, '주제', '연간 업무 평가 면담 일정을 잡으므로 (A)가 정답.', '화자들은 무엇의 일정을 잡고 있는가?'],
      ['What should the woman complete before the meeting?', ['A self-evaluation form', 'A sales report', 'A vacation request', 'A project plan'], 0, '요청', '자기 평가서를 작성하라고 했으므로 (A)가 정답.', '여자는 면담 전에 무엇을 작성해야 하는가?'],
      ['Who should the woman send the form to?', ['The man', 'Human resources', 'Her team', 'The director'], 0, '세부 사항', '자기에게 보내라고 했으므로 (A)가 정답. 인사팀은 남자가 나중에 전달하는 곳이라 함정.', '여자는 서식을 누구에게 보내야 하는가?'],
    ] },
]);
