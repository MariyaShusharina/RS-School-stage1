
// Variable for Up-button

const btnUp = document.querySelector(".arrow-up");

// Variables for Burger-menu

const upLine = document.getElementById("up-line");
const botLine = document.getElementById("bot-line");

const mobMenu = document.querySelector(".mob-menu");

let isMenuOpen = false;

// Variables for Gifts-container

const btnAll = document.getElementById("btn-all");
const btnWork = document.getElementById("btn-work");
const btnHealth = document.getElementById("btn-health");
const btnHarmony = document.getElementById("btn-harmony");

const parent = document.querySelector(".gifts-container");

const url = "./gifts.json";

// Up-button functionality

function btnUpDisplay() {
	if ((window.pageYOffset > 300) && (window.innerWidth < 770)) {
		btnUp.style.visibility = "visible";
	}

	if ((window.pageYOffset < 300) || (window.innerWidth > 769)) {
		btnUp.style.visibility = "hidden";
	}
}

window.onscroll = function() { btnUpDisplay(); }

function scrollUp() {
	window.scrollTo(0, 0);
}

// Burger-menu functionality

function burger() {
	if (!isMenuOpen) {

		isMenuOpen = true;

		upLine.style.transform = "translate(0, 4px) rotate(45deg)";
		botLine.style.transform = "translate(0, -4px) rotate(-45deg)";

		mobMenu.style.transform = "translate(0, 0)";

		document.body.style.position = "fixed";

	} else {

		isMenuOpen = false;

		upLine.style.transform = "translate(0, 0) rotate(0)";
		botLine.style.transform = "translate(0, 0) rotate(0)";

		mobMenu.style.transform = "translate(100%, 0)";

		document.body.style.position = "";
		
	}
}

function hideMenuOnChange() {

	let www = window.innerWidth;

	if (www > 768) {

		document.body.style.position = "";

		isMenuOpen = false;

		upLine.style.transform = "translate(0, 0) rotate(0)";
		botLine.style.transform = "translate(0, 0) rotate(0)";

		mobMenu.style.transform = "translate(100%, 0)";
	}
}

// Gifts-container functionality

let data = 0;

async function loadGifts() {

	const result = await fetch(url);
	data = await result.json();

	console.log(data);

	showGifts(data);
}

loadGifts();

//const gifts = JSON.parse(url);

// Function for all Event Listeners on window


function resizer() {
	hideMenuOnChange();
}

window.addEventListener("resize", resizer);

