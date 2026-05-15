export function bindOverlayModal({ overlay, openBtn, closeBtn, onOpen, onClose, closeOnEscape = true }) {
    if (!overlay || !openBtn) return null;

    const close = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        onClose?.();
    };

    const open = () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        onOpen?.();
    };

    openBtn.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    overlay.addEventListener('click', event => { if (event.target === overlay) close(); });

    if (closeOnEscape) {
        document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
    }

    return { open, close };
}