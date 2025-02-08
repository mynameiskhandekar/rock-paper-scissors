//Creating a function by which computer generates it's response.
function getComputerChoice() {
    let num = Math.random();
    if(num < 1/3) {
        return "rock";
    } else if(num < 2/3) {
        return "paper";
    } else {
        return "scissors"
    }
}

//Creating function to get the human choice
function getHumanChoice() {
    let choice = prompt("Enter r for rock, p for paper and s for scissors: ")
    if(choice === 'r') {
        return "rock";
    } else if(choice === 'p') {
        return "paper";
    } else if(choice === 's') {
        return "scissors";
    } else {
        console.log("Enter valid choice: ");
    }
}

//Scores
let humanScore = 0;
let computerScore = 0;

//Creating logic to play single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice == 'rock') && (computerChoice == 'rock')) {
        console.log("Tie!");
    } else if((humanChoice == 'rock') && (computerChoice == 'paper')) {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if((humanChoice == 'rock') && (computerChoice == 'scissors')) {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if((humanChoice == 'paper') && (computerChoice == 'rock')) {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if((humanChoice == 'paper') && (computerChoice == 'paper')) {
        console.log("Tie!");
    } else if((humanChoice == 'paper') && (computerChoice == 'scissors')) {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if((humanChoice == 'scissors') && (computerChoice == 'rock')) {
        console.log("You lose! Rock beats Scissors");
    } else if((humanChoice == 'scissors') && (computerChoice == 'paper')) {
        console.log("You win! Scissors beats Paper");
    } else if((humanChoice == 'scissors') && (computerChoice == 'scissors')) {
        console.log("Tie!");
    } else {
        console.log("Invalid");
    }
}