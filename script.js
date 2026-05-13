// Gestion du menu langues
document.getElementById("lang-btn").addEventListener("click", function(event) {
  event.stopPropagation();
  document.getElementById("lang-menu").classList.toggle("hidden");
});

// Fermer le menu si on clique ailleurs
document.addEventListener("click", function() {
  document.getElementById("lang-menu").classList.add("hidden");
});

// Téléchargement automatique du CV
document.querySelector(".cv").addEventListener("click", function(event) {
  event.preventDefault();
  const link = document.createElement("a");
  link.href = "cv.pdf";
  link.download = "cv.pdf";
  link.click();
  window.open("cv.pdf", "_blank");
});

// ====== JavaScript ======
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Retirer l'état actif des boutons
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Masquer tous les contenus
      contents.forEach(c => c.classList.remove("active"));

      // Afficher le contenu correspondant
      const target = document.getElementById(btn.dataset.tab);
      target.classList.add("active");
    });
  });
});

// Interaction fluide au survol
// Interaction fluide au survol
document.querySelectorAll('.skill-column li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transition = "all 0.3s ease";
    item.style.transform = "scale(1.05)";
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = "scale(1)";
  });
});

// Animation subtile au survol (ajout d'une classe)
document.querySelectorAll('.formation-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});


// Gestion des boutons filtres
// Gestion des boutons filtres
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".portfolio-card");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Retirer l'état actif de tous les boutons
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach((card) => {
      if (filter === "personal" && card.classList.contains("personal")) {
        card.style.display = "block";
      } else if (
        filter === "professional" &&
        card.classList.contains("professional")
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// Animation au scroll
const items = document.querySelectorAll('.contact-item');
window.addEventListener('scroll', () => {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }
  });
});
