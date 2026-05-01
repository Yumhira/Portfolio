// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("contact-modal");
    const btn = document.querySelector(".btn-message");
    const span = document.querySelector(".close-modal");
    const form = document.getElementById("contact-form");

    // Ouvrir la modale
    if (btn) {
        btn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    // Fermer avec la croix
    if (span) {
        span.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Fermer en cliquant en dehors (sur le background sombre)
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Optionnel : Gérer la soumission du formulaire
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Merci ! Votre message a bien été envoyé (simulation).");
            modal.style.display = "none";
            form.reset();
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.querySelector(".btn-download");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = "/assets/Alternance_Haytham_Clement.pdf";
            link.download = "/assets/Alternance_Haytham_Clement.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        );
    }
});