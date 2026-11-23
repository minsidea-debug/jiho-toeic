/* =========================================================
   Part 7 · 독해
   ---------------------------------------------------------
   지문(passage) 하나에 문제 여러 개(questions).
   ========================================================= */
(function () {
  window.TOEIC_SETS = window.TOEIC_SETS || [];
  window.TOEIC_SETS.push(
    {
      id: 'p7-001', part: 7, title: 'E-mail · 호텔 예약 확인',
      passage:
`To: Daniel Ortiz <dortiz@brightmail.com>
From: Harbor View Hotel <reservations@harborviewhotel.com>
Date: March 12
Subject: Reservation Confirmation

Dear Mr. Ortiz,

Thank you for choosing the Harbor View Hotel. This e-mail confirms your reservation for a deluxe ocean-view room from April 5 to April 8 (3 nights). Your room rate of $180 per night includes a daily breakfast buffet and free Wi-Fi.

Check-in begins at 3:00 P.M., and check-out is at 11:00 A.M. If you expect to arrive after 10:00 P.M., please let us know in advance so that we can hold your room.

As you mentioned that you will be attending the Coastal Business Forum, we would like to inform you that our hotel provides a complimentary shuttle to the convention center every 30 minutes from 7:00 A.M. to 6:00 P.M.

Should you need to cancel, please do so at least 48 hours before your arrival date to avoid a one-night charge.

We look forward to welcoming you.

Sincerely,
Grace Lim
Reservations Manager`,
      ko:
`오르티스 씨께,

하버뷰 호텔을 선택해 주셔서 감사합니다. 이 이메일은 4월 5일부터 4월 8일까지(3박) 디럭스 오션뷰 객실 예약을 확인해 드리는 것입니다. 1박 180달러의 객실 요금에는 매일 조식 뷔페와 무료 와이파이가 포함됩니다.

체크인은 오후 3시부터, 체크아웃은 오전 11시입니다. 밤 10시 이후 도착 예정이시면 객실을 보류해 둘 수 있도록 미리 알려 주십시오.

코스털 비즈니스 포럼에 참석하신다고 하셨기에, 저희 호텔이 오전 7시부터 오후 6시까지 30분마다 컨벤션 센터로 가는 무료 셔틀을 운행한다는 것을 알려드립니다.

취소가 필요하시면 1박 요금 청구를 피하기 위해 도착일 최소 48시간 전에 취소해 주십시오.

뵙기를 고대합니다.
그레이스 림, 예약 담당 매니저`,
      questions: [
        { id: 'p7-001-1', q: 'What is the purpose of the e-mail?',
          choices: ['To confirm a booking', 'To advertise a new service', 'To request a payment', 'To announce a price change'], answer: 0, type: '주제/목적',
          explain: '첫 문단 "This e-mail confirms your reservation"에서 예약 확인이 목적임을 알 수 있습니다. 목적 문제의 답은 대개 첫 부분에 있습니다. reservation = booking (같은 뜻 바꿔 말하기)',
          ko: '이메일의 목적은 무엇인가?',
          vocab: [['confirm', '확인하다'], ['booking', '예약']] },
        { id: 'p7-001-2', q: 'What is indicated about Mr. Ortiz?',
          choices: ['He will stay for one week.', 'He is attending an event.', 'He has stayed at the hotel before.', 'He requested a late check-out.'], answer: 1, type: '세부 사항',
          explain: '"you will be attending the Coastal Business Forum"에서 행사(포럼)에 참석한다는 것을 알 수 있습니다. 숙박은 3박이고, 나머지 내용은 지문에 없습니다.',
          ko: '오르티스 씨에 대해 언급된 것은?',
          vocab: [['indicate', '나타내다, 언급하다'], ['attend', '참석하다']] },
        { id: 'p7-001-3', q: 'What should Mr. Ortiz do if he arrives late at night?',
          choices: ['Call a taxi', 'Use the shuttle service', 'Contact the hotel beforehand', 'Pay an extra fee'], answer: 2, type: '세부 사항',
          explain: '"If you expect to arrive after 10:00 P.M., please let us know in advance" → 미리 호텔에 알려야 합니다. let us know in advance = contact the hotel beforehand.',
          ko: '오르티스 씨가 밤늦게 도착한다면 무엇을 해야 하는가?',
          vocab: [['in advance', '미리'], ['beforehand', '사전에'], ['complimentary', '무료의']] },
      ],
    },
    {
      id: 'p7-002', part: 7, title: 'Text messages · 회의 시간 변경',
      passage:
`Mina Park (9:12 A.M.)
Hi Jason, are you at the office yet? The client from Lexon Corp. just called. They want to move today's meeting to 2:00 P.M.

Jason Reed (9:14 A.M.)
I'm on the train now. I should be there by 9:45. Is the conference room free at 2?

Mina Park (9:15 A.M.)
I'm afraid Room A is booked. But Room C is open all afternoon.

Jason Reed (9:16 A.M.)
That works. Could you reserve it and let the client know?

Mina Park (9:17 A.M.)
Sure thing. I'll also print the updated sales figures.

Jason Reed (9:18 A.M.)
Thanks, you're a lifesaver.`,
      ko:
`박미나 (오전 9:12) 제이슨, 사무실에 도착했어요? 렉슨사 고객이 방금 전화했어요. 오늘 회의를 오후 2시로 옮기고 싶대요.
제이슨 리드 (9:14) 지금 기차 안이에요. 9시 45분까지는 도착할 거예요. 2시에 회의실 비어 있나요?
박미나 (9:15) 아쉽게도 A실은 예약되어 있어요. 하지만 C실은 오후 내내 비어 있어요.
제이슨 리드 (9:16) 그거면 돼요. 예약하고 고객에게 알려줄 수 있어요?
박미나 (9:17) 물론이죠. 최신 매출 자료도 출력해 둘게요.
제이슨 리드 (9:18) 고마워요, 덕분에 살았어요.`,
      questions: [
        { id: 'p7-002-1', q: 'Why did Ms. Park contact Mr. Reed?',
          choices: ['To report a schedule change', 'To ask for sales figures', 'To cancel a meeting', 'To confirm his travel plans'], answer: 0, type: '주제/목적',
          explain: '"They want to move today\'s meeting to 2:00 P.M." → 회의 일정 변경을 알리려고 연락했습니다. 회의를 취소(cancel)한 것이 아니라 옮긴(move) 것입니다.',
          ko: '박 씨는 왜 리드 씨에게 연락했는가?',
          vocab: [['client', '고객'], ['move (a meeting)', '(회의를) 옮기다']] },
        { id: 'p7-002-2', q: 'At 9:16 A.M., what does Mr. Reed most likely mean when he writes, "That works"?',
          choices: ['He agrees to use Room C.', 'He has finished his report.', 'He will arrive on time.', 'The printer is working again.'], answer: 0, type: '의도 파악',
          explain: '바로 앞에서 "C실은 오후 내내 비어 있다"고 했고, 이어서 "그걸 예약해 달라"고 하므로 C실을 쓰는 데 동의한다는 뜻입니다. 의도 파악 문제는 바로 앞 메시지를 보세요.',
          ko: '오전 9시 16분에 리드 씨가 "That works"라고 쓴 의도는 무엇이겠는가?',
          vocab: [['That works.', '그거 좋아요(괜찮아요).'], ['reserve', '예약하다']] },
      ],
    },
    {
      id: 'p7-003', part: 7, title: 'Article · 지역 빵집 2호점 오픈',
      passage:
`LOCAL BAKERY EXPANDS TO SECOND LOCATION

(April 20) — Sunrise Bakery, a popular family-owned shop on Maple Avenue, will open its second location in the Riverside Shopping Center next month. Owner Helen Brooks started the business twelve years ago with just two employees. Today, the bakery employs over twenty people and is known for its whole-grain breads and seasonal fruit pies.

"Our customers kept telling us that they wished we were closer to the east side of town," said Ms. Brooks. "The new shop will make it easier for them to visit us."

The Riverside location will be larger than the original store and will include a seating area for up to 40 customers. In addition, it will offer baking classes on weekends. Ms. Brooks plans to hire ten new staff members, and applications are being accepted on the bakery's Web site until May 1.`,
      ko:
`지역 빵집, 2호점으로 확장

(4월 20일) — 메이플 가의 인기 있는 가족 운영 빵집 선라이즈 베이커리가 다음 달 리버사이드 쇼핑센터에 2호점을 연다. 사장 헬렌 브룩스는 12년 전 단 두 명의 직원과 함께 사업을 시작했다. 현재 이 빵집은 20명이 넘는 직원을 두고 있으며 통곡물 빵과 계절 과일 파이로 유명하다.

"고객들이 저희가 시내 동쪽에 더 가까웠으면 좋겠다고 계속 말씀하셨어요." 브룩스 씨가 말했다. "새 매장이 생기면 고객들이 더 쉽게 방문할 수 있을 거예요."

리버사이드 매장은 기존 매장보다 크며 최대 40명이 앉을 수 있는 좌석 공간을 갖출 예정이다. 또한 주말에는 제빵 수업도 열 것이다. 브룩스 씨는 신규 직원 10명을 채용할 계획이며, 지원서는 5월 1일까지 빵집 웹사이트에서 받는다.`,
      questions: [
        { id: 'p7-003-1', q: 'What is the article mainly about?',
          choices: ['A business opening a new store', 'A change in bakery ownership', 'The opening of a shopping center', 'A local baking competition'], answer: 0, type: '주제/목적',
          explain: '제목 "EXPANDS TO SECOND LOCATION"과 첫 문장 "will open its second location"에서 새 매장 개점에 관한 기사임을 알 수 있습니다.',
          ko: '이 기사는 주로 무엇에 관한 것인가?',
          vocab: [['expand', '확장하다'], ['location', '지점, 매장']] },
        { id: 'p7-003-2', q: 'According to the article, why is Sunrise Bakery opening a second location?',
          choices: ['Its rent has increased.', 'Customers wanted a more convenient location.', 'The original store is closing.', 'It recently won an award.'], answer: 1, type: '세부 사항',
          explain: '"Our customers kept telling us that they wished we were closer to the east side of town" → 고객들이 더 가까운(편리한) 매장을 원했기 때문입니다.',
          ko: '기사에 따르면, 선라이즈 베이커리는 왜 2호점을 여는가?',
          vocab: [['according to', '~에 따르면'], ['convenient', '편리한']] },
        { id: 'p7-003-3', q: 'What is NOT mentioned about the new location?',
          choices: ['It will have a seating area.', 'It will offer classes.', 'It will be open 24 hours a day.', 'It will need new employees.'], answer: 2, type: 'NOT 문제',
          explain: 'NOT 문제는 보기를 하나씩 지문과 대조하세요. 좌석(seating area), 수업(baking classes), 신규 채용(hire ten new staff)은 모두 나오지만 24시간 영업은 언급되지 않았습니다.',
          ko: '새 매장에 대해 언급되지 않은 것은?',
          vocab: [['mention', '언급하다'], ['hire', '채용하다'], ['application', '지원(서)']] },
      ],
    }
  );
})();
