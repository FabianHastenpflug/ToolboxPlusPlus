 function generateIpsumer(){
        var wholeText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

        var numberLetters = document.getElementById("inputIpsumer").value;
        document.getElementById("inputIpsumer").value = "";

        var i = numberLetters;
        var substring = ""
        while ( i > 0) {
            if (i <= wholeText.length) {
                substring = substring + wholeText.slice(0, i);
                i = 0;
            }
            else {
                substring = substring + wholeText.slice(0, wholeText.length);
                i = i - wholeText.length;

            }
           
        }

        ta = document.createElement('textarea'); //folgender Block kopiert den String in die Zwischenablage
        ta.value = substring;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }