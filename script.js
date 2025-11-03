document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slides img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");

  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideInterval;

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
    resetInterval();
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000); // every 4 seconds
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  // Initialize
  showSlide(currentIndex);
  startAutoSlide();
});
