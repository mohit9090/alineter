
const colReviews = document.getElementsByClassName("col-reviews");

// Destructuring colReviews
const [firstCol, secondCol, thirdCol] = colReviews;

function toggleColumnVisibility() {

	let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	if(secondCol != undefined) {
		(screenWidth >= 768) ? secondCol.style.display = "block" : secondCol.style.display = "none";
	}

	if(thirdCol != undefined) {
		(screenWidth >= 992) ? thirdCol.style.display = "block" : thirdCol.style.display = "none";
	}

}

const events = ["load", "resize"];

events.map( (event) => {
	window.addEventListener(event, toggleColumnVisibility);
});