var css = document.getElementById("cssToCopy");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	var bkgrd = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value + 
	")"
	body.style.background = bkgrd;
	css.textContent = bkgrd;
}

css.textContent = body.style.background;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);