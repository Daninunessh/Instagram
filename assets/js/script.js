let slideIndex = 0;
showSlides();

function showSlides() {
  let counter;
  let slides = document.getElementsByClassName("carousel-div");
  for (counter = 0; counter < slides.length; counter++) {
    slides[counter].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (counter = 0; counter < slides.length; counter++) {
    slides[counter].className = slides[counter].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000);
}