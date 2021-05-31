var text = [""];
var poscount = 0; //zählt die anzahl der Punkte auf der 2Doo-Liste

function save() {
	text[poscount] = document.getElementById('inputnoter').value; //Neuer Punkt wird dem Array hinzugefügt 
	printArray();
	poscount++;
	document.getElementById("inputnoter").value = ""; //Input-Feld wieder geleert, damit bequem und schnell neue Punkte hinzugefügt werden können
}

function remove(deleteindex) {
	if (!text[deleteindex].startsWith("<del>")) { //Falls der Punkt, auf den geklickt wurde, noch nicht durchgestrichten ist... 
		text[deleteindex] = "<del>" + text[deleteindex] + "</del>"; //...wird er durchgestrichen
	} else {
		text[deleteindex] = ""; //falls schon durchgestrichen, wird er aus dem Array gelöscht
		var temp = [""];
		var tempcount = 0;
		for (var i = 0; i <= poscount; i++) { //temp kopiert text, jedoch nur dann, wenn != "" (nicht gelöscht)
			if (i != deleteindex) {
				temp[tempcount] = text[i];
				tempcount++;
			}
		}
		for (var i = 0; i <= poscount; i++) { //temp wird wieder zurück auf text kopiert
			text[i] = temp[i];
		}
		poscount--;
	}
	printArray();
}

function printArray() { //Array wird auf die 11 html-spans verteilt (spans, damit sie einzeln anklickbarsind, unlike ps)
	for (var i = 0; i <= poscount; i++) { //Erst werden alle spans geleert
		document.getElementById(i).innerHTML = "";
	}
	for (var i = 0; i <= poscount; i++) { //Dann befüllt
		if (text[i] != undefined) {
			document.getElementById(i).innerHTML = i + 1 + ". " + text[i] + "<br>";
		}
	}
}
