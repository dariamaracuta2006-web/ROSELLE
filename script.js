console.log("JS merge");

// efect pe produse
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

// efect pe butoane
const buttons = document.querySelectorAll(".btn, .product-btn");

buttons.forEach(function(btn) {
  btn.addEventListener("mouseover", function() {
    btn.style.opacity = "0.8";
  });

  btn.addEventListener("mouseout", function() {
    btn.style.opacity = "1";
  }); 
});
