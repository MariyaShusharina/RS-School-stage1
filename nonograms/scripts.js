/* Variables */

let mode = 0;
let round = 1;

/* Generation of Page Content */

// Heading

let h1 = document.createElement("h1");
h1.textContent = "Nonograms";

// Section

let section = document.createElement("section");

// Menu

let menu = document.createElement("div");
menu.classList.add("menu");

let startButton = document.createElement("button");
startButton.textContent = "Start";
startButton.classList.add("start-btn");
startButton.addEventListener("click", startGame);

let newGameButton = document.createElement("button");
newGameButton.textContent = "New Game";
newGameButton.classList.add("new-game-btn");
newGameButton.classList.add("hid");
newGameButton.addEventListener("click", newGame);

let repeatButton = document.createElement("button");
repeatButton.textContent = "Repeat the Sequence";
repeatButton.classList.add("repeat-btn");
repeatButton.classList.add("hid");
//repeatButton.addEventListener("click", repeatSequence);

let nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.classList.add("next-btn");
nextButton.classList.add("hid");
nextButton.addEventListener("click", nextRound);

menu.appendChild(startButton);
menu.appendChild(newGameButton);
menu.appendChild(repeatButton);
menu.appendChild(nextButton);

// Difficulty menu

let diff = document.createElement("div");
diff.classList.add("difficulty");

let easyBtn = document.createElement("button");
easyBtn.textContent = "Easy";
easyBtn.classList.add("easy-diff");
easyBtn.classList.add("active-diff");
easyBtn.addEventListener("click", easyMode);

let medBtn = document.createElement("button");
medBtn.textContent = "Medium";
medBtn.classList.add("med-diff");
medBtn.addEventListener("click", medMode);

let hardBtn = document.createElement("button");
hardBtn.textContent = "Hard";
hardBtn.classList.add("hard-diff");
hardBtn.addEventListener("click", hardMode);

diff.appendChild(easyBtn);
diff.appendChild(medBtn);
diff.appendChild(hardBtn);

// Rounds

let roundsDiv = document.createElement("div");
roundsDiv.classList.add("rounds");

let roundPar = document.createElement("p");
roundPar.textContent = "Round: ";

let roundNum = document.createElement("p");
roundNum.textContent = "-";
roundNum.classList.add("num");

roundsDiv.appendChild(roundPar);
roundsDiv.appendChild(roundNum);

// Alert Div

let alertDiv = document.createElement("div");
alertDiv.classList.add("alert");
alertDiv.textContent = "No alert";

// Display Field

let displayField = document.createElement("div");
displayField.classList.add("field");

// Fill the Section with content

section.appendChild(menu);
section.appendChild(diff);
section.appendChild(roundsDiv);
section.appendChild(alertDiv);
section.appendChild(displayField);


/* Functionality */

function loadBody() {
  document.body.appendChild(h1);
  document.body.appendChild(section);
}

function startGame() {}
function newGame() {}
function nextRound() {}

function easyMode() {}
function medMode() {}
function hardMode() {}

window.onload = loadBody();
