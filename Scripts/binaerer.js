var zahl = 0;
    var resultString = "";
    binaer(33);
    console.log(resultString);


    function binaer(zahl) {
        if (zahl != 0) {
            if ((zahl % 2) == 0) {
                resultString = resultString + "0";
            } 
            else {
                resultString  = resultString + "1";
            }
            binaer((zahl / 2).toFixed(0));
        }
        else {return;}
    }