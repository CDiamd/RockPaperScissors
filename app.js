

//Grabs random index of weapons array and returns it.
function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * weapon.length);
    const item = weapon[randIndex];
    return item;
}

let weapon = ["Rock", "Paper", "Scissors"];

//performs RPS checks 
function playRound(playerSelection, computerSelection) {
    let youWin = `You Win! ${playerSelection} beats ${computerSelection}!`;
    let youLose = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    let cat = "CAT! Try Again!";
        if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
            (playerSelection == "Paper" && computerSelection == "Rock") ||
            (playerSelection == "Scissors" && computerSelection == "Paper")) {
                return youWin;       
            } else if (playerSelection == computerSelection) {
                return cat;
            } else {
                return youLose;
            }
    }
//Prompts user for input and then sets input as player choice
let playerSelection = playerInput();

function playerInput() {
    let pInput = prompt("Rock, Paper, or Scissors?")
    const pUpper = pInput.charAt(0).toUpperCase() + pInput.slice(1);
    return pUpper;
}

//Runs getCompChoice and RPS checks and prints them 5 times and checks/updates score.
let playerScore = 0
let compScore = 0

console.log(playerScore);
console.log(compScore);

function game() {
    for (let i = 0; i < 5; i++) {
        let compChoice = getComputerChoice(weapon);
        let computerSelection = compChoice;
        let result = playRound(playerSelection, computerSelection);
        console.log(compChoice);
        console.log(result);
    }
}

game();




//if/else to update scores depending who wins
