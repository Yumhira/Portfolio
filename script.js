document.addEventListener("DOMContentLoaded", () => {
    const modalAsset = (path) => `${path}?v=20260505`;
    const loadModal = (containerId, htmlPath, modulePath, initName) => {
        fetch(modalAsset(htmlPath))
            .then(response => response.text())
            .then(html => {
                const container = document.getElementById(containerId);
                if (!container) return;

                container.innerHTML = html;
                return import(modalAsset(modulePath));
            })
            .then(module => module?.[initName]?.())
            .catch(error => console.error(`Erreur ${initName}:`, error));
    };

    [
        ['contact-modal-container', 'Modals/Contact/contact-modal.html', './Modals/Contact/contact-modal.js', 'initContactModal'],
        ['certif-modal-container', 'Modals/Certif/certif-modal.html', './Modals/Certif/certif-modal.js', 'initCertifModal'],
        ['real-modal-container', 'Modals/Réalisations/realisation-modal.html', './Modals/Réalisations/realisation-modal.js', 'initRealModal'],
        ['veille-modal-container', 'Modals/Veille/veille-modal.html', './Modals/Veille/veille-modal.js', 'initVeilleModal'],
    ].forEach(([containerId, htmlPath, modulePath, initName]) => loadModal(containerId, htmlPath, modulePath, initName));

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

    // Accordéons timeline Parcours
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.timeline-item');
            const isOpen = item.classList.contains('open');
            // Close other items
            document.querySelectorAll('.timeline-item.open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.accordion-toggle')?.setAttribute('aria-expanded', 'false');
                }
            });
            if (isOpen) {
                item.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
});