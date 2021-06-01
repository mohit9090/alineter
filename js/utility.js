
/*
	This js file contains the function which are common requirement for all pages
*/


const events = ["load", "resize"];


function getScreenWidth() {
	/*
		Get the width of the screen
	*/
 	return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}




function classContains(elem, className) {
	/*
		Checks whether the elemenst consists the class or not
	*/
  	return elem.classList.contains(className);
}


function addClass(elem, __classList) {
  /*
    Add classes from desired Element(elem)
    __classList is passed as an ARRAY
  */
  elem.classList.add(__classList);
}

function removeClass(elem, __classList) {
  /*
    Remove classes from desired Element(elem)
    __classList is passed as an ARRAY
  */
  elem.classList.remove(__classList);
}



function clearAllClass(elements) {
	/*
		Clear the Classlist of specified elements
		elements is passed as an ARRAY
	*/
    elements.forEach( element => {
    	element.setAttribute("class", "");
    });
};


function replaceClass(element, oldClass, newClass) {
  // element.classList.remove(oldClass);
  // element.classList.add(newClass);
  	/*
  		This will remove the OLD_CLASS and add the NEW_CLASS to specified element
  	*/
  	removeClass(element, [oldClass]);
  	addClass(element, [newClass]);
}


function switchClass(isTrue, element, trueClass, falseClass) {
	/*
		It will replace the Class of the element based on certain condition specified by isTrue variable
		trueClass - add this class when condition is TRUE
		falseClass - add this class when condition is FALSE
	*/
  	isTrue ? replaceClass(element, falseClass, trueClass) : replaceClass(element, trueClass, falseClass);
}



function addRatingStar(rating) {
	/*
		Dynamically generate star icon based on ratings given
	*/

	let ratingIcon = "";
	const fullStar = Math.floor(rating);
	const halfStar = rating - fullStar;
	const noStar = 5 - Math.ceil(rating);
	

	for(let i=0; i<fullStar; i++) {
		ratingIcon += `<i class="fa fa-star rating-icon sm" style="color:#FEFEFE"></i>`;
	}
	for(let i=0; i<halfStar; i++) {
		ratingIcon += `<i class="fa fa-star-half-o rating-icon sm" style="color:#FEFEFE"></i>`;
	}
	for(let i=0; i<noStar; i++) {
		ratingIcon += `<i class="fa fa-star-o rating-icon sm" style="color:#FEFEFE"></i>`;
	}

	return ratingIcon
}
