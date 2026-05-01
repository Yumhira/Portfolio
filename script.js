document.addEventListener("DOMContentLoaded", () => {
    // Charger la modale de contact
    fetch('Modals/contact-modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-modal-container').innerHTML = data;
            
            // Une fois le HTML injecté, on importe et lance le JS de la modale
            import('./Modals/contact-modal.js').then(module => {
                module.initContactModal();
            });
        });

    // Ton code existant pour le téléchargement du CV
    const downloadBtn = document.querySelector(".btn-download");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = "assets/Alternance_Haytham_Clement.pdf";
            link.download = "Alternance_Haytham_Clement.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});