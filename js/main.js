/**
 * Metche — Main JavaScript
 */

(function () {
  'use strict';

  const FREE_SHIPPING_THRESHOLD = 75;
  let cart = [];
  let quizStep = 1;
  let quizAnswers = [];

  const quizResults = {
    wildflower: {
      title: 'Wildflower Light',
      desc: 'A bright, approachable jar — perfect for everyday spoons and first-time raw honey lovers.',
      id: 'wildflower-light',
      name: 'Wildflower Light Jar',
      price: 48
    },
    reserve: {
      title: 'Reserve Blend',
      desc: 'Our best-selling jar — creamy, balanced, and ideal for daily rituals.',
      id: 'reserve-blend',
      name: 'Reserve Blend Jar',
      price: 58
    },
    highland: {
      title: 'Highland Gold',
      desc: 'Bold, complex, and harvested at altitude — for those who want depth in every spoon.',
      id: 'highland-gold',
      name: 'Highland Gold Jar',
      price: 72
    },
    light: {
      title: 'Wildflower Light',
      desc: 'Light and floral — exactly what you described.',
      id: 'wildflower-light',
      name: 'Wildflower Light Jar',
      price: 48
    },
    creamy: {
      title: 'Reserve Blend',
      desc: 'Creamy caramel notes with meadow florals — our signature profile.',
      id: 'reserve-blend',
      name: 'Reserve Blend Jar',
      price: 58
    },
    bold: {
      title: 'Highland Gold',
      desc: 'Dark, complex, and full-bodied — the boldest jar in our lineup.',
      id: 'highland-gold',
      name: 'Highland Gold Jar',
      price: 72
    },
    morning: {
      title: 'Morning Glow Starter',
      desc: 'Built for morning tea and toast — a gentle start to your day.',
      id: 'morning-glow',
      name: 'Morning Glow Starter',
      price: 78
    },
    afternoon: {
      title: 'Reserve Ritual Kit',
      desc: 'Steady energy for the afternoon — our most versatile collection.',
      id: 'reserve-ritual',
      name: 'Reserve Ritual Kit',
      price: 58
    },
    evening: {
      title: 'Wildflower Light',
      desc: 'A gentle, floral honey perfect for evening tea or a quiet wind-down ritual.',
      id: 'wildflower-light',
      name: 'Wildflower Light Jar',
      price: 48
    }
  };

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
  }

  function setHeaderMinimal(isMinimal) {
    header.classList.toggle('header--minimal', isMinimal);
    if (!isMinimal) closeMegaMenus();
  }

  function initHeaderScroll() {
    const trigger = document.querySelector('.header-scroll-trigger');
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeaderMinimal(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(trigger);
  }

  initHeaderScroll();

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
    cartSubtotal.textContent = `$${subtotal}`;

    const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
    if (remaining > 0) {
      cartShipping.textContent = `Spend $${remaining} more for free shipping`;
      cartShipping.style.display = 'block';
    } else {
      cartShipping.textContent = 'You qualify for free shipping!';
      cartShipping.style.display = 'block';
    }

    if (cart.length === 0) {
      cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
      return;
    }

    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price} × ${item.qty}</div>
          <button class="cart-item-remove" data-remove="${item.id}">Remove</button>
        </div>
      </div>
    `).join('');

    cartItems.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(btn.dataset.remove));
    });
  }

  checkoutBtn?.addEventListener('click', () => {
    if (cart.length === 0) return;
    alert('Thank you for your order! Checkout is a demo — connect your payment provider to go live.');
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
    quizSteps.querySelectorAll('.quiz-step').forEach(step => {
      step.classList.toggle('active', step.dataset.step === '1');
    });
    quizProgress.textContent = '1 / 3';
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
        quizProgress.textContent = `${quizStep} / 3`;
      } else {
        showQuizResult();
      }
    });
  });

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

    const result = quizResults[best] || quizResults.reserve;

    document.getElementById('quizResultTitle').textContent = result.title;
    document.getElementById('quizResultDesc').textContent = result.desc;

    const addBtn = document.getElementById('quizAddBtn');
    addBtn.dataset.id = result.id;
    addBtn.dataset.name = result.name;
    addBtn.dataset.price = result.price;
    addBtn.textContent = `Add to Cart — $${result.price}`;

    quizSteps.querySelectorAll('.quiz-step').forEach(step => {
      step.classList.toggle('active', step.dataset.step === 'result');
    });
    quizProgress.textContent = 'Complete';
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

  // Mega menu — mobile tap support
  document.querySelectorAll('[data-dropdown]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth < 900) return;
      if (!header.classList.contains('header--minimal')) return;
      e.preventDefault();
      const id = trigger.dataset.dropdown;
      const menu = document.getElementById(`dropdown-${id}`);
      const isOpen = menu?.classList.contains('open');

      closeMegaMenus();
      if (!isOpen) menu?.classList.add('open');
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
  initSmoothScroll();
  renderCart();
})();
