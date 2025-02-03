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
  timer();
}

function newGame() {}

function easyMode() {
  mode = 0;

  const easy = document.querySelector(".easy-diff");
  easy.classList.add("active-diff");
  easy.setAttribute("disabled", true);

  const med = document.querySelector(".med-diff");
  if (med.classList.contains("active-diff")) {
    med.classList.remove("active-diff");
  }
  med.removeAttribute("disabled");

  const hard = document.querySelector(".hard-diff");
  if (hard.classList.contains("active-diff")) {
    hard.classList.remove("active-diff");
  }
  hard.removeAttribute("disabled");

  easyGames.classList.remove("hid");
  medGames.classList.add("hid");
  hardGames.classList.add("hid");
}

function medMode() {
  mode = 1;

  const med = document.querySelector(".med-diff");
  med.classList.add("active-diff");
  med.setAttribute("disabled", true);

  const easy = document.querySelector(".easy-diff");
  if (easy.classList.contains("active-diff")) {
    easy.classList.remove("active-diff");
  }
  easy.removeAttribute("disabled");

  const hard = document.querySelector(".hard-diff");
  if (hard.classList.contains("active-diff")) {
    hard.classList.remove("active-diff");
  }
  hard.removeAttribute("disabled");

  medGames.classList.remove("hid");
  easyGames.classList.add("hid");
  hardGames.classList.add("hid");
}

function hardMode() {
  mode = 2;

  const hard = document.querySelector(".hard-diff");
  hard.classList.add("active-diff");
  hard.setAttribute("disabled", true);

  const med = document.querySelector(".med-diff");
  if (med.classList.contains("active-diff")) {
    med.classList.remove("active-diff");
  }
  med.removeAttribute("disabled");

  const easy = document.querySelector(".easy-diff");
  if (easy.classList.contains("active-diff")) {
    easy.classList.remove("active-diff");
  }
  easy.removeAttribute("disabled");

  hardGames.classList.remove("hid");
  easyGames.classList.add("hid");
  medGames.classList.add("hid");
}

function showNonogram() {
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
    //let isOne = true;

    for(let m = 0; m < a; m++) {
      /* if (levels[j].win[k][m] === 0) {
        isOne = false;
      } */
      if (levels[j].win[k][m] === 1 && (arr.length === 0 || levels[j].win[k][m-1] === 0)) {
        arr.push(1);
      } else if (levels[j].win[k][m] === 1 && arr.length !== 0 && levels[j].win[k][m-1] === 1) {
        arr[m] += 1;
      }
    }

    for (let n = 0; n < arr.length; n++) {
      let numSpan = document.createElement("span");
      numSpan.textContent = arr[n];
      cell.appendChild(numSpan);
    }

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

    for(let m = 0; m < a; m++) {
      if (levels[j].win[m][k] === 1 && (arr.length === 0 || levels[j].win[m-1][k] === 0)) {
        arr.push(1);
      }
      if (levels[j].win[m][k] === 1 && arr.length !== 0 && levels[j].win[m-1][k] === 1) {
        arr[m] += 1;
      }
    }

    for (let n = 0; n < arr.length; n++) {
      let numSpan = document.createElement("span");
      numSpan.textContent = arr[n];
      cell.appendChild(numSpan);
    }

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
  nonogram.appendChild(grid);

  nonogramDiv.appendChild(nonogram);
}

function loadNonogram(event) {
  j = event.currentTarget.value;

  nonogramDiv.textContent = "";

  easyGames.classList.add("hid");
  medGames.classList.add("hid");
  hardGames.classList.add("hid");

  showNonogram();
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
  }

  const interval = setInterval(calculate, 1000);
}

function toggleCell(ev) {
  targ = ev.currentTarget;

  if (targ.classList.contains("checked")) {
    targ.classList.remove("checked");
  } else {
    targ.classList.add("checked");
  }
}


window.onload = loadBody();
