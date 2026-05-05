const REAL_PROJECTS = {
    glpi: {
        icon: 'fa-server', iconBg: 'rgba(0,150,255,0.12)', iconBorder: 'rgba(0,150,255,0.3)',
        name: 'GLPI sur Windows', sub: 'Gestion de parc informatique & helpdesk',
        color: '#4da6ff',
        desc: "Déploiement et configuration complète de GLPI sur Windows Server. Mise en place d'une solution ITSM permettant la gestion des assets, tickets et inventaire.",
        tags: ['Windows Server 2019', 'PHP / MySQL', 'Apache', 'GLPI 10.x', 'Active Directory'],
        steps: [
            { n: 1, title: 'Installation stack', text: 'Déploiement de WAMP (Apache, PHP, MySQL) sur Windows Server 2019.' },
            { n: 2, title: 'Configuration GLPI', text: 'Import de la base de données, configuration initiale et personnalisation des entités.' },
            { n: 3, title: 'Intégration AD', text: 'Connexion LDAP à Active Directory pour authentification des utilisateurs du domaine.' },
            { n: 4, title: 'Mise en production', text: "Création des groupes techniciens, règles d'escalade et ouverture aux utilisateurs finaux." },
        ]
    },
    packettracer: {
        icon: 'fa-network-wired', iconBg: 'rgba(0,229,255,0.1)', iconBorder: 'rgba(0,229,255,0.3)',
        name: 'Schémas Packet Tracer', sub: 'Simulation et conception réseau Cisco',
        color: '#00e5ff',
        desc: "Réalisation de plusieurs topologies réseau via Cisco Packet Tracer : LAN/WAN, VLAN, routage statique et dynamique (OSPF, RIP), configuration de switches et routeurs Cisco en environnement simulé.",
        tags: ['Cisco Packet Tracer', 'VLAN', 'OSPF / RIP', 'IPv4 / IPv6', 'ACL', 'NAT/PAT'],
        steps: [
            { n: 1, title: 'Topologie LAN', text: "Conception d'un réseau local avec segmentation VLAN et trunk 802.1Q." },
            { n: 2, title: 'Routage dynamique', text: 'Configuration OSPF multi-zone et redistribution de routes entre protocoles.' },
            { n: 3, title: 'Sécurité réseau', text: "Mise en place d'ACL pour filtrage du trafic inter-VLAN et accès DMZ." },
            { n: 4, title: 'Documentation', text: "Export des schémas et rédaction des plans d'adressage IP associés." },
        ]
    },
    virtualbox: {
        icon: 'fa-box', iconBg: 'rgba(180,100,255,0.1)', iconBorder: 'rgba(180,100,255,0.3)',
        name: 'VirtualBox', sub: 'Virtualisation & lab infrastructure',
        color: '#c77dff',
        desc: "Création d'un lab virtuel sous VirtualBox pour simuler des environnements serveurs, tester des configurations réseau isolées et reproduire des scénarios d'infrastructure sans matériel dédié.",
        tags: ['VirtualBox 7.x', 'Ubuntu Server', 'Windows Server', 'Réseau NAT/Host-Only', 'Snapshots'],
        steps: [
            { n: 1, title: 'Setup hôte', text: 'Configuration du réseau interne (Host-Only Adapter) pour isoler les VMs.' },
            { n: 2, title: 'VMs serveurs', text: "Déploiement d'une VM Ubuntu Server et d'une VM Windows Server 2019 interconnectées." },
            { n: 3, title: 'Services testés', text: 'Installation et tests de DHCP, DNS, SMB et SSH entre les machines virtuelles.' },
            { n: 4, title: 'Snapshots', text: 'Gestion des points de restauration pour itérer rapidement sur les configurations.' },
        ]
    },
    oralink: {
        icon: 'fa-link', iconBg: 'rgba(0,229,255,0.1)', iconBorder: 'rgba(0,229,255,0.25)',
        name: 'OraLink', sub: 'Entreprise fictive - transformation numérique sécurisée',
        color: '#00e5ff',
        desc: "OraLink répond aux besoins de transformation numérique des entreprises avec une approche structurée et sécurisée. J'ai modélisé le schéma réseau sous Packet Tracer, déployé une VM Ubuntu avec GLPI, puis organisé le projet autour de trois pôles de 10 personnes.",
        tags: ['Schéma réseau', 'Packet Tracer', 'Ubuntu Server', 'GLPI', '3 pôles'],
        steps: [
            { n: 1, title: 'Contexte', text: "Le projet a été pensé pour répondre à la digitalisation des entreprises tout en traitant deux limites majeures : la sécurité des données et l’obsolescence logicielle." },
            { n: 2, title: 'Schéma réseau', text: "J'ai réalisé l'infrastructure réseau dans Packet Tracer avec une logique de segmentation par pôles, un routeur central et des switches pour distribuer les équipements de chaque zone." },
            { n: 3, title: 'VM Ubuntu et GLPI', text: "J'ai créé une machine virtuelle Ubuntu afin d'y installer GLPI et de disposer d'un environnement de gestion de parc et de support technique cohérent avec les besoins du projet." },
            { n: 4, title: 'Organisation', text: 'La structure repose sur 30 employés répartis équitablement en trois pôles de 10 personnes : produit & développement, infrastructure & sécurité, administratif & communication.' },
        ]
    },
    eebiscus: {
        icon: 'fa-leaf', iconBg: 'rgba(124,255,190,0.1)', iconBorder: 'rgba(124,255,190,0.25)',
        name: 'Eebiscus', sub: 'Entreprise fictive - contenu temporaire',
        color: '#7cffbe',
        desc: "Eebiscus est un projet fictif en attente de contenu final. La carte sert de base pour une future présentation produit ou service dans un cadre portfolio.",
        tags: ['Prototype', 'Fictif', 'Contenu provisoire', 'Portfolio'],
        steps: [
            { n: 1, title: 'Statut', text: 'Projet fictif affiché avec un contenu temporaire en attendant les détails définitifs.' },
            { n: 2, title: 'Usage', text: 'Base prête pour décrire une future solution ou une vitrine digitale.' },
            { n: 3, title: 'Placeholder', text: 'Texte volontairement générique pour garder une présentation propre.' },
            { n: 4, title: 'Évolution', text: 'Le contenu sera remplacé dès que le projet Eebiscus sera défini.' },
        ]
    }
};

