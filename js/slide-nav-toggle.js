
const slideNavigation = document.getElementById("slide-navigation");
const overlayEffect = document.getElementById("overlay-effect");
const slideNavBtn =  document.getElementsByClassName("slide-navigation-btn")[0];

function opennav() {
	slideNavigation.style.left = "0";
	overlayEffect.style.width = "100%";
	slideNavBtn.setAttribute("onclick","closenav()");
}
function closenav() {
	slideNavigation.style.left = "-100%";
	overlayEffect.style.width = "0";
	slideNavBtn.setAttribute("onclick","opennav()");
}