var timerId = setInterval(countdown, 1000);
var correctAnswers = 0;
var wrongAnswers = 0;
var timeLeft = 10;


$( "#gameOverScreen").hide();
$( ".mainPage" ).hide();




$( "#reset" ).click(function() {
    
    timeLeft= 5;
    countdown();
    $( "#gameOverScreen").hide();
    $( ".mainPage" ).show();
    $(".correct").prop( "checked", false )
    $(".incorrect").prop( "checked", false )
    
});

  


$( "#startButton" ).click(function() {
    timeLeft= 5;
    countdown();
    $( "#start").hide();
    $( ".mainPage" ).show();



  });

function countdown() {
    if (timeLeft == -1) {
        // clearInterval(timerId);
        $( ".mainPage" ).hide();
        $( "#gameOver" ).show();
        $("#gameOverScreen").show();
        
       
    } else {
        $("#button").html(timeLeft + ' seconds remaining');
        timeLeft--;
        $( "#gameOverScreen"  ).hide();
    }
}

// checks for user change on radio buttons and logs answers
$("#question1 input").on("change", function() {
var userChoice = $(this).attr("class")
if (userChoice === "correct") {
    correctAnswers++;
    console.log(correctAnswers);
  
} else {
    wrongAnswers++;
    console.log(wrongAnswers)
    
}



$("#finalCorrect").html("Correct Answers: " + correctAnswers);
$("#finalIncorrect").html("Incorrect Answers: " + wrongAnswers);
    
});
















