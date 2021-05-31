 function calc() {
        var str = document.getElementById("inputcalcer").value
        str = str.replace(/,/g, "."); //"," funktioniert nicht, muss durch "." ersetzt werden
        var temp = str;
        if (typeof eval(document.getElementById("inputcalcer").value) == "number") {
            if (temp.length > 15) {
                temp = temp.slice(0, 16) + "[" + (temp.length - 15) + " more]";
            }
            document.getElementById("3calc").innerHTML = document.getElementById("2calc").innerHTML; //Fröhliches Plätze tauschen
            document.getElementById("2calc").innerHTML = document.getElementById("1calc").innerHTML;
            document.getElementById("1calc").innerHTML = temp + " = " + eval(str) + "<br>";
            document.getElementById("inputcalcer").value = "";
        }
    }