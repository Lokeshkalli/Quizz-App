 const QuestionData = [
	{
		questionText: "Commonly used data types DO NOT include:",
		options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
		answerIndex: 2,
	},
	{
		questionText: "Arrays in JavaScript can be used to store ______.",
		options: [
			"1. numbers and strings",
			"2. other arrays",
			"3. booleans",
			"4. all of the above",
		],
		answerIndex: 3,
	},
	{
		questionText:
			"String values must be enclosed within _____ when being assigned to variables.",
		options: [
			"1. commas",
			"2. curly brackets",
			"3. quotes",
			"4. parentheses",
		],
		answerIndex: 2,
	},
	{
		questionText:
			"A very useful tool used during development and debugging for printing content to the debugger is:",
		options: [
			"1. JavaScript",
			"2. terminal/bash",
			"3. for loops",
			"4. console.log",
		],
		answerIndex: 3,
	},
	{
		questionText:
			"Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
		options: ["1. break", "2. stop", "3. halt", "4. exit"],
		answerIndex: 0,
	},
];

// Click Event

let index=1
let previndex=index;
var ans = 0


let start_button = document.getElementById("button_1");
start_button.addEventListener("click",update);
//Intro Event
let intro_section = document.getElementById("intro");
// Question Event
let question_section = document.getElementById("q_main");
let question =document.getElementById("question");
//options Event
let option_buttons = document.querySelectorAll(".option")
option_buttons.forEach(button => button.addEventListener("click",checkAns))

let timerElement = document.getElementById("timer")
let check_block = document.getElementById("check")

//score board
let score_board = document.getElementById("scoreboard")
let scoreupdate = document.getElementById("scoreb")
let prevHigh = document.getElementById("prevHigh")
let goback = document.getElementById("goback")
let timeInSeconds =60;
let id1;
let id2;
let intervalId;


let highScore = parseInt(localStorage.getItem('highScore')) || 0;
let currentScore = 0;

function updateScore() {
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('highScore', highScore);
    }
    scoreupdate.textContent = currentScore;
    // displayHighScore();
}
function update(){
	// timer()
	// Timerupdate()
	currentScore = 0
	timeInSeconds=60;
	index=1;
	intro_section.style.display ="none";
	question_section.style.display="flex";
	clearInterval(Timerupdate)
	Timerupdate()
	// timeInSeconds=60
	
	
}
function Timerupdate(){
	
	intervalId=setInterval(() => {

		const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
		const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
		timerElement.textContent = `${minutes}:${seconds}`;
		
		if (timeInSeconds > 0) {
		  timeInSeconds--;
		} 
		// else if(index<=QuestionData.length){ }
		else {
			timerElement.textContent = "Time's up!";
			clearInterval(intervalId);
		  
		}
	  }, 1000);
    
}


function checkAns(e){
	
	checkin(e,index-1);
	setInterval(function(){return},1000);
	return nextQuestion(e)
	
}


function nextQuestion(e){
	// console.log(e.target.textContent)
	if(index < QuestionData.length){
		let interval =setInterval(function(){
			console.log("Hola")
		const newData=QuestionData[index++];
		   question.innerHTML = newData.questionText;
		for(var i =0; i<option_buttons.length;i++){
			option_buttons[i].innerHTML = newData.options[i];
		}
		
		clearInterval(interval);
	
		},700);
		

	}
	
	

}
function finished(){
	question_section.style.display = "none";

	// intro_section.style.display = "inline-block"
	score_board.style.display = "flex";
	scoreupdate.innerHTML = currentScore;
	console.log("highcore"+ highScore)
	prevHigh.innerHTML = highScore
	updateScore()
	goback.addEventListener("click",function(){
		score_board.style.display = "none";
		intro_section.style.display = "inline-block";
	})

	
	

}

function checkin(e,index){
	let ansIndex=QuestionData[index].answerIndex;
	console.log(QuestionData[index].options[ansIndex])
	if(QuestionData[index].options[ansIndex]==e.target.textContent){
		check_block.style.display="block";
		e.target.style.background ="Green"
		currentScore+=1;
		let para = document.getElementById("result");
		para.innerHTML = "Correct Answer!!!";
		// Timerupdate();
		clearInterval(id1)
		id1= setInterval(()=>{
			e.target.style.background = "#218380"
			check_block.style.display="none";

			
		},700)
	}
	else{
		check_block.style.display="block";
		e.target.style.background ="Red"
		let para = document.getElementById("result");
		timeInSeconds-=10;
		para.innerHTML = "InCorrect Answer!!!"
		clearInterval(id2)
		id2=setInterval(()=>{
			e.target.style.background = "#218380"

			check_block.style.display="none";
		},700)
	}
	if(index == QuestionData.length-1){
		
		finished()
		// clearInterval(interval)
		timeInSeconds=-1
		
	}


}
