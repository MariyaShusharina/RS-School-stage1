
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
startButton.classList.add = "start-btn";

let newGameButton = document.createElement("button");
newGameButton.textContent = "New Game";
newGameButton.classList.add = "new-game-btn";
newGameButton.classList.add = "hid";

let repeatButton = document.createElement("button");
repeatButton.textContent = "Repeat the Sequence";
repeatButton.classList.add = "repeat-btn";
repeatButton.classList.add = "hid";

let nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.classList.add = "next-btn";
nextButton.classList.add = "hid";

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

let medBtn = document.createElement("button");
medBtn.textContent = "Medium";
medBtn.classList.add("med-diff");

let hardBtn = document.createElement("button");
hardBtn.textContent = "Hard";
hardBtn.classList.add("hard-diff");

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


function loadBody() {
  document.body.appendChild(h1);
  document.body.appendChild(section);
}

window.onload = loadBody();
