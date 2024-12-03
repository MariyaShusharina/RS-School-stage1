
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

	btnAll.classList.add("nav-gift-item-active");
	btnAll.classList.remove("nav-gift-item");

	btnWork.classList.add("nav-gift-item");
	btnWork.classList.remove("nav-gift-item-active");

	btnHealth.classList.add("nav-gift-item");
	btnHealth.classList.remove("nav-gift-item-active");

	btnHarmony.classList.add("nav-gift-item");
	btnHarmony.classList.remove("nav-gift-item-active");

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
		card.addEventListener("click", function () { showModal(name); } );

		parent.appendChild(card);

	}
}

function showWork(data) {

	parent.innerHTML = "";

	btnAll.classList.add("nav-gift-item");
	btnAll.classList.remove("nav-gift-item-active");

	btnWork.classList.add("nav-gift-item-active");
	btnWork.classList.remove("nav-gift-item");

	btnHealth.classList.add("nav-gift-item");
	btnHealth.classList.remove("nav-gift-item-active");

	btnHarmony.classList.add("nav-gift-item");
	btnHarmony.classList.remove("nav-gift-item-active");

	for (let i = 0; i < data.length; i++) {

		let curType = data[i].category;

		if (curType == "For Work") {

			let card = document.createElement("article");
			card.classList.add("gift-card");

			let div = document.createElement("div");
			div.classList.add("gift-pic");
			let type = data[i].category;
			div.classList.add("pic-work");
			//if (type == "For Health") { div.classList.add("pic-health"); }
			//if (type == "For Harmony") { div.classList.add("pic-harmony"); }
			div.innerHTML = "&nbsp;";

			card.appendChild(div);

			let text = document.createElement("div");
			text.classList.add("gift-text");

			let h4 = document.createElement("h4");
			h4.classList.add("work");
			//if (type == "For Health") { h4.classList.add("health"); }
			//if (type == "For Harmony") { h4.classList.add("harmony"); }
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

function showHealth(data) {

	parent.innerHTML = "";

	btnAll.classList.add("nav-gift-item");
	btnAll.classList.remove("nav-gift-item-active");

	btnWork.classList.add("nav-gift-item");
	btnWork.classList.remove("nav-gift-item-active");

	btnHealth.classList.add("nav-gift-item-active");
	btnHealth.classList.remove("nav-gift-item");

	btnHarmony.classList.add("nav-gift-item");
	btnHarmony.classList.remove("nav-gift-item-active");

	for (let i = 0; i < data.length; i++) {

		let curType = data[i].category;

		if (curType == "For Health") {

			let card = document.createElement("article");
			card.classList.add("gift-card");

			let div = document.createElement("div");
			div.classList.add("gift-pic");
			let type = data[i].category;
			//if (type == "For Work") { div.classList.add("pic-work"); }
			div.classList.add("pic-health");
			//if (type == "For Harmony") { div.classList.add("pic-harmony"); }
			div.innerHTML = "&nbsp;";

			card.appendChild(div);

			let text = document.createElement("div");
			text.classList.add("gift-text");

			let h4 = document.createElement("h4");
			//if (type == "For Work") { h4.classList.add("work"); }
			h4.classList.add("health");
			//if (type == "For Harmony") { h4.classList.add("harmony"); }
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

function showHarmony(data) {

	parent.innerHTML = "";

	btnAll.classList.add("nav-gift-item");
	btnAll.classList.remove("nav-gift-item-active");

	btnWork.classList.add("nav-gift-item");
	btnWork.classList.remove("nav-gift-item-active");

	btnHealth.classList.add("nav-gift-item");
	btnHealth.classList.remove("nav-gift-item-active");

	btnHarmony.classList.add("nav-gift-item-active");
	btnHarmony.classList.remove("nav-gift-item");

	for (let i = 0; i < data.length; i++) {

		let curType = data[i].category;

		if (curType == "For Harmony") {

			let card = document.createElement("article");
			card.classList.add("gift-card");

			let div = document.createElement("div");
			div.classList.add("gift-pic");
			let type = data[i].category;
			//if (type == "For Work") { div.classList.add("pic-work"); }
			//if (type == "For Health") { div.classList.add("pic-health"); }
			div.classList.add("pic-harmony");
			div.innerHTML = "&nbsp;";

			card.appendChild(div);

			let text = document.createElement("div");
			text.classList.add("gift-text");

			let h4 = document.createElement("h4");
			//if (type == "For Work") { h4.classList.add("work"); }
			//if (type == "For Health") { h4.classList.add("health"); }
			h4.classList.add("harmony");
			h4.textContent = type;
			text.appendChild(h4);

			let h3 = document.createElement("h3");
			h3.classList.add("dark");
			let name = data[i].name;
			h3.textContent = name;
			text.appendChild(h3);

			card.appendChild(text);

			parent.appendChild(card);

			card.addEventListener("click", function () { showModal(`${name}`); } );
		}

	}
}

function showModal(name) {

	const modal = document.querySelector(".modal");
	const wrap = document.querySelector(".wrap");

	modal.style.visibility = "visible";
	document.body.style.overflowY = "hidden";

	wrap.innerHTML = "";

	for (let i = 0; i < data.length; i++) {

		let curName = data[i].name;

		if (name == curName) {

			let card = document.createElement("article");
			card.classList.add("modal-card");

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
			let cardname = data[i].name;
			h3.textContent = cardname;
			text.appendChild(h3);

			let p = document.createElement("p");
			p.classList.add("dark");
			let pText = data[i].description;
			p.textContent = pText;
			text.appendChild(p);

			let h4super = document.createElement("h4");
			h4super.classList.add("dark");
			h4super.textContent = "Adds superpowers to:";
			text.appendChild(h4super);

			let divStats = document.createElement("div");
			divStats.classList.add("div-stats");
			for (let k = 0; k < 4; k++) {
				let stat = document.createElement("div");
				stat.classList.add("stat");

				let pStatName = document.createElement("p");
				pStatName.classList.add("dark");
				let st = '';
				if (k == 0) {
					st = "Live";
				} else if (k == 1) {
					st = "Create";
				} else if (k == 2) {
					st = "Love";
				} else if (k == 3) {
					st = "Dream";
				}
				pStatName.textContent = st;
				stat.appendChild(pStatName);

				let statDiv =document.createElement("div");
				statDiv.classList.add("stat-div");

				let pStatNum = document.createElement("p");
				pStatNum.classList.add("dark");
				let val = '';

				if (k = 0) {
					val = data[i].superpowers.live;
				} else if (k = 1) {
					val = data[i].superpowers.create;
				} else if (k = 2) {
					val = data[i].superpowers.love;
				} else if (k = 3) {
					val = data[i].superpowers.dream;
				}

				pStatNum.textContent = val;
				console.log(val);
				statDiv.appendChild(pStatNum);

				let divSnow = document.createElement("div");
				divSnow.classList.add("div-snow");

				let str = val;
				str = str.toString();
				let num = str.charAt(1);
				console.log(num);
				let remain = 5 - num;

				for (let m = 0; m < num; m++) {
					let sn = document.createElement("img");
					sn.classList.add("icon-snow");
					sn.classList.add("icon-snow-red");
					divSnow.appendChild(sn);
				}

				for (let l = 0; l < remain; l++) {
					let sn = document.createElement("img");
					sn.classList.add("icon-snow");
					divSnow.appendChild(sn);
				}

				statDiv.appendChild(divSnow);

				stat.appendChild(statDiv);

				divStats.appendChild(stat);
			}
			text.appendChild(divStats);

			card.appendChild(text);


			let cross = document.createElement("div");
			cross.classList.add("icon-div");
			cross.setAttribute("id", "close");

			let svg = document.createElement("img");
			svg.setAttribute("src", "./assets/svg/close.svg");
			svg.setAttribute("alt", "X");
			svg.classList.add("close-icon");
			cross.appendChild(svg);

			card.appendChild(cross);
			cross.addEventListener("click", close);

			wrap.appendChild(card);

			wrap.addEventListener("click", close);
		}
	}
}

function close() {

	const modal = document.querySelector(".modal");
	const wrap = document.querySelector(".wrap");

	wrap.innerHTML = "";

	modal.style.visibility = "hidden";
	document.body.style.overflowY = "auto";
}


// Function for all Event Listeners on window


function resizer() {
	hideMenuOnChange();
}

window.addEventListener("resize", resizer);

