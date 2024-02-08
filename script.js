const submitButton = document.querySelector("#submit");
let questionArray = [];
let questionObject = [];
let possibleQuestions = [];
let score = document.querySelector("#scoreNumber");
let currentQuestion = null;
const answerButtons = document.querySelectorAll(".answers-button");
let selectedAnswer = null;
let questionNumber = 0
let gameEnded = false;

function pageLoaded() {
    submitButton.addEventListener("click", submitAnswer);
    answerButtons.forEach(item => {
        item.addEventListener("click", updateSelectedAnswer)
    });
    startGame()
}

async function generateQuestionArray() {
    let temp;
    const res = await fetch("html_questions.json")
    temp = await res.json();
    return temp
}

function saveInfo(info) {
    questionObject = info;
}

window.onload = pageLoaded();

setInterval(() => {
    if (!gameEnded){
        if (Number(document.querySelector('#timer').textContent) > 0) {
            let timeRemaining = Number(document.querySelector('#timer').textContent);
            timeRemaining--
            document.querySelector('#timer').textContent = timeRemaining;
        } else {
            submitAnswer()
        }
    }
}, 1000);

function increaseScore() {
    score.textContent = Number(score.textContent) + 1;
}

// function decreaseScore() {
//     // score.textContent = Number(score.textContent) - 1;
// }
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key].trim() === value);
}
function submitAnswer() {
    if(gameEnded){
        startGame()
    }
    else{
    if (currentQuestion.correct_answer === getKeyByValue(currentQuestion.options, selectedAnswer)) {
        increaseScore();
    }
    // else {
    //     decreaseScore();
    // }
    questionNumber++
    document.querySelector(".off").classList = "on"
    if (questionNumber >= 9) {
        if (score.textContent === "10"){
            document.querySelector(".results").innerHTML = `<span class="perfect">Perfect</span> You answered 10 From 10`
            }
            else if(Number(score.textContent) >= 5){
                document.querySelector(".results").innerHTML = `<span class="good">Good</span> You have answered more than 5 From 10`
            }else{
                document.querySelector(".results").innerHTML = `<span class="try_again">Try Again</span> You have answered less than 5 From 10`
            }
            submitButton.innerText = "Reset"
            submitButton.classList.add("redButton")
        gameEnded = true;
    }
    newQuestion();
}
}

function newQuestion() {
    const questionText = document.querySelector("#question-text");
    currentQuestion = questionArray[questionNumber];
    console.log("generateQuestion")
    questionText.textContent = currentQuestion.question;
    generateAnswers();
    selectedAnswer = null;
    document.querySelector('#timer').textContent = "10"
}

// function randomNumberGenerator() {
//     return Math.floor(Math.random() * questionArray.length);
// }

function generateAnswers() {
    answerButtons[0].textContent = currentQuestion.options.a;
    answerButtons[1].textContent = currentQuestion.options.b;
    answerButtons[2].textContent = currentQuestion.options.c;
    answerButtons[3].textContent = currentQuestion.options.d;
}

function updateSelectedAnswer() {
    selectedAnswer = this.innerText;
}

async function startGame(){
    gameEnded = false;
    questionNumber = 0;
    questionArray = [];
    questionObject = await generateQuestionArray();
    questionObject = questionObject.questions;
    possibleQuestions = [];
    let progress = document.querySelectorAll(".on");
    document.querySelector("#submit").classList.remove("redButton")
    submitButton.innerText = "Next"
    for (let circle of progress){
        circle.classList = "off"
    }
    document.querySelector(".off").classList.replace("off","on")
    document.querySelector(".results").innerHTML = ``
    while (possibleQuestions.length < 10) {
        possibleQuestions.push(Math.floor(Math.random() * 31))
    }
    for (let i = 0; questionArray.length < 10; i++) {
        questionArray.push(questionObject[possibleQuestions[i]])
    }
    score.textContent = "0"
    newQuestion();
}