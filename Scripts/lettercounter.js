function countLetters(){
        var xxx = document.getElementById("inputlettercounter").value;
        xxx = xxx.toLowerCase();
        var arrayxxx = [];
        console.log("Length " + xxx.length);
    
        for (var iArray = 0, iString = 0; iString < xxx.length; iString++){
            var bool = false;
            for (var ii = 0; ii < arrayxxx.length; ii++){
                if (arrayxxx[ii][0] == xxx.slice(iString, iString + 1)) {
                    arrayxxx[ii][1]++;
                    bool = true;
                }
            }
            if (!bool) {
                arrayxxx.push(["", ""]);
                arrayxxx[iArray][0] = xxx.slice(iString, iString + 1);
                arrayxxx[iArray][1]++;
                iArray++;
            }
            
        }
        arrayxxx.sort();
        if (arrayxxx[0][0] == " ") {arrayxxx[0][0] = "Space";}
        var output = "";
        var max = 0;
        var maxName = "";
        for(var i = 0; i < arrayxxx.length; i++) {
            console.log(arrayxxx[i][0] + " " + arrayxxx[i][1]);
            output = output + arrayxxx[i][0] + " (" + arrayxxx[i][1] + "), ";
            if (arrayxxx[i][1] > max && arrayxxx[i][0] != "Space") {
                max = arrayxxx[i][1];
                maxName = arrayxxx[i][0]
            }
        }
        console.log("Max = " + maxName + " (" + max + ")");

        document.getElementById("plettercounter").innerHTML = output;

    }