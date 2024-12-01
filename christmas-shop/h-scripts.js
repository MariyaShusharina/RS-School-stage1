
// Variables for Slider

const arrowL = document.getElementById("left-arrow");
const arrowR = document.getElementById("right-arrow");

const slider = document.querySelector(".slider-div");
const sliderSection = document.querySelector(".slider");

let slWidth = slider.offsetWidth;

let offset = 0;
let offsetFull = 0;

let curWidth = window.innerWidth;

// Variables for Burger-menu

const upLine = document.getElementById("up-line");
const botLine = document.getElementById("bot-line");

const mobMenu = document.querySelector(".mob-menu");

let isMenuOpen = false;

// Slider functionality

function rightPag() {

	let ww = sliderSection.offsetWidth;
	slWidth = slider.offsetWidth;

	if (ww > 768) {
		offset = Math.floor((slWidth - ww) / 3);
		offsetFull -= offset;
		slider.style.transform = "translate(" + offsetFull + "px, 0)";
	}

	if (ww < 769) {
		offset = Math.floor((slWidth - ww) / 6);
		offsetFull -= offset;
		slider.style.transform = "translate(" + offsetFull + "px, 0)";
	}

	if ((-offsetFull) >= (slWidth - ww - 5)) {
		arrowR.disabled = true;
	} else { arrowR.disabled = false; }

	if (-offsetFull < 3) {
		arrowL.disabled = true;
	} else { arrowL.disabled = false; }
}

function leftPag() {

	let ww = sliderSection.offsetWidth;
	slWidth = slider.offsetWidth;

	if (ww > 768) {
		offset = Math.floor((slWidth - ww) / 3);
		offsetFull += offset;
		slider.style.transform = "translate(" + offsetFull + "px, 0)";
	}

	if (ww < 769) {
		offset = Math.floor((slWidth - ww) / 6);
		offsetFull += offset;
		slider.style.transform = "translate(" + offsetFull + "px, 0)";
	}
	
	if ((-offsetFull) >= (slWidth - ww - 5)) {
		arrowR.disabled = true;
	} else { arrowR.disabled = false; }

	if (-offsetFull < 3) {
		arrowL.disabled = true;
	} else { arrowL.disabled = false; }
}

function sliderInit() {
	let w = window.innerWidth;
	if (w != curWidth) {
		curWidth = w;
		offset = 0;
		offsetFull = 0;
		slider.style.transform = "translate(" + offsetFull + "px, 0)";
		arrowL.disabled = true;
		arrowR.disabled = false;
	}
}

//window.addEventListener("resize", sliderInit());

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


// Function for all Event Listeners on window


function resizer() {
	sliderInit();
	hideMenuOnChange();
}

window.addEventListener("resize", resizer);
