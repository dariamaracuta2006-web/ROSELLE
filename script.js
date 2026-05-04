document.body.style.opacity = "0";

window.addEventListener("load", function () {
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = "1";
});

// Apariție elegantă la scroll
const cards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0) scale(1)";
    }
  });
});

cards.forEach(function (card) {
  card.style.opacity = "0";
  card.style.transform = "translateY(60px) scale(0.9)";
  card.style.transition = "all 0.7s ease";
  observer.observe(card);

  card.addEventListener("mouseenter", function () {
    card.style.transform = "translateY(-12px) scale(1.05)";
    card.style.boxShadow = "0 30px 70px rgba(181, 124, 144, 0.35)";
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.06)";
  });
});

// Butoane luxury
const buttons = document.querySelectorAll(".btn, .product-btn");

buttons.forEach(function (button) {
  button.style.transition = "all 0.3s ease";

  button.addEventListener("mouseenter", function () {
    button.style.transform = "scale(1.1)";
    button.style.boxShadow = "0 10px 30px rgba(181, 124, 144, 0.45)";
  });

  button.addEventListener("mouseleave", function () {
    button.style.transform = "scale(1)";
    button.style.boxShadow = "none";
  });
});
