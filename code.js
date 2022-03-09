const optionsArray = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const computerChoice =
    optionsArray[Math.floor(Math.random() * optionsArray.length)];
  console.log(`computer choice = ${computerChoice}`);
  return computerChoice;
};
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

const play = (playerSelection) => {
  // let playerSelection = prompt("Choose: rock paper or scissors").toLowerCase();
  // console.log(playerSelection);
  // console.log(optionsArray.includes(playerSelection));
  if (optionsArray.includes(playerSelection)) {
    return playRound(playerSelection, computerPlay());
  } else {
    console.log("please chose only rock, paper, or scissors");
  }
};
// const game = () => {
//   console.log("play");
//   for (let i = 0; i < 5; i++) {
//     console.log(play());
//   }
// };

let wins = 0;
let losses = 0;
let ties = 0;

const resetScores = () => {
  wins = 0;
  losses = 0;
  ties = 0;
  wins_paragraph.textContent = `wins = ${wins}`;
  losses_paragraph.textContent = `losses = ${losses}`;
  ties_paragraph.textContent = `ties = ${ties}`;
};

// <p class="wins">wins = 0</p>
// <p class="losses">losses = 0</p>
// <p class="ties">ties = 0</p>
// <p class="outcome">no games played yet</p>

const wins_paragraph = document.querySelector(".wins");
const losses_paragraph = document.querySelector(".losses");
const ties_paragraph = document.querySelector(".ties");
const outcome_paragraph = document.querySelector(".outcome");

const play_rock = () => {
  const outcome = play("rock");
  postresults(outcome);
};
const play_paper = () => {
  const outcome = play("paper");
  postresults(outcome);
};
const play_scissors = () => {
  const outcome = play("scissors");
  postresults(outcome);
};

const postresults = (outcome) => {
  if (outcome.includes("win")) {
    wins += 1;
    wins_paragraph.textContent = `wins = ${wins}`;
  }
  if (outcome.includes("lose")) {
    losses += 1;
    losses_paragraph.textContent = `losses = ${losses}`;
  }
  if (outcome.includes("tie")) {
    ties += 1;
    ties_paragraph.textContent = `ties = ${ties}`;
  }
  if (wins >= 5) {
    outcome = outcome + ` you win the match ${wins}-${losses}-${ties}`;
    resetScores();
  }
  if (losses >= 5) {
    outcome = outcome + " you lose the match ${wins}-${losses}-${ties}`";
    resetScores();
  }
  outcome_paragraph.textContent = `${outcome}`;
};

const button_rock = document.querySelector(".rock");
const button_paper = document.querySelector(".paper");
const button_scissors = document.querySelector(".scissors");
button_rock.addEventListener("click", play_rock);
button_paper.addEventListener("click", play_paper);
button_scissors.addEventListener("click", play_scissors);
