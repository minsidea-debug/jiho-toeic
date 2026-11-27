/* Part 4 · 짧은 담화 추가 묶음 09 (세트 p4-s81 ~ s90, 문제 p4-241 ~ 270) — 직접 창작. 형식은 part3_02.js 참고 (화자 1명)
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(4, 81, 241, [
  { title: '전화 메시지 · 렌터카 반납 연장', voices: { M: 'CA' },
    script: [
      ['M', 'Hi, this message is for Ms. Thompson. This is Paul from Coastline Car Rental.'],
      ['M', 'You asked to keep the car for two more days. That\'s no problem, and the daily rate will stay the same.'],
      ['M', 'Please return the car to our airport office by noon on Friday. If you\'ll be later than that, just give us a call.'],
    ],
    ko: ['안녕하세요, 톰슨 씨께 남기는 메시지예요. 코스트라인 렌터카의 폴입니다.', '차를 이틀 더 쓰고 싶다고 하셨죠. 문제없고, 하루 요금도 그대로예요.', '금요일 정오까지 공항 사무소로 반납해 주세요. 그보다 늦으시면 전화만 주세요.'],
    qs: [
      ['What did the listener request?', ['To keep a rental car longer', 'To change cars', 'To get a refund', 'To rent a bigger car'], 0, '목적', '차를 이틀 더 쓰고 싶다고 했으므로 (A)가 정답.', '듣는 사람은 무엇을 요청했는가?'],
      ['What does the speaker say about the daily rate?', ['It will not change.', 'It will increase.', 'It will be discounted.', 'It includes insurance.'], 0, '세부 사항', '하루 요금이 그대로라고 했으므로 (A)가 정답.', '화자는 하루 요금에 대해 무엇을 말하는가?'],
      ['Where should the car be returned?', ['To the airport office', 'To the downtown office', 'To a hotel', 'To a gas station'], 0, '세부 사항', '공항 사무소로 반납하라고 했으므로 (A)가 정답.', '차는 어디로 반납해야 하는가?'],
    ] },

  { title: '공항 안내방송 · 보안 검색', voices: { W: 'UK' },
    script: [
      ['W', 'Attention, passengers. Due to heavy traffic this morning, wait times at security checkpoint A are over forty minutes.'],
      ['W', 'Checkpoint C, located near the food court, currently has much shorter lines.'],
      ['W', 'Please have your boarding pass and ID ready, and remove laptops from your bags before reaching the screening area.'],
    ],
    ko: ['승객 여러분께 알려 드립니다. 오늘 아침 이용객이 많아 A 보안 검색대 대기 시간이 40분이 넘습니다.', '푸드 코트 근처에 있는 C 검색대는 현재 줄이 훨씬 짧습니다.', '탑승권과 신분증을 준비하시고, 검색 구역에 도착하기 전에 가방에서 노트북을 꺼내 주세요.'],
    qs: [
      ['What problem is mentioned?', ['Long wait times at a checkpoint', 'A canceled flight', 'A closed food court', 'Lost baggage'], 0, '문제점', 'A 검색대 대기 시간이 40분이 넘는다고 했으므로 (A)가 정답.', '어떤 문제가 언급되는가?'],
      ['Where is checkpoint C?', ['Near the food court', 'Next to Gate 1', 'On the second floor', 'At the entrance'], 0, '세부 사항', '푸드 코트 근처라고 했으므로 (A)가 정답.', 'C 검색대는 어디에 있는가?'],
      ['What are passengers asked to do?', ['Remove laptops from their bags', 'Arrive three hours early', 'Check their bags', 'Show their tickets at the gate'], 0, '요청', '노트북을 가방에서 꺼내라고 했으므로 (A)가 정답.', '승객들은 무엇을 해 달라는 요청을 받는가?'],
    ] },

  { title: '광고 · 안경점', voices: { M: 'AU' },
    script: [
      ['M', 'Need new glasses? Come to Clear View Optics, where we have over five hundred styles of frames to choose from.'],
      ['M', 'Our eye doctors offer same-day eye exams, and most glasses are ready in just one hour.'],
      ['M', 'This month, get a second pair of glasses at half price. Clear View Optics, located inside Lakeside Mall.'],
    ],
    ko: ['새 안경이 필요하세요? 500가지가 넘는 테를 고를 수 있는 클리어 뷰 안경점으로 오세요.', '안과 의사가 당일 시력 검사를 해 드리고, 대부분 안경은 한 시간이면 완성됩니다.', '이번 달에는 두 번째 안경을 반값에 드립니다. 레이크사이드 몰 안에 있는 클리어 뷰 안경점입니다.'],
    qs: [
      ['What kind of business is being advertised?', ['An eyeglasses store', 'A shopping mall', 'A hospital', 'A camera shop'], 0, '업종', '안경점 광고이므로 (A)가 정답.', '어떤 업체가 광고되고 있는가?'],
      ['How long does it take to make most glasses?', ['One hour', 'One day', 'One week', 'Thirty minutes'], 0, '세부 사항', '대부분 한 시간이면 완성된다고 했으므로 (A)가 정답.', '대부분의 안경을 만드는 데 얼마나 걸리는가?'],
      ['What is offered this month?', ['A second pair at half price', 'Free eye exams', 'Free frames', 'A free case'], 0, '세부 사항', '두 번째 안경을 반값에 준다고 했으므로 (A)가 정답.', '이번 달에 무엇이 제공되는가?'],
    ] },

  { title: '사내 공지 · 교육 강좌 (표)', voices: { W: 'US' },
    graphic: { title: 'Training Courses – October', rows: [['Course', 'Day'], ['Presentation Skills', 'Oct. 4'], ['Project Management', 'Oct. 11'], ['Business Writing', 'Oct. 18'], ['Data Analysis', 'Oct. 25']] },
    script: [
      ['W', 'Hi, everyone. The October training schedule has been posted. Each course is free, but space is limited to twenty people.'],
      ['W', 'Please note that the instructor for the writing course is unavailable on the original date, so that course has been moved to November first.'],
      ['W', 'To register, send an e-mail to the training team with the name of the course.'],
    ],
    ko: ['안녕하세요, 여러분. 10월 교육 일정이 게시됐어요. 모든 강좌는 무료지만 정원이 20명으로 제한돼요.', '글쓰기 강좌 강사가 원래 날짜에 시간이 안 돼서 그 강좌는 11월 1일로 옮겨졌다는 점 유의해 주세요.', '등록하려면 교육팀에 강좌 이름을 적어 이메일을 보내 주세요.'],
    qs: [
      ['What is said about the courses?', ['Space is limited.', 'They cost money.', 'They are online only.', 'They are mandatory.'], 0, '세부 사항', '정원이 20명으로 제한된다고 했으므로 (A)가 정답.', '강좌에 대해 무엇을 말하는가?'],
      ['Look at the graphic. Which date is no longer correct?', ['Oct. 4', 'Oct. 11', 'Oct. 18', 'Oct. 25'], 2, '시각 정보', '글쓰기 강좌(Business Writing)가 11월 1일로 옮겨졌으므로 Oct. 18이 더 이상 맞지 않습니다.', '표를 보시오. 어느 날짜가 더 이상 맞지 않는가?'],
      ['How can listeners register?', ['By sending an e-mail', 'By calling the instructor', 'By filling out a paper form', 'By visiting the HR office'], 0, '세부 사항', '교육팀에 이메일을 보내라고 했으므로 (A)가 정답.', '듣는 사람들은 어떻게 등록할 수 있는가?'],
    ] },

  { title: '뉴스 · 대중교통 요금 인상', voices: { M: 'UK' },
    script: [
      ['M', 'Starting next month, bus and subway fares in the city will increase by twenty-five cents.'],
      ['M', 'City officials say the extra money will be used to buy new electric buses and extend subway service later at night.'],
      ['M', 'However, fares for students and senior citizens will not change.'],
    ],
    ko: ['다음 달부터 시내 버스와 지하철 요금이 25센트 오릅니다.', '시 관계자들은 늘어난 수입을 새 전기 버스 구입과 심야 지하철 운행 연장에 쓰겠다고 밝혔습니다.', '다만 학생과 노인 요금은 바뀌지 않습니다.'],
    qs: [
      ['What will happen next month?', ['Fares will increase.', 'A new subway line will open.', 'Buses will stop running at night.', 'Parking fees will rise.'], 0, '주제', '버스·지하철 요금이 오른다고 했으므로 (A)가 정답.', '다음 달에 무슨 일이 있는가?'],
      ['How will the extra money be used?', ['To buy electric buses', 'To build parking lots', 'To hire more drivers', 'To repair roads'], 0, '세부 사항', '새 전기 버스 구입 등에 쓴다고 했으므로 (A)가 정답.', '늘어난 수입은 어떻게 쓰이는가?'],
      ['Who will not be affected by the change?', ['Students and seniors', 'Bus drivers', 'Tourists', 'Car owners'], 0, '세부 사항', '학생과 노인 요금은 바뀌지 않는다고 했으므로 (A)가 정답.', '누가 이 변경의 영향을 받지 않는가?'],
    ] },

  { title: '회의 · 신규 고객 확보', voices: { W: 'CA' },
    script: [
      ['W', 'I have exciting news. We\'ve just signed a contract to provide office cleaning services for all five buildings of Delta Bank.'],
      ['W', 'This is our largest contract ever, and the work begins in three weeks.'],
      ['W', 'We\'ll need to hire about twenty new cleaners, so if you know anyone looking for work, please encourage them to apply on our Web site.'],
    ],
    ko: ['신나는 소식이 있어요. 델타 은행 건물 다섯 곳 전체의 사무실 청소 서비스 계약을 방금 맺었어요.', '지금까지 중 가장 큰 계약이고, 작업은 3주 후에 시작돼요.', '청소 직원을 20명 정도 새로 뽑아야 하니, 일자리를 찾는 분을 아시면 웹사이트에서 지원하라고 권해 주세요.'],
    qs: [
      ['What type of business does the speaker work for?', ['A cleaning company', 'A bank', 'A construction company', 'A staffing agency'], 0, '업종', '사무실 청소 서비스를 제공하는 회사이므로 (A)가 정답.', '화자는 어떤 업체에서 일하는가?'],
      ['When will the new work begin?', ['In three weeks', 'Next week', 'Tomorrow', 'In five weeks'], 0, '세부 사항', '3주 후에 시작한다고 했으므로 (A)가 정답.', '새 작업은 언제 시작하는가?'],
      ['What are listeners asked to do?', ['Encourage people to apply for jobs', 'Visit the bank', 'Work extra hours', 'Buy cleaning supplies'], 0, '요청', '일자리를 찾는 사람에게 지원을 권해 달라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 해 달라는 요청을 받는가?'],
    ] },

  { title: '가이드 · 동물원 관람', voices: { M: 'US' },
    script: [
      ['M', 'Welcome to the City Zoo. My name is Kevin, and I\'ll be leading this morning\'s tour.'],
      ['M', 'We\'ll start at the elephant house, where you can watch the keepers give the elephants their breakfast.'],
      ['M', 'Please don\'t feed any of the animals yourself. Their diets are carefully planned by our staff.'],
    ],
    ko: ['시립 동물원에 오신 걸 환영합니다. 저는 케빈이고 오늘 오전 투어를 진행하겠습니다.', '코끼리 사육장에서 시작하는데, 사육사들이 코끼리에게 아침을 주는 걸 보실 수 있어요.', '동물에게 직접 먹이를 주지 마세요. 먹이는 직원들이 신중하게 계획합니다.'],
    qs: [
      ['Where does the tour start?', ['At the elephant house', 'At the main gate', 'At the gift shop', 'At the bird area'], 0, '세부 사항', '코끼리 사육장에서 시작한다고 했으므로 (A)가 정답.', '투어는 어디에서 시작하는가?'],
      ['What can listeners watch first?', ['Animals being fed', 'A movie', 'A bird show', 'Keepers cleaning cages'], 0, '세부 사항', '사육사가 코끼리에게 아침을 주는 걸 본다고 했으므로 (A)가 정답.', '듣는 사람들은 먼저 무엇을 볼 수 있는가?'],
      ['What are listeners asked not to do?', ['Feed the animals', 'Take photos', 'Leave the group', 'Touch the glass'], 0, '요청', '동물에게 직접 먹이를 주지 말라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 하지 말라는 요청을 받는가?'],
    ] },

  { title: '회의 · 프린터 사용 정책', voices: { W: 'AU' },
    script: [
      ['W', 'I want to talk about printing. Our paper costs went up thirty percent last quarter.'],
      ['W', 'From now on, the printers will be set to print on both sides of the page automatically.'],
      ['W', 'Also, please think before you print. Most documents can be shared on screen during meetings instead.'],
    ],
    ko: ['인쇄에 대해 이야기하고 싶어요. 지난 분기 종이 비용이 30퍼센트 늘었어요.', '이제부터 프린터는 자동으로 양면 인쇄되도록 설정됩니다.', '그리고 인쇄하기 전에 한 번 생각해 주세요. 대부분 문서는 회의 때 화면으로 공유할 수 있어요.'],
    qs: [
      ['What problem does the speaker mention?', ['Paper costs have increased.', 'The printers are broken.', 'Documents were lost.', 'Meetings are too long.'], 0, '문제점', '종이 비용이 30퍼센트 늘었다고 했으므로 (A)가 정답.', '화자는 어떤 문제를 언급하는가?'],
      ['What change will be made to the printers?', ['They will print on both sides.', 'They will be replaced.', 'They will require a password.', 'They will print in black only.'], 0, '세부 사항', '자동 양면 인쇄로 설정된다고 했으므로 (A)가 정답.', '프린터에 어떤 변경이 생기는가?'],
      ['What does the speaker suggest?', ['Sharing documents on screen', 'Buying cheaper paper', 'Printing at home', 'Using fewer meetings'], 0, '제안', '회의 때 화면으로 공유하라고 했으므로 (A)가 정답.', '화자는 무엇을 제안하는가?'],
    ] },

  { title: '라디오 인터뷰 소개 · 창업가', voices: { M: 'CA' },
    script: [
      ['M', 'You\'re listening to "Business Today." My guest this afternoon is Rachel Green, who started a company that makes furniture from recycled plastic.'],
      ['M', 'Her products are now sold in over two hundred stores, and she was recently named Young Entrepreneur of the Year.'],
      ['M', 'Rachel, thanks for being here. Tell us how you came up with the idea.'],
    ],
    ko: ['"비즈니스 투데이"를 듣고 계십니다. 오늘 오후 게스트는 재활용 플라스틱으로 가구를 만드는 회사를 창업한 레이첼 그린 씨입니다.', '그녀의 제품은 이제 200개가 넘는 매장에서 팔리고, 최근 올해의 젊은 기업가로 선정됐습니다.', '레이첼, 나와 주셔서 고마워요. 어떻게 그 아이디어를 떠올렸는지 말씀해 주세요.'],
    qs: [
      ['What does Rachel Green\'s company make?', ['Furniture from recycled plastic', 'Plastic bottles', 'Office supplies', 'Clothing'], 0, '세부 사항', '재활용 플라스틱으로 가구를 만든다고 했으므로 (A)가 정답.', '레이첼 그린의 회사는 무엇을 만드는가?'],
      ['What recently happened to Ms. Green?', ['She received an award.', 'She opened a factory.', 'She wrote a book.', 'She sold her company.'], 0, '세부 사항', '올해의 젊은 기업가로 선정됐다고 했으므로 (A)가 정답.', '그린 씨에게 최근 무슨 일이 있었는가?'],
      ['What will Ms. Green most likely talk about next?', ['How she got her business idea', 'Her plans for retirement', 'Store locations', 'Product prices'], 0, '다음 할 일', '아이디어를 어떻게 떠올렸는지 말해 달라고 했으므로 (A)가 정답.', '그린 씨는 다음에 무엇에 대해 이야기할 것 같은가?'],
    ] },

  { title: '사내 공지 · 정전 예정', voices: { W: 'UK' },
    script: [
      ['W', 'Hello, everyone. The power company will be doing repair work in our area this Thursday night.'],
      ['W', 'The electricity in our building will be off from eleven p.m. until four a.m.'],
      ['W', 'Before you leave on Thursday, please shut down your computers completely and unplug any personal devices.'],
    ],
    ko: ['안녕하세요, 여러분. 이번 목요일 밤 전력 회사가 우리 지역에서 보수 작업을 합니다.', '건물 전기가 밤 11시부터 새벽 4시까지 끊깁니다.', '목요일 퇴근 전에 컴퓨터를 완전히 끄고 개인 기기 플러그를 뽑아 주세요.'],
    qs: [
      ['What will happen on Thursday night?', ['The power will be turned off.', 'The building will be cleaned.', 'New computers will be installed.', 'A party will be held.'], 0, '주제', '전기가 끊긴다고 했으므로 (A)가 정답.', '목요일 밤에 무슨 일이 있는가?'],
      ['Why will this happen?', ['Repair work by the power company', 'A building inspection', 'A holiday', 'An office move'], 0, '이유', '전력 회사가 보수 작업을 한다고 했으므로 (A)가 정답.', '왜 이런 일이 일어나는가?'],
      ['What are listeners asked to do?', ['Shut down their computers', 'Work from home', 'Stay late', 'Save files to paper'], 0, '요청', '컴퓨터를 완전히 끄라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 해 달라는 요청을 받는가?'],
    ] },
]);
