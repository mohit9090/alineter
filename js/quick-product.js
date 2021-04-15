
const quickProductContainer = document.getElementById("q-product-box");

//jsonQuickProducts is derived from js/quickProduct-data.js
const products = JSON.parse(jsonQuickProducts);

const prodNotFound = {
	err_title : "Product Not Found",
	err_img : "images/robot.png",
	err_descp : "Sorry Something went wrong.\nWe are extremely sorry"
}


function mapProducts() {
	let products_div = "";
	products.map( (product) => {
		products_div += `<div class="p-4">
			<div class="card q-product-card load-gradient shadow" id="product-${product.product_id}">
			  <img class="card-img-top q-product-image" src="${product.product_detail.img}" alt="${product.product_detail.name}" onerror="img_unloaded(this)" onload="this.parentElement.classList.remove('load-gradient')">
			  <a href="#" class="stretched-link" data-toggle="modal" onclick="viewProduct(${product.product_id})" data-prod-id="${product.product_id}"></a>
			  <div class="q-product-body">
			    <p class="card-text text-center"><i class="fa fa-eye"></i></p>
			  </div>
			</div>
		</div>`
	});

	return products_div;
}

function constructProducts() {
	let products_html = "";
	
	products_html = mapProducts();
	quickProductContainer.innerHTML = products_html;
}

function displayProducts() {
	// const numOfProds = products.length;
	constructProducts();
}

displayProducts();

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
	
	if(product.length == 1) {
		/*
			get unique product only
		*/
		
		//Destructuring product array
		const [prod] = product;

		prodNameElem.innerHTML = prod.product_detail.name;

		prodImgElem.src = prod.product_detail.img;

		prodDescpElem.innerHTML = prod.product_detail.description;

		buyNowElem.href = `product/v/${prod.product_detail.name}-${prod.product_id}`;
		addToCartElem.href = `atc/${prod.product_id}`;
		
	} else {
		/* 
			no matching products or more than one products
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


function func() {
	let productContainerWidth = quickProductContainer.offsetWidth;
	// console.log(productContainerWidth)
	// console.log($(".q-product-card").css("width").replace("px",""))
}

/* NOTE: do this after product construction */
var _events = ["load", "resize"];
_events.map( event => {
	window.addEventListener(event, func)
});


var p = ["p1", "p2", "p3", "p4", "p5", ""]
var n = 3;
var s = Math.ceil(p.length/n);

var p_set = [];

for(i=0;i<s;i++) {
	p_set.push(p.slice(0,n))
	p.splice(0,n);
} 
console.log(p_set)

/*

https://www.geeksforgeeks.org/how-to-use-dynamic-variable-names-in-javascript/

*/