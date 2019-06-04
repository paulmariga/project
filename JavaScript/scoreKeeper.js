var p1Button= document.querySelector("#p1");
var p2Button= document.getElementById("p2");
var p1Score= document.querySelector("#p1Display");
var p2Score= document.querySelector("#p2Display");
var resetButtom= document.querySelector("#r");
var numInput = document.querySelector("input");
var winningScoreDisplay= document.querySelector("p span");
var p1Score=0;
var p2Score = 0;
var gameOver= false;
var winningScore= 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if(p1Score===winningScore){
        p1Display.classList.add("Winner")

        gameOver= true;
    }
    console.log(p1Score);
    p1Display.textContent= p1Score;
    }
    });


p2Button.addEventListener("click", function(){
    p2Score++;
    if(!gameOver){
    console.log(p2Score)
    if(p2Score===winningScore){
        p2Display.classList.add("Winner")
        gameOver= true;
    }
    p2Display.textContent= p2Score;
    }
    });

resetButtom.addEventListener("click", function(){
    reset()
});

function reset(){
p1Score = 0;
p2Score = 0;
p1Display.textContent = 0;
p2Display.textContent = 0;
p1Display.classList.remove("Winner");
p2Display.classList.remove("Winner");
gameOver = false;


}


numInput.addEventListener("change", function(){
winningScoreDisplay.textContent = numInput.value;
winningScore= Number(numInput.value);

});