// Variables to store score
let userScore = 0;
let compScore = 0;

// Accessing HTML
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoint = document.querySelector("#user");
const compPoint = document.querySelector("#computer");
const resetbtn = document.querySelector("#btn");

// Computer Choice Generate
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  // generate random numbers
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Draw Game Condition
const drawGame = () => {
  //console.log("Game Draw");
  msg.innerHTML = "GAME DRAW!";
  msg.style.backgroundColor = "#8C7051";
};

// Show Result Function

const showResult = (userWin, userChoice, compChocie) => {
  if (userWin) {
    // console.log("User Won");
    userScore++;
    userPoint.innerText = userScore;
    msg.innerText = `USER WON! Your ${userChoice} beats Computer's ${compChocie}`;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("Computer Won");
    compScore++;
    compPoint.innerText = compScore;
    msg.innerText = `COMPUTER WON! Computer's ${compChocie} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Game Function
const playgame = (userChoice) => {
  // console.log("USer Choice =", userChoice);
  //comp choice
  const compChoice = genCompChoice();
  // console.log("Computer Choice =", compChoice);

  //   Conditions
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // compChoice = scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // compChocie = rock, scissors
      userWin = compChoice === "rock" ? true : false;
    } else {
      // compChoice = paper, rock
      userWin = compChoice === "paper" ? true : false;
    }
    showResult(userWin, userChoice, compChoice);
  }
};

// For Choices selection
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playgame(userChoice);
  });
});

// Rest Game function

const resetGame = () => {
  userScore = 0;
  userPoint.innerText = userScore;
  compScore = 0;
  compPoint.innerText = compScore;
  msg.innerHTML = "Choose Your Move";
  msg.style.backgroundColor = "#1b2f33";
};

resetbtn.addEventListener("click", resetGame);
