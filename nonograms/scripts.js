/* Variables */

let root = document.querySelector(":root");

let mode = 0;
let j = 0;

let interval;

let isLight = true;

let gridDiv;
let gridAround;

let leftNums;
let topNums;

let btns;
let lvlBtns;
let cells;


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
  name: "Sun",
  difficulty: 2,
  win: [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
    [1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,1,0,0,1,0,1,0,0,1,1,1,1],
    [1,0,0,1,0,0,0,0,0,0,0,1,0,0,1],
    [1,1,1,1,0,0,1,0,1,0,0,1,1,1,1],
    [1,1,1,1,0,0,0,1,0,0,0,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],
    [1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],
    [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
    [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]
};


const figure12 = {
  id: 12,
  name: "Spades",
  difficulty: 2,
  win: [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
    [0,1,1,1,1,0,0,1,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]
  ]
};


const figure13 = {
  id: 13,
  name: "Clover",
  difficulty: 2,
  win: [
    [0,0,0,0,0,1,1,0,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,1,1,1,0,1,1,1,1,1,0,1,1,1,0],
    [1,1,1,1,1,0,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,0,0,1,1,1,1,1],
    [0,1,1,1,0,0,0,1,0,0,0,1,1,1,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0]
  ]
};


const figure14 = {
  id: 14,
  name: "Flowers",
  difficulty: 2,
  win: [
    [1,1,0,1,0,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,1,0,0,1,1,1,1,1,0,1,0,1],
    [1,1,1,0,1,1,1,1,1,1,0,0,1,0,0],
    [1,0,0,1,0,0,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,0,1,0,1,1,1,0,0,1,0,0],
    [1,1,1,1,1,1,0,1,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,1,0,1,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,1,0,1,1,1,1],
    [1,1,1,0,0,0,0,0,0,0,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,0,0,1,0,1,1,1],
    [1,1,1,1,0,0,0,0,0,1,0,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,1,1,1,1,1]
  ]
};

const figure15 = {
  id: 15,
  name: "Skittles",
  difficulty: 2,
  win: [
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,0,1,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
    [0,1,1,1,0,0,0,0,0,1,1,1,1,1,0],
    [1,1,1,0,1,0,0,0,1,1,1,1,1,1,1],
    [1,1,1,0,1,0,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,1,1,1,1,1,1],
    [0,1,1,1,0,0,0,0,0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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

let randButton = document.createElement("button");
randButton.textContent = "Random Level";
randButton.classList.add("random-btn");
randButton.addEventListener("click", randomGame);

let restartButton = document.createElement("button");
restartButton.textContent = "Restart";
restartButton.classList.add("restart-btn");
restartButton.classList.add("hid");
restartButton.addEventListener("click", restartGame);

let solveButton = document.createElement("button");
solveButton.textContent = "Solution";
solveButton.classList.add("solve-btn");
solveButton.classList.add("hid");
solveButton.addEventListener("click", solveGame);

menu.appendChild(randButton);
menu.appendChild(restartButton);
menu.appendChild(solveButton);

// Settings

let settings = document.createElement("div");
settings.classList.add("settings");
//theme;
let themeButton = document.createElement("button");
themeButton.textContent = "\uD83C\uDF1E";
themeButton.classList.add("theme-btn");
themeButton.addEventListener("click", toggleTheme);
//sound;
//save;
//loadsaved;

settings.appendChild(themeButton);


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

// Timer

let timerDiv = document.createElement("div");
timerDiv.classList.add("timer-div");

let min = document.createElement("span");
min.classList.add("min-span");
min.textContent = "0";

let dots = document.createElement("span");
dots.textContent = " : ";

let sec = document.createElement("span");
sec.classList.add("sec-span");
sec.textContent = "0";

timerDiv.appendChild(min);
timerDiv.appendChild(dots);
timerDiv.appendChild(sec);

// Games

let easyGames = document.createElement("div");
easyGames.classList.add("hid");
easyGames.classList.add("easy-games");

for (let i = easyStart; i < easyEnd; i++) {
  let levelBtn = document.createElement("button");
  levelBtn.classList.add("level-btn");
  levelBtn.textContent = levels[i].name;
  levelBtn.value = i;
  levelBtn.addEventListener("click", loadNonogram);
  easyGames.appendChild(levelBtn);
}

let medGames = document.createElement("div");
medGames.classList.add("hid");
medGames.classList.add("med-games");

for (let i = medStart; i < medEnd; i++) {
  let levelBtn = document.createElement("button");
  levelBtn.classList.add("level-btn");
  levelBtn.textContent = levels[i].name;
  levelBtn.value = i;
  levelBtn.addEventListener("click", loadNonogram);
  medGames.appendChild(levelBtn);
}

let hardGames = document.createElement("div");
hardGames.classList.add("hid");
hardGames.classList.add("hard-games");

for (let i = hardStart; i < hardEnd; i++) {
  let levelBtn = document.createElement("button");
  levelBtn.classList.add("level-btn");
  levelBtn.textContent = levels[i].name;
  levelBtn.value = i;
  levelBtn.addEventListener("click", loadNonogram);
  hardGames.appendChild(levelBtn);
}

// Nonogram Div

let nonogramDiv = document.createElement("div");
nonogramDiv.classList.add("nonogram-div");

// Fill the Section with content

section.appendChild(menu);
section.appendChild(settings);
section.appendChild(diff);
section.appendChild(easyGames);
section.appendChild(medGames);
section.appendChild(hardGames);
section.appendChild(h2);
section.appendChild(timerDiv);
section.appendChild(nonogramDiv);


/* Functionality */

function loadBody() {
  document.body.appendChild(h1);
  document.body.appendChild(section);
  showNonogram();
}

function startGame() {
  clearInterval(interval);

  let grid = document.querySelector(".grid-easy") || document.querySelector(".grid-med") || document.querySelector(".grid-hard");
  grid.removeEventListener("click", startGame);

  timer();

  restartButton.classList.remove("hid");
}

function restartGame() {
  clearInterval(interval);

  sec.textContent = 0;
  min.textContent = 0;

  nonogramDiv.textContent = "";

  easyGames.classList.add("hid");
  medGames.classList.add("hid");
  hardGames.classList.add("hid");

  if (mode === 0) {
    easyBtn.classList.add("active-diff");
    medBtn.classList.remove("active-diff");
    hardBtn.classList.remove("active-diff");
  } else if (mode === 1) {
    medBtn.classList.add("active-diff");
    easyBtn.classList.remove("active-diff");
    hardBtn.classList.remove("active-diff");
  } else if (mode === 2) {
    hardBtn.classList.add("active-diff");
    medBtn.classList.remove("active-diff");
    easyBtn.classList.remove("active-diff");
  }

  showNonogram();
  
  selectGrid();
}

function easyMode() {
  const easy = document.querySelector(".easy-diff");
  easy.classList.add("active-diff");

  const med = document.querySelector(".med-diff");
  if (med.classList.contains("active-diff")) {
    med.classList.remove("active-diff");
  }

  const hard = document.querySelector(".hard-diff");
  if (hard.classList.contains("active-diff")) {
    hard.classList.remove("active-diff");
  }

  easyGames.classList.remove("hid");
  medGames.classList.add("hid");
  hardGames.classList.add("hid");
}

function medMode() {
  const med = document.querySelector(".med-diff");
  med.classList.add("active-diff");

  const easy = document.querySelector(".easy-diff");
  if (easy.classList.contains("active-diff")) {
    easy.classList.remove("active-diff");
  }

  const hard = document.querySelector(".hard-diff");
  if (hard.classList.contains("active-diff")) {
    hard.classList.remove("active-diff");
  }

  medGames.classList.remove("hid");
  easyGames.classList.add("hid");
  hardGames.classList.add("hid");
}

function hardMode() {
  const hard = document.querySelector(".hard-diff");
  hard.classList.add("active-diff");

  const med = document.querySelector(".med-diff");
  if (med.classList.contains("active-diff")) {
    med.classList.remove("active-diff");
  }

  const easy = document.querySelector(".easy-diff");
  if (easy.classList.contains("active-diff")) {
    easy.classList.remove("active-diff");
  }

  hardGames.classList.remove("hid");
  easyGames.classList.add("hid");
  medGames.classList.add("hid");
}

function showNonogram() {
  mode = levels[j].difficulty;

  const a = 5 + 5 * mode;

  let nonogram = document.createElement("div");
  nonogram.classList.add("grid-around");

  let blank = document.createElement("div");
  blank.textContent = "\u00a0";
  nonogram.appendChild(blank);

  // Top row numbers

  let topNums = document.createElement("div");
  for (let k = 0; k < a; k++) {
    let cell = document.createElement("div");
    cell.classList.add("top-num");

    let arr = [];
    let isOne = false;

    for(let m = 0; m < a; m++) {
      if (levels[j].win[m][k] === 0) {
        isOne = false;
      }
      if (levels[j].win[m][k] === 1 && (arr.length === 0 || !isOne)) {
        arr.push(1);
        isOne = true;
      } else if (levels[j].win[m][k] === 1 && arr.length !== 0 && isOne) {
        arr[arr.length-1] += 1;
        isOne = true;
      }
    }

    for (let n = 0; n < arr.length; n++) {
      let numSpan = document.createElement("span");
      numSpan.textContent = arr[n];
      cell.appendChild(numSpan);
    }

    let nullSpan = document.createElement("span");
    cell.appendChild(nullSpan);

    topNums.appendChild(cell);
  }
  nonogram.appendChild(topNums);

  // Left column numbers

  let leftNums = document.createElement("div");
  leftNums.classList.add("left-col");
  for (let k = 0; k < a; k++) {
    let cell = document.createElement("div");
    cell.classList.add("left-num");

    let arr = [];
    let isOne = false;

    for(let m = 0; m < a; m++) {
      if (levels[j].win[k][m] === 0) {
        isOne = false;
      }
      if (levels[j].win[k][m] === 1 && (arr.length === 0 || !isOne)) {
        arr.push(1);
        isOne = true;
      } else if (levels[j].win[k][m] === 1 && arr.length !== 0 && isOne) {
        arr[arr.length-1] += 1;
        isOne = true;
      }
    }

    for (let n = 0; n < arr.length; n++) {
      let numSpan = document.createElement("span");
      numSpan.textContent = arr[n];
      cell.appendChild(numSpan);
    }

    let nullSpan = document.createElement("span");
    cell.appendChild(nullSpan);

    leftNums.appendChild(cell);
  }
  nonogram.appendChild(leftNums);

  // Grid (nonogram)

  let grid = document.createElement("div");
  if (mode === 0){ 
    grid.classList.add("grid-easy");
  }
  if (mode === 1){ 
    grid.classList.add("grid-med");
  }
  if (mode === 2){ 
    grid.classList.add("grid-hard");
  }
  for (let k = 0; k < a; k++) {
    for (let m = 0; m < a; m++) {
      let cell = document.createElement("button");
      cell.classList.add("cell");
      cell.value = [m, k];
      cell.addEventListener("click", toggleCell);
      grid.appendChild(cell);
    }
  }
  grid.addEventListener("click", startGame);

  nonogram.appendChild(grid);

  nonogramDiv.appendChild(nonogram);
}

function loadNonogram(event) {
  clearInterval(interval);

  sec.textContent = 0;
  min.textContent = 0;

  j = event.currentTarget.value;

  nonogramDiv.textContent = "";

  easyGames.classList.add("hid");
  medGames.classList.add("hid");
  hardGames.classList.add("hid");

  h2.textContent = levels[j].name;

  showNonogram();
  
  selectGrid();
}

function timer() {
  let startTime = Date.now();
  let mins = 0;
  let seconds = 0;

  function calculate() {
    let currentTime = Date.now();
    let time = Math.floor((currentTime - startTime) / 1000);

    seconds = Math.floor(time % 60);
    mins = Math.floor(time / 60);

    if (seconds < 10) { seconds = `0${seconds}`; }

    sec.textContent = seconds;
    min.textContent = mins;
  }

  interval = setInterval(calculate, 1000);
}

function toggleCell(ev) {
  targ = ev.currentTarget;

  if (targ.classList.contains("checked")) {
    targ.classList.remove("checked");
  } else {
    targ.classList.add("checked");
  }
}

function endGame() {
  // code here
}

function randomGame() {
  clearInterval(interval);

  sec.textContent = 0;
  min.textContent = 0;

  j = Math.floor(Math.random() * 15);

  mode = levels[j].difficulty;

  nonogramDiv.textContent = "";

  easyGames.classList.add("hid");
  medGames.classList.add("hid");
  hardGames.classList.add("hid");

  h2.textContent = levels[j].name;

  showNonogram();
  
  selectGrid();
}

function toggleTheme() {
  
  selectGrid();

  if (isLight) {
    document.body.style.backgroundColor = "rgba(0, 85, 61, 1)";
    document.body.style.color = "rgba(250, 250, 250, 1)";

    for(let child of gridAround.children) {
      child.style.borderColor = "rgba(250, 250, 250, 1)";
    }

    leftNums.forEach((num) => {
      num.style.borderColor = "rgba(250, 250, 250, 1)";
    });
    topNums.forEach((num) => {
      num.style.borderColor = "rgba(250, 250, 250, 1)";
    });

    btns.forEach((btn) => {
      btn.style.backgroundColor = "rgba(255, 250, 230, 0.3)";
      btn.style.borderColor = "transparent";
    });
    lvlBtns.forEach((btn) => {
      btn.style.backgroundColor = "rgba(169, 217, 255, 0.3)";
      btn.style.borderColor = "transparent";
    });

    cells.forEach((cell) => {
      cell.style.backgroundColor = "rgba(250, 250, 250, 0.35)";
      cell.style.borderColor = "rgba(250, 250, 250, 1)";
      cell.style.outline = "1px solid rgba(250, 250, 250, 1)";
    });

    root.style.setProperty("--active-color", "rgba(255, 255, 255, 0.7)");
    root.style.setProperty("--active-bg", "rgba(64, 167, 113, 0.25)");

    themeButton.textContent = "\uD83C\uDF1B";

    isLight = false;
  } else {
    document.body.style.backgroundColor = "rgba(250, 250, 250, 1)";
    themeButton.textContent = "\uD83C\uDF1E";
    isLight = true;
  }
}

function selectGrid() {
  gridAround = document.querySelector(".grid-around");

  leftNums = Array.from(document.getElementsByClassName("left-num"));
  topNums = Array.from(document.getElementsByClassName("top-num"));

  btns = Array.from(document.querySelectorAll("button:not(.cell)"));
  lvlBtns = Array.from(document.getElementsByClassName("level-btn"));
  cells = Array.from(document.getElementsByClassName("cell"));
}


window.onload = loadBody();
