const options = ["Rock", "Paper", "Scissors"];
const playerWinMessages = [
    "Player wins! The computer is reconsidering its life choices.",
    "Victory! Your opponent has been defeated by pure skill.",
    "You win! The computer has requested emotional support.",
    "Nice one! Rock, paper, and scissors all salute you.",
]
const computerWinMessages = [
    "Computer wins! Better luck next time, human.",
    "Defeat! The computer has outsmarted you this time.",
    "You lose! The computer is now the reigning champion.",
    "Ouch! The computer has claimed victory in this round.",
]
const drawMessages = [
    "A draw! Great minds—or equally confused minds—think alike.",
    "Nobody wins. Tension intensifies.",
    "Draw! The rivalry continues."
]

function computerPlay() {
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper")
                return -1;
            return 1;
        case "paper":
            if (computerSelection === "rock")
                return 1;
            return -1;
        case "scissors":
            if (computerSelection === "rock")
                return -1;
            return 1;
        default:
            return null;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    alert("Before you start: this game also prints extra details to your browser's console (like exactly what you and the computer picked each round).\n\nYou don't NEED it to play, but it's helpful and fun to check!\n\nTo open it: right-click anywhere on the page → 'Inspect' → click the 'Console' tab. (Or press F12 on Windows, or Cmd+Option+J on Mac.)");
    alert("Welcome to Rock, Paper, Scissors!\n\nChoose wisely: Rock crushes Scissors, Scissors cuts Paper, and Paper covers Rock.\n\nFirst to 3 wins becomes the official champion. The computer has no mercy… probably :).");
    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt("Rock, Paper, Scissors");
        console.log(`Player chose: ${playerSelection}`);
       if (playerSelection === null) {
            console.log("Cancelling Game.");
            alert("Game cancelled. Thanks for playing!");
            break;
        }
        playerSelection = playerSelection.trim();
        let isValid = false;
        for (let i = 0; i < options.length; i++) {
            if (playerSelection.toLowerCase() === options[i].toLowerCase()) {
                isValid = true;
                break;
            }
        }
        if (!isValid) {
            alert("Invalid Choice. Please choose Rock, Paper, or Scissors.");
            console.log("Invalid Choice. Continuing.")
            continue;
        }
        const computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}.`)
        const roundResult = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
        if (roundResult == -1) {
            alert(`Player chose: ${playerSelection}\nComputer chose: ${computerSelection}\n\nComputer won round.\n${computerWinMessages[Math.floor(Math.random() * computerWinMessages.length)]}`);
            console.log("Computer won round.");
            computerScore += 1;
        }
        if (roundResult == 1) {
            alert(`Player chose: ${playerSelection}\nComputer chose: ${computerSelection}\n\nPlayer won round.\n${playerWinMessages[Math.floor(Math.random() * playerWinMessages.length)]}`);
            console.log("Player won round.");
            playerScore += 1;
        }
        if (roundResult == 0) {
            alert(`Player chose: ${playerSelection}\nComputer chose: ${computerSelection}\n\nRound ended in a draw.\n${drawMessages[Math.floor(Math.random() * drawMessages.length)]}`);
            console.log("Round ended in a draw.");
        }
    }
    if (playerScore === 3) {
        alert(`Player won with a score of ${playerScore}-${computerScore}. Congratulations!`);
    }
    if (computerScore === 3) {
        alert(`Computer won with a score of ${computerScore}-${playerScore}. Better luck next time :(`);
    }
}

let playAgain = true;
while (playAgain) {
    game();
    playAgain = confirm("Do you want to play again? Click 'OK' for yes or 'Cancel' for no.");
}
