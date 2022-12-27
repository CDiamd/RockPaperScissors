//Grabs random index of weapons array and returns it.
let weapon = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * weapon.length);
    const item = weapon[randIndex];
    return item;
}

//performs RPS checks & sets score to 0.
let youWin = "You Win!";
let youLose = "You Lose!";
let cat = "CAT! Try Again!";

let pScore = 0
let compScore = 0


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
            pScore++
            return youWin + ` ${playerSelection} beats ${computerSelection}!`;       
        } else if (playerSelection == computerSelection) {
            return (cat);
        } else {
            compScore++
            return (youLose + ` ${computerSelection} beats ${playerSelection}!`);
        }
}
//Prompts user for input and then sets input as player choice
function pInput() {
    let pInput = prompt("Rock, Paper, or Scissors?")
    const pUpper = pInput.charAt(0).toUpperCase() + pInput.slice(1);
    return pUpper;
}

//Runs getCompChoice and RPS checks and prints them 5 times and checks/updates score.
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = pInput();
        let compChoice = getComputerChoice(weapon);
        let computerSelection = compChoice;
        let result = playRound(playerSelection, computerSelection);
        console.log(compChoice);
        console.log(result);
        console.log(pScore);
        console.log(compScore);
    }
}

game();


