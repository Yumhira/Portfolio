// Nouveau contenu HTML pour OraLink - À copier dans realisation-modal.js
// Remplace le bloc detailContent.innerHTML pour id === 'oralink'

detailContent.innerHTML = `
    <article class="oralink-article">
        <!-- HERO SECTION -->
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
                <h1 style="margin: 0; font-size: clamp(1.8rem, 3vw, 2.8rem); color: #fff; line-height: 1.1; letter-spacing: -.03em; max-width: 16ch;">Architecture réseau sécurisée et gouvernance GLPI</h1>
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
                <article class="oralink-kpi-card">
                    <strong>30</strong>
                    <span>Collaborateurs</span>
                </article>
                <article class="oralink-kpi-card">
                    <strong>3</strong>
                    <span>Pôles d'activité</span>
                </article>
                <article class="oralink-kpi-card">
                    <strong>3</strong>
                    <span>VLANs isolés</span>
                </article>
                <article class="oralink-kpi-card">
                    <strong>18</strong>
                    <span>Caméras IP</span>
                </article>
            </aside>
        </header>

        <!-- SECTION 1: CONTEXTE & RÔLE -->
        <section class="oralink-section-block">
            <div class="oralink-section-head">
                <span>01</span>
                <div>
                    <h2 style="margin: 0 0 4px; font-size: 1.08rem; color: #fff;">Contexte du Projet & Rôle</h2>
                    <p style="margin: 0; color: #c0cad8; font-size: .88rem;">RSSI et super-administrateur de l'infrastructure</p>
                </div>
            </div>
            <div class="oralink-grid oralink-grid--2">
                <article class="oralink-card">
                    <span class="oralink-card-accent">Entreprise</span>
                    <h3>OraLink</h3>
                    <p>Agence fictive d'audit en cybersécurité avec une gouvernance structurée autour de la sécurité, l'innovation et le support technique.</p>
                </article>
                <article class="oralink-card">
                    <span class="oralink-card-accent">Mon rôle</span>
                    <h3>RSSI & Super-Admin</h3>
                    <p>Responsable Sécurité des Systèmes d'Information et administrateur global avec récursivité complète sur l'infrastructure et l'application.</p>
                </article>
            </div>
            <div class="oralink-panel">
                <h3 style="margin: 0 0 12px; color: #fff; font-size: .96rem;">Structure organisationnelle</h3>
                <p style="margin: 0 0 10px;">OraLink regroupe 30 collaborateurs répartis équitablement en trois pôles complémentaires :</p>
                <ul class="oralink-list" style="margin-bottom: 0;">
                    <li><strong>Business & Corporate</strong> — 10 personnes : administration, direction, RH, finance et relation client.</li>
                    <li><strong>Cloud & Cyber-Ops</strong> — 10 personnes : sécurité, DevOps, systèmes, réseau et supervision SOC.</li>
                    <li><strong>Software Engineering</strong> — 10 personnes : développement, UX/UI, QA et construction des outils métiers.</li>
                </ul>
            </div>
        </section>

        <!-- SECTION 2: ARCHITECTURE RÉSEAU -->
        <section class="oralink-section-block">
            <div class="oralink-section-head">
                <span>02</span>
                <div>
                    <h2 style="margin: 0 0 4px; font-size: 1.08rem; color: #fff;">Architecture Réseau Packet Tracer</h2>
                    <p style="margin: 0; color: #c0cad8; font-size: .88rem;">Segmentation physique et logique des flux</p>
                </div>
            </div>

            <!-- Grille VLANs -->
            <div class="oralink-grid oralink-grid--3">
                <article class="oralink-card oralink-card--vlan">
                    <span class="oralink-card-accent">VLAN 10</span>
                    <h3>Business & Corporate</h3>
                    <p>Pôle administratif, direction, RH, finance et relation client avec accès contrôlé au réseau principal.</p>
                    <div class="oralink-subline">192.168.10.0/24</div>
                </article>
                <article class="oralink-card oralink-card--vlan">
                    <span class="oralink-card-accent">VLAN 20</span>
                    <h3>Cloud & Cyber-Ops</h3>
                    <p>Pôle sécurité, DevOps et systèmes avec accès privilégié aux services critiques et supervisione SOC.</p>
                    <div class="oralink-subline">192.168.20.0/24</div>
                </article>
                <article class="oralink-card oralink-card--vlan">
                    <span class="oralink-card-accent">VLAN 30</span>
                    <h3>Software Engineering</h3>
                    <p>Pôle développement, UX/UI et QA avec environnement de test et d'intégration continue isolé.</p>
                    <div class="oralink-subline">192.168.30.0/24</div>
                </article>
            </div>

            <!-- Image Packet Tracer -->
            <figure class="oralink-figure">
                <img src="https://via.placeholder.com/1200x600/0f172a/0ea5e9?text=Schéma+Packet+Tracer+OraLink" alt="Schéma réseau Packet Tracer" class="zoomable-image" loading="lazy">
                <figcaption>
                    <strong>Schéma global</strong>
                    <span>Routeur central avec 3 câbles physiques distincts, switchs par pôle, postes utilisateurs, téléphones IP et caméras de surveillance.</span>
                </figcaption>
            </figure>

            <!-- Timeline technique -->
            <div class="oralink-timeline">
                <article class="oralink-timeline-item">
                    <span class="oralink-timeline-step">01</span>
                    <div>
                        <h3>Segmentation physique</h3>
                        <p>Au lieu du "router-on-a-stick", j'ai configuré 3 câbles physiques distincts depuis le routeur vers des ports dédiés. Cela garantit une séparation véritable et une gestion indépendante de la bande passante par pôle.</p>
                    </div>
                </article>
                <article class="oralink-timeline-item">
                    <span class="oralink-timeline-step">02</span>
                    <div>
                        <h3>Serveur DHCP</h3>
                        <p>Attribution automatique des adresses IP (192.168.x.x) à chaque zone pour éviter les erreurs de configuration manuelle et maintenir une cohérence réseau optimale.</p>
                    </div>
                </article>
                <article class="oralink-timeline-item">
                    <span class="oralink-timeline-step">03</span>
                    <div>
                        <h3>Équipements réseau</h3>
                        <p>Postes de travail (30 PC), téléphones VoIP (30), caméras IP (18, pour Cloud & Cyber-Ops), imprimantes réseau (3, une par pôle).</p>
                    </div>
                </article>
                <article class="oralink-timeline-item">
                    <span class="oralink-timeline-step">04</span>
                    <div>
                        <h3>Continuité de service</h3>
                        <p>Architecture en arbre avec redondance partielle et monitoring continu des liens inter-VLAN pour garantir la disponibilité des services critiques.</p>
                    </div>
                </article>
            </div>
        </section>

        <!-- SECTION 3: DÉPLOIEMENT SERVEUR -->
        <section class="oralink-section-block">
            <div class="oralink-section-head">
                <span>03</span>
                <div>
                    <h2 style="margin: 0 0 4px; font-size: 1.08rem; color: #fff;">Déploiement Serveur & Socle Linux</h2>
                    <p style="margin: 0; color: #c0cad8; font-size: .88rem;">Stack LAMP et préparation applicative</p>
                </div>
            </div>

            <!-- Cartes infra -->
            <div class="oralink-grid oralink-grid--2">
                <article class="oralink-card">
                    <span class="oralink-card-accent">Virtualisation</span>
                    <h3>Machine Virtuelle</h3>
                    <p>VM Linux (Debian/Ubuntu Server) exécutée dans VirtualBox pour isoler l'environnement applicatif et faciliter les tests, sauvegardes et migrations.</p>
                </article>
                <article class="oralink-card">
                    <span class="oralink-card-accent">Stack LAMP</span>
                    <h3>Services applicatifs</h3>
                    <p><strong>Apache</strong> (serveur web), <strong>MariaDB/MySQL</strong> (base de données), <strong>PHP</strong> (langage) avec extensions pour GLPI (GD, intl, json, etc.).</p>
                </article>
            </div>

            <!-- Images placeholders -->
            <div class="oralink-gallery">
                <figure class="oralink-shot">
                    <img src="https://via.placeholder.com/500x350/0f172a/0ea5e9?text=VirtualBox+Settings" alt="Paramètres VirtualBox" class="zoomable-image" loading="lazy">
                    <figcaption>
                        <strong>Configuration VirtualBox</strong>
                        <span>Allocation CPU, RAM (4GB+) et disque (50GB) pour la VM Linux.</span>
                    </figcaption>
                </figure>
                <figure class="oralink-shot">
                    <img src="https://via.placeholder.com/500x350/0f172a/0ea5e9?text=Terminal+Ubuntu+Session" alt="Session Ubuntu" class="zoomable-image" loading="lazy">
                    <figcaption>
                        <strong>Environnement Linux</strong>
                        <span>Terminal de configuration avec les paquets Apache, PHP et MariaDB installés.</span>
                    </figcaption>
                </figure>
            </div>

            <!-- Processus installation -->
            <div class="oralink-panel oralink-panel--image">
                <h3 style="margin: 0 0 12px; color: #fff; font-size: .96rem;">Étapes de déploiement</h3>
                <ul class="oralink-list" style="margin: 0;">
                    <li>Installation des dépendances : <code style="background: rgba(15,23,42,.6); padding: 2px 6px; border-radius: 4px; font-size: .85rem;">apt update && apt install apache2 mariadb-server php php-*</code></li>
                    <li>Création de la base de données GLPI avec utilisateur dédié et privilèges limités.</li>
                    <li>Téléchargement et extraction de GLPI 10.x dans <code style="background: rgba(15,23,42,.6); padding: 2px 6px; border-radius: 4px; font-size: .85rem;">/var/www/html/glpi</code>.</li>
                    <li>Attribution des droits : <code style="background: rgba(15,23,42,.6); padding: 2px 6px; border-radius: 4px; font-size: .85rem;">chown -R www-data:www-data /var/www/html/glpi</code>.</li>
                    <li>Configuration Apache (Virtual Host) avec SSL/TLS (HTTPS).</li>
                    <li>Finalisation via interface web (<code style="background: rgba(15,23,42,.6); padding: 2px 6px; border-radius: 4px; font-size: .85rem;">localhost/glpi/install.php</code>) avec suppression du script après installation.</li>
                </ul>
            </div>
        </section>

        <!-- SECTION 4: GLPI & GOUVERNANCE -->
        <section class="oralink-section-block">
            <div class="oralink-section-head">
                <span>04</span>
                <div>
                    <h2 style="margin: 0 0 4px; font-size: 1.08rem; color: #fff;">Configuration GLPI & Gouvernance Applicative</h2>
                    <p style="margin: 0; color: #c0cad8; font-size: .88rem;">Hiérarchie d'entités et gestion du contrôle d'accès</p>
                </div>
            </div>

            <!-- Sécurisation -->
            <article class="oralink-card oralink-card--highlight">
                <span class="oralink-card-accent">Hygiène initiale</span>
                <h3>Sécurisation post-installation</h3>
                <p style="margin: 0;">Changement immédiat des mots de passe par défaut (glpi/glpi, post-only, tech, normal). Désactivation des comptes non utilisés. Suppression du script d'installation pour éliminer l'accès à l'assistant web.</p>
            </article>

            <!-- Arborescence entités -->
            <div class="oralink-panel">
                <h3 style="margin: 0 0 12px; color: #fff; font-size: .96rem;">Hiérarchie des entités</h3>
                <p style="margin: 0 0 10px; color: #d0d9e7; font-size: .91rem;"><strong>Entité Racine (OraLink)</strong> avec récursivité activée pour gérer :</p>
                <ul class="oralink-list" style="margin: 0;">
                    <li><strong>Business & Corporate</strong> — Utilisateurs administratifs, managers avec profil Observer local.</li>
                    <li><strong>Cloud & Cyber-Ops</strong> — Équipe technique (analystes SOC, DevOps, admins) avec profil Technician pour ticket resolution.</li>
                    <li><strong>Software Engineering</strong> — Développeurs avec accès limité aux ressources applicatives.</li>
                </ul>
            </div>

            <!-- Profils & permissions -->
            <div class="oralink-grid oralink-grid--2">
                <article class="oralink-card">
                    <span class="oralink-card-accent">Super-Admin</span>
                    <h3>Haytham (RSSI)</h3>
                    <p>Accès total sur l'entité racine avec récursivité. Gestion de la configuration, des entités, des utilisateurs et des politiques de sécurité.</p>
                </article>
                <article class="oralink-card">
                    <span class="oralink-card-accent">Observer</span>
                    <h3>Raphaël (CEO)</h3>
                    <p>Supervision globale des entités avec lecture seule. Accès aux rapports et tableaux de bord sans modification possible.</p>
                </article>
                <article class="oralink-card">
                    <span class="oralink-card-accent">Technician</span>
                    <h3>Équipe Cloud & Cyber-Ops</h3>
                    <p>Résolution des tickets, gestion du matériel et des assets. Permissions limitées à leur entité avec héritage autorisé.</p>
                </article>
                <article class="oralink-card">
                    <span class="oralink-card-accent">Self-Service</span>
                    <h3>Utilisateurs finaux</h3>
                    <p>Création de tickets pour pannes matériel/logiciel. Suivi de leurs demandes sans accès à la configuration globale.</p>
                </article>
            </div>

            <!-- Image GLPI -->
            <figure class="oralink-figure">
                <img src="https://via.placeholder.com/1200x600/0f172a/0ea5e9?text=Interface+GLPI+OraLink" alt="Interface GLPI" class="zoomable-image" loading="lazy">
                <figcaption>
                    <strong>Tableau de bord GLPI</strong>
                    <span>Vue administrateur avec gestion des entités, utilisateurs, tickets actifs et inventaire du parc matériel.</span>
                </figcaption>
            </figure>

            <!-- Règles d'affectation -->
            <div class="oralink-panel">
                <h3 style="margin: 0 0 12px; color: #fff; font-size: .96rem;">Règles d'affectation automatique</h3>
                <p style="margin: 0 0 10px; color: #d0d9e7; font-size: .91rem;">Un ticket VPN créé par un utilisateur du pôle Cloud & Cyber-Ops est automatiquement assigné au groupe d'administrateurs systèmes de cette entité pour résolution rapide.</p>
                <div class="oralink-note" style="margin: 0;">Cette logique de routing automatique réduit les délais de traitement et garantit que chaque ticket arrive au bon groupe de compétences.</div>
            </div>
        </section>

        <!-- SECTION 5: INVENTAIRE MATÉRIEL -->
        <section class="oralink-section-block">
            <div class="oralink-section-head">
                <span>05</span>
                <div>
                    <h2 style="margin: 0 0 4px; font-size: 1.08rem; color: #fff;">Inventaire du Parc Matériel</h2>
                    <p style="margin: 0; color: #c0cad8; font-size: .88rem;">Gestion des actifs et supervision</p>
                </div>
            </div>

            <!-- Cartes inventaire -->
            <div class="oralink-grid oralink-grid--2">
                <article class="oralink-card">
                    <span class="oralink-card-accent">Postes de travail</span>
                    <h3>30 Ordinateurs</h3>
                    <p>PC renommés nominativement (ex : PC-BUS-MAYA-01) et assignés à la bonne entité/pôle. Suivi du cycle de vie matériel et des mises à jour OS.</p>
                </article>
                <article class="oralink-card">
                    <span class="oralink-card-accent">Réseau VoIP</span>
                    <h3>30 Téléphones IP</h3>
                    <p>Appareils Cisco/Avaya tracés individuellement et liés aux profils utilisateurs. Gestion des attributions par pôle et historique de remplacement.</p>
                </article>
                <article class="oralink-card">
                    <span class="oralink-card-accent">Surveillance</span>
                    <h3>18 Caméras IP</h3>
                    <p>Caméras de sécurité (6 par pôle) gérées exclusivement par Cloud & Cyber-Ops. Monitoring des locaux et gestion d'accès physique intégrée.</p>
                </article>
                <article class="oralink-card">
                    <span class="oralink-card-accent">Impression</span>
                    <h3>3 Imprimantes réseau</h3>
                    <p>Une imprimante par pôle (PRN-BUS-01, PRN-SEC-01, PRN-DEV-01) avec quota de pages et maintenance préventive planifiée.</p>
                </article>
            </div>

            <!-- Image inventaire -->
            <figure class="oralink-figure">
                <img src="https://via.placeholder.com/1200x600/0f172a/0ea5e9?text=Inventaire+GLPI" alt="Inventaire GLPI" class="zoomable-image" loading="lazy">
                <figcaption>
                    <strong>Module inventaire</strong>
                    <span>Listes des périphériques, caméras IP, ordinateurs et téléphones avec statut, localisation et responsable assigné.</span>
                </figcaption>
            </figure>
        </section>

        <!-- CONCLUSION -->
        <section class="oralink-section-block oralink-section-block--closing">
            <div class="oralink-section-head">
                <span>06</span>
                <div>
                    <h2 style="margin: 0 0 4px; font-size: 1.08rem; color: #fff;">Conclusion</h2>
                    <p style="margin: 0; color: #c0cad8; font-size: .88rem;">Synthèse des compétences démontrées</p>
                </div>
            </div>
            <div class="oralink-closing">
                <p>OraLink me permet de valoriser l'ensemble des compétences requises pour le BTS SIO spécialité SISR : <strong>architecture réseau sécurisée</strong>, <strong>déploiement d'infrastructure serveur</strong>, <strong>administration système</strong> et <strong>gouvernance applicative</strong>.</p>
                <p>Ce projet montre ma capacité à concevoir une solution cohérente, orientée sécurité et exploitation, adaptée aux besoins réels d'une PME. J'ai démontré des compétences avancées en <strong>segmentation réseau</strong>, <strong>sécurisation initiale</strong>, <strong>gestion d'accès granulaire</strong> et <strong>support aux utilisateurs finaux</strong>.</p>
            </div>
        </section>

        <!-- Lightbox -->
        <div id="oralink-lightbox-overlay" class="oralink-lightbox-overlay">
            <span class="lightbox-close"><i class="fa-solid fa-xmark"></i></span>
            <img id="oralink-lightbox-img" src="" alt="Aperçu OraLink">
        </div>
    </article>
`;

// Lightbox handler
const lightboxOverlay = detailContent.querySelector('#oralink-lightbox-overlay');
const lightboxImg = detailContent.querySelector('#oralink-lightbox-img');

if (lightboxOverlay && lightboxImg) {
    const closeLightbox = () => {
        lightboxOverlay.classList.remove('active');
        setTimeout(() => { lightboxImg.src = ''; }, 200);
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
            document.removeEventListener('keydown', onOraLinkEscape);
        }
    });
}
