var plus = 10;
    
    
    function colorChange() {

        // 1. Schritt: Dez-RGB-Werte, Zufallswerte oder Hex-RGB-Werte werden den RGB-Vars übergeben.
        var r = 0;
        var g = 0;
        var b = 0;
        exposeBars(); //RGB-Balken wieder anzeigen, falls ausgeblendet
        var inputcolor = document.getElementById('inputcolor').value;
        if (inputcolor.includes(" ")) { //Wenn Dezimal-RGB-Wert eingegeben wurde
            var rgbArray = inputcolor.split(" ");
            r = Number(rgbArray[0]);
            g = Number(rgbArray[1]);
            b = Number(rgbArray[2]);
        }
        else if (inputcolor == "") { //falls keine Eingabe erfolgt ist, wird ein Zufallswert generiert
            r = getRandom(30, 230);
            g = getRandom(30, 230);
            b = getRandom(30, 230);
            document.getElementById("inputcolor").value = "";
        } 
        else { //wenn Hex-Wert eingegeben wurde
            if (inputcolor.startsWith("#")) { //falls Hex-Wert mit # eingegeben wurde, wird er abgeschnitten
                inputcolor = inputcolor.slice(1, inputcolor.length);
            }
            var hex = "0x" + inputcolor;
            r = Number("0x" + hex.slice(2, 4)); //Die RGB-Werte werden auseinanderklamüsert
            g = Number("0x" + hex.slice(4, 6));
            b = Number("0x" + hex.slice(6, 8));
            document.getElementById("inputcolor").value = "";
        }

        // 2. Schritt: Anzeige wird aktualisiert
        document.getElementById("pcolor").innerHTML = (r + " " + g + " " + b) + "<br>" + (toPercent(r, 255)).toFixed() + "% " + (toPercent(g, 255)).toFixed() + "% " + (toPercent(b, 255)).toFixed() + "%";
        updateBar(r, g, b);

        // 3. Schritt: DIV-Boxen werden eingefärbt
        colorBoxes(r, g, b);

        // 4. Schritt: Input- und Buttonelemente werden einefärbt (jeweils etwas dunkler als div-Boxen)
        var inputElement = document.getElementsByClassName("input");
        for (var i = 0; i < inputElement.length; i++){
            if(r < 10 || g < 10 || b < 10) {
                inputElement[i].style.backgroundColor = "rgb(" + (r + 8) + ", " + (g + 8) + ", " + (b + 8) + ")";
            }
            else {
                inputElement[i].style.backgroundColor = "rgb(" + (r - 8) + ", " + (g - 8) + ", " + (b - 8) + ")";
            }
        }
        var buttonElement = document.getElementsByClassName("button");
        for (var i = 0; i < buttonElement.length; i++){
            if(r < 10 || g < 10 || b < 10) {
                buttonElement[i].style.backgroundColor = "rgb(" + (r + 16) + ", " + (g + 16) + ", " + (b + 16) + ")";
            }
            else {
                buttonElement[i].style.backgroundColor = "rgb(" + (r - 16) + ", " + (g - 16) + ", " + (b - 16) + ")";
            }
        }
    }
    function colorBoxes(r, g, b){
        
        for (var i = 1; i <= 21; i++) { //where the magic is magicing: 
            if (i != 1 && i < 13) {
                r = r + plus; //RGB werden gleichmäßig erhöht, sodass die Farbe bei jedem Durchlauf heller wird
                g = g + plus;
                b = b + plus;
            }
            else if (i != 1 ){
                r = r - plus; //RGB werden gleichmäßig erhöht, sodass die Farbe bei jedem Durchlauf heller wird
                g = g - plus;
                b = b - plus;
            }
            var color = "rgb(" + r + ", " + g + ", " + b + ")";
            document.getElementById("b" + i).style.backgroundColor = color; //Das entsprechende DIV wird angemalt
        }
      
    }

    function updateBar(r, g, b) {
        document.getElementById("bluebar").style.width = toPercent(b, 255) + "%";
        document.getElementById("redbar").style.width = toPercent(r, 255) + "%";
        document.getElementById("greenbar").style.width = toPercent(g, 255) + "%";
    }

    function toPercent(part, whole) {
        return (100/whole)*part;
    }

    function hideBars() {
        document.getElementById("bluebar").style.display = "none";
        document.getElementById("redbar").style.display = "none";
        document.getElementById("greenbar").style.display = "none";
    }

    function exposeBars() {
        document.getElementById("bluebar").style.display = "block";
        document.getElementById("redbar").style.display = "block";
        document.getElementById("greenbar").style.display = "block";
    }