//mostly functional
//instanciating variables
var seconds = 1500;
//state
var state = false;
//
var notABreak = true;
//count the tomatos
var counter = 0;

//get elements from html
document.getElementById("stopBtn").addEventListener('click',StopIt,false);
document.getElementById("startBtn").addEventListener('click',Start,false);
document.getElementById("tomato").addEventListener('click',setTo25,false);
document.getElementById("shortBreak").addEventListener('click',setTo5,false);
document.getElementById("longBreak").addEventListener('click',setTo10,false);


//Counting_Down repeats every second
var loop = setInterval(Counting_Down,1000);

//functions

//time loop throw a function
function Counting_Down(){
	if(state){	//if start if choosen
		Show(seconds);//time gets updated
		seconds--;//seconds reduced by 1
		increaseTomatos();
	}
}

//show in doc
function Show(sec){
	//Calculate time
	var seconds = sec%60;
	var minutes = Math.floor(sec/60);
	document.getElementById("demo").innerHTML = minutes + " : " + seconds;
	
}

//stops contdown
function StopIt(){
	state = false;
}

//start
function Start(){
	state=true;
}


//tomato
function setTo25(){
	seconds = 1500;
	notABreak = true;
	state = true;
	document.getElementById("demo").innerHTML = "25 : 00";
}
//short break
function setTo5(){
	seconds = 300;
	state = true;
	notABreak = false;
	document.getElementById("demo").innerHTML = "05 : 00";
}

//long break
function setTo10(){
	seconds = 600;
	state = true;
	notABreak = false;
	document.getElementById("demo").innerHTML = "10: 00";
}

function increaseTomatos(){
	if(seconds<0){
		if(notABreak){
		counter++;
		document.getElementById("counter").innerHTML = counter;
		}
		StopIt();
	}
}
