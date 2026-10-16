import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — Forma',
  description: 'Terms and conditions for browsing and shopping on the Forma demonstration storefront.',
};

export default function TermsPage() {
  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Terms of Service</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> LEGAL & CONDITIONS
        </span>
        <h1>Terms of Service.</h1>
        <p>Last updated: October 2024 · Storefront terms and demo notices.</p>
      </div>

      <div className="prose">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and utilizing the Forma website, you acknowledge and agree to comply with these Terms of Service. If you do not agree with any part of these terms, please discontinue use of this site.
        </p>

        <h2>2. Demonstration Storefront Notice</h2>
        <p>
          Forma is an illustrative demonstration ecommerce storefront created to demonstrate modern, responsive, accessible web architecture utilizing Next.js and the design-with-intent principles. <strong>No physical consumer goods are sold, stocked, or fulfilled through this demonstration site.</strong> Any orders placed via Demo Checkout or Stripe Test Checkout are sample transactions.
        </p>

        <h2>3. Product Information & Accuracy</h2>
        <p>
          Product titles, descriptions, dimensions, prices, and sample ratings are derived from the open DummyJSON dataset. While we strive to ensure accurate presentation, catalogue items are illustrative and do not reflect real-time commercial inventory or warranties.
        </p>

        <h2>4. User Conduct</h2>
        <p>
          You agree not to disrupt or attempt to compromise the integrity, security, or availability of the website, its APIs, or connected server infrastructure. Real payment credentials or sensitive personal financial information must not be entered into demo checkout fields.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          Forma and its developers shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this demonstration website.
        </p>
      </div>
    </div>
  );
}

