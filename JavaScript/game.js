var colors =[ "rgb(255, 0, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 255, 255)",
              "rgb(0, 0, 255)",
              "rgb(255, 0, 255)",

            ]   

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
 colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++){
    squares[i].style.backroundColor =colors[i];

squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backroundColor;
    if(clickedColor === pickedColor ){
        alert("Correct!");
    } else{ this.style.backroundColor = black;

        }
    });

}

