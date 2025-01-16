
/* Variables */

let mode = 0;
let round = 1;

let word = [];
let wordLength = 2;

let userIndex = 0;

/* Generation of Page Content */

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

// Overlay

let overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.classList.add("hid");
overlay.textContent = "\u00a0";

// Fill the Section with content

section.appendChild(menu);
section.appendChild(diff);
section.appendChild(roundsDiv);
section.appendChild(alertDiv);
section.appendChild(displayField);
section.appendChild(virtKeyboard);
section.appendChild(overlay);


/* Functionality */


function loadBody() {
  document.body.appendChild(h1);
  document.body.appendChild(section);
}

function startGame() {

  // round = 1;
  updateRound();

  userIndex = 0;

  generateWord();

  // keyboardVisibility();

  let wordStr = '';
  for (let i = 0; i < word.length; i++) {
    wordStr = wordStr.concat(String.fromCharCode(word[i]));
  }
  console.log("Word: " + wordStr);
  console.log("Chars of word: " + word);

  document.querySelector(".start-btn").setAttribute("disabled", true);
  document.querySelector(".start-btn").classList.add("hid");
  document.querySelector(".new-game-btn").classList.remove("hid");
  document.querySelector(".repeat-btn").classList.remove("hid");
  document.querySelector(".repeat-btn").classList.remove("active-diff");
  document.querySelector(".repeat-btn").removeAttribute("disabled");

  document.querySelector(".easy-diff").setAttribute("disabled", true);
  document.querySelector(".med-diff").setAttribute("disabled", true);
  document.querySelector(".hard-diff").setAttribute("disabled", true);

  if (document.querySelector(".alert").classList.contains("fail")) {
    document.querySelector(".alert").classList.remove("fail");
  }
  if (document.querySelector(".alert").classList.contains("done")) {
    document.querySelector(".alert").classList.remove("done");
  }
  
  showSequence();
}

function newGame() {
  round = 1;
  userIndex = 0;

  const roundPlace = document.querySelector(".num");
  roundPlace.textContent = '-';

  document.querySelector(".start-btn").removeAttribute("disabled");
  document.querySelector(".start-btn").classList.remove("hid");

  document.querySelector(".new-game-btn").classList.add("hid");

  document.querySelector(".repeat-btn").removeAttribute("disabled");
  document.querySelector(".repeat-btn").classList.remove("active-diff");
  document.querySelector(".repeat-btn").classList.add("hid");

  document.querySelector(".next-btn").classList.add("hid");

  document.querySelector(".easy-diff").removeAttribute("disabled");
  document.querySelector(".med-diff").removeAttribute("disabled");
  document.querySelector(".hard-diff").removeAttribute("disabled");

  document.querySelector(".field").textContent = '';

  if (document.querySelector(".alert").classList.contains("fail")) {
    document.querySelector(".alert").classList.remove("fail");
  }
  if (document.querySelector(".alert").classList.contains("done")) {
    document.querySelector(".alert").classList.remove("done");
  }
}

function showSequence() {

  physicalKeyboardOff();

  let arrKeys = [];

  for (let i = 0; i < wordLength; i++) {
    arrKeys[i] = document.getElementById(word[i]);
    // arrKeys[i].focus();
  }

  document.querySelector(".overlay").classList.remove("hid");

  function showing() {
    let interval = 800;

    arrKeys.forEach(function (keyBtn, index) {
      setTimeout(function () {
        keyBtn.classList.add("key-btn-show");
      }, index * interval);
    });
    arrKeys.forEach(function (keyBtn, index) {
      setTimeout(function () {
        keyBtn.classList.remove("key-btn-show");
      }, index * interval + 500);
    });
  }
  // const interval = setInterval(showing, 400);

  showing();
  /*
  function clearIntvl() {
    clearInterval(interval);
    interval = null;
  }
  const timeout = setTimeout(clearIntvl, 400 * arrKeys.length);
  */

  function overlay() {
    let intervalOverlay = 800 * wordLength + 500;
    const ovLay = document.querySelector(".overlay");

    setTimeout(function () {
      ovLay.classList.add("hid");
      physicalKeyboardOn();
    }, intervalOverlay);
  }

  overlay();
}

function repeatSequence() {
  showSequence();
  document.querySelector(".repeat-btn").setAttribute("disabled", true);
  document.querySelector(".repeat-btn").classList.add("active-diff");
  if (document.querySelector(".alert").classList.contains("fail")) {
    document.querySelector(".alert").classList.remove("fail");
  }
  if (document.querySelector(".alert").classList.contains("done")) {
    document.querySelector(".alert").classList.remove("done");
  }
}

function nextRound() {
  round += 1;

  document.querySelector(".repeat-btn").classList.remove("hid");
  document.querySelector(".repeat-btn").classList.remove("active-diff");
  document.querySelector(".repeat-btn").removeAttribute("disabled");

  document.querySelector(".next-btn").classList.add("hid");

  document.querySelector(".field").textContent = '';

  startGame();
}

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

  keyboardVisibility();
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

  keyboardVisibility();
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

  keyboardVisibility();
}

