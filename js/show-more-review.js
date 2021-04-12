

// const reviewers = JSON.parse(jsonReviewers);

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

reviewers.sort( function(a, b) {
	return sortbyLength(a, b, 1);
});

function show_more__Reviews() {
	document.getElementById("more-reviews-overlay").style.width="100%";
	document.body.style.overflowY="hidden";
	const moreReviewsContainer = document.querySelector("#more-reviews-container > .row");

	let moreReviews_html = ""

	reviewers.map(reviewer => {
		moreReviews_html += `<div class="col-lg-4 col-md-6 col-sm-12"><div class="review-box rounded">
            <div class="card review-card border rounded reveal__from-bottom">
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

	moreReviewsContainer.innerHTML = moreReviews_html;

	setTimeout(function() {
		document.getElementById("more-reviews-container").style.opacity="1";
		document.getElementById("more-reviews-overlay").style.overflowY="auto";
	}, 500);

}
function close_more__Reviews() {
	document.getElementById("more-reviews-container").style.opacity="0";
	document.getElementById("more-reviews-overlay").style.overflowY="hidden";
	setTimeout(function() {
		document.getElementById("more-reviews-overlay").style.width="0";
		document.body.style.overflowY="auto";
	}, 250);
}
