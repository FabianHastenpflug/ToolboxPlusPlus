 function calcBMI() {
        var hight = document.getElementById('inputhight').value / 100;
        var weight = document.getElementById('inputweight').value;
        document.getElementById('inputhight').value = "";
        document.getElementById('inputweight').value = "";
        var bmi = Math.round(weight / (hight * hight));
        var str = "BMI = " + bmi + "<br>";
        document.getElementById("pbmi").innerHTML = str;
    }