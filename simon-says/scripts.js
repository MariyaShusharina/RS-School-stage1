
// Heading

let h1 = document.createElement("h1");
h1.textContent = "Simon Says";

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
repeatButton.addEventListener("click", repeatSequence);

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

// Virtual Keyboard

let virtKeyboard = document.createElement("div");
virtKeyboard.classList.add("keyboard");

let numKeys = document.createElement("div");
numKeys.classList.add("numbers");

for (let i = 0; i < 10; i++) {
  let k = document.createElement("button");
  k.classList.add("key-btn");
  const id = 48 + i;
  k.setAttribute("id", id);
  k.textContent = i;
  k.addEventListener("click", function () { checkLetter(id); })
  numKeys.appendChild(k);
}

let strKeys = document.createElement("div");
strKeys.classList.add("letters");

for (let i = 0; i < 26; i++) {
  let k = document.createElement("button");
  k.classList.add("key-btn");
  const id = 65 + i;
  k.setAttribute("id", id);
  k.textContent = String.fromCharCode(id);
  k.addEventListener("click", function () { checkLetter(id); })
  strKeys.appendChild(k);
}

strKeys.classList.add("hid");

virtKeyboard.appendChild(numKeys);
virtKeyboard.appendChild(strKeys);

// Fill the Section with content

section.appendChild(menu);
section.appendChild(diff);
section.appendChild(roundsDiv);
section.appendChild(alertDiv);
section.appendChild(displayField);
section.appendChild(virtKeyboard);


function loadBody() {
  document.body.appendChild(h1);
  document.body.appendChild(section);
}

function startGame() {}

function newGamre() {}

function showSequence() {}

function repeatSequence() {
  showSequence();
  document.querySelector("repeat-btn").setAttribute("disabled", true);
}

function nextRound() {}

function easyMode() {}

function medMode() {}

function hardMode() {}

function checkLetter(id) {

}

window.onload = loadBody();
