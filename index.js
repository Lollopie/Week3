const options = ["Rock", "Paper", "Scissors"];
const playerWinMessages = [
    "Player wins! The computer is reconsidering its life choices.",
    "Victory! Your opponent has been defeated by pure skill.",
    "You win! The computer has requested emotional support.",
    "Nice one! Rock, paper, and scissors all salute you.",
];
const computerWinMessages = [
    "Computer wins! Better luck next time, human.",
    "Defeat! The computer has outsmarted you this time.",
    "You lose! The computer is now the reigning champion.",
    "Ouch! The computer has claimed victory in this round.",
];
const drawMessages = [
    "A draw! Great minds—or equally confused minds—think alike.",
    "Nobody wins. Tension intensifies.",
    "Draw! The rivalry continues."
];

function computerPlay() {
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
};

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
    if (firstGame) {
        alert([
            "Before you start:",
            "this game also prints extra details to your browser's console",
            "(like exactly what you and the computer picked each round).\n",
            "You don't NEED it to play, but it's helpful and fun to check!\n",
            "To open it: press F12 on Windows, or Cmd+Option+J on Mac.",
        ].join('\n'));

        alert([
            "Welcome to Rock, Paper, Scissors!\n",
            "Choose wisely: Rock crushes Scissors, Scissors cuts Paper, and Paper covers Rock.\n",
            "First to 3 wins becomes the official champion.",
            "The computer has no mercy… probably :).",
        ].join('\n'));
    }

    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt("Rock, Paper, Scissors");
        console.log(`Player chose: ${playerSelection}`);

        if (playerSelection === null) {
            console.log("Cancelling Game.");
            alert("Game cancelled. Thanks for playing!");
            return "cancelled";
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
            console.log("Invalid Choice. Continuing.");
            continue;
        }

        const computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}.`);

        const roundResult = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());

        if (roundResult === -1) {
            computerScore += 1;
            alert([
                `Player chose: ${playerSelection}`,
                `Computer chose: ${computerSelection}.\n`,
                "Computer won round.",
                `${computerWinMessages[Math.floor(Math.random() * computerWinMessages.length)]}\n`,
                `Score: You ${playerScore} - ${computerScore} Computer`,
            ].join('\n'));
            console.log("Computer won round.");
        }
        if (roundResult === 1) {
            playerScore += 1;
            alert([
                `Player chose: ${playerSelection}`,
                `Computer chose: ${computerSelection}.\n`,
                "Player won round.",
                `${playerWinMessages[Math.floor(Math.random() * playerWinMessages.length)]}\n`,
                `Score: You ${playerScore} - ${computerScore} Computer`,
            ].join('\n'));
            console.log("Player won round.");
        }
        if (roundResult === 0) {
            alert([
                `Player chose: ${playerSelection}`,
                `Computer chose: ${computerSelection}.\n`,
                "Round ended in a draw.",
                `${drawMessages[Math.floor(Math.random() * drawMessages.length)]}\n`,
                `Score: You ${playerScore} - ${computerScore} Computer`,
            ].join('\n'));
            console.log("Round ended in a draw.");
        }
        if (roundResult === null) {
            alert("Invalid Choice. Please choose Rock, Paper, or Scissors.");
            console.log("Invalid Choice. Continuing.");
            continue;
        }
    }

    if (playerScore === 3) {
        alert(`Player won with a score of ${playerScore}-${computerScore}. Congratulations!`);
    }
    if (computerScore === 3) {
        alert(`Computer won with a score of ${computerScore}-${playerScore}. Better luck next time :(`);
    }
    return "finished";
}

let firstGame = true;
let result;
do {
    result = game();
    firstGame = false;
} while (result !== "cancelled" && confirm("Do you want to play again? Click 'OK' for yes or 'Cancel' for no."))