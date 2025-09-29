const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

//navigation dots
images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slides.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function moveToSlide(i) {
  index = i;
  updateSlider();
}

prev.addEventListener("click", () => {
  index = (index > 0) ? index - 1 : images.length - 1;
  updateSlider();
});

next.addEventListener("click", () => {
  index = (index < images.length - 1) ? index + 1 : 0;
  updateSlider();
});

// Auto slide every 4s
setInterval(() => {
  index = (index < images.length - 1) ? index + 1 : 0;
  updateSlider();
}, 4000);

//header for
fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });