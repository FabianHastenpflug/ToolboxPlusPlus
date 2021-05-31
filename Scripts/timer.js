var h = 0;
var m = 0;
var s = 0;


document.getElementById("hours").innerHTML = 0;
document.getElementById("minutes").innerHTML = 0;
document.getElementById("seconds").innerHTML = 0;

var barRange = 0;
var minusBarRange = 0;


var timerid;

function seti() {
	minusBarRange = 0; //resettet, falls ohne Reload neuer Timer
	barRange = 0;
	if (document.getElementById('h').value != "") {
		h = parseInt(document.getElementById('h').value);
		barRange = barRange + h * 60 * 60;
	}
	if (document.getElementById('m').value != "") {
		m = parseInt(document.getElementById('m').value);
		barRange = barRange + m * 60;
	}
	if (document.getElementById('s').value != "") {
		s = parseInt(document.getElementById('s').value);
		barRange = barRange + s;
	}
}

function start(flag) {
	if (flag == 'stopwatch') {
		timerid = setInterval(stopwatch, 1000);
	} //stopwatch 1x/Sekunde
	else if (flag == 'reset') {
		clearInterval(timerid);
		document.getElementById("hours").innerHTML = "";
		document.getElementById("minutes").innerHTML = "";
		document.getElementById("seconds").innerHTML = "";
		document.getElementById("stopped").innerHTML = h + " " + m + " " + s;
		h = 0;
		m = 0;
		s = 0;
	} else {
		seti();
		timerid = setInterval(timer, 1000);
	} //timer 1x/Sekunde
}

function timer() {
	if (s <= 0 && m <= 0 && h <= 0) {
		clearInterval(timerid);

	} //wenn Timer abgelaufen, dann endet Intervall-Funktion
	else {
		if (s > 0) {
			s--; //Sekunden zählen runter, solange > 0
		} else if (m != 0 && s == 0) {
			m--; //Minuten zählen runter, wenn Minuten nicht aber Sekunden bei 0 sind.
			s = 59; //Reset Sekunden
		} else if (m == 0 && s == 0) {
			h--; //Stunden zählen runter, wenn Minuten und Sekunden bei 0 sind
			m = 59; //Minuten...
			s = 59;
		} //...und sekunden werden resettet
	}
	document.getElementById("hours").innerHTML = h;
	document.getElementById("minutes").innerHTML = m;
	document.getElementById("seconds").innerHTML = s;
	minusBarRange = (h * 60 * 60) + (m * 60) + s; //ab hier Code für Veränderung der Statusbar
	document.getElementById("timerpercent").innerHTML = toPercent(minusBarRange, barRange).toFixed(2) + "%";
	document.getElementById("timerbar").style.width = toPercent(minusBarRange, barRange) + "%";
	console.log(toPercent(minusBarRange, barRange).toFixed(2) + "%");
}

function stopwatch() {
	if (s < 59) {
		s++;
	} else if (s == 59 && m != 59) {
		m++;
		s = 0;
	} else if (m == 59) {
		h++;
		m = 0;
		s = 0;
	}
	document.getElementById("hours").innerHTML = h;
	document.getElementById("minutes").innerHTML = m;
	document.getElementById("seconds").innerHTML = s;
}

