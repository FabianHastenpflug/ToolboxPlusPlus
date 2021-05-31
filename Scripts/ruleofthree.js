 function ruleOfThree(){
        var xpercent = document.getElementById("inputThreerX%").value;
        xpercent = Number(xpercent.replace(/,/g, ".")); //"," funktioniert nicht, muss durch "." ersetzt werden
        var totalquantity = document.getElementById("inputThreer100").value;
        totalquantity = Number(totalquantity.replace(/,/g, "."));
        var xpieces = document.getElementById("inputThreerX").value;
        xpieces = Number(xpieces.replace(/,/g, "."));


        //Es müssen immer jeweils zwei Werte eingegeben werden, damit der dritte berechnet werden kann
        if (totalquantity != 0 && xpieces != 0 && xpercent == 0) { //Gesamt- und Teilmenge --> Prozentsatz
            xpercent  = (100/totalquantity) * xpieces;
            document.getElementById("inputThreerX%").value  = xpercent.toFixed(3) + "%";
        }
        else if (totalquantity != 0 && xpieces == 0 && xpercent != 0){ //Gesamtmenge und Prozentsatz --> Teilmenge
            xpieces = (totalquantity/100) * xpercent;
            document.getElementById("inputThreerX").value   = xpieces.toFixed(3);
            document.getElementById("inputThreerX%").value += "%"; // Zeile fügt nur % hinzu (Übersichtlichkeit)
        }
        else if (totalquantity == 0 && xpieces != 0 && xpercent != 0){ //Teilmenge und Prozentsatz --> Gesamtmenge
            totalquantity = (xpieces/xpercent) * 100;
            document.getElementById("inputThreer100").value   = totalquantity.toFixed(3);
            document.getElementById("inputThreerX%").value += "%";
        }
        
        var xpercent            = ""; 
        var totalquantity         = "";
        var xpieces             = "";
    }