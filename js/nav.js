
const page_content = document.getElementById("page-content");
const navigation = document.getElementById("navigation");
const navBrand = document.getElementById("nav-brand-logo");

/* Change BG of navbar on scrolling */
$(function(){
  var scrollTop = $(window).scrollTop();
  changeNavBg(scrollTop);
}); 

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    changeNavBg(scrollTop);
});

function changeNavBg(st) {
  // let navHeight = navigation.offsetHeight - 10;
    if (st > 25) {
      navigation.classList.remove("navigation-bg-init");
      navigation.classList.add("navigation-bg-scroll");
      // navBrand.setAttribute("src","images/alineter-b.png");
    }
    else {
      navigation.classList.remove("navigation-bg-scroll");
      navigation.classList.add("navigation-bg-init");
      // navBrand.setAttribute("src","images/alineter-w.png");
    }
}

/* Set the Top Position of #page-content on resize */
$(function(){
  $(window).resize(function() {
    let navHeight = navigation.offsetHeight;
    page_content.style.top = navHeight+"px";
  });
  });