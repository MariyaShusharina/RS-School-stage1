/* Variables */

let mode = 0;
let j = 0;


/* Levels */

let levels = [];

let easyStart = 0;
let easyEnd = 5;

let medStart = 5;
let medEnd = 10;

let hardStart = 10;
let hardEnd = 15;

// Easy levels

const figure1 = {
  id: 1,
  name: "Heart",
  difficulty: 0,
  win: [
    [0,1,0,1,0],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [0,1,1,1,0],
    [0,0,1,0,0]
  ],
};

const figure2 = {
  id: 2,
  name: "Snowflake",
  difficulty: 0,
  win: [
    [1,0,1,0,1],
    [0,1,1,1,0],
    [1,1,0,1,1],
    [0,1,1,1,0],
    [1,0,1,0,1]
  ]
};

const figure3 = {
  id: 3,
  name: "Dog",
  difficulty: 0,
  win: [
    [0,0,0,1,0],
    [1,0,1,1,1],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0]
  ]
};

const figure4 = {
  id: 4,
  name: "Hourglass",
  difficulty: 0,
  win: [
    [1,1,1,1,1],
    [0,1,1,1,0],
    [0,0,1,0,0],
    [0,1,0,1,0],
    [1,1,1,1,1]
  ]
};

const figure5 = {
  id: 5,
  name: "Airplane",
  difficulty: 0,
  win: [
    [0,0,1,0,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [0,0,1,0,0],
    [0,1,1,1,0]
  ]
};

// Medium levels

const figure6 = {
  id: 6,
  name: "House",
  difficulty: 1,
  win: [
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ]
};

const figure7 = {
  id: 7,
  name: "Postcard",
  difficulty: 1,
  win: [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
  ]
};

const figure8 = {
  id: 8,
  name: "Old TV",
  difficulty: 1,
  win: [
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,0,0,0,0,1,1],
    [1,1,1,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,1],
    [1,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [0,1,0,0,0,0,0,0,1,0]
  ]
};

const figure9 = {
  id: 9,
  name: "Hot-air ballon",
  difficulty: 1,
  win: [
    [0,0,0,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,0,1,0],
    [0,0,1,1,1,1,1,0,1,0],
    [0,0,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ]
};

const figure10 = {
  id: 10,
  name: "Music notes",
  difficulty: 1,
  win: [
    [0,0,0,0,0,0,1,1,1,1],
    [0,0,0,1,1,1,0,0,0,1],
    [0,0,0,1,0,0,0,1,1,1],
    [0,0,0,1,1,1,1,0,0,1],
    [0,0,0,1,0,0,0,0,0,1],
    [0,0,0,1,0,0,0,1,1,1],
    [0,1,1,1,0,0,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1],
    [1,1,1,1,0,0,0,1,1,0],
    [0,1,1,0,0,0,0,0,0,0]
  ]
};

// Hard levels

const figure11 = {
  id: 11,
  name: "Placeholder",
  difficulty: 2,
  win: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
};


const figure12 = {
  id: 12,
  name: "Placeholder",
  difficulty: 2,
  win: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
};


const figure13 = {
  id: 13,
  name: "Placeholder",
  difficulty: 2,
  win: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
};


const figure14 = {
  id: 14,
  name: "Placeholder",
  difficulty: 2,
  win: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
};

const figure15 = {
  id: 15,
  name: "Placeholder",
  difficulty: 2,
  win: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
};

levels.push(figure1);
levels.push(figure2);
levels.push(figure3);
levels.push(figure4);
levels.push(figure5);

levels.push(figure6);
levels.push(figure7);
levels.push(figure8);
levels.push(figure9);
levels.push(figure10);

levels.push(figure11);
levels.push(figure12);
levels.push(figure13);
levels.push(figure14);
levels.push(figure15);

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

menu.appendChild(startButton);
menu.appendChild(newGameButton);

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

// Display name

let h2 = document.createElement("h2");
h2.textContent = levels[0].name;






// Fill the Section with content

section.appendChild(menu);
section.appendChild(diff);


/* Functionality */

function loadBody() {
  document.body.appendChild(h1);
  document.body.appendChild(section);
}

function startGame() {}
function newGame() {}

function easyMode() {}
function medMode() {}
function hardMode() {}

window.onload = loadBody();
