var answer = document.getElementById("answer");
var timerElement = document.getElementById("timer1");
var seconds = document.getElementById("time");
var startButton = document.getElementById("start-button");
var startPageEl = document.getElementById("startpage");
var quizEl = document.getElementById("quiz");
var allDoneEl = document.getElementById("all-done");
var questions = document.getElementById('questions');
var currentIndex = 0;
var quizbuttons = document.querySelectorAll('.Quizbutton')
var quiz= [
  {
      title: "Commonly used data types DO NOT include:",
      choices:["1.strings","2.Booleans","3.Alerts", ".4Numbers"],
      answer: "3.Alerts"
  },
  
  {
      title: "The condition in an if/else statement is enclose within____.",
      choices:["1.Quotes","2.Curly Brackets","3.Parantheses", "4.Square Brackets"],
      answer: "3.Parantheses"
  },
  
  {
      title: "Arrays in JavaScript can be used to store_______.",
      choices:["1.Numbers and Functions","2. ptjer arrays","3.Booleans", "4.All of the above."],
      answer: "4.All of the Above"
  },
  
  {
      title: "Which of these is not used to loop?",
      choices: ["1.for", "2.while", "3.foreach", "4.sequence"],
      answer: "sequence"
  },];

function timerBegin() {
  console.log("start-timer")
  var timerInterval = setInterval(function() {
    secondsLeft--;
    seconds.textContent = secondsLeft

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      allDoneEl.textContent = "All Done"   
    }
  }, 1000);
}

function startGame() {
  console.log("hello")
  timerCounter = 75;
  //startButton.disabled = hidden; */ 
  startPageEl.classList.add("hidden");
  allDoneEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  questions.classList.display = "block";
  timerBegin();
  let count = 0;
  //beginQuiz();
  }
  startButton.addEventListener('click', startGame)



/*function beginQuiz(){
  console.log("quiz begin")
choice1.textContent = "1.strings";
choice1.style.display = "block"
}*/

//*scores
var beginningScore = 0;
var questIndex = 0;
var highScore = 0;
var timer;
var secondsLeft = 75;
var timerCounter;
var guess;
var winGame;
var counter = 0;
var getWins;

function init() {
  getWins();
}

function display () {
  questionEl.textContent = codeQuestions[counter].question
}

function startTimer() {
  timer = setInterval(function () {
  timerCounter --;
  timerElement.textContent = timerCounter;
  if (timerCounter <= 0) {
      if (isWin && timerCounter > 0) {
        clearInterval(timer);
        winGame();
      }
    }

    if (timerCounter === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}


document.addEventListener("keydown", function (event) {
  if (timerCount === 0) {
    return;
  }
})

  function getWins() {
  var storedWins = localStorage.getItem("winCount");
    if (storedWins === null) {
    var winCounter = 0;
    } else {
    winCounter = storedWins;
    }
  }

  startButton.addEventListener("click", startGame);

  init();
  var resetButton = document.querySelector(".reset-button");
  function resetGame() {
  winCounter = 0;
  beginningScore = 0;
  questIndex = 0;
  setWins()
  }
