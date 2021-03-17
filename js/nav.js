
const navigation = document.getElementById("navigation");

/* Change BG of navbar on scrolling */
$(function(){
  var scrollTop = $(window).scrollTop();
  changeNavClass(scrollTop);
}); 

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    changeNavClass(scrollTop);
});


function changeNavClass(st) {
    if (st > 0) {
      navigation.style.padding = "1.4% 1.2%";
    } 
    else {
      navigation.style.padding = "2.4% 5%";
    }
}
