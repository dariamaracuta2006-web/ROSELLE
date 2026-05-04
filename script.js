console.log("JavaScript ROSELLE funcționează");

// Efect luxury la apariția cardurilor
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

const cards = document.querySelectorAll(".product-card");

cards.forEach(function(card) {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);

  card.addEventListener("mouseover", function() {
    card.style.transform = "translateY(-10px) scale(1.03)";
    card.style.boxShadow = "0 25px 60px rgba(181, 124, 144, 0.25)";
  });

  card.addEventListener("mouseout", function() {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.06)";
  });
});

// Efect pe butoane
const buttons = document.querySelectorAll(".btn, .product-btn");

buttons.forEach(function(button) {
  button.addEventListener("mouseover", function() {
    button.style.transform = "scale(1.05)";
    button.style.opacity = "0.9";
  });

  button.addEventListener("mouseout", function() {
    button.style.transform = "scale(1)";
    button.style.opacity = "1";
  });
});

// Scroll smooth
document.documentElement.style.scrollBehavior = "smooth";

// Mesaj la pagina contacte
const contactLinks = document.querySelectorAll('a[href="contacte.html"]');

contactLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    alert("Te redirecționăm către pagina de contacte ROSELLE.");
  });
});
