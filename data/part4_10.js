/* Part 4 · 짧은 담화 추가 묶음 10 (세트 p4-s91 ~ s100, 문제 p4-271 ~ 300) — 직접 창작. 형식은 part3_02.js 참고 (화자 1명)
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(4, 91, 271, [
  { title: '전화 메시지 · 회의 자료 요청', voices: { W: 'US' },
    script: [
      ['W', 'Hi, Jacob. It\'s Linda from the marketing department. I\'m putting together the slides for Monday\'s meeting with the board.'],
      ['W', 'Could you send me the latest customer survey results by tomorrow afternoon? I\'d like to include a chart of them.'],
      ['W', 'If you have any trouble finding them, Mark in research might have a copy. Thanks!'],
    ],
    ko: ['안녕하세요, 제이콥. 마케팅 부서의 린다예요. 월요일 이사회 회의용 슬라이드를 만들고 있어요.', '내일 오후까지 최신 고객 설문 결과를 보내 줄 수 있어요? 그걸로 차트를 넣고 싶어요.', '찾기 어려우면 리서치팀 마크가 사본을 갖고 있을 거예요. 고마워요!'],
    qs: [
      ['What is the speaker preparing?', ['Slides for a meeting', 'A customer survey', 'A marketing budget', 'A training session'], 0, '세부 사항', '이사회 회의용 슬라이드를 만들고 있다고 했으므로 (A)가 정답.', '화자는 무엇을 준비하고 있는가?'],
      ['What does the speaker ask for?', ['Survey results', 'A meeting room', 'A list of board members', 'Sales figures'], 0, '요청', '최신 고객 설문 결과를 보내 달라고 했으므로 (A)가 정답.', '화자는 무엇을 요청하는가?'],
      ['Who might have a copy?', ['Someone in research', 'A board member', 'The speaker\'s manager', 'A customer'], 0, '세부 사항', '리서치팀 마크가 사본을 갖고 있을 수 있다고 했으므로 (A)가 정답.', '누가 사본을 갖고 있을 수 있는가?'],
    ] },

  { title: '호텔 안내방송 · 화재 경보 점검', voices: { M: 'AU' },
    script: [
      ['M', 'Good morning, guests. This is a message from the front desk.'],
      ['M', 'Between ten and eleven this morning, we\'ll be testing the fire alarm system. You may hear the alarm several times during this period.'],
      ['M', 'There is no need to leave the building during the test. We apologize for any disturbance.'],
    ],
    ko: ['투숙객 여러분, 좋은 아침입니다. 프런트에서 알려 드립니다.', '오늘 오전 10시부터 11시 사이에 화재 경보 시스템을 점검합니다. 이 시간 동안 경보음이 여러 번 울릴 수 있습니다.', '점검 중에 건물 밖으로 나가실 필요는 없습니다. 소란을 드려 죄송합니다.'],
    qs: [
      ['What will happen between ten and eleven?', ['A fire alarm test', 'A fire drill', 'Room cleaning', 'A power outage'], 0, '주제', '화재 경보 시스템 점검을 한다고 했으므로 (A)가 정답.', '10시부터 11시 사이에 무슨 일이 있는가?'],
      ['What might guests hear?', ['An alarm', 'Construction noise', 'Music', 'Announcements every minute'], 0, '세부 사항', '경보음이 여러 번 울릴 수 있다고 했으므로 (A)가 정답.', '투숙객은 무엇을 듣게 될 수 있는가?'],
      ['What are guests told?', ['They do not need to leave.', 'They must go outside.', 'They should check out early.', 'They should call the desk.'], 0, '세부 사항', '건물 밖으로 나갈 필요가 없다고 했으므로 (A)가 정답.', '투숙객에게 무엇이라고 안내하는가?'],
    ] },

  { title: '광고 · 동물 병원', voices: { W: 'CA' },
    script: [
      ['W', 'Your pets deserve the best care. At Happy Paws Animal Clinic, our experienced vets treat dogs, cats, and small animals.'],
      ['W', 'We\'re now open on Sundays, and we offer an emergency service twenty-four hours a day.'],
      ['W', 'New patients receive a free health checkup on their first visit. Call today to make an appointment.'],
    ],
    ko: ['반려동물은 최고의 돌봄을 받아야 합니다. 해피 포즈 동물 병원의 경험 많은 수의사가 개, 고양이, 소동물을 진료합니다.', '이제 일요일에도 문을 열고, 24시간 응급 진료를 제공합니다.', '처음 오시는 동물은 첫 방문 때 무료 건강 검진을 받습니다. 오늘 전화해서 예약하세요.'],
    qs: [
      ['What is being advertised?', ['An animal clinic', 'A pet store', 'A dog training school', 'A pet hotel'], 0, '주제', '동물 병원 광고이므로 (A)가 정답.', '무엇이 광고되고 있는가?'],
      ['What change is mentioned?', ['The business is now open on Sundays.', 'Prices have been lowered.', 'A new vet has joined.', 'The clinic has moved.'], 0, '세부 사항', '이제 일요일에도 연다고 했으므로 (A)가 정답.', '어떤 변화가 언급되는가?'],
      ['What do new patients receive?', ['A free checkup', 'A free toy', 'A discount on food', 'Free vaccinations'], 0, '세부 사항', '첫 방문 때 무료 건강 검진을 받는다고 했으므로 (A)가 정답.', '새 환자는 무엇을 받는가?'],
    ] },

  { title: '회의 · 사무실 이전 층 배치 (표)', voices: { M: 'UK' },
    graphic: { title: 'New Office – Floor Plan', rows: [['Floor', 'Department'], ['2', 'Customer Service'], ['3', 'Sales'], ['4', 'Marketing'], ['5', 'Accounting']] },
    script: [
      ['M', 'As you know, we\'re moving to the new building at the end of the month. Here\'s where each department will be.'],
      ['M', 'Our team will be on the floor directly above the sales team, which means we\'ll be closer to the designers we work with every day.'],
      ['M', 'Movers will come on Friday afternoon, so please have your desks packed by noon that day.'],
    ],
    ko: ['아시다시피 이달 말에 새 건물로 이사해요. 부서별 위치는 이래요.', '우리 팀은 영업팀 바로 위층이라서, 매일 함께 일하는 디자이너들과 더 가까워져요.', '이삿짐 업체가 금요일 오후에 오니, 그날 정오까지 책상 짐을 싸 주세요.'],
    qs: [
      ['What is the talk mainly about?', ['An office move', 'A new design project', 'A sales report', 'A hiring plan'], 0, '주제', '새 건물로 이사하는 이야기이므로 (A)가 정답.', '이 담화는 주로 무엇에 관한 것인가?'],
      ['Look at the graphic. Which department does the speaker most likely work in?', ['Customer Service', 'Sales', 'Marketing', 'Accounting'], 2, '시각 정보', '영업팀(3층) 바로 위층이라고 했으므로 4층 Marketing입니다. 디자이너와 일한다는 말도 단서.', '표를 보시오. 화자는 어느 부서에서 일할 것 같은가?'],
      ['What should listeners do by noon on Friday?', ['Pack their desks', 'Visit the new building', 'Return their keys', 'Clean the kitchen'], 0, '요청', '금요일 정오까지 책상 짐을 싸라고 했으므로 (A)가 정답.', '듣는 사람들은 금요일 정오까지 무엇을 해야 하는가?'],
    ] },

  { title: '뉴스 · 신규 항공 노선', voices: { W: 'AU' },
    script: [
      ['W', 'In travel news, Sky Bridge Airlines announced today that it will begin direct flights between Seattle and Seoul this spring.'],
      ['W', 'The flights will operate four times a week, and introductory fares start at just four hundred dollars one way.'],
      ['W', 'Tickets go on sale this Friday on the airline\'s Web site.'],
    ],
    ko: ['여행 소식입니다. 스카이 브리지 항공은 오늘 이번 봄부터 시애틀과 서울 간 직항편을 운항한다고 발표했습니다.', '항공편은 주 4회 운항하며, 출시 기념 요금은 편도 400달러부터 시작합니다.', '표는 이번 금요일 항공사 웹사이트에서 판매를 시작합니다.'],
    qs: [
      ['What did the airline announce?', ['A new direct route', 'A new airport', 'Higher fares', 'A canceled route'], 0, '주제', '시애틀-서울 직항편을 시작한다고 했으므로 (A)가 정답.', '항공사는 무엇을 발표했는가?'],
      ['How often will the flights operate?', ['Four times a week', 'Every day', 'Twice a week', 'Once a week'], 0, '세부 사항', '주 4회 운항한다고 했으므로 (A)가 정답.', '항공편은 얼마나 자주 운항하는가?'],
      ['When will tickets go on sale?', ['This Friday', 'Today', 'Next month', 'This spring'], 0, '세부 사항', '이번 금요일에 판매를 시작한다고 했으므로 (A)가 정답.', '표는 언제 판매를 시작하는가?'],
    ] },

  { title: '사내 교육 · 새 직원 오리엔테이션', voices: { M: 'US' },
    script: [
      ['M', 'Welcome to your first day at Greenleaf Foods. I\'m Tom, and I\'ll be guiding you through orientation today.'],
      ['M', 'This morning, you\'ll get your ID cards and set up your computers. After lunch, each of you will meet your team and your manager.'],
      ['M', 'Your welcome packets include a map of the building and a list of important phone numbers. Please keep them handy.'],
    ],
    ko: ['그린리프 푸드 첫 출근을 환영합니다. 저는 톰이고, 오늘 오리엔테이션을 안내할게요.', '오전에는 사원증을 받고 컴퓨터를 설정합니다. 점심 후에는 각자 팀과 매니저를 만나요.', '환영 꾸러미에 건물 지도와 주요 전화번호 목록이 들어 있어요. 가까이 두세요.'],
    qs: [
      ['Who most likely are the listeners?', ['New employees', 'Visitors', 'Managers', 'Customers'], 0, '청자', '첫 출근을 환영한다고 했으므로 신입 사원입니다. (A)가 정답.', '듣는 사람들은 누구일 것 같은가?'],
      ['What will listeners do after lunch?', ['Meet their teams', 'Get ID cards', 'Set up computers', 'Take a test'], 0, '세부 사항', '점심 후 팀과 매니저를 만난다고 했으므로 (A)가 정답.', '듣는 사람들은 점심 후에 무엇을 하는가?'],
      ['What is included in the welcome packets?', ['A building map', 'A uniform', 'A laptop', 'A meal coupon'], 0, '세부 사항', '건물 지도와 전화번호 목록이 있다고 했으므로 (A)가 정답.', '환영 꾸러미에 무엇이 들어 있는가?'],
    ] },

  { title: '전화 자동 안내 · 약국', voices: { W: 'UK' },
    script: [
      ['W', 'Thank you for calling Main Street Pharmacy. Our pharmacy is open from eight a.m. to eight p.m. every day.'],
      ['W', 'To refill a prescription, press 1 and enter your prescription number. Refills are usually ready within two hours.'],
      ['W', 'To speak with a pharmacist, press 2. For store hours and directions, press 3.'],
    ],
    ko: ['메인가 약국에 전화해 주셔서 감사합니다. 저희 약국은 매일 오전 8시부터 오후 8시까지 엽니다.', '처방약을 다시 받으시려면 1번을 누르고 처방전 번호를 입력하세요. 보통 두 시간 안에 준비됩니다.', '약사와 통화하시려면 2번, 운영 시간과 오시는 길은 3번을 누르세요.'],
    qs: [
      ['What are the pharmacy\'s hours?', ['8 A.M. to 8 P.M.', '9 A.M. to 9 P.M.', '24 hours', '8 A.M. to 6 P.M.'], 0, '세부 사항', '매일 오전 8시부터 오후 8시라고 했으므로 (A)가 정답.', '약국 운영 시간은 언제인가?'],
      ['How long does a refill usually take?', ['Within two hours', 'One day', 'Thirty minutes', 'Three days'], 0, '세부 사항', '보통 두 시간 안에 준비된다고 했으므로 (A)가 정답.', '처방약을 다시 받는 데 보통 얼마나 걸리는가?'],
      ['What should callers do to speak with a pharmacist?', ['Press 2', 'Press 1', 'Press 3', 'Stay on the line'], 0, '세부 사항', '약사와 통화하려면 2번이라고 했으므로 (A)가 정답.', '약사와 통화하려면 어떻게 해야 하는가?'],
    ] },

  { title: '회의 · 고객 서비스 개선', voices: { M: 'CA' },
    script: [
      ['M', 'I\'d like to share some feedback from our customers. Many of them said our Web site is hard to use on mobile phones.'],
      ['M', 'Since more than half of our orders now come from phones, this is a serious issue.'],
      ['M', 'Our IT team will start redesigning the mobile site next week. In the meantime, if customers call with problems, please help them place their orders by phone.'],
    ],
    ko: ['고객 의견을 공유하고 싶어요. 많은 고객이 우리 웹사이트가 휴대전화로 쓰기 어렵다고 했어요.', '이제 주문의 절반 이상이 휴대전화로 들어오니 심각한 문제예요.', 'IT팀이 다음 주부터 모바일 사이트를 다시 디자인할 거예요. 그동안 고객이 문제로 전화하면 전화로 주문하도록 도와주세요.'],
    qs: [
      ['What did customers complain about?', ['The mobile Web site', 'Delivery times', 'Product quality', 'Phone wait times'], 0, '문제점', '웹사이트가 휴대전화로 쓰기 어렵다고 했으므로 (A)가 정답.', '고객들은 무엇에 대해 불평했는가?'],
      ['Why does the speaker say the issue is serious?', ['Many orders come from phones.', 'The site was expensive.', 'Sales have dropped.', 'A competitor is growing.'], 0, '이유', '주문의 절반 이상이 휴대전화로 온다고 했으므로 (A)가 정답.', '화자는 왜 이 문제가 심각하다고 하는가?'],
      ['What are listeners asked to do?', ['Help customers order by phone', 'Redesign the Web site', 'Survey customers', 'Lower prices'], 0, '요청', '전화로 주문하도록 도와 달라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 해 달라는 요청을 받는가?'],
    ] },

  { title: '투어 · 역사적 저택', voices: { W: 'US' },
    script: [
      ['W', 'Welcome to Whitfield House, built in 1850 by the wealthy Whitfield family.'],
      ['W', 'Most of the furniture you\'ll see today is original. The family\'s piano in the music room is one of the oldest in the country.'],
      ['W', 'Please don\'t touch any of the furniture. At the end of the tour, you\'re welcome to relax in the garden, which is famous for its roses.'],
    ],
    ko: ['1850년 부유한 휘트필드 가문이 지은 휘트필드 저택에 오신 걸 환영합니다.', '오늘 보실 가구는 대부분 원래 것입니다. 음악실에 있는 가문의 피아노는 국내에서 가장 오래된 피아노 중 하나예요.', '가구는 만지지 말아 주세요. 투어가 끝나면 장미로 유명한 정원에서 편히 쉬셔도 됩니다.'],
    qs: [
      ['When was Whitfield House built?', ['In 1850', 'In 1950', 'In 1805', 'In 1880'], 0, '세부 사항', '1850년에 지어졌다고 했으므로 (A)가 정답.', '휘트필드 저택은 언제 지어졌는가?'],
      ['What is mentioned about the piano?', ['It is very old.', 'It can be played by visitors.', 'It was recently bought.', 'It is in the garden.'], 0, '세부 사항', '국내에서 가장 오래된 피아노 중 하나라고 했으므로 (A)가 정답.', '피아노에 대해 무엇이 언급되는가?'],
      ['What is the garden famous for?', ['Roses', 'Fountains', 'Old trees', 'Statues'], 0, '세부 사항', '장미로 유명하다고 했으므로 (A)가 정답.', '정원은 무엇으로 유명한가?'],
    ] },

  { title: '연설 · 은퇴 기념', voices: { M: 'AU' },
    script: [
      ['M', 'Thank you all for coming to celebrate Margaret Hill\'s retirement. Margaret has worked at our company for thirty-two years.'],
      ['M', 'She started as a receptionist and went on to become our director of customer relations. Many of our longtime clients still ask for her by name.'],
      ['M', 'Margaret, we\'ll miss you. Now, please join me in raising a glass to her.'],
    ],
    ko: ['마거릿 힐의 은퇴를 축하하러 와 주셔서 모두 감사합니다. 마거릿은 우리 회사에서 32년 동안 일했습니다.', '그녀는 안내원으로 시작해서 고객 관계 이사가 되었습니다. 오래된 고객들 중 많은 분이 아직도 그녀의 이름을 찾습니다.', '마거릿, 보고 싶을 거예요. 이제 모두 함께 그녀를 위해 건배해 주세요.'],
    qs: [
      ['What is the purpose of the event?', ['To celebrate a retirement', 'To welcome a new director', 'To thank clients', 'To announce a promotion'], 0, '목적', '마거릿 힐의 은퇴를 축하하는 자리이므로 (A)가 정답.', '행사의 목적은 무엇인가?'],
      ['What was Margaret Hill\'s first job at the company?', ['Receptionist', 'Director', 'Sales manager', 'Accountant'], 0, '세부 사항', '안내원으로 시작했다고 했으므로 (A)가 정답.', '마거릿 힐의 회사 첫 직무는 무엇이었는가?'],
      ['What will the listeners do next?', ['Make a toast', 'Watch a video', 'Give speeches', 'Eat dinner'], 0, '다음 할 일', '함께 건배하자고 했으므로 (A)가 정답.', '듣는 사람들은 다음에 무엇을 할 것인가?'],
    ] },
]);
