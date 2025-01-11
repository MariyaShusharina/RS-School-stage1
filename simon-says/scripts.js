
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


function loadBody() {
  document.body.appendChild(h1);
  document.body.appendChild(section);
}

window.onload = loadBody();
