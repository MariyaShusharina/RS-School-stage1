
const arrowL = document.getElementById("left-arrow");
const arrowR = document.getElementById("right-arrow");

const slider = document.querySelector(".slider-div");
const sliderSection = document.querySelector(".slider");

let slWidth = slider.offsetWidth;

let offset = 0;
let offsetFull = 0;

let curWidth = window.innerWidth;

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

	//console.log(-offsetFull);
	//console.log((slWidth - ww - 5));

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
	//console.log(w);
	if (w != curWidth) {
		curWidth = w;
		offset = 0;
		offsetFull = 0;
		slider.style.transform = "translate(" + offsetFull + "px, 0)";
		arrowL.disabled = true;
		arrowR.disabled = false;
	}
}

window.onresize = sliderInit;
