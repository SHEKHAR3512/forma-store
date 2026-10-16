'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useStore } from '@/components/store';
import { getProduct, money } from '@/lib/catalog';
import { ProductImage } from '@/components/product-card';
import { Icon } from '@/components/icon';

function TrackingContent() {
  const store = useStore();
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') ?? '';
  const [query, setQuery] = useState(initialId);
  const [searchedId, setSearchedId] = useState(initialId);

  useEffect(() => {
    if (initialId) {
      setQuery(initialId);
      setSearchedId(initialId);
    } else if (store.orders.length > 0) {
      setQuery(store.orders[0].id);
      setSearchedId(store.orders[0].id);
    }
  }, [initialId, store.orders]);

  const matchedOrder = store.orders.find(
    o => o.id.trim().toUpperCase() === searchedId.trim().toUpperCase()
  );

  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Order tracking</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> DISPATCH & COURIER STATUS
        </span>
        <h1>Track your delivery.</h1>
        <p>Follow your parcel from our packaging studio all the way to your door.</p>
      </div>

      <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
        <form
          className="shop-search"
          onSubmit={e => {
            e.preventDefault();
            setSearchedId(query);
          }}
          style={{ background: 'var(--surface-raised)', padding: '0.6rem 1rem' }}
        >
          <Icon name="search" />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Enter your order number (e.g. FM-1A2B3C4D)"
            aria-label="Order number"
          />
          <button type="submit" className="button small">
            Track <Icon name="arrow" size={16} />
          </button>
        </form>

        {store.orders.length > 0 && !matchedOrder && (
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Recent orders in this browser:{' '}
            {store.orders.map(o => (
              <button
                key={o.id}
                type="button"
                className="text-button"
                style={{ marginLeft: '0.5rem', display: 'inline' }}
                onClick={() => {
                  setQuery(o.id);
                  setSearchedId(o.id);
                }}
              >
                {o.id}
              </button>
            ))}
          </div>
        )}
      </div>

      {matchedOrder ? (
        <div className="checkout-layout">
          <section>
            <div className="confirmation-card" style={{ marginTop: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span className="eyebrow">ORDER REF</span>
                  <strong style={{ fontSize: '1.75rem' }}>{matchedOrder.id}</strong>
                  <p style={{ margin: '0.25rem 0 0', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    Placed on {new Date(matchedOrder.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
                <span className="status-badge placed">In Transit · On Schedule</span>
              </div>

              <div className="tracking-timeline">
                <div className="timeline-step complete">
                  <div className="timeline-dot"><Icon name="check" size={12} /></div>
                  <strong style={{ display: 'block', fontSize: '0.9375rem' }}>Order Confirmed & Verified</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Demo order received into studio system</span>
                </div>
                <div className="timeline-step complete">
                  <div className="timeline-dot"><Icon name="check" size={12} /></div>
                  <strong style={{ display: 'block', fontSize: '0.9375rem' }}>Packed in Recycled Materials</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Safely inspected with plastic-free cushioning</span>
                </div>
                <div className="timeline-step active">
                  <div className="timeline-dot" />
                  <strong style={{ display: 'block', fontSize: '0.9375rem' }}>Departed Regional Distribution Center</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--action-accent)', fontWeight: 600 }}>In transit with courier partner · Illustrative status</span>
                </div>
                <div className="timeline-step">
                  <div className="timeline-dot" />
                  <strong style={{ display: 'block', fontSize: '0.9375rem', color: 'var(--text-muted)' }}>Out for Delivery</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Estimated within 3 business days</span>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Delivering to</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                  {matchedOrder.name}<br />
                  {matchedOrder.shipping}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Items in this parcel</h2>
              <div className="cart-items" style={{ border: 'none' }}>
                {matchedOrder.items.map(item => {
                  const p = getProduct(item.productId);
                  if (!p) return null;
                  return (
                    <article className="cart-item" key={p.id}>
                      <Link href={`/products/${p.id}`} className="cart-image">
                        <ProductImage product={p} />
                      </Link>
                      <div className="cart-item-info">
                        <span className="eyebrow">{p.brand ?? 'FORMA'}</span>
                        <Link href={`/products/${p.id}`}>
                          <h2>{p.title}</h2>
                        </Link>
                        <span>Quantity: {item.quantity}</span>
                      </div>
                      <div className="cart-item-controls">
                        <strong>{money(p.price * item.quantity)}</strong>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <aside className="order-summary" style={{ top: '6rem' }}>
            <h2>Parcel Details</h2>
            <div className="summary-line">
              <span>Carrier</span>
              <strong>Forma Courier Express</strong>
            </div>
            <div className="summary-line">
              <span>Tracking Number</span>
              <span style={{ fontFamily: 'monospace' }}>TRK-{matchedOrder.id.replace('FM-', '')}92</span>
            </div>
            <div className="summary-line">
              <span>Total Paid</span>
              <strong>{money(matchedOrder.total)}</strong>
            </div>
            <p className="small-print" style={{ marginTop: '1rem' }}>
              Demo tracking details. No actual commercial package is in transit.
            </p>
            <Link href="/orders" className="button secondary full">
              View all orders <Icon name="arrow" size={16} />
            </Link>
          </aside>
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon">
            <Icon name="truck" size={36} />
          </span>
          <h2>{searchedId ? 'Order not found' : 'Ready to track'}</h2>
          <p>
            {searchedId
              ? `We couldn’t find an order matching “${searchedId}” in this browser’s session. Please check your order code or place an order to test tracking.`
              : 'Enter your Forma order number above to view live dispatch milestones.'}
          </p>
          <Link href="/shop" className="button">
            Explore the shop <Icon name="arrow" size={18} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="loading-state">Loading order tracker…</div>}>
      <TrackingContent />
    </Suspense>
  );
}

