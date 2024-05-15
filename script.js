// script.js
function init() {
    alert("Hej alla");
}

window.onload = init;

function doCalculations() {
    // Avläsa textfält och skriva på sidan
    var length = Number(document.getElementById("length").value);
    var width = Number(document.getElementById("width").value);
    document.getElementById("result").innerHTML = "Längd: " + length;

    // Beräkna rektangelns area
    var area = length * width;
    document.getElementById("result").innerHTML += "<br>Rektangelns area: " + area + " kvadratmeter";

    // Beräkna ellipsens area
    var pi = 3.14159;
    area += pi * length * width / 4;
    document.getElementById("result").innerHTML += "<br>Ellipsens area: " + area + " kvadratmeter";

    // Konvertera längden till olika enheter
    var distance = ["meter", "fot", "yard"];
    var conv = [1, 3.28084, 1.09361];
    var unit = ["meter", "fot", "yard"];

    for (var i = 0; i < unit.length; i++) {
        var convertedLength = length * conv[i];
        document.getElementById("result").innerHTML += "<br>" + distance[i] + ": " + convertedLength + " " + unit[i];
    }

    // Beräkning av rektangelns area med ökning av längd och bredd
    var increasedLength = length * 1.5;
    var increasedWidth = width + 3;
    var increasedArea = increasedLength * increasedWidth;
    document.getElementById("result").innerHTML += "<br>Rektangelns area med ökad längd och bredd: " + increasedArea + " kvadratmeter";

    // Beräkning av triangelns area
    var triangleArea = (length * width) / 2;
    var triangleAreaInFeet = triangleArea * 10.7639; // Konvertera från kvadratmeter till kvadratfot
    document.getElementById("result").innerHTML += "<br>Triangelns area: " + triangleAreaInFeet.toFixed(2) + " kvadratfot";
}
