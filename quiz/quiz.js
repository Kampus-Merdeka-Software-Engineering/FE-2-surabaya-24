/*create variables by element*/
const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")

/*counter for current questions and score */
let currentQuestion = 0;
let score = 0;

/*array of questions */
let questions = [
   {
       question: "True or False: tea was discovered in China when the leaves accidentally fell into boiling water.",
       answers: [
           {option: "True", answer: true},
           {option: "False", answer: false},
       ]
   },
   {
       question: "the famous tea ceremony in Japan that has started way back in the 8th century is called...",
       answers: [
           {option: "matcha", answer: false},
           {option: "sado", answer: true},
           {option: "chasen", answer: false},
           {option: "mochi", answer: false},
       ]
   },
   {

       question: "which European country that has an obsession with having tea in the afternoon?",
       answers: [
           {option: "Swedish", answer: false},
           {option: "France", answer: false},
           {option: "England", answer: true},
           {option: "the Netherlands", answer: false}
       ]
   },
   {
    question: "The tea brewed with various aromatic spices is called Pu-erh tea",
    answer: [
        {option: "True", answer: false},
        {option: "false", answer: true}
    ]
   },
   {
    question: "Genmaicha is a 'popcorn' tea from Japan",
    answer: [
        {option: "True", answer:true},
        {option: "Falsa", answer:false}
    ]
   }
]

/*add on click events to button */
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

/*function beginQuiz */
function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    prevBtn.classList.add("hide");
}
 
beginQuiz();

/*function restart quiz for reset score */
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

/*function next to jump next questions*/
function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
 
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    prevBtn.classList.remove("hide");
}

/*function previous to go back to previous questions*/
function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    nextBtn.classList.remove("hide");
}

/*submit button */
function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Congratulations on enhancing your tea knowledge! Did you get it all right? if not go back to our History of Tea to learn more! Like the wise man has always says... let the creativi-tea flows~"
 }

