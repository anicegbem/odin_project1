function getComputerChoice() {
    let options = {one: 'rock', two: 'paper', three: 'scissors'};
    let values = Object.values(options);
    return values[Math.floor(Math.random() * values.length)];
    
    
}

function play(playerSelection, computerSelection) {
    // let computer = getComputerChoice();
    let count = 1;
    let computer = 0;
    let player = 0;
    if (playerSelection === computerSelection) {
        console.log(computer = 0);
        console.log(player = 0);
        return (
            'Tie game'
            

        )
    }

    if (playerSelection === 'rock' && computerSelection != 'scissors') {
        console.log(computer += count);
        console.log(player = 0);
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);
    }
    else if (playerSelection === 'paper' && computerSelection != 'rock') {
        console.log(computer += count);
        console.log(player = 0);
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`)


    }
    else if (playerSelection === 'scissors' && computerSelection != 'paper') {
        console.log(computer += count);
        console.log(player = 0);
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);


    }
    else {
        console.log(player += count);
        console.log(computer = 0);
        return ("You win! " + `${playerSelection}` + " defeats " + `${computerSelection}`);
    }
  

}



 
function game() {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter either rock, paper or scissors");
        computerSelection = getComputerChoice();
        console.log(play(playerSelection, computerSelection));
        continue;
        
        
        
    }
    // return play(playerSelection, computerSelection);
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log(play('rock', computerSelection))
console.log(game());

// console.log(getComputerChoice())