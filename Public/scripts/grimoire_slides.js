const slides = document.getElementsByClassName("mySlides");
const back = document.getElementById("book_button_back");
const forward = document.getElementById("book_button_forward");
const book = document.getElementById("book_sprite");


//slideIndex and a variable to store the current slideIndex when it gets reset to 1 (the empty slide)
let slideIndex = 1;

// Boolean to stop the storeSlideIndex from being set to 1 between tweets.
// A 'true' value lets the program set the storeSlideIndex.
let storeSlideIndexBoolean = true;

//Slide functions not my own. Found off line
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// I wrote this :D.
function setEmptySlide(){
    showSlides(slideIndex = 1);
}
// Not this though.
function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  // Code for Chrome, Safari and Opera
  book.addEventListener("webkitAnimationEnd", removeAnimAddAnim);
  // Standard syntax
  book.addEventListener("animationend", removeAnimAddAnim);
}

function removeAnimAddAnim(){
    // book.classList.add("animation_open");
    book.classList.remove("animation_backward");
    book.classList.remove("animation_forward");
}

// Turn page forward.
forward.addEventListener('click', function(e){
    book.classList.add("animation_forward");
    book.style.animationIterationCount = "1";
    plusSlides(1);
})

// Turn page backward.
back.addEventListener('click', function(e){
    book.classList.add("animation_backward");
    plusSlides(-1);
})