export function initRealModal() {
    const overlay       = document.getElementById('real-modal-overlay');
    const closeBtn      = document.getElementById('real-close-btn');
    const openBtn       = document.getElementById('btn-open-real');
    const gridView      = document.getElementById('realGridView');
    const detailView    = document.getElementById('realDetailView');
    const detailContent = document.getElementById('realDetailContent');
    const detailBack    = document.getElementById('realDetailBack');

    if (!overlay || !openBtn) return;

    // Ouvrir
    openBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        showGrid();
    });

    // Fermer
    const close = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };
    closeBtn?.addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    // Cartes → détail
    gridView.querySelectorAll('.real-proj-card[data-project]').forEach(card => {
        card.addEventListener('click', () => showDetail(card.dataset.project));
    });

    // Retour grille
    detailBack.addEventListener('click', showGrid);

    function showGrid() {
        gridView.classList.remove('hidden');
        detailView.classList.remove('visible');
    }

    function showDetail(id) {
        const p = REAL_PROJECTS[id];
        if (!p) return;

        const tags  = p.tags.map(t => `<span class="real-detail-chip">${t}</span>`).join('');
        const steps = p.steps.map(s => `
            <div class="real-step">
                <div class="real-step-num" style="color:${p.color}">${s.n}</div>
                <div class="real-step-text"><strong>${s.title} — </strong>${s.text}</div>
            </div>
        `).join('');

        if (id === 'oralink') {
            const pillars = [
                {
                    title: 'Développement applicatif',
                    text: 'Conception de solutions métiers, interfaces web et API pour répondre aux besoins opérationnels de chaque pôle.'
                },
                {
                    title: 'Sécurité et supervision',
                    text: 'Application de la segmentation VLAN, contrôle des accès et suivi continu de l’état du réseau et des services.'
                },
                {
                    title: 'Infrastructure et automatisation',
                    text: 'Organisation de l’infrastructure, standardisation des configurations et automatisation des tâches techniques récurrentes.'
                }
            ];

            const pillarsHtml = pillars.map(pillar => `
                <article class="oralink-pillar-card">
                    <h4>${pillar.title}</h4>
                    <p>${pillar.text}</p>
                </article>
            `).join('');

            const staffBlocks = [
                { title: 'Produit & développement', meta: '10 personnes', desc: 'Le cœur de la création logicielle.' },
                { title: 'Infrastructure & sécurité', meta: '10 personnes', desc: 'Continuité de service et protection des données.' },
                { title: 'Administratif & communication', meta: '10 personnes', desc: 'Pilotage stratégique et relation humaine.' }
            ];

            const staffHtml = staffBlocks.map(block => `
                <div class="oralink-team-card">
                    <span class="oralink-team-meta">${block.meta}</span>
                    <h4>${block.title}</h4>
                    <p>${block.desc}</p>
                </div>
            `).join('');

            const networkBlocks = [
                {
                    vlan: 'VLAN 10',
                    title: 'Pôle administratif',
                    ip: '192.168.10.0/24',
                    gateway: '192.168.10.254',
                    text: 'Ce VLAN regroupe les postes administratifs et la communication. Il est séparé du reste du réseau pour limiter les flux et renforcer la sécurité.'
                },
                {
                    vlan: 'VLAN 20',
                    title: 'Infrastructure & sécurité',
                    ip: '192.168.20.0/24',
                    gateway: '192.168.20.254',
                    text: 'Ce VLAN centralise la partie technique, le serveur, les services sensibles et les équipements d’administration du réseau.'
                },
                {
                    vlan: 'VLAN 30',
                    title: 'Pôle développement',
                    ip: '192.168.30.0/24',
                    gateway: '192.168.30.254',
                    text: 'Ce VLAN accueille les postes du pôle produit et développement. Il permet de tester, maintenir et organiser les usages métiers du projet.'
                }
            ];

            const networkHtml = networkBlocks.map(block => `
                <article class="oralink-network-card">
                    <span class="oralink-network-tag">${block.vlan}</span>
                    <h4>${block.title}</h4>
                    <p>${block.text}</p>
                    <div class="oralink-network-meta">
                        <span>Réseau : ${block.ip}</span>
                        <span>Gateway : ${block.gateway}</span>
                    </div>
                </article>
            `).join('');

            const networkScreens = [
                {
                    src: '/assets/Veille/Scrum1.png',
                    alt: 'Capture VM - création de la machine',
                    title: 'Création de la VM',
                    text: 'Capture de la phase de création et de paramétrage initial de la machine.'
                },
                {
                    src: '/assets/Veille/DevSecOps.png',
                    alt: 'Capture VM - configuration réseau',
                    title: 'Configuration réseau',
                    text: 'Capture de la configuration réseau utilisée pendant l’installation.'
                }
            ];

            const networkScreensHtml = networkScreens.map(screen => `
                <figure class="oralink-command-shot">
                    <img src="${screen.src}" alt="${screen.alt}" class="zoomable-image" loading="lazy" decoding="async">
                    <figcaption>
                        <strong>${screen.title}</strong>
                        <span>${screen.text}</span>
                    </figcaption>
                </figure>
            `).join('');

            const vmPoints = [
                'Création d’une machine virtuelle Ubuntu Server pour servir de base applicative.',
                'Installation des composants nécessaires au fonctionnement de GLPI.',
                'Préparation d’une interface exploitable pour la gestion de parc, des tickets et du support.'
            ];

            const vmHtml = vmPoints.map(point => `<li>${point}</li>`).join('');

            const vmScreens = [
                {
                    src: '/assets/Veille/Scrum1.png',
                    alt: 'Étape 1 - Création de la VM Ubuntu',
                    title: 'Étape 1 - Création de la VM',
                    text: 'Création de la machine Ubuntu Server avec allocation CPU, RAM et disque.'
                },
                {
                    src: '/assets/Veille/DevSecOps.png',
                    alt: 'Étape 2 - Paramétrage réseau de la VM',
                    title: 'Étape 2 - Paramétrage réseau',
                    text: 'Configuration de la connectivité et vérification des échanges réseau de la VM.'
                },
                {
                    src: '/assets/Veille/Scrum2.png',
                    alt: 'Étape 3 - Installation des services',
                    title: 'Étape 3 - Installation des services',
                    text: 'Installation des paquets nécessaires pour préparer l’environnement applicatif.'
                }
            ];

            const vmScreensHtml = vmScreens.map(screen => `
                <figure class="oralink-screen-card">
                    <img src="${screen.src}" alt="${screen.alt}" class="zoomable-image" loading="lazy" decoding="async">
                    <figcaption>
                        <strong>${screen.title}</strong>
                        <span>${screen.text}</span>
                    </figcaption>
                </figure>
            `).join('');

            const glpiInstallSteps = [
                'J’ai préparé l’environnement Ubuntu avec Apache, MariaDB et les extensions PHP utiles à GLPI.',
                'J’ai créé une base dédiée ainsi qu’un utilisateur SQL isolé pour sécuriser l’application.',
                'J’ai récupéré l’archive officielle GLPI 10.x, puis je l’ai déployée dans le répertoire web.',
                'J’ai ajusté les droits pour que le serveur puisse écrire dans les dossiers nécessaires.',
                'J’ai finalisé l’installation depuis l’interface web en renseignant l’hôte, la base et l’utilisateur.',
                'Une fois l’application en place, j’ai supprimé le script d’installation et remplacé les identifiants de démo.'
            ];

            const glpiInstallHtml = glpiInstallSteps.map(step => `<li>${step}</li>`).join('');

            const glpiAccessCards = [
                { title: 'Base de données', text: 'Instance dédiée sur MariaDB avec un compte séparé pour GLPI.' },
                { title: 'Connexion web', text: 'Installation terminée depuis le navigateur sur le serveur Ubuntu.' },
                { title: 'Sécurité', text: 'Suppression du script d’installation et changement des accès par défaut.' }
            ];

            const glpiAccessHtml = glpiAccessCards.map(card => `
                <article class="oralink-lab-item">
                    <strong>${card.title}</strong>
                    <span>${card.text}</span>
                </article>
            `).join('');

            detailContent.innerHTML = `
                <section class="oralink-hero">
                    <div class="oralink-hero-copy">
                        <div class="oralink-brand-row">
                            <span class="oralink-brand-logo">
                                <img src="/assets/Realisation/Intro/Oralink.jpg" alt="Logo OraLink">
                            </span>
                            <div class="oralink-brand-text">
                                <span class="oralink-brand-kicker">OraLink</span>
                                <span class="oralink-brand-sub">Entreprise fictive</span>
                            </div>
                        </div>
                        <span class="oralink-hero-kicker">Entreprise / fiche projet</span>
                        <h3>OraLink structure une réponse moderne à la numérisation des entreprises.</h3>
                        <p>Le projet met en avant une organisation claire, des solutions sécurisées et une logique de production centrée sur trois pôles complémentaires, avec une vraie partie infrastructure réseau et serveur.</p>
                        <div class="oralink-hero-chips">
                            <span>30 employés</span>
                            <span>3 pôles</span>
                            <span>Sécurité</span>
                            <span>Cloud</span>
                        </div>
                    </div>
                    <div class="oralink-hero-aside">
                        <div class="oralink-stat-card">
                            <span class="oralink-stat-value">30</span>
                            <span class="oralink-stat-label">employés au total</span>
                        </div>
                        <div class="oralink-stat-card">
                            <span class="oralink-stat-value">3</span>
                            <span class="oralink-stat-label">pôles d’activité</span>
                        </div>
                        <div class="oralink-stat-card">
                            <span class="oralink-stat-value">24/7</span>
                            <span class="oralink-stat-label">continuité de service</span>
                        </div>
                    </div>
                </section>

                <section class="oralink-section oralink-section--dense">
                    <div>
                        <h4>Contexte</h4>
                        <p>OraLink a été pensée pour répondre au besoin croissant de numérisation dans le monde professionnel, avec une priorité claire : moderniser les outils tout en renforçant la sécurité des systèmes.</p>
                    </div>
                    <div>
                        <h4>Problèmes visés</h4>
                        <p>Le projet cible deux freins majeurs fréquemment rencontrés par les entreprises : le manque de sécurité des données et l’utilisation de logiciels obsolètes inadaptés au travail moderne.</p>
                    </div>
                </section>

                <section class="oralink-section">
                    <div class="real-detail-section">
                        <h4>1. Schéma réseau et infrastructure</h4>
                        <p>J’ai d’abord réalisé l’infrastructure réseau dans Packet Tracer afin de structurer l’entreprise par pôles. Le schéma repose sur un routeur central, des switches de distribution et une segmentation VLAN pour séparer clairement les usages.</p>
                        <div class="oralink-network-grid">${networkHtml}</div>
                        <p>Le serveur DHCP attribue automatiquement les adresses IP aux postes des différents VLAN, ce qui permet d’éviter la saisie manuelle et de garder une configuration cohérente sur l’ensemble du réseau.</p>
                        <div class="oralink-command-grid">
                            ${networkScreensHtml}
                        </div>
                        <div class="oralink-screen-grid oralink-screen-grid--single">
                            <figure class="oralink-screen-card oralink-screen-card--inline">
                                <img src="/assets/Realisation/Oralink/PacketTracer.png" alt="Schéma réseau OraLink réalisé sous Packet Tracer" class="zoomable-image" loading="lazy" decoding="async">
                                <figcaption>
                                    <strong>Schéma réseau</strong>
                                    <span>Le réseau intègre plusieurs équipements de travail: postes utilisateurs, téléphones IP, webcams, imprimantes et serveur, reliés selon les besoins de chaque pôle.</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="oralink-pillars-grid">${pillarsHtml}</div>
                    </div>
                </section>

                <section class="oralink-section">
                    <div class="real-detail-section">
                        <h4>2. VM Ubuntu et préparation applicative</h4>
                        <p>Dans un second temps, j’ai créé une machine virtuelle Ubuntu Server pour héberger l’environnement applicatif. Cette VM sert de base technique au projet et permet d’isoler la solution de gestion dans un environnement propre et reproductible. Elle fonctionne dans un environnement virtualisé pour faciliter les tests, les ajustements et la démonstration.</p>
                        <ul class="oralink-vm-list">${vmHtml}</ul>
                        <div class="oralink-screen-grid">
                            ${vmScreensHtml}
                        </div>
                    </div>
                </section>

                <section class="oralink-section oralink-section--split">
                    <div class="real-detail-section">
                        <h4>3. GLPI et gestion de parc</h4>
                        <p>Une fois la VM opérationnelle, j’ai déployé GLPI sur Ubuntu pour centraliser la gestion du parc informatique, du support et du suivi des utilisateurs. J’ai structuré l’installation comme un vrai déploiement applicatif, en partant de la pile LAMP jusqu’à la mise en service web.</p>
                        <ul class="oralink-vm-list">${glpiInstallHtml}</ul>
                        <div class="oralink-lab-grid">${glpiAccessHtml}</div>
                        <div class="oralink-screen-grid oralink-screen-grid--single">
                            <figure class="oralink-screen-card oralink-screen-card--stacked">
                                <img src="/assets/Veille/Scrum2.png" alt="GLPI OraLink - capture de substitution" class="zoomable-image" loading="lazy" decoding="async">
                                <figcaption>
                                    <strong>Interface GLPI</strong>
                                    <span>Capture de substitution du tableau de bord GLPI. Elle sera remplacée par la vraie interface une fois les écrans prêts.</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="real-detail-section">
                        <h4>Répartition des effectifs</h4>
                        <div class="oralink-team-grid">${staffHtml}</div>
                        <h4 style="margin-top:16px;">Locaux techniques</h4>
                        <div class="oralink-lab-grid">
                            <div class="oralink-lab-item"><strong>Routeurs</strong><span>Gestion du trafic réseau entrant et sortant et liaison entre les zones du schéma.</span></div>
                            <div class="oralink-lab-item"><strong>Switchs</strong><span>Interconnexion des équipements au sein du réseau local et distribution par pôle.</span></div>
                            <div class="oralink-lab-item"><strong>Ordinateurs</strong><span>Postes de travail pour l’ensemble des collaborateurs dans chaque zone fonctionnelle.</span></div>
                            <div class="oralink-lab-item"><strong>Serveur</strong><span>Hébergement des services et des données critiques de l’entreprise.</span></div>
                        </div>
                    </div>
                </section>

                <div id="oralink-lightbox-overlay" class="lightbox-overlay oralink-lightbox-overlay">
                    <span class="lightbox-close"><i class="fa-solid fa-xmark"></i></span>
                    <img id="oralink-lightbox-img" src="" alt="Aperçu OraLink">
                </div>
            `;

            const lightboxOverlay = detailContent.querySelector('#oralink-lightbox-overlay');
            const lightboxImg = detailContent.querySelector('#oralink-lightbox-img');

            if (lightboxOverlay && lightboxImg) {
                const closeLightbox = () => {
                    lightboxOverlay.classList.remove('active');
                    setTimeout(() => { lightboxImg.src = ''; }, 250);
                };

                detailContent.querySelectorAll('.zoomable-image').forEach(img => {
                    img.addEventListener('click', () => {
                        lightboxImg.src = img.getAttribute('src') || '';
                        lightboxImg.alt = img.getAttribute('alt') || 'Aperçu OraLink';
                        lightboxOverlay.classList.add('active');
                    });
                });

                lightboxOverlay.addEventListener('click', (event) => {
                    if (event.target === lightboxOverlay) closeLightbox();
                });
                lightboxOverlay.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
                document.addEventListener('keydown', function onOraLinkEscape(event) {
                    if (event.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
                        closeLightbox();
                    }
                }, { once: true });
            }
        } else {
            detailContent.innerHTML = `
                <div class="real-detail-header">
                    <div class="real-detail-icon" style="background:${p.iconBg};border-color:${p.iconBorder};color:${p.color}">
                        <i class="fa-solid ${p.icon}"></i>
                    </div>
                    <div>
                        <p class="real-detail-title">${p.name}</p>
                        <p class="real-detail-sub">${p.sub}</p>
                    </div>
                </div>
                <div class="real-detail-divider"></div>
                <div class="real-detail-section">
                    <h4>Description</h4>
                    <p>${p.desc}</p>
                </div>
                <div class="real-detail-section">
                    <h4>Technologies</h4>
                    <div class="real-detail-chips">${tags}</div>
                </div>
                <div class="real-detail-section">
                    <h4>Étapes clés</h4>
                    <div class="real-steps">${steps}</div>
                </div>
            `;
        }

        gridView.classList.add('hidden');
        detailView.classList.add('visible');
    }
}