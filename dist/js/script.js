AOS.init({
  offset: 250,
  duration: 1500,
});

// =========================================
// For the Side-Menu
const openButton = document.getElementById('open-btn');
const closeButton = document.getElementById('close-btn');
const sideNav = document.getElementById('side-nav');

openButton.addEventListener('click', event => {
  sideNav.style.width = '250px';
});

closeButton.addEventListener('click', event => {
  sideNav.style.width = '0';
});

// =====================================

// For the Showcase Slider
const slides = document.querySelectorAll('.showcase-slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const autoSlide = true;
const intervalTime = 5000;
let slideInterval;
// nextSlide
const nextSlide = () => {
  //Get the current class
  const currentSlide = document.querySelector('.current');

  //Remove the current class
  currentSlide.classList.remove('current');

  // Check for next slide
  if (currentSlide.nextElementSibling) {
    // Add the class of current to the next slide
    currentSlide.nextElementSibling.classList.add('current');
    // Add the class of current to the first slide
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => currentSlide.classList.remove('current'));
};

const prevSlide = () => {
  // Get the current class
  const currentSlide = document.querySelector('.current');
  //   Remove the current class
  currentSlide.classList.remove('current');
  // Check for previous slide
  if (currentSlide.previousElementSibling) {
    // Add the class of current to the next slide
    currentSlide.previousElementSibling.classList.add('current');
    // Add the class of current to the last slide
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => currentSlide.classList.remove(current));
};

// Automatic Slide
if (autoSlide === true) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Manual Slide
// Button Events
nextBtn.addEventListener('click', event => {
  nextSlide();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prevBtn.addEventListener('click', event => {
  prevSlide();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
