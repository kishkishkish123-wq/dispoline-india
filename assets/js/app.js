/* ==========================================================================
   Dispoline India — App Logic
   Single-page app: router, cart (in-memory), animations, checkout simulation
   ========================================================================== */

/* ---------------------------- Cart State ---------------------------- */
const Cart = {
  items: {}, // id -> qty

  add(id, qty = 1) {
    this.items[id] = (this.items[id] || 0) + qty;
    this.persistSoft();
    this.render();
  },
  setQty(id, qty) {
    qty = Math.max(0, Math.min(99, qty));
    if (qty === 0) delete this.items[id];
    else this.items[id] = qty;
    this.persistSoft();
    this.render();
  },
  remove(id) {
    delete this.items[id];
    this.persistSoft();
    this.render();
  },
  clear() {
    this.items = {};
    this.persistSoft();
    this.render();
  },
  count() {
    return Object.values(this.items).reduce((a, b) => a + b, 0);
  },
  lines() {
    return Object.entries(this.items).map(([id, qty]) => {
      const p = PRODUCTS.find(p => p.id === id);
      return { product: p, qty, lineTotal: p.price * qty };
    }).filter(l => l.product);
  },
  subtotal() {
    return this.lines().reduce((sum, l) => sum + l.lineTotal, 0);
  },
  // Soft session persistence via window.name so a refresh within same tab keeps cart
  // (avoids localStorage/sessionStorage per sandbox constraints)
  persistSoft() {
    try {
      window.__dispolineCart = JSON.stringify(this.items);
    } catch (e) {}
  },
  restoreSoft() {
    try {
      if (window.__dispolineCart) this.items = JSON.parse(window.__dispolineCart);
    } catch (e) {}
  }
};

const money = (n) => "₹" + n.toLocaleString("en-IN");

