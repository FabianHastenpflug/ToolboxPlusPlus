var nameList = [""];
    var counterNamer = 1;
    var str = "";

    function saveName() {
        nameList[counterNamer] = document.getElementById('inputnamer').value;
        document.getElementById('inputnamer').value = "";
        str = str + nameList[counterNamer] + "<br>";
        document.getElementById("pnamer").innerHTML = str;
        counterNamer++;
    }

    function chooseName() {
        str = nameList[(getRandom(1, counterNamer - 1))];
        document.getElementById("pnamer").innerHTML = str;
        str = "";
        nameList = [""];
        counterNamer = 1;
    }