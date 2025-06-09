let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const getRandomNum = Math.floor(Math.random() * 10);
    if (getRandomNum < 2) {
        console.log("Computer randomly chose rock");
        return "rock";
    } else if(getRandomNum < 6) {
        console.log("Computer randomly chose paper");
        return "paper";
    } else {
        console.log("Computer randomly chose scissors");
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Type 1 - 3 to choose your player. 1 - Rock, 2 - Paper, 3 - Scissors");
    if (userInput == 1) {
        console.log("you chose rock");
        return "rock";
    } else if (userInput == 2) {
        console.log("you chose paper");
        return "paper";
    } else if (userInput == 3) {
        console.log("you chose scissors");
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
        console.log("Computer won! paper beats rock");
        printScore();
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("Human won! rock beats scissors");
        printScore();
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("Human won! paper beats rock");
        printScore();
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("The game tie! you both chose paper");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("Computer won! scissors beat paper");
        printScore();
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("Computer won! rock beats scissors");
        printScore();
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("Human won!");
        printScore();
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("The game tie! you both chose scissors");
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

// Write the logic to play the game
function playGame() {
    // #1 initialize the game, ask the human to choose
    let roundNum = 0;

    // #2 record the result, increase the score and the result

    // #3 play the round 5 times, return
    while (roundNum < 5) {
        console.log(`Round ${roundNum + 1}`);
        console.log("====================");
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        roundNum++;
    }

    // #4 finish the game, print the result to the console
    gameResult();
}

playGame();