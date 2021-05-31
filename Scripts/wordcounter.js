 function countWords(){
        var text = document.getElementById("inputwordcounter").value;
        document.getElementById("inputwordcounter").value = "";
        var array = text.split(" ");
        var withoutspaces = text.replace(/ /g, "");


        document.getElementById("pwordcounter").innerHTML = "Letters (spaces included): " + text.length + "<br>" + "Letters (spaces excluded): " + withoutspaces.length + "<br>"  + "Words: " + array.length;
    }
