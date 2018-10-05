//random: position, size, color, square or circle, delay
//onclick with timer
var timer = 0;

function random(min, max) {
    var rango = max - min + 1;
    return min + Math.floor(Math.random()*rango);
}

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generaFigura(){setTimeout(function() {

      timer=new Date().getTime();

      document.getElementById("figure").style.display = "block";
      document.getElementById("figure").style.height = random(80, 81)+"px";
      document.getElementById("figure").style.width = random(80, 81)+"px";
      document.getElementById("figure").style.backgroundColor = randomColor();

      if (Math.random() < 0.5) {
        document.getElementById("figure").style.borderRadius = "50%";
      }

      document.getElementById("playground").style.padding = random(0, 700)+"px "+random(0, 1600)+"px "+random(0, 700)+"px "+random(0, 1600)+"px";
    }, random(0, 2000));
}

document.getElementById("figure").onclick = function(){

    document.getElementById("figure").style.display = "none";
    var tc = new Date().getTime() - timer;
    if (1531354644 > tc) {
        document.getElementById("time").innerHTML = tc/1000+" s";
    }else {
        document.getElementById("time").innerHTML = "Empezamos!!";
    }
    generaFigura();
    }
