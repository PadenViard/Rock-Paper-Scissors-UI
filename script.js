            // Begin with a function called computerPlay
            // Randomly return either Rock, Paper, or Scissors
            function computerPlay() {
                const computer_choice = Math.floor(Math.random() * (4 - 1) + 1);
                if (computer_choice === 1) {
                    return 'rock';
                } else if (computer_choice === 2) {
                    return 'paper';
                } else if (computer_choice === 3) {
                    return 'scissors';
                } else {
                    alert("error with the code");
                }
            }
            // Create a function that will get a users selection
            // Prompt the user to input either Rock, Paper, or Scissors
            // Make sure the user input is case insensitive so that Rock, ROCK, and rock are all the same
            let choice = false;
            function player_selection() {
                while (choice === false) {
                    let player_choice = prompt("Please choose either; rock, paper, or scissors.");
                    player_choice = player_choice.toLowerCase();
                    if ((player_choice === 'rock') || (player_choice === 'paper') || (player_choice === 'scissors')) {
                        return player_choice;
                        choice = true;
                    }
                }
            }
            //Create a way to keep score
            let player_score = 0;
            let computer_score = 0;
            // Create a single round function for the game to be played.
            // This function should should contain two parameters
            function singleRound(player_selection, computer_selection) {
                // Create an if statement for all potential options of the game
                // Add a point to the winner of the round
                // Return the score for the current round
                if (player_selection === 'rock' && computer_selection === 'rock') {
                    return "Player: " + player_score + " Computer: " + computer_score;
                } else if (player_selection === 'rock' && computer_selection === 'paper') {
                    computer_score = computer_score + 1;
                    return "Player: " + player_score + " Computer: " + computer_score;
                } else if (player_selection === 'rock' && computer_selection === 'scissors') {
                    player_score = player_score + 1;
                    return "Player: " + player_score + " Computer: " + computer_score;
                } else if (player_selection === 'paper' && computer_selection === 'paper') {
                    return "Player: " + player_score + " Computer: " + computer_score;
                } else if (player_selection === 'paper' && computer_selection === 'rock') {
                    player_score = player_score + 1;
                    return "Player: " + player_score + " Computer: " + computer_score;
                } else if (player_selection === 'paper' && computer_selection === 'scissors') {
                    computer_score = computer_score + 1;
                    return "Player: " + player_score + " Computer: " + computer_score;
                } else if (player_selection === 'scissors' && computer_selection === 'scissors') {
                    return "Player: " + player_score + " Computer: " + computer_score;
                } else if (player_selection === 'scissors' && computer_selection === 'paper') {
                    player_score = player_score + 1;
                    return "Player: " + player_score + " Computer: " + computer_score;
                } else if (player_selection === 'scissors' && computer_selection === 'rock') {
                    computer_score = computer_score + 1;
                    return "Player: " + player_score + " Computer: " + computer_score;
                }
            }
            // Create a function called game
            function game() {
                // Create a loop that will play rock, paper, scissors for 5 rounds
                for (let i = 0; i < 5; i++) {
                    // Console.log the results of the game
                    let player = player_selection();
                    let computer = computerPlay();
                    console.log(singleRound(player, computer));
                }
            }
            // Call the game function
            game();
            // Declare the winner of the game
            if (player_score > computer_score) {
                console.log("Congrats you won the game!");
            } else if (player_score < computer_score) {
                console.log("Too bad, you lost!");
            } else if (player_score === computer_score) {
                console.log("You tied the game!");
            }