export function initRealModal() {
    const overlay = document.getElementById('real-modal-overlay');
    const closeBtn = document.getElementById('real-close-btn');
    const openBtn = document.getElementById('btn-open-real');

    if (!overlay || !openBtn) return;

    openBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const close = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', close);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
}