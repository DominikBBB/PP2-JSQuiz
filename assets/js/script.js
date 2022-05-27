document.addEventListener('DOMContentLoaded', function() {});

let homeEl = document.getElementById('home');
let playerNameEl = document.getElementById('playername');
let form = document.getElementById('playername-form');

let startButtonEl = document.getElementById('quiz-start');
let rulesEl = document.getElementById('rules');
let playerEl = document.getElementById('player');
let quizEl = document.getElementById('quiz');



form.addEventListener('submit', function(event) {
    homeEl.style.display = 'none';
    rulesEl.classList.remove('hide-content');
    playerEl.innerHTML = "Hi " + playerNameEl.value;
    event.preventDefault();
});


startButtonEl.addEventListener('click', function() {
    rulesEl.classList.add('hide-content');
    quizEl.classList.remove('hide-content');
});




let totalQuestions = questions.length;
let currentQuestion = 0;
let score = 0;

let container = document.getElementById('quizContainer');
let questionElement = document.getElementById('question');

let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');

let nextButton = document.getElementById('nextButton');
let resultContainer = document.getElementById('result');


function loadQuestion (questionsIndex) {
    let q = questions[questionsIndex];
    questionElement.textContent = (questionsIndex + 1) + '. ' + q.question;
    opt1.textContent = q.a1;
    opt2.textContent = q.a2;
    opt3.textContent = q.a3;
    opt4.textContent = q.a4;
};


function loadNextQuestion () {
    let selectedOption = document.querySelector('input[type=radio]:checked');
    
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }

    let answer = selectedOption.value;
    if(questions[currentQuestion].answer === answer) {
        score += 10;
    }
    
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        resultContainer.style.display = '';
        resultContainer.textContent = 'Your score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);