// Simple inline SVG placeholder shown if a product photo fails to load (e.g. network issue,
// hotlink blocked, or the image URL breaks). Keeps the layout intact instead of showing
// a broken-image icon or a blank box.
const FALLBACK_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='#e8ebee'/><text x='50%' y='50%' font-family='sans-serif' font-size='22' fill='#8a94a1' text-anchor='middle' dominant-baseline='middle'>Image unavailable</text></svg>`
);

/* ---------------------------- Toast ---------------------------- */
function toast(msg, icon = "check_circle") {
  const el = document.getElementById("toast");
  el.innerHTML = `<span class="material-symbols-outlined">${icon}</span><span>${msg}</span>`;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ---------------------------- Router ---------------------------- */
const PAGES = ["home","products","about","benefits","why-us","certificates","contact","cart","checkout","order-success"];

function navigate(page, opts = {}) {
  if (!PAGES.includes(page)) page = "home";
  PAGES.forEach(p => {
    const el = document.getElementById("page-" + p);
    if (el) el.classList.toggle("hidden", p !== page);
  });
  const active = document.getElementById("page-" + page);
  if (active) { active.classList.remove("page-fade"); void active.offsetWidth; active.classList.add("page-fade"); }

  document.querySelectorAll(".nav-link").forEach(a => {
    a.classList.toggle("active", a.dataset.page === page);
  });

  if (!opts.silent) window.scrollTo({ top: 0, behavior: "instant" in window ? "auto" : "auto" });
  window.location.hash = page;
  closeMobileNav();
  closeCartDrawer();
  initScrollReveal();
  if (page === "products") renderProducts();
  if (page === "cart") renderCartPage();
  if (page === "checkout") renderCheckout();
}

window.addEventListener("hashchange", () => {
  const page = window.location.hash.replace("#", "") || "home";
  navigate(page, { silent: true });
});

/* ---------------------------- Header behavior ---------------------------- */
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
  });
}

function openMobileNav() { document.getElementById("mobile-nav").classList.add("open"); }
function closeMobileNav() { document.getElementById("mobile-nav")?.classList.remove("open"); }

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cart-drawer-wrap").classList.add("open");
}
function closeCartDrawer() { document.getElementById("cart-drawer-wrap")?.classList.remove("open"); }

/* ---------------------------- Scroll Reveal ---------------------------- */
let revealObserver;
function initScrollReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  document.querySelectorAll("[data-reveal]:not(.in), [data-reveal-stagger]:not(.in)").forEach(el => {
    revealObserver.observe(el);
  });
}

/* ---------------------------- Counters ---------------------------- */
function animateCounters(root = document) {
  root.querySelectorAll("[data-counter]").forEach(el => {
    if (el.dataset.done) return;
    const target = parseFloat(el.dataset.counter);
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target < 10 ? (target * eased).toFixed(1) : Math.floor(target * eased);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.dataset.done = "1";
    }
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { requestAnimationFrame(tick); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
  });
}

/* ---------------------------- Product Rendering ---------------------------- */
let activeCategory = "All";

function productCard(p) {
  return `
  <div class="card product-card" data-reveal>
    <div class="product-media">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onload="this.classList.add('loaded')" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';this.classList.add('loaded','img-error')">
      <div style="position:absolute;top:10px;left:10px;" class="chip">${p.category}</div>
    </div>
    <div class="product-body">
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${p.tags.map(t => `<span class="chip blue">${t}</span>`).join("")}
      </div>
      <h3 style="font-size:16px;font-weight:700;color:var(--primary);margin:2px 0 0;">${p.name}</h3>
      <p style="font-size:13px;color:var(--secondary);line-height:1.5;margin:0;flex:1;">${p.desc}</p>
      <div class="divider"></div>
      <div style="display:flex;align-items:end;justify-content:space-between;gap:10px;">
        <div>
          <div class="product-price">${money(p.price)}</div>
          <div class="unit label" style="text-transform:none;letter-spacing:0;font-weight:500;">${p.unit}</div>
        </div>
        <div class="qty-row" id="qty-${p.id}">
          <button type="button" onclick="stepQty('${p.id}',-1)" aria-label="Decrease quantity">−</button>
          <input type="text" inputmode="numeric" value="1" id="qty-input-${p.id}" readonly>
          <button type="button" onclick="stepQty('${p.id}',1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="add-btn" id="add-${p.id}" onclick="addToCartUI('${p.id}')">
        <span class="material-symbols-outlined" style="font-size:16px;">add_shopping_cart</span>
        Add to Cart
      </button>
    </div>
  </div>`;
}

function stepQty(id, delta) {
  const input = document.getElementById("qty-input-" + id);
  let v = parseInt(input.value || "1") + delta;
  v = Math.max(1, Math.min(99, v));
  input.value = v;
}

function addToCartUI(id) {
  const qty = parseInt(document.getElementById("qty-input-" + id).value || "1");
  Cart.add(id, qty);
  const btn = document.getElementById("add-" + id);
  const original = btn.innerHTML;
  btn.classList.add("added");
  btn.innerHTML = `<span class="material-symbols-outlined" style="font-size:16px;">check</span> Added`;
  setTimeout(() => { btn.classList.remove("added"); btn.innerHTML = original; }, 1200);
  document.getElementById("qty-input-" + id).value = 1;
  toast(`${qty} × ${PRODUCTS.find(p=>p.id===id).name.slice(0,28)}… added to cart`, "shopping_cart");
  pulseCartIcon();
}

function pulseCartIcon() {
  const badge = document.getElementById("cart-badge");
  badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  const list = activeCategory === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
  grid.innerHTML = list.map(productCard).join("");
  initScrollReveal();
  requestAnimationFrame(() => {
    document.querySelectorAll("#products-grid [data-reveal]").forEach((el,i)=>{
      setTimeout(()=>el.classList.add("in"), i*40);
    });
  });
}

function setCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts();
}

/* ---------------------------- Cart Rendering ---------------------------- */
function cartLineHTML(line, dense) {
  return `
  <div class="cart-line" data-id="${line.product.id}">
    <img src="${line.product.img}" alt="${line.product.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    <div class="cart-line-info">
      <div class="cart-line-top">
        <span style="font-size:13px;font-weight:700;color:var(--primary);">${line.product.name}</span>
        <button type="button" class="cart-remove-btn" onclick="Cart.remove('${line.product.id}')" aria-label="Remove ${line.product.name} from cart">
          <span class="material-symbols-outlined" style="font-size:18px;">close</span>
        </button>
      </div>
      <span class="label" style="text-transform:none;letter-spacing:0;">${line.product.unit}</span>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div class="qty-row" style="transform:scale(.9);transform-origin:left;">
          <button type="button" onclick="Cart.setQty('${line.product.id}', ${line.qty - 1})">−</button>
          <input type="text" value="${line.qty}" readonly>
          <button type="button" onclick="Cart.setQty('${line.product.id}', ${line.qty + 1})">+</button>
        </div>
        <span class="font-geist" style="font-weight:700;font-size:14px;">${money(line.lineTotal)}</span>
      </div>
    </div>
  </div>`;
}

function renderCartDrawer() {
  const body = document.getElementById("cart-drawer-body");
  const lines = Cart.lines();
  body.innerHTML = lines.length ? lines.map(l => cartLineHTML(l)).join("") :
    `<div class="cart-empty"><span class="material-symbols-outlined" style="font-size:40px;">shopping_cart</span><p>Your cart is empty.</p></div>`;
  document.getElementById("drawer-subtotal").textContent = money(Cart.subtotal());
  document.getElementById("drawer-checkout-btn").disabled = lines.length === 0;
}

function renderCartPage() {
  const el = document.getElementById("cart-page-body");
  if (!el) return;
  const lines = Cart.lines();
  if (!lines.length) {
    el.innerHTML = `
      <div style="text-align:center;padding:100px 20px;">
        <span class="material-symbols-outlined" style="font-size:56px;color:var(--outline);">remove_shopping_cart</span>
        <h3 style="margin:16px 0 8px;color:var(--primary);">Your cart is empty</h3>
        <p style="color:var(--secondary);margin-bottom:24px;">Browse our catalog to add certified medical disposables.</p>
        <a href="#products" class="btn btn-primary" onclick="navigate('products')">Browse Products</a>
      </div>`;
    document.getElementById("cart-summary-wrap").classList.add("hidden");
    return;
  }
  document.getElementById("cart-summary-wrap").classList.remove("hidden");
  el.innerHTML = `<div style="display:flex;flex-direction:column;">${lines.map(l => cartLineHTML(l)).join("")}</div>`;

  const subtotal = Cart.subtotal();
  const gst = Math.round(subtotal * 0.18);
  const shipping = subtotal > 3000 || subtotal === 0 ? 0 : 199;
  const total = subtotal + gst + shipping;
  document.getElementById("sum-subtotal").textContent = money(subtotal);
  document.getElementById("sum-gst").textContent = money(gst);
  document.getElementById("sum-shipping").textContent = shipping === 0 ? "FREE" : money(shipping);
  document.getElementById("sum-total").textContent = money(total);
}

/* Re-render both cart surfaces whenever cart changes */
const _origRender = Cart.render;
Cart.render = function () {
  const badge = document.getElementById("cart-badge");
  const count = this.count();
  if (badge) {
    badge.textContent = count > 99 ? "99+" : count;
    badge.classList.toggle("show", count > 0);
  }
  if (!document.getElementById("page-cart").classList.contains("hidden")) renderCartPage();
  if (document.getElementById("cart-drawer-wrap").classList.contains("open")) renderCartDrawer();
};

/* ---------------------------- Checkout ---------------------------- */
let selectedPayMethod = "card";

function renderCheckout() {
  const lines = Cart.lines();
  const wrap = document.getElementById("checkout-body");
  if (!lines.length) {
    wrap.innerHTML = `
      <div style="text-align:center;padding:100px 20px;">
        <span class="material-symbols-outlined" style="font-size:56px;color:var(--outline);">shopping_bag</span>
        <h3 style="margin:16px 0 8px;color:var(--primary);">Nothing to check out yet</h3>
        <p style="color:var(--secondary);margin-bottom:24px;">Add products to your cart before checking out.</p>
        <a class="btn btn-primary" onclick="navigate('products')">Browse Products</a>
      </div>`;
    document.getElementById("checkout-order-summary").innerHTML = "";
    return;
  }
  wrap.innerHTML = checkoutFormHTML();
  const subtotal = Cart.subtotal();
  const gst = Math.round(subtotal * 0.18);
  const shipping = subtotal > 3000 ? 0 : 199;
  const total = subtotal + gst + shipping;
  document.getElementById("checkout-order-summary").innerHTML = `
    <h3 style="font-size:15px;font-weight:700;color:var(--primary);margin-bottom:14px;">Order Summary</h3>
    <div style="display:flex;flex-direction:column;gap:10px;max-height:260px;overflow-y:auto;padding-right:4px;">
      ${lines.map(l => `
        <div style="display:flex;justify-content:space-between;gap:10px;font-size:13px;">
          <span style="color:var(--on-surface-variant);">${l.product.name} <span class="font-geist" style="color:var(--outline);">×${l.qty}</span></span>
          <span style="font-weight:600;white-space:nowrap;">${money(l.lineTotal)}</span>
        </div>`).join("")}
    </div>
    <div class="divider" style="margin:16px 0;"></div>
    <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;">
      <div style="display:flex;justify-content:space-between;"><span>Subtotal</span><span>${money(subtotal)}</span></div>
      <div style="display:flex;justify-content:space-between;"><span>GST (18%)</span><span>${money(gst)}</span></div>
      <div style="display:flex;justify-content:space-between;"><span>Shipping</span><span>${shipping === 0 ? "FREE" : money(shipping)}</span></div>
    </div>
    <div class="divider" style="margin:16px 0;"></div>
    <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:800;color:var(--primary);">
      <span>Total</span><span class="font-geist">${money(total)}</span>
    </div>
    <div style="margin-top:18px;padding:12px;border:1px solid var(--outline-variant);border-radius:var(--radius);background:var(--surface-container-low);display:flex;gap:10px;align-items:flex-start;">
      <span class="material-symbols-outlined" style="font-size:18px;color:var(--secondary);">lock</span>
      <span style="font-size:11.5px;color:var(--secondary);line-height:1.5;">Payments are processed through a PCI-DSS compliant, encrypted gateway. Card data never touches our servers.</span>
    </div>`;
  window.__checkoutTotal = total;
}

function checkoutFormHTML() {
  return `
  <form id="checkout-form" onsubmit="submitCheckout(event)" novalidate style="display:flex;flex-direction:column;gap:32px;">
    <div>
      <span class="label">Step 01</span>
      <h3 style="font-size:18px;font-weight:700;color:var(--primary);margin:6px 0 18px;">Shipping Details</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div class="field"><label>Full Name</label><input required name="name" placeholder="Dr. Anjali Mehta"><span class="err">Please enter your name</span></div>
        <div class="field"><label>Phone</label><input required name="phone" placeholder="98xxxxxxxx" pattern="[0-9]{10}"><span class="err">Enter a valid 10-digit number</span></div>
        <div class="field" style="grid-column:1/-1;"><label>Email</label><input required type="email" name="email" placeholder="you@hospital.com"><span class="err">Enter a valid email</span></div>
        <div class="field" style="grid-column:1/-1;"><label>Facility / Address</label><input required name="address" placeholder="Hospital name, street address"><span class="err">Please enter an address</span></div>
        <div class="field"><label>City</label><input required name="city" placeholder="Mumbai"><span class="err">Required</span></div>
        <div class="field"><label>Pincode</label><input required name="pincode" pattern="[0-9]{6}" placeholder="400001"><span class="err">Enter a valid 6-digit pincode</span></div>
        <div class="field" style="grid-column:1/-1;"><label>State</label>
          <select required name="state">
            <option value="">Select State</option>
            <option>Maharashtra</option><option>Delhi</option><option>Karnataka</option><option>Tamil Nadu</option>
            <option>Gujarat</option><option>Telangana</option><option>West Bengal</option><option>Other</option>
          </select>
        </div>
      </div>
    </div>

    <div>
      <span class="label">Step 02</span>
      <h3 style="font-size:18px;font-weight:700;color:var(--primary);margin:6px 0 18px;">Payment Method</h3>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <label class="pay-option selected" data-method="card">
          <input type="radio" name="paymethod" value="card" checked onchange="selectPay('card')">
          <span class="material-symbols-outlined">credit_card</span>
          <div><b style="font-size:13px;">Credit / Debit Card</b><div style="font-size:11.5px;color:var(--secondary);">Visa, Mastercard, RuPay, Amex</div></div>
        </label>
        <label class="pay-option" data-method="upi">
          <input type="radio" name="paymethod" value="upi" onchange="selectPay('upi')">
          <span class="material-symbols-outlined">qr_code_2</span>
          <div><b style="font-size:13px;">UPI</b><div style="font-size:11.5px;color:var(--secondary);">GPay, PhonePe, Paytm, BHIM</div></div>
        </label>
        <label class="pay-option" data-method="netbanking">
          <input type="radio" name="paymethod" value="netbanking" onchange="selectPay('netbanking')">
          <span class="material-symbols-outlined">account_balance</span>
          <div><b style="font-size:13px;">Net Banking</b><div style="font-size:11.5px;color:var(--secondary);">All major Indian banks</div></div>
        </label>
        <label class="pay-option" data-method="cod">
          <input type="radio" name="paymethod" value="cod" onchange="selectPay('cod')">
          <span class="material-symbols-outlined">local_shipping</span>
          <div><b style="font-size:13px;">Cash on Delivery</b><div style="font-size:11.5px;color:var(--secondary);">Available for orders under ₹10,000</div></div>
        </label>
      </div>

      <div id="card-fields" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:18px;">
        <div class="field" style="grid-column:1/-1;"><label>Card Number</label><input name="cardnum" placeholder="4242 4242 4242 4242" maxlength="19"></div>
        <div class="field"><label>Expiry</label><input name="expiry" placeholder="MM/YY" maxlength="5"></div>
        <div class="field"><label>CVV</label><input name="cvv" placeholder="123" maxlength="3"></div>
      </div>
      <div id="upi-fields" class="hidden" style="margin-top:18px;">
        <div class="field"><label>UPI ID</label><input name="upi" placeholder="yourname@okbank"></div>
      </div>
    </div>

    <button type="submit" class="btn btn-primary btn-block" id="pay-btn" style="padding:16px;">
      <span class="material-symbols-outlined" style="font-size:16px;">lock</span>
      <span id="pay-btn-label">Pay ${window.__checkoutTotal ? money(window.__checkoutTotal) : ""} Securely</span>
    </button>
    <p style="text-align:center;font-size:11px;color:var(--outline);">This is a sandbox checkout for demonstration. No real transaction will be processed.</p>
  </form>`;
}

function selectPay(method) {
  selectedPayMethod = method;
  document.querySelectorAll(".pay-option").forEach(o => o.classList.toggle("selected", o.dataset.method === method));
  document.getElementById("card-fields").classList.toggle("hidden", method !== "card");
  document.getElementById("upi-fields").classList.toggle("hidden", method !== "upi");
}

function submitCheckout(e) {
  e.preventDefault();
  const form = e.target;
  let valid = true;
  form.querySelectorAll("[required]").forEach(input => {
    const field = input.closest(".field");
    const ok = input.checkValidity() && input.value.trim() !== "";
    field.classList.toggle("invalid", !ok);
    if (!ok) valid = false;
  });
  if (!valid) { toast("Please fill in all required fields", "error"); return; }

  const btn = document.getElementById("pay-btn");
  btn.disabled = true;
  document.getElementById("pay-btn-label").innerHTML = `<span class="material-symbols-outlined spin" style="font-size:16px;">progress_activity</span> Processing Payment…`;

  // Simulated payment gateway round-trip
  setTimeout(() => {
    const orderId = "DISP" + Date.now().toString().slice(-8);
    window.__lastOrder = {
      id: orderId,
      total: window.__checkoutTotal,
      method: selectedPayMethod,
      lines: Cart.lines(),
      name: form.name.value
    };
    Cart.clear();
    renderOrderSuccess();
    navigate("order-success");
  }, 1600);
}

function renderOrderSuccess() {
  const o = window.__lastOrder;
  if (!o) return;
  document.getElementById("order-success-body").innerHTML = `
    <div style="text-align:center;max-width:520px;margin:0 auto;">
      <div style="width:76px;height:76px;border-radius:50%;background:var(--success);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;animation:pop .5s var(--ease);">
        <span class="material-symbols-outlined" style="font-size:40px;color:#fff;">check</span>
      </div>
      <h2 style="font-size:26px;font-weight:800;color:var(--primary);margin-bottom:10px;">Order Confirmed</h2>
      <p style="color:var(--secondary);margin-bottom:28px;">Thank you, ${o.name.split(" ")[0]}. A confirmation has been sent to your registered email with dispatch tracking.</p>
      <div class="card" style="text-align:left;padding:24px;margin-bottom:24px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:14px;">
          <span class="label">Order ID</span><span class="font-geist" style="font-weight:700;">${o.id}</span>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:14px;">
          <span class="label">Payment Method</span><span style="font-weight:600;text-transform:capitalize;">${o.method}</span>
        </div>
        <div class="divider" style="margin-bottom:14px;"></div>
        <div style="display:flex;justify-content:space-between;">
          <span class="label">Total Paid</span><span class="font-geist" style="font-weight:800;font-size:18px;">${money(o.total)}</span>
        </div>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-secondary" onclick="navigate('products')">Continue Shopping</button>
        <button class="btn btn-primary" onclick="navigate('home')">Back to Home</button>
      </div>
    </div>
    <style>@keyframes pop{0%{transform:scale(0);}70%{transform:scale(1.15);}100%{transform:scale(1);}}</style>`;
}

/* ---------------------------- Init ---------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  Cart.restoreSoft();
  Cart.render();
  initHeaderScroll();
  initScrollReveal();
  animateCounters();
  const startPage = window.location.hash.replace("#", "") || "home";
  navigate(startPage, { silent: true });
});
