const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function moveCarousel() {
  if (index < 0) index = items.length - 3;
  if (index > items.length - 3) index = 0;
  track.style.transform = `translateX(-${index * 235}px)`;
}


nextBtn.addEventListener("click", () => {
  index++;
  moveCarousel();
});
prevBtn.addEventListener("click", () => {
  index--;
  moveCarousel();
});


const animatedElements = document.querySelectorAll(".animate");

function animateOnScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
