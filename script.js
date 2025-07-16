let humanScore = 0;
let computerScore = 0;
// This function will generate the computer's choice. T
// The idea is that this function will assign (to the "choice variable")
//  and return either rock paper or scissor based on the value returned by Math.random()
function getComputerChoice() {
    let randomNumber = Math.random();
    let choice;
    if (randomNumber >= 0 && randomNumber <= 0.3) {
        choice = 'rock';
    }
    else if (randomNumber >= 0.4 && randomNumber <= 0.7) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    const computer = document.querySelector(".computer");
    computer.textContent = `Computer's choice: ${choice}`;
    return choice;
}

//This function will take in the user's choice
function getHumanChoice(humanChoice) {
    // let humanChoice = prompt("CHOOSE!!! rock, paper or scissors?").toUpperCase();
    // let choice;

    if (humanChoice === "ROCK") {
        choice = 'rock';
    }
    else if (humanChoice === "PAPER") {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    const human = document.querySelector('.human')
    human.textContent = `Your choice: ${choice}`;
    return choice;
}
//This function simulates a single round.
function playRound(humanChoice, computerChoice) {
        const display = document.querySelector(".output");

    if (humanChoice == "rock" && computerChoice == "paper") {
        display.textContent = "You lose. Paper beats rock.";
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        display.textContent = "You lose. Scissors beats paper.";
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        display.textContent = "You lose. Rock beats scissors.";
        computerScore++;
    }
    else if (humanChoice == computerChoice) {
        display.textContent = "Draw.";
    }
    else {
        display.textContent = "You win!!!";
        humanScore++;
    }

    localScopeFinalScore = `You: ${humanScore}  Computer: ${computerScore}`;

    return localScopeFinalScore;
}

// This function calls the playRound function 5 times which means
// the user gets to play 5 rounds
// function playGame () {
//     let scoreBoard;
//     scoreBoard = playRound(getHumanChoice(), getComputerChoice());
//     console.log(scoreBoard);
//     scoreBoard = playRound(getHumanChoice(), getComputerChoice());
//     console.log(scoreBoard);
//     scoreBoard = playRound(getHumanChoice(), getComputerChoice());
//     console.log(scoreBoard);
//     scoreBoard = playRound(getHumanChoice(), getComputerChoice());
//     console.log(scoreBoard);
//     scoreBoard = playRound(getHumanChoice(), getComputerChoice());
//     return scoreBoard
// }
// let finalScore = playGame();
// console.log("Final score: " + finalScore);

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => {
    playRound(getHumanChoice('ROCK'),getComputerChoice())
});
paper.addEventListener('click', () => {
    playRound(getHumanChoice('PAPER'),getComputerChoice())
});
scissors.addEventListener('click',() => {
    playRound(getHumanChoice('SCISSORS'),getComputerChoice())
});


const score = document.querySelector('#output');



