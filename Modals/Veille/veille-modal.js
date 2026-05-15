import { bindOverlayModal } from '../shared/modal-utils.js';

export function initVeilleModal() {
    const overlay = document.getElementById('veille-modal-overlay');
    const closeBtn = document.getElementById('veille-close-btn');
    const openBtn = document.getElementById('btn-open-veille');
    const feedContainer = document.getElementById('rss-feed-container');
    const loader = document.getElementById('veille-loader');
    
    // --- GESTION DE LA LIGHTBOX POUR LES IMAGES ---
    const zoomableImages = document.querySelectorAll('.zoomable-image');
    const lightboxOverlay = document.getElementById('image-lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCloseBtn = document.querySelector('.lightbox-close');
    let closeLightbox = null;

    if (lightboxOverlay && lightboxImg) {
        // Cache pour éviter de recharger les images
        const imageCache = new Map();
        
        zoomableImages.forEach(img => {
            img.addEventListener('click', () => {
                const src = img.src;
                
                // Si l'image est en cache, afficher immédiatement
                if (imageCache.has(src)) {
                    lightboxImg.src = src;
                    if(img.style.filter) lightboxImg.style.filter = img.style.filter;
                    lightboxOverlay.classList.add('active');
                    return;
                }

                // Sinon, précharger et afficher une fois chargée
                const tempImg = new Image();
                // Décodage asynchrone pour ne pas bloquer le thread main
                try { tempImg.decoding = 'async'; } catch (e) {}
                tempImg.onload = () => {
                    imageCache.set(src, true); // Marquer comme chargée
                    lightboxImg.src = src;
                    if(img.style.filter) lightboxImg.style.filter = img.style.filter;
                    lightboxOverlay.classList.add('active');
                };
                tempImg.onerror = () => console.error(`Erreur chargement: ${src}`);
                tempImg.src = src;
            });
        });

        closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
            setTimeout(() => { lightboxImg.src = ""; }, 250);
        };

        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) closeLightbox();
        });
        lightboxCloseBtn?.addEventListener('click', closeLightbox);
    }
    // ----------------------------------------------

    // --- GESTION DES FLUX RSS MULTIPLES ---
    const RSS_SOURCES = [
        { name: "DevOps.com", url: "https://devops.com/feed/" },
        { name: "S. Robert", url: "https://blog.stephane-robert.info/rss.xml" },
        { name: "rebelscrum.site", url: "https://www.rebelscrum.site/blog-feed.xml" }
    ];

    let isLoaded = false;

    const createRssCard = item => {
        const dateObj = new Date(item.pubDate);
        const formattedDate = dateObj.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
        const cleanDesc = (item.description || '').replace(/<[^>]*>?/gm, '').substring(0, 120) + '...';
        const card = document.createElement('div');

        card.className = 'rss-card';
        card.innerHTML = `
            <div class="rss-date" style="justify-content: space-between;">
                <span><i class="fa-regular fa-clock"></i> ${formattedDate}</span>
                <span style="color: #b197fc; background: rgba(177, 151, 252, 0.1); padding: 2px 8px; border-radius: 12px;">${item.sourceName}</span>
            </div>
            <h4 class="rss-title">${item.title}</h4>
            <p class="rss-desc">${cleanDesc}</p>
            <a href="${item.link}" target="_blank" class="rss-link">
                Lire la suite <i class="fa-solid fa-arrow-right"></i>
            </a>
        `;

        return card;
    };

    const fetchRSS = async () => {
        if (isLoaded) return; 
        // montrer le loader immédiatement pour retour visuel rapide
        if (loader) loader.style.display = 'flex';
        if (feedContainer) feedContainer.style.display = 'none';

        try {
            // Création des requêtes pour chaque flux RSS
            const fetchPromises = RSS_SOURCES.map(source => {
                const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.url)}`;
                return fetch(API_URL)
                    .then(res => res.json())
                    .then(data => ({ sourceName: source.name, data: data }))
                    .catch(err => {
                        console.error(`Erreur sur le flux ${source.name}:`, err);
                        return null; // On ignore silencieusement l'erreur d'un seul flux
                    });
            });

            // On attend que tous les flux soient chargés
            const results = await Promise.all(fetchPromises);
            
            let allArticles = [];

            // On rassemble tous les articles de tous les sites dans un seul tableau
            results.forEach(result => {
                if (result && result.data && result.data.status === 'ok') {
                    const itemsWithSource = result.data.items.map(item => ({
                        ...item,
                        sourceName: result.sourceName
                    }));
                    allArticles = allArticles.concat(itemsWithSource);
                }
            });

            if (allArticles.length > 0) {
                // On trie les articles du plus récent au plus ancien
                allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

                // Afficher rapidement les premiers résultats, puis remplir en batch
                if (loader) loader.style.display = 'none';
                if (feedContainer) feedContainer.style.display = 'flex';

                    // Limiter initialement pour alléger le DOM (12 articles), puis charger le reste par batch
                    const articlesToDisplay = allArticles.slice(0, 12);

                    const fragment = document.createDocumentFragment();
                    articlesToDisplay.forEach(item => fragment.appendChild(createRssCard(item)));
                    feedContainer.appendChild(fragment);

                    // Si plus d'articles, les ajouter en petits batches non bloquants
                    const remaining = allArticles.slice(12);
                    if (remaining.length > 0) {
                        const batchSize = 6;
                        let idx = 0;
                        const appendBatch = () => {
                            const frag = document.createDocumentFragment();
                            for (let i = 0; i < batchSize && idx < remaining.length; i++, idx++) {
                                frag.appendChild(createRssCard(remaining[idx]));
                            }
                            feedContainer.appendChild(frag);
                            if (idx < remaining.length) {
                                // Laisser le thread revenir à l'UI avant d'ajouter la suite
                                setTimeout(appendBatch, 150);
                            }
                        };
                        setTimeout(appendBatch, 200);
                    }
                    isLoaded = true;
            } else {
                throw new Error("Aucun article récupéré dans les flux.");
            }
        } catch (error) {
            loader.innerHTML = `
                <i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i>
                <p>Impossible de joindre les flux d'actualités.</p>
            `;
            console.error("Erreur RSS globale:", error);
        }
    };

    const modal = bindOverlayModal({
        overlay,
        openBtn,
        closeBtn,
        onOpen: fetchRSS,
        closeOnEscape: false
    });

    if (!modal) return;

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;

        if (lightboxOverlay && lightboxOverlay.classList.contains('active') && closeLightbox) {
            closeLightbox();
            return;
        }

        modal.close();
    });
}