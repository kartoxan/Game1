var score = 0;
var time = 0.000;


function Start()
{
    SetTime();
    score = 0; 
    document.getElementById("start").style.display = "none";  
    document.getElementById("result-header").style.display = "none";
    CreateSquare();
    document.getElementById("result-header").style.display = "";   
    var timerId = setInterval(function() {
        time = time - 0.1;
        document.getElementById("TextTime").innerHTML = time.toFixed(1);
        if(time < 0)
        {
            document.getElementById("TextTime").innerHTML = 0;
            document.getElementById("rectangle").remove();
            document.getElementById("start").style.display = "none";
            document.getElementById("result-header").style.display = "block";
            document.getElementById("result").innerHTML = score.toString();
            document.getElementById("start").style.display = "block";
            clearInterval(timerId);
        }
      }, 100);
}

function CreateSquare()
{
    var Square = document.createElement("div");
    
    var SizeOfSquare = getRandomInt(50,100);
    Square.style.width = SizeOfSquare.toString() + "px";
    Square.style.height =SizeOfSquare.toString() + "px";

    var MaxPosition = 300 - SizeOfSquare;
    Square.style.position = "absolute";
    Square.style.left = getRandomInt(0,MaxPosition) + "px";
    Square.style.top = getRandomInt(0,MaxPosition) + "px";

    var r = getRandomInt(0,255);
    var g = getRandomInt(0,255);
    var b = getRandomInt(0,255);
    Square.style.background = "rgb("+ r +","+ g +","+ b +")";

    Square.id = "rectangle";
    Square.onclick = function()
    {

        document.getElementById("rectangle").remove();
        CreateSquare();
        score += 10;
    }

    var element = document.getElementById("game");
    element.appendChild(Square);
}

function SetTime()
{
    time = document.getElementById("game-time").value;
    document.getElementById("TextTime").innerHTML = time.toString();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

