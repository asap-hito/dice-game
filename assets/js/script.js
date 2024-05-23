document.addEventListener("DOMContentLoaded", function(){
    //change button and radio functionality
    //need to actually test this in virtual environment
    //test mode only
    let radio = document.getElementsByTagName("radio");
    
    let button = document.getElementsByTagName("button");

})
let userRoll=0
let compRoll=0
let userResult = userRoll
let compResult = compRoll
let playerScoreMessage=userResult
let compScoreMessage=compResult
let win = false
let dice = 0


/**
 * Changes difficulty of the game by modifying user results
 * Easy +1
 * Normal +0
 * Hard -1
 --not ready--
function selectDifficulty(src) {
    alert(src.value)
}
*/

/**
 * Key game functionality to determine seperate rolls
 */
function rollDice(dice) {
    let userRoll=Math.floor(Math.random()*dice)+1;
    let compRoll=Math.floor(Math.random()*dice)+1;
    return(userRoll, compRoll);
    console.log(userRoll, compRoll);
}
/**
 * Checks Whether or not the user's result is higher than the computer result
 */
function checkWin(userResult, compResult) {
    if (userResult >= compResult){
        let win = true;
        return win;
    };
    if (compResult > userResult){
        let win = false;
        return win;
    };
}
/**
 * Displays win/loss message and both dice results
 */
function displayResults() {
    document.getElementById("player-score").textcontent = playerScoreMessage
    document.getElementById("comp-score").textcontent = compScoreMessage
    document.getElementById("result-message").textcontent = resultScoreMessage


    
    if (win === true){
        let resultScoreMessage = "You Win!";   
    } else{
        let resultScoreMessage = "You Lose.";
    };
}

function playGame(src) {
    let dice = src.value;
    console.log(dice);
    rollDice(dice);
    checkWin(userResult, compResult);
    console.log(userResult, compResult, playerScoreMessage, compScoreMessage, win)

}
