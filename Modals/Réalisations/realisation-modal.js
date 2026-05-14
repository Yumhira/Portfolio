const REAL_PROJECTS = {
    glpi: {
        icon: 'fa-server', iconBg: 'rgba(0,150,255,0.12)', iconBorder: 'rgba(0,150,255,0.3)',
        name: 'GLPI sur Windows', sub: 'Gestion de parc informatique & helpdesk',
        color: '#4da6ff',
        desc: "Déploiement et configuration complète de GLPI sur Windows Server. Mise en place d'une solution ITSM permettant la gestion des assets, tickets et inventaire.",
        tags: ['Windows Server 2019', 'PHP / MySQL', 'Apache', 'GLPI 10.0.16', 'Active Directory'],
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
        tags: ['VirtualBox 7.x', 'Ubuntu', 'Windows Server', 'Réseau NAT/Host-Only', 'Snapshots'],
        steps: [
            { n: 1, title: 'Setup hôte', text: 'Configuration du réseau interne (Host-Only Adapter) pour isoler les VMs.' },
            { n: 2, title: 'VMs serveurs', text: "Déploiement d'une VM Ubuntu et d'une VM Windows Server 2019 interconnectées." },
            { n: 3, title: 'Services testés', text: 'Installation et tests de DHCP, DNS, SMB et SSH entre les machines virtuelles.' },
            { n: 4, title: 'Snapshots', text: 'Gestion des points de restauration pour itérer rapidement sur les configurations.' },
        ]
    },
    oralink: {
        icon: 'fa-shield-halved', iconBg: 'rgba(0,229,255,0.1)', iconBorder: 'rgba(0,229,255,0.25)',
        name: 'OraLink', sub: 'Agence fictive d\'audit en cybersécurité',
        color: '#0ea5e9',
        desc: "RSSI et super-administrateur d'une infrastructure sécurisée pour 30 collaborateurs. Architecture réseau segmentée en VLANs, déploiement serveur (Stack LAMP + GLPI), gouvernance applicative et gestion de parc.",
        tags: ['Cybersécurité', 'Architecture réseau', 'GLPI', 'Packet Tracer', 'Administration système'],
        steps: [
            { n: 1, title: 'Rôle & contexte', text: "RSSI et super-administrateur d'OraLink, agence fictive de 30 collaborateurs répartie en 3 pôles (Business & Corporate, Cloud & Cyber-Ops, Software Engineering)." },
            { n: 2, title: 'Architecture réseau', text: "Segmentation stricte en 3 VLANs isolés (10, 20, 30) avec routage sur 3 câbles physiques distincts pour garantir séparation et optimisation de bande passante." },
            { n: 3, title: 'Déploiement serveur', text: "Machine virtuelle Linux avec Stack LAMP (Apache, MariaDB, PHP) hébergeant GLPI en environnement de production sécurisé." },
            { n: 4, title: 'Gouvernance GLPI', text: "Configuration complète : entité racine + 3 sous-entités, profils granulaires (Super-Admin, Observer, Technician, Self-Service), règles d'affectation et inventaire." },
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
    const modalBody     = document.querySelector('.real-modal-body');

    const scrollModalTop = () => {
        if (!modalBody) return;
        modalBody.scrollTop = 0;
        modalBody.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    if (!overlay || !openBtn) return;

    // Ouvrir
    openBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        scrollModalTop();
        gridView && (gridView.scrollTop = 0);
        detailView && (detailView.scrollTop = 0);
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
        scrollModalTop();
        gridView && (gridView.scrollTop = 0);
    }

    function showDetail(id) {
        const p = REAL_PROJECTS[id];
        if (!p) return;

        scrollModalTop();
        gridView && (gridView.scrollTop = 0);
        detailView && (detailView.scrollTop = 0);

        const tags  = p.tags.map(t => `<span class="real-detail-chip">${t}</span>`).join('');
        const steps = p.steps.map(s => `
            <div class="real-step">
                <div class="real-step-num" style="color:${p.color}">${s.n}</div>
                <div class="real-step-text"><strong>${s.title} — </strong>${s.text}</div>
            </div>
        `).join('');

        if (id === 'oralink') {
            detailContent.innerHTML = `
                <article class="oralink-article">
                    <header class="oralink-cover">
                        <div class="oralink-cover__content">
                            <div class="oralink-brand-row">
                                <figure class="oralink-brand-logo">
                                    <img src="/assets/Realisation/Intro/Oralink.jpg" alt="Logo OraLink" loading="lazy">
                                </figure>
                                <div class="oralink-brand-text">
                                    <span class="oralink-brand-kicker">OraLink</span>
                                    <span class="oralink-brand-sub">Agence fictive d'audit en cybersécurité</span>
                                </div>
                            </div>
                            <p class="oralink-eyebrow">Portfolio technique — BTS SIO SISR</p>
                            <h1 style="margin:0;font-size:clamp(1.8rem, 3vw, 2.8rem);color:#fff;line-height:1.1;letter-spacing:-.03em;max-width:16ch;">Architecture réseau sécurisée et gouvernance GLPI</h1>
                            <p class="oralink-cover__lead">Conception complète d'une infrastructure pour 30 collaborateurs répartis en 3 pôles : architecture réseau segmentée en VLANs, déploiement serveur Linux avec Stack LAMP, et gouvernance applicative GLPI avec hiérarchie d'entités et profils granulaires.</p>
                            <div class="oralink-badge-row">
                                <span class="oralink-badge">Cybersécurité</span>
                                <span class="oralink-badge">Architecture réseau</span>
                                <span class="oralink-badge">GLPI</span>
                                <span class="oralink-badge">Packet Tracer</span>
                                <span class="oralink-badge">Administration système</span>
                            </div>
                        </div>
                        <aside class="oralink-cover__aside">
                            <article class="oralink-kpi-card"><strong>30</strong><span>Collaborateurs</span></article>
                            <article class="oralink-kpi-card"><strong>3</strong><span>Pôles d'activité</span></article>
                            <article class="oralink-kpi-card"><strong>3</strong><span>VLANs isolés</span></article>
                            <article class="oralink-kpi-card"><strong>24/7</strong><span>Supervision SOC</span></article>
                        </aside>
                    </header>

                    <section class="oralink-section-block">
                        <div class="oralink-section-head">
                            <span>01</span>
                            <div>
                                <h2 style="margin:0 0 4px;font-size:1.08rem;color:#fff;">Contexte du Projet & Rôle</h2>
                                <p style="margin:0;color:#c0cad8;font-size:.88rem;">RSSI et super-administrateur de l'infrastructure</p>
                            </div>
                        </div>
                        <div class="oralink-grid oralink-grid--2">
                            <article class="oralink-card"><span class="oralink-card-accent">Entreprise</span><h3>OraLink</h3><p>Agence fictive d'audit en cybersécurité avec une gouvernance structurée autour de la sécurité, l'innovation et le support technique.</p></article>
                            <article class="oralink-card"><span class="oralink-card-accent">Mon rôle</span><h3>RSSI & Super-Admin</h3><p>Responsable Sécurité des Systèmes d'Information et administrateur global avec récursivité complète sur l'infrastructure et l'application.</p></article>
                        </div>
                        <div class="oralink-panel">
                            <h3 style="margin:0 0 12px;color:#fff;font-size:.96rem;">Structure organisationnelle</h3>
                            <p style="margin:0 0 10px;">OraLink regroupe 30 collaborateurs répartis équitablement en trois pôles complémentaires :</p>
                            <ul class="oralink-list" style="margin-bottom:0;">
                                <li><strong>Business & Corporate</strong> — 10 personnes : administration, direction, RH, finance et relation client.</li>
                                <li><strong>Cloud & Cyber-Ops</strong> — 10 personnes : sécurité, DevOps, systèmes, réseau et supervision SOC.</li>
                                <li><strong>Software Engineering</strong> — 10 personnes : développement, UX/UI, QA et construction des outils métiers.</li>
                            </ul>
                        </div>
                    </section>

                    <section class="oralink-section-block">
                        <div class="oralink-section-head">
                            <span>02</span>
                            <div>
                                <h2 style="margin:0 0 4px;font-size:1.08rem;color:#fff;">Architecture Réseau Packet Tracer</h2>
                                <p style="margin:0;color:#c0cad8;font-size:.88rem;">Segmentation physique et logique des flux</p>
                            </div>
                        </div>
                        <div class="oralink-grid oralink-grid--3">
                            <article class="oralink-card oralink-card--vlan"><span class="oralink-card-accent">VLAN 10</span><h3>Business & Corporate</h3><p>Pôle administratif, direction, RH, finance et relation client avec accès contrôlé au réseau principal.</p><div class="oralink-subline">192.168.10.0/24</div></article>
                            <article class="oralink-card oralink-card--vlan"><span class="oralink-card-accent">VLAN 20</span><h3>Cloud & Cyber-Ops</h3><p>Pôle sécurité, DevOps et systèmes avec accès privilégié aux services critiques et supervision SOC.</p><div class="oralink-subline">192.168.20.0/24</div></article>
                            <article class="oralink-card oralink-card--vlan"><span class="oralink-card-accent">VLAN 30</span><h3>Software Engineering</h3><p>Pôle développement, UX/UI et QA avec environnement de test et d'intégration continue isolé.</p><div class="oralink-subline">192.168.30.0/24</div></article>
                        </div>
                        <figure class="oralink-figure oralink-figure--network">
                            <img src="/assets/Realisation/Oralink/PacketTracer.png" alt="Schéma réseau Packet Tracer" class="zoomable-image oralink-network-diagram" loading="lazy">
                            <figcaption><strong>Schéma global</strong><span>Routeur central avec 3 câbles physiques distincts, switchs par pôle, postes utilisateurs, téléphones IP et caméras de surveillance.</span></figcaption>
                        </figure>
                        <div class="oralink-timeline">
                            <article class="oralink-timeline-item"><span class="oralink-timeline-step">01</span><div><h3>Segmentation physique</h3><p>Au lieu du "router-on-a-stick", j'ai configuré 3 câbles physiques distincts depuis le routeur vers des ports dédiés. Cela garantit une séparation véritable et une gestion indépendante de la bande passante par pôle.</p></div></article>
                            <article class="oralink-timeline-item"><span class="oralink-timeline-step">02</span><div><h3>Serveur DHCP</h3><p>Attribution automatique des adresses IP (192.168.x.x) à chaque zone pour éviter les erreurs de configuration manuelle et maintenir une cohérence réseau optimale.</p></div></article>
                            <article class="oralink-timeline-item"><span class="oralink-timeline-step">03</span><div><h3>Équipements réseau</h3><p>Postes de travail (30 PC), téléphones VoIP (30), caméras IP (18, pour Cloud & Cyber-Ops), imprimantes réseau (3, une par pôle).</p></div></article>
                        </div>
                    </section>

                    <section class="oralink-section-block">
                        <div class="oralink-section-head">
                            <span>03</span>
                            <div>
                                <h2 style="margin:0 0 4px;font-size:1.08rem;color:#fff;">Déploiement Serveur & Socle Linux</h2>
                                <p style="margin:0;color:#c0cad8;font-size:.88rem;">Stack LAMP et préparation applicative</p>
                            </div>
                        </div>
                        <div class="oralink-grid oralink-grid--2">
                            <article class="oralink-card"><span class="oralink-card-accent">Virtualisation</span><h3>Machine Virtuelle</h3><p>VM Linux (Ubuntu) exécutée dans VirtualBox pour isoler l'environnement applicatif et faciliter les tests, sauvegardes et migrations.</p></article>
                            <article class="oralink-card"><span class="oralink-card-accent">Stack LAMP</span><h3>Services applicatifs</h3><p><strong>Apache</strong> (serveur web), <strong>MariaDB/MySQL</strong> (base de données), <strong>PHP</strong> (langage) avec extensions pour GLPI (GD, intl, json, etc.).</p></article>
                        </div>
                        <div class="oralink-gallery">
                            <figure class="oralink-shot"><img src="/assets/Realisation/Oralink/SettingsVM.png" alt="Paramètres VirtualBox" class="zoomable-image" loading="lazy"><figcaption><strong>Configuration matérielle Ubuntu</strong><span>Allocation des ressources (CPU, RAM, disque dur) et configuration de la carte réseau pour la VM Ubuntu.</span></figcaption></figure>
                            <figure class="oralink-shot"><img src="/assets/Realisation/Oralink/SessionVM.png" alt="Session Ubuntu sur VirtualBox" class="zoomable-image" loading="lazy"><figcaption><strong>Ubuntu en exécution</strong><span>VM Ubuntu démarrée sous VirtualBox pour accueillir le stack LAMP et GLPI en environnement de développement.</span></figcaption></figure>
                        </div>
                        <div class="oralink-panel oralink-panel--image">
                            <h3 style="margin:0 0 12px;color:#fff;font-size:.96rem;">Étapes de déploiement</h3>
                            <ul class="oralink-list" style="margin:0;">
                                <li>Installation des dépendances : <code style="background: rgba(15,23,42,.6); padding: 2px 6px; border-radius: 4px; font-size: .85rem;">apt update && apt install apache2 mariadb-server php php-*</code></li>
                                <li>Création de la base de données GLPI avec utilisateur dédié et privilèges limités.</li>
                                <li>Téléchargement et extraction de GLPI 11.0.7 dans <code style="background: rgba(15,23,42,.6); padding: 2px 6px; border-radius: 4px; font-size: .85rem;">/var/www/html/glpi</code>.</li>
                                <li>Déploiement sur Ubuntu hébergé sous VirtualBox (environnement de test et d'administration).</li>
                                <li>Source officielle GitHub GLPI : <code style="background: rgba(15,23,42,.6); padding: 2px 6px; border-radius: 4px; font-size: .85rem;">https://github.com/glpi-project/glpi/releases/tag/11.0.7</code>.</li>
                                <li>Finalisation via interface web (<code style="background: rgba(15,23,42,.6); padding: 2px 6px; border-radius: 4px; font-size: .85rem;">localhost/glpi/install.php</code>) avec suppression du script après installation.</li>
                            </ul>
                        </div>
                    </section>

                    <section class="oralink-section-block">
                        <div class="oralink-section-head">
                            <span>04</span>
                            <div>
                                <h2 style="margin:0 0 4px;font-size:1.08rem;color:#fff;">Configuration GLPI & Gouvernance Applicative</h2>
                                <p style="margin:0;color:#c0cad8;font-size:.88rem;">Hiérarchie d'entités et gestion du contrôle d'accès</p>
                            </div>
                        </div>
                        <article class="oralink-card oralink-card--highlight"><span class="oralink-card-accent">Hygiène initiale</span><h3>Sécurisation post-installation</h3><p style="margin:0;">Changement immédiat des mots de passe par défaut (glpi/glpi, post-only, tech, normal). Désactivation des comptes non utilisés. Suppression du script d'installation pour éliminer l'accès à l'assistant web.</p></article>
                        <div class="oralink-panel"><h3 style="margin:0 0 12px;color:#fff;font-size:.96rem;">Hiérarchie des entités</h3><p style="margin:0 0 10px;color:#d0d9e7;font-size:.91rem;"><strong>Entité Racine (OraLink)</strong> avec récursivité activée pour gérer :</p><ul class="oralink-list" style="margin:0;"><li><strong>Business & Corporate</strong> — Utilisateurs administratifs, managers avec profil Observer local.</li><li><strong>Cloud & Cyber-Ops</strong> — Équipe technique (analystes SOC, DevOps, admins) avec profil Technician pour ticket resolution.</li><li><strong>Software Engineering</strong> — Développeurs avec accès limité aux ressources applicatives.</li></ul></div>
                        <div class="oralink-grid oralink-grid--2">
                            <article class="oralink-card"><span class="oralink-card-accent">Super-Admin</span><h3>Haytham (RSSI)</h3><p>Accès total sur l'entité racine avec récursivité. Gestion de la configuration, des entités, des utilisateurs et des politiques de sécurité.</p></article>
                            <article class="oralink-card"><span class="oralink-card-accent">Observer</span><h3>Raphaël (CEO)</h3><p>Supervision globale des entités avec lecture seule. Accès aux rapports et tableaux de bord sans modification possible.</p></article>
                            <article class="oralink-card"><span class="oralink-card-accent">Technician</span><h3>Équipe Cloud & Cyber-Ops</h3><p>Résolution des tickets, gestion du matériel et des assets. Permissions limitées à leur entité avec héritage autorisé.</p></article>
                            <article class="oralink-card"><span class="oralink-card-accent">Self-Service</span><h3>Utilisateurs finaux</h3><p>Création de tickets pour pannes matériel/logiciel. Suivi de leurs demandes sans accès à la configuration globale.</p></article>
                        </div>
                        <figure class="oralink-figure"><img src="/assets/Realisation/Oralink/Utilisateurs.png" alt="Interface GLPI" class="zoomable-image" loading="lazy"><figcaption><strong>Gestion des utilisateurs GLPI</strong><span>Interface d'administration pour la création, l'attribution de rôles et la gestion des accès par profil (Super-Admin, Observer, Technician, Self-Service).</span></figcaption></figure>
                    </section>

                    <section class="oralink-section-block">
                        <div class="oralink-section-head">
                            <span>05</span>
                            <div>
                                <h2 style="margin:0 0 4px;font-size:1.08rem;color:#fff;">Inventaire du Parc Matériel</h2>
                                <p style="margin:0;color:#c0cad8;font-size:.88rem;">Gestion des actifs et supervision</p>
                            </div>
                        </div>
                        <div class="oralink-grid oralink-grid--2">
                            <article class="oralink-card"><span class="oralink-card-accent">Postes de travail</span><h3>30 Ordinateurs</h3><p>PC renommés nominativement (ex : PC-BUS-MAYA-01) et assignés à la bonne entité/pôle. Suivi du cycle de vie matériel et des mises à jour OS.</p></article>
                            <article class="oralink-card"><span class="oralink-card-accent">Réseau VoIP</span><h3>30 Téléphones IP</h3><p>Appareils Cisco/Avaya tracés individuellement et liés aux profils utilisateurs. Gestion des attributions par pôle et historique de remplacement.</p></article>
                            <article class="oralink-card"><span class="oralink-card-accent">Surveillance</span><h3>18 Caméras IP</h3><p>Caméras de sécurité (6 par pôle) gérées exclusivement par Cloud & Cyber-Ops. Monitoring des locaux et gestion d'accès physique intégrée.</p></article>
                            <article class="oralink-card"><span class="oralink-card-accent">Impression</span><h3>3 Imprimantes réseau</h3><p>Une imprimante par pôle (PRN-BUS-01, PRN-SEC-01, PRN-DEV-01) avec quota de pages et maintenance préventive planifiée.</p></article>
                        </div>
                        <figure class="oralink-figure"><img src="/assets/Realisation/Oralink/Inventaire.png" alt="Inventaire GLPI" class="zoomable-image" loading="lazy"><figcaption><strong>Inventaire du parc informatique</strong><span>Listing complet des actifs (30 ordinateurs, 30 téléphones IP, 18 caméras, 3 imprimantes) avec historique de maintenance et suivi de la durée de vie.</span></figcaption></figure>
                    </section>

                    <section class="oralink-section-block oralink-section-block--closing">
                        <div class="oralink-section-head">
                            <span>06</span>
                            <div>
                                <h2 style="margin:0 0 4px;font-size:1.08rem;color:#fff;">Conclusion</h2>
                                <p style="margin:0;color:#c0cad8;font-size:.88rem;">Synthèse des compétences démontrées</p>
                            </div>
                        </div>
                        <div class="oralink-closing">
                            <p>OraLink me permet de valoriser l'ensemble des compétences requises pour le BTS SIO spécialité SISR : <strong>architecture réseau sécurisée</strong>, <strong>déploiement d'infrastructure serveur</strong>, <strong>administration système</strong> et <strong>gouvernance applicative</strong>.</p>
                            <p>Ce projet montre ma capacité à concevoir une solution cohérente, orientée sécurité et exploitation, adaptée aux besoins réels d'une PME. J'ai démontré des compétences avancées en <strong>segmentation réseau</strong>, <strong>sécurisation initiale</strong>, <strong>gestion d'accès granulaire</strong> et <strong>support aux utilisateurs finaux</strong>.</p>
                        </div>
                    </section>

                    <div id="oralink-lightbox-overlay" class="oralink-lightbox-overlay">
                        <span class="lightbox-close"><i class="fa-solid fa-xmark"></i></span>
                        <img id="oralink-lightbox-img" src="" alt="Aperçu OraLink">
                    </div>
                </article>
            `;

            const lightboxOverlay = detailContent.querySelector('#oralink-lightbox-overlay');
            const lightboxImg = detailContent.querySelector('#oralink-lightbox-img');

            if (lightboxOverlay && lightboxImg) {
                const closeLightbox = () => {
                    lightboxOverlay.classList.remove('active');
                    lightboxOverlay.classList.remove('network-zoom');
                    setTimeout(() => { lightboxImg.src = ''; }, 250);
                };

                detailContent.querySelectorAll('.zoomable-image').forEach(img => {
                    img.addEventListener('click', () => {
                        lightboxImg.src = img.getAttribute('src') || '';
                        lightboxImg.alt = img.getAttribute('alt') || 'Aperçu OraLink';
                        if (img.classList.contains('oralink-network-diagram')) {
                            lightboxOverlay.classList.add('network-zoom');
                        } else {
                            lightboxOverlay.classList.remove('network-zoom');
                        }
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

            requestAnimationFrame(() => {
                scrollModalTop();
                detailView && (detailView.scrollTop = 0);
                detailContent && (detailContent.scrollTop = 0);
                requestAnimationFrame(scrollModalTop);
            });
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
        scrollModalTop();
    }
}