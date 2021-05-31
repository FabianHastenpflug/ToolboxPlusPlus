var string = ""; // string used to store the current calculation.  
var result = 0; // stores the result and keeps doing that even if "C" was pressed or new calculation overwrites the string.
var klammern = 0; // increments when "(" is used and decrements when ")".
var equalPressed = false; // is set true after = was pushed. Necessary for 1. reuse the result after pressing "+-*/" , 
// 2. preventing showResult() to be called multiple time in a row.


function addToString(buttonValue) { // adds numbers or operators to calculation
	if (/[\+\-\*\/]/.test(buttonValue) && equalPressed) { string = result + "" }; // in case operator is pushed && last push was "=" reslut will be reused.
	equalPressed = false; // so that previous line won't be use twice in a line.
	if (check(buttonValue)) { // if value check is positive...
		string = string + buttonValue; // adds button value to calculation (most important line)
		document.getElementById("span").style.color = "black";
		document.getElementById("span").innerHTML = string; // current calculation string is displayed in span
		if (klammern <= 0) {  // checks if "(" and ")" are qual in numbers (klammern == 0). If yes, ")" button will be hidden. 
			document.getElementById("ID_)").style.visibility = "hidden";
		}
		else if (buttonValue != "(") {
			document.getElementById("ID_)").style.visibility = "visible";
		}
		console.log("Klammern = " + klammern);
	}

}

function delFrString() { // deletes last character from calculation string.
	if (equalPressed) {
		delEverything();
		equalPressed = false;
		return;
	}
	string = string.toString();
	var last = string.slice(string.length - 1, string.length);
	if (last == "(") klammern--;
	if (last == ")") klammern++;
	if (klammern <= 0) {
		document.getElementById("ID_)").style.visibility = "hidden";
	}
	else {
		document.getElementById("ID_)").style.visibility = "visible";
	}
	string = string.slice(0, string.length - 1);
	document.getElementById("span").style.color = "black";
	document.getElementById("span").innerHTML = string;
}

function delEverything() {
	string = "";
	klammern = 0;
	document.getElementById("span").innerHTML = 0;
	document.getElementById("span").style.color = "black";
}

function reuseAns() {
	var last = string.slice(string.length - 1, string.length);
	if (/[^\d]/.test(last) || string == "") {
		string = string + result;
		document.getElementById("span").innerHTML = string;
		document.getElementById("span").style.color = "black";
		equalPressed = false;
	}

}


function showResult() {
	if (!equalPressed) {
		var last = string.slice(string.length - 1, string.length);
		if (/[\d\)]/.test(last)) {
			if (klammern == 0) {
				string = string.replace(/(\d)\(/g, "$1*(");
				string = string.replace(/\)(\d)/g, ")*$1");
				string = string.replace(/\)\(/g, ")*(");
				string = string.replace(/\)s/g, ")*s");
				try { result = eval(string); }
				catch (err) {
					document.getElementById("span").style.color = "red";
					document.getElementById("span").innerHTML = err;
					console.log(err);
					return;
				}
				document.getElementById("span").style.color = "green";
				document.getElementById("span").innerHTML = result;
				string = "";
				klammern = 0;
				equalPressed = true;
			}

			else {
				document.getElementById("span").style.color = "red";
				document.getElementById("span").innerHTML = "Klammerfehler";
			}
		}
		else {
			document.getElementById("span").style.color = "red";
			document.getElementById("span").innerHTML = "Wrong ending";
		}

	}
}

function check(x) {
	var last = string.slice(string.length - 1, string.length);
	var checkIfLastSqrt = (string.slice(string.length - 2, string.length - 1) == "t" && last == "(");
	var sqrtIndicator = false;
	if (x == "Math.sqrt(") sqrtIndicator = true;
	if (/[\)]/.test(x) && klammern <= 0) return false;

	if (string == "") {
		if (sqrtIndicator) { klammern++; return true; }
		if (/\(/.test(x)) { klammern++; return true; }
		if (/[\d\(\-]/.test(x)) return true;
		else return false;
	}

	if (/[\d]/.test(last)) {
		if (sqrtIndicator) { return false; }
		if (/[\d\+\*\/\.\-]/.test(x)) return true;
		if (/[\)]/.test(x)) { klammern--; return true; }
		if (/[\(]/.test(x)) { klammern++; return true; }
	}

	else if (/[\+\*\/]/.test(last)) {
		if (sqrtIndicator) { klammern++; return true; }
		if (/[\d\-]/.test(x)) return true;
		if (/[\(]/.test(x)) { klammern++; return true; }
	}

	else if (/[\.]/.test(last)) {
		if (/[\d]/.test(x)) return true;
	}
	else if (/[\(]/.test(last)) {
		if (sqrtIndicator) { klammern++; return true; }
		if (/[\d\-]/.test(x)) return true;
		if (/[\(]/.test(x)) { klammern++; return true; }
	}

	else if (/[\)]/.test(last)) {
		if (sqrtIndicator) { klammern++; return true; }
		if (/[\d\+\*\/\-]/.test(x)) return true;
		if (/[\)]/.test(x)) { klammern--; return true; }
		if (/[\()]/.test(x)) { klammern++; return true; }
	}

	else if (/[\-]/.test(last)) {
		console.log("im if");
		if (/[\d]/.test(x)) return true;
		if (/[\(]/.test(x)) { klammern++; return true; }
		if (sqrtIndicator) { klammern++; return true; }
	}

	else if (checkIfLastSqrt) {
		if (sqrtIndicator) { klammern++; return true; }
		if (/[\d\-]/.test(x)) return true;
		if (/[\)]/.test(x)) { klammern--; return true; }
	}

	else return false;
}