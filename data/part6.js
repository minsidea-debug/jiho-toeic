/* =========================================================
   Part 6 · 장문 빈칸 채우기
   ---------------------------------------------------------
   지문 속 빈칸은 [[1]], [[2]] ... 로 표시하고
   각 문제의 blank 번호와 맞춥니다.
   ========================================================= */
(function () {
  window.TOEIC_SETS = window.TOEIC_SETS || [];
  window.TOEIC_SETS.push(
    {
      id: 'p6-001', part: 6, title: 'E-mail · 주차장 공사 안내',
      passage:
`To: All Staff
From: Facilities Management
Subject: Parking Lot Repairs

Please be advised that the north parking lot will be closed from June 3 to June 7 for repaving. During this period, employees [[1]] to use the south lot or the public garage on Elm Street. The company will cover the cost of parking at the garage. To receive [[2]], simply submit your parking receipts to the front desk. [[3]]

We apologize for any inconvenience and appreciate your [[4]] while the work is completed.`,
      ko:
`수신: 전 직원 / 발신: 시설관리팀 / 제목: 주차장 보수

북쪽 주차장이 재포장 공사로 6월 3일부터 6월 7일까지 폐쇄됨을 알려드립니다. 이 기간 동안 직원들은 남쪽 주차장이나 엘름 가의 공영 주차장을 이용하시기 바랍니다. 공영 주차장 주차 비용은 회사가 부담합니다. 비용을 환급받으려면 주차 영수증을 안내 데스크에 제출하기만 하면 됩니다. 영수증은 6월 14일까지 제출해야 합니다.

불편을 드려 죄송하며, 공사가 끝날 때까지 양해해 주셔서 감사합니다.`,
      questions: [
        { id: 'p6-001-1', blank: 1, q: '빈칸 (1)에 들어갈 가장 알맞은 것은?',
          choices: ['encourage', 'are encouraged', 'encouraging', 'have encouraged'], answer: 1, type: '수동태',
          explain: '직원들은 "권장을 받는" 입장이므로 수동태 are encouraged가 정답입니다. be encouraged to + 동사원형 = "~하도록 권장되다".',
          vocab: [['be encouraged to', '~하도록 권장되다']] },
        { id: 'p6-001-2', blank: 2, q: '빈칸 (2)에 들어갈 가장 알맞은 것은?',
          choices: ['reimburse', 'reimbursed', 'reimbursement', 'reimbursing'], answer: 2, type: '품사(명사)',
          explain: '동사 receive(받다)의 목적어 자리이므로 명사 reimbursement(환급)가 정답입니다.',
          vocab: [['reimbursement', '환급, 상환'], ['receipt', '영수증']] },
        { id: 'p6-001-3', blank: 3, q: '빈칸 (3)에 들어갈 가장 알맞은 문장은?',
          choices: ['Receipts must be submitted by June 14.', 'The north lot was built ten years ago.', 'Our cafeteria menu will change next week.', 'Please arrive at the meeting on time.'],
          answer: 0, type: '문장 삽입',
          explain: '바로 앞 문장이 "영수증을 제출하라"는 내용이므로, 제출 기한을 알려주는 (A)가 자연스럽게 이어집니다. 문장 삽입 문제는 앞뒤 문장과의 연결을 확인하세요.',
          vocab: [['submit', '제출하다']] },
        { id: 'p6-001-4', blank: 4, q: '빈칸 (4)에 들어갈 가장 알맞은 것은?',
          choices: ['patience', 'patient', 'patiently', 'patients'], answer: 0, type: '품사(명사)',
          explain: '소유격 your 뒤에는 명사가 옵니다. appreciate your patience(기다려 주셔서/양해해 주셔서 감사합니다)는 공지문 단골 표현입니다. patients는 "환자들"이라 의미가 맞지 않습니다.',
          vocab: [['appreciate', '감사하다'], ['patience', '인내, 양해'], ['inconvenience', '불편']] },
      ],
    },
    {
      id: 'p6-002', part: 6, title: 'Notice · 도서관 무료 워크숍',
      passage:
`Greenfield Library – Community Workshop Series

Greenfield Library is pleased to announce a new series of free workshops for local residents. The sessions will [[1]] a variety of practical topics, including résumé writing, personal budgeting, and basic computer skills. Each workshop lasts about 90 minutes and is led by an experienced [[2]].

Space is limited, so registration is required. [[3]] Residents can sign up at the information desk or on the library's Web site. [[4]] questions about the series should be directed to Ms. Ana Torres at 555-0182.`,
      ko:
`그린필드 도서관 – 지역 주민 워크숍 시리즈

그린필드 도서관은 지역 주민을 위한 새로운 무료 워크숍 시리즈를 알려드리게 되어 기쁩니다. 이 강좌들은 이력서 작성, 개인 예산 관리, 기초 컴퓨터 활용 등 다양한 실용적인 주제를 다룰 예정입니다. 각 워크숍은 약 90분 동안 진행되며 경험 많은 강사가 이끕니다.

자리가 한정되어 있어 사전 등록이 필요합니다. 각 강좌는 최대 20명까지 수용할 수 있습니다. 주민들은 안내 데스크나 도서관 웹사이트에서 신청할 수 있습니다. 이 시리즈에 관한 문의는 555-0182번 애나 토레스 씨에게 하시기 바랍니다.`,
      questions: [
        { id: 'p6-002-1', blank: 1, q: '빈칸 (1)에 들어갈 가장 알맞은 것은?',
          choices: ['cover', 'covers', 'covering', 'covered'], answer: 0, type: '동사 형태',
          explain: '조동사 will 뒤에는 동사원형이 옵니다. cover는 여기서 "(주제를) 다루다"라는 뜻입니다.',
          vocab: [['cover', '(주제를) 다루다'], ['a variety of', '다양한']] },
        { id: 'p6-002-2', blank: 2, q: '빈칸 (2)에 들어갈 가장 알맞은 것은?',
          choices: ['instruct', 'instructor', 'instruction', 'instructive'], answer: 1, type: '품사(명사)',
          explain: '형용사 experienced(경험 많은) 뒤에는 명사가 오며, 워크숍을 "이끄는" 것은 사람이므로 instructor(강사)가 정답입니다. instruction은 "지시, 설명"이라 사람이 아닙니다.',
          vocab: [['instructor', '강사'], ['experienced', '경험 많은']] },
        { id: 'p6-002-3', blank: 3, q: '빈칸 (3)에 들어갈 가장 알맞은 문장은?',
          choices: ['Each session can accommodate up to 20 participants.', 'The library was renovated last spring.', 'Laptops are available for purchase.', 'Late fees have recently increased.'],
          answer: 0, type: '문장 삽입',
          explain: '앞 문장 "자리가 한정되어 있어 등록이 필요하다"와 이어지려면 정원(20명)을 알려주는 (A)가 가장 자연스럽습니다.',
          vocab: [['accommodate', '수용하다'], ['registration', '등록']] },
        { id: 'p6-002-4', blank: 4, q: '빈칸 (4)에 들어갈 가장 알맞은 것은?',
          choices: ['Any', 'Every', 'Much', 'Each'], answer: 0, type: '수량 표현',
          explain: '뒤의 questions가 복수 명사이므로 Any가 정답입니다. Every와 Each는 단수 명사, Much는 셀 수 없는 명사와 함께 씁니다.',
          vocab: [['be directed to', '~에게 보내지다(문의하다)']] },
      ],
    }
  );
})();
