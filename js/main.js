/**
 * Metche: Main JavaScript
 */

(function () {
  'use strict';

  const FREE_SHIPPING_THRESHOLD = 50;
  let cart = [];
  let quizStep = 1;
  let quizAnswers = [];
  let lastQuizResultKey = null;

  const quizResults = {
    wildflower: { titleKey: 'quiz.result.wildflower.title', descKey: 'quiz.result.wildflower.desc', id: 'wildflower-light', product: 'wildflower-light', price: 12 },
    reserve: { titleKey: 'quiz.result.reserve.title', descKey: 'quiz.result.reserve.desc', id: 'reserve-blend', product: 'reserve-blend', price: 14 },
    highland: { titleKey: 'quiz.result.highland.title', descKey: 'quiz.result.highland.desc', id: 'highland-gold', product: 'highland-gold', price: 18 },
    light: { titleKey: 'quiz.result.wildflower.title', descKey: 'quiz.result.light.desc', id: 'wildflower-light', product: 'wildflower-light', price: 12 },
    creamy: { titleKey: 'quiz.result.reserve.title', descKey: 'quiz.result.creamy.desc', id: 'reserve-blend', product: 'reserve-blend', price: 14 },
    bold: { titleKey: 'quiz.result.highland.title', descKey: 'quiz.result.bold.desc', id: 'highland-gold', product: 'highland-gold', price: 18 },
    morning: { titleKey: 'quiz.result.wildflower.title', descKey: 'quiz.result.morning.desc', id: 'morning-glow', product: 'morning-glow', price: 16 },
    afternoon: { titleKey: 'quiz.result.reserve.title', descKey: 'quiz.result.afternoon.desc', id: 'reserve-ritual', product: 'reserve-ritual', price: 17 },
    evening: { titleKey: 'quiz.result.wildflower.title', descKey: 'quiz.result.evening.desc', id: 'wildflower-light', product: 'wildflower-light', price: 12 }
  };

  const t = (key, vars) => window.MetcheI18n?.t(key, vars) ?? key;

  // DOM Elements
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  const overlay = document.getElementById('overlay');
  const cartBtn = document.getElementById('cartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartShipping = document.getElementById('cartShipping');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const quizModal = document.getElementById('quizModal');
  const quizOpenBtn = document.getElementById('quizOpenBtn');
  const quizClose = document.getElementById('quizClose');
  const quizBackdrop = document.getElementById('quizBackdrop');
  const quizSteps = document.getElementById('quizSteps');
  const quizProgress = document.getElementById('quizProgress');
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSuccess = document.getElementById('newsletterSuccess');

  let lenis = null;

  function lockScroll() {
    document.body.classList.add('no-scroll');
    lenis?.stop();
  }

  function unlockScroll() {
    document.body.classList.remove('no-scroll');
    lenis?.start();
  }

  function getAnchorOffset() {
    return header.classList.contains('header--minimal') ? -70 : -12;
  }

  function initSmoothScroll() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof Lenis === 'undefined') return;

    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.72,
      touchMultiplier: 1.0,
      infinite: false
    });

    document.documentElement.classList.add('lenis');

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  function closeMegaMenus() {
    document.querySelectorAll('.mega-menu').forEach(menu => menu.classList.remove('open'));
    header?.classList.remove('header--menu-open');
  }

  function syncMenuOpenState() {
    const anyOpen = !!document.querySelector('.mega-menu.open');
    header?.classList.toggle('header--menu-open', anyOpen);
  }

  function setHeaderMinimal(isMinimal) {
    header.classList.toggle('header--minimal', isMinimal);
    if (!isMinimal) closeMegaMenus();
  }

  function initHeaderScroll() {
    const trigger = document.querySelector('.header-scroll-trigger');
    if (trigger) {
      const observer = new IntersectionObserver(
        ([entry]) => setHeaderMinimal(!entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(trigger);
    } else {
      setHeaderMinimal(true);
    }

    let lastY = 0;

    function onScrollDirection(y) {
      const delta = y - lastY;

      if (y < 24) {
        header.classList.remove('header--hidden');
      } else if (delta > 6) {
        header.classList.add('header--hidden');
        closeMegaMenus();
      } else if (delta < -6) {
        header.classList.remove('header--hidden');
      }

      lastY = y;
    }

    if (lenis) {
      lenis.on('scroll', ({ scroll }) => onScrollDirection(scroll));
    } else {
      window.addEventListener('scroll', () => {
        onScrollDirection(window.scrollY || window.pageYOffset || 0);
      }, { passive: true });
    }

    const announcement = document.querySelector('.announcement-bar');
    if (announcement && header.closest('.page-hero')) {
      function syncAnnounceOffset() {
        const past = announcement.getBoundingClientRect().bottom <= 0;
        header.classList.toggle('header--past-announce', past);
      }
      syncAnnounceOffset();
      if (lenis) {
        lenis.on('scroll', syncAnnounceOffset);
      } else {
        window.addEventListener('scroll', syncAnnounceOffset, { passive: true });
      }
    }
  }

  // Mobile menu
  function openMobileNav() {
    mobileNav.classList.add('open');
    overlay.classList.add('active');
    lockScroll();
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('active');
    unlockScroll();
  }

  menuToggle?.addEventListener('click', openMobileNav);
  mobileClose?.addEventListener('click', closeMobileNav);

  function isModalOpen() {
    return mobileNav.classList.contains('open')
      || cartDrawer.classList.contains('open')
      || quizModal.classList.contains('open');
  }

  // Cart
  function openCart() {
    cartDrawer.classList.add('open');
    overlay.classList.add('active');
    lockScroll();
  }

  function closeCart() {
    cartDrawer.classList.remove('open');
    if (!isModalOpen()) {
      overlay.classList.remove('active');
      unlockScroll();
    }
  }

  cartBtn?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);

  overlay?.addEventListener('click', () => {
    closeCart();
    closeMobileNav();
    closeQuiz();
  });

  function addToCart(id, name, price) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id, name, price, qty: 1 });
    }
    renderCart();
    openCart();
  }

  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
  }

  function getSubtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function renderCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = getSubtotal();

    cartCount.textContent = totalItems;
    cartSubtotal.textContent = `€${subtotal}`;

    const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
    if (remaining > 0) {
      cartShipping.textContent = t('cart.shipping.remaining', { amount: remaining });
      cartShipping.style.display = 'block';
    } else {
      cartShipping.textContent = t('cart.shipping.free');
      cartShipping.style.display = 'block';
    }

    if (cart.length === 0) {
      cartItems.innerHTML = `<p class="cart-empty">${t('cart.empty')}</p>`;
      return;
    }

    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">€${item.price} × ${item.qty}</div>
          <button class="cart-item-remove" data-remove="${item.id}">${t('cart.remove')}</button>
        </div>
      </div>
    `).join('');

    cartItems.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(btn.dataset.remove));
    });
  }

  checkoutBtn?.addEventListener('click', () => {
    if (cart.length === 0) return;
    alert(t('cart.checkout.alert'));
    cart = [];
    renderCart();
    closeCart();
  });

  // Add to cart buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart');
    if (!btn) return;

    const card = btn.closest('[data-id]') || btn;
    const id = card.dataset.id || btn.dataset.id;
    const name = card.dataset.name || btn.dataset.name;
    const price = parseInt(card.dataset.price || btn.dataset.price, 10);

    if (id && name && price) {
      addToCart(id, name, price);
    }
  });

  // Grade tabs
  document.querySelectorAll('.grade-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      document.querySelectorAll('.grade-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.grade-panel').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(`panel-${target}`)?.classList.add('active');
    });
  });

  // Quiz
  function openQuiz() {
    quizModal.classList.add('open');
    overlay.classList.add('active');
    lockScroll();
    resetQuiz();
  }

  function closeQuiz() {
    quizModal.classList.remove('open');
    if (!isModalOpen()) {
      overlay.classList.remove('active');
      unlockScroll();
    }
  }

  function resetQuiz() {
    quizStep = 1;
    quizAnswers = [];
    lastQuizResultKey = null;
    quizSteps.querySelectorAll('.quiz-step').forEach(step => {
      step.classList.toggle('active', step.dataset.step === '1');
    });
    quizProgress.textContent = t('quiz.progress', { step: 1 });
  }

  quizOpenBtn?.addEventListener('click', openQuiz);
  quizClose?.addEventListener('click', closeQuiz);
  quizBackdrop?.addEventListener('click', closeQuiz);

  document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', () => {
      quizAnswers.push(option.dataset.answer);

      if (quizStep < 3) {
        quizStep += 1;
        quizSteps.querySelectorAll('.quiz-step').forEach(step => {
          step.classList.toggle('active', parseInt(step.dataset.step, 10) === quizStep);
        });
        quizProgress.textContent = t('quiz.progress', { step: quizStep });
      } else {
        showQuizResult();
      }
    });
  });

  function renderQuizResult(result) {
    const productName = t(`product.${result.product}.name`);

    document.getElementById('quizResultTitle').textContent = t(result.titleKey);
    document.getElementById('quizResultDesc').textContent = t(result.descKey);

    const addBtn = document.getElementById('quizAddBtn');
    addBtn.dataset.id = result.id;
    addBtn.dataset.name = productName;
    addBtn.dataset.price = result.price;
    addBtn.textContent = t('featured.addCart', { price: result.price });

    quizSteps.querySelectorAll('.quiz-step').forEach(step => {
      step.classList.toggle('active', step.dataset.step === 'result');
    });
    quizProgress.textContent = t('quiz.complete');
  }

  function showQuizResult() {
    const counts = {};
    quizAnswers.forEach(a => {
      counts[a] = (counts[a] || 0) + 1;
    });

    let best = quizAnswers[0];
    let maxCount = 0;
    Object.entries(counts).forEach(([key, count]) => {
      if (count > maxCount) {
        maxCount = count;
        best = key;
      }
    });

    lastQuizResultKey = best;
    const result = quizResults[best] || quizResults.reserve;
    renderQuizResult(result);
  }

  // Newsletter
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = newsletterForm;
    const success = document.getElementById('newsletterSuccess');
    form.querySelector('.footer-input-wrap')?.classList.add('hidden');
    form.querySelector('.footer-fda-box')?.classList.add('hidden');
    success?.classList.remove('hidden');
  });

  // Mega menu: mobile tap support
  document.querySelectorAll('[data-dropdown]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth < 900) return;
      e.preventDefault();
      const id = trigger.dataset.dropdown;
      const menu = document.getElementById(`dropdown-${id}`);
      const isOpen = menu?.classList.contains('open');

      closeMegaMenus();
      if (!isOpen) {
        menu?.classList.add('open');
        syncMenuOpenState();
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      closeMegaMenus();
    }
  });

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      closeMobileNav();

      if (lenis) {
        lenis.scrollTo(target, { offset: getAnchorOffset() });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Init
  window.MetcheI18n?.init();
  initSmoothScroll();
  initHeaderScroll();
  renderCart();

  document.addEventListener('metche:languagechange', () => {
    cart = cart.map(item => ({
      ...item,
      name: t(`product.${item.id}.name`) || item.name
    }));
    renderCart();

    if (lastQuizResultKey) {
      const result = quizResults[lastQuizResultKey] || quizResults.reserve;
      renderQuizResult(result);
    } else if (quizModal?.classList.contains('open')) {
      quizProgress.textContent = t('quiz.progress', { step: quizStep });
    }
  });
})();
