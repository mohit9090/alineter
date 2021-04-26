
var quickProductContainer = document.getElementById("q-product-box");

/* Scroll Buttons */
const leftScrollBtn = document.querySelector(".scroll-btn[page-scroll='left']");
const rightScrollBtn = document.querySelector(".scroll-btn[page-scroll='right']");

//jsonQuickProducts is derived from js/quickProduct-data.js
const products = JSON.parse(jsonQuickProducts);

const prodNotFound = {
	err_title : "Product Not Found",
	err_img : "images/robot.png",
	err_descp : "Sorry Something went wrong.\nWe are extremely sorry"
}

const productCardDimension = [
	{
		width : 360,
		height : 350 
	},
	{
		width : 330,
		height : 320
	},
	{
		width : 300,
		height : 290
	},
	{
		width : 270,
		height : 260
	},
	{
		width : 250,
		height : 240
	},
	{
		width : 240,
		height : 230
	},
	{
		width : 220,
		height : 210
	},
	{
		width : 150,
		height : 140
	}
];
/*Destructuring productCardDimension into diff size*/
const [xx_lg, x_lg, lg, md, sm, x_sm, xx_sm, xxx_sm] = productCardDimension;


/*Additional Functions*/
function toggleScrollBtn(elements) {
	/* 
		Show/Hide the scroll btn as per the parameters provided in function call 
	*/
	elements.map( elem => {
		eval(elem.name).style.display = elem.show ? "block" : "none";
	});
}
function handleScrollBtn(totalPages, page_num) {

	/* Hide/Show the scroll button as per page number and total pages */

	if(totalPages == 1) {
		/* on load/resize if total pages = 1 then remove scroll button*/
		toggleScrollBtn([
				{
					name : "leftScrollBtn",
					show : 0
				},
				{
					name : "rightScrollBtn",
					show : 0
				}
			]);
	} else if(totalPages > 1){
		/* on load/resize if total pages greater than one */
		if(page_num == 0) {
			/* left scroll btn is not required */
			toggleScrollBtn([
				{
					name : "leftScrollBtn",
					show : 0
				},
				{
					name : "rightScrollBtn",
					show : 1
				}
			]);
		} else if(page_num == totalPages-1) {
			/* right scroll btn is not required */
			toggleScrollBtn([
				{
					name : "leftScrollBtn",
					show : 1
				},
				{
					name : "rightScrollBtn",
					show : 0
				}
			]);
		} else if(page_num > 0 && page_num < totalPages) {
			/* left and right scroll btn required */
			toggleScrollBtn([
				{
					name : "leftScrollBtn",
					show : 1
				},
				{
					name : "rightScrollBtn",
					show : 1
				}
			]);
		}
	} 
}
function animateContainer(elem, direction, page_num) {
	/*
		direction = 1, animate container towards right i.e. left = 100%
		direction = 0, animate container towards left i.e. left = -100%
	*/
	elem.style.opacity = 0;
	elem.style.left = direction ? "100%" : "-100%";
	setTimeout(function() {
		elem.style.left = 0;
		elem.style.opacity = 1;
		displayProducts(page_num);
	}, 250);
}
function align(elem, align_type) {
	/*
		align_type = 0 : center-align
		align_type = 1 : around-align
	*/
	const align_name = ['center', 'around'];

	if(classContains(elem, `justify-content-${align_name[Number(!align_type)]}`)) {
		removeClass(elem, [`justify-content-${align_name[Number(!align_type)]}`])
	}
	addClass(elem, [`justify-content-${align_name[align_type]}`])
}
function alignProductContainer(len) {
	/*
		If there is only one product in the respective page then make it centered otherwise justify-content-around
	*/
	if(len == 1) {
  		align(quickProductContainer, 0)//0 for center-align
	} else if(len > 1) {
 	 	align(quickProductContainer, 1);//1 for around-align
	}
}


// NOTE: getScreenWidth() is defined in utitly.js

function getBreakPointMetrics() {
	var screenWidth = getScreenWidth();
	if(screenWidth > 1400) {
		return "xx_lg";
	} else if(screenWidth <= 1400 && screenWidth > 1200) {
		return "x_lg";
	} else if(screenWidth <= 1200 && screenWidth > 992) {
		return "lg";
	} else if(screenWidth <= 992 && screenWidth > 768) {
		return "md";
	} else if(screenWidth <= 768 && screenWidth > 576) {
		return "sm";
	} else if(screenWidth <= 576 && screenWidth > 360) {
		return "x_sm";
	} else if(screenWidth <= 360 && screenWidth > 260) {
		return "xx_sm";
	} else {
		return "xxx_sm";
	}
}
function getNumCards__inOnePage(productContainerWidth, cardWidth) {
	/*
		Get the number of product cards that can accomodate on a single page
	*/
	return Math.floor(productContainerWidth/cardWidth);
}
function getTotalPages(totalProducts, numCards__inOnePage) {
	/*
		Get How many pages are required to cover all products
	*/
	return Math.ceil(totalProducts/numCards__inOnePage);
}


