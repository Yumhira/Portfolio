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
        name: 'OraLink', sub: 'Entreprise fictive - projet en préparation',
        color: '#00e5ff',
        desc: "OraLink est un projet fictif en attente de contenu définitif. La carte sert de placeholder pour présenter une future plateforme orientée liaison entre clients et services numériques.",
        tags: ['Prototype', 'Entreprise fictive', 'UI en attente', 'Mise en page'],
        steps: [
            { n: 1, title: 'Statut', text: 'Contenu provisoire affiché en attendant la version finale du projet.' },
            { n: 2, title: 'Intention', text: 'Préparer une future vitrine pour une solution de services et de connexion client.' },
            { n: 3, title: 'Direction', text: 'Conserver une base visuelle sobre, claire et cohérente avec le portfolio.' },
            { n: 4, title: 'À venir', text: 'Les détails réels seront ajoutés dès que le projet fictif sera finalisé.' },
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

        gridView.classList.add('hidden');
        detailView.classList.add('visible');
    }
}