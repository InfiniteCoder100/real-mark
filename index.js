// New Arrivals Slider
let newArrivalsIndex = 0;
const newArrivalsSlider = document.querySelector(".new-arrivals .slider");
const newArrivalsSlides = document.querySelectorAll(".new-arrivals .slide");
const newArrivalsToShow = 3;
const totalNewArrivals = newArrivalsSlides.length;

function nextSlide() {
  if (newArrivalsIndex < totalNewArrivals - newArrivalsToShow) {
    newArrivalsIndex++;
    updateNewArrivalsSlider();
  }
}

function prevSlide() {
  if (newArrivalsIndex > 0) {
    newArrivalsIndex--;
    updateNewArrivalsSlider();
  }
}

function updateNewArrivalsSlider() {
  const slideWidth = 100 / newArrivalsToShow;
  newArrivalsSlider.style.transform = `translateX(-${
    newArrivalsIndex * slideWidth
  }%)`;
}

// Best Sellers Slider
let bestSellerIndex = 0;
const bestSellerSlider = document.querySelector(".best-sellers .slider");
const bestSellerSlides = document.querySelectorAll(".best-sellers .slide");
const bestSellersToShow = 3;
const totalBestSellers = bestSellerSlides.length;

function nextBestSeller() {
  if (bestSellerIndex < totalBestSellers - bestSellersToShow) {
    bestSellerIndex++;
    updateBestSellerSlider();
  }
}

function prevBestSeller() {
  if (bestSellerIndex > 0) {
    bestSellerIndex--;
    updateBestSellerSlider();
  }
}

function updateBestSellerSlider() {
  const slideWidth = 100 / bestSellersToShow;
  bestSellerSlider.style.transform = `translateX(-${
    bestSellerIndex * slideWidth
  }%)`;
}

// Initialize both sliders
updateNewArrivalsSlider();
updateBestSellerSlider();
