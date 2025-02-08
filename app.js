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