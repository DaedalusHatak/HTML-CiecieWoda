
const li = document.querySelector('ul');
const a = document.querySelectorAll('a');
const red = location.href.split('/');
const ab = red[red.length-1];


const currentPage = () => {
    for(let i=0; i<a.length;i++)
    {
        const page = a[i].href.split('/');
        const pageMain = page[page.length-1];
     if(pageMain===ab){
         a[i].classList.add('active');
     }
    }
 };
 currentPage();
li.addEventListener('mouseenter', () => {
    // if (section.className ===  'red-bg visible'){
    //     section.className = 'red-bg invisible';
    // }else{
    //     section.className = 'red-bg visible';
    // }
   

    // section.classList.toggle('visible');
    li.classList.toggle('color');
});
li.addEventListener('mouseleave', () => {
    // if (section.className ===  'red-bg visible'){
    //     section.className = 'red-bg invisible';
    // }else{
    //     section.className = 'red-bg visible';
    // }
   

    // section.classList.toggle('visible');
    li.classList.toggle('color');
    
});





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

