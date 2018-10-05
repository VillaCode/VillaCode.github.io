
document.getElementById("but").onclick = function(){
    //alert("cuidado");
    document.getElementById('text').innerHTML = 'hola mundo';
}
document.getElementById("but2").onclick = function(){
    document.getElementById('secondP').innerHTML = 'esto al inicio'+ document.getElementById('secondP').innerHTML + 'que show';
}
document.getElementById("but3").onclick = function(){
    document.getElementById("new").style.color = "red";
    document.getElementById("new").style.fontSize = "30px";
}
