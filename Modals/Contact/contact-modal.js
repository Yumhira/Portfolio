export function initContactModal() {
    const modal = document.getElementById("contact-modal");
    const btn = document.querySelector(".btn-message");
    const span = document.querySelector(".close-modal");
    const form = document.getElementById("contact-form");
    const formContainer = document.getElementById("contact-form-container");
    const successMsg = document.getElementById("contact-success");

    // --- CONFIGURATION ---
    const SERVICE_ID = "service_zo0tfg3";
    const TEMPLATE_ID = "template_w6ifvr3"; 
    const PUBLIC_KEY = "v9HjDMSQhW4PvkUCS"; 

    // Chargement auto du SDK EmailJS
    if (!window.emailjs) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        script.onload = () => emailjs.init(PUBLIC_KEY);
        document.head.appendChild(script);
    }

    if (btn) {
    btn.addEventListener("click", () => {
        formContainer.style.display = "block";
        successMsg.style.display = "none";
        modal.classList.add("active");
    });
}

if (span) {
    span.addEventListener("click", () => modal.classList.remove("active"));
}

window.addEventListener("click", (event) => {
    if (event.target === modal) modal.classList.remove("active");
});

// Et dans le setTimeout :
setTimeout(() => {
    modal.classList.remove("active");
}, 3500);

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Feedback visuel sur le bouton
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = "Envoi en cours...";

            // ENVOI REEL
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
                .then(() => {
                    // Succès : On bascule l'affichage
                    formContainer.style.display = "none";
                    successMsg.style.display = "flex";
                    form.reset();

                    // Fermeture auto de la modale après 3.5s
                    setTimeout(() => {
                        modal.style.display = "none";
                    }, 3500);
                })
                .catch((err) => {
                    console.error("Erreur EmailJS:", err);
                    alert("Une erreur est survenue. Veuillez réessayer.");
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalHTML;
                });
        });
    }
}