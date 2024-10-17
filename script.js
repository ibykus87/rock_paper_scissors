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
    if ( lowerCaseUserInput === 'rock' || lowerCaseUserInput === 'paper' || lowerCaseUserInput === 'scissors' ) {
        return( lowerCaseUserInput );
    }
    else {
        return(console.log( 'Your choice is not valid. Please enter "rock", "paper" or "scissors" into the console' ));
    }
};

// Step 6: Write the logic to play the entire game of 5 rounds

// Write a function that calls playRound, keeps track of the scores and declares a winner at the end
function playGame () {
    // Step 4: Declare the players score variables

    let humanScore = 0;
    let computerScore = 0;

    // Step 5: Write the logic to play a single round

    // Write a function that takes the human and computer choices increments the round winner`s score and logs a winner announcement
    function playRound (humanChoice, computerChoice) {
    // 1. Write game logic: rock beats scissor, paper beats rock, scissor beats paper
        if ( (humanChoice === 'rock' && computerChoice === 'scissors') || ( humanChoice === 'paper' && computerChoice === 'rock' ) || ( humanChoice === 'scissors' && computerChoice === 'paper' ) ) {
            humanScore++
            console.log( 'You win this round! Rock beats Scissor. You have got: ' + humanScore + ' Points and the computer got: ' + computerScore + ' Points');
            return ( humanScore, computerScore );
        }
        else if ( humanChoice ===  computerChoice ) {
            console.log( 'Thats a tie! You have got: ' + humanScore + ' Points and the computer got: ' + computerScore + ' Points' );
            return ( humanScore, computerScore );
        }
        else {
            computerScore++
            console.log( 'You lose this round! You have got: ' + humanScore + ' Points and the computer got: ' + computerScore + ' Points' );
            return ( humanScore, computerScore );
        }
    }

    // Initiate round variable with a count of 0
    let rounds = 0;
    // Create loop to play 5 rounds
    // Let the loop run as long as rounds is smaller than 5
    while (rounds < 5) {
        // Initiate human and computer selection and get value from the corresponding functions
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        // Only count rounds up if the human entered a valid choice
        if (humanSelection === 'rock' || humanSelection === 'paper' || humanSelection === 'scissors') {
            playRound( humanSelection, computerSelection);
            rounds++
            console.log(humanSelection + ' ' + computerSelection);
            console.log(rounds);
        }       
    }

    // Declare the winner
    if (humanScore > computerScore) {
        console.log('You Won with ' + humanScore + ' Points to ' + computerScore + ' Points!');
    }
    else if (humanScore < computerScore){
        console.log('You Lost with ' + humanScore + ' Points to ' + computerScore + ' Points!');
    }
    else {
        console.log('Thats a tie! The Score is ' + humanScore + ' Points to ' + computerScore + ' Points!');
    }
}

playGame();