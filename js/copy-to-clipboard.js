

/*
  Copy Text to ClipBoard
*/

function copyLink(copyBtn, copyFrom) {
let blogLink = copyFrom.getAttribute("value");
navigator.clipboard.writeText(blogLink).then(function(){
    copyFrom.select();
    /*
      copyBtn.children[0] refers to the copy icon inside copy btn which is the first child of it
    */
    replaceClass(copyBtn.children[0], "fa-clipboard", "fa-check");
    setTimeout(function(){
      replaceClass(copyBtn.children[0], "fa-check", "fa-clipboard");
    },500);
});
}