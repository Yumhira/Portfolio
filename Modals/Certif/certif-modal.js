import { bindOverlayModal } from '../shared/modal-utils.js';

export function initCertifModal() {
    const overlay = document.getElementById('certif-modal-overlay');
    const closeBtn = document.getElementById('certif-close-btn');
    const openBtn = document.getElementById('btn-open-certif');

    bindOverlayModal({ overlay, openBtn, closeBtn });
}