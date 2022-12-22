function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * weapon.length);
    const item = weapon[randIndex];
    return item;
}

let weapon = ["Rock", "Paper", "Scissors"];

const compChoice = getComputerChoice(weapon);
console.log(compChoice);

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "Rock" && computerSelection == "Paper"){
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You Win! Rock beats Scissors!";
    } else {
        return "CAT! Try Again!"
    }
    if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "You Win! Paper beats Rock!!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You Lose! Scissors beats Paper!";
    } else {
        return "CAT! Try Again!"
    }
    if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You Win! Scissors beats Paper!";
    } else {
        return "CAT! Try Again!"
    }
}
let playerSelection = "Paper";
let computerSelection = compChoice;
let results = playRound(playerSelection, computerSelection);
console.log(results)



