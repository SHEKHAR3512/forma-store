import Link from 'next/link';
import { Icon } from '@/components/icon';

export const metadata = {
  title: 'Returns & Exchanges — Forma',
  description: 'Our 30-day return policy and simple return portal for the Forma lifestyle store.',
};

export default function ReturnsPage() {
  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Returns & exchanges</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> ROOM TO CHANGE YOUR MIND
        </span>
        <h1>Simple, straightforward returns.</h1>
        <p>30 days to live with your new find. If it doesn’t belong in your space, we’ll make it right.</p>
      </div>

      <div className="checkout-layout">
        <section className="prose">
          <h2>The 30-Day Forma Guarantee</h2>
          <p>
            We want you to love what you bring home. If something isn’t quite right—whether the proportion doesn’t fit your room or the material isn’t what you envisioned—you can return it within 30 days of receipt.
          </p>

          <h2>How to Start a Return</h2>
          <ol style={{ paddingLeft: '1.25rem' }}>
            <li>
              <strong>Look up your order:</strong> Visit your <Link href="/orders" className="text-button" style={{ display: 'inline' }}>order history</Link> or locate your order number from your confirmation screen.
            </li>
            <li>
              <strong>Package the item securely:</strong> Place the item back into its original box with all accompanying tags, cords, and packaging inserts.
            </li>
            <li>
              <strong>Download prepaid return label:</strong> Print out the provided return shipping label and affix it over the original barcode.
            </li>
            <li>
              <strong>Drop off at any carrier depot:</strong> Hand the parcel over to your local postal carrier. Once scanned, you can track the return status in real-time.
            </li>
          </ol>

          <h2>Item Condition Guidelines</h2>
          <p>To qualify for a full refund to your original payment method:</p>
          <ul>
            <li>Items must be in unwashed, unused, and undamaged condition.</li>
            <li>Original designer boxes, dust bags, and hardware accessories must be included.</li>
            <li>Beauty & personal wellness products must remain sealed in their tamper-evident packaging for hygiene reasons.</li>
          </ul>

          <h2>Refund Processing</h2>
          <p>
            Once our intake studio receives and inspects your returned package, your refund is initiated within 2 business days. In live Stripe mode, refunds reflect on your statement within 5–10 business days depending on your bank.
          </p>
        </section>

        <aside className="order-summary" style={{ top: '6rem' }}>
          <h2>Return Summary</h2>
          <div className="product-promises" style={{ border: 'none', padding: 0 }}>
            <div>
              <Icon name="return" />
              <div>
                <strong>30-Day Window</strong>
                <p>Calculated from the date your delivery arrives.</p>
              </div>
            </div>
            <div>
              <Icon name="truck" />
              <div>
                <strong>Prepaid Labels</strong>
                <p>Easy drop-off at thousands of local postal partners.</p>
              </div>
            </div>
            <div>
              <Icon name="shield" />
              <div>
                <strong>Full Refund Guarantee</strong>
                <p>Returned to your original payment method with no restocking fees.</p>
              </div>
            </div>
          </div>
          <Link href="/contact" className="button full" style={{ marginTop: '1.5rem' }}>
            Contact customer care <Icon name="arrow" size={18} />
          </Link>
        </aside>
      </div>
    </div>
  );
}

