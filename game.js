let computer = 0;
let player = 0;
let count = 1;
let buttons = document.querySelectorAll('button');

function getComputerChoice() {
    let options = {one: 'rock', two: 'paper', three: 'scissors'};
    let values = Object.values(options);
    return values[Math.floor(Math.random() * values.length)];
    
    
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return (
            'Tie game'
            

        )
    }

    else if (playerSelection === 'rock' && computerSelection !== 'scissors') {
        console.log("Computer: " + (computer += count));
        console.log("Player: " + player);
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);
    }

    else if (playerSelection === 'paper' && computerSelection !== 'rock') {
        console.log("Computer: " + (computer += count));
        console.log("Player: " + player);
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`)


    }
    else if (playerSelection === 'scissors' && computerSelection !== 'paper') {
        console.log("Computer: " + (computer += count));
        console.log("Player: " + player);
        return ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}`);


    }
    else {
        console.log("Player: " + (player += count));
        console.log("Computer: " + computer);
    
        return ("You win! " + `${playerSelection}` + " defeats " + `${computerSelection}`);
    }
    
    
    
  

};


 
function game() {
    // const rock = document.getElementById("rock");
    buttons.forEach(button => {
        button.addEventListener('click', function oneRound() {
            let input = button.textContent;
            let computerchoice = getComputerChoice();
            console.log(playRound(input, computerchoice));

        })
            
        


    })
        
        
        // console.log(oneRound());
        
        // console.log(playRound(input, computerchoice));

        
        
        
        
        
    

    // return results(computer, player);
   
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


/*function oneRound() {
    let input = buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log();

        })
    }
        
    );
    let computerchoice = getComputerChoice();
    return playRound(input, computerchoice);
}*/


/*buttons.forEach(button => {
    button.addEventListener('click', function oneRound() {
        let input = button.textContent;
        computerchoice = getComputerChoice();
        playRound(input, computerchoice);
    })
})*/



game();
