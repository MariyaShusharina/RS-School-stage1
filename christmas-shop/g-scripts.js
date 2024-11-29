
const btnUp = document.querySelector(".arrow-up");

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
