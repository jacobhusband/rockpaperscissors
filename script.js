const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const result = document.getElementById("result");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

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

function playerSelection(event) {
  const input = event.target.getAttributeNames()[4];
  if (input === "data-rock") {
    return "rock";
  } else if (input === "data-paper") {
    return "paper";
  } else if (input === "data-scissors") {
    return "scissors";
  }
}

function playRound(event) {
  const player = playerSelection(event);
  const computer = computerSelection();
  if (player === computer) {
    result.innerHTML = "Tie";
  } else if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer === "rock")
  ) {
    result.innerHTML = "Computer won";
    computerScore.innerHTML = +computerScore.innerHTML + 1;
    checkForWinner(+computerScore.innerHTML, "Computer");
  } else {
    result.innerHTML = "You won";
    playerScore.innerHTML = +playerScore.innerHTML + 1;
    checkForWinner(+playerScore.innerHTML, "Player");
  }
}

function checkForWinner(score, person) {
  if (score >= 5) {
    result.innerHTML = `${person} won the battle!`;
    computerScore.innerHTML = 0;
    playerScore.innerHTML = 0;
  }
}
