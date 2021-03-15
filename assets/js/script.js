let start_button = document.getElementById("#start_button");
var questions = document.getElementsByClassName(".questions");
var continaer = document.getElementsByClassName(".hidden")
var quiz = document.getElementsByClassName(".hidden")
var timerEl = document.getElementById("#timer1");
var secondsEl = document.getElementById("#time");
var NextButton = document.getElementById("#next");
var question = document.getElementById("question");
var ChoiceA = document.getElementById("A");
var ChoiceB = document.getElementById("B");
var ChoiceC = document.getElementById("C");
var ChoiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGuage = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var score = document.getElementById("score");


//questions
let questions = [
	{
		question: "Commonly used data types DO NOT include:",
		choiceA:"1.strings",
		ChoiceB:"2.Booleans",
		ChoiceC:"3.Alerts",
		ChoiceD: "4.Numbers"],
		Correct: "C"
	}	
	{
		question:"The condition in an if/else statement is enclose within____.",
		choiceA:"1.Quotes",
		ChoiceB:"2.Curly Brackets",
		ChoiceC:3.Parantheses",
		ChoiceD:"4.Square Brackets"
		Correct:"C"
	}
	{
		question:"Arrays in JavaScript can be used to store_______.",
		choiceA:"1.Numbers and Functions",
		ChoiceB:"2. ptjer arrays",
		ChoiceC:"3.Booleans",
		ChoiceD:"4.All of the above.",
		Correct:"D", 
	}
	{
		question:"Which of these is not used to loop?",
		choiceA:"1.for",
		ChoiceB:"2.while",
		ChoiceC:"3.foreach",
		ChoiceD:"4.sequence"
		Correct:"D",
	}
	];
//variables go here
	const lastQuestion =questions, length -1;
	let runingQuestion =0;
	let count =0;
	const questionTime =10;
	const guageWidth = 150;
	const guageUnit = guageWidth/ questionTime;
	let TIMER


	function renderQuestion(){
		let q = questions[runingQuestion];
		question.innerHTML="<p>"+ q.question +"</p>';
		ChoiceA.innerHTML= q.ChoiceA;
		ChoiceB.innerHTML= q.ChoiceB;
		ChoiceC.innerHTML= q.ChoiceC;
		ChoiceD.innerHTML= q.ChoiceD;
}

start.addEventListener("click"startQuiz)

function startQuiz(){
start.style.display= "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter ();
TIMER = setInterval(renderCounter, 1000);
}


function renderProgress(){
	for(let qIndex =0; qIndex <= lastQuestion;
	qIndex++){
		progress.innerHTML += "div class='prog' id="+ qIndex +"></div>;
	}
}


function renderCounter (){
 if (count < questionTime){
	 counter.innerHTML = count * guageUnit;
	 count++
	 {else{
	 count =0;
	 }
 }
}