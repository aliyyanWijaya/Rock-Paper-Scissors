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

function printScore() {
    console.log("The score is:");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        return "The game tie!";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        printScore();
        return "Computer won!";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        printScore();
        return "Human won!";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        printScore();
        return "Human won!";
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        return "The game tie!";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        printScore();
        return "Computer won!";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        printScore();
        return "Computer won!";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        printScore();
        return "Human won!";
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "The game tie!";
    } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);