import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Forma',
  description: 'How Forma protects customer data, respects privacy, and handles local browser shopping storage.',
};

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Privacy Policy</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> PRIVACY & DATA PROTECTION
        </span>
        <h1>Your privacy matters to us.</h1>
        <p>Last updated: October 2024 · Clear, transparent data principles.</p>
      </div>

      <div className="prose">
        <h2>1. Overview</h2>
        <p>
          Forma (“we”, “our”, or “us”) is dedicated to honoring and safeguarding the personal privacy of our visitors. This policy outlines how information is gathered, stored, and utilized throughout your interactions on our demonstration storefront.
        </p>

        <h2>2. Local Browser Storage</h2>
        <p>
          To deliver a smooth shopping experience without requiring account creation or tracking cookies, Forma stores your shopping bag, wishlist, and recent demo order references directly within your local browser storage (<code>localStorage</code>). This data remains exclusively on your device and is not sold, rented, or transmitted to data brokers.
        </p>

        <h2>3. Payment Processing & Stripe</h2>
        <p>
          When you select the Stripe payment method during checkout, your transaction is processed directly through Stripe’s secure hosted checkout infrastructure. Forma never receives, processes, or stores raw credit card numbers or sensitive verification codes on our servers. For demonstration purposes, only Stripe test cards should be used.
        </p>

        <h2>4. Newsletter & Inquiries</h2>
        <p>
          If you choose to subscribe to our newsletter or send a message via our contact form, we collect only the information you voluntarily submit (such as your name and email address) strictly to provide the requested updates or support response. You may unsubscribe from newsletter communications at any time.
        </p>

        <h2>5. Your Rights & Data Deletion</h2>
        <p>
          You have full control over your stored shopping session data. You can clear your cart, orders, and wishlist at any time by visiting your{' '}
          <Link href="/account" className="text-button" style={{ display: 'inline' }}>
            Account Settings
          </Link>{' '}
          and selecting “Reset demo session data”, or by clearing your browser’s cookies and site storage.
        </p>
      </div>
    </div>
  );
}

