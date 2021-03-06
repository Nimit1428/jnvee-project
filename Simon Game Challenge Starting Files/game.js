var buttonColors = ["red","blue","green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$("document").keypress(function(){
if(started = false){
  $("level-title").text("Level" + level);
  nextSequence();
  started = true;
}
}

function nextSequence(){
  userClickedPattern=[];
  level++;
  $("level-title").text("Level" + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+ randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
})

function playSound(name){
  var audio=new Audio("sounds/"+ name +".mp3");
  audio.play();
}

function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");
setTimeout(function () {
  $("#" + currentColor).removeClass("pressed");
}, 100);
}

checkAnswer(userClickedPattern.length-1);

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]{
    console.log("success");
    if (userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence();},1000);
      })
    }
    else{
      console.log("Wrong");
    }
  }
}
