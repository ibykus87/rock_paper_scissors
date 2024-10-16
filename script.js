// Step 2: Write the logic to get the computer choice

// Randomly generate one of the following string values: "rock", "paper" or "scissors" with a function
function getComputerChoice () {
// 1. Initialize computer choice variable 
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

// Step 3: Write the logic to get the human choice

// Write a function that takes the user choice and returns it
function getHumanChoice () {
// 1. Initialize user input variable and ask the user for his choice 
    let userInput = prompt('Enter "rock", "paper" or "scissors" to play the game:');
// 2 Convert user input to lower case
    let lowerCaseUserInput = userInput.toLowerCase();
// 3. Check if human input is a valid choice, return it or let the user know that the input is not valid
    if ( lowerCaseUserInput === 'rock' || lowerCaseUserInput === 'paper' || lowerCaseUserInput === 'scissors') {
        return( lowerCaseUserInput );
    }
    else {
        return( console.log( 'Your choice is not valid. Please enter "rock", "paper" or "scissors" into the console' ));
    }
};

getHumanChoice();
