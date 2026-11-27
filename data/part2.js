/* =========================================================
   Part 2 · 질의응답 (리스닝) — 직접 창작한 문제 (ETS 기출 복제 아님)
   ---------------------------------------------------------
   문제 하나의 모양:
   {
     id: 'p2-001',
     q: '질문 문장 (풀기 전에는 화면에 안 보이고 소리로만 나옴)',
     choices: ['A 응답', 'B 응답', 'C 응답'],   // Part 2 는 보기 3개
     answer: 0,                 // A=0, B=1, C=2
     voices: ['US', 'UK'],      // [질문 목소리, 응답 목소리]  US·UK·AU·CA
     type: '문제 유형',
     explain: '해설',
     ko: '질문 해석',
     choicesKo: ['A 해석', 'B 해석', 'C 해석'],
     vocab: [['단어', '뜻'], ...]
   }
   ========================================================= */
(function () {
  const items = [
    { id: 'p2-001', q: 'Where is the nearest post office?', voices: ['US', 'UK'],
      choices: ['It\'s two blocks down this street.', 'At nine in the morning.', 'Yes, I posted the letter.'], answer: 0, type: 'Where 의문문',
      explain: 'Where(어디)로 물었으니 장소로 답한 (A)가 정답. (B)는 시간(When)에 대한 답, (C)는 의문사 의문문에 Yes로 답했고 post를 반복한 함정입니다.',
      ko: '가장 가까운 우체국이 어디에 있나요?', choicesKo: ['이 길을 따라 두 블록 가면 있어요.', '오전 9시에요.', '네, 편지를 부쳤어요.'],
      vocab: [['nearest', '가장 가까운'], ['block', '(도로의) 한 블록']] },

    { id: 'p2-002', q: 'When does the training session begin?', voices: ['UK', 'US'],
      choices: ['In the main conference room.', 'Right after lunch.', 'Mr. Kim will train us.'], answer: 1, type: 'When 의문문',
      explain: 'When(언제)에는 시점으로 답합니다. "점심 직후"인 (B)가 정답. (A)는 장소, (C)는 train을 반복한 함정입니다.',
      ko: '교육은 언제 시작하나요?', choicesKo: ['큰 회의실에서요.', '점심 먹고 바로요.', '김 씨가 우리를 교육할 거예요.'],
      vocab: [['training session', '교육 (시간)'], ['right after', '~ 직후에']] },

    { id: 'p2-003', q: 'Who is in charge of the new project?', voices: ['AU', 'US'],
      choices: ['It costs too much.', 'Ms. Lopez from marketing.', 'Yes, it\'s a new one.'], answer: 1, type: 'Who 의문문',
      explain: 'Who(누구)에는 사람 이름·직책·부서로 답합니다. (B)가 정답. (C)는 Yes 답변 + new 반복 함정입니다.',
      ko: '새 프로젝트는 누가 담당하나요?', choicesKo: ['그건 너무 비싸요.', '마케팅 부서의 로페즈 씨요.', '네, 새것이에요.'],
      vocab: [['in charge of', '~을 담당하는']] },

    { id: 'p2-004', q: 'Why was the meeting postponed?', voices: ['US', 'CA'],
      choices: ['Because the manager is sick today.', 'Next Tuesday, I think.', 'In room 302.'], answer: 0, type: 'Why 의문문',
      explain: 'Why(왜)에는 이유로 답합니다. Because로 시작하는 (A)가 정답. (B)는 언제, (C)는 어디에 대한 답입니다.',
      ko: '회의가 왜 연기됐나요?', choicesKo: ['매니저가 오늘 아파서요.', '다음 주 화요일인 것 같아요.', '302호에서요.'],
      vocab: [['postpone', '연기하다, 미루다']] },

    { id: 'p2-005', q: 'How did you get to the airport?', voices: ['UK', 'AU'],
      choices: ['About two hours ago.', 'I took a taxi.', 'The flight was delayed.'], answer: 1, type: 'How 의문문',
      explain: 'How(어떻게)로 교통수단을 물었으니 "택시를 탔다"는 (B)가 정답. (C)는 airport에서 연상되는 flight로 만든 함정입니다.',
      ko: '공항에는 어떻게 갔어요?', choicesKo: ['약 두 시간 전에요.', '택시를 탔어요.', '비행기가 지연됐어요.'],
      vocab: [['get to', '~에 도착하다, 가다'], ['delayed', '지연된']] },

    { id: 'p2-006', q: 'What time does the store close tonight?', voices: ['CA', 'US'],
      choices: ['Not until ten o\'clock.', 'Close the window, please.', 'At the shopping mall.'], answer: 0, type: 'What 의문문',
      explain: 'What time(몇 시)에는 시각으로 답합니다. "10시나 돼야 닫는다"는 (A)가 정답. (B)는 close를 다른 뜻으로 반복한 함정입니다.',
      ko: '오늘 밤 가게는 몇 시에 문을 닫나요?', choicesKo: ['10시나 돼야 닫아요.', '창문 좀 닫아 주세요.', '쇼핑몰에서요.'],
      vocab: [['not until', '~이 되어서야']] },

    { id: 'p2-007', q: 'Have you finished the sales report yet?', voices: ['US', 'UK'],
      choices: ['The sale ends on Friday.', 'Almost. I\'ll send it within an hour.', 'He reported it yesterday.'], answer: 1, type: 'Yes/No 의문문',
      explain: '보고서를 다 끝냈는지 묻는 말에 "거의요, 한 시간 안에 보낼게요"라고 답한 (B)가 정답. (A)는 sale, (C)는 report를 비슷한 소리로 반복한 함정입니다.',
      ko: '판매 보고서 벌써 끝냈어요?', choicesKo: ['세일은 금요일에 끝나요.', '거의요. 한 시간 안에 보낼게요.', '그가 어제 그걸 보고했어요.'],
      vocab: [['sales report', '판매 보고서'], ['within', '~ 이내에']] },

    { id: 'p2-008', q: 'Is this seat taken?', voices: ['AU', 'CA'],
      choices: ['No, go ahead.', 'It takes ten minutes.', 'I\'d like a window seat.'], answer: 0, type: 'Yes/No 의문문',
      explain: '자리에 누가 있는지 묻자 "아니요, 앉으세요"라고 답한 (A)가 정답. (B)는 take를 다른 뜻으로, (C)는 seat를 반복한 함정입니다.',
      ko: '이 자리 임자 있나요?', choicesKo: ['아니요, 앉으세요.', '10분 걸려요.', '창가 자리로 주세요.'],
      vocab: [['go ahead', '(허락) 그렇게 하세요']] },

    { id: 'p2-009', q: 'Would you like coffee or tea?', voices: ['UK', 'US'],
      choices: ['Yes, I would.', 'Tea would be great, thanks.', 'At the café downstairs.'], answer: 1, type: '선택 의문문',
      explain: 'A or B 선택 의문문에는 둘 중 하나(또는 둘 다/둘 다 아님)로 답합니다. (B)가 정답. 선택 의문문에 Yes/No로 답한 (A)는 오답입니다.',
      ko: '커피 드릴까요, 차 드릴까요?', choicesKo: ['네, 그럴게요.', '차가 좋겠네요, 고마워요.', '아래층 카페에서요.'],
      vocab: [['downstairs', '아래층에']] },

    { id: 'p2-010', q: 'Should we take the bus or walk to the hotel?', voices: ['US', 'AU'],
      choices: ['It\'s close enough to walk.', 'The hotel has a pool.', 'I bought a bus pass.'], answer: 0, type: '선택 의문문',
      explain: '버스와 걷기 중 "걸어갈 만큼 가깝다"고 고른 (A)가 정답. (B)는 hotel, (C)는 bus를 반복한 함정입니다.',
      ko: '호텔까지 버스를 탈까요, 걸어갈까요?', choicesKo: ['걸어갈 만큼 가까워요.', '그 호텔에는 수영장이 있어요.', '버스 정기권을 샀어요.'],
      vocab: [['close enough to', '~할 만큼 가까운'], ['pass', '정기권, 출입증']] },

    { id: 'p2-011', q: 'Why don\'t we order lunch from the new restaurant?', voices: ['CA', 'UK'],
      choices: ['Because it was closed.', 'That sounds like a good idea.', 'I ordered a new laptop.'], answer: 1, type: '제안',
      explain: 'Why don\'t we ~?는 이유를 묻는 게 아니라 "~하는 게 어때요?"라는 제안입니다. 수락한 (B)가 정답. Because로 답한 (A)는 대표적인 함정입니다.',
      ko: '새로 생긴 식당에서 점심을 주문하는 게 어때요?', choicesKo: ['문을 닫았었거든요.', '좋은 생각이에요.', '새 노트북을 주문했어요.'],
      vocab: [['Why don\'t we ~?', '~하는 게 어때요?']] },

    { id: 'p2-012', q: 'Could you help me move these boxes?', voices: ['UK', 'US'],
      choices: ['Sure, where do they go?', 'We moved here last year.', 'There are five boxes.'], answer: 0, type: '요청',
      explain: 'Could you ~?는 부탁입니다. "물론이죠, 어디로 옮겨요?"라고 수락한 (A)가 정답. (B)는 move, (C)는 boxes를 반복한 함정입니다.',
      ko: '이 상자들 옮기는 것 좀 도와줄래요?', choicesKo: ['물론이죠, 어디로 가는 거예요?', '우리는 작년에 이곳으로 이사 왔어요.', '상자가 다섯 개 있어요.'],
      vocab: [['move', '옮기다; 이사하다']] },

    { id: 'p2-013', q: 'You\'re attending the conference in Seoul, aren\'t you?', voices: ['US', 'CA'],
      choices: ['No, I have to stay here.', 'The conference room is full.', 'Yes, it\'s a big city.'], answer: 0, type: '부가 의문문',
      explain: '컨퍼런스에 가는지 확인하는 부가 의문문입니다. "아니요, 여기 있어야 해요"라고 답한 (A)가 정답. (C)는 Yes 뒤의 내용이 질문과 맞지 않습니다.',
      ko: '서울에서 열리는 컨퍼런스에 참석하시죠, 그렇죠?', choicesKo: ['아니요, 저는 여기 남아 있어야 해요.', '회의실이 꽉 찼어요.', '네, 그곳은 큰 도시예요.'],
      vocab: [['attend', '참석하다'], ['conference', '회의, 학회']] },

    { id: 'p2-014', q: 'The printer on the third floor is out of order again.', voices: ['AU', 'US'],
      choices: ['I\'ll call the repair service.', 'Print two copies, please.', 'On the third floor.'], answer: 0, type: '평서문',
      explain: '문제 상황(프린터 고장)을 말하는 평서문에는 해결책·반응으로 답합니다. "수리 서비스에 전화할게요"인 (A)가 정답.',
      ko: '3층 프린터가 또 고장 났어요.', choicesKo: ['제가 수리 서비스에 전화할게요.', '두 부 인쇄해 주세요.', '3층에서요.'],
      vocab: [['out of order', '고장 난'], ['repair', '수리']] },

    { id: 'p2-015', q: 'Where should I put these documents?', voices: ['CA', 'AU'],
      choices: ['They were put on sale.', 'On my desk is fine.', 'Yes, they\'re important.'], answer: 1, type: 'Where 의문문',
      explain: '서류를 어디에 둘지 묻자 "제 책상 위면 돼요"라고 장소로 답한 (B)가 정답.',
      ko: '이 서류들은 어디에 둘까요?', choicesKo: ['그것들은 할인 판매에 들어갔어요.', '제 책상 위에 두면 돼요.', '네, 그것들은 중요해요.'],
      vocab: [['document', '서류, 문서']] },

    { id: 'p2-016', q: 'When will the new software be installed?', voices: ['US', 'UK'],
      choices: ['By the IT department.', 'Sometime next week.', 'It\'s very easy to use.'], answer: 1, type: 'When 의문문',
      explain: '언제 설치되는지 묻자 "다음 주 중에"라고 답한 (B)가 정답. (A)는 누가(Who)에 대한 답입니다.',
      ko: '새 소프트웨어는 언제 설치되나요?', choicesKo: ['IT 부서에서요.', '다음 주 중에요.', '사용하기 아주 쉬워요.'],
      vocab: [['install', '설치하다']] },

    { id: 'p2-017', q: 'Who left this umbrella in the lobby?', voices: ['UK', 'CA'],
      choices: ['It might be Daniel\'s.', 'It\'s raining outside.', 'Turn left at the lobby.'], answer: 0, type: 'Who 의문문',
      explain: '누가 두고 갔는지 묻자 "다니엘 것일 거예요"라고 답한 (A)가 정답. "잘 모르겠다"류의 간접 답변도 자주 정답이 됩니다. (C)는 left(왼쪽)를 다른 뜻으로 반복한 함정.',
      ko: '로비에 이 우산을 누가 두고 갔나요?', choicesKo: ['다니엘 것일지도 몰라요.', '밖에 비가 와요.', '로비에서 왼쪽으로 도세요.'],
      vocab: [['leave', '두고 가다 (과거 left)']] },

    { id: 'p2-018', q: 'How long will the renovation take?', voices: ['US', 'AU'],
      choices: ['About three weeks.', 'It\'s a long building.', 'They renovated the kitchen.'], answer: 0, type: 'How 의문문',
      explain: 'How long(얼마나 오래)에는 기간으로 답합니다. (A)가 정답.',
      ko: '보수 공사는 얼마나 걸릴까요?', choicesKo: ['3주 정도요.', '그건 긴 건물이에요.', '그들이 부엌을 보수했어요.'],
      vocab: [['renovation', '보수, 개조']] },

    { id: 'p2-019', q: 'How many people signed up for the workshop?', voices: ['AU', 'UK'],
      choices: ['Sign here, please.', 'More than forty so far.', 'It\'s on the second floor.'], answer: 1, type: 'How 의문문',
      explain: 'How many(몇 명)에는 숫자로 답합니다. "지금까지 40명 넘게"인 (B)가 정답. (A)는 sign을 반복한 함정입니다.',
      ko: '워크숍에 몇 명이 등록했나요?', choicesKo: ['여기에 서명해 주세요.', '지금까지 40명이 넘어요.', '2층에 있어요.'],
      vocab: [['sign up for', '~에 등록하다'], ['so far', '지금까지']] },

    { id: 'p2-020', q: 'Which bus goes to the city center?', voices: ['CA', 'US'],
      choices: ['Number 15 does.', 'Yes, it\'s in the center.', 'Every twenty minutes.'], answer: 0, type: 'Which 의문문',
      explain: '어느 버스인지 묻자 "15번이요"라고 답한 (A)가 정답. (C)는 얼마나 자주(How often)에 대한 답입니다.',
      ko: '어느 버스가 시내로 가나요?', choicesKo: ['15번이 가요.', '네, 그건 중심에 있어요.', '20분마다요.'],
      vocab: [['city center', '시내, 도심']] },

    { id: 'p2-021', q: 'Didn\'t you receive my e-mail this morning?', voices: ['UK', 'US'],
      choices: ['Sorry, I haven\'t checked my inbox yet.', 'I\'ll mail the package.', 'It was a nice morning.'], answer: 0, type: '부정 의문문',
      explain: '부정 의문문(Didn\'t you ~?)은 일반 의문문처럼 생각하면 됩니다. "아직 메일함을 확인 못 했어요"라고 답한 (A)가 정답.',
      ko: '오늘 아침에 제 이메일 못 받았어요?', choicesKo: ['미안해요, 아직 메일함을 확인 못 했어요.', '제가 소포를 부칠게요.', '좋은 아침이었어요.'],
      vocab: [['receive', '받다'], ['inbox', '받은 편지함']] },

    { id: 'p2-022', q: 'Can I pay with a credit card?', voices: ['US', 'CA'],
      choices: ['Of course, we accept all major cards.', 'The pay is quite good.', 'I\'ll send you a card.'], answer: 0, type: '요청·허가',
      explain: '카드로 계산해도 되는지 묻자 "물론이죠"라고 허락한 (A)가 정답. (B)의 pay는 "급여"라는 명사로 쓰인 함정입니다.',
      ko: '신용카드로 계산할 수 있나요?', choicesKo: ['물론이죠, 주요 카드는 다 받아요.', '급여가 꽤 좋아요.', '카드를 보내 드릴게요.'],
      vocab: [['accept', '받아 주다, 수락하다'], ['pay', '지불하다; 급여']] },

    { id: 'p2-023', q: 'Let\'s review the budget before the meeting.', voices: ['AU', 'UK'],
      choices: ['Good idea. I\'ll bring the numbers.', 'The meeting was productive.', 'I read the review online.'], answer: 0, type: '제안',
      explain: 'Let\'s ~ 제안에 "좋아요, 수치 자료를 가져올게요"라고 응한 (A)가 정답. (C)는 review를 다른 뜻(후기)으로 반복한 함정.',
      ko: '회의 전에 예산을 검토해 봅시다.', choicesKo: ['좋은 생각이에요. 제가 수치 자료를 가져올게요.', '회의는 생산적이었어요.', '온라인에서 그 후기를 읽었어요.'],
      vocab: [['budget', '예산'], ['review', '검토하다; 후기']] },

    { id: 'p2-024', q: 'Whose turn is it to clean the break room?', voices: ['US', 'AU'],
      choices: ['I think it\'s Maria\'s.', 'Turn it off, please.', 'It\'s very clean.'], answer: 0, type: 'Whose 의문문',
      explain: '누구 차례인지 묻자 "마리아 차례인 것 같아요"라고 답한 (A)가 정답. (B)는 turn, (C)는 clean을 반복한 함정입니다.',
      ko: '휴게실 청소는 누구 차례예요?', choicesKo: ['마리아 차례인 것 같아요.', '그것 좀 꺼 주세요.', '아주 깨끗해요.'],
      vocab: [['turn', '차례'], ['break room', '휴게실']] },

    { id: 'p2-025', q: 'Is the client meeting at two or three?', voices: ['CA', 'UK'],
      choices: ['It\'s been moved to four.', 'Yes, two clients.', 'In the meeting room.'], answer: 0, type: '선택 의문문',
      explain: '2시인지 3시인지 묻는데 "4시로 옮겨졌어요"라고 제3의 답을 한 (A)가 정답. 이처럼 둘 다 아닌 답도 자주 정답이 됩니다.',
      ko: '고객 회의가 2시예요, 3시예요?', choicesKo: ['4시로 옮겨졌어요.', '네, 고객 두 명이요.', '회의실에서요.'],
      vocab: [['client', '고객'], ['move', '(일정을) 옮기다']] },

    { id: 'p2-026', q: 'I can\'t find the key to the storage room.', voices: ['UK', 'US'],
      choices: ['Check with the security desk.', 'The room is very large.', 'That\'s the key point.'], answer: 0, type: '평서문',
      explain: '열쇠를 못 찾겠다는 말에 "경비실에 확인해 보세요"라고 해결책을 준 (A)가 정답. (C)는 key를 "핵심"이라는 다른 뜻으로 반복한 함정.',
      ko: '창고 열쇠를 못 찾겠어요.', choicesKo: ['경비실에 확인해 보세요.', '그 방은 아주 넓어요.', '그게 핵심이에요.'],
      vocab: [['storage room', '창고'], ['security desk', '경비실, 보안 데스크']] },

    { id: 'p2-027', q: 'What did you think of the presentation?', voices: ['US', 'CA'],
      choices: ['It was very informative.', 'I\'ll present it tomorrow.', 'About thirty slides.'], answer: 0, type: 'What 의문문',
      explain: 'What did you think of ~?는 의견을 묻는 표현입니다. "아주 유익했어요"라고 답한 (A)가 정답.',
      ko: '발표 어땠어요?', choicesKo: ['아주 유익했어요.', '내일 제가 발표할게요.', '슬라이드 30장 정도요.'],
      vocab: [['informative', '유익한, 정보가 많은'], ['presentation', '발표']] },

    { id: 'p2-028', q: 'Why is the parking lot so crowded today?', voices: ['AU', 'US'],
      choices: ['There\'s a special event downtown.', 'I parked on the second level.', 'Yes, it\'s today.'], answer: 0, type: 'Why 의문문',
      explain: '왜 붐비는지 묻자 "시내에 특별 행사가 있어서"라고 이유를 말한 (A)가 정답. Because 없이 이유를 말하는 답도 많습니다.',
      ko: '오늘 주차장이 왜 이렇게 붐비죠?', choicesKo: ['시내에 특별 행사가 있어요.', '저는 2층에 주차했어요.', '네, 오늘이에요.'],
      vocab: [['parking lot', '주차장'], ['crowded', '붐비는']] },

    { id: 'p2-029', q: 'Would you mind closing the door?', voices: ['UK', 'AU'],
      choices: ['Not at all.', 'It\'s close to the station.', 'I don\'t mind the noise.'], answer: 0, type: '요청',
      explain: 'Would you mind ~ing?는 "~해도 괜찮을까요?"라는 부탁이고, Not at all(전혀요 = 해 드릴게요)이 수락입니다. (A)가 정답.',
      ko: '문 좀 닫아 주시겠어요?', choicesKo: ['그럼요(전혀 괜찮아요).', '역에서 가까워요.', '저는 소음은 신경 안 써요.'],
      vocab: [['Would you mind ~ing?', '~해 주시겠어요?'], ['close to', '~에 가까운']] },

    { id: 'p2-030', q: 'Has the shipment from Germany arrived?', voices: ['CA', 'US'],
      choices: ['It\'s expected this afternoon.', 'I\'ve never been to Germany.', 'The ship is very large.'], answer: 0, type: 'Yes/No 의문문',
      explain: '배송품이 도착했는지 묻자 "오늘 오후에 올 예정이에요"라고 답한 (A)가 정답. Yes/No 없이 답하는 경우가 많습니다. (C)는 shipment와 소리가 비슷한 ship 함정.',
      ko: '독일에서 오는 배송품이 도착했나요?', choicesKo: ['오늘 오후에 도착할 예정이에요.', '저는 독일에 가 본 적이 없어요.', '그 배는 아주 커요.'],
      vocab: [['shipment', '배송품, 수송'], ['be expected', '~할 예정이다']] },
  ];
  window.TOEIC_SETS = window.TOEIC_SETS || [];
  items.forEach(q => window.TOEIC_SETS.push({ id: 'set-' + q.id, part: 2, questions: [q] }));
})();
