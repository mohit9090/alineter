

const blogSearch = document.getElementById("blog-search");
const clearBtn = document.querySelector("input[name='q'] + .fa-times");
blogSearch.onkeyup = function() {
  var val = this.value;
  toggleClearBtn(val);          
}

function toggleClearBtn(val) {
  (val.length > 0) ? showClearBtn() : hideClearBtn();
}

function showClearBtn() {
  clearBtn.style.opacity = "1";
  clearBtn.style.pointerEvents = "auto"; 
}

function hideClearBtn() {
  clearBtn.style.opacity = "0";
  clearBtn.style.pointerEvents = "none"; 
}

function clearInput(elem) {
  blogSearch.value = "";
  hideClearBtn();
}