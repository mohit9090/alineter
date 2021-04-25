
// $(window).on("load",function() {
//   activate();
// })

setTimeout(activate,350);

function activate() {
  showPage();
  setPageContentPos();
  scrollReveal();
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("body").style.display = "block";
}

function setPageContentPos() {
  /* Set the Top Position of #page-content on load */
  $(function(){
      let navHeight = document.getElementById("navigation").offsetHeight;
      document.getElementById("page-content").style.top = navHeight+"px";
  });
}

$(window).on("resize", function() {
  setPageContentPos()
});