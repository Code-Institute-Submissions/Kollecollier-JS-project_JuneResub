const playerText = document.querySelector("#playerText");
const pcText = document.querySelector("#pcText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let pc;
let result;

choiceBtns.forEach(button => addEventListener.addEventListener("click", () => {

  player = button.textContent;
  pcTurn ();
  playerText.textContent = `Player: ${player}`;
  pcText.textContent = `Player: ${PC}`;
  ResultText.textContent = winner();
}));

function pcTurn(){
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch(randNum){
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