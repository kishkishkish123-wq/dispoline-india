# Dispoline India — Website

A fully animated, single-page corporate + e-commerce site built on the original
"Clinical Precision Standard" design system, with a working shopping cart and
checkout flow.

## Run it
Just open `index.html` in a browser — no build step, no dependencies to install.
For best results (and to avoid any browser file:// restrictions) serve it locally:

```
cd dispoline-website
python3 -m http.server 8000
# open http://localhost:8000
```

## What's included
- **Home, Products, About, Benefits, Why Us, Certificates, Contact** — animated,
  scroll-reveal sections built from your original Stitch design tokens (charcoal
  / surgical-steel / sterility-blue palette, Inter + Geist type).
- **Product catalog** with category filters, quantity steppers, and Add to Cart.
- **Cart drawer + full cart page** with live subtotal, GST (18%) and shipping calc.
- **Checkout page** with shipping form, validation, and a payment-method selector
  (Card / UPI / Net Banking / COD).
- **Order confirmation** screen with a generated order ID.

## About payments — important
This is a static front-end with **no backend**, so it can't move real money on its
own — no website can safely do that with client-side code alone (card numbers
must never touch a server you control without PCI-DSS compliance). Right now,
checkout runs a clearly-labelled **sandbox simulation**: it validates the form,
"processes" for ~1.5s, then shows a real-looking confirmation screen.

To accept real payments, you have two solid options:

1. **Razorpay (recommended for India)** — sign up, grab your Key ID, add their
   checkout script, and create a tiny backend endpoint (Node/PHP/etc., a few dozen
   lines) that creates an order and verifies the payment signature. Their docs:
   https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/
2. **Stripe** — similar pattern, strong if you also sell internationally.

I've left `selectedPayMethod` and `submitCheckout()` in `assets/js/app.js` as the
exact spot to swap the simulated `setTimeout` for a real gateway call once you
have a backend and API keys — happy to wire that up for you if you tell me which
gateway and where the backend will run (e.g. Node/Express, a serverless function,
Firebase, etc.).

## Structure
```
index.html               all pages (SPA, client-side routed)
assets/css/style.css      design tokens + components + animations
assets/js/products-data.js  product catalog (edit prices/items here)
assets/js/app.js          cart, router, animations, checkout logic
```

## Customizing
- **Products/prices**: edit `assets/js/products-data.js`.
- **Colors/fonts/spacing**: all defined as CSS variables at the top of `style.css`.
- **Copy**: edit directly in `index.html` — each page is a clearly-labelled
  `<section id="page-...">` block.
