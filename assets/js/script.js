document.addEventListener("DOMContentLoaded", function(){
    //change button and radio functionality
    //need to actually test this in virtual environment
    //test mode only
    let radio = document.getElementsByTagName("radio");
    
    let buttons = document.getElementsByTagName("button");

})
let userRoll=0
let compRoll=0
let userResult = userRoll
let compResult = compRoll
let playerScoreMessage=userResult
let compScoreMessage=compResult
let win = false


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
function rollDice(src) {
    let dice=(src.value);
    let userRoll=Math.floor(Math.random()*dice)+1;
    let compRoll=Math.floor(Math.random()*dice)+1;
    return(userRoll, compRoll);
}
/**
 * Checks Whether or not the user's result is higher than the computer result
 */
function checkWin(userResult, compResult) {
    if (userResult >= compResult){
        let win = true;
        return win;
        alert("You Win!");
    };
    if (compResult > userResult){
        let win = false;
        return win;
        alert("You Lose!");
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

button.addEventListener("click");
rollDice(src);
checkWin(userResult, compResult);
console.log(userResult, compResult, playerScoreMessage, compScoreMessage, win)
