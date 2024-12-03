
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

// Variables for Best-Gifts Container

const parent = document.querySelector(".best-gifts");
const url = "./gifts.json";

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

// Best-Gifts Container functionality

let data = 0;

async function loadGifts() {

	const result = await fetch(url);
	data = await result.json();

	console.log(data);

	showGifts(data);
}

loadGifts();


function showGifts(data) {

	parent.innerHTML = "";

	let rand = [];

	console.log(rand);

	for (let j = 0; j < 4; j++) {
		rand[j] = Math.floor(Math.random() * 35);
		console.log(rand[j]);
	}

	for (let i = 0; i < data.length; i++) {

		if ((i == rand[0]) || (i == rand[1]) || (i == rand[2]) || (i == rand[3])) {

			let card = document.createElement("article");
			card.classList.add("gift-card");

			let div = document.createElement("div");
			div.classList.add("gift-pic");
			let type = data[i].category;
			if (type == "For Work") { div.classList.add("pic-work"); }
			if (type == "For Health") { div.classList.add("pic-health"); }
			if (type == "For Harmony") { div.classList.add("pic-harmony"); }
			div.innerHTML = "&nbsp;";

			card.appendChild(div);

			let text = document.createElement("div");
			text.classList.add("gift-text");

			let h4 = document.createElement("h4");
			if (type == "For Work") { h4.classList.add("work"); }
			if (type == "For Health") { h4.classList.add("health"); }
			if (type == "For Harmony") { h4.classList.add("harmony"); }
			h4.textContent = type;
			text.appendChild(h4);

			let h3 = document.createElement("h3");
			h3.classList.add("dark");
			let name = data[i].name;
			h3.textContent = name;
			text.appendChild(h3);

			card.appendChild(text);
			card.addEventListener("click", function () { showModal(name); } );

			parent.appendChild(card);
		}
	}
}

// Timer (all)

const day = document.getElementById("d");
const hour = document.getElementById("h");
const minute = document.getElementById("m");
const second = document.getElementById("s");

function timer() {

	let days = 0;
	let hours = 0;
	let mins = 0;
	let seconds = 0;

	let end = new Date(Date.UTC(2025, 1, 1, 0, 0, 0, 0));

	function calculate() {
		let start = Date.now();

		let timeRem = Math.floor((end - start) / 1000);

		days = timeRem / 86400;
		timeRem = timeRem % 86400;

		hours = timeRem / 3600;
		timeRem = timeRem % 3600;

		mins = timeRem / 60;
		seconds = timeRem % 60;

		day.textContent = days;
		hour.textContent = hours;
		minute.textContent = mins;
		second.textContent = seconds;
	}

	setInterval(calculate, 1000);
}

timer();


// Function for all Event Listeners on window


function resizer() {
	sliderInit();
	hideMenuOnChange();
}

window.addEventListener("resize", resizer);
