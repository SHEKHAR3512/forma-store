import Link from 'next/link';
import { Icon } from '@/components/icon';

export const metadata = {
  title: 'Frequently Asked Questions — Forma',
  description: 'Answers to common questions about orders, payments, shipping, returns, and the Forma catalogue.',
};

const faqs = [
  {
    category: 'Orders & Payments',
    items: [
      {
        q: 'How does demo checkout work?',
        a: 'Forma provides an instant demo checkout experience that saves your order locally to your browser without collecting real payment cards or personal data. You can experience the complete shopping journey from discovery to order confirmation and tracking without a credit card.',
      },
      {
        q: 'Can I test with real Stripe payments?',
        a: 'Yes. When the website operator configures a Stripe test key in the environment, you can switch the payment option during checkout to "Stripe test checkout" and pay using standard Stripe test cards (such as 4242 4242 4242 4242). Real cards should never be entered.',
      },
      {
        q: 'What promotional discounts can I use?',
        a: 'You can enter promo code "WELCOME10" at checkout or in your shopping bag to receive 10% off your entire order subtotal.',
      },
    ],
  },
  {
    category: 'Shipping & Delivery',
    items: [
      {
        q: 'How much does shipping cost?',
        a: 'Standard delivery is free on all orders of $100 or more (after discounts). For orders under $100, standard delivery is $7.95. Express delivery is available for $14.95 regardless of order total.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery typically takes 5–7 business days. Express delivery takes 2–3 business days. Please note that in this demonstration storefront, delivery dates are illustrative estimates and no physical parcels are dispatched.',
      },
      {
        q: 'Can I track my order?',
        a: 'Yes! After placing an order, you will receive a unique order number (e.g. FM-8A2F1C90). You can enter this into our "Track your order" page anytime to review the step-by-step dispatch progress and estimated timeline.',
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day demo return window from delivery. Products must be in their original packaging, unused, and in good condition with all accessories included.',
      },
      {
        q: 'How do I start a return?',
        a: 'Head to our Returns & Exchanges page, enter your order number and email, select the items you wish to return, and follow the simple return instructions.',
      },
    ],
  },
  {
    category: 'Catalogue & Products',
    items: [
      {
        q: 'Where do the product details come from?',
        a: 'Product specifications, dimensions, photography, and sample customer reviews are drawn from the public DummyJSON open dataset, bundled locally for speed and resilience, and presented in Forma’s intentional editorial layout.',
      },
      {
        q: 'Are the products authentic?',
        a: 'This website is a demonstration storefront built to showcase an authentic, accessible, high-performance ecommerce experience using Next.js and the design-with-intent system. No real commercial goods are sold.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>FAQs</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> FREQUENTLY ASKED
        </span>
        <h1>Everything you need to know.</h1>
        <p>Clear, direct answers about ordering, delivery, demo payments, and our collection.</p>
      </div>

      <div className="faq-layout" style={{ maxWidth: '860px' }}>
        {faqs.map(group => (
          <section key={group.category} style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              {group.category}
            </h2>
            <div className="faq-accordion">
              {group.items.map((item, i) => (
                <details key={i} open={i === 0}>
                  <summary>
                    <span>{item.q}</span>
                    <Icon name="chevron" size={18} />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}

        <div className="confirmation-card" style={{ marginTop: '2rem' }}>
          <span className="eyebrow">STILL HAVE QUESTIONS?</span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.5rem 0' }}>
            Our concierge team is standing by.
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Can’t find what you’re looking for? Reach out anytime and we will be delighted to help.
          </p>
          <Link href="/contact" className="button">
            Contact us <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

