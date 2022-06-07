function computerSelection() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerSelection() {
  let input = prompt("Rock, paper, or scissors?");
  input = input.toLowerCase();
  if (input === "rock") {
    return "rock";
  } else if (input === "paper") {
    return "paper";
  } else if (input === "scissors") {
    return "scissors";
  } else {
    playerSelection();
  }
}

function playRound() {
  const player = playerSelection();
  const computer = computerSelection();
  if (player === computer) {
    console.log(`Computer and you chose ${player}, play again!`);
    playRound();
  } else if (player === "rock" && computer === "paper") {
    console.log(
      `Computer chose ${computer} and you chose ${player}, computer won!`
    );
  } else if (player === "rock" && computer === "scissors") {
    console.log(`Computer chose ${computer} and you chose ${player}, you won!`);
  } else if (computer === "rock" && player === "paper") {
    console.log(`Computer chose ${computer} and you chose ${player}, you won!`);
  } else if (computer === "rock" && player === "scissors") {
    console.log(
      `Computer chose ${computer} and you chose ${player}, computer won!`
    );
  }
}

playRound();
