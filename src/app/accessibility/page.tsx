import Link from 'next/link';
import { Icon } from '@/components/icon';

export const metadata = {
  title: 'Accessibility Statement — Forma',
  description: 'Our commitment to digital accessibility, inclusive design, and WCAG 2.2 AA standards.',
};

export default function AccessibilityPage() {
  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Accessibility</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> INCLUSIVE DESIGN
        </span>
        <h1>Accessibility Statement.</h1>
        <p>Designing with intent means designing for everyone who visits.</p>
      </div>

      <div className="checkout-layout">
        <section className="prose">
          <h2>Our Commitment</h2>
          <p>
            Forma is engineered from the ground up to ensure our storefront is accessible and usable by people of all abilities, including those who rely on assistive technologies such as screen readers, magnifiers, and keyboard-only navigation.
          </p>

          <h2>Conformance Standard</h2>
          <p>
            We target compliance with the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>. These guidelines specify how to make web content more accessible to people with sensory, cognitive, and mobility impairments.
          </p>

          <h2>Core Accessibility Features</h2>
          <ul>
            <li>
              <strong>Keyboard Navigation:</strong> Every interactive element—including navigation links, filter toggles, product quick-actions, quantity counters, and checkout accordions—is reachable and operable via the <code>Tab</code> and <code>Enter/Space</code> keys.
            </li>
            <li>
              <strong>Visible Focus Indicators:</strong> High-contrast, unobscured focus rings (<code>:focus-visible</code>) are rendered across all interactive targets to assist keyboard users.
            </li>
            <li>
              <strong>Skip to Main Content:</strong> A dedicated skip link appears at the very top of each page upon initial keyboard focus, enabling users to bypass header navigation and jump directly to primary content.
            </li>
            <li>
              <strong>Robust Color Contrast:</strong> Text colors meet or exceed a 4.5:1 contrast ratio against their respective background surfaces (and 3:1 for large display titles and essential UI boundaries).
            </li>
            <li>
              <strong>Reduced Motion Respect:</strong> All animations, micro-interactions, and marquee movements honor the user’s operating system preference for <code>prefers-reduced-motion: reduce</code>.
            </li>
            <li>
              <strong>Semantic Landmarks & ARIA:</strong> We utilize native HTML5 landmarks (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>) and descriptive ARIA labels for icon-only actions and live region updates (<code>aria-live="polite"</code>).
            </li>
          </ul>

          <h2>Feedback & Assistance</h2>
          <p>
            If you encounter any difficulty accessing any part of the Forma website or have suggestions on how we can improve accessibility, please reach out through our{' '}
            <Link href="/contact" className="text-button" style={{ display: 'inline' }}>
              contact form
            </Link>. We treat all accessibility feedback with urgency.
          </p>
        </section>

        <aside className="order-summary" style={{ top: '6rem' }}>
          <h2>Audit & Testing</h2>
          <div className="product-promises" style={{ border: 'none', padding: 0 }}>
            <div>
              <Icon name="check" />
              <div>
                <strong>WCAG 2.2 AA Target</strong>
                <p>Verified contrast, focus states, and target touch sizes.</p>
              </div>
            </div>
            <div>
              <Icon name="user" />
              <div>
                <strong>Screen Reader Tested</strong>
                <p>Semantic attributes and descriptive image alt text.</p>
              </div>
            </div>
          </div>
          <Link href="/shop" className="button full" style={{ marginTop: '1.5rem' }}>
            Start shopping <Icon name="arrow" size={18} />
          </Link>
        </aside>
      </div>
    </div>
  );
}

