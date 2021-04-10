

function loveEffect(heartBtn) {
	//add a love click effect
	heartBtn.classList.add("loveEffect");
	setTimeout(function(){
	  heartBtn.classList.remove("loveEffect");
	},1500);
}

function changeHeartState(state, blogID, heartBtn) {

	var likesCountElem = document.getElementById(`likesCount--${blogID}`);
	var likes = parseInt(likesCountElem.innerHTML);

	replaceClass(heartBtn, state.removeIcon, state.addIcon);
	heartBtn.setAttribute("data-like", state.dataLike);

	likes += state.likeCount;
	likesCountElem.innerHTML = likes;

	// (state.stateName == "likeBlog") ? loveEffect(heartBtn) : null;
};

/* Like dislike blog */
function toggleHeart(heartBtn, blogID) {

	const heartState = [
	  {
	    stateName : "likeBlog",
	    addIcon : "fa-heart",
	    removeIcon : "fa-heart-o",
	    dataLike : "true",
	    likeCount : 1
	  }, 
	  {
	    stateName : "dislikeBlog",
	    addIcon : "fa-heart-o",
	    removeIcon : "fa-heart",
	    dataLike : "false",
	    likeCount : -1
	  }
	];
	// Destructure HeartState Array
	const [likeBlog, dislikeBlog] = heartState;

	var isLiked = heartBtn.getAttribute("data-like");
	(isLiked == "false") ? changeHeartState(likeBlog, blogID, heartBtn) : changeHeartState(dislikeBlog, blogID, heartBtn);
}