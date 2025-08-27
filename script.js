const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");
function openMenu() {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("translate-x-full");
  document.body.style.overflow = "";
}
menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
// Fecha menu ao clicar em um link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const fadeCards = document.querySelectorAll('.fade-slide-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

fadeCards.forEach(card => {
  observer.observe(card);
});

const fadeScaleCards = document.querySelectorAll('.fade-scale-card');

const observerScale = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observerScale.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeScaleCards.forEach(card => observerScale.observe(card));

const cards = document.querySelectorAll('.fade-scale-card');

