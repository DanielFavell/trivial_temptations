const submitButton = document.querySelector("#submit");
const questionArray = [["this a test question"],["I wonder if this works"]];
let score = 0;

function pageLoaded() {
    submitButton.addEventListener("click", submitAnswer)
}

window.onload = pageLoaded();

function increaseScore(){
score += 1
}

function decreaseScore(){
    score -= 1
}

function submitAnswer(){
const correctAnswer = null;
const selectedAnswer = null;
if (correctAnswer === selectedAnswer){
    increaseScore();
}else{
    decreaseScore();
}
newQuestion()
}



function newQuestion(){
    const questionText = document.querySelector("#question-text");
    const randomQuestion = questionArray[randomNumber()];
    questionText.textContent = randomQuestion[0]
}

function randomNumber(){
   return Math.floor(Math.random() * questionArray.length)
}