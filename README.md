# Forma — Considered Lifestyle Storefront

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![design-with-intent](https://img.shields.io/badge/design--with--intent-1.1.0-25523E?style=flat-square&logo=npm)](https://www.npmjs.com/package/design-with-intent)
[![Playwright Tests](https://img.shields.io/badge/Playwright-12%20passed-success?style=flat-square&logo=playwright)](https://playwright.dev/)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-purple?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> **A complete, responsive Next.js ecommerce storefront crafted to demonstrate and validate the [`design-with-intent`](https://www.npmjs.com/package/design-with-intent) npm package.**

Forma is built with pure custom CSS design tokens, semantic HTML, and native web animations—with **zero third-party UI or component libraries** (no Tailwind, Bootstrap, or component kits). It demonstrates how the `design-with-intent` methodology delivers a high-end, editorial shopping experience that is accessible, resilient, and responsive across every device.

---

## 🌟 Highlights & Philosophy

- **Engineered with [`design-with-intent`](https://www.npmjs.com/package/design-with-intent):** Guided by domain-specific art direction, semantic tokens, and project design records (`DESIGN.md` verified via `dwi doctor`).
- **Pure CSS Design System:** Warm linen surfaces (`#FBF9F5`), deep charcoal typography (`#1C1917` with >10:1 contrast), forest green accents (`#25523E`), and tactile micro-interactions.
- **Native Web Animations:** Card entrances with staggered spring easing (`cardFadeUp`), image hover scale, interactive modal dialogs, and toast alerts—all respecting `prefers-reduced-motion: reduce`.
- **Offline-Resilient Catalogue:** Bundles 194 genuine lifestyle products from the DummyJSON open dataset with offline-cached thumbnails in `public/images/products/`.
- **Instant Demo + Stripe Checkout:** Complete demo shopping without API keys, plus ready-to-use server-side Stripe test checkout when configured.
- **Full Responsive Reflow:** Verified from 320px mobile screens up to ultrawide desktop monitors with zero horizontal overflow.
- **Accessible & Tested:** WCAG 2.2 AA compliant with 12/12 passing Playwright end-to-end tests across desktop and mobile.

---

## 🛍️ Comprehensive Storefront Tour

| Page / Route | Description |
| :--- | :--- |
| **[`/`](./src/app/page.tsx)** | **Homepage:** Hero showcase, trust pillars, curated category cards, featured finds, editorial story banner, and newsletter. |
| **[`/shop`](./src/app/shop/page.tsx)** | **Catalogue Browser:** Real-time search, category filtering, price range slider ($0–$3,000), sort options, and load-more pagination. |
| **[`/collections`](./src/app/collections/page.tsx)** | **Curated Collections:** Visual edits for *Home & Living*, *Style & Accessories*, *Tech & Audio*, and *Beauty & Wellness*. |
| **[`/products/[id]`](./src/app/products/[id]/page.tsx)** | **Product Details:** Multi-image gallery, interactive thumbnail rail, full-screen zoom modal, stock indicators, sample reviews, and specs. |
| **[`/cart`](./src/app/cart/page.tsx)** | **Shopping Bag:** Quantity controls, item removal, wishlist transfer, free shipping progress bar ($100 threshold), and `WELCOME10` promo code. |
| **[`/checkout`](./src/app/checkout/page.tsx)** | **Multi-Step Checkout:** Guest details, delivery options (Standard vs. Express), and payment selector (Instant Demo vs. Stripe Test). |
| **[`/checkout/success`](./src/app/checkout/success/page.tsx)** | **Order Confirmation:** Unique order reference (`FM-XXXXXXXX`) or Stripe session confirmation, itemized summary, and delivery notices. |
| **[`/track-order`](./src/app/track-order/page.tsx)** | **Order Tracker:** Visual progress timeline (*Confirmed → Packed → In Transit → Delivered*) with carrier notes. |
| **[`/orders`](./src/app/orders/page.tsx)** | **Order History:** Lists past orders saved in local storage with status badges and "Buy again" one-click re-ordering. |
| **[`/wishlist`](./src/app/wishlist/page.tsx)** | **Wishlist:** Saved items grid with instant move-to-bag shortcuts. |
| **[`/account`](./src/app/account/page.tsx)** | **Customer Profile:** Saved contact information for checkout autofill and demo session data management. |
| **[`/about`](./src/app/about/page.tsx)** | **Our Story:** Editorial narrative on slow living, material honesty, fair sourcing, and low-waste packaging. |
| **[`/contact`](./src/app/contact/page.tsx)** | **Contact Us:** Inquiry form connected to `/api/contact` with validation, studio hours, and support channels. |
| **[`/faq`](./src/app/faq/page.tsx)** | **FAQs:** Accessible `<details>` accordions covering orders, payments, shipping, returns, and authenticity. |
| **[`/shipping`](./src/app/shipping/page.tsx)** | **Shipping Guide:** Delivery rates table, transit times, and eco-packaging details. |
| **[`/returns`](./src/app/returns/page.tsx)** | **Returns Policy:** 30-day return policy and step-by-step return label instructions. |
| **[`/journal`](./src/app/journal/page.tsx)** | **The Journal:** Editorial essays on thoughtful living and craft, with dedicated reading view at `/journal/[slug]`. |
| **[`/privacy`](./src/app/privacy/page.tsx)** | **Privacy Policy:** Transparent disclosure of local storage use and payment data handling. |
| **[`/terms`](./src/app/terms/page.tsx)** | **Terms of Service:** Commercial demonstration disclaimers and catalogue notices. |
| **[`/accessibility`](./src/app/accessibility/page.tsx)** | **Accessibility Statement:** Conformance target, keyboard shortcuts, focus ring details, and screen reader testing. |

---

## 🔌 API Endpoints

- **`GET /api/products`**: Query catalogue with `q`, `category`, `sort` (`price-asc`, `price-desc`, `rating`), `limit`, and `skip`.
- **`GET /api/checkout`**: Returns Stripe configuration status (`{ stripeAvailable: boolean }`).
- **`POST /api/checkout`**: Server-side creation of Stripe hosted checkout sessions with customer items and shipping fees.
- **`GET /api/checkout/session?id=...`**: Verifies completed Stripe checkout sessions.
- **`POST /api/newsletter`**: Validates newsletter subscriptions and forwards to optional webhook.
- **`POST /api/contact`**: Validates customer messages and forwards to optional webhook.

---

## 🎨 Design System Tokens

Tokens are defined semantically in [`src/app/globals.css`](./src/app/globals.css) and tracked in [`DESIGN.md`](./DESIGN.md):

```css
:root {
  /* Typography */
  --font-sans: 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Semantic Surfaces */
  --surface-base: #FBF9F5;       /* Warm linen background */
  --surface-raised: #FFFFFF;     /* Elevated cards and panels */
  --surface-subtle: #F4EFEA;     /* Soft stone accents */
  --surface-dark: #191716;       /* Deep charcoal accents */

  /* Text Roles */
  --text-primary: #1C1917;       /* Contrast ratio > 10:1 */
  --text-secondary: #57534E;     /* Contrast ratio > 4.5:1 */
  --text-muted: #78716C;
  --text-inverse: #FAF8F5;

  /* Actions & Accents */
  --action-primary: #1C1917;     /* Clean editorial black */
  --action-accent: #25523E;      /* Forest botanical green */
  --action-terracotta: #B85028;  /* Warm earth highlight */
  --action-focus-ring: #25523E;  /* Visible keyboard focus */
}
```

---

## 🚀 Quickstart

### Prerequisites
- Node.js 18+ (tested on Node.js 20+)
- npm 9+

### 1. Clone & Install
```bash
git clone https://github.com/SHEKHAR3512/forma-store.git
cd forma-store
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Verify Design with `design-with-intent`
```bash
npm run design:check
```
Executes `dwi doctor` to audit setup and project design records.

### 4. Run End-to-End Tests
```bash
npm test
```
Runs 12 Playwright tests verifying complete shopping flows on both desktop and mobile viewports.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 💳 Optional Stripe Configuration

Forma works out-of-the-box with **Demo Checkout**. To test live Stripe hosted payments:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Add your Stripe test secret key:
   ```env
   STRIPE_SECRET_KEY=sk_test_51...
   APP_URL=http://localhost:3000
   ```
3. Restart the dev server. Checkout will automatically enable **Stripe test checkout**. Use standard Stripe test cards (e.g. `4242 4242 4242 4242`).

---

## 📦 Scripts

- `npm run dev`: Launch Next.js dev server with Turbopack.
- `npm run build`: Compile Next.js production build.
- `npm run start`: Start production server.
- `npm run typecheck`: TypeScript typecheck with zero emit.
- `npm test`: Run Playwright end-to-end tests.
- `npm run design:check`: Run `dwi doctor` from `design-with-intent`.
- `npm run catalog:sync`: Re-sync DummyJSON catalogue and download thumbnails.

---

## 📄 License & Attribution

- Built as a reference demonstration for [`design-with-intent`](https://www.npmjs.com/package/design-with-intent).
- Product data and imagery courtesy of [DummyJSON](https://dummyjson.com/).
- Fonts: [Manrope](https://fonts.google.com/specimen/Manrope) under the SIL Open Font License (OFL).
- Code licensed under the [ISC License](./package.json).