function checkLetter(id) {
  if (id === word[userIndex]) {
    const span = document.createElement("span");
    span.textContent = String.fromCharCode(id);
    document.querySelector(".field").appendChild(span);
  } else {
    const alert = document.querySelector(".alert");
    if (document.querySelector(".repeat-btn").hasAttribute("disabled")) {
      document.querySelector(".field").textContent = '';
      alert.classList.add("fail");
      alert.textContent = "Mistake. Game Over.";
      gameOver();
    } else {
      document.querySelector(".field").textContent = '';
      alert.classList.add("fail");
      alert.textContent = "Mistake. Try again.";
      userIndex = 0;
    }
  }

  userIndex += 1;

  if (userIndex >= wordLength) {
    correctAnswer();
  }
}

function generateWord() {
  wordLength = round * 2;
  word = [];

  if (mode === 0) {
    for (let i = 0; i < wordLength; i++) {
      let symb = Math.floor(Math.random() * 9.99);
      symb = symb + 48;
      word.push(symb);
    }
  }

  if (mode === 1) {
    for (let i = 0; i < wordLength; i++) {
      let symb = Math.floor(Math.random() * 25.99);
      symb = symb + 65;
      word.push(symb);
    }
  }

  if (mode === 2) {
    for (let i = 0; i < wordLength; i++) {
      let symb = Math.floor(Math.random() * 35.99);

      if (symb < 10) {
        symb = symb + 48;
      } else {
        symb = symb + 55;
      }

      word.push(symb);
    }
  }
}

function keyboardVisibility() {
  const numBoard = document.querySelector(".numbers");
  const letBoard = document.querySelector(".letters");

  switch (mode) {
    case 0:
      if (numBoard.classList.contains("hid")) {
        numBoard.classList.remove("hid");
      }
      if (!letBoard.classList.contains("hid")) {
        letBoard.classList.add("hid");
      }
      break;
    case 1:
      if (!numBoard.classList.contains("hid")) {
        numBoard.classList.add("hid");
      }
      if (letBoard.classList.contains("hid")) {
        letBoard.classList.remove("hid");
      }
      break;
    case 2:
      if (numBoard.classList.contains("hid")) {
        numBoard.classList.remove("hid");
      }
      if (letBoard.classList.contains("hid")) {
        letBoard.classList.remove("hid");
      }
      break;
    default:
      if (numBoard.classList.contains("hid")) {
        numBoard.classList.remove("hid");
      }
      if (!letBoard.classList.contains("hid")) {
        letBoard.classList.add("hid");
      }
      break;
  }
}

function updateRound() {
  const roundPlace = document.querySelector(".num");
  roundPlace.textContent = round;
}

function correctAnswer() {
  const alert = document.querySelector(".alert");

  alert.classList.add("done");
  alert.textContent = "Good job!";

  document.querySelector(".repeat-btn").classList.add("hid");
  document.querySelector(".next-btn").classList.remove("hid");

  if (round >= 5) {
    winGame();
  }
}

function winGame() {
  const alert = document.querySelector(".alert");

  alert.classList.add("done");
  alert.textContent = "Congratulations! You won!";

  document.querySelector(".next-btn").classList.add("hid");
}

function gameOver() {
  document.querySelector(".repeat-btn").classList.add("hid");
  document.querySelector(".new-game-btn").classList.remove("hid");
  physicalKeyboardOff();
}

function physicalKeyboardOn() {
  window.addEventListener("keydown", addCheckKey);
}

function physicalKeyboardOff() {
  window.removeEventListener("keydown", addCheckKey);
}

const addCheckKey = function (k) {
  checkKey(k);
}

function checkKey(k) {
  console.log(k.key);
  let keybtn = k.key.toUpperCase();

  if (47 < keybtn.charCodeAt(0) && keybtn.charCodeAt(0) < 58 || 64 < keybtn.charCodeAt(0) && keybtn.charCodeAt(0) < 91) {
    if (keybtn.charCodeAt(0) === word[userIndex]) {
      const span = document.createElement("span");
      span.textContent = keybtn;
      document.querySelector(".field").appendChild(span);
    } else {
      const alert = document.querySelector(".alert");
      if (document.querySelector(".repeat-btn").hasAttribute("disabled")) {
        document.querySelector(".field").textContent = '';
        alert.classList.add("fail");
        alert.textContent = "Mistake. Game Over.";
        gameOver();
      } else {
        document.querySelector(".field").textContent = '';
        alert.classList.add("fail");
        alert.textContent = "Mistake. Try again.";
        userIndex = 0;
      }
    }

    userIndex += 1;

    if (userIndex >= wordLength) {
      correctAnswer();
    }
  }

  const keyBtn = document.getElementById(keybtn.charCodeAt(0));
  keyBtn.classList.add("key-btn-show");

  setTimeout(function () {
    keyBtn.classList.remove("key-btn-show");
  }, 300);

  physicalKeyboardOff();

  setTimeout(function () {
    physicalKeyboardOn();
  }, 350);
}

window.onload = loadBody();
