/* =========================================================
   Part 1 · 사진 묘사 (리스닝) — 문장은 직접 창작 (ETS 기출 복제 아님)
   사진: StockSnap CC0 (퍼블릭 도메인) → images/part1/ , 출처는 CREDITS.md
   ---------------------------------------------------------
   문제 하나의 모양:
   {
     id: 'p1-001',
     img: 'images/part1/p1-01.jpg',
     q: '사진 내용 (한국어, 오답노트·결과 화면에서 보임)',
     choices: ['(A) 문장', '(B)', '(C)', '(D)'],   // 소리로만 나오고 풀기 전엔 안 보임
     answer: 0,             // A=0 ~ D=3
     voice: 'US',           // US·UK·AU·CA
     type: '사람 동작 / 사물 상태 ...',
     explain: '해설',
     choicesKo: ['해석', ...]
   }
   ========================================================= */
(function () {
  const items = [
    { id: 'p1-001', img: 'images/part1/p1-01.jpg', voice: 'US', q: '사진: 여자가 카페 탁자에서 노트북으로 타자를 치고 있다.', type: '1인 동작',
      choices: ['She\'s drinking from a cup.', 'She\'s typing on a laptop.', 'She\'s putting on her glasses.', 'She\'s arranging some flowers.'], answer: 1,
      explain: '여자는 노트북 자판에 손을 올리고 타자를 치고 있습니다. 컵·안경·꽃은 사진에 보이지만 그것으로 동작을 하고 있지는 않아요. "보이는 물건 + 틀린 동작" 함정입니다.',
      choicesKo: ['그녀는 컵으로 마시고 있다.', '그녀는 노트북으로 타자를 치고 있다.', '그녀는 안경을 쓰고 있다.', '그녀는 꽃을 꽂고(정리하고) 있다.'] },

    { id: 'p1-002', img: 'images/part1/p1-02.jpg', voice: 'UK', q: '사진: 남자가 책상에 발을 올리고 휴대전화로 통화하며 시계를 보고 있다.', type: '1인 동작',
      choices: ['He\'s cleaning a desk.', 'He\'s closing a laptop.', 'He\'s resting his feet on a desk.', 'He\'s taking off his jacket.'], answer: 2,
      explain: '남자는 책상 위에 발을 올려 두고 있습니다(rest one\'s feet on ~). 노트북은 열려 있고, 재킷은 입고 있습니다.',
      choicesKo: ['그는 책상을 닦고 있다.', '그는 노트북을 닫고 있다.', '그는 책상 위에 발을 올려놓고 있다.', '그는 재킷을 벗고 있다.'] },

    { id: 'p1-003', img: 'images/part1/p1-03.jpg', voice: 'AU', q: '사진: 남자가 사무실에서 서서 전화 통화를 하고, 뒤에서 사람들이 이야기하고 있다.', type: '1인 동작',
      choices: ['A man is talking on the phone.', 'A man is climbing the stairs.', 'Some people are sitting at a table.', 'A man is hanging up his coat.'], answer: 0,
      explain: '앞의 남자는 휴대전화를 귀에 대고 통화 중입니다. 뒤의 사람들은 서 있고, 계단은 보이기만 할 뿐 오르는 사람은 없습니다.',
      choicesKo: ['남자가 전화 통화를 하고 있다.', '남자가 계단을 오르고 있다.', '몇몇 사람들이 탁자에 앉아 있다.', '남자가 코트를 걸고 있다.'] },

    { id: 'p1-004', img: 'images/part1/p1-04.jpg', voice: 'CA', q: '사진: 회의 탁자 위에 노트북·태블릿·휴대전화·컵이 있고, 여자들이 앉아 있다.', type: '사물 위치',
      choices: ['The chairs are stacked in a corner.', 'A woman is writing on a whiteboard.', 'Some devices have been placed on a table.', 'Cups are being washed in a sink.'], answer: 2,
      explain: '탁자 위에 노트북, 태블릿, 휴대전화 같은 기기가 놓여 있습니다. have been placed(놓여 있다)는 사물 상태를 묘사하는 대표 표현입니다.',
      choicesKo: ['의자들이 구석에 쌓여 있다.', '여자가 화이트보드에 쓰고 있다.', '몇몇 기기들이 탁자 위에 놓여 있다.', '컵들이 개수대에서 씻기고 있다.'] },

    { id: 'p1-005', img: 'images/part1/p1-05.jpg', voice: 'US', q: '사진: 사람이 나무 벤치에 앉아 신문을 펼쳐 들고 있다.', type: '1인 동작',
      choices: ['A person is folding a towel.', 'A person is holding up a newspaper.', 'A person is painting a bench.', 'A person is buying a magazine.'], answer: 1,
      explain: '얼굴 앞으로 신문을 펼쳐 들고(hold up) 있습니다. bench는 보이지만 칠하고 있지 않아요.',
      choicesKo: ['사람이 수건을 개고 있다.', '사람이 신문을 들고 있다.', '사람이 벤치를 칠하고 있다.', '사람이 잡지를 사고 있다.'] },

    { id: 'p1-006', img: 'images/part1/p1-06.jpg', voice: 'UK', q: '사진: 사람이 주전자로 커피 드리퍼에 물을 붓고 있다.', type: '1인 동작',
      choices: ['Someone is pouring water from a kettle.', 'Someone is wiping a counter.', 'Someone is opening a bag of coffee beans.', 'Someone is serving a customer at a table.'], answer: 0,
      explain: '주전자(kettle)에서 물을 붓고(pour) 있습니다. 카페 관련 단어(coffee beans, customer)를 넣은 오답에 주의하세요.',
      choicesKo: ['누군가 주전자로 물을 붓고 있다.', '누군가 조리대를 닦고 있다.', '누군가 원두 봉지를 열고 있다.', '누군가 탁자에서 손님에게 음식을 내고 있다.'] },

    { id: 'p1-007', img: 'images/part1/p1-07.jpg', voice: 'AU', q: '사진: 헬멧을 쓴 사람이 자전거 전용 도로에서 자전거를 타고 있다.', type: '1인 동작',
      choices: ['A cyclist is parking a bicycle.', 'A man is crossing the street on foot.', 'A cyclist is riding in a bike lane.', 'A worker is painting lines on the road.'], answer: 2,
      explain: '자전거 그림이 그려진 전용 도로(bike lane)에서 자전거를 타고 있습니다. 도로의 선은 이미 그려져 있는 상태라 (D)는 틀립니다.',
      choicesKo: ['자전거 타는 사람이 자전거를 세우고 있다.', '남자가 걸어서 길을 건너고 있다.', '자전거 타는 사람이 자전거 도로를 달리고 있다.', '작업자가 도로에 선을 칠하고 있다.'] },

    { id: 'p1-008', img: 'images/part1/p1-08.jpg', voice: 'CA', q: '사진: 큰 배가 밧줄로 부두에 묶여 정박해 있다.', type: '사물 상태',
      choices: ['A ship is sailing in the open sea.', 'Passengers are getting off a boat.', 'A flag is being lowered.', 'A ship is tied to a pier.'], answer: 3,
      explain: '배가 밧줄로 부두(pier)에 묶여 있습니다(be tied to). 사람이 내리거나 깃발을 내리는 동작은 없습니다.',
      choicesKo: ['배가 넓은 바다를 항해하고 있다.', '승객들이 배에서 내리고 있다.', '깃발이 내려지고 있다.', '배가 부두에 묶여 있다.'] },

    { id: 'p1-009', img: 'images/part1/p1-09.jpg', voice: 'US', q: '사진: 여자가 텃밭에서 물뿌리개로 식물에 물을 주고 있다.', type: '1인 동작',
      choices: ['She\'s watering some plants.', 'She\'s cutting the grass.', 'She\'s planting a tree.', 'She\'s filling a bucket with water.'], answer: 0,
      explain: '물뿌리개로 식물에 물을 주고(water) 있습니다. water가 동사로 쓰인 것에 주의하세요.',
      choicesKo: ['그녀는 식물에 물을 주고 있다.', '그녀는 잔디를 깎고 있다.', '그녀는 나무를 심고 있다.', '그녀는 양동이에 물을 채우고 있다.'] },

    { id: 'p1-010', img: 'images/part1/p1-10.jpg', voice: 'UK', q: '사진: 여자들이 횡단보도를 건너고 있다.', type: '여러 사람',
      choices: ['Cars are stopped at a traffic light.', 'Some pedestrians are crossing the street.', 'Women are waiting at a bus stop.', 'A road is being repaired.'], answer: 1,
      explain: '보행자(pedestrians)들이 횡단보도로 길을 건너고 있습니다. 신호등·버스 정류장·공사는 사진의 중심이 아닙니다.',
      choicesKo: ['차들이 신호등에서 멈춰 있다.', '보행자들이 길을 건너고 있다.', '여자들이 버스 정류장에서 기다리고 있다.', '도로가 수리되고 있다.'] },

    { id: 'p1-011', img: 'images/part1/p1-11.jpg', voice: 'AU', q: '사진: 책장 선반마다 책이 가득 꽂혀 있고, 일부는 눕혀 쌓여 있다.', type: '사물 상태',
      choices: ['A woman is reading in a library.', 'Some boxes are being unpacked.', 'Books have been arranged on shelves.', 'The shelves are empty.'], answer: 2,
      explain: '사람이 없는 사진입니다. 책들이 선반에 정리되어 있는(have been arranged) 상태를 묘사한 (C)가 정답. 사람이 없는 사진에 사람 동작 문장은 바로 오답입니다.',
      choicesKo: ['여자가 도서관에서 책을 읽고 있다.', '상자들의 짐이 풀리고 있다.', '책들이 선반에 정리되어 있다.', '선반이 비어 있다.'] },

    { id: 'p1-012', img: 'images/part1/p1-12.jpg', voice: 'CA', q: '사진: 여자가 옷걸이에 걸린 옷들을 살펴보고 있다.', type: '1인 동작',
      choices: ['She\'s trying on a scarf.', 'She\'s folding some shirts.', 'She\'s paying at a counter.', 'She\'s looking through some clothes.'], answer: 3,
      explain: '걸려 있는 옷들을 넘겨 보며 살펴보고(look through) 있습니다. 목도리는 이미 하고 있는 상태라, 지금 해 보는(trying on) 동작이 아닙니다.',
      choicesKo: ['그녀는 목도리를 둘러 보고 있다.', '그녀는 셔츠를 개고 있다.', '그녀는 계산대에서 돈을 내고 있다.', '그녀는 옷들을 살펴보고 있다.'] },

    { id: 'p1-013', img: 'images/part1/p1-13.jpg', voice: 'US', q: '사진: 안경 쓴 남자가 손잡이를 잡고 기차에 오르고 있다.', type: '1인 동작',
      choices: ['He\'s boarding a train.', 'He\'s buying a ticket.', 'He\'s reading a schedule.', 'He\'s removing his glasses.'], answer: 0,
      explain: '손잡이를 잡고 기차에 타고(board) 있습니다. 안경은 쓰고 있는 상태라 벗는(remove) 동작은 틀립니다.',
      choicesKo: ['그는 기차에 타고 있다.', '그는 표를 사고 있다.', '그는 시간표를 읽고 있다.', '그는 안경을 벗고 있다.'] },

    { id: 'p1-014', img: 'images/part1/p1-14.jpg', voice: 'UK', q: '사진: 미술관에서 한 사람이 벽에 걸린 그림을 바라보고 있다.', type: '1인 동작',
      choices: ['A woman is hanging a picture on the wall.', 'A woman is mopping the floor.', 'A woman is looking at a painting.', 'Visitors are standing in a line.'], answer: 2,
      explain: '그림을 바라보고(look at) 있습니다. 그림은 이미 걸려 있으니 거는(hanging) 동작은 오답. 사람은 한 명뿐이라 (D)도 틀립니다.',
      choicesKo: ['여자가 벽에 그림을 걸고 있다.', '여자가 바닥을 대걸레로 닦고 있다.', '여자가 그림을 보고 있다.', '방문객들이 줄을 서 있다.'] },
  ];
  window.TOEIC_SETS = window.TOEIC_SETS || [];
  items.forEach(q => window.TOEIC_SETS.push({ id: 'set-' + q.id, part: 1, questions: [q] }));
})();
