---
schema_version: 1
product: "Forma"
audience: "Design-conscious shoppers browsing home, style, technology and daily essentials seeking a calm, intentional experience"
primary_task: "Discover products, compare details, save favourites, and complete checkout with demo or Stripe payment"
mode: "create"

facts:
  - "[FACT] design-with-intent is strictly the sole design package and workflow standard"
  - "[FACT] No external UI or CSS component frameworks (pure CSS, semantic HTML, native animations)"
  - "[FACT] Real product data from DummyJSON public catalogue bundled locally with 194 offline-ready thumbnails"
  - "[FACT] Demo checkout operates standalone without API keys; Stripe test checkout unlocks when STRIPE_SECRET_KEY is provided"
  - "[FACT] Shopping bag, wishlist, and past orders persist client-side in localStorage"

assumptions:
  - "[ASSUMPTION] Users browse across mobile, tablet, and wide desktop screens; touch targets must meet 44px+ on mobile"
  - "[ASSUMPTION] Shoppers value quiet editorial pacing over aggressive popups and cluttered countdown timers"

preserve:
  - "Next.js App Router structure and TypeScript typing"
  - "Stripe payment integration path"
  - "Design-with-intent package as sole styling foundation"
  - "Accessible semantic HTML landmarks and WCAG 2.2 AA conformance"

direction:
  summary: "Calm, editorial lifestyle storefront with warm linen surfaces, clear typographic hierarchy, and responsive fluid grids"
  rationale: "Aligns with considered, sustainable living; lets high-quality product photography dominate without decorative clutter"

token_source: "src/app/globals.css"
responsive_rules:
  - "320px–480px: Single-column reflow without horizontal scroll, bottom-fixed add-to-bag affordance"
  - "768px+: Multi-column product grids and sticky order summaries"
  - "1024px–1440px: Balanced editorial layout with max-width 1280px containment"

required_states:
  - "Default / Populated: Curated grids, tabular pricing, rating stars, and image zoom"
  - "Loading: Skeleton pulse animations with aria-live and polite status indicators"
  - "Empty: Contextual empty states with clear calls-to-action for Bag, Wishlist, Orders, and Search"
  - "Error: High-contrast error notices with actionable recovery for forms and Stripe sessions"
  - "Success: Order confirmation card with reference number and delivery milestone breakdown"

references:
  - url_or_name: "Editorial design publications & slow design studios"
    type: "adjacent_field"
    principle: "Generous whitespace, tactile earth tones, and authentic craft narratives"
    what_not_to_copy: "Unreadable ultra-light serif fonts or non-interactive layouts"

rejected_options:
  - option: "Third-party component frameworks (Tailwind, Bootstrap, MUI)"
    reason: "Explicit user constraint: strictly design-with-intent with pure custom CSS"
  - option: "Loud flash-sale banners, spinning prize wheels, or fake countdown clocks"
    reason: "Contradicts Forma's calm, intentional design philosophy"

verification:
  performed:
    - "TypeScript compilation: 0 errors across all routes and components"
    - "Next.js production build: 26 static & dynamic routes generated cleanly"
    - "WCAG color contrast verification: Charcoal text on linen background exceeds 10:1"
    - "Responsive reflow verified down to 320px without horizontal overflow"
    - "Prefers-reduced-motion CSS media query safeguards included"
  not_performed:
    - "Live Stripe production charges (only test credentials or demo mode supported)"
---

# Forma Design Decisions & Architecture Notes

## Typography & Hierarchy
- **Font Family:** Manrope (bundled locally in `public/fonts/` for privacy, fast rendering, and zero layout shift) with clean system sans fallbacks.
- **Display / H1:** 32px–56px bold, tight letter-spacing (-0.03em to -0.04em) with italic accent emphasis for editorial warmth.
- **Body & Captions:** 15px–16px regular, line-height 1.6–1.7, optimal measure 45–65 characters.
- **Numerals:** Tabular numbers (`font-variant-numeric: tabular-nums`) across prices, stock counts, and order totals.

## Color Palette & Semantic Roles
- **Surfaces:**
  - Base: Warm linen `#FBF9F5`
  - Raised: Pure white `#FFFFFF`
  - Subtle / Sunken: Soft stone `#F4EFEA` / `#EDE7DF`
  - Dark: Deep charcoal `#191716`
- **Text:**
  - Primary: Charcoal `#1C1917` (Contrast > 10:1 against base)
  - Secondary: Warm slate `#57534E` (Contrast > 4.5:1)
  - Muted: `#78716C`
  - Inverse: `#FAF8F5`
- **Actions & Accents:**
  - Primary Action: Deep charcoal `#1C1917`
  - Botanical Accent: Forest green `#25523E`
  - Warm Earth: Terracotta `#B85028`
  - Highlight / Dot: Warm amber `#F5D38A`

## Motion & Micro-interactions
- Card entrance animations with staggered delay (`cardFadeUp` 500ms spring ease).
- Smooth hover zoom on gallery and category imagery with overflow containment.
- Dynamic wishlist button with pop keyframes and aria-pressed state feedback.
- Interactive image magnification modal dialog with keyboard `Escape` closing.
- Accessible reduced-motion overrides (`animation-duration: 0.01ms !important`).
