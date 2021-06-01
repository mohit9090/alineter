
const blogsContainer = document.getElementById("blogs");

//jsonBlogs is derived from js/blog-data.js
const blogs = JSON.parse(jsonBlogs);


function mapBlogs(blogs) {
	let blog_div = "";

	blogs.forEach( blog => {
		blog_div += `<div class="blog wrapper mx-auto p-0">
          <!--Blog Image-->
          <div class="container-fluid blog-img-wrapper load-gradient p-0" id="blog-img-wrapper" onclick="viewBlog(${blog.blog_id})">
            <img src="${blog.blog_detail.mainImg}" alt="${blog.blog_detail.title}" class="img-fluid blog-img img-cover" onload="this.parentElement.classList.remove('load-gradient');this.style.backgroundColor='#FEFEFE'"/>
          </div>

          <!--Blog Details-->
          <div class="container-fluid w-100 blog-detail-wrapper">
            <div class="container-fluid p-0">
              <div class="d-flex flex-column">
                
                <div class="blog-detail" id="blog-detail">
                  <div class="blog-author-wrap d-flex justify-content-between pl-0 pr-0 pb-2">
                    <div class="blog-author d-flex">
                      <div class="blog-author-img-holder">
                        <a href="${blog.blog_author.profile_url}"><img src="${blog.blog_author.pfImg}" alt="${blog.blog_author.name} profile pic | Alineter" class="blog-author-img img-cover" alt="author name | Alineter"/></a>
                      </div>
                      <div class="ml-2 d-flex flex-column">
                        <small class="d-flex blog-author-name">
                          <span>${blog.blog_author.name}</span>&nbsp;
                          <a href="${blog.blog_author.profile_url}" data-toggle="tooltip" title="Writer"><img src="images/pen-feather-xl.png" class="img-fluid" width=15 height=10/></a>
                        </small>
                        <small class="blog-pub-date">${blog.blog_date.month} ${blog.blog_date.date}, ${blog.blog_date.year}</small>
                      </div>
                    </div>
                    <div class="blog-link">
                      <a href="#" class="btn rounded-circle" data-toggle="modal" title="Share" onclick="shareBlogModal(${blog.blog_id})"><i class="fa fa-share"></i></a>
                    </div>
                  </div>
                  <div class="blog-description d-flex flex-column mt-2" id="blog-description" onclick="viewBlog(${blog.blog_id})">
                    <div class="blog-title">
                      <h5>${blog.blog_detail.title}</h5>
                    </div>
                    <div class="blog-short-descp">
                      <p>${blog.blog_detail.short_description}</p>
                    </div>
                  </div>
                </div>

                <!--Horizontal line-->
                <div class="hr mt-2">
                </div>

                <div class="blog-success d-flex justify-content-between mt-2 mb-2">
                  <div class="d-flex">
                    <small class="blog-report blog-views">${blog.blog_reviews.views} views</small>
                    <small class="blog-report blog-comments ml-3">${blog.blog_reviews.comments} comments</small>
                  </div>
                  <div class="d-flex">
                    <small class="blog-report blog-likes">
                      <span id="likesCount--${blog.blog_id}">${blog.blog_reviews.likes}</span>&nbsp;
                      <span class="fa fa-heart-o like-btn" onclick="toggleHeart(this, ${blog.blog_id})" data-like="false"></span>
                    </small>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>`
	});

	return blog_div;
}


function constructBlogs(blogs) {
	let blogs_html = "";

  // Loading animation before blog load
  blogsContainer.innerHTML = `<div class="w-100" style="transform:scale(0.7);-webkit-transform:scale(0.7)">
          <div class="spinner">
            <div class="cube cube-1"></div>
            <div class="cube cube-2"></div>
          </div>
        </div>`;

	blogs_html = mapBlogs(blogs);
  setTimeout(function(){
    blogsContainer.innerHTML = blogs_html;
  }, 1000);
	// blogsContainer.innerHTML = blogs_html;
}
constructBlogs(blogs);




function getBlogByID(blogID) {
	let respective_blog =  blogs.filter( (blog) => {
		return blog.blog_id == blogID;
	});

	//Destructuring respective_blog array
	const [blog] = respective_blog;
	return blog;
}


function shareBlogModal(blogID) {
	/*
		Open Modal to get the link of blog
	*/
	const blogLinkElem = document.getElementById("blog-sharelink");
  const socialShareBtn = [...document.querySelectorAll(".social-share-btn")];

	var respective_blog = getBlogByID(blogID);

  socialShareBtn.forEach( shareBtn => {
    let trialURL = "https://www.alineter.com/post/0-1-seconds-is-all-it-takes"
    shareBtn.setAttribute("blog-link", trialURL)
    // shareBtn.setAttribute("blog-link", respective_blog.blog_detail.url)
  });

	blogLinkElem.setAttribute("value", respective_blog.blog_detail.url);
	$("#shareBlogModal").modal("show");
}


function viewBlog(blogID) {
	/*
		View Complete blog by visiting the blog URL
	*/
	var respective_blog = getBlogByID(blogID);
	window.location.href = respective_blog.blog_detail.url;
}
