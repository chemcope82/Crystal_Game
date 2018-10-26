

//Crystal Collector Game
var wins = 0;
var losses = 0;
var blueCrystal;
var pinkCrystal;
var greenCrystal;
var orangeCrystal;
var userTotal;
var targetNumber;


//create a function to initiate the game
function startGame () {
    $("#instructions").hide();
    $("#scores").show();
    $("#crystalButtons").show();
    //reset user total and display it
    userTotal = 0;
    $("#user-number").text("Your Total: " + userTotal);

    //generate a random target number between 19-120 and display it
    targetNumber = Math.floor((Math.random() * 102) + 19);
    $("#target-number").text("Target Number: " + targetNumber);

    //display current wins and losses counters
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    //assign values to each crystal (1-12)
    blueCrystal = Math.floor((Math.random() * 12) + 1);
    pinkCrystal = Math.floor((Math.random() * 12) + 1);
    greenCrystal = Math.floor((Math.random() * 12) + 1);
    orangeCrystal = Math.floor((Math.random() * 12) + 1);
}

//create a function to end gameplay if a user choses not to continue
function endGame () {
    $("#crystalButtons").hide();
    $("#instructionHead").text("Goodbye!");
    $("#instructionText").text("");
    $("#startGame").text("Play Again");
    $("#user-number").text("");
    $("#target-number").text("");
    $("#instructions").show();
}

//create a function to compare numbers after a crystal is clicked
function checkNumer() {
    $("#user-number").text("Your Total: " + userTotal);
    if (userTotal === targetNumber) {
        wins++;
        var playAgain = confirm("You Win!\n\nDo you want to play again?");
        if(playAgain) {
            startGame();
        } else {
            endGame();
        }
    }
    else if (userTotal > targetNumber) {
        losses++;
        var playAgain = confirm("You Lost!\n\nDo you want to play again?");
        if(playAgain) {
            startGame();
        } else {
            endGame();
        }
    }

}

$( document ).ready(function() {

    $("#scores").hide();
    $("#crystalButtons").hide();
    $("#instructions").show();

    $("#startGame").on("click", function() {
        startGame();
    })
      

    $("#blue-crystal").on("click", function() {
        userTotal += blueCrystal;
        checkNumer();
    })

    $("#pink-crystal").on("click", function() {
        userTotal += pinkCrystal;
        checkNumer();
    })

    $("#green-crystal").on("click", function() {
        userTotal += greenCrystal;
        checkNumer();
    })

    $("#orange-crystal").on("click", function() {
        userTotal += orangeCrystal;
        checkNumer();
    })

});