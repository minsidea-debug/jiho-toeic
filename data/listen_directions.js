/* 리스닝 실전 모드 · 파트 시작 전 안내(Directions)
   실제 시험처럼 각 파트 문제 전에 진행 방법을 들려줌. 문장은 직접 작성 (ETS 원문 복제 아님)
   intro = 리스닝 전체 안내(세션의 첫 리스닝 파트 앞에서만), 1~4 = 파트별 안내
   음성: audio/dir-intro.mp3, audio/dir-p1.mp3 … (sources/tts/make_audio.py) */
window.TOEIC_LC_DIR = {
  intro: {
    en: 'Listening Test. In the Listening test, you will hear a variety of spoken English and answer questions to show how well you understand it. The Listening test has four parts and lasts about forty-five minutes. Directions will be given before each part. Choose the best answer for each question. Each recording will be played only once.',
    ko: '리스닝 시험입니다. 여러 가지 영어 말하기를 듣고, 얼마나 잘 이해하는지 문제에 답합니다. 리스닝은 4개 파트, 약 45분입니다. 각 파트 전에 안내가 나옵니다. 각 문제에 가장 알맞은 답을 고르세요. 모든 음성은 한 번만 들려줍니다.',
  },
  1: {
    en: 'Part 1. Directions. For each question in this part, you will see a photograph and hear four statements about it. The statements are not printed in your test book, and you will hear them only once. Choose the statement that best describes what you see in the photograph.',
    ko: 'Part 1 안내. 각 문제마다 사진 한 장을 보고 사진에 대한 문장 4개를 듣습니다. 문장은 시험지에 인쇄되어 있지 않고 한 번만 들려줍니다. 사진을 가장 잘 묘사한 문장을 고르세요.',
  },
  2: {
    en: 'Part 2. Directions. You will hear a question or a statement, followed by three responses. They are not printed in your test book, and you will hear them only once. Choose the best response to the question or statement.',
    ko: 'Part 2 안내. 질문이나 말 한 문장을 듣고, 이어서 응답 3개를 듣습니다. 시험지에 인쇄되어 있지 않고 한 번만 들려줍니다. 질문이나 말에 가장 알맞은 응답을 고르세요.',
  },
  3: {
    en: 'Part 3. Directions. You will hear some conversations between two or more people. You will be asked to answer three questions about what the speakers say in each conversation. The questions and answer choices are printed in your test book. The conversations will be played only once.',
    ko: 'Part 3 안내. 두 명 이상이 나누는 대화를 듣습니다. 대화마다 화자들이 말한 내용에 대해 3문제에 답합니다. 문제와 보기는 시험지에 인쇄되어 있습니다. 대화는 한 번만 들려줍니다.',
  },
  4: {
    en: 'Part 4. Directions. You will hear some talks given by a single speaker. You will be asked to answer three questions about what the speaker says in each talk. The questions and answer choices are printed in your test book. The talks will be played only once.',
    ko: 'Part 4 안내. 한 사람이 하는 담화를 듣습니다. 담화마다 화자가 말한 내용에 대해 3문제에 답합니다. 문제와 보기는 시험지에 인쇄되어 있습니다. 담화는 한 번만 들려줍니다.',
  },
};
