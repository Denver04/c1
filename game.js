

let colorPattern = ["red","yellow","green","blue"];
let gamePattern = [];
function nextSequence(){
    userChosenColor=[];
    level++;
    $("#level-title").text("level "+level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = colorPattern[randomNumber];
    gamePattern.push(randomChosenColor);
    animate(randomChosenColor);
    sound(randomChosenColor);
}

let userChosenColor = [];
$(".btn").on("click",function(){
    let clickedColor = $(this).attr("id");
    userChosenColor.push(clickedColor);
    animate(clickedColor);
    sound(clickedColor);
    check(userChosenColor.length-1);
})

let level=0;
let start=true;
$(document).on("keypress",function(){
    if(start){
        $("h1").text("level "+level);
        nextSequence();
        start=false;
    }
})
 

function check(currentLevel){
    if(gamePattern[currentLevel]=== userChosenColor[currentLevel]){
        // console.log('success')
    
        if(gamePattern.length===userChosenColor.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else{
        let audio=new Audio("sounds/wrong.mp3");
        audio.play;
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
            $("#level-title").text("Game-Over,Press any key to start")
        }, 500);
        startOver();
    }
}


function animate(chosenColor){
    $("."+chosenColor).addClass("pressed");
    setTimeout(function(){
        $("."+chosenColor).removeClass("pressed");
    },100)
}

function sound(colorName){
    let audio = new Audio("sounds/"+ colorName + ".mp3");
    audio.play();
}

function startOver(){
    level =0;
    start = true;
    gamePattern=[];
}