/* =========================================================
   Part 5 · 단문 빈칸 채우기 문제
   ---------------------------------------------------------
   문제 하나의 모양:
   {
     id: 'p5-001',               // 겹치지 않는 번호
     q: '문제 문장 (빈칸은 -------)',
     choices: ['A보기', 'B보기', 'C보기', 'D보기'],
     answer: 1,                  // 정답 위치: A=0, B=1, C=2, D=3
     type: '문제 유형',
     explain: '해설',
     ko: '문장 해석',
     vocab: [['영어단어', '뜻'], ...]
   }
   ========================================================= */
(function () {
  const items = [
    { id: 'p5-001', q: 'Ms. Patel asked the team members to submit ------- reports by Friday afternoon.',
      choices: ['they', 'their', 'them', 'theirs'], answer: 1, type: '대명사',
      explain: '명사 reports 앞에는 "~의"를 뜻하는 소유격이 와야 합니다. they(주격), them(목적격), theirs(소유대명사 = 그들의 것)는 명사 앞에 올 수 없습니다.',
      ko: '파텔 씨는 팀원들에게 금요일 오후까지 그들의 보고서를 제출하라고 요청했다.',
      vocab: [['submit', '제출하다'], ['report', '보고서']] },

    { id: 'p5-002', q: 'The new scheduling system allows staff to request time off more -------.',
      choices: ['easy', 'ease', 'easily', 'easier'], answer: 2, type: '품사(부사)',
      explain: '동사 request를 꾸미는 자리이므로 부사 easily가 정답입니다. more easily = "더 쉽게". easier는 이미 비교급이라 more와 함께 쓰지 않습니다.',
      ko: '새 일정 관리 시스템은 직원들이 휴가를 더 쉽게 신청할 수 있게 해 준다.',
      vocab: [['time off', '휴가, 휴무'], ['request', '요청하다']] },

    { id: 'p5-003', q: 'All visitors must sign in at the front desk ------- entering the laboratory.',
      choices: ['before', 'until', 'during', 'since'], answer: 0, type: '전치사',
      explain: '"실험실에 들어가기 전에" 서명해야 한다는 의미이므로 before가 정답입니다. during 뒤에는 -ing가 아니라 명사(during the meeting)가 옵니다.',
      ko: '모든 방문객은 실험실에 들어가기 전에 안내 데스크에서 서명해야 한다.',
      vocab: [['sign in', '(이름을 적고) 입실 기록을 하다'], ['laboratory', '실험실']] },

    { id: 'p5-004', q: 'The marketing department ------- a customer survey next month to measure satisfaction.',
      choices: ['conducted', 'will conduct', 'has conducted', 'conducting'], answer: 1, type: '동사 시제',
      explain: '"next month(다음 달)"는 미래를 나타내므로 미래 시제 will conduct가 정답입니다. 시간 표현(yesterday, next week 등)이 시제의 단서입니다.',
      ko: '마케팅 부서는 만족도를 측정하기 위해 다음 달에 고객 설문조사를 실시할 것이다.',
      vocab: [['conduct', '실시하다, 수행하다'], ['survey', '설문조사'], ['satisfaction', '만족(도)']] },

    { id: 'p5-005', q: '------- the heavy rain, the outdoor concert was held as scheduled.',
      choices: ['Although', 'Despite', 'Because', 'However'], answer: 1, type: '전치사 vs 접속사',
      explain: '빈칸 뒤에 명사구(the heavy rain)만 있으므로 전치사 Despite(~에도 불구하고)가 정답입니다. Although/Because는 접속사라서 뒤에 "주어+동사"가 와야 합니다.',
      ko: '폭우에도 불구하고 야외 콘서트는 예정대로 열렸다.',
      vocab: [['despite', '~에도 불구하고'], ['as scheduled', '예정대로']] },

    { id: 'p5-006', q: 'Applicants who have ------- experience in project management are encouraged to apply.',
      choices: ['extend', 'extensive', 'extensively', 'extension'], answer: 1, type: '품사(형용사)',
      explain: '명사 experience를 꾸미는 자리이므로 형용사 extensive(폭넓은)가 정답입니다. "형용사 + 명사" 구조를 기억하세요.',
      ko: '프로젝트 관리 분야에 폭넓은 경험이 있는 지원자들의 지원을 권장한다.',
      vocab: [['applicant', '지원자'], ['extensive', '폭넓은, 광범위한'], ['be encouraged to', '~하도록 권장되다']] },

    { id: 'p5-007', q: 'The quarterly report must be ------- by the finance manager before it is distributed.',
      choices: ['approve', 'approved', 'approving', 'approval'], answer: 1, type: '수동태',
      explain: '보고서는 "승인되는" 대상이므로 수동태 be + p.p.(approved)가 정답입니다. 뒤의 by the finance manager(재무 부장에 의해)도 수동태의 단서입니다.',
      ko: '분기 보고서는 배포되기 전에 재무 부장의 승인을 받아야 한다.',
      vocab: [['quarterly', '분기별의'], ['approve', '승인하다'], ['distribute', '배포하다']] },

    { id: 'p5-008', q: 'Mr. Kim is responsible ------- training new employees in the sales division.',
      choices: ['to', 'for', 'with', 'at'], answer: 1, type: '전치사(관용표현)',
      explain: 'be responsible for ~ = "~을 책임지다/담당하다"는 통째로 외워야 하는 표현입니다.',
      ko: '김 씨는 영업부의 신입 직원 교육을 담당하고 있다.',
      vocab: [['be responsible for', '~을 담당하다'], ['division', '부서']] },

    { id: 'p5-009', q: "The company's profits increased ------- after it launched its online store.",
      choices: ['significant', 'significance', 'significantly', 'signify'], answer: 2, type: '품사(부사)',
      explain: '동사 increased를 꾸미는 부사 significantly(상당히)가 정답입니다. 자동사(increase) 뒤에서 동사를 꾸미는 자리는 부사 자리입니다.',
      ko: '그 회사의 수익은 온라인 매장을 연 후 상당히 증가했다.',
      vocab: [['profit', '수익, 이익'], ['significantly', '상당히'], ['launch', '출시하다, 시작하다']] },

    { id: 'p5-010', q: 'Please contact the customer service team ------- you have any questions about your order.',
      choices: ['if', 'unless', 'whereas', 'so that'], answer: 0, type: '접속사',
      explain: '"질문이 있으면 연락하세요"라는 조건의 의미이므로 if가 정답입니다. unless는 "~하지 않으면", whereas는 "~인 반면", so that은 "~하도록"입니다.',
      ko: '주문에 관해 질문이 있으시면 고객 서비스팀에 연락해 주세요.',
      vocab: [['contact', '연락하다'], ['order', '주문']] },

    { id: 'p5-011', q: 'The CEO thanked the employees ------- hard work made the project a success.',
      choices: ['who', 'whom', 'whose', 'which'], answer: 2, type: '관계사',
      explain: '빈칸 뒤 hard work 앞에 "직원들의"라는 소유 의미가 필요하므로 소유격 관계대명사 whose가 정답입니다. whose 뒤에는 명사가 바로 옵니다.',
      ko: '최고경영자는 노고로 프로젝트를 성공으로 이끈 직원들에게 감사를 전했다.',
      vocab: [['CEO', '최고경영자'], ['success', '성공']] },

    { id: 'p5-012', q: "This year's sales figures are ------- than last year's.",
      choices: ['high', 'higher', 'highest', 'highly'], answer: 1, type: '비교급',
      explain: '뒤에 than(~보다)이 있으므로 비교급 higher가 정답입니다. "than이 보이면 비교급"을 기억하세요.',
      ko: '올해 매출 수치는 작년보다 높다.',
      vocab: [['sales figures', '매출 수치']] },

    { id: 'p5-013', q: 'The hotel offers a free shuttle service to guests ------- stay for three nights or more.',
      choices: ['who', 'which', 'what', 'whose'], answer: 0, type: '관계사',
      explain: '선행사가 사람(guests)이고 빈칸 뒤에 주어 없이 동사(stay)가 오므로 주격 관계대명사 who가 정답입니다.',
      ko: '그 호텔은 3박 이상 묵는 투숙객에게 무료 셔틀 서비스를 제공한다.',
      vocab: [['offer', '제공하다'], ['shuttle', '셔틀(왕복 차량)']] },

    { id: 'p5-014', q: 'Due to a scheduling -------, the meeting has been moved to Thursday.',
      choices: ['conflict', 'conflicting', 'conflicted', 'conflicts'], answer: 0, type: '품사(명사)',
      explain: '관사 a 뒤이므로 단수 명사 conflict가 정답입니다. scheduling conflict(일정 충돌)는 토익 빈출 표현입니다. conflicts는 복수라 a와 함께 못 씁니다.',
      ko: '일정 충돌로 인해 회의가 목요일로 옮겨졌다.',
      vocab: [['due to', '~ 때문에'], ['scheduling conflict', '일정 충돌']] },

    { id: 'p5-015', q: 'The manager will ------- the proposal carefully before making a final decision.',
      choices: ['review', 'reviews', 'reviewed', 'reviewing'], answer: 0, type: '동사 형태',
      explain: '조동사 will 뒤에는 항상 동사원형이 옵니다. 그래서 review가 정답입니다.',
      ko: '매니저는 최종 결정을 내리기 전에 제안서를 꼼꼼히 검토할 것이다.',
      vocab: [['proposal', '제안(서)'], ['review', '검토하다']] },

    { id: 'p5-016', q: 'The factory has ------- its production capacity to meet growing demand.',
      choices: ['expanded', 'explained', 'expired', 'exposed'], answer: 0, type: '어휘',
      explain: '"늘어나는 수요를 맞추기 위해 생산 능력을 확장했다"가 자연스러우므로 expanded(확장하다)가 정답입니다. explain 설명하다, expire 만료되다, expose 노출시키다.',
      ko: '그 공장은 늘어나는 수요를 충족하기 위해 생산 능력을 확장했다.',
      vocab: [['expand', '확장하다'], ['capacity', '능력, 용량'], ['demand', '수요']] },

    { id: 'p5-017', q: 'Ms. Lopez has worked at the law firm ------- 2015.',
      choices: ['for', 'since', 'from', 'during'], answer: 1, type: '전치사(시간)',
      explain: '현재완료(has worked) + 시작 시점(2015)이면 since(~부터, ~이래로)가 정답입니다. for 뒤에는 기간(for ten years)이 옵니다.',
      ko: '로페즈 씨는 2015년부터 그 법률 회사에서 일해 왔다.',
      vocab: [['law firm', '법률 회사']] },

    { id: 'p5-018', q: 'Neither the director ------- the assistant was available to answer the call.',
      choices: ['or', 'and', 'nor', 'but'], answer: 2, type: '상관접속사',
      explain: 'neither A nor B = "A도 B도 아닌"은 짝으로 외워야 합니다. either A or B, both A and B, not only A but also B도 함께 기억하세요.',
      ko: '부장도 비서도 전화를 받을 수 없었다.',
      vocab: [['available', '(시간이) 되는, 이용 가능한'], ['assistant', '비서, 보조']] },

    { id: 'p5-019', q: 'The training session was so ------- that many participants asked for a follow-up workshop.',
      choices: ['inform', 'information', 'informative', 'informatively'], answer: 2, type: '품사(형용사)',
      explain: 'be동사(was) 뒤에서 주어를 설명하는 보어 자리이고, so 뒤에 오므로 형용사 informative(유익한)가 정답입니다.',
      ko: '교육 세션이 매우 유익해서 많은 참가자들이 후속 워크숍을 요청했다.',
      vocab: [['informative', '유익한'], ['participant', '참가자'], ['follow-up', '후속의']] },

    { id: 'p5-020', q: 'Customers can return items within 30 days of purchase, ------- they keep the original receipt.',
      choices: ['provided that', 'in case of', 'despite', 'because of'], answer: 0, type: '접속사',
      explain: '빈칸 뒤에 "주어+동사"(they keep)가 있으므로 접속사가 필요합니다. provided that(~라는 조건으로)이 정답입니다. 나머지는 모두 전치사(구)라서 명사만 받습니다.',
      ko: '원본 영수증을 보관하고 있다면, 고객은 구매 후 30일 이내에 물품을 반품할 수 있다.',
      vocab: [['provided that', '~라는 조건으로'], ['purchase', '구매'], ['receipt', '영수증']] },

    { id: 'p5-021', q: 'Our new office is ------- located near the subway station.',
      choices: ['convenient', 'conveniently', 'convenience', 'conveniences'], answer: 1, type: '품사(부사)',
      explain: 'be동사와 과거분사(located) 사이에서 분사를 꾸미는 자리는 부사입니다. conveniently located(편리한 곳에 위치한)는 토익 빈출 표현입니다.',
      ko: '우리의 새 사무실은 지하철역 근처 편리한 곳에 위치해 있다.',
      vocab: [['conveniently located', '편리한 곳에 위치한']] },

    { id: 'p5-022', q: "The board members ------- the budget proposal at yesterday's meeting.",
      choices: ['discuss', 'will discuss', 'discussed', 'are discussing'], answer: 2, type: '동사 시제',
      explain: "yesterday's meeting(어제 회의)이라는 과거 시점이 있으므로 과거 시제 discussed가 정답입니다.",
      ko: '이사회 구성원들은 어제 회의에서 예산안을 논의했다.',
      vocab: [['board', '이사회'], ['budget', '예산']] },

    { id: 'p5-023', q: 'Please ------- the attached document and sign it by Wednesday.',
      choices: ['read', 'reading', 'to read', 'reads'], answer: 0, type: '동사 형태(명령문)',
      explain: 'Please 뒤에는 동사원형으로 시작하는 명령문이 옵니다. and 뒤의 sign도 원형인 것이 단서입니다.',
      ko: '첨부된 문서를 읽고 수요일까지 서명해 주세요.',
      vocab: [['attached', '첨부된'], ['sign', '서명하다']] },

    { id: 'p5-024', q: 'The shipment was delayed ------- bad weather conditions at the port.',
      choices: ['because', 'due to', 'although', 'so'], answer: 1, type: '전치사 vs 접속사',
      explain: '빈칸 뒤에 명사구(bad weather conditions)만 있으므로 전치사구 due to(~ 때문에)가 정답입니다. because는 접속사라 뒤에 "주어+동사"가 필요합니다.',
      ko: '항구의 악천후로 인해 배송이 지연되었다.',
      vocab: [['shipment', '배송(품), 선적'], ['delay', '지연시키다'], ['port', '항구']] },

    { id: 'p5-025', q: 'Since Mr. Davis is on vacation, Ms. Chen will lead the workshop -------.',
      choices: ['her', 'herself', 'hers', 'she'], answer: 1, type: '대명사(재귀)',
      explain: '문장이 이미 완전한 상태에서 "직접, 스스로"라는 강조를 더할 때 재귀대명사 herself를 씁니다.',
      ko: '데이비스 씨가 휴가 중이므로 첸 씨가 직접 워크숍을 진행할 것이다.',
      vocab: [['on vacation', '휴가 중인'], ['lead', '이끌다, 진행하다']] },
  ];

  window.TOEIC_SETS = window.TOEIC_SETS || [];
  items.forEach(it => window.TOEIC_SETS.push({ id: it.id, part: 5, questions: [it] }));
})();
