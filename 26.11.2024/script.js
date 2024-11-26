// Zadanie 1

// nr 1
let text = "JavaScript jest super!";
textLenght = text.length;
document.getElementById("1").innerHTML = textLenght;
let textChar5 = text.charAt(4);
document.getElementById("2").innerHTML = textChar5; 
let textCodeASCII = text.charCodeAt(4);
document.getElementById("3").innerHTML = textCodeASCII;

// nr 2
let textSlice = text.slice(16, 21);
document.getElementById("4").innerHTML = textSlice;
let textSubstring = text.substring(16, 21);
document.getElementById("5").innerHTML = textSubstring;
let textSubstr = text.substr(16, 5); 
document.getElementById("6").innerHTML = textSubstr;

// nr 3
let name = " anna kowalska ";
name = name.trim();
let nameUpperCase = name.toUpperCase();
document.getElementById("7").innerHTML = nameUpperCase;
let nameLowerCase = name.toLowerCase();
document.getElementById("8").innerHTML = nameLowerCase;

// nr 4
let imie = " Anna";
let nazwisko = "Kowalska";
let person = imie.concat("", nazwisko);
let tripleAnna = imie.repeat(3);
document.getElementById("9").innerHTML = tripleAnna;

// nr 5
let text2 = "JavaScript jest super! Jest najlepszy!";
let textReplace = text2.replace("jest", "to");
document.getElementById("11").innerHTML = textReplace;
let textReplaceAll = text2.replaceAll(/jest/gi, "to");
document.getElementById("12").innerHTML = textReplaceAll;

// nr 6
let text3 = "Anna,Kowalska,25,Warszawa";
let text3Array = text3.split(",");
for(i in text3Array) {
    document.getElementById("13").innerHTML += text3Array[i] + "<br>";
}

// Dla zdolnych
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    let result = document.getElementById("result").value;
    let imie = document.getElementById("name").value;
    imie = imie.trim();
    // Metoda slice() nie przyjmuje argumentu " " jako separator, dla tego wykorzystalem metode split()     
    let nameArray = imie.split(" ");
    let firstname = nameArray[0];
    let lastname = nameArray[1];
    let imieUpperCase = firstname.toUpperCase();
    nameArray[0] = imieUpperCase;
    for (i in nameArray) {
        document.getElementById("result").innerHTML += nameArray[i] + " "; 
    }
    let firstnameLenght = firstname.length;
    let lastnameLenght = lastname.length;
    document.getElementById("14").innerHTML = firstnameLenght;
    document.getElementById("15").innerHTML = lastnameLenght;
    


});

// Zadanie 2

// nr 1
text = "JavaScript to wszechstronny język programowania";
let languagePosition = text.indexOf("język");
document.getElementById("16").innerHTML = languagePosition;
let aLastPosition = text.lastIndexOf("a");
document.getElementById("17").innerHTML = aLastPosition;

// nr 2
text2 = "Programowanie w JavaScript jest ciekawe i zabawne";
let JavaScriptPosition = text2.search("JavaScript");
document.getElementById("18").innerHTML = JavaScriptPosition;

// nr 3
text3 = "Programowanie w JavaScript to zabawa";
let aPositions = text3.match(/a/g);
document.getElementById("19").innerHTML = aPositions.length + " a";

let text4 = "JavaScript jest super. JavaScript to przyszłość";
let JavaScriptArray = text4.matchAll(/JavaScript/g);
JavaScriptArray = Array.from(JavaScriptArray);
for (i in JavaScriptArray) {
    document.getElementById("20").innerHTML += (JavaScriptArray[i]).index + "<br>";
}

// nr 4
let text5 = "JavaScript to wszechstronny język";
let languageBool = text5.includes("język");
document.getElementById("21").innerHTML = languageBool;
let JavaScriptBool = text5.startsWith("JavaScript");
document.getElementById("22").innerHTML = JavaScriptBool;
let languageEndBool = text5.endsWith("język");
document.getElementById("23").innerHTML = languageEndBool; 

// Dla zdolnych
document.getElementById("myForm2").addEventListener("submit", function(event){
    event.preventDefault();

    let result = document.getElementById("result").value;
    let text = document.getElementById("text").value;
    let words = "Dzień dobry";
    let wordsBool = text.includes(words);
    if (wordsBool == true) {
        document.getElementById("result2").innerHTML = "Słowa " + words + " znaleziono na pozycjach: " + text.indexOf(words) + "<br><br>" + "Dzień dobry. Czym panstwu moge pomoc?";
    }
    else {
        document.getElementById("result2").innerHTML = "Słowa " + words + " NIE znaleziono " + "<br><br>" + "Naucz sie dobrych manier niegrzeczny.";
    }

});