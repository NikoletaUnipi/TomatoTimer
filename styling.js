//javaScript for the styling 

document.getElementById("tomato").addEventListener("click",TomatoStyle);
document.getElementById("shortBreak").addEventListener("click",ShortBreakStyle);
document.getElementById("longBreak").addEventListener("click",longBreakStyle);


function TomatoStyle(){
	document.getElementsByClassName("container")[0].style.backgroundColor = "black";
}

function ShortBreakStyle(){
	document.getElementsByClassName("container")[0].style.backgroundColor  = "#f05930";
}

function longBreakStyle(){
	document.getElementsByClassName("container")[0].style.backgroundColor  = "#6bbd28";
}