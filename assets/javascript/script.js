const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
let player;
let computer;
let playerScore = 0, compScore = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {
  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
  playerScoreDiv.textContent = playerScore;
  computerScoreDiv.textContent = compScore;

}));

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "✊";
      break;
    case 2:
      computer = "✋";
      break;
    case 3:
      computer = "✌️";
      break;
  }
}

function checkWinner() {
  if (player === computer) {
    return "Draw!";
  } else if (computer === "✊") {
    if (player === "✋") {
      playerScore += 1;
      return "You Win!";
     } else {
      compScore += 1;
      return "You Lose!";
     }
  } else if (computer === "✋") {
    if (player === "✌️") {
      playerScore += 1;
      return "You Win!";
     } else {
      compScore += 1;
      return "You Lose!";
     }
  } else if (computer === "✌️") {
    if (player === "✊") {
      playerScore += 1;
      return "You Win!";
     } else {
      compScore += 1;
      return "You Lose!";
     }
  }
}