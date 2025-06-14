let humanScore = 0;
let computerScore = 0;
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const gameResultDisplay = document.querySelector(".printout");
const playerDisplay = document.querySelector(".player-display");
const computerDisplay = document.querySelector(".computer-display")

function getComputerChoice() {
    const getRandomNum = Math.floor(Math.random() * 10);
    if (getRandomNum < 2) {
        console.log("Computer randomly chose rock");
        computerDisplay.innerText = "Computer randomly chose: rock";
        return "rock";
    } else if(getRandomNum < 6) {
        console.log("Computer randomly chose paper");
        computerDisplay.innerText = "Computer randomly chose: paper";
        return "paper";
    } else {
        console.log("Computer randomly chose scissors");
        computerDisplay.innerText = "Computer randomly chose: scissors";
        return "scissors";
    }
}

// function getHumanChoice() {
//     let userInput = prompt("Type 1 - 3 to choose your player. 1 - Rock, 2 - Paper, 3 - Scissors");
//     if (userInput == 1) {
//         console.log("you chose rock");
//         return "rock";
//     } else if (userInput == 2) {
//         console.log("you chose paper");
//         return "paper";
//     } else if (userInput == 3) {
//         console.log("you chose scissors");
//         return "scissors";
//     } else {
//         return "you didn't type the available options";
//     }
// }

function printScore() {
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function displayScore() {
    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;
}

function playRound(humanChoice, computerChoice) {
    const gameTieDisplay = `The game tie! You both chose ${humanChoice}`;

    if (humanChoice == "rock" && computerChoice == "rock") {
        gameResultDisplay.innerText = gameTieDisplay;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("Computer won! paper beats rock");
        gameResultDisplay.innerText = "Computer won! paper beats rock";
        printScore();
        displayScore();
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("Human won! rock beats scissors");
        gameResultDisplay.innerText = "Human won! rock beats scissors";
        printScore();
        displayScore();
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("Human won! paper beats rock");
        gameResultDisplay.innerText = "Human won! paper beats rock";
        printScore();
        displayScore();
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        gameResultDisplay.innerText = gameTieDisplay;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("Computer won! scissors beat paper");
        gameResultDisplay.innerText = "Computer won! scissors beat paper";
        printScore();
        displayScore();
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("Computer won! rock beats scissors");
        gameResultDisplay.innerText = "Computer won! rock beats scissors";
        printScore();
        displayScore();
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("Human won!");
        gameResultDisplay.innerText = "Human won! scissors beat paper";
        printScore();
        displayScore();
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        gameResultDisplay.innerText = gameTieDisplay;
    }
    console.log("\n");
}


function gameResult() {
    if (humanScore > computerScore) {
        console.log("after 5 rounds, human shows that they can beat computer!");
    } else if (computerScore > humanScore) {
        console.log("after 5 rounds, it shows that AI has already beaten human!");
    } else {
        console.log("the game tie!");
    }
}

const myButton = document.querySelectorAll("button");

myButton.forEach((button) => {
button.addEventListener("click", () => {
    const buttonValue = button.innerText.toLowerCase();
    console.log("you chose: " + buttonValue);
    playerDisplay.innerText = "you chose: " + buttonValue;
    gameResultDisplay.innerText = "";
    playRound(buttonValue, getComputerChoice());

    if(humanScore == 5) {
        computerDisplay.innerText = "";
        playerDisplay.innerText = "";
        gameResultDisplay.innerText = "The game ends, human won!";
    } else if (computerScore == 5) {
        computerDisplay.innerText = "";
        playerDisplay.innerText = "";
        gameResultDisplay.innerText = "The game ends, AI shows that humant cannot win against computer!";
    }
})
})