
// Heading

let h1 = document.createElement("h1");
h1.textContent = "Simon Says";

// Section

let section = document.createElement("section");


function loadBody() {
  document.body.appendChild(h1);
  document.body.appendChild(section);
}

window.onload = loadBody();
