
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
			content:"Some quick example text to build on the card title and make up the bulk of the card's content.\n\nSome quick example text to build on the card title and make up the bulk of the card's content.",
			rating:4.5
		}
	},
	{
		name:"Harry Mon",
		img:"https://i.imgur.com/lE89Aey.jpg",
		review:{
			content:"Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text.",
			rating:3
		}
	},
	{
		name:"Rohit Shetty",
		img:"https://i.imgur.com/QptVdsp.jpg",
		review:{
			content:"Some quick example text to build on the card title and make up the bulk of the card's content.\nSome quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
			rating:4
		}
	},
	{
		name:"Thakur Singh",
		img:"https://i.imgur.com/jQWThIn.jpg",
		review:{
			content:"Some quick example text to build on the card title and make up the bulk of the card's content.\nSome quick example text to build on the card title and make up the bulk of the card's content.\nSome quick example text to build on the card title and make up the bulk of the card's content.",
			
			rating:5
		}
	},
	{
		name:"Ashok Lokhandwala",
		img:"https://i.imgur.com/QptVdsp.jpg",
		review:{
			content:"Some quick example text to build on the card title and make up the bulk of the card's mple text to build on the card title and make up the bulk of the card's mple text to build on the card title and make up the bulk of the card's content.",
			rating:2.5
		}
	}

];

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

const bg_color = ["blue", "mandarin", "tiffany", "primary", "vermillion"];


function addRatingStar(rating) {
	let ratingIcon = "";
	const fullStar = Math.floor(rating);
	const halfStar = rating - fullStar;
	const noStar = 5 - Math.ceil(rating);
	

	for(let i=0; i<fullStar; i++) {
		ratingIcon += `<i class="fa fa-star rating-icon sm"></i>`;
	}
	for(let i=0; i<halfStar; i++) {
		ratingIcon += `<i class="fa fa-star-half-o rating-icon sm"></i>`;
	}
	for(let i=0; i<noStar; i++) {
		ratingIcon += `<i class="fa fa-star-o rating-icon sm"></i>`;
	}

	return ratingIcon
}

function mapReviews(rev_set, additional_class) {
	let reviews = ""
	rev_set.map( (reviewer) => {
		if(reviewer !== null || reviewer !== undefined) {
			reviews = reviews + `<div class="review-box rounded ${additional_class} bg-${bg_color[Math.floor(Math.random()*5)]}">
            <div class="card review-card border-0">
              <div class="card-header">
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-column">
                    <small class="text-light reviewer-name">${reviewer.name}</small>
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
	for(var i=0; i<times; i++) {
		let reviews = mapReviews(set[i], "w-100");
		revContainer.innerHTML = revContainer.innerHTML + open_div + reviews + close_div;	
	}
}

function constructReviews(numOfReviews) {
	if(numOfReviews == 1 || numOfReviews == 2 || numOfReviews ==3) {
		/*
			Map All Reviews to a string reviews
		*/
		let reviews = mapReviews(reviewers, "wrapper");
		/*
			Display the string reviews in the markup document
		*/
		revContainer.innerHTML = revContainer.innerHTML + open_div_1 + reviews + close_div;

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
		
	} else {
		/* 
			Six reviews will be divided into three sets
		*/
		let firstSet = [], secondSet = [], thirdSet = [];
		
		firstSet.push(firstReviewer, secondReviewer);
		secondSet.push(thirdReviewer, fourthReviewer);
		thirdSet.push(fifthReviewer, sixthReviewer);

		let set = [firstSet, secondSet, thirdSet];

		recursiveMapping(set, set.length, open_div_3);

	}
}	

function displayReviews() {
	const numOfReviews = reviewers.length;
	constructReviews(numOfReviews);
}


displayReviews();