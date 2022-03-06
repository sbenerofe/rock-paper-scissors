const optionsArray = ["rock", "paper", "scissors"];

const computerPlay = () =>
  optionsArray[Math.floor(Math.random() * optionsArray.length)];
function playRound(playerSelection, computerSelection) {
  let outcome;
  if (playerSelection === "rock") {
    if (computerSelection == "rock") {
      outcome = `You tie ${playerSelection} ties ${computerSelection}`;
    }
    if (computerSelection == "paper") {
      outcome = `You lose ${playerSelection} loses to ${computerSelection}`;
    }
    if (computerSelection == "scissors") {
      outcome = `You win ${playerSelection} beats to ${computerSelection}`;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection == "paper") {
      outcome = `You tie ${playerSelection} ties ${computerSelection}`;
    }
    if (computerSelection == "scissors") {
      outcome = `You lose ${playerSelection} loses to ${computerSelection}`;
    }
    if (computerSelection == "rock") {
      outcome = `You win ${playerSelection} beats to ${computerSelection}`;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection == "scissors") {
      outcome = `You tie ${playerSelection} ties ${computerSelection}`;
    }
    if (computerSelection == "rock") {
      outcome = `You lose ${playerSelection} loses to ${computerSelection}`;
    }
    if (computerSelection == "paper") {
      outcome = `You win ${playerSelection} beats to ${computerSelection}`;
    }
  }
  return outcome;
}

const play = () => {
  let playerSelection = prompt("Choose: rock paper or scissors").toLowerCase();
  console.log(playerSelection);
  console.log(optionsArray.includes(playerSelection));
  if (optionsArray.includes(playerSelection)) {
    return playRound(playerSelection, computerPlay());
  } else {
    console.log("please chose only rock, paper, or scissors");
  }
};
const game = () => {
  for (let i = 0; i < 5; i++) {
    console.log(play());
  }
};
