export function initContactModal() {
    const modal = document.getElementById("contact-modal");
    const btn = document.querySelector(".btn-message");
    const span = document.querySelector(".close-modal");
    const form = document.getElementById("contact-form");

    if (btn) {
        btn.addEventListener("click", () => modal.style.display = "flex");
    }

    if (span) {
        span.addEventListener("click", () => modal.style.display = "none");
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) modal.style.display = "none";
    });

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Merci ! Votre message a bien été envoyé.");
            modal.style.display = "none";
            form.reset();
        });
    }
}