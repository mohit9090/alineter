
const revContainer = document.querySelector("#reviews-container .row");

const reviewers = [
	{
		name:"Mohit Kumar",
		img:"https://i.imgur.com/jQWThIn.jpg",
		review:{
			content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
			rating:3.5
		}
	},
	{
		name:"Caye Henry",
		img:"https://i.imgur.com/QptVdsp.jpg",
		review:{
			content:"Some quick example text to build on the card title and make up the bulk of the card's content.\nSome quick example text to build on the card title and make up the bulk of the card's content.",
			rating:4.2
		}
	},
	{
		name:"Harry Mon",
		img:"https://i.imgur.com/lE89Aey.jpg",
		review:{
			content:"Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text.",
			rating:3.8
		}
	},
	{
		name:"Rohit Shetty",
		img:"https://i.imgur.com/QptVdsp.jpg",
		review:{
			content:"Some quick example text to build on the card title and make up the bulk of the card's content.\nSome quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
			rating:4.1
		}
	},
	{
		name:"Thakur Singh",
		img:"https://i.imgur.com/jQWThIn.jpg",
		review:{
			content:"Some quick example text to build on the card title and make up the bulk of the card's content.\nSome quick example text to build on the card title and make up the bulk of the card's content.\nSome quick example text to build on the card title and make up the bulk of the card's content.",
			
			rating:4.3
		}
	},
	{
		name:"Ashok Lokhandwala",
		img:"https://i.imgur.com/QptVdsp.jpg",
		review:{
			content:"Some quick example text to build on the card title and make up the bulk of the card's mple text to build on the card title and make up the bulk of the card's mple text to build on the card title and make up the bulk of the card's content.",
			rating:4
		}
	}

];


