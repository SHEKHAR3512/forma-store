import Link from 'next/link';
import { Icon } from '@/components/icon';

export const metadata = {
  title: 'Shipping & Delivery Guide — Forma',
  description: 'Detailed information about Forma delivery speeds, rates, international destinations, and sustainable packaging.',
};

export default function ShippingPage() {
  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Shipping & delivery</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> FULFILMENT & TRANSIT
        </span>
        <h1>Delivered with intention.</h1>
        <p>Simple pricing, predictable timelines, and eco-conscious packaging for every parcel.</p>
      </div>

      <div className="checkout-layout">
        <section className="prose">
          <h2>Shipping Rates & Speeds</h2>
          <p>
            We keep our shipping options simple. We believe you shouldn’t have to solve complicated rate tables just to bring a good thing home.
          </p>

          <div style={{ overflowX: 'auto', margin: '1.5rem 0 2.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-strong)', background: 'var(--surface-subtle)' }}>
                  <th style={{ padding: '0.85rem 1rem' }}>Service</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Estimated Transit</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Orders $100+</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Orders under $100</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Standard Delivery</td>
                  <td style={{ padding: '1rem' }}>5–7 business days</td>
                  <td style={{ padding: '1rem', color: 'var(--action-accent)', fontWeight: 700 }}>FREE</td>
                  <td style={{ padding: '1rem' }}>$7.95</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Express Delivery</td>
                  <td style={{ padding: '1rem' }}>2–3 business days</td>
                  <td style={{ padding: '1rem' }}>$14.95</td>
                  <td style={{ padding: '1rem' }}>$14.95</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How We Pack Your Orders</h2>
          <p>
            The unboxing experience should be a pleasure, not an exercise in wrestling plastic. All Forma orders are packed with:
          </p>
          <ul>
            <li><strong>FSC-certified corrugated boxes</strong> made from 80%+ post-consumer recycled paper.</li>
            <li><strong>Water-activated kraft paper tape</strong> that can be recycled right along with the box.</li>
            <li><strong>Molded fiber or unbleached crinkle paper</strong> for fragile ceramics and electronics.</li>
          </ul>

          <h2>Order Tracking</h2>
          <p>
            Once you submit your order at checkout, an order reference is instantly generated (e.g. <code>FM-8A2F1C90</code>).
            You can monitor its status at any time via our{' '}
            <Link href="/track-order" className="text-button" style={{ display: 'inline' }}>
              order tracker
            </Link>.
          </p>

          <h2>International Delivery</h2>
          <p>
            Our demo checkout supports addresses across the United States, Canada, the United Kingdom, Australia, Germany, and India.
            Standard international delivery is calculated on an illustrative flat rate.
          </p>
        </section>

        <aside className="order-summary" style={{ top: '6rem' }}>
          <h2>Key Highlights</h2>
          <div className="product-promises" style={{ border: 'none', padding: 0 }}>
            <div>
              <Icon name="truck" />
              <div>
                <strong>Free Standard Shipping</strong>
                <p>Applies automatically at checkout on orders of $100 or more.</p>
              </div>
            </div>
            <div>
              <Icon name="box" />
              <div>
                <strong>Eco-Friendly Packaging</strong>
                <p>100% recyclable paper materials and plastic-free cushioning.</p>
              </div>
            </div>
            <div>
              <Icon name="shield" />
              <div>
                <strong>Tracked From Dispatch</strong>
                <p>Direct tracking updates from packing to front door.</p>
              </div>
            </div>
          </div>
          <Link href="/shop" className="button full" style={{ marginTop: '1.5rem' }}>
            Browse the shop <Icon name="arrow" size={18} />
          </Link>
        </aside>
      </div>
    </div>
  );
}

