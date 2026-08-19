// ===== 1. CONFIGURATION DES DONNÉES (Centralisation) =====
const SITE_DATA = {
  foundationYear: "[ANNÉE DE FONDATION À CONFIRMER]",
  contact: {
    addressSeat: "[ADRESSE DU SIÈGE À CONFIRMER]",
    addressAnnex: "[ADRESSE DE L'ANNEXE À CONFIRMER]",
    phone: "[TÉLÉPHONE À CONFIRMER]",
    whatsapp: "[NUMÉRO WHATSAPP À CONFIRMER]",
    email: "[EMAIL À CONFIRMER]",
    formspreeEndpoint: "https://formspree.io/f/xeajrdop"
  },
  locations: [
    { name: "Siège principal", address: "[ADRESSE DU SIÈGE À CONFIRMER]", lat: 6.4485, lng: 2.3436 },
    { name: "Annexe (à < 100m)", address: "[ADRESSE DE L'ANNEXE À CONFIRMER]", lat: 6.4480, lng: 2.3440 },
    { name: "Filiale Tokan", address: "[ADRESSE TOKAN À CONFIRMER]", lat: 6.4650, lng: 2.3250 },
    { name: "Filiale Togba", address: "[ADRESSE TOGBA À CONFIRMER]", lat: 6.4750, lng: 2.3150 }
  ],
  team: {
    quote: "« [CITATION DU DIRECTEUR À CONFIRMER - Ex: Notre mission est d'éveiller les consciences et de forger les leaders de demain dans la rigueur et l'excellence.] »",
    directorName: "[NOM DU DIRECTEUR] — Directeur Fondateur",
    members: [
      { role: "Directeur", name: "[NOM DU DIRECTEUR]", photoPlaceholder: "Photo — Directeur" },
      { role: "Censeur", name: "[NOM DU CENSEUR]", photoPlaceholder: "Photo — Censeur" },
      { role: "Préfet de discipline", name: "[NOM DU PRÉFET]", photoPlaceholder: "Photo — Préfet discipline" },
      { role: "Préfet d'étude", name: "[NOM DU PRÉFET D'ÉTUDE]", photoPlaceholder: "Photo — Préfet d'étude" }
    ]
  },
  testimonials: [
    { quote: "[CITATION 1 - Ex: L'encadrement rigoureux a permis à mon enfant de retrouver confiance en lui et de progresser rapidement.]", name: "[NOM DU PARENT 1 À CONFIRMER]", role: "[RÔLE - Ex: Parent d'élève, classe de 3e]" },
    { quote: "[CITATION 2 - Ex: Les valeurs d'excellence et de discipline inculquées m'ont préparé de la meilleure des manières pour le supérieur.]", name: "[NOM DE L'ANCIEN ÉLÈVE À CONFIRMER]", role: "[RÔLE - Ex: Ancien élève, promotion 2023]" },
    { quote: "[CITATION 3 - Ex: Un suivi personnalisé au quotidien et une équipe dirigeante toujours à l'écoute des préoccupations des familles.]", name: "[NOM DU PARENT 2 À CONFIRMER]", role: "[RÔLE - Ex: Parent d'élève, classe de Tle]" },
    { quote: "[CITATION 4 - Ex: Je recommande vivement cet établissement pour le sérieux de ses professeurs et ses excellents résultats aux examens.]", name: "[NOM DU PARENT 3 À CONFIRMER]", role: "[RÔLE - Ex: Parent d'élève, classe de 6e]" }
  ],
  faq: [
    { q: "Quelles sont les conditions d'admission au collège ?", a: "[RÉPONSE À CONFIRMER - Ex: L'admission se fait sur étude de dossier (bulletins de l'année précédente) suivie d'un entretien avec l'élève et ses parents pour évaluer la motivation.]" },
    { q: "Quels sont les horaires habituels de cours ?", a: "[RÉPONSE À CONFIRMER - Ex: Les cours ont lieu de 8h00 à 12h00 et de 15h00 à 18h00, du lundi au vendredi. Des devoirs surveillés peuvent être programmés le samedi matin pour les classes d'examen.]" },
    { q: "L'établissement propose-t-il un service de cantine ?", a: "[RÉPONSE À CONFIRMER - Ex: Oui, un service de restauration scolaire est disponible moyennant une souscription. Les repas sont préparés sur place dans le respect des normes d'hygiène.]" },
    { q: "Y a-t-il un service de transport scolaire ?", a: "[RÉPONSE À CONFIRMER - Ex: Nous travaillons avec des prestataires partenaires pour le ramassage scolaire dans plusieurs quartiers d'Abomey-Calavi et alentours. Les itinéraires sont disponibles au secrétariat.]" },
    { q: "Quelle est la politique de l'école concernant le redoublement ?", a: "[RÉPONSE À CONFIRMER - Ex: En raison de notre exigence de moyenne (12/20), le redoublement est envisagé si l'élève n'atteint pas les prérequis pour le niveau supérieur, toujours en concertation avec les parents.]" },
    { q: "Offrez-vous des bourses ou des facilités de paiement ?", a: "[RÉPONSE À CONFIRMER - Ex: Des facilités de paiement en 3 ou 4 fois sont possibles. De plus, une réduction de scolarité peut être accordée aux familles ayant au moins trois enfants inscrits chez nous.]" }
  ],
  timeline: [
    { year: "[ANNÉE À CONFIRMER]", title: "Fondation du siège", desc: "Création de l'établissement principal et ouverture des premières classes de collège." },
    { year: "[ANNÉE À CONFIRMER]", title: "Ouverture du lycée", desc: "Extension de l'offre éducative pour accompagner nos élèves jusqu'au baccalauréat." },
    { year: "[ANNÉE À CONFIRMER]", title: "Création de l'annexe", desc: "Ouverture d'un second bâtiment à moins de 100 mètres du siège pour dédoubler les effectifs dans des conditions optimales." },
    { year: "[ANNÉE À CONFIRMER]", title: "Filiales Tokan & Togba", desc: "Déploiement de notre modèle de réussite avec l'ouverture de deux nouveaux campus." }
  ],
  fees: {
    college: [
      { level: "6e", amount: "[TARIF 6e EN FCFA]" },
      { level: "5e", amount: "[TARIF 5e EN FCFA]" },
      { level: "4e", amount: "[TARIF 4e EN FCFA]" },
      { level: "3e", amount: "[TARIF 3e EN FCFA]" }
    ],
    lycee: [
      { level: "2de", amount: "[TARIF 2de EN FCFA]" },
      { level: "1re", amount: "[TARIF 1re EN FCFA]" },
      { level: "Tle", amount: "[TARIF Tle EN FCFA]" }
    ]
  },
  activities: [
    { tag: "Sport", title: "Activité sportive", desc: "Plusieurs disciplines au programme pendant l'année scolaire conformément au livret...", photoPlaceholder: "Photo — activité sportive" },
    { tag: "Découverte", title: "Sorties pédagogiques", desc: "Des visites organisées ponctuellement en lien avec les programmes scolaires, permettant aux élèves de relier les notions théoriques à la réalité du terrain.", photoPlaceholder: "Photo — sortie pédagogique" },
    { tag: "Affectivité", title: "Éducation à l'affectivité", desc: "Amener l'enfant à comprendre les méfaits et les pièges de son temps.", photoPlaceholder: "Photo — éducation à l'affectivité" },
    { tag: "Soutien", title: "Devoirs accompagnés", desc: "Deux créneaux trimestriels encadrés par des professeurs. Ces évaluations sont accompagnées de contrôles hebdomadaires tout au long du trimestre.", photoPlaceholder: "Photo — devoirs accompagnés" },
    { tag: "Ouverture", title: "Correspondance scolaire", desc: "Les examens blancs internes se font avec la participation des élèves des trois filiales dont celles sises à Tokan et Togba.", photoPlaceholder: "Photo — correspondance scolaire" }
  ]
};

