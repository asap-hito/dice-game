document.addEventListener("DOMContentLoaded", function(){
    //change button and radio functionality
    //need to actually test this in virtual environment
    //test mode only
    let radio = document.getElementsByTagName("radio");

    for (let radio of radios){
        radio.addEventListener("click", function(){
            let difficultySelect = this.getAttribute("data-type");
            alert(`You Chose ${difficultySelect}`);
        })
    }
    
    let buttons = document.getElementsByTagName("button");

    for (let button of butttons){
        button.addEventListener("click", function(){
            let diceSelect = this.getAttribute("data-type");
            alert(`You Chose ${diceSelect}`);
        })
    }
})
/**
 * Changes difficulty of the game by modifying user results
 * Easy +1
 * Normal +0
 * Hard -1
 */
function selectDifficulty() {
    if (difficultySelect === "Easy"){
        let userResult = userResult+1
    };
    if (difficultySelect === "Normal"){
        let userResult = userResult
    };
    if (difficultySelect === "Hard"){
        let userResult = userResult-1
    };

}
/**
 * Runs 2 random numbers based on DiceSelect
 */
function playGame() {
    if (diceSelect === "D4"){
        let userResult = math.floor(math.random()*4)+1;
        let compResult = math.floor(math.random()*4)+1;
    };
    if (diceSelect === "D6"){
        let userResult = math.floor(math.random()*6)+1;
        let compResult = math.floor(math.random()*6)+1;
    };
    if (diceSelect === "D8"){
        let userResult = math.floor(math.random()*8)+1;
        let compResult = math.floor(math.random()*8)+1;
    };
    if (diceSelect === "D12"){
        let userResult = math.floor(math.random()*12)+1;
        let compResult = math.floor(math.random()*12)+1;
    };
    if (diceSelect === "D20"){
        let userResult = math.floor(math.random()*20)+1;
        let compResult = math.floor(math.random()*20)+1;
    };
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

}