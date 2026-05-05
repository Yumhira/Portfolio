document.addEventListener("DOMContentLoaded", () => {
    const modalAsset = (path) => `${path}?v=20260505`;

    // Charger la modale de contact
    fetch(modalAsset('Modals/Contact/contact-modal.html'))
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-modal-container').innerHTML = data;
            import(modalAsset('./Modals/Contact/contact-modal.js')).then(module => {
                module.initContactModal();
            });
        })
        .catch(err => console.error('Erreur Contact Modal:', err));

    // Charger la modale certif
    fetch(modalAsset('Modals/Certif/certif-modal.html'))
        .then(response => response.text())
        .then(data => {
            document.getElementById('certif-modal-container').innerHTML = data;
            import(modalAsset('./Modals/Certif/certif-modal.js')).then(module => {
                module.initCertifModal();
            });
        })
        .catch(err => console.error('Erreur Certif Modal:', err));

    // Charger la modale réalisations
    fetch(modalAsset('Modals/Réalisations/realisation-modal.html'))
        .then(response => response.text())
        .then(data => {
            document.getElementById('real-modal-container').innerHTML = data;
            import(modalAsset('./Modals/Réalisations/realisation-modal.js')).then(module => {
                module.initRealModal();
            });
        })
        .catch(err => console.error('Erreur Real Modal:', err));
    
    // Charger la modale veille
    fetch(modalAsset('Modals/Veille/veille-modal.html'))
        .then(response => response.text())
        .then(data => {
            document.getElementById('veille-modal-container').innerHTML = data;
            import(modalAsset('./Modals/Veille/veille-modal.js')).then(module => {
                module.initVeilleModal();
            });
        })
        .catch(err => console.error('Erreur Veille Modal:', err));

    // Téléchargement CV
    const downloadBtn = document.querySelector(".btn-download");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            const a = document.createElement("a");
            a.href = "assets/Alternance_Haytham_Clement.pdf";
            a.download = "Alternance_Haytham_Clement.pdf";
            a.click();
        });
    }
});