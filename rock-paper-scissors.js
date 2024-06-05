//Rock Paper Scissors in JavaScript

// Take what player write in the terminal
const playerSelect = process.argv[2].toLowerCase();
// console.log(playerSelect);

// For computer Selection
const options = ["rock", "paper", "scissors"];
const randomOption = options[Math.floor(Math.random() * options.length)];
const computerSelect = randomOption;
// console.log(computerSelect);

// This Function defines who wins, when, and prints the result
function getResult() {
  if (playerSelect === computerSelect) {
    return console.log(
      `You chose ${playerSelect} and the computer ${computerSelect}. it's a tie!`
    );
  } else if (
    (playerSelect == "rock" && computerSelect == "scissors") ||
    (playerSelect == "scissors" && computerSelect == "paper") ||
    (playerSelect == "paper" && computerSelect == "rock")
  ) {
    return console.log(
      `You chose ${playerSelect} and the computer ${computerSelect}. You won!`
    );
  } else {
    return console.log(
      `You chose ${playerSelect} and the computer ${computerSelect}. You lose!`
    );
  }
}

// To validate the Player Selection

if (
  playerSelect !== "rock" &&
  playerSelect !== "scissors" &&
  playerSelect !== "paper"
) {
  console.log("Invalid option, try again");
} else {
  getResult();
}
