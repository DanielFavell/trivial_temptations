const submitButton = document.querySelector("#submit");
const questionArray = [
    {
        question: "this a test question",
        correctAnswer: "testcorrect",
        possibleAnswers: ["testcorrect", "testincorrect", "why", "hope it works"],
    },
    {
        question: "I wonder if this works",
        correctAnswer: "testcorrect",
        possibleAnswers: ["testcorrect", "does it?", "how?", "hope so"],
    },
    {
        question: "What is the capital of England?",
        correctAnswer: "London",
        possibleAnswers: ["London", "Paris", "Cardiff", "Berlin"],
    },
];
let score = document.querySelector("#scoreNumber");
let randomQuestion = null;
const answerButtons = document.querySelectorAll(".answers-button");
let selectedAnswer = null;

function pageLoaded() {
    submitButton.addEventListener("click", submitAnswer);
    answerButtons.forEach(item => {
        item.addEventListener("click", updateSelectedAnswer)
    });
    newQuestion();
}

window.onload = pageLoaded();

setInterval(() => { 
    if(Number(document.querySelector('#timer').textContent) > 0){
    let timeRemaining = Number(document.querySelector('#timer').textContent);
    timeRemaining--
    document.querySelector('#timer').textContent = timeRemaining;
    }else{
        submitAnswer()
    }
  }, 1000);

function increaseScore() {
    score.textContent = Number(score.textContent)+1;
}

function decreaseScore() {
    score.textContent = Number(score.textContent)-1;
}

function submitAnswer() {
    if (randomQuestion.correctAnswer === selectedAnswer) {
        increaseScore();
    } else {
        decreaseScore();
    }
    newQuestion();
}

function newQuestion() {
    const questionText = document.querySelector("#question-text");
    randomQuestion = questionArray[randomQuestionFromArray()];
    questionText.textContent = randomQuestion.question;
    generateAnswers();
    selectedAnswer = null;
    document.querySelector('#timer').textContent = "10"
}

function randomQuestionFromArray() {
    return Math.floor(Math.random() * questionArray.length);
}

function generateAnswers() {
    let randomOffset = Math.floor(Math.random() * 4);
    for (let i = 0; i < randomQuestion.possibleAnswers.length; i++) {
            answerButtons[(i+randomOffset)%4].textContent = randomQuestion.possibleAnswers[i];
    }
}

function updateSelectedAnswer(){
selectedAnswer = this.innerText;
}