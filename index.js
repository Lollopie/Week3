const options = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 0;
    }
    switch(playerSelection) {
        case "rock":
            if(computerSelection === "paper")
                return -1;
            return 1;
        case "paper":
            if(computerSelection === "rock")
                return 1;
            return -1;
        case "scissors":
            if(computerSelection === "rock")
                return -1;
            return 1;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 3 && computerScore < 3){
        let playerSelection = prompt("Rock, Paper, Scissors");
        console.log(`Player chose: ${playerSelection}`);
        if(playerSelection === null) {
            console.log("Cancelling Game.")
            break;
        }
        playerSelection = playerSelection.trim();
        let isEqual = false;
        for(let i = 0; i < options.length; i++) {
            isEqual = isEqual || (playerSelection.toLowerCase() === options[i].toLowerCase());
        }
        if(!isEqual) {
            alert("Invalid Choice. Continuing.");
            console.log("Invalid Choice. Continuing.")
            continue;
        }
        const computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}.`)
        const roundResult = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
        if(roundResult == -1) {
            console.log("Computer won round.");
            computerScore += 1;
        }
        if(roundResult == 1) {
            console.log("Player won round.");
            playerScore += 1;
        }
        if(roundResult == 0) {
            console.log("Round ended in a draw.");
        }
    }
    if(playerScore === 3) {
        alert(`Player won with a score of ${playerScore}-${computerScore}`);
    }
    if(computerScore === 3) {
        alert(`Computer won with a score of ${computerScore}-${playerScore}`);
    }
}

game();