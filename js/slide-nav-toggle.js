
const slideNavigation = document.getElementById("slide-navigation");
const overlayEffect = document.getElementById("overlay-effect");
const slideNavBtn =  document.getElementsByClassName("slide-navigation-btn")[0];

function opennav() {
	slideNavigation.style.left = "0";
	overlayEffect.style.width = "100%";
	//turn off the body scrolling effect
	document.body.style.overflowY="hidden";
}
function closenav() {
	slideNavigation.style.left = "-120%";
	overlayEffect.style.width = "0";
	//turn on the body scrolling effect
	document.body.style.overflowY="auto";
}