/*copas? ijin dulu yah sama authornya*/
let seconds = 0;
let minutes = 0;

let displaySeconds = 0;
let displayMinutes = 0;
	
let status = 'Stopped';
let interval = '';
	
function Start() {
	seconds++
	if(seconds/60 == 1){
		seconds = 0;
		minutes++;
	}
	if(seconds < 10){
		displaySeconds = '0' + seconds.toString();
	} else{
		displaySeconds = seconds;
	}
	if(minutes < 10){
		displayMinutes = '0' + minutes.toString();
	} else{
		displayMinutes = minutes;
	}
	document.getElementById('display').innerHTML = displayMinutes + ":" + displaySeconds;
}
function startStop(){
	if(status == 'Stopped'){
		interval = window.setInterval(Start,1000);
		document.getElementById('start-btn').innerHTML = 'Stop';
		status = 'Started';
	} else if(status == 'Started'){
		window.clearInterval(interval);
		document.getElementById('start-btn').innerHTML = 'Start';
		status = 'Stopped';
	}
}
function Reset(){
	seconds = 0;
	minutes = 0;
	window.clearInterval(interval);
	document.getElementById('display').innerHTML = '00:00';
	document.getElementById('start-btn').innerHTML = 'Start';
	status = 'Stopped';
}

function Input(){
	var rubiksCube = document.getElementById('rubiks-cube').value;
	var timeHistory = prompt('Time');
	
	document.getElementById('rubik-type').innerHTML=(rubiksCube);
	document.getElementById('timehistory').innerHTML=(timeHistory);
}