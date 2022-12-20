function getComputerChoice(arr) {
    const randIndex = Math.floor(Math.random() * weapon.length);
    console.log(randIndex);
    const item = weapon[randIndex];
    return item;
}

let weapon = ["Rock", "Paper", "Scissors"];

const compChoice = getComputerChoice(weapon);
console.log(compChoice);