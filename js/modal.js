// Get the modal
const modal = document.getElementById("galleryModal");
const captionText = document.getElementById("caption");
const elements = document.getElementsByClassName("gallery-image")

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}