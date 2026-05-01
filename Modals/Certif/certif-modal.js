export function initCertifModal() {
    const modal = document.getElementById("certif-modal");
    const btn = document.querySelector(".btn-view-certifs");
    const close = document.querySelector(".close-certif");

    if (btn) {
        btn.onclick = () => modal.style.display = "flex";
    }

    if (close) {
        close.onclick = () => modal.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target == modal) modal.style.display = "none";
    };
}