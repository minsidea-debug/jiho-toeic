/* =========================================================
   단어 외우기 · 초등 수준
   ---------------------------------------------------------
   한 단어의 모양:
   ["영어단어", "뜻", "품사", "예문", "예문 해석",
     [ ["바뀐 형태", "품사", "예문", "해석"], ... ]   ← 품사를 바꾼 예문
   ]
   ※ 같은 난이도 안에서 "뜻"이 겹치지 않게 해주세요 (5지선다 보기로 쓰임)
   ========================================================= */
(window.TOEIC_WORDS = window.TOEIC_WORDS || {}).elem = [
  ["happy", "행복한", "형용사", "I am happy today.", "나는 오늘 행복하다.", [
    ["happiness", "명사", "Money cannot buy happiness.", "돈으로 행복을 살 수 없다."],
    ["happily", "부사", "They lived happily together.", "그들은 함께 행복하게 살았다."]]],
  ["help", "돕다", "동사", "Can you help me?", "나를 도와줄 수 있니?", [
    ["help", "명사", "Thank you for your help.", "도와줘서 고마워."],
    ["helpful", "형용사", "This book is very helpful.", "이 책은 매우 도움이 된다."]]],
  ["friend", "친구", "명사", "She is my best friend.", "그녀는 나의 가장 친한 친구다.", [
    ["friendly", "형용사", "The staff are very friendly.", "직원들이 매우 친절하다."],
    ["friendship", "명사", "Our friendship is important to me.", "우리의 우정은 나에게 중요하다."]]],
  ["buy", "사다", "동사", "I want to buy a new bag.", "나는 새 가방을 사고 싶다.", [
    ["buyer", "명사", "The buyer paid in cash.", "구매자는 현금으로 지불했다."]]],
  ["sell", "팔다", "동사", "They sell fresh bread.", "그들은 신선한 빵을 판다.", [
    ["sale", "명사", "The shoes are on sale.", "그 신발은 할인 중이다."],
    ["seller", "명사", "The seller was very kind.", "판매자는 매우 친절했다."]]],
  ["teach", "가르치다", "동사", "My mother teaches English.", "우리 엄마는 영어를 가르치신다.", [
    ["teacher", "명사", "Our teacher is from Canada.", "우리 선생님은 캐나다 출신이다."]]],
  ["learn", "배우다", "동사", "I learn something new every day.", "나는 매일 새로운 것을 배운다.", [
    ["learner", "명사", "She is a fast learner.", "그녀는 빨리 배우는 사람이다."]]],
  ["clean", "깨끗한", "형용사", "My room is clean.", "내 방은 깨끗하다.", [
    ["clean", "동사", "Please clean the table.", "탁자를 닦아 주세요."],
    ["cleaner", "명사", "The cleaner comes every Monday.", "청소부는 매주 월요일에 온다."]]],
  ["open", "열다", "동사", "Please open the window.", "창문을 열어 주세요.", [
    ["open", "형용사", "The store is open until 9 P.M.", "그 가게는 오후 9시까지 문을 연다."]]],
  ["close", "닫다", "동사", "Close the door, please.", "문을 닫아 주세요.", [
    ["close", "형용사", "The bank is close to my house.", "은행은 우리 집과 가깝다."],
    ["closely", "부사", "Listen closely.", "주의 깊게 들어라."]]],
  ["busy", "바쁜", "형용사", "I am busy this afternoon.", "나는 오늘 오후에 바쁘다.", [
    ["business", "명사", "He runs a small business.", "그는 작은 사업을 운영한다."]]],
  ["quick", "빠른", "형용사", "We had a quick lunch.", "우리는 빠르게 점심을 먹었다.", [
    ["quickly", "부사", "Please come quickly.", "빨리 와 주세요."]]],
  ["easy", "쉬운", "형용사", "The test was easy.", "시험은 쉬웠다.", [
    ["easily", "부사", "I can easily find the station.", "나는 역을 쉽게 찾을 수 있다."],
    ["ease", "명사", "She passed the test with ease.", "그녀는 시험을 쉽게 통과했다."]]],
  ["difficult", "어려운", "형용사", "This question is difficult.", "이 문제는 어렵다.", [
    ["difficulty", "명사", "I had difficulty sleeping.", "나는 잠드는 데 어려움을 겪었다."]]],
  ["careful", "조심하는", "형용사", "Be careful on the stairs.", "계단에서 조심해.", [
    ["care", "명사", "Handle the box with care.", "상자를 조심해서 다루세요."],
    ["carefully", "부사", "Read the instructions carefully.", "설명서를 주의 깊게 읽어라."]]],
  ["start", "시작하다", "동사", "The movie starts at 7.", "영화는 7시에 시작한다.", [
    ["start", "명사", "It was a good start.", "좋은 시작이었다."]]],
  ["finish", "끝내다", "동사", "I finished my homework.", "나는 숙제를 끝냈다.", [
    ["finished", "형용사", "The work is finished.", "그 일은 끝났다."]]],
  ["travel", "여행하다", "동사", "I want to travel to Japan.", "나는 일본으로 여행하고 싶다.", [
    ["travel", "명사", "Travel is my hobby.", "여행은 내 취미다."],
    ["traveler", "명사", "The traveler lost his map.", "그 여행자는 지도를 잃어버렸다."]]],
  ["visit", "방문하다", "동사", "We visited our grandparents.", "우리는 조부모님을 방문했다.", [
    ["visit", "명사", "Thank you for your visit.", "방문해 주셔서 감사합니다."],
    ["visitor", "명사", "The museum had many visitors.", "박물관에는 방문객이 많았다."]]],
  ["answer", "대답하다", "동사", "Please answer the question.", "질문에 대답해 주세요.", [
    ["answer", "명사", "I know the answer.", "나는 답을 안다."]]],
  ["kind", "친절한", "형용사", "He is kind to everyone.", "그는 모두에게 친절하다.", [
    ["kindness", "명사", "Thank you for your kindness.", "친절에 감사드립니다."],
    ["kindly", "부사", "She kindly showed me the way.", "그녀는 친절하게 길을 알려주었다."]]],
  ["move", "옮기다, 이사하다", "동사", "We moved to Seoul last year.", "우리는 작년에 서울로 이사했다.", [
    ["movement", "명사", "The movement of the train was smooth.", "기차의 움직임이 부드러웠다."],
    ["moving", "형용사", "It was a moving story.", "그것은 감동적인 이야기였다."]]],
  ["rain", "비", "명사", "We had a lot of rain this week.", "이번 주에 비가 많이 왔다.", [
    ["rain", "동사", "It is raining now.", "지금 비가 오고 있다."],
    ["rainy", "형용사", "I don't like rainy days.", "나는 비 오는 날을 좋아하지 않는다."]]],
  ["color", "색깔", "명사", "What color is your car?", "네 차는 무슨 색이니?", [
    ["colorful", "형용사", "The garden is colorful in spring.", "정원은 봄에 알록달록하다."]]],
  ["hope", "바라다", "동사", "I hope you feel better.", "네가 나아지길 바라.", [
    ["hope", "명사", "Don't lose hope.", "희망을 잃지 마."],
    ["hopeful", "형용사", "We are hopeful about the future.", "우리는 미래에 대해 희망적이다."]]],
  ["use", "사용하다", "동사", "Can I use your phone?", "네 전화기를 써도 될까?", [
    ["useful", "형용사", "This map is very useful.", "이 지도는 매우 유용하다."],
    ["user", "명사", "The app has many users.", "그 앱은 사용자가 많다."]]],
  ["wait", "기다리다", "동사", "Please wait here.", "여기서 기다려 주세요.", [
    ["wait", "명사", "There is a long wait.", "대기 시간이 길다."],
    ["waiter", "명사", "The waiter brought our food.", "웨이터가 우리 음식을 가져왔다."]]],
  ["walk", "걷다", "동사", "I walk to school.", "나는 걸어서 학교에 간다.", [
    ["walk", "명사", "Let's go for a walk.", "산책하러 가자."]]],
  ["drive", "운전하다", "동사", "My father drives to work.", "아빠는 차로 출근하신다.", [
    ["driver", "명사", "The bus driver was friendly.", "버스 기사님은 친절했다."]]],
  ["write", "쓰다", "동사", "Write your name here.", "여기에 이름을 쓰세요.", [
    ["writer", "명사", "She wants to be a writer.", "그녀는 작가가 되고 싶어 한다."],
    ["writing", "명사", "His writing is easy to read.", "그의 글은 읽기 쉽다."]]],
  ["sing", "노래하다", "동사", "She sings very well.", "그녀는 노래를 매우 잘한다.", [
    ["singer", "명사", "He is a famous singer.", "그는 유명한 가수다."],
    ["song", "명사", "This is my favorite song.", "이것은 내가 좋아하는 노래다."]]],
  ["safe", "안전한", "형용사", "This area is safe at night.", "이 지역은 밤에도 안전하다.", [
    ["safety", "명사", "Safety comes first.", "안전이 최우선이다."],
    ["safely", "부사", "Drive safely!", "안전하게 운전해!"]]],
  ["warm", "따뜻한", "형용사", "It is warm today.", "오늘은 따뜻하다.", [
    ["warmth", "명사", "I felt the warmth of the sun.", "나는 햇볕의 따뜻함을 느꼈다."],
    ["warm", "동사", "Warm the soup before eating.", "먹기 전에 수프를 데워라."]]],
  ["strong", "강한", "형용사", "He is very strong.", "그는 매우 힘이 세다.", [
    ["strength", "명사", "You need strength for this job.", "이 일에는 힘이 필요하다."]]],
  ["dark", "어두운", "형용사", "It gets dark early in winter.", "겨울에는 일찍 어두워진다.", [
    ["darkness", "명사", "The room was in darkness.", "방은 어둠 속에 있었다."]]],
  ["loud", "(소리가) 큰", "형용사", "The music is too loud.", "음악 소리가 너무 크다.", [
    ["loudly", "부사", "Don't talk loudly in the library.", "도서관에서 큰 소리로 말하지 마라."]]],
  ["sick", "아픈", "형용사", "I was sick yesterday.", "나는 어제 아팠다.", [
    ["sickness", "명사", "He missed work because of sickness.", "그는 병 때문에 결근했다."]]],
  ["different", "다른", "형용사", "We have different ideas.", "우리는 서로 다른 생각을 가지고 있다.", [
    ["difference", "명사", "Can you see the difference?", "차이가 보이니?"],
    ["differ", "동사", "Prices differ from store to store.", "가격은 가게마다 다르다."]]],
  ["important", "중요한", "형용사", "This meeting is important.", "이 회의는 중요하다.", [
    ["importance", "명사", "He knows the importance of health.", "그는 건강의 중요성을 안다."]]],
  ["beautiful", "아름다운", "형용사", "The view is beautiful.", "경치가 아름답다.", [
    ["beauty", "명사", "I love the beauty of nature.", "나는 자연의 아름다움을 사랑한다."],
    ["beautifully", "부사", "She dances beautifully.", "그녀는 춤을 아름답게 춘다."]]],
  ["invite", "초대하다", "동사", "I invited my friends to dinner.", "나는 친구들을 저녁 식사에 초대했다.", [
    ["invitation", "명사", "Thank you for the invitation.", "초대해 주셔서 감사합니다."]]],
  ["agree", "동의하다", "동사", "I agree with you.", "나는 너에게 동의해.", [
    ["agreement", "명사", "We reached an agreement.", "우리는 합의에 이르렀다."]]],
  ["enjoy", "즐기다", "동사", "I enjoy reading books.", "나는 책 읽는 것을 즐긴다.", [
    ["enjoyable", "형용사", "We had an enjoyable trip.", "우리는 즐거운 여행을 했다."]]],
  ["paint", "칠하다, 그리다", "동사", "We painted the wall white.", "우리는 벽을 하얗게 칠했다.", [
    ["painter", "명사", "The painter is famous in France.", "그 화가는 프랑스에서 유명하다."],
    ["painting", "명사", "This painting is very old.", "이 그림은 매우 오래되었다."]]],
  ["build", "짓다", "동사", "They will build a new school.", "그들은 새 학교를 지을 것이다.", [
    ["building", "명사", "Our office is in that building.", "우리 사무실은 저 건물에 있다."],
    ["builder", "명사", "The builder finished the house.", "건축업자가 집을 완성했다."]]],
  ["cook", "요리하다", "동사", "My dad cooks dinner on Sundays.", "아빠는 일요일마다 저녁을 요리하신다.", [
    ["cook", "명사", "She is a great cook.", "그녀는 훌륭한 요리사다."],
    ["cooking", "명사", "I love Korean cooking.", "나는 한국 요리를 좋아한다."]]],
  ["dream", "꿈", "명사", "My dream is to be a doctor.", "내 꿈은 의사가 되는 것이다.", [
    ["dream", "동사", "I dreamed about the sea.", "나는 바다 꿈을 꿨다."]]],
  ["free", "무료의, 자유로운", "형용사", "The museum is free on Sundays.", "박물관은 일요일에 무료다.", [
    ["freedom", "명사", "Freedom is very important.", "자유는 매우 중요하다."],
    ["freely", "부사", "You can talk freely here.", "여기서는 자유롭게 말해도 된다."]]],
  ["lucky", "운이 좋은", "형용사", "You are lucky to have such good friends.", "그런 좋은 친구들이 있다니 너는 운이 좋다.", [
    ["luck", "명사", "Good luck on your test!", "시험 잘 봐!"],
    ["luckily", "부사", "Luckily, it didn't rain.", "다행히 비가 오지 않았다."]]],
  ["noise", "소음", "명사", "The noise woke me up.", "소음 때문에 잠에서 깼다.", [
    ["noisy", "형용사", "The street is very noisy.", "그 거리는 매우 시끄럽다."]]],
];
