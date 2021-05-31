var clickcounter = 0; //index counter. Eigentlich einzig wichtige Variable :)
var numberstring = "";
document.getElementById("numberstring").innerHTML = "Enter start number or just click anywhere to start at 1.";

function setiCounter() {
	clickcounter = document.getElementById('inputcounter').value; //optionaler Startwert
	document.getElementById("inputcounter").value = ""; //wird geleert
	preparestring();
	displayblueones();
}

function clicknext() {
	clickcounter++;
	preparestring();
	displayblueones();
}

function clickprev() {
	clickcounter--;
	preparestring();
	displayblueones();
}

function preparestring() { //String wird befüllt mit allen Zahlen < clickcounter
	numberstring = "";
	for (var x = 1; x < clickcounter - 1; x++) {
		if (clickcounter > 2) { //größer 2, weil die letzte und vorletzte Zahl (clickcounter und clickcounter - 1) separat angezeigt werden
			numberstring = numberstring + wordinsert(x) + " ";
		}
	}
	document.getElementById("numberstring").innerHTML = numberstring;
}

function displayblueones() { //die letzte und vorletzte Zahl (clickcounter und clickcounter - 1) werden separat generiert, da sie animiert werden.
	document.getElementById("i").innerHTML = "";
	document.getElementById("i-1").innerHTML = "";
	if (clickcounter >= 2) {
		document.getElementById("i-1").innerHTML = wordinsert(clickcounter - 1) + " ";
	}
	if (clickcounter >= 1) {
		document.getElementById("i").innerHTML = wordinsert(clickcounter);
	}
}

function wordinsert(x) { //Aus Gründen sollen manche Zahlen in Buchstaben ausgeschrieben werden. Diese Funktion gibt ggf. die entsprechenden Strings zurück (sonst normale Zahl)
	var n = 0;
	switch (x) {
		case 10:
			n = "ten";
			break;
		case 20:
			n = "twenty";
			break;
		case 30:
			n = "thirty";
			break;
		case 40:
			n = "fourty";
			break;
		case 50:
			n = "fifty";
			break;
		case 60:
			n = "sixty";
			break;
		case 70:
			n = "seventy";
			break;
		case 80:
			n = "eighty";
			break;
		case 90:
			n = "ninety";
			break;
		case 100:
			n = "hundred";
			break;
		default:
			n = x;
	}
	return n;
}