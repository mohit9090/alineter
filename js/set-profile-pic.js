


function placeFilename(message, fileExt) {
  /*
    Place uploaded file name in help box
  */
  $("#upload-helptext").attr("title", message);
  
  if(message.length > 22) {
    let ext = fileExt
    message = message.substr(0,18) + `(${ext})`;
  }
  $("#upload-helptext").html(message);
}


function validateImage() {
  /*
    Validate whether the uploaded file is image or not
  */
  const fileInput = document.getElementById("profile-img");
  const filePath = fileInput.value;
  const allowedExtension = /(\.jpg|\.jpeg|\.png|\.gif|\.webp)$/i;
  if(!allowedExtension.exec(filePath)) {
    placeFilename("Invalid Format","");
    fileInput.value = "";
    return false;
  } else {
    //Preview Image
    var fileName = filePath.split("\\").pop();
    var fileExt = filePath.split(".")[1];
    placeFilename(fileName, fileExt);
    if(fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById("display-pfImage").setAttribute("src",e.target.result);
        document.getElementsByClassName("upload-media-submit")[0].innerHTML = "Upload";

        replaceClass(document.getElementsByClassName("upload-media-submit")[0], ['skip'], ['upload']);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}