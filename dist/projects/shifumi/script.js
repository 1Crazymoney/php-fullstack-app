"use strict";
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const gameButtons = document.querySelectorAll(".gameButton");
const playerImg = document.querySelector("#playerImg");
const computerImg = document.querySelector("#computerImg");
const labelResult = document.querySelector("#labelResult");
const playerScoreDiv = document.querySelector("#displayPlayerScore");
const computerScoreDiv = document.querySelector("#displayComputerScore");
let player;
let computer;
let playerScore = 0;
let computerScore = 0;
function buttonContent(button) {
    if (button.textContent === "👊") {
        console.log(button.textContent);
        return "ROCK";
    }
    else if (button.textContent === "🖐") {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}
gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        player = buttonContent(button);
        // console.log(player);
        playerText.textContent = `Player : ${player}`;
        computerPlays();
        labelResult.textContent = `${checkWinner()}`;
        updateScore();
    });
});
function computerPlays() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    computer = buttonContent(gameButtons[randNum - 1]);
    computerText.textContent = `Computer : ${computer}`;
}
function checkWinner() {
    if (computer === player) {
        labelResult.classList.add("bg-slate-700");
        return "DRAW !😐";
    }
    switch (computer) {
        case "ROCK":
            displayImgs();
            if (player === "PAPER") {
                labelResult.style.color = "green";
                return "YOU WIN !😃";
            }
            else {
                labelResult.style.color = "red";
                return "❌ YOU LOSE !😥";
            }
        case "PAPER":
            displayImgs();
            if (player === "SCISSORS") {
                labelResult.style.color = "green";
                return "YOU WIN !😃";
            }
            else {
                labelResult.style.color = "red";
                return "❌ YOU LOSE !😥";
            }
        case "SCISSORS":
            displayImgs();
            if (player === "ROCK") {
                labelResult.style.color = "green";
                return "YOU WIN !😃";
            }
            else {
                labelResult.style.color = "red";
                return "❌ YOU LOSE !😥";
            }
    }
}
function updateScore() {
    if (checkWinner() === "YOU WIN !😃") {
        playerScore += 1;
        playerScoreDiv.textContent = `${playerScore}`;
    }
    else if (checkWinner() === "❌ YOU LOSE !😥") {
        computerScore += 1;
        computerScoreDiv.textContent = `${computerScore}`;
    }
}
function displayImgs() {
    if (player === "PAPER") {
        playerImg.src = "./img/paper.jpg";
    }
    else if (player === "ROCK") {
        playerImg.src = "./img/rock.jpg";
    }
    else {
        playerImg.src = "./img/scissors.jpg";
    }
    if (computer === "PAPER") {
        computerImg.src = "./img/paper.jpg";
    }
    else if (computer === "ROCK") {
        computerImg.src = "./img/rock.jpg";
    }
    else {
        computerImg.src = "./img/scissors.jpg";
    }
}
