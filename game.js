let count = 1;
let computer = 0;
let player = 0

function getComputerChoice() {
    let options = {one: 'rock', two: 'paper', three: 'scissors'};
    let values = Object.values(options);
    return values[Math.floor(Math.random() * values.length)];
    
    
}

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // console.log("Computer " + (computer = 0));
        // console.log("Player " + (player = 0));
        return (
            'Tie game'
            

        )
    }

    if (playerSelection === 'rock' && computerSelection != 'scissors') {
        console.log("Computer: " + (computer += count));
        console.log("Player: " + (player = 0));
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);
    }
    else if (playerSelection === 'paper' && computerSelection != 'rock') {
        console.log("Computer: " + (computer += count));
        console.log("Player: " + (player = 0));
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`)


    }
    else if (playerSelection === 'scissors' && computerSelection != 'paper') {
        console.log("Computer: " + (computer += count));
        console.log("Player: " + (player = 0));
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);


    }
    else {
        console.log("Player: " + (player += count));
        console.log("Computer: " + (computer = 0));
        return ("You win! " + `${playerSelection}` + " defeats " + `${computerSelection}`);
    }

    
    


    
  

}



 
function game() {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter either rock, paper or scissors");
        playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        console.log(play(playerSelection, computerSelection));
        continue;
        
        
        
    }

    return results(computer, player);
    
    // return play(playerSelection, computerSelection);
}

function results(computer, player) {
    for(let i = 0; i < 5; i++) {

    }
    if (player > computer) {
        console.log('You Won');
    } else {
        console.log('You lost')
    }

};




// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log(play('rock', computerSelection))
console.log(game());

// console.log(getComputerChoice())