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
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("The game tie! You both chose rock");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        printScore();
        console.log("Computer won! paper beats rock");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        printScore();
        console.log("Human won! rock beats scissors");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        printScore();
        console.log("Human won! paper beats rock");
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("The game tie! you both chose paper");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        printScore();
        console.log("Computer won! scissors beat paper");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        printScore();
        console.log("Computer won! rock beats scissors");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        printScore();
        console.log("Human won!");
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("The game tie! you both chose scissors");
    } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function gameResult() {
    if (humanScore > computerScore) {
        console.log("after 5 rounds, human shows that they can beat computer!");
    } if (computerScore > humanScore) {
        console.log("after 5 rounds, it shows that AI has already beaten human!")
    }
}

// Write the logic to play the game
function playGame() {
    // #1 initialize the game, ask the human to choose
    let roundNum = 0;

    // #2 record the result, increase the score and the result

    // #3 play the round 5 times, return
    while (roundNum < 5) {
        getHumanChoice();
        getComputerChoice();
        playRound(humanSelection, computerSelection);
        roundNum++;
    }

    // #4 finish the game, print the result to the console
    gameResult();
}

playGame();