console.log("JS functioneaza");

// ===== EFECT PE PRODUSE =====
const cards = document.querySelectorAll(".product-card");

cards.forEach(function(card) {
  card.addEventListener("mouseover", function() {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseout", function() {
    card.style.transform = "scale(1)";
  });
});

// ===== EFECT BUTOANE =====
const buttons = document.querySelectorAll(".btn, .product-btn");

buttons.forEach(function(btn) {
  btn.addEventListener("mouseover", function() {
    btn.style.opacity = "0.8";
  });

  btn.addEventListener("mouseout", function() {
    btn.style.opacity = "1";
  });
});

// ===== ALERT CONTACT =====
const contactLinks = document.querySelectorAll('a[href="contacte.html"]');

contactLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    alert("Te redirecționăm către pagina de contacte ROSELLE 💕");
  });
});
