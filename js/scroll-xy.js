
/* Scroll Content in X direction */
function scrollX(this_obj) {
	let scroll = this_obj.getAttribute("data-scroll");
	let scrollDirection = this_obj.getAttribute("scroll-direction");
	if(scrollDirection === "right") {
	  $("#"+scroll).animate({scrollLeft:"+=200px"},500);
	}
	else {
	  $("#"+scroll).animate({scrollLeft:"-=200px"},500);
	}           
}