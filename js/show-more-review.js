
function sortbyLength(a, b, type) {
	/*
		type = 0 --> Ascending Order
		type = 1 --> Descending Order

		Arrange the Customer Reviews according to the review content length,
		that may be ascending or desceneding
	*/
	if(a.review.content.length < b.review.content.length) {
		/*
			type === 0 then second statement will execute
			type === 1 then first statement will execute 
			Here for ascending(type=0) it should return -1,
			and for descending(type=1) it should return 1
		*/
		return type ? 1 : -1;
	}
	if(a.review.content.length > b.review.content.length) {
		/*
			Here for ascending(type=0) it should return 1,
			and for descending(type=1) it should return -1
		*/
		return type ? -1 : 1;
	}
	return 0;
}

/* all_reviewers is derived from js/customerReview-data.js */
var all_reviewers = JSON.parse(jsonReviewers);

all_reviewers.sort( function(a, b) {
	return sortbyLength(a, b, 1);
});


const moreReviewOverlayElem = document.getElementById("more-reviews-overlay");
const reviewsNavElem = document.querySelector(".reviews-nav");
const moreReviewsContainer = document.getElementById("more-reviews-container");
const moreReviewsContainer__row = document.querySelector("#more-reviews-container > .row");

function toggleReviewOverlay(toggle_state) {
	/*
		toggle_state = 1 (true) => Show
		toggle_state = 0 (false) => Hide
	*/

	moreReviewOverlayElem.style.width = (toggle_state) ? "100%" : "0";
	
	//Restrict the body to scroll when overlay effect is turned on
	document.body.style.overflowY = (toggle_state) ? "hidden" : "auto";
}

function toggleReviewContent(toggle_state) {
	/*
		toggle_state = 1 (true) => Show
		toggle_state = 0 (false) => Hide
	*/

	const elems = [reviewsNavElem, moreReviewsContainer];
	elems.forEach( elem => {
		elem.style.opacity = (toggle_state) ? "1" : "0";
	});

	//Enable Scrolling of Review Content when it has been displayed
	moreReviewOverlayElem.style.overflowY = (toggle_state) ? "auto" : "hidden";
}

function mapOverlayReviews() {
	let moreReviews_div = "";

	all_reviewers.forEach(reviewer => {
		moreReviews_div += `<div class="col-lg-4 col-md-6 col-sm-12"><div class="review-box rounded">
            <div class="card review-card border rounded">
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
              <div class="card-body rounded">
                <p class="card-text text-cultured reviewer-says">${reviewer.review.content}</p>
              </div>
            </div>
          </div>
         </div>`
	});

	return moreReviews_div;
}

function show_more__Reviews() {
	/*
		Opens the Overlay to show More Reviews By Customer
		toggle_state = 1 means to show 
	*/
	let toggle_state = 1;
	toggleReviewOverlay(toggle_state);

	let moreReviews_html = ""
	moreReviews_html = mapOverlayReviews();
	
	setTimeout(function() {
		moreReviewsContainer__row.innerHTML = moreReviews_html;
	},1500)
	// moreReviewsContainer__row.innerHTML = moreReviews_html;

	setTimeout(function() {
		toggleReviewContent(toggle_state);
	}, 300);

}
function close_more__Reviews() {
	/*
		Close the Overlay to hide More Reviews By Customer
		toggle_state = 0 means to hide 
	*/
	let toggle_state = 0;
	toggleReviewContent(toggle_state);

	setTimeout(function() {
		toggleReviewOverlay(toggle_state);
	}, 300);
}
