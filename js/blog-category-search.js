
var filters;

resetFilter();
function resetFilter() {
  filters = [];
};


function addFilters(filter_btn) {
  let filter_item = filter_btn.getAttribute("data-value");
  if(filters.indexOf(filter_item) > -1) {
    //filter item already present in list so now delete it;
    filters.splice(filters.indexOf(filter_item), 1);
  } else {
    //filter item not present so add it
    filters.push(filter_item);
  }
}

function clearAllActiveState(categoryItemBtnArr) {
  /*
    Remove active state from all category-item-btn
  */
  categoryItemBtnArr.forEach( cItemBtn => {
    cItemBtn.setAttribute("data-state", "");
  });
}

function addActiveState(filters) {
  /*
    Add active state to category-item-btn to visualize if it is selected or not
  */
  filters.forEach( filter => {
    document.querySelector(`button[data-value="${filter}"]`).setAttribute("data-state", "active");
  });
}

function applyNoFilter(filter_btn, all_blogs) {
    resetFilter();
    filter_btn.setAttribute("data-state", "active");
    constructBlogs(all_blogs);
}

function applyFilter(filter_btn) {
  const categoryItemBtnElem = document.querySelectorAll("button[data-self='category-item-btn']");

  const categoryItemBtnArr = [...categoryItemBtnElem];

  //jsonBlogs is derived from js/blog-data.js
  all_blogs = JSON.parse(jsonBlogs);

  clearAllActiveState(categoryItemBtnArr);

  if(filter_btn.getAttribute("data-value").toLowerCase() === "all posts") {
    /*
      if All Posts is selected then restart this process from beginning
    */
    applyNoFilter(filter_btn, all_blogs);
    return;
  }

  addFilters(filter_btn);
  
  if(!filters.length) {
    /*
      If filters list is empty the by default turn into default filter i.e. "ALL POSTS"
    */
    applyNoFilter(document.querySelector("button[data-parent='true']"), all_blogs);
    return;
  }

  addActiveState(filters);

  var filtered_blogs = all_blogs.filter( (blog) => {
    return (
        filters.some( (filter) =>{
          return blog.blog_detail.blog_category.includes(filter)
        })
      )
  });

  (filtered_blogs.length > 0) ? constructBlogs(filtered_blogs) : constructNotFound();
};


function constructNotFound() {

  const blogsContainer = document.getElementById("blogs");

  // Loading animation before blog load
  blogsContainer.innerHTML = `<div class="w-100" style="transform:scale(0.7);-webkit-transform:scale(0.7)">
          <div class="spinner">
            <div class="cube cube-1"></div>
            <div class="cube cube-2"></div>
          </div>
        </div>`;

  setTimeout(function(){
    blogsContainer.innerHTML = `<div class="blog wrapper mx-auto" style="padding:7%;3%">
    <div class="container">
      <h3 class="text-center txt-tertiary" style="font-family:'Roboto', sans-serif;font-weight:600">No Results Found</h3>
      <p class="text-center txt-grey mt-4" style="font-family:'Roboto', sans-serif;font-size:0.97rem">Looks like we couldn't find what you're looking for. Try another search.</p>
    </div>
    </div>
    `
  }, 700);
  
}