const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0) scale(1)";
    }
  });
});

const cards = document.querySelectorAll(".product-card");

cards.forEach(function(card) {
  card.style.opacity = "0";
  card.style.transform = "translateY(80px) scale(0.8)";
  card.style.transition = "all 0.8s ease";

  observer.observe(card);

  // ===== HOVER WOW =====
  card.addEventListener("mouseenter", function() {
    card.style.transform = "translateY(-15px) scale(1.07) rotateX(5deg)";
    card.style.boxShadow = "0 40px 80px rgba(181, 124, 144, 0.4)";
  });

  card.addEventListener("mouseleave", function() {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
  });
});

// ===== BUTOANE PREMIUM =====
const buttons = document.querySelectorAll(".btn, .product-btn");

buttons.forEach(function(btn) {
  btn.addEventListener("mouseenter", function() {
    btn.style.transform = "scale(1.15)";
    btn.style.boxShadow = "0 10px 30px rgba(181,124,144,0.5)";
  });

  btn.addEventListener("mouseleave", function() {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
});

// ===== CLICK EFFECT (WOW) =====
cards.forEach(function(card) {
  card.addEventListener("click", function() {
    card.style.transform = "scale(0.95)";
    setTimeout(function() {
      card.style.transform = "scale(1)";
    }, 150);
  });
});

// ===== FADE PAGINĂ =====
document.body.style.opacity = "0";
window.onload = function() {
  document.body.style.transition = "0.8s";
  document.body.style.opacity = "1";
};
