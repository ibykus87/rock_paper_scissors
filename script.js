// Step 2: Write the logic to get the computer choice

// Randomly generate one of the following string values: "rock", "paper" or "scissors" with a function
function getComputerChoice () {
// 1. Initialise variable 
    let computerChoice = ''; 
// 2. Get a random number
    randomNumber = Math.random();
// 3. If random number < 0.33 = "rock", else if > 0.33 and < 0.66 = "paper", else = "scissors"
    if (randomNumber < 0.33) {
        computerChoice = 'rock';
    }
    else if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
// Return random computer choice
    return( computerChoice );
};

console.log(getComputerChoice());