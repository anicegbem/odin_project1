function getComputerChoice() {
    let options = {one: 'rock', two: 'paper', three: 'scissors'};
    let values = Object.values(options);
    return values[Math.floor(Math.random() * values.length)];
    
    
}

function play(playerSelection, computerSelection) {
    // let computer = getComputerChoice();

    if (playerSelection === computerSelection) {
        return 'Tie game'
    }

    if (playerSelection === 'rock' && computerSelection != 'scissors') {
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);
    }
    else if (playerSelection === 'paper' && computerSelection != 'rock') {
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`)


    }
    else if (playerSelection === 'scissors' && computerSelection != 'paper') {
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);


    }
    else {
        return ("You win! " + `${playerSelection}` + " defeats " + `${computerSelection}`);
    }
  

}

// const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(play('rock', computerSelection))

// console.log(getComputerChoice())