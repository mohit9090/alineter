
const categoryContainer = document.getElementById("blogsCategory");

const categorySectionClasses = [
  {
    categoryDesignType : "inline",
    categoryMenuClass : "d-flex",
    categoryBtnClass : "btn btn-i-tertiary category-btn mr-1",
    categoryIconClass : "fa fa-caret-right",
    categoryItemWrapperClass : "d-flex justify-content-center flex-fill",
    categoryItemBtnClass : "btn btn-o-primary category-item flex-grow-1",
  },
  {
    categoryDesignType : "dropdown",
    categoryMenuClass : "category-dropdown",
    categoryBtnClass : "btn btn-i-tertiary category-dropbtn",
    categoryIconClass : "fa fa-caret-down",
    categoryItemWrapperClass : "category-content",
    categoryItemBtnClass : "btn w-100 category-item",
  }
];

//Destructuring Category Section Classes Array
const [inline, dropdown] = categorySectionClasses;

const categoriesAvailable = ["clothing", "men's fashion", "lifestyle", "research backed"];


/*
  Functions to be executed on LOAD Event
*/
function constructCategorySearch(categoryStyle) {
  let category_div = "";
  category_div = ` 
      <div class="${categoryStyle.categoryMenuClass}" id="categoryMenu" data-design="${categoryStyle.categoryDesignType}">
        <button class="${categoryStyle.categoryBtnClass}" id="categoryBtn">Category&nbsp;&nbsp;<span class="${categoryStyle.categoryIconClass}" id="categoryIcon"></span></button>
        
        <div class="${categoryStyle.categoryItemWrapperClass}" id="categoryItemWrapper">
          <button class="${categoryStyle.categoryItemBtnClass}" data-self="category-item-btn" onclick="applyFilter(this)" data-state="active" data-value="All Posts" data-parent="true">All Posts</button>
          
        </div>
      </div>`;
  return category_div;
}

function addCategoryItemBtn(categoryItemWrapperElem, categoryStyle) {
  let categoryItemButton_html = "";

  categoriesAvailable.forEach(category => {
    categoryItemButton_html += `
      <button class="${categoryStyle.categoryItemBtnClass}" data-self="category-item-btn" onclick="applyFilter(this)" data-state="" data-value="${category}" data-parent="false">${category}</button>
    `
  });

  categoryItemWrapperElem.innerHTML += categoryItemButton_html;
}

function onSuccessConstruction(categoryHTML, categoryStyle) {
  
  categoryContainer.innerHTML = categoryHTML;
  const categoryItemWrapperElem = document.getElementById("categoryItemWrapper");

  addCategoryItemBtn(categoryItemWrapperElem, categoryStyle);
}

function loadCategorySearch() {

  let screenWidth = getScreenWidth();

  if(screenWidth <= 768) {
    //screen width is less than 768px
    /* Construct Category Search Button as DROPDOWN BUTTON */
    var category_html = constructCategorySearch(dropdown); 
    onSuccessConstruction(category_html, dropdown);  
  } else {
    //screen width is greater than 768px
    /* Construct Category Search Button as INLINE BUTTON  */
    var category_html = constructCategorySearch(inline);
    onSuccessConstruction(category_html, inline);
  }
};


/*
  Functions to be executed on RESIZE Event
*/


function redesignCategorySearch() {

  let screenWidth = getScreenWidth();

  var cMenu = document.getElementById("categoryMenu")
  var cBtn = document.getElementById("categoryBtn");
  var cIcon = document.getElementById("categoryIcon");
  var cItemWrapper = document.getElementById("categoryItemWrapper");
  var cItemBtn = document.querySelectorAll("button[data-self='category-item-btn']");

  const categoryElements = [cMenu, cBtn, cIcon, cItemWrapper, ...cItemBtn];

  function setNewClass(categoryStyle) {
    cMenu.setAttribute("data-design", categoryStyle.categoryDesignType)
    cMenu.setAttribute("class", categoryStyle.categoryMenuClass);
    cBtn.setAttribute("class", categoryStyle.categoryBtnClass);
    cIcon.setAttribute("class", categoryStyle.categoryIconClass);
    cItemWrapper.setAttribute("class", categoryStyle.categoryItemWrapperClass);

    for(i = 0; i < cItemBtn.length; i++) {
      cItemBtn[i].setAttribute("class",categoryStyle.categoryItemBtnClass);
    }
  } 

  if(screenWidth <= 768) {
    //screen width is less than 768px
    /*
      Will execute only once at breakpoint rather than excuting regularly on resize 
    */
    if(cMenu.getAttribute("data-design") === "inline") {;

      clearAllClass(categoryElements);
      setNewClass(dropdown);
    }

  } else {
    //screen width is greater than 768px
    /*
      Will execute only once at breakpoint rather than excuting regularly on resize
    */
    if(cMenu.getAttribute("data-design") === "dropdown") {

      clearAllClass(categoryElements);
      setNewClass(inline);
    }
  }
};

window.addEventListener("load", loadCategorySearch);
window.addEventListener("resize", redesignCategorySearch);