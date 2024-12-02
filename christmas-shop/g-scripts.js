
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


function showGifts(data) {

	parent.innerHTML = "";

	for (let i = 0; i < data.length; i++) {

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

	}
}


// Function for all Event Listeners on window


function resizer() {
	hideMenuOnChange();
}

window.addEventListener("resize", resizer);

