

//instanciating variables
var seconds = 1500;
//state
var state = false;
//count the tomatos
var counter = 0;
//get elements from html
document.getElementById("stopBtn").addEventListener('click',StopIt,false);
document.getElementById("startBtn").addEventListener('click',Start,false);
document.getElementById("restart").addEventListener('click',restart,false);


//Counting_Down repeats every second
var loop = setInterval(Counting_Down,1000);

//functions

//time loop throw a function
function Counting_Down(){
	if(state){	//if start if choosen
	Show(seconds);//time gets updated
	seconds--;//seconds reduced by 1
		if(seconds<0){	//if time has ended
			counter++;	//increase counter
			document.getElementById("counter").innerHTML = counter;//update tomatos
			StopIt();//stop counting
		}
	}
}

//show in doc
function Show(sec){
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
	state = true;
}

//reset
function restart(){
	seconds = 1500;
	Start();
}