// ===== 2. OBSERVER GLOBAL (Pour les animations au scroll) =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Observe les éléments statiques initiaux
document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));


// ===== 3. HYDRATATION ET LOGIQUE PRINCIPALE =====
document.addEventListener('DOMContentLoaded', () => {
  
  // A. Injections de texte basique
  const injectText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  injectText('data-foundation-year', SITE_DATA.foundationYear);
  injectText('data-address-seat', SITE_DATA.contact.addressSeat);
  injectText('data-address-annex', SITE_DATA.contact.addressAnnex);
  injectText('data-phone', SITE_DATA.contact.phone);
  injectText('data-email', SITE_DATA.contact.email);

  // B. Frais de scolarité
  const injectFees = (id, data) => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = data.map(fee => `<li><span>${fee.level}</span><strong>${fee.amount} / an</strong></li>`).join('');
    }
  };
  injectFees('fees-college', SITE_DATA.fees.college);
  injectFees('fees-lycee', SITE_DATA.fees.lycee);

  // C. Activités
  const activitiesGrid = document.getElementById('activities-grid');
  if (activitiesGrid) {
    activitiesGrid.innerHTML = SITE_DATA.activities.map(act => `
      <article class="card" data-reveal>
          <div class="placeholder placeholder-photo"><span class="placeholder-icon">📷</span><span>${act.photoPlaceholder}</span></div>
          <span class="card-tag">${act.tag}</span>
          <h3>${act.title}</h3>
          <p>${act.desc}</p>
      </article>
    `).join('');
    activitiesGrid.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
  }

  // D. Équipe dirigeante
  injectText('data-director-quote', SITE_DATA.team.quote);
  injectText('data-director-name', SITE_DATA.team.directorName);

  const teamGrid = document.getElementById('team-grid');
  if (teamGrid) {
    teamGrid.innerHTML = SITE_DATA.team.members.map(member => `
      <article class="card team-card" data-reveal>
          <div class="placeholder placeholder-photo"><span class="placeholder-icon">👤</span><span>${member.photoPlaceholder}</span></div>
          <span class="card-tag">${member.role}</span>
          <h3>${member.name}</h3>
      </article>
    `).join('');
    teamGrid.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
  }

  // E. Témoignages
  const track = document.getElementById('testimonials-track');
  if (track) {
    track.innerHTML = SITE_DATA.testimonials.map(testi => `
      <article class="card testimonial-card">
          <svg class="quote-icon" viewBox="0 0 24 24" width="32" height="32" fill="var(--sky)" aria-hidden="true">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p class="testimonial-quote">"${testi.quote}"</p>
          <div class="testimonial-author"><strong>${testi.name}</strong><span>${testi.role}</span></div>
      </article>
    `).join('');

    const scrollByAmount = () => {
      const card = track.querySelector('.testimonial-card');
      return card ? card.offsetWidth + (parseInt(window.getComputedStyle(track).gap) || 0) : 0;
    };
    document.getElementById('testi-next')?.addEventListener('click', () => track.scrollBy({ left: scrollByAmount(), behavior: 'smooth' }));
    document.getElementById('testi-prev')?.addEventListener('click', () => track.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' }));
  }

  // F. FAQ
  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.innerHTML = SITE_DATA.faq.map(item => `
      <details class="faq-item">
        <summary class="faq-summary">${item.q}<svg class="faq-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></summary>
        <div class="faq-content"><p>${item.a}</p></div>
      </details>
    `).join('');
  }

  // G. Frise chronologique
  const timelineContainer = document.getElementById('history-timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = SITE_DATA.timeline.map((item, index) => `
      <div class="timeline-item" data-reveal style="transition-delay: ${index * 0.15}s">
        <div class="timeline-marker"></div>
        <div class="timeline-content"><span class="timeline-year">${item.year}</span><h3 class="timeline-title">${item.title}</h3><p>${item.desc}</p></div>
      </div>
    `).join('');
    timelineContainer.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
  }

  // H. Bouton flottant WhatsApp
  setTimeout(() => {
    const waNumber = (SITE_DATA.contact.whatsapp || "").replace(/[^0-9+]/g, ''); 
    const waMessage = encodeURIComponent("Bonjour, je souhaite obtenir des renseignements sur le Collège Jean Piaget 1.");
    const waUrl = waNumber ? `https://wa.me/${waNumber}?text=${waMessage}` : '#';

    const waBtn = document.createElement('a');
    waBtn.href = waUrl;
    waBtn.className = 'whatsapp-float';
    waBtn.setAttribute('aria-label', 'Nous contacter sur WhatsApp');
    waBtn.setAttribute('target', '_blank');
    waBtn.setAttribute('rel', 'noopener noreferrer');
    waBtn.innerHTML = `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;
    document.body.appendChild(waBtn);
    requestAnimationFrame(() => waBtn.classList.add('is-visible'));
  }, 1200);

  // I. Carte Leaflet
  const mapContainer = document.getElementById('contact-map');
  if (mapContainer) {
    const initMap = () => {
      if (typeof L === 'undefined') return;
      const map = L.map('contact-map').setView([SITE_DATA.locations[0].lat, SITE_DATA.locations[0].lng], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(map);
      SITE_DATA.locations.forEach(loc => {
        L.marker([loc.lat, loc.lng]).addTo(map).bindPopup(`<strong>${loc.name}</strong><br>${loc.address}`);
      });
    };
    const mapObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initMap();
          mapObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "200px" });
    mapObserver.observe(mapContainer);
  }

  // J. Formulaire de contact Formspree
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const endpoint = SITE_DATA.contact.formspreeEndpoint;
      if (!endpoint || endpoint.includes('[COLLE ICI')) {
        formStatus.style.color = '#e53e3e';
        formStatus.textContent = "Erreur système : le point de contact n'est pas configuré.";
        return;
      }
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      formStatus.textContent = '';
      
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          formStatus.style.color = 'var(--primary-dk)';
          formStatus.textContent = 'Message envoyé avec succès. Nous vous répondrons très vite.';
          contactForm.reset();
        } else throw new Error("Erreur inattendue");
      } catch (error) {
        formStatus.style.color = '#e53e3e';
        formStatus.textContent = "Une erreur est survenue lors de l'envoi. Veuillez utiliser WhatsApp ou nous appeler.";
      } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }
    });
  }

  // K. Effet Tilt 3D au survol de la souris
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !window.matchMedia('(hover: none)').matches && navigator.maxTouchPoints === 0) {
    document.querySelectorAll('.card, .fees-card').forEach(card => {
      card.addEventListener('mouseenter', () => card.style.transition = 'none');
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const rotateY = (((e.clientX - rect.left) / rect.width) * 2 - 1) * 7;
        const rotateX = (((e.clientY - rect.top) / rect.height) * 2 - 1) * -7;
        card.style.transform = `perspective(1000px) scale3d(1.02, 1.02, 1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transition = '';
        card.style.transform = '';
      });
    });
  }

  // L. Parallax pseudo-3D sur les blocs "Escalier" de la section Hero
  const heroBlocks = document.querySelectorAll('.block');
  
  if (heroBlocks.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      // Optimisation performance : on ne calcule que si le Hero est visible
      if (scrollY < window.innerHeight) {
        heroBlocks.forEach((block, index) => {
          // L'index va de 0 (6e) à 6 (Tle).
          // Plus l'index est grand, plus le facteur vitesse augmente : les grands blocs bougent plus vite !
          const speed = 0.03 + (index * 0.025); 
          const offset = scrollY * speed;
          
          // Mise à jour de la variable CSS locale, c'est ce qui permet 
          // au Parallax de ne pas "casser" l'animation d'apparition initiale
          block.style.setProperty('--parallax', `-${offset}px`);
        });
      }
    }, { passive: true }); // { passive: true } garantit que le scroll reste ultra-fluide à 60 fps
  }
});


