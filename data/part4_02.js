/* Part 4 · 짧은 담화 추가 묶음 02 (세트 p4-s11 ~ s20, 문제 p4-031 ~ 060) — 직접 창작. 형식은 part3_02.js 참고 (화자 1명)
   ※ 세트 순서를 바꾸거나 중간에 끼워 넣지 말 것 (ID = 순서) */
LC.talks(4, 11, 31, [
  { title: '전화 메시지 · 치과 예약 변경', voices: { W: 'UK' },
    script: [
      ['W', 'Hello, this message is for Mr. David Chen. This is Amy calling from Brightsmile Dental Clinic.'],
      ['W', 'Dr. Morris has to attend a conference on Thursday, so we need to reschedule your cleaning appointment.'],
      ['W', 'We have openings on Friday at nine or Monday at three. Please call us back at 555-0147 to let us know which time you prefer.'],
    ],
    ko: ['안녕하세요, 데이비드 첸 씨께 남기는 메시지예요. 브라이트스마일 치과의 에이미입니다.', '모리스 선생님이 목요일에 학회에 참석하셔야 해서 스케일링 예약을 다시 잡아야 해요.', '금요일 9시나 월요일 3시에 자리가 있어요. 555-0147로 전화 주셔서 어느 시간이 좋은지 알려 주세요.'],
    qs: [
      ['Why is the speaker calling?', ['To reschedule an appointment', 'To confirm a payment', 'To recommend a dentist', 'To announce a new service'], 0, '목적', '예약을 다시 잡아야 한다고 했으므로 (A)가 정답.', '화자는 왜 전화하는가?'],
      ['Why is Dr. Morris unavailable on Thursday?', ['She is attending a conference.', 'She is on vacation.', 'She is sick.', 'The clinic is closed.'], 0, '이유', '목요일에 학회에 참석해야 한다고 했으므로 (A)가 정답.', '모리스 선생님은 왜 목요일에 시간이 안 되는가?'],
      ['What is the listener asked to do?', ['Call the clinic back', 'Send an e-mail', 'Come in on Thursday', 'Fill out a form'], 0, '요청', '전화로 원하는 시간을 알려 달라고 했으므로 (A)가 정답.', '듣는 사람은 무엇을 해 달라는 요청을 받는가?'],
    ] },

  { title: '기차역 안내방송 · 열차 지연', voices: { M: 'US' },
    script: [
      ['M', 'Attention, passengers waiting for the 8:15 express train to Boston.'],
      ['M', 'Due to a signal problem near Hartford, this train will be delayed by approximately thirty minutes.'],
      ['M', 'Passengers who need to arrive in Boston earlier may take the local train departing from Platform 4 at 8:20. Your tickets will be accepted on that train.'],
    ],
    ko: ['보스턴행 8시 15분 급행열차를 기다리시는 승객 여러분께 알려 드립니다.', '하트퍼드 근처 신호 문제로 이 열차는 약 30분 지연됩니다.', '보스턴에 더 일찍 도착해야 하는 승객은 4번 승강장에서 8시 20분에 출발하는 완행열차를 이용하셔도 됩니다. 가지고 계신 승차권으로 탑승하실 수 있습니다.'],
    qs: [
      ['What is the cause of the delay?', ['A signal problem', 'Bad weather', 'A staff shortage', 'Track repairs'], 0, '이유', '신호 문제 때문이라고 했으므로 (A)가 정답.', '지연의 원인은 무엇인가?'],
      ['How long is the delay expected to be?', ['About thirty minutes', 'About fifteen minutes', 'About an hour', 'About two hours'], 0, '세부 사항', '약 30분 지연된다고 했으므로 (A)가 정답.', '지연은 얼마나 될 것으로 예상되는가?'],
      ['What are some listeners allowed to do?', ['Use their tickets on another train', 'Get a full refund', 'Wait in a lounge', 'Take a free bus'], 0, '세부 사항', '완행열차에서도 승차권을 쓸 수 있다고 했으므로 (A)가 정답.', '일부 승객은 무엇을 할 수 있는가?'],
    ] },

  { title: '광고 · 가정용 청소 서비스', voices: { W: 'CA' },
    script: [
      ['W', 'Too busy to clean your home? Let Sparkle Home Services do it for you!'],
      ['W', 'Our trained staff use only eco-friendly cleaning products that are safe for children and pets.'],
      ['W', 'Book your first cleaning through our mobile app this month, and you\'ll get fifty percent off. Download the app today!'],
    ],
    ko: ['너무 바빠서 집 청소할 시간이 없으세요? 스파클 홈 서비스에 맡기세요!', '교육받은 직원들이 아이와 반려동물에게 안전한 친환경 세제만 사용합니다.', '이번 달 모바일 앱으로 첫 청소를 예약하시면 50퍼센트 할인해 드립니다. 오늘 앱을 내려받으세요!'],
    qs: [
      ['What is being advertised?', ['A cleaning service', 'A pet store', 'A furniture shop', 'A mobile phone'], 0, '주제', '집 청소 서비스 광고이므로 (A)가 정답.', '무엇이 광고되고 있는가?'],
      ['What is mentioned about the cleaning products?', ['They are environmentally friendly.', 'They are made locally.', 'They are sold online.', 'They have a pleasant smell.'], 0, '세부 사항', '친환경 세제만 쓴다고 했으므로 (A)가 정답.', '세제에 대해 무엇이 언급되는가?'],
      ['How can listeners get a discount?', ['By booking through an app', 'By calling a hotline', 'By visiting a store', 'By referring a friend'], 0, '세부 사항', '앱으로 첫 청소를 예약하면 50퍼센트 할인이라고 했으므로 (A)가 정답.', '듣는 사람은 어떻게 할인을 받을 수 있는가?'],
    ] },

  { title: '사내 공지 · 새 출입 카드 (표)', voices: { M: 'UK' },
    graphic: { title: 'ID Card Pickup Schedule', rows: [['Department', 'Day'], ['Sales', 'Monday'], ['Marketing', 'Tuesday'], ['Finance', 'Wednesday'], ['Engineering', 'Thursday']] },
    script: [
      ['M', 'Good morning, everyone. As you know, we\'re introducing new security ID cards next week.'],
      ['M', 'Each department has been assigned a day to pick up the cards from the security office on the first floor.'],
      ['M', 'Our team was originally scheduled for Monday, but because of the client visit that day, we\'ve switched with the finance department. Please remember to bring your old card so it can be deactivated.'],
    ],
    ko: ['좋은 아침입니다, 여러분. 아시다시피 다음 주에 새 보안 출입 카드를 도입합니다.', '부서마다 1층 보안실에서 카드를 받을 요일이 정해져 있어요.', '우리 팀은 원래 월요일이었는데, 그날 고객 방문이 있어서 재무 부서와 바꿨어요. 비활성화할 수 있게 예전 카드를 꼭 가져오세요.'],
    qs: [
      ['What will be introduced next week?', ['New ID cards', 'A new client', 'A security guard', 'A parking system'], 0, '주제', '새 보안 출입 카드를 도입한다고 했으므로 (A)가 정답.', '다음 주에 무엇이 도입되는가?'],
      ['Look at the graphic. When will the listeners pick up their cards?', ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], 2, '시각 정보', '원래 월요일이었던 영업팀이 재무 부서와 바꿨으므로 재무 부서 날인 수요일에 받습니다.', '표를 보시오. 듣는 사람들은 언제 카드를 받는가?'],
      ['What should the listeners bring?', ['Their old cards', 'A photo', 'A signed form', 'Their passports'], 0, '요청', '예전 카드를 가져오라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 가져와야 하는가?'],
    ] },

  { title: '라디오 · 교통 정보', voices: { W: 'AU' },
    script: [
      ['W', 'This is Kelly with your morning traffic update.'],
      ['W', 'Traffic is moving slowly on Highway 5 this morning because of an accident near the River Bridge. Two lanes are closed while crews clear the area.'],
      ['W', 'If you\'re heading downtown, we suggest taking Lincoln Avenue instead. We\'ll have another update in fifteen minutes, right after the business news.'],
    ],
    ko: ['아침 교통 정보의 켈리입니다.', '리버 브리지 근처 사고로 오늘 아침 5번 고속도로가 정체되고 있습니다. 작업자들이 현장을 정리하는 동안 두 개 차선이 통제됩니다.', '시내로 가시는 분은 링컨가를 이용하시길 권합니다. 15분 후, 경제 뉴스 바로 다음에 다시 소식 전하겠습니다.'],
    qs: [
      ['What is causing the traffic problem?', ['An accident', 'Road construction', 'A parade', 'Heavy snow'], 0, '이유', '리버 브리지 근처 사고 때문이라고 했으므로 (A)가 정답.', '교통 문제의 원인은 무엇인가?'],
      ['What does the speaker recommend?', ['Using a different road', 'Taking the train', 'Leaving later', 'Working from home'], 0, '제안', '링컨가를 이용하라고 했으므로 다른 길을 쓰라는 (A)가 정답.', '화자는 무엇을 권하는가?'],
      ['What will listeners hear next?', ['Business news', 'A weather report', 'A sports update', 'An interview'], 0, '다음 할 일', '경제 뉴스 다음에 다시 교통 정보가 나온다고 했으므로, 다음은 경제 뉴스입니다. (A)가 정답.', '듣는 사람들은 다음에 무엇을 듣게 되는가?'],
    ] },

  { title: '투어 · 와이너리 견학', voices: { M: 'CA' },
    script: [
      ['M', 'Welcome to Sunny Hills Winery. I\'m Greg, and I\'ll be showing you around today.'],
      ['M', 'First, we\'ll walk through the vineyard, where you\'ll see the grapes we harvest every September. Then we\'ll visit the cellar, where the wine is stored.'],
      ['M', 'The tour ends in our tasting room. Please note that the path through the vineyard is uneven, so watch your step.'],
    ],
    ko: ['서니 힐스 와이너리에 오신 걸 환영합니다. 저는 그레그이고 오늘 여러분을 안내하겠습니다.', '먼저 포도밭을 걸으며 매년 9월에 수확하는 포도를 보시고, 이어서 와인을 보관하는 저장고를 방문합니다.', '투어는 시음실에서 끝납니다. 포도밭 길이 울퉁불퉁하니 발밑을 조심하세요.'],
    qs: [
      ['Where is the talk taking place?', ['At a winery', 'At a farm market', 'At a restaurant', 'At a museum'], 0, '장소', '서니 힐스 와이너리에 오신 걸 환영한다고 했으므로 (A)가 정답.', '이 담화는 어디에서 이루어지는가?'],
      ['Where will the tour end?', ['In a tasting room', 'In a vineyard', 'In a cellar', 'In a gift shop'], 0, '세부 사항', '시음실에서 끝난다고 했으므로 (A)가 정답.', '투어는 어디에서 끝나는가?'],
      ['What does the speaker warn listeners about?', ['An uneven path', 'Hot weather', 'Closed areas', 'A strict schedule'], 0, '세부 사항', '포도밭 길이 울퉁불퉁하니 조심하라고 했으므로 (A)가 정답.', '화자는 무엇에 대해 주의를 주는가?'],
    ] },

  { title: '회의 · 분기 실적', voices: { W: 'US' },
    script: [
      ['W', 'Before we begin, I want to share some good news. Our online sales increased by twenty percent last quarter.'],
      ['W', 'Much of this growth came from our new mobile app, which made it easier for customers to order.'],
      ['W', 'To keep this going, we\'ll be hiring two more developers. If you know anyone qualified, please send their résumé to human resources.'],
    ],
    ko: ['시작하기 전에 좋은 소식을 전하고 싶어요. 지난 분기 온라인 매출이 20퍼센트 늘었습니다.', '이 성장의 상당 부분은 고객이 주문하기 쉽게 만든 새 모바일 앱 덕분이에요.', '이 흐름을 이어 가기 위해 개발자 두 명을 더 채용할 거예요. 자격 있는 분을 아시면 인사팀에 이력서를 보내 주세요.'],
    qs: [
      ['What is the good news?', ['Online sales increased.', 'A new store opened.', 'Costs were reduced.', 'An award was won.'], 0, '세부 사항', '온라인 매출이 20퍼센트 늘었다고 했으므로 (A)가 정답.', '좋은 소식은 무엇인가?'],
      ['What does the speaker say helped the growth?', ['A mobile app', 'A price cut', 'A TV advertisement', 'A new product'], 0, '이유', '새 모바일 앱 덕분이라고 했으므로 (A)가 정답.', '화자는 무엇이 성장에 도움이 되었다고 말하는가?'],
      ['What are listeners asked to do?', ['Recommend job candidates', 'Download the app', 'Attend a training', 'Submit sales reports'], 0, '요청', '자격 있는 사람을 알면 이력서를 보내 달라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 해 달라는 요청을 받는가?'],
    ] },

  { title: '도서관 안내 · 리모델링', voices: { M: 'AU' },
    script: [
      ['M', 'Attention, library visitors. Starting next Monday, the second floor of the library will be closed for remodeling.'],
      ['M', 'During this time, the children\'s books will be moved to the community room on the first floor.'],
      ['M', 'The work is expected to finish by the end of the month. We apologize for any inconvenience and thank you for your patience.'],
    ],
    ko: ['도서관 이용객 여러분께 알려 드립니다. 다음 주 월요일부터 도서관 2층이 리모델링으로 문을 닫습니다.', '이 기간 동안 어린이 도서는 1층 커뮤니티 룸으로 옮겨집니다.', '공사는 이달 말까지 끝날 예정입니다. 불편을 드려 죄송하며 양해해 주셔서 감사합니다.'],
    qs: [
      ['What will happen next Monday?', ['A floor will close for remodeling.', 'The library will extend its hours.', 'A book sale will begin.', 'A new librarian will start.'], 0, '세부 사항', '2층이 리모델링으로 문을 닫는다고 했으므로 (A)가 정답.', '다음 주 월요일에 무슨 일이 있는가?'],
      ['Where will the children\'s books be moved?', ['To a community room', 'To the third floor', 'To another library', 'To a storage area'], 0, '세부 사항', '1층 커뮤니티 룸으로 옮겨진다고 했으므로 (A)가 정답.', '어린이 도서는 어디로 옮겨지는가?'],
      ['When is the work expected to finish?', ['By the end of the month', 'Next Monday', 'Next year', 'In two days'], 0, '세부 사항', '이달 말까지 끝날 예정이라고 했으므로 (A)가 정답.', '공사는 언제 끝날 것으로 예상되는가?'],
    ] },

  { title: '강연 소개 · 초청 연사', voices: { W: 'UK' },
    script: [
      ['W', 'Good evening, and welcome to our monthly business talk series.'],
      ['W', 'Tonight\'s speaker is Ms. Laura Bennett, who started her own clothing company ten years ago with just two employees. Today, her company has stores in over thirty cities.'],
      ['W', 'She\'ll talk about how small businesses can grow through social media. After her talk, there will be time for questions, so please write them on the cards on your seats.'],
    ],
    ko: ['안녕하세요, 월례 비즈니스 강연 시리즈에 오신 걸 환영합니다.', '오늘 밤 연사는 10년 전 직원 두 명으로 의류 회사를 시작한 로라 베넷 씨입니다. 지금 그녀의 회사는 30개 넘는 도시에 매장이 있습니다.', '그녀는 소기업이 소셜 미디어로 어떻게 성장할 수 있는지 이야기할 거예요. 강연 후 질문 시간이 있으니, 좌석에 있는 카드에 질문을 적어 주세요.'],
    qs: [
      ['Who is Laura Bennett?', ['A business owner', 'A fashion model', 'A journalist', 'A professor'], 0, '화자 정체', '자기 의류 회사를 시작한 사람이므로 사업가입니다. (A)가 정답.', '로라 베넷은 누구인가?'],
      ['What will Ms. Bennett talk about?', ['Growing a business with social media', 'Designing clothes', 'Hiring employees', 'Opening stores abroad'], 0, '주제', '소기업이 소셜 미디어로 성장하는 법을 이야기한다고 했으므로 (A)가 정답.', '베넷 씨는 무엇에 대해 이야기할 것인가?'],
      ['What are listeners asked to do?', ['Write questions on cards', 'Turn off their phones', 'Visit a Web site', 'Buy a book'], 0, '요청', '좌석의 카드에 질문을 적어 달라고 했으므로 (A)가 정답.', '듣는 사람들은 무엇을 해 달라는 요청을 받는가?'],
    ] },

  { title: '전화 자동 응답 · 극장', voices: { M: 'US' },
    script: [
      ['M', 'Thank you for calling the Grand Theater. Tonight\'s performance of "The River Song" begins at seven thirty.'],
      ['M', 'Please note that latecomers will not be seated until the intermission.'],
      ['M', 'To buy tickets, press 1. For information about parking and directions, press 2. To speak with a staff member, please stay on the line.'],
    ],
    ko: ['그랜드 극장에 전화해 주셔서 감사합니다. 오늘 밤 "강의 노래" 공연은 7시 30분에 시작합니다.', '늦게 오시는 분은 중간 휴식 시간까지 입장하실 수 없으니 유의해 주세요.', '표를 사시려면 1번을, 주차와 오시는 길 안내는 2번을 누르세요. 직원과 통화하시려면 끊지 말고 기다려 주세요.'],
    qs: [
      ['What time does tonight\'s performance begin?', ['At 7:30', 'At 7:00', 'At 8:00', 'At 8:30'], 0, '세부 사항', '7시 30분에 시작한다고 했으므로 (A)가 정답.', '오늘 밤 공연은 몇 시에 시작하는가?'],
      ['What is said about people who arrive late?', ['They must wait until the intermission.', 'They will get a refund.', 'They can sit anywhere.', 'They must buy a new ticket.'], 0, '세부 사항', '늦은 사람은 중간 휴식 때까지 입장 못 한다고 했으므로 (A)가 정답.', '늦게 오는 사람에 대해 무엇을 말하는가?'],
      ['What should callers do to get parking information?', ['Press 2', 'Press 1', 'Stay on the line', 'Visit the Web site'], 0, '세부 사항', '주차와 길 안내는 2번이라고 했으므로 (A)가 정답.', '주차 정보를 얻으려면 어떻게 해야 하는가?'],
    ] },
]);
