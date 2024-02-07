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
let score = 0;
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

function increaseScore() {
    score += 1;
}

function decreaseScore() {
    score -= 1;
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
}

function randomQuestionFromArray() {
    return Math.floor(Math.random() * questionArray.length);
}

function generateAnswers() {
    for (let i = 0; i < randomQuestion.possibleAnswers.length; i++) {
            answerButtons[i].textContent = randomQuestion.possibleAnswers[i];
    }
}

function updateSelectedAnswer(){
selectedAnswer = this.innerText;
}