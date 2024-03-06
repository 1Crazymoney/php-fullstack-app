//  ? DOM elements
const playerText = document.querySelector(
  "#playerText"
) as HTMLParagraphElement;

const computerText = document.querySelector(
  "#computerText"
) as HTMLParagraphElement;

const gameButtons = document.querySelectorAll(
  ".gameButton"
) as NodeListOf<HTMLButtonElement>;

const playerImg = document.querySelector("#playerImg") as HTMLImageElement;
const computerImg = document.querySelector("#computerImg") as HTMLImageElement;
const labelResult = document.querySelector("#labelResult") as HTMLLabelElement;

const restartShifumiDialog = document.querySelector(
  "#restartShifumiDialog"
) as HTMLDialogElement;

const resultsShifumi = document.querySelector(
  "#resultShifumi"
) as HTMLTitleElement;

const scoreShifumi = document.querySelector(
  "#scoreShifumi"
) as HTMLParagraphElement;

const playerScoreDiv = document.querySelector(
  "#displayPlayerScore"
) as HTMLDivElement;

const computerScoreDiv = document.querySelector(
  "#displayComputerScore"
) as HTMLDivElement;
const quitGameButton = document.querySelector(
  "#quitGameButton"
) as HTMLButtonElement;
// ? Game elements
let player: string;
let computer: string;
let playerScore = 0;
let computerScore = 0;

function buttonContent(button: HTMLButtonElement): string {
  if (button.textContent?.indexOf("👊") != -1) {
    return "ROCK";
  } else if (button.textContent?.indexOf("🖐") != -1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    player = buttonContent(button);
    playerText.textContent = `${player}`;
    computerPlays();
    labelResult.textContent = `${checkWinnerShifumi()}`;
    updateScore();
  });
});

function computerPlays() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  computer = buttonContent(gameButtons[randNum - 1]);
  computerText.textContent = `${computer}`;
}

function checkWinnerShifumi() {
  if (computer === player) {
    return "DRAW !";
  }

  switch (computer) {
    case "ROCK":
      if (player === "PAPER") {
        return win();
      } else {
        return lose();
      }

    case "PAPER":
      if (player === "SCISSORS") {
        return win();
      } else {
        return lose();
      }

    case "SCISSORS":
      if (player === "ROCK") {
        return win();
      } else {
        return lose();
      }
  }
}
function win() {
  return "YOU WIN !";
}
function lose() {
  return "YOU LOSE !";
}
function updateScore() {
  if (checkWinnerShifumi() === "YOU WIN !") {
    playerScore += 1;
    playerScoreDiv.textContent = `${playerScore}`;
  } else if (checkWinnerShifumi() === "YOU LOSE !") {
    computerScore += 1;
    computerScoreDiv.textContent = `${computerScore}`;
  }
}
quitGameButton.addEventListener(("click"), () => manageRestartDialog())

function manageRestartDialog() {
  setTimeout(() => {
    toggleShifumiDialog(restartShifumiDialog);
  }, 2000);
  if (playerScore > computerScore) {
    resultsShifumi.textContent = "YOU WIN";
  } else if (playerScore < computerScore) {
    resultsShifumi.textContent = "YOU LOSE";
  } else {
    resultsShifumi.textContent = "DRAW";
  }
  scoreShifumi.textContent = `Player : ${playerScore}- ${computerScore} : Computer`;
}

function toggleShifumiDialog(element: HTMLDialogElement): void {
  element.showModal();
  element.classList.toggle("hidden");
  element.classList.toggle("flex");
}
