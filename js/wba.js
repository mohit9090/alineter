
const authInputs = document.querySelectorAll(".auth-input");
const reviewForm = document.getElementById("wba-form");
const reviewBtnDiv = document.getElementById("review-btn--div");
const ratingStars = [...document.querySelectorAll(".rating-icon")];
const reviewRating = document.getElementById("reviewer-rating");
  

function validateImage(pfFile) {
  /*
    Validate whether the uploaded file is image or not
  */
  const fileInput = document.getElementById("reviewer-profilepic");
  const fileHelpText =  document.querySelector(".help-text[for='reviewer-profilepic']");
  const filePath = fileInput.value;
  const allowedExtension = /(\.jpg|\.jpeg|\.png)$/i;
  if(!allowedExtension.exec(filePath)) {
    fileInput.value = "";
    fileHelpText.innerHTML = "Chose wrong file format";
    pfFile.style.borderColor = "rgba(236, 88, 88, 1)";
    return false;
  } else {
    fileHelpText.innerHTML = "Correct file format";
    pfFile.style.borderColor = "rgba(140, 255, 218, 1)";
    return true;
  }
}





function getStarRating(elem) {
  /* Rating of a particual star mentioned by elem */
  return parseInt(elem.getAttribute("data-rating"), 10);
}

function starHover__on(star) {
  /*
    On hovering the mouse on star add HOVER CLASS to all the stars having a rating less than equal to the star that is hovered on
  */
  let mouseOnStar = getStarRating(star);

  ratingStars.forEach( ratingStar => {
    getStarRating(ratingStar) <= mouseOnStar ? addClass(ratingStar, ["hover"]) : removeClass(ratingStar, ["hover"]);
  });
}

function starHover__off(star) {
  /*
    Remove the class hover from all stars when mouse is not over it
  */
  ratingStars.forEach( ratingStar => {
    removeClass(ratingStar, ["hover"]);
  });
}

function selectStar(star) {
  /*
    Add the class SELECTED to all the stars less than equal to the star that is clicked on and set the value of reviewer-rating input to the rating same as the star that was clicked upon 
  */
  let mouseOnStar = getStarRating(star);

  ratingStars.forEach( ratingStar => {
    getStarRating(ratingStar) <= mouseOnStar ? addClass(ratingStar, ["selected"]) : removeClass(ratingStar, ["selected"]);
    reviewRating.setAttribute("value", mouseOnStar);
    reviewRating.setAttribute("data-fulfill", "true");
  })
}






function validate_wbapage() {
  const fulfilledFields = document.querySelectorAll(".auth-input[data-fulfill='true']");

  //loader before submitting or rejecting the form
  reviewBtnDiv.innerHTML += `<div class="spinner-border text-light spinner-border-sm my-auto ml-2"></div>`;
  
  if(fulfilledFields.length == 5) {
    // only 5 fields are rquired here
    setTimeout(function(){
      reviewForm.submit();
    }, 700);
  } else {
    setTimeout(function(){
      reviewBtnDiv.innerHTML = `<span>Submit</span>`;
      slideUp();
      return false;
    }, 300);
  }
}