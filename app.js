function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * weapon.length);
    const item = weapon[randIndex];
    return item;
}

let weapon = ["Rock", "Paper", "Scissors"];

const compChoice = getComputerChoice(weapon);
console.log(compChoice);

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;            
        } else if (playerSelection == computerSelection) {
            return "CAT! Try Again!";
        } else {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        }
}
let playerSelection = "Scissors";
let computerSelection = compChoice;
let results = playRound(playerSelection, computerSelection);
console.log(results)



