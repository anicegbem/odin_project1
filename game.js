let buttons = document.querySelectorAll('button');
let computer = 0;
let player = 0;


function getComputerChoice() {
    let options = {one: 'rock', two: 'paper', three: 'scissors'};
    let values = Object.values(options);
    return values[Math.floor(Math.random() * values.length)];
    
    
}

function playRound(playerSelection, computerSelection) {
    let result = " ";

    if (playerSelection === computerSelection) {
        result = "Tie game "+ '<br>' + "Computer: " + computer + "<br> Player: " + player;
        
        
        
        
    }

    else if (playerSelection === 'rock' && computerSelection !== 'scissors') {
        computer += 1
        result = ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}` + 
        "<br>Computer: " + computer + "<br> Player: " + player);
        
    }

    else if (playerSelection === 'paper' && computerSelection !== 'rock') {
        computer += 1;
        result = ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}` + 
        "<br>Computer: " + computer + "<br>Player: " + player);
        


    }
    else if (playerSelection === 'scissors' && computerSelection !== 'paper') {
        computer += 1;
        result = ("You lose! " + `${computerSelection}` + " defeats " + `${playerSelection}` + 
        "<br>Computer: " + computer + "<br>Player: " + player);
        


    }
    else {
        player += 1;
        result = ("You win! " + `${playerSelection}` + " defeats " + `${computerSelection}` + 
        "<br>Computer: " + computer + "<br>Player: " + player);
        
    }

    if (computer === 5 || player === 5) {
        buttons.forEach(button => {
            button.disabled = true;
        });
        if(computer > player) {
            result += "<br> You lose. Play Again";
        } else if (computer < player) {
            result += "<br> You win! Good Job";
        }
        let reload = document.getElementById('reload');
        reload.style.display = "inline-block";
    }

    document.getElementById("result").innerHTML = result;
    return;
  

};




 
function game() {
    buttons.forEach(button => {
        button.addEventListener('click', function oneRound() {
            let input = button.textContent;
            let computerchoice = getComputerChoice();
            playRound(input, computerchoice);

        });
            
        


    });
   
}





game();
