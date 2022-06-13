
// Wait until DOM is loaded before running the quiz
document.addEventListener('DOMContentLoaded', function() {});

// --------------------------------------------------------------------------------Variables section--

// Page1 variables
let home = document.getElementById('home');
let playerForm = document.getElementById('playername-form');
let playerName = document.getElementById('playername');
// let enterBttn = document.getElementById('enter-button');

// Page2 variables
let rules = document.getElementById('rules');
let playerOne = document.getElementById('playerOne');
let startBttn = document.getElementById('start-button');
let restartBttn = document.getElementById('restart-button');

// Page3 variables


// Page4 variables
let results = document.getElementById('results');
let playerTwo = document.getElementById('player-two');

// Page5 variables
let feedback = document.getElementById('feedback');

// -----------------------------------------------------------------------------Page1 Welcome section--

playerForm.addEventListener('submit', function(event) {
    home.style.display = 'none';
    rules.classList.remove('hide-content');
    playerOne.innerHTML = "Hi " + playerName.value;
    event.preventDefault();
});

// --------------------------------------------------------------------------Page2 Quiz-rules section--

startBttn.addEventListener('click', function() {
    rules.classList.add('hide-content');
    quiz.classList.remove('hide-content');
});



// --------------------------------------------------------------------------------Page3 Quiz section--

let quiz = document.getElementById('quiz');

let currentQuestion = 0;
let score = 0;
let totalQuestions = questions.length;

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
    
// displayQuestionNumberRef.innerHTML = `<h1>Question ${questionNumber} of ${questions.length}</h1>`;
};

// function checkAnswer(answer) {
//     if (answer === questions[currentQuiz].correct) {
//       score++;
//       correctAnswers++;
//     } else {
//       incorrectAnswers++;
//     }
//     currentQuiz++;
//     questionNumber++;
//     return;
//   }





function loadNextQuestion () {
    let selectedOption = document.querySelector('input[type=radio]:checked');
    
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }

    let answer = selectedOption.value;
    if(questions[currentQuestion].answer === answer) {
        score += 1;
    }
    
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totalQuestions) {
        quiz.classList.add('hide-content')
        results.classList.remove('hide-content');
        resultContainer.textContent = 'Your score is: ' + score + ' out of 10';
        // playerTwo.innerHTML = "Congratulation " + playerName.value + ' !';
        return;
    }
    loadQuestion(currentQuestion);
}



loadQuestion(currentQuestion);

restartBttn.addEventListener('click', function() {
    home.style.display = '';
    rules.classList.add('hide-content');
    quiz.classList.add('hide-content');
    results.classList.add('hide-content');
    feedback.classList.add('hide-content');
    
    let currentQuestion = 0;
    let score = 0;

    // loadQuestion();
    loadQuestion(currentQuestion);
});






// function restart() {
//     currentQuestion = 0;
//     home.style.display = '';

//     prevBtn.classList.remove("hide");
//     nextBtn.classList.remove("hide");
//     submitBtn.classList.remove("hide");
//     trueBtn.classList.remove("hide");
//     falseBtn.classList.remove("hide");
//     score = 0;
//     userScore.innerHTML = score;
//     beginQuiz();
//  }