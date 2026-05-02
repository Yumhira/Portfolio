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

    if (lightboxOverlay && lightboxImg) {
        zoomableImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src; 
                
                // Gestion du filtre CSS inline pour la Lightbox
                if(img.style.filter) {
                    lightboxImg.style.filter = img.style.filter;
                } else {
                    lightboxImg.style.filter = 'none';
                }
                
                lightboxOverlay.classList.add('active'); 
            });
        });

        const closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
            setTimeout(() => { lightboxImg.src = ""; }, 300);
        };

        lightboxOverlay.addEventListener('click', closeLightbox);
        lightboxCloseBtn?.addEventListener('click', closeLightbox);
    }
    // ----------------------------------------------

    // --- GESTION DES FLUX RSS MULTIPLES ---
    // On ajoute ici les 3 sources de veille
    const RSS_SOURCES = [
        { name: "DevOps.com", url: "https://devops.com/feed/" },
        { name: "S. Robert", url: "https://blog.stephane-robert.info/rss.xml" },
        { name: "rebelscrum.site", url: "https://www.rebelscrum.site/blog-feed.xml" }
    ];

    let isLoaded = false;

    if (!overlay || !openBtn) return;

    const fetchRSS = async () => {
        if (isLoaded) return; 
        
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

                loader.style.display = 'none';
                feedContainer.style.display = 'flex';
                
                // On prend les 12 articles les plus récents (puisqu'on a plus de sources)
                const articlesToDisplay = allArticles.slice(0, 30);
                
                articlesToDisplay.forEach(item => {
                    const dateObj = new Date(item.pubDate);
                    const formattedDate = dateObj.toLocaleDateString('fr-FR', {
                        day: 'numeric', month: 'short'
                    });

                    // Retrait des balises HTML parasites et limitation à 120 caractères
                    let cleanDesc = item.description.replace(/<[^>]*>?/gm, '').substring(0, 120) + '...';

                    const card = document.createElement('div');
                    card.className = 'rss-card';
                    
                    // On injecte le petit badge source avec la date
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
                    feedContainer.appendChild(card);
                });
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

    openBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        fetchRSS(); 
    });

    const close = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape') {
            // Fermeture prioritaire de la Lightbox si elle est ouverte
            if (lightboxOverlay && lightboxOverlay.classList.contains('active')) {
                lightboxOverlay.classList.remove('active');
                setTimeout(() => { lightboxImg.src = ""; }, 300);
            } else {
                close(); 
            }
        }
    });
}