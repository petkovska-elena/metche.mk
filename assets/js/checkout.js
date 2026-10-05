/**
 * Metche checkout: information, shipping, payment, confirmation.
 * Orders are paid on delivery. No card payment is collected.
 */
(function () {
  'use strict';

  const CART_KEY = 'metche-cart';
  const DRAFT_KEY = 'metche-checkout';
  const ORDER_KEY = 'metche-order';
  const FREE_SHIPPING = 50;
  const DISCOUNT_CODE = 'METCHE10';

  const CATALOG = {
    'reserve-ritual': { image: '../assets/images/products/reserve-blend.webp', href: '../products/reserve.html' },
    'reserve-blend': { image: '../assets/images/products/reserve-blend.webp', href: '../products/reserve.html' },
    'morning-glow': { image: '../assets/images/products/morning-glow.webp', href: '../products/wildflower.html' },
    'wildflower-light': { image: '../assets/images/products/morning-glow.webp', href: '../products/wildflower.html' },
    'highland-deep': { image: '../assets/images/products/highland-gold.webp', href: '../products/highland.html' },
    'highland-gold': { image: '../assets/images/products/highland-gold.webp', href: '../products/highland.html' }
  };

  const COUNTRIES = ['MK', 'AL', 'RS', 'BG', 'GR', 'XK', 'HR', 'SI', 'BA', 'ME', 'DE', 'AT', 'IT', 'FR', 'NL', 'BE', 'CH', 'GB'];

  const COUNTRY_NAMES = {
    en: {
      MK: 'North Macedonia', AL: 'Albania', RS: 'Serbia', BG: 'Bulgaria', GR: 'Greece', XK: 'Kosovo',
      HR: 'Croatia', SI: 'Slovenia', BA: 'Bosnia and Herzegovina', ME: 'Montenegro', DE: 'Germany',
      AT: 'Austria', IT: 'Italy', FR: 'France', NL: 'Netherlands', BE: 'Belgium', CH: 'Switzerland', GB: 'United Kingdom'
    },
    mk: {
      MK: 'Северна Македонија', AL: 'Албанија', RS: 'Србија', BG: 'Бугарија', GR: 'Грција', XK: 'Косово',
      HR: 'Хрватска', SI: 'Словенија', BA: 'Босна и Херцеговина', ME: 'Црна Гора', DE: 'Германија',
      AT: 'Австрија', IT: 'Италија', FR: 'Франција', NL: 'Холандија', BE: 'Белгија', CH: 'Швајцарија', GB: 'Обединето Кралство'
    }
  };

  const step = document.body.dataset.checkout;
  if (!step) return;

  const t = (key, vars) => window.MetcheI18n?.t(key, vars) ?? key;
  const lang = () => window.MetcheI18n?.getLang?.() || 'en';

  function esc(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function money(amount) {
    const value = Math.round(Number(amount) * 100) / 100;
    if (!Number.isFinite(value)) return '€0';
    return Number.isInteger(value) ? `€${value}` : `€${value.toFixed(2)}`;
  }

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      if (!Array.isArray(saved)) return [];
      return saved
        .filter(item => item && item.id && item.name && Number.isFinite(Number(item.price)))
        .map(item => ({
          id: String(item.id),
          name: String(item.name),
          price: Number(item.price),
          qty: Math.min(12, Math.max(1, parseInt(item.qty, 10) || 1))
        }));
    } catch (error) {
      return [];
    }
  }

  function loadDraft() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(DRAFT_KEY) || '{}');
      return saved && typeof saved === 'object' ? saved : {};
    } catch (error) {
      return {};
    }
  }

  function saveDraft(next) {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify(next));
  }

  let cart = loadCart();
  let draft = loadDraft();

  function splitName(name) {
    const parts = String(name || '').split(',');
    if (parts.length < 2) return { title: name || '', size: '' };
    return { title: parts[0].trim(), size: parts.slice(1).join(',').trim() };
  }

  function subtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function discountAmount() {
    if (String(draft.discountCode || '').toUpperCase() !== DISCOUNT_CODE) return 0;
    return Math.round(subtotal() * 0.1 * 100) / 100;
  }

  function shippingCost() {
    const method = draft.shippingMethod || 'standard';
    if (method === 'express') return 9.9;
    if (subtotal() - discountAmount() >= FREE_SHIPPING) return 0;
    return 4.9;
  }

  function totals() {
    const goods = subtotal();
    const discount = discountAmount();
    const shipping = shippingCost();
    const net = Math.max(0, goods - discount);
    const vat = Math.round((net * 18) / 118 * 100) / 100;
    return { goods, discount, shipping, vat, total: Math.round((net + shipping) * 100) / 100 };
  }

  function countryName(code) {
    const names = COUNTRY_NAMES[lang()] || COUNTRY_NAMES.en;
    return names[code] || COUNTRY_NAMES.en[code] || code || '';
  }

  function addressComplete(data) {
    return Boolean(data && data.email && data.firstName && data.lastName && data.address && data.city && data.postal && data.country);
  }

  function fillCountries(select, selected) {
    if (!select) return;
    const current = selected || select.value || 'MK';
    select.innerHTML = COUNTRIES.map(code => (
      `<option value="${code}"${code === current ? ' selected' : ''}>${esc(countryName(code))}</option>`
    )).join('');
  }

  function setField(form, name, value) {
    const field = form?.elements.namedItem(name);
    if (!field || value == null) return;
    if (field.type === 'checkbox') field.checked = Boolean(value);
    else if (field.type === 'radio') {
      const match = form.querySelector(`input[name="${name}"][value="${value}"]`);
      if (match) match.checked = true;
    } else field.value = value;
  }

  function readForm(form) {
    const data = Object.fromEntries(new FormData(form).entries());
    data.marketing = Boolean(form.elements.marketing?.checked);
    data.billingSame = form.elements.billingSame ? form.elements.billingSame.checked : draft.billingSame !== false;
    return data;
  }

  function showError(form, name, message) {
    const field = form.elements.namedItem(name);
    const slot = form.querySelector(`[data-error-for="${name}"]`);
    if (field) {
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
      field.classList.toggle('is-invalid', Boolean(message));
    }
    if (slot) {
      slot.hidden = !message;
      slot.textContent = message || '';
    }
  }

  function clearErrors(form) {
    form.querySelectorAll('[data-error-for]').forEach(slot => {
      slot.hidden = true;
      slot.textContent = '';
    });
    form.querySelectorAll('.is-invalid').forEach(field => {
      field.classList.remove('is-invalid');
      field.removeAttribute('aria-invalid');
    });
  }

  function requireText(form, name) {
    const value = String(form.elements.namedItem(name)?.value || '').trim();
    if (!value) {
      showError(form, name, t('checkout.error.required'));
      return false;
    }
    showError(form, name, '');
    return true;
  }

  function validateEmail(form) {
    const value = String(form.elements.email?.value || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      showError(form, 'email', t('checkout.error.email'));
      return false;
    }
    showError(form, 'email', '');
    return true;
  }

  function validateAddress(form, prefix) {
    const names = prefix
      ? [`${prefix}FirstName`, `${prefix}LastName`, `${prefix}Address`, `${prefix}City`, `${prefix}Postal`]
      : ['firstName', 'lastName', 'address', 'city', 'postal'];
    return names.reduce((ok, name) => requireText(form, name) && ok, true);
  }

  function renderSummary() {
    const mount = document.getElementById('checkoutSummary');
    if (!mount) return;
    const figures = totals();
    const items = cart.map(item => {
      const catalog = CATALOG[item.id] || {};
      const { title, size } = splitName(item.name);
      const line = item.price * item.qty;
      return `
        <article class="checkout-line">
          <div class="checkout-line-media">
            <span class="checkout-line-frame">
              ${catalog.image ? `<img src="${catalog.image}" alt="${esc(title)}">` : ''}
            </span>
            <span class="checkout-line-qty">${item.qty}</span>
          </div>
          <div class="checkout-line-copy">
            <p>${esc(title)}</p>
            ${size ? `<span>${esc(size)}</span>` : ''}
          </div>
          <div class="checkout-line-price">${money(line)}</div>
        </article>
      `;
    }).join('');

    const discountRow = figures.discount
      ? `<div class="checkout-total-row"><span>${esc(t('checkout.discount.line'))}</span><span>−${money(figures.discount)}</span></div>`
      : '';

    const applied = String(draft.discountCode || '').toUpperCase() === DISCOUNT_CODE
      ? `<p class="checkout-code-applied"><span>${DISCOUNT_CODE}</span><button type="button" id="removeDiscount">${esc(t('checkout.discount.remove'))}</button></p>`
      : '';

    mount.innerHTML = `
      <div class="checkout-lines">${items}</div>
      <form class="checkout-discount" id="discountForm">
        <label class="visually-hidden" for="discountCode">${esc(t('checkout.discount.placeholder'))}</label>
        <input id="discountCode" name="discountCode" type="text" autocomplete="off" placeholder="${esc(t('checkout.discount.placeholder'))}" value="${esc(draft.discountInput || '')}">
        <button type="submit" class="checkout-apply">${esc(t('checkout.discount.apply'))}</button>
      </form>
      <p class="checkout-code-error" id="discountError" hidden></p>
      ${applied}
      <div class="checkout-totals">
        <div class="checkout-total-row"><span>${esc(t('checkout.subtotal'))}</span><span>${money(figures.goods)}</span></div>
        ${discountRow}
        <div class="checkout-total-row"><span>${esc(t('checkout.shipping'))}</span><span>${figures.shipping === 0 ? esc(t('checkout.shipping.free')) : money(figures.shipping)}</span></div>
        <div class="checkout-total-row checkout-total-row--muted"><span>${esc(t('checkout.vat'))}</span><span>${esc(t('checkout.vat.included'))} ${money(figures.vat)}</span></div>
        <div class="checkout-total-row checkout-total-row--due"><span>${esc(t('checkout.total'))}</span><strong>${money(figures.total)}</strong></div>
      </div>
    `;

    const toggleLabel = document.getElementById('summaryToggleLabel');
    const toggleTotal = document.getElementById('summaryToggleTotal');
    if (toggleLabel) {
      const open = document.body.classList.contains('is-summary-open');
      toggleLabel.textContent = t(open ? 'checkout.hideSummary' : 'checkout.showSummary');
    }
    if (toggleTotal) toggleTotal.textContent = money(figures.total);

    document.querySelectorAll('[data-ship-price]').forEach(node => {
      const method = node.dataset.shipPrice;
      const previous = draft.shippingMethod;
      draft.shippingMethod = method;
      const cost = shippingCost();
      draft.shippingMethod = previous;
      node.textContent = cost === 0 ? t('checkout.shipping.free') : money(cost);
    });

    const payButton = document.getElementById('payButton');
    if (payButton) payButton.textContent = t('checkout.place', { total: money(figures.total) });

    bindDiscount();
  }

  function renderReview() {
    const mount = document.getElementById('checkoutReview');
    if (!mount || !addressComplete(draft)) return;
    const shipLabel = draft.shippingMethod === 'express' ? t('checkout.ship.express') : t('checkout.ship.standard');
    const address = [draft.address, draft.apartment, `${draft.postal} ${draft.city}`, countryName(draft.country)].filter(Boolean).join(', ');
    const rows = [
      ['checkout.contact', draft.email, 'index.html'],
      ['checkout.shipTo', address, 'index.html'],
      step === 'payment' ? ['checkout.ship.title', shipLabel, 'shipping.html'] : null
    ].filter(Boolean);

    mount.innerHTML = rows.map(([label, value, href]) => `
      <div class="checkout-review-row">
        <span>${esc(t(label))}</span>
        <p>${esc(value)}</p>
        <a href="${href}">${esc(t('checkout.change'))}</a>
      </div>
    `).join('');
  }

  function syncEmpty() {
    const empty = cart.length === 0 && step !== 'thanks';
    document.body.classList.toggle('is-checkout-empty', empty);
    const emptyNode = document.getElementById('checkoutEmpty');
    const flow = document.getElementById('checkoutFlow');
    if (emptyNode) emptyNode.hidden = !empty;
    if (flow) flow.hidden = empty;
  }

  function bindDiscount() {
    document.getElementById('discountForm')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('discountCode');
      const error = document.getElementById('discountError');
      const code = String(input?.value || '').trim();
      if (code.toUpperCase() !== DISCOUNT_CODE) {
        if (error) {
          error.hidden = false;
          error.textContent = t('checkout.discount.invalid');
        }
        return;
      }
      draft.discountCode = DISCOUNT_CODE;
      draft.discountInput = '';
      saveDraft(draft);
      renderSummary();
    });

    document.getElementById('removeDiscount')?.addEventListener('click', () => {
      draft.discountCode = '';
      saveDraft(draft);
      renderSummary();
    });
  }

  function bindSummaryToggle() {
    document.getElementById('summaryToggle')?.addEventListener('click', () => {
      document.body.classList.toggle('is-summary-open');
      const open = document.body.classList.contains('is-summary-open');
      const label = document.getElementById('summaryToggleLabel');
      if (label) label.textContent = t(open ? 'checkout.hideSummary' : 'checkout.showSummary');
      document.getElementById('summaryToggle')?.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function hydrate() {
    document.querySelectorAll('[data-countries]').forEach(select => {
      const selected = select.id === 'billingCountry' ? (draft.billingCountry || draft.country || 'MK') : (draft.country || 'MK');
      fillCountries(select, selected);
    });

    const info = document.getElementById('informationForm');
    if (info) {
      ['email', 'country', 'firstName', 'lastName', 'address', 'apartment', 'city', 'postal', 'phone', 'notes'].forEach(name => setField(info, name, draft[name]));
      if (info.elements.marketing) info.elements.marketing.checked = Boolean(draft.marketing);
    }

    const shipping = document.getElementById('shippingForm');
    if (shipping) setField(shipping, 'shippingMethod', draft.shippingMethod || 'standard');

  }

  function guard() {
    if (step === 'shipping' && !addressComplete(draft)) {
      window.location.replace('index.html');
      return false;
    }
    if (step === 'payment' && (!addressComplete(draft) || !draft.shippingMethod)) {
      window.location.replace(addressComplete(draft) ? 'shipping.html' : 'index.html');
      return false;
    }
    return true;
  }

  function placeOrder(payment) {
    const figures = totals();
    const order = {
      number: String(1000 + Math.floor(Math.random() * 9000)),
      createdAt: new Date().toISOString(),
      email: draft.email,
      firstName: draft.firstName,
      lastName: draft.lastName,
      phone: draft.phone || '',
      address: draft.address,
      apartment: draft.apartment || '',
      city: draft.city,
      postal: draft.postal,
      country: draft.country,
      notes: draft.notes || '',
      shippingMethod: draft.shippingMethod || 'standard',
      payment,
      billingSame: draft.billingSame !== false,
      billing: draft.billingSame === false ? {
        firstName: draft.billingFirstName,
        lastName: draft.billingLastName,
        address: draft.billingAddress,
        apartment: draft.billingApartment || '',
        city: draft.billingCity,
        postal: draft.billingPostal,
        country: draft.billingCountry || draft.country
      } : null,
      items: cart,
      discountCode: figures.discount ? DISCOUNT_CODE : '',
      totals: figures
    };
    sessionStorage.setItem(ORDER_KEY, JSON.stringify(order));
    sessionStorage.removeItem(DRAFT_KEY);
    localStorage.setItem(CART_KEY, '[]');
    window.location.href = 'thank-you.html';
  }

  function renderThanks() {
    const order = (() => {
      try {
        return JSON.parse(sessionStorage.getItem(ORDER_KEY) || 'null');
      } catch (error) {
        return null;
      }
    })();
    const mount = document.getElementById('thanksBody');
    if (!mount) return;
    if (!order) {
      mount.innerHTML = `
        <div class="checkout-empty checkout-empty--solo">
          <h1>${esc(t('checkout.empty.title'))}</h1>
          <p>${esc(t('checkout.thanks.missing'))}</p>
          <a class="btn btn-primary" href="../products/all.html">${esc(t('checkout.empty.cta'))}</a>
        </div>
      `;
      return;
    }

    const shipLabel = order.shippingMethod === 'express' ? t('checkout.ship.express') : t('checkout.ship.standard');
    const shipTime = order.shippingMethod === 'express' ? t('checkout.ship.express.time') : t('checkout.ship.standard.time');
    const paymentLabel = t('checkout.pay.cod');

    const address = [order.address, order.apartment, `${order.postal} ${order.city}`, countryName(order.country)].filter(Boolean);
    const billing = order.billing
      ? [order.billing.address, order.billing.apartment, `${order.billing.postal} ${order.billing.city}`, countryName(order.billing.country)].filter(Boolean)
      : address;

    const items = (order.items || []).map(item => {
      const { title, size } = splitName(item.name);
      return `<div class="checkout-total-row"><span>${esc(title)}${size ? `, ${esc(size)}` : ''} × ${item.qty}</span><span>${money(item.price * item.qty)}</span></div>`;
    }).join('');

    const figures = order.totals || { goods: 0, discount: 0, shipping: 0, total: 0 };
    mount.innerHTML = `
      <div class="thanks-mark" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <p class="thanks-kicker">${esc(t('checkout.thanks.confirmed', { number: '#' + order.number }))}</p>
      <h1>${esc(t('checkout.thanks.hello', { name: order.firstName || '' }))}</h1>
      <p class="thanks-lead">${esc(t('checkout.thanks.preview'))}</p>
      <ol class="thanks-steps">
        <li>${esc(t('checkout.thanks.step1'))}</li>
        <li>${esc(t('checkout.thanks.step2'))}</li>
        <li>${esc(t('checkout.thanks.step3'))}</li>
      </ol>
      <section class="thanks-card">
        <h2>${esc(t('checkout.summary'))}</h2>
        ${items}
        ${figures.discount ? `<div class="checkout-total-row"><span>${esc(t('checkout.discount.line'))}</span><span>−${money(figures.discount)}</span></div>` : ''}
        <div class="checkout-total-row"><span>${esc(t('checkout.shipping'))}</span><span>${figures.shipping === 0 ? esc(t('checkout.shipping.free')) : money(figures.shipping)}</span></div>
        <div class="checkout-total-row checkout-total-row--due"><span>${esc(t('checkout.total'))}</span><strong>${money(figures.total)}</strong></div>
      </section>
      <div class="thanks-grid">
        <section>
          <h2>${esc(t('checkout.thanks.customer'))}</h2>
          <p>${esc(order.email)}</p>
          ${order.phone ? `<p>${esc(order.phone)}</p>` : ''}
        </section>
        <section>
          <h2>${esc(t('checkout.thanks.shippingAddress'))}</h2>
          <p>${esc(order.firstName)} ${esc(order.lastName)}</p>
          ${address.map(line => `<p>${esc(line)}</p>`).join('')}
        </section>
        <section>
          <h2>${esc(t('checkout.thanks.method'))}</h2>
          <p>${esc(shipLabel)}</p>
          <p>${esc(shipTime)}</p>
        </section>
        <section>
          <h2>${esc(t('checkout.thanks.payment'))}</h2>
          <p>${esc(paymentLabel)}</p>
        </section>
        ${order.billing ? `<section><h2>${esc(t('checkout.thanks.billing'))}</h2><p>${esc(order.billing.firstName)} ${esc(order.billing.lastName)}</p>${billing.map(line => `<p>${esc(line)}</p>`).join('')}</section>` : ''}
      </div>
      <a class="btn btn-primary" href="../products/all.html">${esc(t('checkout.thanks.continue'))}</a>
    `;
  }

  function bindInformation() {
    const form = document.getElementById('informationForm');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      clearErrors(form);
      const ok = validateEmail(form) & validateAddress(form) & requireText(form, 'country');
      if (!ok) {
        form.querySelector('.is-invalid')?.focus();
        return;
      }
      const data = readForm(form);
      draft = {
        ...draft,
        ...data,
        email: data.email.trim(),
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        address: data.address.trim(),
        apartment: data.apartment.trim(),
        city: data.city.trim(),
        postal: data.postal.trim(),
        phone: data.phone.trim(),
        notes: data.notes.trim(),
        shippingMethod: draft.shippingMethod || 'standard'
      };
      saveDraft(draft);
      window.location.href = 'shipping.html';
    });
  }

  function bindShipping() {
    const form = document.getElementById('shippingForm');
    if (!form) return;
    form.addEventListener('change', () => {
      draft.shippingMethod = form.elements.shippingMethod.value;
      saveDraft(draft);
      renderSummary();
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      draft.shippingMethod = form.elements.shippingMethod.value || 'standard';
      saveDraft(draft);
      window.location.href = 'payment.html';
    });
  }

  function bindPayment() {
    const form = document.getElementById('paymentForm');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      draft.paymentMethod = 'cod';
      draft.billingSame = true;
      saveDraft(draft);
      placeOrder({ type: 'cod' });
    });
  }

  function refresh() {
    cart = loadCart();
    if (step === 'thanks') {
      renderThanks();
      return;
    }
    syncEmpty();
    hydrate();
    renderReview();
    renderSummary();
  }

  if (!guard()) return;

  bindSummaryToggle();
  bindInformation();
  bindShipping();
  bindPayment();
  refresh();

  document.addEventListener('metche:languagechange', refresh);
})();
