
const quickProductContainer = document.getElementById("q-product-box");


const products = [
	{
		product_id : "123",
		product_detail : {
			name : "Van Heusen",
			img : "images/men-fashion.jpg",
			url : "",
			description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
		}
	},
	{
		product_id : "245",
		product_detail : {
			name : "Jack & Jones",
			img : "images/men-fashion-2.jpg",
			url : "",
			description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
		}
	},
	{
		product_id : "34634",
		product_detail : {
			name : "Tommy Hilfiger",
			img : "images/men-fashion-1.jpg",
			url : "",
			description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
		}
	},
	{
		product_id : "12442",
		product_detail : {
			name : "US-Polo",
			img : "images/fashion-illustration.png",
			url : "",
			description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
		}
	}
];

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
	  <img class="card-img-top q-product-image" src="${product.product_detail.img}" alt="${product.product_detail.name}" onerror="img_unloaded(this)" onload="document.getElementById('product-${product.product_id}').classList.remove('load-gradient')">
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
	const numOfProds = products.length;
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


