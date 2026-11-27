/* Part 4 · 짧은 담화 추가 묶음 06 (세트 p4-s51 ~ s60, 문제 p4-151 ~ 180) — 직접 창작. 형식은 part3_02.js 참고 (화자 1명)
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(4, 51, 151, [
  { title: '전화 메시지 · 행사장 예약 확인', voices: { W: 'AU' },
    script: [
      ['W', 'Hi, this is Karen from the Riverside Event Center. I\'m calling to confirm your booking of the Garden Hall for June twelfth.'],
      ['W', 'We received your deposit, thank you. I just need to know whether you\'ll be using our catering service or bringing your own.'],
      ['W', 'Please let me know by the end of this week so we can prepare the kitchen. You can reach me at extension 204.'],
    ],
    ko: ['안녕하세요, 리버사이드 이벤트 센터의 캐런입니다. 6월 12일 가든 홀 예약을 확인하려고 전화드려요.', '보증금은 받았어요, 감사합니다. 저희 케이터링 서비스를 쓰실지, 직접 음식을 가져오실지만 알려 주시면 돼요.', '주방을 준비할 수 있게 이번 주 말까지 알려 주세요. 내선 204번으로 연락하시면 돼요.'],
    qs: [
      ['Why is the speaker calling?', ['To confirm a booking', 'To request a payment', 'To cancel an event', 'To advertise a service'], 0, '목적', '가든 홀 예약을 확인하려고 전화했으므로 (A)가 정답.', '화자는 왜 전화하는가?'],
      ['What information does the speaker need?', ['Whether catering will be used', 'The number of guests', 'The event date', 'A credit card number'], 0, '세부 사항', '케이터링 서비스를 쓸지 알려 달라고 했으므로 (A)가 정답.', '화자는 어떤 정보가 필요한가?'],
      ['By when should the listener respond?', ['By the end of this week', 'By tomorrow', 'By June twelfth', 'By next month'], 0, '세부 사항', '이번 주 말까지 알려 달라고 했으므로 (A)가 정답.', '듣는 사람은 언제까지 답해야 하는가?'],
    ] },

  { title: '버스 터미널 안내방송', voices: { M: 'CA' },
    script: [
      ['M', 'May I have your attention, please. The 10:45 bus to Toronto will depart from Gate 7 instead of Gate 3.'],
      ['M', 'Gate 7 is located at the end of the hallway, past the ticket counters.'],
      ['M', 'Passengers are reminded that each person may bring only one large suitcase on board. Additional bags will be charged a fee.'],
    ],
    ko: ['잠시 안내 말씀드리겠습니다. 토론토행 10시 45분 버스는 3번 게이트 대신 7번 게이트에서 출발합니다.', '7번 게이트는 매표소를 지나 복도 끝에 있습니다.', '승객 1인당 대형 여행 가방은 하나만 실을 수 있습니다. 추가 가방에는 요금이 부과됩니다.'],
    qs: [
      ['What has changed?', ['The departure gate', 'The departure time', 'The destination', 'The ticket price'], 0, '세부 사항', '출발 게이트가 3번에서 7번으로 바뀌었으므로 (A)가 정답.', '무엇이 바뀌었는가?'],
      ['Where is Gate 7?', ['At the end of the hallway', 'Next to the café', 'On the second floor', 'Near the entrance'], 0, '세부 사항', '매표소를 지나 복도 끝에 있다고 했으므로 (A)가 정답.', '7번 게이트는 어디에 있는가?'],
      ['What are passengers reminded about?', ['A luggage limit', 'A no-food rule', 'Seat reservations', 'Ticket refunds'], 0, '세부 사항', '대형 가방은 하나만 가능하다고 했으므로 수하물 제한인 (A)가 정답.', '승객들에게 무엇이 상기되는가?'],
    ] },

  { title: '광고 · 자동차 정비 서비스', voices: { W: 'US' },
    script: [
      ['W', 'Is it time for your car\'s regular checkup? Visit QuickFix Auto Care!'],
      ['W', 'Our certified mechanics can complete an oil change in under thirty minutes, and you can relax in our waiting area with free coffee and Wi-Fi.'],
      ['W', 'This month, mention this ad and receive a free tire check with any service. QuickFix, on the corner of Fifth and Main.'],
    ],
    ko: ['차 정기 점검 받을 때가 됐나요? 퀵픽스 오토 케어로 오세요!', '자격을 갖춘 정비사가 30분 안에 엔진 오일을 교환해 드리고, 대기실에서 무료 커피와 와이파이를 즐기며 쉬실 수 있어요.', '이번 달에 이 광고를 말씀하시면 모든 서비스에 타이어 무료 점검을 해 드려요. 5번가와 메인가 모퉁이의 퀵픽스입니다.'],
    qs: [
      ['What type of business is being advertised?', ['A car repair shop', 'A café', 'A tire factory', 'A car rental company'], 0, '업종', '자동차 정기 점검 서비스 광고이므로 (A)가 정답.', '어떤 업체가 광고되고 있는가?'],
      ['What is available in the waiting area?', ['Free coffee', 'Free snacks', 'Magazines', 'A television'], 0, '세부 사항', '대기실에서 무료 커피와 와이파이를 제공한다고 했으므로 (A)가 정답.', '대기실에서 무엇을 이용할 수 있는가?'],
      ['How can customers get a free tire check?', ['By mentioning the advertisement', 'By paying in cash', 'By booking online', 'By coming on weekends'], 0, '세부 사항', '이 광고를 말하면 무료 타이어 점검이라고 했으므로 (A)가 정답.', '고객은 어떻게 무료 타이어 점검을 받을 수 있는가?'],
    ] },

  { title: '회의 · 부서별 예산 (그래프)', voices: { M: 'UK' },
    graphic: { title: 'Department Budget Increase (%)', rows: [['Department', 'Increase'], ['Marketing', '5%'], ['Research', '12%'], ['Customer Service', '8%'], ['IT', '3%']] },
    script: [
      ['M', 'Let\'s look at next year\'s budget. Every department will receive some increase.'],
      ['M', 'As you can see, the largest increase goes to the department that\'s developing our new medical devices. That\'s our biggest priority this year.'],
      ['M', 'I know some of you were hoping for more. If you\'d like to discuss your department\'s needs, please schedule a meeting with me next week.'],
    ],
    ko: ['내년 예산을 봅시다. 모든 부서가 어느 정도 인상을 받아요.', '보시다시피 가장 큰 인상은 새 의료 기기를 개발하는 부서에 돌아가요. 올해 가장 중요한 우선순위니까요.', '더 기대하신 분들도 있다는 거 알아요. 부서에 필요한 것을 논의하고 싶으면 다음 주에 저와 면담 일정을 잡아 주세요.'],
    qs: [
      ['What is the talk mainly about?', ['A budget', 'A product launch', 'A hiring plan', 'A new office'], 0, '주제', '내년 예산 이야기이므로 (A)가 정답.', '이 담화는 주로 무엇에 관한 것인가?'],
      ['Look at the graphic. Which department develops medical devices?', ['Marketing', 'Research', 'Customer Service', 'IT'], 1, '시각 정보', '가장 큰 인상을 받는 부서가 의료 기기를 개발한다고 했습니다. 표에서 가장 큰 인상은 Research(12%).', '표를 보시오. 어느 부서가 의료 기기를 개발하는가?'],
      ['What does the speaker invite listeners to do?', ['Schedule a meeting', 'Submit a report', 'Reduce spending', 'Join a team'], 0, '제안', '다음 주에 면담 일정을 잡으라고 했으므로 (A)가 정답.', '화자는 듣는 사람들에게 무엇을 하라고 권하는가?'],
    ] },

  { title: '라디오 · 신간 소개', voices: { W: 'CA' },
    script: [
      ['W', 'Welcome back to "Book Talk." Today I\'m excited to tell you about a new novel by local author James Hill.'],
      ['W', 'It\'s called "The Last Harbor," and it tells the story of a fishing village during a difficult winter. It\'s already one of the best-selling books in the region.'],
      ['W', 'Mr. Hill will be signing copies at Corner Bookstore this Saturday afternoon. After the break, I\'ll read a short passage from the book.'],
    ],
    ko: ['"북 토크"에 다시 오신 걸 환영합니다. 오늘은 지역 작가 제임스 힐의 새 소설을 소개하게 되어 기뻐요.', '제목은 "마지막 항구"이고, 힘든 겨울을 보내는 어촌 이야기예요. 이미 이 지역 베스트셀러 중 하나입니다.', '힐 씨는 이번 토요일 오후 코너 서점에서 사인회를 합니다. 광고 후에 책의 짧은 구절을 읽어 드릴게요.'],
    qs: [
      ['What is the speaker mainly discussing?', ['A new novel', 'A fishing trip', 'A film', 'A local festival'], 0, '주제', '새 소설을 소개하고 있으므로 (A)가 정답.', '화자는 주로 무엇에 대해 이야기하는가?'],
      ['What will happen on Saturday?', ['A book signing', 'A movie premiere', 'A writing class', 'A bookstore opening'], 0, '세부 사항', '토요일 오후 서점에서 사인회를 한다고 했으므로 (A)가 정답.', '토요일에 무슨 일이 있는가?'],
      ['What will the speaker do after the break?', ['Read part of a book', 'Interview the author', 'Play some music', 'Announce a contest'], 0, '다음 할 일', '광고 후 책의 짧은 구절을 읽겠다고 했으므로 (A)가 정답.', '화자는 광고 후에 무엇을 할 것인가?'],
    ] },

  { title: '사내 공지 · 새 경비 처리 앱', voices: { M: 'US' },
    script: [
      ['M', 'Hi, everyone. Starting next month, we\'ll be using a new app to submit travel expenses.'],
      ['M', 'Instead of sending paper receipts to accounting, you\'ll simply take a photo of each receipt with your phone.'],
      ['M', 'A short video showing how to use the app has been posted on the company intranet. Please watch it before your next business trip.'],
    ],
    ko: ['안녕하세요, 여러분. 다음 달부터 출장 경비를 제출할 때 새 앱을 사용합니다.', '종이 영수증을 회계팀에 보내는 대신, 휴대전화로 영수증 사진을 찍기만 하면 돼요.', '앱 사용법을 보여 주는 짧은 영상이 회사 인트라넷에 올라가 있어요. 다음 출장 전에 꼭 보세요.'],
    qs: [
      ['What will start next month?', ['A new expense app', 'A travel ban', 'A new accounting team', 'A training trip'], 0, '주제', '출장 경비 제출용 새 앱을 쓴다고 했으므로 (A)가 정답.', '다음 달에 무엇이 시작되는가?'],
      ['What will employees do instead of sending paper receipts?', ['Take photos of receipts', 'Fill out a form', 'E-mail their manager', 'Use a company card'], 0, '세부 사항', '휴대전화로 영수증 사진을 찍는다고 했으므로 (A)가 정답.', '직원들은 종이 영수증을 보내는 대신 무엇을 하는가?'],
      ['What are listeners asked to do?', ['Watch a video', 'Download a form', 'Attend a meeting', 'Call accounting'], 0, '요청', '인트라넷의 영상을 보라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 해 달라는 요청을 받는가?'],
    ] },

  { title: '박물관 오디오 가이드', voices: { W: 'UK' },
    script: [
      ['W', 'Welcome to the Hall of Ancient Ships. In front of you is a wooden boat that was found at the bottom of a lake in 1987.'],
      ['W', 'Scientists believe it is more than two thousand years old, making it one of the oldest boats ever discovered in Europe.'],
      ['W', 'To learn how the boat was lifted out of the lake, press number twelve on your audio guide.'],
    ],
    ko: ['고대 선박관에 오신 걸 환영합니다. 앞에 있는 것은 1987년 호수 바닥에서 발견된 나무배입니다.', '과학자들은 이 배가 2천 년이 넘은 것으로 보고 있으며, 유럽에서 발견된 가장 오래된 배 중 하나입니다.', '배를 호수에서 어떻게 끌어올렸는지 알고 싶으시면 오디오 가이드의 12번을 누르세요.'],
    qs: [
      ['Where was the boat found?', ['At the bottom of a lake', 'In a river', 'On a beach', 'Under a building'], 0, '세부 사항', '호수 바닥에서 발견됐다고 했으므로 (A)가 정답.', '배는 어디에서 발견되었는가?'],
      ['What is said about the boat?', ['It is very old.', 'It is made of metal.', 'It was recently built.', 'It is for sale.'], 0, '세부 사항', '2천 년이 넘었다고 했으므로 (A)가 정답.', '배에 대해 무엇을 말하는가?'],
      ['How can listeners learn more?', ['By pressing a number on an audio guide', 'By asking a guard', 'By reading a sign', 'By visiting a Web site'], 0, '세부 사항', '오디오 가이드의 12번을 누르라고 했으므로 (A)가 정답.', '듣는 사람은 어떻게 더 알아볼 수 있는가?'],
    ] },

  { title: '회의 · 신입 사원 소개', voices: { M: 'AU' },
    script: [
      ['M', 'Before we start, I\'d like to introduce a new member of our team, Sarah Kim.'],
      ['M', 'Sarah joins us from a design firm in Seoul, where she worked on packaging for several major food brands.'],
      ['M', 'She\'ll be leading the redesign of our product labels. Sarah sits next to the window, so please stop by and say hello.'],
    ],
    ko: ['시작하기 전에 우리 팀 새 멤버 세라 킴을 소개하고 싶어요.', '세라는 서울의 디자인 회사에서 왔는데, 그곳에서 여러 주요 식품 브랜드의 포장 디자인을 맡았어요.', '그녀는 우리 제품 라벨 재디자인을 이끌 거예요. 창가 자리에 앉으니 들러서 인사해 주세요.'],
    qs: [
      ['What is the purpose of the talk?', ['To introduce a new employee', 'To announce a promotion', 'To discuss a product', 'To plan a trip to Seoul'], 0, '목적', '새 팀원을 소개하는 내용이므로 (A)가 정답.', '이 담화의 목적은 무엇인가?'],
      ['What did Sarah Kim previously work on?', ['Packaging design', 'Food production', 'Web development', 'Sales'], 0, '세부 사항', '식품 브랜드 포장 디자인을 했다고 했으므로 (A)가 정답.', '세라 킴은 이전에 무엇을 했는가?'],
      ['What will Sarah lead?', ['A label redesign', 'A sales team', 'A training program', 'A new office'], 0, '세부 사항', '제품 라벨 재디자인을 이끈다고 했으므로 (A)가 정답.', '세라는 무엇을 이끌 것인가?'],
    ] },

  { title: '스포츠 경기장 안내방송', voices: { W: 'US' },
    script: [
      ['W', 'Good evening, fans, and welcome to Riverside Stadium for tonight\'s game.'],
      ['W', 'Because of the expected rain, the game will start fifteen minutes early, at six forty-five.'],
      ['W', 'Rain ponchos are available at all food stands for five dollars. Enjoy the game!'],
    ],
    ko: ['팬 여러분, 안녕하세요. 오늘 밤 경기가 열리는 리버사이드 스타디움에 오신 걸 환영합니다.', '비가 예상되어 경기를 15분 일찍, 6시 45분에 시작합니다.', '우비는 모든 매점에서 5달러에 판매합니다. 즐거운 관람 되세요!'],
    qs: [
      ['Where is the announcement being made?', ['At a stadium', 'At a concert hall', 'At an airport', 'At a shopping mall'], 0, '장소', '리버사이드 스타디움에 오신 걸 환영한다고 했으므로 (A)가 정답.', '방송은 어디에서 나오는가?'],
      ['Why will the game start early?', ['Rain is expected.', 'A player is injured.', 'The lights are broken.', 'It will be shown on TV.'], 0, '이유', '비가 예상되어 일찍 시작한다고 했으므로 (A)가 정답.', '경기는 왜 일찍 시작하는가?'],
      ['What is available at the food stands?', ['Rain ponchos', 'Umbrellas', 'Free drinks', 'Team hats'], 0, '세부 사항', '매점에서 우비를 판다고 했으므로 (A)가 정답.', '매점에서 무엇을 살 수 있는가?'],
    ] },

  { title: '워크숍 · 시간 관리', voices: { M: 'CA' },
    script: [
      ['M', 'Thanks for coming to this workshop on time management. I know you\'re all busy, so I\'ll keep it practical.'],
      ['M', 'One simple tip is to check your e-mail only three times a day instead of every few minutes. Many people find this saves them over an hour daily.'],
      ['M', 'Now, I\'d like you to write down the three tasks that take up most of your time. We\'ll discuss them together in a few minutes.'],
    ],
    ko: ['시간 관리 워크숍에 와 주셔서 고마워요. 다들 바쁘신 걸 아니 실용적으로 하겠습니다.', '간단한 팁 하나는 몇 분마다 이메일을 확인하는 대신 하루 세 번만 확인하는 거예요. 많은 분이 이것으로 하루에 한 시간 넘게 절약해요.', '이제 시간을 가장 많이 잡아먹는 일 세 가지를 적어 주세요. 몇 분 후에 함께 이야기해 볼 거예요.'],
    qs: [
      ['What is the workshop about?', ['Time management', 'Writing e-mails', 'Leadership', 'Computer skills'], 0, '주제', '시간 관리 워크숍이므로 (A)가 정답.', '워크숍은 무엇에 관한 것인가?'],
      ['What tip does the speaker give?', ['Check e-mail less often', 'Start work earlier', 'Take more breaks', 'Use a paper calendar'], 0, '세부 사항', '이메일을 하루 세 번만 확인하라고 했으므로 (A)가 정답.', '화자는 어떤 팁을 주는가?'],
      ['What are listeners asked to do next?', ['Write down three tasks', 'Check their e-mail', 'Form small groups', 'Watch a video'], 0, '다음 할 일', '시간을 많이 쓰는 일 세 가지를 적으라고 했으므로 (A)가 정답.', '듣는 사람들은 다음에 무엇을 하라는 요청을 받는가?'],
    ] },
]);
