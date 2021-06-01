
const colReviews = document.getElementsByClassName("col-reviews");

// Destructuring colReviews
const [firstCol, secondCol, thirdCol] = colReviews;

function setColStyle(elem, val) {
	elem.style.display = val;
	elem.setAttribute("data-display", val);
}

function toggleColumnVisibility() {

	let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	if(secondCol != undefined) {
		// (screenWidth >= 768) ? secondCol.style.display = "block" : secondCol.style.display = "none";
		(screenWidth >= 768) ? setColStyle(secondCol, "block") : setColStyle(secondCol, "none");
	}

	if(thirdCol != undefined) {
		(screenWidth >= 992) ? setColStyle(thirdCol, "block") : setColStyle(thirdCol, "none");
	}

}


// events is defined in utility.js, events = ["load", "resize"]
events.forEach( event => {
	window.addEventListener(event, toggleColumnVisibility);
});
