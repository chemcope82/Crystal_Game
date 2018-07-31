

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
    //reset user total and display it
    userTotal = 0;
    $("#user-number").text("Your Total: " + userTotal);

    //generate a random target number between 19-120 and display it
    targetNumber = Math.floor((Math.random() * 102) + 19);
    console.log(targetNumber);
    $("#target-number").text("Target Number: " + targetNumber);

    //display current wins and losses counters
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    //assign values to each crystal and display in console
    blueCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("Blue: " + blueCrystal)
    // $("#blue-crystal").attr("value", blueCrystal);
    pinkCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("Pink: " + pinkCrystal)
    greenCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("Green: " + greenCrystal)
    orangeCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("Orange: " + orangeCrystal)
}

//create a function to compare numbers after a crystal is clicked
function checkNumer() {
    $("#user-number").text("Your Total: " + userTotal);
    if (userTotal === targetNumber) {
        alert("You Win!");
        wins++;
        startGame();
    }
    else if (userTotal > targetNumber) {
        alert("You Lose!");
        losses++;
        startGame();
    }

}

startGame();

$("#blue-crystal").on("click", function() {
    userTotal += blueCrystal;
    console.log(userTotal);
    checkNumer();
})

$("#pink-crystal").on("click", function() {
    userTotal += pinkCrystal;
    console.log(userTotal);
    checkNumer();
})

$("#green-crystal").on("click", function() {
    userTotal += greenCrystal;
    console.log(userTotal);
    checkNumer();
})

$("#orange-crystal").on("click", function() {
    userTotal += orangeCrystal;
    console.log(userTotal);
    checkNumer();
})