function getAllParameters() {
	/* Compute Parameters that are required to build QuickProduct Section */
	let productContainerWidth = getScreenWidth();
	let breakpoint = getBreakPointMetrics();

	let cardDimension = eval(breakpoint);/* evaluates the string value */
	let cardWidth = cardDimension.width;
	let cardHeight = cardDimension.height;

	let totalProducts = products.length;

	let numCards__inOnePage = getNumCards__inOnePage(productContainerWidth, cardWidth);
	let totalPages = getTotalPages(totalProducts, numCards__inOnePage);

	return [
		productContainerWidth, 
		cardWidth, 
		cardHeight, 
		totalProducts, 
		numCards__inOnePage, 
		totalPages
	];
}
function filterParameters(filter_list) {
	/*
		Get on required parameters from all parameters as mention in filter_list
		filter_list is an array
	*/
	var [
		productContainerWidth, 
		cardWidth, 
		cardHeight, 
		totalProducts, 
		numCards__inOnePage, 
		totalPages
	] = getAllParameters();

	var filter_value = [];

	filter_list.map( item => {
		filter_value.push(eval(item));
	});

	return filter_value;
}


function getPagesContent(totalPages, numCards__inOnePage) {
	let pagesContent = [];
	
	var count = 0; 
	for(var i=0; i<totalPages; i++) {
		/*
			Fill products in different pages
		*/
		
		//SLICE will get number of products that respective page can accomodate
		pagesContent.push(products.slice(count, numCards__inOnePage+count));

		// count will monitor the index of products array so that new contents are present in every page
		count += numCards__inOnePage;
	}

	return pagesContent;
}



function mapProducts(pagecontent, cardWidth, cardHeight) {
	let products_div = "";
	pagecontent.map( (product) => {
		products_div += `<div class="card q-product-card load-gradient shadow" id="product-${product.product_id}" style="width:${cardWidth}px;height:${cardHeight}px">
		  <img class="card-img-top q-product-img img-cover" src="${product.product_detail.img}" alt="${product.product_detail.name}" onerror="img_unloaded(this)" onload="this.parentElement.classList.remove('load-gradient')">
		  <a href="#" class="stretched-link" data-toggle="modal" onclick="viewProduct(${product.product_id})" data-prod-id="${product.product_id}"></a>
		  <div class="q-product-body">
		    <p class="card-text text-center"><i class="fa fa-eye"></i></p>
		  </div>
		</div>`
	});
	return products_div;
}
function constructProducts(pagecontent, cardWidth, cardHeight) {
	let products_html = "";

	products_html = mapProducts(pagecontent, cardWidth, cardHeight);
	// setTimeout(function(){
	// 	quickProductContainer.innerHTML = products_html;
	// },5000);
	quickProductContainer.innerHTML = products_html;
}


function displayProducts(page_num) {

	var [
		productContainerWidth, 
		cardWidth, 
		cardHeight, 
		totalProducts, 
		numCards__inOnePage, 
		totalPages
	] = getAllParameters();

	var pagesContent = getPagesContent(totalPages, numCards__inOnePage);

	handleScrollBtn(totalPages, page_num);

	alignProductContainer(pagesContent[page_num].length)

	constructProducts(pagesContent[page_num], cardWidth, cardHeight);

}
function nextPrevPage(jump) {
	page_num += jump;
	var [totalPages] = filterParameters(['totalPages']);

	if(page_num < 0) {
		page_num = 0;
	} else if(page_num == totalPages) {
		page_num = totalPages-1;
	}

	/* Scrolling Animation */
	if(jump == 1) {
		/*
			jump = 1, right scroll btn is clicked
		*/
		animateContainer(quickProductContainer, 1, page_num);
	} else if(jump == -1) {
		/*
			jump = -1, left scroll btn is clicked  
		*/
		animateContainer(quickProductContainer, 0, page_num);
	}
}

var page_num = 0;
// events is defined in utility.js, events = ["load", "resize"]
events.map( event => {
	window.addEventListener(event, function() {
		displayProducts(page_num)
	})
});


/* MODAL BOX FOR INDIVIDUAL PRODUCT */
const prodNameElem = document.getElementById("product_name");
const prodImgElem = document.getElementById("product_img");
const prodDescpElem = document.getElementById("product_description");
const buyNowElem = document.getElementById("buy-now");
const addToCartElem = document.getElementById("add-to-cart");


function viewProduct(prod_id) {
	//Get the product details by its ID
	var product = products.filter((product)=>{
		return product.product_id == prod_id;
	});

	if(product.length) {
		/*
			if product list is not empty then show the modal for product
		*/
		
		//Destructuring product array
		//If there are products are repeated then select only one
		const [prod] = product;

		prodNameElem.innerHTML = prod.product_detail.name;

		prodImgElem.src = prod.product_detail.img;

		prodDescpElem.innerHTML = prod.product_detail.description;

		buyNowElem.href = `product/v/${prod.product_detail.name}-${prod.product_id}`;
		addToCartElem.href = `atc/${prod.product_id}`;
		
	} else {
		/* 
			no matching products EXCEPTIONAL CASE
		*/
		prodNameElem.innerHTML = prodNotFound.err_title;
		prodNameElem.style.fontWeight = "bold";

		prodImgElem.src = prodNotFound.err_img;

		prodDescpElem.innerHTML = prodNotFound.err_descp;
		prodDescpElem.style.textAlign = "center";

		buyNowElem.style.pointerEvents = "none";
		addToCartElem.style.pointerEvents = "none"
	}

	$("#q-product-view").modal("show");
}
