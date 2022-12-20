function getComputerChoice(arr) {
    const randIndex = Math.floor(Math.random() * weapon.length);
    console.log(randIndex);
    const item = weapon[randIndex];
    return item;
}

let weapon = ["Rock", "Paper", "Scissors"];

const compChoice = getComputerChoice(weapon);
console.log(compChoice);

//Write a function that plays a single round ex; playRound() = > {};
//function takes two parameters.
//playerSelection & computerSelection.
//RETURNS a string that declares the winner.
//make playerSelection parameter case-insensitive.