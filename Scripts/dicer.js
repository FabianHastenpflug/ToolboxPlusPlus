function go() {
	var min = document.getElementById('inputmin').value;
	var max = document.getElementById('inputmax').value;
	var quantityOfDices = document.getElementById('inputquantity').value;
	if (min == "" && max == "" && quantityOfDices == "") {
		printDices(1, 6, 1)
	} //Fall keine Eingaben, dann 1x 6er-Würfel
	else if (min == "" && max == "") {
		printDices(1, 6, quantityOfDices)
	} //Falls  nur quantity eingegeben ist
	else if (quantityOfDices == "") {
		printDices(min, max, 1)
	} //Falls kein mount eingegeben ist
	else {
		printDices(min, max, quantityOfDices)
	}
}

function printDices(min, max, quantityOfDices) {
	var str = "";
	var sum = 0;
	for (var i = 1; i <= quantityOfDices; i++) {
		var temp = getRandom(min, max);
		str = str + temp + "  ";
		sum = sum + temp;
	}
	str = str + "<br>" + " Summe: " + sum;
	document.getElementById("pdicer").innerHTML = str;
}

