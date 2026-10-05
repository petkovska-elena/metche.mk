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
  const cartShippingText = document.getElementById('cartShippingText');
  const cartShippingBar = document.getElementById('cartShippingBar');
  const cartHeadingCount = document.getElementById('cartHeadingCount');
  const cartContinue = document.getElementById('cartContinue');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const quizModal = document.getElementById('quizModal');
  const quizOpenBtn = document.getElementById('quizOpenBtn');
  const quizClose = document.getElementById('quizClose');
  const quizBackdrop = document.getElementById('quizBackdrop');
  const quizSteps = document.getElementById('quizSteps');
  const quizProgress = document.getElementById('quizProgress');
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSuccess = document.getElementById('newsletterSuccess');

  const COOKIE_CONSENT_KEY = 'metche-cookie-consent';
  const COOKIE_CONSENT_COOKIE = 'metche-cookie-consent';

  let lenis = null;

  function getCookieConsent() {
    try {
      const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      // fall back to cookie storage
    }

    const cookieMatch = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_CONSENT_COOKIE}=([^;]*)`));
    if (cookieMatch) {
      try {
        return JSON.parse(decodeURIComponent(cookieMatch[1]));
      } catch (error) {
        return null;
      }
    }

    return null;
  }

  function saveCookieConsent(choice) {
    const payload = JSON.stringify({ choice, updatedAt: Date.now() });

    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, payload);
    } catch (error) {
      // ignore storage write failures
    }

    document.cookie = `${COOKIE_CONSENT_COOKIE}=${encodeURIComponent(payload)}; path=/; max-age=31536000; SameSite=Lax`;
  }

  function showCookieBanner() {
    if (document.getElementById('cookieConsent')) return;

    const banner = document.createElement('div');
    banner.id = 'cookieConsent';
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML = `
      <div class="cookie-banner__content">
        <div class="cookie-banner__title">We use cookies to improve your experience</div>
        <p class="cookie-banner__text">This site uses cookies to remember your preferences and keep the experience smooth. You can accept or decline at any time.</p>
      </div>
      <div class="cookie-banner__actions">
        <button class="cookie-banner__btn cookie-banner__btn--secondary" data-cookie-choice="decline">Decline</button>
        <button class="cookie-banner__btn cookie-banner__btn--primary" data-cookie-choice="accept">Accept</button>
      </div>
    `;

    document.body.appendChild(banner);

    banner.querySelectorAll('[data-cookie-choice]').forEach((button) => {
      button.addEventListener('click', () => {
        saveCookieConsent(button.dataset.cookieChoice);
        banner.remove();
      });
    });
  }

  function initCookieConsent() {
    const consent = getCookieConsent();
    if (!consent) {
      showCookieBanner();
    }
  }

  function lockScroll() {
    document.body.classList.add('no-scroll');
    lenis?.stop();
  }

  function unlockScroll() {
    document.body.classList.remove('no-scroll');
    lenis?.start();
  }

  function getAnchorOffset() {
    if (!header) return -70;
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
    if (announcement && header.closest('.page-hero, .contact-hero')) {
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

  initCookieConsent();

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
  const CART_STORAGE_KEY = 'metche-cart';
  const CART_CATALOG = {
    'reserve-ritual': { image: 'assets/images/products/reserve-blend.webp', href: 'products/reserve.html' },
    'reserve-blend': { image: 'assets/images/products/reserve-blend.webp', href: 'products/reserve.html' },
    'morning-glow': { image: 'assets/images/products/morning-glow.webp', href: 'products/wildflower.html' },
    'wildflower-light': { image: 'assets/images/products/morning-glow.webp', href: 'products/wildflower.html' },
    'highland-deep': { image: 'assets/images/products/highland-gold.webp', href: 'products/highland.html' },
    'highland-gold': { image: 'assets/images/products/highland-gold.webp', href: 'products/highland.html' }
  };

  const CART_UPSELLS = [
    { id: 'reserve-blend', price: 14 },
    { id: 'wildflower-light', price: 12 },
    { id: 'highland-gold', price: 18 }
  ];

  function assetBase() {
    return /\/(products|pages|blog)\//.test(window.location.pathname) ? '../' : '';
  }

  function shopHref() {
    const path = window.location.pathname;
    if (/\/products\//.test(path)) return './all.html';
    if (/\/(pages|blog)\//.test(path)) return '../products/all.html';
    return 'products/all.html';
  }

  function escHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function splitProductName(name) {
    const parts = String(name || '').split(',');
    if (parts.length < 2) return { title: name || '', size: '' };
    return { title: parts[0].trim(), size: parts.slice(1).join(',').trim() };
  }

  function openCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    overlay.classList.add('active');
    lockScroll();
  }

  function closeCart() {
    cartDrawer?.classList.remove('open');
    cartDrawer?.setAttribute('aria-hidden', 'true');
    if (!isModalOpen()) {
      overlay.classList.remove('active');
      unlockScroll();
    }
  }

  cartBtn?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);
  cartContinue?.addEventListener('click', closeCart);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartDrawer?.classList.contains('open')) closeCart();
  });

  overlay?.addEventListener('click', () => {
    closeCart();
    closeMobileNav();
    closeQuiz();
  });

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
      if (!Array.isArray(saved)) return;
      cart = saved
        .filter(item => item && item.id && item.name && Number.isFinite(Number(item.price)))
        .map(item => ({
          id: String(item.id),
          name: String(item.name),
          price: Number(item.price),
          qty: Math.min(12, Math.max(1, parseInt(item.qty, 10) || 1))
        }));
    } catch (error) {
      cart = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      // ignore storage write failures
    }
  }

  function checkoutHref() {
    if (/\/(products|pages|blog)\//.test(window.location.pathname)) return '../checkout/index.html';
    return 'checkout/index.html';
  }

  function addToCart(id, name, price, qty = 1) {
    const amount = Math.min(12, Math.max(1, parseInt(qty, 10) || 1));
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty = Math.min(12, existing.qty + amount);
    } else {
      cart.push({ id, name, price, qty: amount });
    }
    renderCart();
    openCart();
  }

  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
  }

  function setQty(id, qty, focusSelector) {
    const item = cart.find(entry => entry.id === id);
    if (!item) return;
    item.qty = Math.min(12, Math.max(1, qty));
    renderCart(focusSelector);
  }

  function getSubtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function renderUpsell() {
    if (!cart.length) return '';
    const picks = CART_UPSELLS.filter(item => !cart.some(entry => entry.id === item.id)).slice(0, 2);
    if (!picks.length) return '';
    const base = assetBase();

    return `
      <section class="cart-upsell">
        <p class="cart-upsell-label">${escHtml(t('cart.upsell'))}</p>
        <div class="cart-upsell-list">
          ${picks.map(item => {
            const catalog = CART_CATALOG[item.id];
            const { title } = splitProductName(t(`product.${item.id}.name`));
            return `
              <article class="cart-upsell-card">
                <img src="${base}${catalog.image}" alt="${escHtml(title)}">
                <div class="cart-upsell-copy">
                  <p>${escHtml(title)}</p>
                  <span>€${item.price}</span>
                </div>
                <button type="button" class="cart-upsell-add" data-upsell="${item.id}" data-price="${item.price}">${escHtml(t('cart.add'))}</button>
              </article>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  function renderCart(focusSelector) {
    saveCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = getSubtotal();
    const base = assetBase();

    if (cartCount) {
      cartCount.textContent = totalItems;
      cartCount.classList.toggle('is-hidden', totalItems === 0);
    }
    if (cartHeadingCount) {
      cartHeadingCount.textContent = totalItems;
      cartHeadingCount.hidden = totalItems === 0;
    }
    if (cartSubtotal) cartSubtotal.textContent = `€${subtotal}`;
    cartDrawer?.classList.toggle('is-empty', cart.length === 0);
    if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;

    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
    if (cartShipping) {
      cartShipping.classList.toggle('is-free', remaining === 0 && subtotal > 0);
      cartShipping.hidden = false;
    }
    if (cartShippingText) {
      cartShippingText.textContent = remaining > 0
        ? t('cart.shipping.remaining', { amount: remaining })
        : t('cart.shipping.free');
    }
    if (cartShippingBar) cartShippingBar.style.width = `${subtotal > 0 ? progress : 0}%`;

    if (!cartItems) return;

    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-mark" aria-hidden="true">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 7h15l-1.5 9h-12z"/><path d="M6 7 5 4H2"/><circle cx="9" cy="20" r="1.2"/><circle cx="18" cy="20" r="1.2"/></svg>
          </div>
          <p class="cart-empty-title">${escHtml(t('cart.empty'))}</p>
          <p class="cart-empty-hint">${escHtml(t('cart.empty.hint'))}</p>
          <a class="btn btn-primary" href="${shopHref()}">${escHtml(t('cart.continue'))}</a>
        </div>
      `;
      return;
    }

    cartItems.innerHTML = cart.map(item => {
      const catalog = CART_CATALOG[item.id] || {};
      const { title, size } = splitProductName(item.name);
      const href = catalog.href ? `${base}${catalog.href}` : shopHref();
      const image = catalog.image ? `${base}${catalog.image}` : '';
      const line = item.price * item.qty;
      return `
        <article class="cart-item">
          <a class="cart-item-media" href="${href}">
            ${image ? `<img src="${image}" alt="${escHtml(title)}">` : ''}
          </a>
          <div class="cart-item-info">
            <div class="cart-item-top">
              <div>
                <a class="cart-item-name" href="${href}">${escHtml(title)}</a>
                ${size ? `<p class="cart-item-variant">${escHtml(size)}</p>` : ''}
              </div>
              <div class="cart-item-line">€${line}</div>
            </div>
            <div class="cart-item-actions">
              <div class="cart-qty" role="group" aria-label="${escHtml(t('pdp.qty.aria'))}">
                <button type="button" data-qty="${escHtml(item.id)}" data-delta="-1" aria-label="${escHtml(t('pdp.qty.decrease'))}" ${item.qty <= 1 ? 'disabled' : ''}>−</button>
                <span>${item.qty}</span>
                <button type="button" data-qty="${escHtml(item.id)}" data-delta="1" aria-label="${escHtml(t('pdp.qty.increase'))}" ${item.qty >= 12 ? 'disabled' : ''}>+</button>
              </div>
              <button type="button" class="cart-item-remove" data-remove="${escHtml(item.id)}">${escHtml(t('cart.remove'))}</button>
            </div>
          </div>
        </article>
      `;
    }).join('') + renderUpsell();

    if (focusSelector) cartItems.querySelector(focusSelector)?.focus();
  }

  cartItems?.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('[data-remove]');
    if (removeBtn) {
      removeFromCart(removeBtn.dataset.remove);
      return;
    }

    const qtyBtn = e.target.closest('[data-qty]');
    if (qtyBtn && !qtyBtn.disabled) {
      const item = cart.find(entry => entry.id === qtyBtn.dataset.qty);
      if (!item) return;
      const next = item.qty + parseInt(qtyBtn.dataset.delta, 10);
      setQty(item.id, next, `[data-qty="${CSS.escape(item.id)}"][data-delta="${qtyBtn.dataset.delta}"]`);
      return;
    }

    const upsell = e.target.closest('[data-upsell]');
    if (upsell) {
      addToCart(upsell.dataset.upsell, t(`product.${upsell.dataset.upsell}.name`), parseInt(upsell.dataset.price, 10), 1);
    }
  });

  checkoutBtn?.addEventListener('click', () => {
    if (cart.length === 0) return;
    saveCart();
    window.location.href = checkoutHref();
  });

  // Add to cart buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart');
    if (!btn) return;

    const card = btn.closest('[data-id]') || btn;
    const id = card.dataset.id || btn.dataset.id;
    const name = card.dataset.name || btn.dataset.name;
    const price = parseInt(card.dataset.price || btn.dataset.price, 10);
    const inPdp = btn.closest('.pdp-buy, .pdp-sticky, .pdp-layout');
    const pageQty = document.querySelector('.pdp-layout .pdp-qty-value');
    const qty = inPdp ? parseInt(pageQty?.textContent || '1', 10) : 1;

    if (id && name && price) {
      addToCart(id, name, price, qty);
    }
  });

  document.addEventListener('click', (e) => {
    const stepBtn = e.target.closest('[data-qty-step]');
    if (stepBtn) {
      const values = document.querySelectorAll('.pdp-qty-value');
      const current = parseInt(values[0]?.textContent || '1', 10);
      const next = Math.min(12, Math.max(1, current + parseInt(stepBtn.dataset.qtyStep, 10)));
      values.forEach(value => {
        value.textContent = String(next);
      });
    }

    const thumb = e.target.closest('.pdp-thumb');
    if (thumb) {
      const layout = thumb.closest('.pdp-layout');
      const stage = layout?.querySelector('.pdp-stage-img');
      layout?.querySelectorAll('.pdp-thumb').forEach(item => {
        item.classList.remove('is-active');
        item.setAttribute('aria-selected', 'false');
      });
      thumb.classList.add('is-active');
      thumb.setAttribute('aria-selected', 'true');
      const img = thumb.querySelector('img');
      if (stage && img) {
        stage.src = thumb.dataset.src || img.src;
        if (img.alt) stage.alt = img.alt;
      }
    }
  });

  function initPdp() {
    const layout = document.querySelector('.pdp-layout');
    if (!layout) return;

    const buy = layout.querySelector('.pdp-buy');
    const sticky = document.getElementById('pdpSticky');
    if (buy && sticky && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        sticky.classList.toggle('is-visible', !entry.isIntersecting);
      }, { threshold: 0, rootMargin: '-72px 0px 0px 0px' });
      observer.observe(buy);
    }
  }

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

  function openFaqFromHash() {
    const hash = window.location.hash;
    if (!hash || hash === '#') return;
    const id = hash.slice(1);
    const target = document.getElementById(id) || document.querySelector(hash);
    if (!target) return;
    const item = target.matches('details.faq-item')
      ? target
      : target.closest('details.faq-item');
    if (item) item.open = true;
    const scrollTarget = item || target;
    const scrollToFaq = () => {
      if (lenis) {
        lenis.scrollTo(scrollTarget, { offset: getAnchorOffset() });
      } else {
        scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    requestAnimationFrame(scrollToFaq);
    setTimeout(scrollToFaq, 80);
  }

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
  loadCart();
  window.MetcheI18n?.init();
  openFaqFromHash();
  initSmoothScroll();
  initHeaderScroll();
  initPdp();
  renderCart();
  if (new URLSearchParams(window.location.search).get('cart') === 'open' && cart.length) {
    openCart();
  }
  window.addEventListener('hashchange', openFaqFromHash);
  window.addEventListener('load', openFaqFromHash);

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
