
const slideNavigation = document.getElementById("slide-navigation");
const overlayEffect = document.getElementById("overlay-effect");
const slideNavBtn =  document.getElementsByClassName("slide-navigation-btn")[0];

function opennav() {
slideNavigation.style.left = "0";
overlayEffect.style.width = "100%";
slideNavBtn.setAttribute("onclick","closenav()");
document.querySelector(".slide-navigation-btn > i").classList.remove("fa-bars");
document.querySelector(".slide-navigation-btn > i").classList.add("fa-close");
}
function closenav() {
slideNavigation.style.left = "-100%";
overlayEffect.style.width = "0";
slideNavBtn.setAttribute("onclick","opennav()");
document.querySelector(".slide-navigation-btn > i").classList.remove("fa-close");
document.querySelector(".slide-navigation-btn > i").classList.add("fa-bars");
}