document.addEventListener("DOMContentLoaded", function(){
    //change button and radio functionality
    //need to actually test this in virtual environment
    //test mode only
    let radio = document.getElementsByTagName("radio");
    
    let buttons = document.getElementsByTagName("button");

})
/**
 * Changes difficulty of the game by modifying user results
 * Easy +1
 * Normal +0
 * Hard -1
 */
function selectDifficulty(src) {
    alert(src.value)
}
/**
 * Runs 2 random numbers based on DiceSelect
 * change playgame(diceselect) to playgame(src)
 * add value to dice in html
 * add activation to html
 */
function rollDice(src) {
    alert(src.value);
    let dice=(src.value);
    let userRoll=(getrandomint(dice)+1);
    let compRoll=Math.floor(Math.random()*dice)+1;
    console.log(userRoll, compRoll)
}
/**
 * Checks Whether or not the user's result is higher than the computer result
 */
function checkWin() {
    if (userResult >= compResult){
        let win = true;
    };
    if (compResult > userResult){
        let win = false;
    };
}
/**
 * Displays win/loss message and both dice results
 */
function displayResults() {
    document.getElementById("player-score").textcontent = playerScoreMessage
    document.getElementById("comp-score").textcontent = compScoreMessage
    document.getElementById("result-message").textcontent = resultScoreMessage

    let playerScoreMessage = userResult
    let compScoreMessage = compResult
    
    if (win === true){
        let resultScoreMessage = "You Win!";   
    } else{
        let resultScoreMessage = "You Lose.";
    };
}