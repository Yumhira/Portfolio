document.addEventListener("DOMContentLoaded", () => {

    // Charger la modale de contact
    fetch('Modals/Contact/contact-modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-modal-container').innerHTML = data;
            import('./Modals/Contact/contact-modal.js').then(module => {
                module.initContactModal();
            });
        });

    // Charger la modale certif
    fetch('Modals/Certif/certif-modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('certif-modal-container').innerHTML = data;
            import('./Modals/Certif/certif-modal.js').then(module => {
                module.initCertifModal();
            });
        });

    // Charger la modale réalisations
    fetch('Modals/Réalisations/realisation-modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('real-modal-container').innerHTML = data;
            import('./Modals/Réalisations/realisation-modal.js').then(module => {
                module.initRealModal();
            });
        });
    
    // Charger la modale veille
    fetch('Modals/Veille/veille-modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('veille-modal-container').innerHTML = data;
            // On charge aussi le CSS dynamiquement
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'Modals/Veille/veille-modal.css';
            document.head.appendChild(link);
            
            import('./Modals/Veille/veille-modal.js').then(module => {
                module.initVeilleModal();
            });
        });

    // Téléchargement CV
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