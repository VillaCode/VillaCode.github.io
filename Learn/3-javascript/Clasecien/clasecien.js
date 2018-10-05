document.getElementById('butext').onclick = function() {
    var textSave = document.getElementById("intext").value;
    document.getElementById("texto").innerHTML = textSave;
}

var array = [];
array[10] = 10;
array[5] = 5;
array[20] = "hola";
console.log(array);
