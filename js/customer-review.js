
const reviewsContainer = document.querySelector("#reviews-container .row");
const showMoreBtn = document.querySelector(".show-more-btn--div");


//jsonReviewers is derived from js/customerReview-data.js
var reviewers = JSON.parse(jsonReviewers);

/* Actual number of reviews */
const totalReviews = reviewers.length;


/* Get At most 6 reviews, PS: Dont make it more than 6 */
const max_reviews = 6;
reviewers.splice(max_reviews, reviewers.length-max_reviews);


/* Reviewers array is sorted by the length of review content in ascending order */
reviewers.sort( function(a, b) {
	return sortbyLength(a, b, 0);
});


/*
	map smallest element with largest and store it
	order = [1, 2, 3, 4, 5, 6]
	reoder = [1, 6, 2, 5, 3, 4]
*/
const reorder_reviewers = [];
for(i=0, j=reviewers.length-1; i<reviewers.length, j>=0; i++, j--) {
	if(i > j) {
		break;
	} else {
		if(i == j) {
			/* Both refers the same element so push it once */
			reorder_reviewers.push(reviewers[i])
		} else {
			/* Both refers two different element so push both of them */
			reorder_reviewers.push(reviewers[i]);
			reorder_reviewers.push(reviewers[j]);
		}
	}
}

/* Reassign reviewers to reorder_reviewers */
reviewers = reorder_reviewers;


const header = [
	// Header Selection
	/*
	   if only 1,2 or 3 reviews are there 
	*/
	`
	<div class="col-12 col-reviews">
		<div class="d-flex flex-column p-0">
	`,
	/*
	   if only 4 reviews are there 
	*/

	`
	<div class="col-lg-6 col-md-6 col-sm-12 col-reviews">
		<div class="d-flex flex-column">
	`,
	/*
	   if only 5 or 6 reviews are there 
	*/

	`
	<div class="col-lg-4 col-md-6 col-sm-12 col-reviews">
		<div class="d-flex flex-column flex-grow">
	`,

];

const footer = [
	`
		</div>
	</div>
	`
];


//Destructuring Header
const [open_div_1, open_div_2, open_div_3] = header;

//Destructuring Footer
const [close_div] = footer;

//Destructuring Reviewers
const [firstReviewer, secondReviewer, thirdReviewer, fourthReviewer, fifthReviewer, sixthReviewer] = reviewers;

// NOTE: addRatingStar() is defined in utility.js

function mapReviews(rev_set, additional_class) {
	let reviews = ""
	rev_set.forEach( reviewer => {
		if(reviewer !== null && reviewer !== undefined) {
			reviews = reviews + `<div class="review-box rounded ${additional_class}">
            <div class="card review-card border-0">
              <div class="card-header">
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-column">
                    <small class="reviewer-name">${reviewer.name}</small>
                    <div class="d-flex">` + 
                    
                    addRatingStar(reviewer.review.rating)

                     + `</div>
                  </div>
                  <div>
                    <img src="${reviewer.img}" class="img-fluid rounded-circle" width=50 height=50/>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <p class="card-text text-cultured reviewer-says">${reviewer.review.content}</p>
              </div>
            </div>
          </div>`
		}
	});

	return reviews;
}

function recursiveMapping(set, times, open_div) {
	let reviewsHTML = ""; 

	for(var i=0; i<times; i++) {
		let reviews = mapReviews(set[i], "w-100");
		reviewsHTML = reviewsHTML + open_div + reviews + close_div;	
	}

	// setTimeout(function(){
	// 	reviewsContainer.innerHTML = reviewsHTML;
	// },5000);
	reviewsContainer.innerHTML = reviewsHTML;
}

function constructReviews(numOfReviews) {
	if(numOfReviews == 1 || numOfReviews == 2 || numOfReviews == 3) {
		/*
			Map All Reviews to a string reviews
		*/
		let reviews = mapReviews(reviewers, "normal-wrapper");
		/*
			Display the string reviews in the markup document
		*/

		// setTimeout(function() {
		// 	reviewsContainer.innerHTML = open_div_1 + reviews + close_div;
		// },5000);
		reviewsContainer.innerHTML = open_div_1 + reviews + close_div;

	} else if(numOfReviews == 4) {
		/* 
			Four reviews will be divided into two sets
		*/
		let firstSet = [], secondSet = [];
		
		firstSet.push(firstReviewer, secondReviewer);
		secondSet.push(thirdReviewer, fourthReviewer);

		let set = [firstSet, secondSet];
		/*
			Recursively map the sets to add reviews
		*/
		recursiveMapping(set, set.length, open_div_2);
		
	} else if(numOfReviews > 4) {
		/* 
			Six reviews will be divided into three sets
		*/
		let firstSet = [], secondSet = [], thirdSet = [];
		
		firstSet.push(firstReviewer, secondReviewer);
		secondSet.push(thirdReviewer, fourthReviewer);
		thirdSet.push(fifthReviewer, sixthReviewer);

		let set = [firstSet, secondSet, thirdSet];

		recursiveMapping(set, set.length, open_div_3);

	} else {
		/*
			No Reviewers are there i.e. numOfReviews = 0
		*/
		document.getElementById("testimonial").innerHTML = `<div class="no-reviewer-wrapper text-center">
            <h3 class="txt-light">There are no Reviews</h3>
            <p class="lead txt-primary">Be the FIRST One to </p>
            <a href="#" class="btn show-more-btn reveal__from-bottom"><span class="fa fa-pencil"></span>&nbsp;&nbsp;Write About Us</a>
          </div>`;
	}
}

function buildShowMoreBtn() {
	if(reviewers.length >= 4) {
		showMoreBtn.innerHTML = `<a href="javascript:void(0)" class="btn show-more-btn reveal__from-bottom" onclick="show_more__Reviews()">Show More</a>`;
	} else {
		showMoreBtn.innerHTML = "";
	}
}

function displayReviews() {
	/* Number of Reviews that are actually shown */
	var shownReviews = reviewers.length;
	constructReviews(shownReviews);
	buildShowMoreBtn();
}
displayReviews();

