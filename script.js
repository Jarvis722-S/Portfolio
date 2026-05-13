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