// ===== 4. THREE.JS (Au chargement complet pour ne pas bloquer la page) =====
window.addEventListener('load', () => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const heroSection = canvas.parentElement;
  let isSlowConnection = false;
  if ('connection' in navigator) {
    if (navigator.connection.saveData === true || ['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType)) isSlowConnection = true;
  }

  if (window.innerWidth <= 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches || isSlowConnection) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / heroSection.offsetHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, heroSection.offsetHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 

  const blocksGroup = new THREE.Group();
  const colors = [0x8FB4E0, 0x6C9CD4, 0x1D4F91, 0x16243D, 0x2B6F63, 0x1E4F46, 0xFFD700];
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  
  for(let i = 0; i < 7; i++) {
    const cube = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: colors[i], transparent: true, opacity: 0.12, roughness: 0.2, metalness: 0.1 }));
    cube.position.set(Math.sin(i * 1.1) * 1.4, (i * 0.45) - 1.5, Math.cos(i * 1.1) * 1.4);
    cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    cube.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry), new THREE.LineBasicMaterial({ color: colors[i], transparent: true, opacity: 0.35 })));
    blocksGroup.add(cube);
  }
  
  blocksGroup.position.set(4, 0.5, -8);
  scene.add(blocksGroup);
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);
  camera.position.z = 6;

  let animId;
  const animate = () => {
    animId = requestAnimationFrame(animate);
    blocksGroup.rotation.y -= 0.0015;
    blocksGroup.rotation.x += 0.0008;
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      cancelAnimationFrame(animId);
      renderer.clear();
      return;
    }
    camera.aspect = window.innerWidth / heroSection.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, heroSection.offsetHeight);
  });
});


// ===== 5. COMPORTEMENTS UI DE BASE =====

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if(navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Progress bar
const progressBar = document.getElementById('progressBar');
if(progressBar) {
  const updateProgressBar = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', updateProgressBar);
  updateProgressBar();
}

// Animated stat counters
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / 1200, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));

// Exam results chart
const examChart = document.querySelector('.exam-chart');
if (examChart) {
  const examObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        examObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  examObserver.observe(examChart);
}

// Back to top
document.getElementById('backToTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));