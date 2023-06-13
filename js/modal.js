//modal elements
const modal = document.getElementById("galleryModal");
const captionText = document.getElementById("caption");
const modalImg = document.getElementById("modalImg");

//insert image and alt text into modal
function toModal(event){
  modal.style.display = "block";
  modalImg.src = event.target.src;
  captionText.innerHTML = event.target.alt;
}

//click targets
const elements = document.getElementsByClassName("gallery-img")

//add event to all click targets
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', toModal, false);
}

//close the modal
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}