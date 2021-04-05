
const blogsContainer = document.getElementById("blogs");

const blogs = [
	{
		blog_id : "23647",
		blog_detail : {
			mainImg : "images/blog-img--1.webp", 
			title : "0.1 seconds is all it takes",
			short_description : "What are the things people notice first to form a quick opinion on you? Here's your answer",
			url : "blog/0-1-seconds-is-all-it-takes",
			blog_category : [
				"clothing", 
				"men's fashion", 
				"lifestyle"
			]
		},
		blog_author : {
			name : "Mohit Kumar",
			username : "mohitkumar3762",
			pfImg : "images/mohit_300.png",
			profile_url : "profile/mohitkumar3762"
		},
		blog_date : {
			date : "22",
			month : "Mar",
			year : "2021"
		},
		blog_reviews : {
			views : "86",
			comments : "3",
			likes : "15"
		}
	},

	{
		blog_id : "974766",
		blog_detail : {
			mainImg : "images/men-fashion-1.jpg", 
			title : "Backed By Science",
			short_description : "Humans have a thing called a learning bias. No matter how wise a saying is, we are much more apt to accept it as true if we trust the source.",
			url : "blog/Backed-By-Science",
			blog_category : [ 
				"research backed"
			]
		},
		blog_author : {
			name : "Rohit Kumar",
			username : "rohitkumar_292",
			pfImg : "images/model_pic_1859__white_tee_park__jpeg--20.jpg",
			profile_url : "profile/rohitkumar_292"
		},
		blog_date : {
			date : "18",
			month : "Mar",
			year : "2021"
		},
		blog_reviews : {
			views : "6",
			comments : "23",
			likes : "5"
		}
	},

	{
		blog_id : "917329",
		blog_detail : {
			mainImg : "images/men-fashion-2.jpg", 
			title : "Let Me List Them Out For You",
			short_description : "For some reason, we like list posts. They appeal to a wide audience and inspire a lot of clicks compared to other types of articles",
			url : "blog/Let-Me-List-Them-Out-For-You",
			blog_category : [
				"clothing",
				"research backed"
			]
		},
		blog_author : {
			name : "Sanmay Biswal",
			username : "sanmayBiswal00",
			pfImg : "images/pratyush_pic_no_1516_jpeg-30.jpg",
			profile_url : "profile/sanmayBiswal00"
		},
		blog_date : {
			date : "2",
			month : "Feb",
			year : "2021"
		},
		blog_reviews : {
			views : "186",
			comments : "32",
			likes : "150"
		}
	},

	{
		blog_id : "123444",
		blog_detail : {
			mainImg : "images/men-fashion-3.jpg", 
			title : "Everyone Loves Competition",
			short_description : "This is a powerful title option. It allows you to replace third-party, uncontrollable reviews of your product or service with reviews you can control.",
			url : "blog/Everyone-Loves-Competition",
			blog_category : [
				"clothing"
			]
		},
		blog_author : {
			name : "MD Pervez",
			username : "PervezKhan024",
			pfImg : "images/rahul_pic_no_1503_jpeg-30.jpg",
			profile_url : "profile/PervezKhan024"
		},
		blog_date : {
			date : "22",
			month : "Dec",
			year : "2020"
		},
		blog_reviews : {
			views : "56",
			comments : "35",
			likes : "5"
		}
	},

];


function mapBlogs() {
	let blog_div = "";

	blogs.map( (blog) => {
		blog_div += `<div class="blog wrapper mx-auto p-0">
          <!--Blog Image-->
          <div class="container-fluid blog-img-wrapper load-gradient p-0" id="blog-img-wrapper" onclick="viewBlog(${blog.blog_id})">
            <img src="${blog.blog_detail.mainImg}" alt="${blog.blog_detail.title}" class="img-fluid blog-img" onload="this.parentElement.classList.remove('load-gradient')"/>
          </div>

          <!--Blog Details-->
          <div class="container-fluid w-100 blog-detail-wrapper">
            <div class="container-fluid p-0">
              <div class="d-flex flex-column">
                
                <div class="blog-detail" id="blog-detail">
                  <div class="blog-author-wrap d-flex justify-content-between pl-0 pr-0 pb-2">
                    <div class="blog-author d-flex">
                      <div class="blog-author-img">
                        <a href="${blog.blog_author.profile_url}"><img src="${blog.blog_author.pfImg}" alt="${blog.blog_author.name} profile pic | Alineter" class="rounded-circle" alt="author name | Alineter"/></a>
                      </div>
                      <div class="ml-2 d-flex flex-column">
                        <small class="d-flex blog-author-name lead">
                          <span>${blog.blog_author.name}</span>&nbsp;
                          <a href="${blog.blog_author.profile_url}"><img src="images/pen-feather-xl.png" class="img-fluid" width=15 height=10 data-toggle="tooltip" data-placement="top" title="Writer"/></a>
                        </small>
                        <small class="blog-pub-date lead">${blog.blog_date.month} ${blog.blog_date.date}, ${blog.blog_date.year}</small>
                      </div>
                    </div>
                    <div class="blog-link">
                      <a href="#" class="btn rounded-circle" data-toggle="modal" onclick="shareBlogModal(${blog.blog_id})"><i class="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div class="blog-description d-flex flex-column mt-2" id="blog-description" onclick="viewBlog(${blog.blog_id})">
                    <div class="blog-title">
                      <h5>${blog.blog_detail.title}</h5>
                    </div>
                    <div class="blog-short-descp">
                      <p class="lead">${blog.blog_detail.short_description}</p>
                    </div>
                  </div>
                </div>

                <!--Horizontal line-->
                <div class="hr mt-2">
                </div>

                <div class="blog-success d-flex justify-content-between mt-2 mb-2">
                  <div class="d-flex">
                    <small class="lead blog-report blog-views">${blog.blog_reviews.views} views</small>
                    <small class="lead blog-report blog-comments ml-3">${blog.blog_reviews.comments} comments</small>
                  </div>
                  <div class="d-flex">
                    <small class="lead blog-report blog-likes">
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


function constructBlogs() {
	let blogs_html = "";

	blogs_html = mapBlogs();
	blogsContainer.innerHTML = blogs_html;
}

function displayBlogs() {
	constructBlogs();
}
displayBlogs();

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

	var respective_blog = getBlogByID(blogID);

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