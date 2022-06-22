/*jshint esversion: 6 */

// Wait until DOM is loaded before running the quiz
document.addEventListener('DOMContentLoaded', function () {});


// --------------------------------------------------------------Page1 Welcome section--


let home = document.getElementById('home');
let playerForm = document.getElementById('playername-form');
let playerName = document.getElementById('playername');

playerForm.addEventListener('submit', function (event) {
    home.style.display = 'none';
    rules.classList.remove('hide-content');
    player.innerHTML = "Hi " + playerName.value;
    event.preventDefault();
});


// -----------------------------------------------------------Page2 Quiz-rules section--


let rules = document.getElementById('rules');
let player = document.getElementById('player');
let startBttn = document.getElementById('start-button');
let quiz = document.getElementById('quiz');                    

startBttn.addEventListener('click', function () {
    rules.style.display = 'none';
    quiz.classList.remove('hide-content');
});


// ------------------------------------------------Page3/4 Quiz & Quiz-results section--


let question = document.getElementById('question');
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let nextQ = document.querySelector('.nextQ');
let points = document.getElementById('points');
let span = document.querySelectorAll('span');
let stat = document.getElementById('stat');
let results = document.getElementById('results');                    
let i = 0;
let score = 0;


//Function to display questions
function displayQuestion() {
    for (let a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question:" + ' ' + (i + 1) + ' ' + '/' + ' ' + questionBank.length;
    stat.style.fontSize = '300%';
}


//Function to calculate points
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'green';
    } else {
        document.getElementById(e.id).style.background = 'red';
    }
    setTimeout(nextQuestion, 500);
}


//Function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quiz.style.display = 'none';
        results.classList.remove('hide-content');
    }
}


//Next question click event button
nextQ.addEventListener('click', nextQuestion);


//Start Quiz Again event button
function startQuiz() {
    location.reload();
}


// ----------------------------------------------------------Page5 Quiz-answers section--


//Function to check correct answers
function checkAnswer() {
    let answersBox = document.getElementById('answersBox');
    let answers = document.getElementById('answers');
    results.style.display = 'none';
    answers.classList.remove('hide-content');

    for (let a = 0; a < questionBank.length; a++) {
        let list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answersBox.appendChild(list);
    }
}


// -----------------------------------------------------------------Quiz start section--
//Function to launch/start the first question
displayQuestion();

