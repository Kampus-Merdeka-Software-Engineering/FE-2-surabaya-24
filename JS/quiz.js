const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

let currentQuestion = 0;
let score = 0;

let questions = [
  {
    question:
      "True or False: tea was discovered in China when the leaves accidentally fell into boiling water.",
    answers: [
      { option: "True", answer: true },
      { option: "False", answer: false },
    ],
  },
  {
    question:
      "the famous tea ceremony in Japan that has started way back in the 8th century is called...",
    answers: [
      { option: "matcha", answer: false },
      { option: "sado", answer: true },
    ],
  },
  {
    question:
      "which European country that has an obsession with having tea in the afternoon?",
    answers: [
      { option: "France", answer: false },
      { option: "England", answer: true },
    ],
  },
  {
    question:
      "The tea brewed with letious aromatic spices is called Pu-erh tea",
    answers: [
      { option: "True", answer: false },
      { option: "False", answer: true },
    ],
  },
  {
    question: "Genmaicha is a 'popcorn' tea from Japan",
    answers: [
      { option: "True", answer: true },
      { option: "False", answer: false },
    ],
  },
];

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);

function beginQuiz() {
  currentQuestion = 0;
  totalScore.innerHTML = questions.length;
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 5) {
      next();
    }
  };

  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 5) {
      next();
    }
  };

  prevBtn.classList.add("hide");
}

beginQuiz();

function restart() {
  currentQuestion = 0;
  prevBtn.classList.remove("hide");
  nextBtn.classList.remove("hide");
  submitBtn.classList.remove("hide");
  trueBtn.classList.remove("hide");
  falseBtn.classList.remove("hide");
  score = 0;
  userScore.innerHTML = score;
  beginQuiz();
}

function next() {
  currentQuestion++;
  if (currentQuestion >= 4) {
    nextBtn.classList.add("hide");
    prevBtn.classList.remove("hide");
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  prevBtn.classList.remove("hide");
}

function prev() {
  currentQuestion--;
  if (currentQuestion <= 0) {
    nextBtn.classList.remove("hide");
    prevBtn.classList.add("hide");
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].answer) {
      if (score < 5) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) {
      next();
    }
  };

  nextBtn.classList.remove("hide");
}

function submit() {
  prevBtn.classList.add("hide");
  nextBtn.classList.add("hide");
  submitBtn.classList.add("hide");
  trueBtn.classList.add("hide");
  falseBtn.classList.add("hide");
  questionText.innerHTML =
    "Congratulations on enhancing your tea knowledge! Did you get it all right? if not go back to our Product page to learn more! Like the wise man has always says... let the creativi-tea flows~";
}
