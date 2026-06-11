/* =============================================
   SECURE MOBILE INDIA — script.js v3
   Leaders in Ballistic Protection since 1995
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV BEHAVIOUR ── */
  const nav = document.getElementById('nav');
  const isInnerPage = document.body.classList.contains('inner-page');

  const handleNavScroll = () => {
    if (!nav) return;
    if (isInnerPage) {
      nav.classList.add('scrolled');
      nav.classList.remove('transparent', 'white-nav');
    } else {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
        nav.classList.remove('transparent');
      } else {
        nav.classList.remove('scrolled');
        nav.classList.add('transparent');
      }
    }
  };

  if (nav) {
    isInnerPage ? nav.classList.add('scrolled') : nav.classList.add('transparent');
    window.addEventListener('scroll', handleNavScroll, { passive: true });
  }

  /* ── MEGA MENU (desktop) ── */
  // Preview data keyed by data-preview attribute
  const previewData = {
    // Company
    'co-about': { tag: 'Company', title: 'About SMI', text: '30+ years of ballistic protection engineering — our story, mission, and values.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=640&q=80' },
    'co-innovations': { tag: 'Company', title: 'Our Innovations', text: 'Pioneering indigenous defence technology since 1995 — breakthroughs that protect India.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&q=80' },
    'co-rnd': { tag: 'Company', title: 'Research & Development', text: 'In-house R&D lab driving next-generation ballistic and blast mitigation solutions.', img: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=640&q=80' },
    'co-facility': { tag: 'Company', title: 'Our Facility', text: 'State-of-the-art manufacturing campus in Nangloi, Delhi — 100% made in India.', img: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=640&q=80' },
    'co-certs': { tag: 'Company', title: 'Certifications', text: 'DRDO/TBRL approved. MHA certified. Internationally validated ballistic standards.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&q=80' },
    // Services
    'sv-auto': { tag: 'Services', title: 'Automotive Armouring', text: 'Precision vehicle armouring from B4 to VR10 — engineered and fabricated in India.', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=640&q=80' },
    'sv-br': { tag: 'Services', title: 'BR Products', text: 'Comprehensive bullet-resistant product range for personal and static protection.', img: './assets/br-products.jpg' },
    'sv-arch': { tag: 'Services', title: 'Architectural Armouring', text: 'Fortifying buildings, perimeters, and critical infrastructure against ballistic and blast threats.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&q=80' },
    // BR sub-products
    'br-jackets': { tag: 'BR Products', title: 'BR Jackets', text: 'NIJ Level IIIA/III certified body armour for police, paramilitary, and VIP protection.', img: './assets/br-jackets.jpg' },
    'br-helmets': { tag: 'BR Products', title: 'BR Helmets', text: 'High-cut and PASGT-style ballistic helmets for front-line security forces.', img: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=640&q=80' },
    'br-shields': { tag: 'BR Products', title: 'BR Shields', text: 'Handheld Level III+ BR Shields for police entry teams and VIP close protection.', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=640&q=80' },
    'br-cabin': { tag: 'BR Products', title: 'BR Sentry Cabins', text: 'Steel-core BR doors for government offices, banks, and high-security facilities.', img: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=640&q=80' },
    'br-lecture': { tag: 'BR Products', title: 'BR Lecture Stands', text: 'Multi-laminate transparent armour for vehicles, teller windows, and secure rooms.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&q=80' },
    'br-cabins': { tag: 'BR Products', title: 'Sentry Posts & Guard Cabins', text: 'Pre-fabricated bulletproof guard posts and sentry boxes for perimeter security.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=640&q=80' },
    'br-morcha': { tag: 'BR Products', title: 'BR Morcha & Cladding', text: 'Modular wall panels and architectural cladding for ballistic protection of spaces.', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=640&q=80' },
    'br-tower': { tag: 'BR Products', title: 'BR Observation Tower', text: 'Bank teller windows, reception counters, and payment screens with ballistic glass.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&q=80' },
    // Blast Protection
    'bp-all': { tag: 'Blast Protection', title: 'All Blast Products', text: 'India\'s most comprehensive bomb & blast mitigation range — TBRL and MHA certified.', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=640&q=80' },
    'bp-bsb': { tag: 'Blast Protection', title: 'Bomb Suppression Blanket', text: 'TBRL-certified BSB & BCR system — stops 17-grain fragments at V50 415–660 m/s.', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=640&q=80' },
    'bp-basket': { tag: 'Blast Protection', title: 'Bomb Basket', text: 'Ballistic-grade EOD containment basket for IED transport during bomb disposal operations.', img: 'https://images.unsplash.com/photo-1558618047-f8616ee58a6a?w=640&q=80' },
    'bp-bcb': { tag: 'Blast Protection', title: 'Blast Containment Bin', text: 'Public-area blast containment bin tested to MHA 2013 — rated for 2 KG TNT equivalent.', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=640&q=80' },
    'bp-bunker': { tag: 'Blast Protection', title: 'Tactical Bunker', text: 'Blast-resistant bulletproof bunkers deployed by IAF, Indian Navy, ISRO, and police forces.', img: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=640&q=80' },
    'bp-bvcs': { tag: 'Blast Protection', title: 'BVCS', text: 'Blast & Vehicle Check Screen — Armox steel checkpoint protection for vehicle search operations.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&q=80' },
    // Architectural sub
    'arch-building': { tag: 'Architectural', title: 'Infrastructure Armouring', text: 'End-to-end ballistic hardening of walls, openings, and critical infrastructure facilities.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&q=80' },
    'arch-tunnel': { tag: 'Architectural', title: 'Anti Drone Tunnel', text: 'Hardened passage tunnels with counter-UAS technology for high-value asset protection.', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=640&q=80' },
    'arch-shelter': { tag: 'Architectural', title: 'Anti Drone Shelter', text: 'Deployable and permanent shelters offering multi-layer drone and ballistic protection.', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=640&q=80' },
    'arch-tower': { tag: 'Architectural', title: 'Blast Resistant Observation Towers', text: '360° protected observation towers — deployed at PMO, Gujarat CM residence, and more.', img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=640&q=80' },
  };

  // Initialise preview panels
  document.querySelectorAll('.nav-megamenu').forEach(menu => {
    const imgEl = menu.querySelector('.megamenu-preview-img img');
    const tagEl = menu.querySelector('.megamenu-preview-tag');
    const titleEl = menu.querySelector('.megamenu-preview-title');
    const textEl = menu.querySelector('.megamenu-preview-text');
    if (!imgEl) return;

    const links = menu.querySelectorAll('[data-preview]');
    // Set default to first link
    const setPreview = key => {
      const d = previewData[key];
      if (!d) return;
      imgEl.src = d.img;
      imgEl.alt = d.title;
      if (tagEl) tagEl.textContent = d.tag;
      if (titleEl) titleEl.textContent = d.title;
      if (textEl) textEl.textContent = d.text;
    };

    if (links.length) setPreview(links[0].dataset.preview);

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        links.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
        setPreview(link.dataset.preview);
      });
    });
  });

  /* ── MEGA MENU HOVER — JS-controlled, gap-safe ── */
  const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
  dropdownItems.forEach(item => {
    const menu = item.querySelector('.nav-megamenu');
    if (!menu) return;
    let hideTimer;

    const openMenu = () => {
      clearTimeout(hideTimer);
      dropdownItems.forEach(other => {
        if (other !== item) other.classList.remove('dropdown-open');
      });
      item.classList.add('dropdown-open');
    };

    const scheduleClose = () => {
      hideTimer = setTimeout(() => item.classList.remove('dropdown-open'), 150);
    };

    item.addEventListener('mouseenter', openMenu);
    item.addEventListener('mouseleave', scheduleClose);
    menu.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    menu.addEventListener('mouseleave', scheduleClose);
  });

  // Close on outside click or Escape
  document.addEventListener('click', e => {
    if (!e.target.closest('.has-dropdown')) {
      dropdownItems.forEach(item => item.classList.remove('dropdown-open'));
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') dropdownItems.forEach(item => item.classList.remove('dropdown-open'));
  });

  // Sub-menu toggles inside mega menu
  document.querySelectorAll('.megamenu-sub-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const sub = btn.closest('.megamenu-link-group').querySelector('.megamenu-sub');
      const arrow = btn.querySelector('.megamenu-link-arrow');
      const isOpen = sub && sub.classList.contains('open');
      // Close all siblings
      btn.closest('.megamenu-col').querySelectorAll('.megamenu-sub').forEach(s => s.classList.remove('open'));
      btn.closest('.megamenu-col').querySelectorAll('.megamenu-link-arrow').forEach(a => a.classList.remove('rotated'));
      if (!isOpen && sub) {
        sub.classList.add('open');
        if (arrow) arrow.classList.add('rotated');
      }
    });
  });

  /* ── MOBILE HAMBURGER ── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  let menuOpen = false;

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      menuOpen = !menuOpen;
      hamburger.classList.toggle('open', menuOpen);
      mobileMenu.classList.toggle('open', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
      if (!isInnerPage && nav) {
        nav.classList.toggle('scrolled', menuOpen);
        nav.classList.toggle('transparent', !menuOpen && window.scrollY <= 80);
      }
    });

    mobileMenu.querySelectorAll('a.mob-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        handleNavScroll();
      });
    });
  }

  /* ── MOBILE ACCORDION ── */
  document.querySelectorAll('.mob-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const isOpen = trigger.classList.contains('open');
      // Close siblings at same level
      const parent = trigger.parentElement;
      parent.querySelectorAll(':scope > .mob-accordion-trigger.open').forEach(t => {
        t.classList.remove('open');
        if (t.nextElementSibling) t.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        trigger.classList.add('open');
        if (content) content.classList.add('open');
      }
    });
  });

  document.querySelectorAll('.mob-sub-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const isOpen = trigger.classList.contains('open');
      const parent = trigger.parentElement;
      parent.querySelectorAll(':scope > .mob-sub-trigger.open').forEach(t => {
        t.classList.remove('open');
        if (t.nextElementSibling) t.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        trigger.classList.add('open');
        if (content) content.classList.add('open');
      }
    });
  });

  /* ── ACTIVE NAV LINK ── */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-page]').forEach(el => {
    if (el.dataset.page === currentFile) el.classList.add('active');
  });

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || 0);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(el => {
      if (!el.dataset.delay) {
        const siblings = Array.from(el.parentElement.children)
          .filter(c => c.classList.contains('reveal') || c.classList.contains('reveal-left') || c.classList.contains('reveal-right'));
        const idx = siblings.indexOf(el);
        el.dataset.delay = idx * 90;
      }
      revealObs.observe(el);
    });
  }

  /* ── COUNTER ANIMATION ── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const dur = 1800, steps = Math.ceil(dur / 16), inc = target / steps;
        let cur = 0;
        const timer = setInterval(() => {
          cur += inc;
          if (cur >= target) { cur = target; clearInterval(timer); }
          el.textContent = Math.floor(cur) + suffix;
        }, 16);
        counterObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObs.observe(c));
  }

  /* ── FILTER + PAGINATION (vehicles) ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterCards = Array.from(document.querySelectorAll('[data-category]'));
  const brandSelect = document.getElementById('brandSelect');
  const pagination = document.getElementById('vehPagination');
  const PAGE_SIZE = 9;
  let currentCat = 'all';
  let currentBrand = '';
  let currentPage = 1;

  function getFiltered() {
    return filterCards.filter(card => {
      const catOk = currentCat === 'all' || card.dataset.category.split(' ').includes(currentCat);
      const brandOk = !currentBrand || card.dataset.brand === currentBrand;
      return catOk && brandOk;
    });
  }

  function renderPage() {
    const filtered = getFiltered();
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const start = (currentPage - 1) * PAGE_SIZE;

    filterCards.forEach(c => { c.style.display = 'none'; c.style.opacity = '0'; });
    filtered.slice(start, start + PAGE_SIZE).forEach(c => { c.style.display = ''; c.style.opacity = '1'; });

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (!pagination) return;
    if (totalPages <= 1) { pagination.innerHTML = ''; return; }

    const prev = currentPage - 1;
    const next = currentPage + 1;
    let html = '';

    html += `<button class="veh-page-btn" data-p="${prev}" ${currentPage === 1 ? 'disabled' : ''}>&larr; Prev</button>`;

    for (let i = 1; i <= totalPages; i++) {
      if (totalPages > 7 && i > 2 && i < totalPages - 1 && Math.abs(i - currentPage) > 1) {
        if (i === 3 || i === totalPages - 2) html += `<span class="veh-page-ellipsis">&hellip;</span>`;
        continue;
      }
      html += `<button class="veh-page-btn ${i === currentPage ? 'is-active' : ''}" data-p="${i}">${i}</button>`;
    }

    html += `<button class="veh-page-btn" data-p="${next}" ${currentPage === totalPages ? 'disabled' : ''}>Next &rarr;</button>`;

    pagination.innerHTML = html;
    pagination.querySelectorAll('.veh-page-btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.p);
        renderPage();
        document.querySelector('.vehicles-page-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (brandSelect) brandSelect.value = '';
        currentCat = btn.dataset.filter;
        currentBrand = '';
        currentPage = 1;
        renderPage();
      });
    });
  }

  if (brandSelect) {
    brandSelect.addEventListener('change', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
      if (allBtn) allBtn.classList.add('active');
      currentCat = 'all';
      currentBrand = brandSelect.value;
      currentPage = 1;
      renderPage();
    });
  }

  renderPage();

  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── ARMOURING PROCESS STEPS (automotive-armouring.html) ── */
  const stepBtns = document.querySelectorAll('.process-step-btn');
  const stepPanels = document.querySelectorAll('.process-step-panel');
  if (stepBtns.length) {
    const activateStep = idx => {
      stepBtns.forEach((b, i) => b.classList.toggle('active', i === idx));
      stepPanels.forEach((p, i) => p.classList.toggle('active', i === idx));
    };
    stepBtns.forEach((btn, i) => btn.addEventListener('click', () => activateStep(i)));
    activateStep(0);

    const swipeHint = document.getElementById('stepperSwipeHint');
    const stepperNavEl = document.querySelector('.stepper-nav');
    if (swipeHint && stepperNavEl) {
      stepperNavEl.addEventListener('scroll', () => {
        swipeHint.style.transition = 'opacity .35s';
        swipeHint.style.opacity = '0';
        setTimeout(() => swipeHint.remove(), 380);
      }, { once: true });
    }
  }

  /* ── CONTACT FORM ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      const orig = btn.innerHTML;
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Message Sent Successfully!`;
      btn.style.background = 'var(--dark)';
      btn.disabled = true;
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; contactForm.reset(); }, 3500);
    });
  }

  /* ── NEWSLETTER FORM ── */
  const nlBtn = document.querySelector('.nl-form button');
  const nlInput = document.querySelector('.nl-form input');
  if (nlBtn && nlInput) {
    nlBtn.addEventListener('click', () => {
      if (!nlInput.value.includes('@')) { nlInput.style.borderColor = 'red'; return; }
      nlInput.style.borderColor = '';
      const orig = nlBtn.textContent;
      nlBtn.textContent = 'Subscribed ✓';
      nlBtn.style.background = 'var(--dark)';
      nlInput.value = '';
      setTimeout(() => { nlBtn.textContent = orig; nlBtn.style.background = ''; }, 3000);
    });
  }

  /* ── HERO PARALLAX ── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      heroBg.style.transform = `translateY(${window.scrollY * 0.22}px)`;
    }, { passive: true });
  }

  /* ── BLAST NAV CARDS ── */
  document.querySelectorAll('.blast-nav-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = card.dataset.target;
      if (target) {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── PRODUCT GALLERY + LIGHTBOX ── */
  const pgLayouts = document.querySelectorAll('.pg-layout');
  if (pgLayouts.length) {
    const lb = document.createElement('div');
    lb.className = 'pg-lightbox';
    lb.innerHTML = '<button class="pg-lb-close" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg></button><button class="pg-lb-prev" aria-label="Previous"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><button class="pg-lb-next" aria-label="Next"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button><img class="pg-lb-img" id="pgLbImg" src="" alt=""><div class="pg-lb-counter" id="pgLbCounter"></div>';
    document.body.appendChild(lb);

    const lbImg = document.getElementById('pgLbImg');
    const lbCounter = document.getElementById('pgLbCounter');
    let lbSrcs = [], lbIdx = 0;

    const openLb = (srcs, idx) => {
      lbSrcs = srcs; lbIdx = idx;
      lbImg.src = lbSrcs[lbIdx];
      lbCounter.textContent = (lbIdx + 1) + ' / ' + lbSrcs.length;
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    const closeLb = () => { lb.classList.remove('is-open'); document.body.style.overflow = ''; };
    const stepLb = d => {
      lbIdx = (lbIdx + d + lbSrcs.length) % lbSrcs.length;
      lbImg.src = lbSrcs[lbIdx];
      lbCounter.textContent = (lbIdx + 1) + ' / ' + lbSrcs.length;
    };

    lb.querySelector('.pg-lb-close').addEventListener('click', closeLb);
    lb.querySelector('.pg-lb-prev').addEventListener('click', () => stepLb(-1));
    lb.querySelector('.pg-lb-next').addEventListener('click', () => stepLb(1));
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') stepLb(-1);
      if (e.key === 'ArrowRight') stepLb(1);
    });

    pgLayouts.forEach(layout => {
      const mainImg = layout.querySelector('.pg-main-img');
      const zoomBtn = layout.querySelector('.pg-zoom-btn');
      const thumbs = [...layout.querySelectorAll('.pg-thumb')];
      const srcs = thumbs.map(t => t.dataset.src);

      thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
          thumbs.forEach(t => t.classList.remove('is-active'));
          thumb.classList.add('is-active');
          mainImg.src = thumb.dataset.src;
          mainImg.alt = thumb.dataset.alt || '';
        });
      });

      const openFromMain = () => openLb(srcs, thumbs.findIndex(t => t.classList.contains('is-active')));
      mainImg.addEventListener('click', openFromMain);
      if (zoomBtn) zoomBtn.addEventListener('click', openFromMain);
    });
  }

  /* ── HERO CAROUSEL ── */
  const hcSlides = document.querySelectorAll('.hc-slide');
  const hcContents = document.querySelectorAll('.hc-content');
  const hcBtns = document.querySelectorAll('.hc-btn[data-to]');

  if (hcSlides.length) {

    let current = 0;
    let autoTimer;
    let progressFrame;

    const IMAGE_SLIDE_DURATION = 5000;

    const getVideoForSlide = (idx) => {
      return hcSlides[idx].querySelector('.hero-video');
    };

    const stopAllVideos = () => {
      document.querySelectorAll('.hero-video').forEach(video => {
        video.pause();
      });
    };

    const resetAllBars = () => {
      hcBtns.forEach(btn => {
        const bar = btn.querySelector('.hc-bar');

        bar.style.transition = 'none';
        bar.style.width = '0%';
      });
    };

    const startImageProgress = (duration) => {

      const bar = hcBtns[current].querySelector('.hc-bar');

      requestAnimationFrame(() => {
        bar.style.transition = `width ${duration}ms linear`;
        bar.style.width = '100%';
      });

    };

    const startVideoProgress = (video) => {

      const bar = hcBtns[current].querySelector('.hc-bar');

      const update = () => {

        if (current >= hcSlides.length) return;

        if (!video.duration) {
          progressFrame = requestAnimationFrame(update);
          return;
        }

        const percent =
          (video.currentTime / video.duration) * 100;

        bar.style.width = `${percent}%`;

        if (!video.paused) {
          progressFrame = requestAnimationFrame(update);
        }
      };

      update();
    };

    const scheduleNext = () => {

      const video = getVideoForSlide(current);

      if (video) {

        video.currentTime = 0;

        video.play().catch(() => { });

        startVideoProgress(video);

        autoTimer = setTimeout(() => {
          goTo((current + 1) % hcSlides.length);
        }, video.duration * 1000);

      } else {

        startImageProgress(IMAGE_SLIDE_DURATION);

        autoTimer = setTimeout(() => {
          goTo((current + 1) % hcSlides.length);
        }, IMAGE_SLIDE_DURATION);

      }
    };

    const goTo = (idx) => {

      clearTimeout(autoTimer);

      if (progressFrame) {
        cancelAnimationFrame(progressFrame);
      }

      stopAllVideos();

      hcSlides[current].classList.remove('active');
      hcContents[current].classList.remove('active');
      hcBtns[current].classList.remove('active');

      current = (idx + hcSlides.length) % hcSlides.length;

      hcSlides[current].classList.add('active');
      hcContents[current].classList.add('active');
      hcBtns[current].classList.add('active');

      resetAllBars();

      scheduleNext();
    };

    hcBtns.forEach(btn => {

      btn.addEventListener('click', () => {

        goTo(Number(btn.dataset.to));

      });

    });

    // Wait for all videos to load metadata
    const videos = document.querySelectorAll('.hero-video');

    if (videos.length) {

      let loaded = 0;

      videos.forEach(video => {

        const start = () => {
          loaded++;

          if (loaded === videos.length) {
            goTo(0);
          }
        };

        if (video.readyState >= 1) {
          start();
        } else {
          video.addEventListener('loadedmetadata', start, { once: true });
        }

      });

    } else {

      goTo(0);

    }
  }

  /* ── MARQUEE PAUSE ON HOVER ── */
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    marqueeTrack.addEventListener('mouseenter', () => marqueeTrack.style.animationPlayState = 'paused');
    marqueeTrack.addEventListener('mouseleave', () => marqueeTrack.style.animationPlayState = 'running');
  }

  class ScrollFrameSequence {

    constructor({
      section,
      framePath,
      frameCount,
      startFrame = 1
    }) {

      this.section = document.querySelector(section);

      if (!this.section) return;

      this.canvas =
        this.section.querySelector("canvas");

      this.ctx =
        this.canvas.getContext("2d");

      this.framePath = framePath;
      this.frameCount = frameCount;
      this.startFrame = startFrame;

      this.images = [];

      this.currentFrame = 0;

      this.preload();
      this.resize();
      this.update();

      window.addEventListener(
        "resize",
        () => this.resize()
      );

      window.addEventListener(
        "scroll",
        () => this.update()
      );
    }

    preload() {

      for (let i = 0; i < this.frameCount; i++) {

        const img = new Image();

        const frameNumber =
          this.startFrame + i;

        img.src =
          `${this.framePath}/frame_${String(frameNumber)
            .padStart(6, "0")}.webp`;

        this.images.push(img);
      }

      this.images[0].onload =
        () => this.draw(0);
    }

    resize() {

      this.canvas.width =
        window.innerWidth;

      this.canvas.height =
        window.innerHeight;

      this.draw(this.currentFrame);
    }

    update() {

      const rect =
        this.section.getBoundingClientRect();

      const total =
        this.section.offsetHeight -
        window.innerHeight;

      const progress =
        Math.min(
          Math.max(
            -rect.top / total,
            0
          ),
          1
        );

      const frame =
        Math.floor(
          progress *
          (this.frameCount - 1)
        );

      if (frame !== this.currentFrame) {

        this.currentFrame = frame;

        this.draw(frame);
      }

      if (this.section.id === "hero-sequence") {

        const indicator =
          document.querySelector(
            ".hero-scroll-indicator"
          );

        if (progress > 0.05) {

          indicator?.classList.add(
            "hide"
          );

        } else {

          indicator?.classList.remove(
            "hide"
          );

        }

        if (window.innerWidth <= 768) {

          const content =
            document.querySelector(
              ".hero-sequence-content"
            );

          if (progress > 0.08) {

            content?.classList.add(
              "active"
            );

          } else {

            content?.classList.remove(
              "active"
            );

          }
        }
      }
    }

    draw(index) {

      const img =
        this.images[index];

      if (!img) return;

      this.ctx.clearRect(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );

      const scale =
        Math.max(
          this.canvas.width / img.width,
          this.canvas.height / img.height
        );

      const x =
        (this.canvas.width -
          img.width * scale) / 2;

      const y =
        (this.canvas.height -
          img.height * scale) / 2;

      this.ctx.drawImage(
        img,
        x,
        y,
        img.width * scale,
        img.height * scale
      );
    }
  }

  const isMobile =
    window.innerWidth <= 768;

  new ScrollFrameSequence({

    section: "#hero-sequence",

    framePath: isMobile
      ? "./assets/frame-sequences/hero-mobile"
      : "./assets/frame-sequences/hero",

    frameCount: isMobile
      ? 89
      : 121,

    startFrame: 1

  });

  new ScrollFrameSequence({
    section: "#aramid-sequence",

    framePath: isMobile
      ? "./assets/frame-sequences/aramid-mobile"
      : "./assets/frame-sequences/aramid",

    frameCount: isMobile
      ? 38
      : 39,

    startFrame: isMobile
      ? 1
      : 2699
  });

  new ScrollFrameSequence({
  section: "#aramid-install-sequence",

  framePath: isMobile
    ? "./assets/frame-sequences/aramid-install-mobile"
    : "./assets/frame-sequences/aramid-install",

  frameCount: isMobile
    ? 98
    : 98,

  startFrame: isMobile
    ? 1
    : 2738
});

  new ScrollFrameSequence({
  section: "#glass-sequence",

  framePath: isMobile
    ? "./assets/frame-sequences/glass-mobile"
    : "./assets/frame-sequences/glass",

  frameCount: isMobile
    ? 56
    : 56,

  startFrame: isMobile
    ? 1
    : 3053
});

  new ScrollFrameSequence({
  section: "#glass-install-sequence",

  framePath: isMobile
    ? "./assets/frame-sequences/glass-install-mobile"
    : "./assets/frame-sequences/glass-install",

  frameCount: isMobile
    ? 70
    : 88,

  startFrame: isMobile
    ? 1
    : 3109
});

new ScrollFrameSequence({
  section: "#capsule-sequence",

  framePath: isMobile
    ? "./assets/frame-sequences/capsule-mobile"
    : "./assets/frame-sequences/capsule",

  frameCount: isMobile
    ? 51
    : 72,

  startFrame: isMobile
    ? 1
    : 3796
});



  /* ── PARALLAX VIDEO ── */

  const invincibleSection = document.querySelector('.invincible-section');
  const invincibleVideo = document.querySelector('.invincible-video');

  if (invincibleSection && invincibleVideo) {

    window.addEventListener('scroll', () => {

      const rect = invincibleSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (
        rect.bottom > 0 &&
        rect.top < viewportHeight
      ) {

        const progress =
          (viewportHeight - rect.top) /
          (viewportHeight + rect.height);

        const translateY = (progress - 0.5) * 80;

        invincibleVideo.style.transform =
          `translate(-50%, calc(-50% + ${translateY}px))`;

      }

    }, { passive: true });

  }

});