const header = [
	// Header Selection
	/*
	   if only 1,2 or 3 reviews are there 
	*/
	`
	<div class="col-12">
		<div class="d-flex flex-column p-0">
	`,
	/*
	   if only 4 reviews are there 
	*/

	`
	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="d-flex flex-column">
	`,
	/*
	   if only 5 or 6 reviews are there 
	*/

	`
	<div class="col-lg-4 col-md-6 col-sm-12">
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



function assignFunc(numOfReviews) {
	if(numOfReviews == 1 || numOfReviews == 2 || numOfReviews ==3) {

		var reviews = "";

		reviewers.map( (reviewer) => {
			if(reviewer !== null || reviewer !== undefined) {
				reviews = reviews + open_div_1 + `<div class="review-box wrapper">
                <div class="card review-card border-0">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-column">
                        <small class="text-muted reviewer-name">${reviewer.name}</small>
                        <div class="d-flex">
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star-half-o rating-icon sm"></i>
                          <i class="fa fa-star-o rating-icon sm"></i>
                        </div>
                      </div>
                      <div>
                        <img src="${reviewer.img}" class="img-fluid rounded-circle" width=50 height=50/>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-light reviewer-says">${reviewer.review.content}</p>
                  </div>
                </div>
              </div>` + close_div
			}
		});

		revContainer.innerHTML += reviews;

	} else if(numOfReviews == 4) {

		let firstSet = [], secondSet = [];
		
		firstSet.push(firstReviewer, secondReviewer);
		secondSet.push(thirdReviewer, fourthReviewer);

		let reviews = "";

		firstSet.map( (reviewer) =>{
			if(reviewer !== null || reviewer !== undefined) {
				reviews = reviews + `<div class="review-box w-100">
                <div class="card review-card border-0">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-column">
                        <small class="text-muted reviewer-name">${reviewer.name}</small>
                        <div class="d-flex">
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star-half-o rating-icon sm"></i>
                          <i class="fa fa-star-o rating-icon sm"></i>
                        </div>
                      </div>
                      <div>
                        <img src="${reviewer.img}" class="img-fluid rounded-circle" width=50 height=50/>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-light reviewer-says">${reviewer.review.content}</p>
                  </div>
                </div>
              </div>`
			}
		});

		revContainer.innerHTML = revContainer.innerHTML + open_div_2 + reviews + close_div;

		reviews = "";

		secondSet.map( (reviewer) =>{
			if(reviewer !== null || reviewer !== undefined) {
				reviews = reviews + `<div class="review-box w-100">
                <div class="card review-card border-0">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-column">
                        <small class="text-muted reviewer-name">${reviewer.name}</small>
                        <div class="d-flex">
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star-half-o rating-icon sm"></i>
                          <i class="fa fa-star-o rating-icon sm"></i>
                        </div>
                      </div>
                      <div>
                        <img src="${reviewer.img}" class="img-fluid rounded-circle" width=50 height=50/>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-light reviewer-says">${reviewer.review.content}</p>
                  </div>
                </div>
              </div>`
			}
		});

		revContainer.innerHTML = revContainer.innerHTML + open_div_2 + reviews + close_div;

		
	} else {
		
		let firstSet = [], secondSet = [], thirdSet = [];
		
		firstSet.push(firstReviewer, secondReviewer);
		secondSet.push(thirdReviewer, fourthReviewer);
		thirdSet.push(fifthReviewer, sixthReviewer);

		var reviews = "";	

		firstSet.map( (reviewer) =>{
			if(reviewer !== null || reviewer !== undefined) {
				reviews = reviews + `<div class="review-box w-100">
                <div class="card review-card border-0">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-column">
                        <small class="text-muted reviewer-name">${reviewer.name}</small>
                        <div class="d-flex">
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star-half-o rating-icon sm"></i>
                          <i class="fa fa-star-o rating-icon sm"></i>
                        </div>
                      </div>
                      <div>
                        <img src="${reviewer.img}" class="img-fluid rounded-circle" width=50 height=50/>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-light reviewer-says">${reviewer.review.content}</p>
                  </div>
                </div>
              </div>`
			}
		});

		revContainer.innerHTML = revContainer.innerHTML + open_div_3 + reviews + close_div;

		reviews = "";

		secondSet.map( (reviewer) =>{
			if(reviewer !== null || reviewer !== undefined) {
				reviews = reviews + `<div class="review-box w-100">
                <div class="card review-card border-0">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-column">
                        <small class="text-muted reviewer-name">${reviewer.name}</small>
                        <div class="d-flex">
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star-half-o rating-icon sm"></i>
                          <i class="fa fa-star-o rating-icon sm"></i>
                        </div>
                      </div>
                      <div>
                        <img src="${reviewer.img}" class="img-fluid rounded-circle" width=50 height=50/>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-light reviewer-says">${reviewer.review.content}</p>
                  </div>
                </div>
              </div>`
			}
		});

		revContainer.innerHTML = revContainer.innerHTML + open_div_3 + reviews + close_div;

		reviews = "";

		thirdSet.map( (reviewer) =>{
			if(reviewer !== null || reviewer !== undefined) {
				reviews = reviews + `<div class="review-box w-100">
                <div class="card review-card border-0">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-column">
                        <small class="text-muted reviewer-name">${reviewer.name}</small>
                        <div class="d-flex">
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star rating-icon sm"></i>
                          <i class="fa fa-star-half-o rating-icon sm"></i>
                          <i class="fa fa-star-o rating-icon sm"></i>
                        </div>
                      </div>
                      <div>
                        <img src="${reviewer.img}" class="img-fluid rounded-circle" width=50 height=50/>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-light reviewer-says">${reviewer.review.content}</p>
                  </div>
                </div>
              </div>`
			}
		});

		revContainer.innerHTML = revContainer.innerHTML + open_div_3 + reviews + close_div;

	}
}	


function assignReview() {
	const numOfReviews = reviewers.length;
	// console.log(numOfReviews);
	assignFunc(5);


}

assignReview()

// hold = [assignReview];
// hold[0].call();