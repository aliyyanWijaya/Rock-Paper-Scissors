let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const getRandomNum = Math.floor(Math.random() * 10);
    if (getRandomNum < 2) {
        return "rock";
    } else if(getRandomNum < 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Type 1 - 3 to choose your player. 1 - Rock, 2 - Paper, 3 - Scissors");
    if (userInput == 1) {
        return "rock";
    } else if (userInput == 2) {
        return "paper";
    } else if (userInput == 3) {
        return "scissors";
    } else {
        return "you didn't type the available options";
    }
}

console.log(getHumanChoice());