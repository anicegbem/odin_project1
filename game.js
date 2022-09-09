let computer = 0;
let player = 0;
let count = 1;

function getComputerChoice() {
    let options = {one: 'rock', two: 'paper', three: 'scissors'};
    let values = Object.values(options);
    return values[Math.floor(Math.random() * values.length)];
    
    
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        // console.log("Computer " + (computer = 0));
        // console.log("Player " + (player = 0));
        return (
            'Tie game'
            

        )
    }

    else if (playerSelection === 'rock' && computerSelection !== 'scissors') {
        console.log("Computer: " + (computer += count));
        console.log("Player: " + (player += player));
        // return (computer += count);
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);
    }
    else if (playerSelection === 'paper' && computerSelection !== 'rock') {
        console.log("Computer: " + (computer += count));
        console.log("Player: " + (player += player));
        // return (computer += count);
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`)


    }
    else if (playerSelection === 'scissors' && computerSelection !== 'paper') {
        console.log("Computer: " + (computer += count));
        console.log("Player: " + (player += player));
        // return (computer += count);
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);


    }
    else {
        console.log("Player: " + (player += count));
        console.log("Computer: " + (computer += computer));
        // return (player += count)
        return ("You win! " + `${playerSelection}` + " defeats " + `${computerSelection}`);
    }
    
    
    
  

};

/*function score(computer, player) {
    let playerScore;
    let computerScore;
    return function add() {
        playerScore += player;
        computerScore += computer;
    };
} */



 
function game() {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter either rock, paper or scissors");
        playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        continue;
        
        
        
    }

    return results(computer, player);
   
    
    // return play(playerSelection, computerSelection);
}

function results(computer, player) {
    if (player > computer) {
        console.log('You Won');
    } else if (player === computer) {
        console.log('Draw Game');
    } else {
        console.log('You Lose');
    }

};

function reset() {
    computer = 0;
    player = 0;
}




// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log(play('rock', computerSelection))
console.log(game());

// console.log(getComputerChoice())