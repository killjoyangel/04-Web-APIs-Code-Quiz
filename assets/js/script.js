var timeEl = document.querySelector(".time");
var secondsLeft = 30;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}


var questionIndex = 0;
var startbutton = document.querySelector(".start-button");
var introText = document.querySelector("#intro");
var quiz = document.querySelector("#quiz");
function startQuiz() {
  setTime()
  startbutton.setAttribute("class", "hide");
  introText.setAttribute("class", "hide");
  displayQuestion();
}



var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices:["strings","Booleans","Alerts", "Numbers"],
    answer: "Alerts"
  },

  {
    title: "Arrays in JavaScript can be used to store_______.",
    choices:["Numbers and Functions","ptjer arrays","Booleans", "All of the above."],
    answer: "All of the Above"
  },
  {
    title: "Which of these is not used to loop?",
    choices: ["for", "while", "foreach", "sequence"],
    answer: "sequence"
  },

]

function displayQuestion() {
  quiz.innerHTML = "";
  var currentQuestion = questions[questionIndex]
  var title = document.createElement("h2")
  title.textContent = currentQuestion.question;
  quiz.append(title)

  for (i = 0; i < currentQuestion.choices.length; i++) {
    var button = document.createElement("button")
    button.textContent = currentQuestion.choices[i]
    button.setAttribute("class", "choice")
    button.setAttribute("value", currentQuestion.choices[i])
    button.onclick = confirmAnswer
    quiz.append(button)
  }
}
function confirmAnswer() {
  if (this.value !== questions[questionIndex].answer) {
    secondsLeft -= 5
    timeEl.textContent = secondsLeft
  }
  else {
    secondsLeft += 5
    timeEl.textContent = secondsLeft
  }
  questionIndex++
  displayQuestion()
}


startbutton.onclick = startQuiz;

