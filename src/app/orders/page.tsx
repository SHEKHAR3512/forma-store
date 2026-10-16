'use client';

import Link from 'next/link';
import { useStore } from '@/components/store';
import { getProduct, money } from '@/lib/catalog';
import { ProductImage } from '@/components/product-card';
import { Icon } from '@/components/icon';
import { EmptyState } from '@/components/cart';

export default function OrdersPage() {
  const store = useStore();

  if (!store.ready) {
    return <div className="loading-state">Gathering your orders…</div>;
  }

  if (store.orders.length === 0) {
    return (
      <EmptyState
        icon="box"
        title="No orders yet."
        description="When you place a demo order or complete a Stripe test checkout, it will be saved right here."
        action="Explore the collection"
        href="/shop"
      />
    );
  }

  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>My orders</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> ORDER HISTORY
        </span>
        <h1>Your past good finds.</h1>
        <p>Review details, track parcel journeys, or re-order pieces you love.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {store.orders.map(order => (
          <article
            key={order.id}
            className="confirmation-card"
            style={{ margin: 0, padding: '2rem' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              <div>
                <span className="eyebrow">ORDER NUMBER</span>
                <strong style={{ fontSize: '1.4rem', margin: '0.2rem 0' }}>{order.id}</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Placed on {new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span className="status-badge placed">Demo order placed</span>
                <Link href={`/track-order?id=${order.id}`} className="button secondary small">
                  Track parcel <Icon name="arrow" size={14} />
                </Link>
              </div>
            </div>

            <div className="cart-items" style={{ border: 'none', padding: 0, margin: 0 }}>
              {order.items.map(item => {
                const product = getProduct(item.productId);
                if (!product) return null;
                return (
                  <div className="cart-item" key={product.id} style={{ padding: '0.85rem' }}>
                    <Link href={`/products/${product.id}`} className="cart-image">
                      <ProductImage product={product} />
                    </Link>
                    <div className="cart-item-info">
                      <span className="eyebrow">{product.brand ?? 'FORMA'}</span>
                      <Link href={`/products/${product.id}`}>
                        <h2>{product.title}</h2>
                      </Link>
                      <span>Quantity: {item.quantity} · {money(product.price)} each</span>
                      <button
                        className="text-button"
                        onClick={() => {
                          store.add(product.id, item.quantity);
                        }}
                      >
                        Buy again
                      </button>
                    </div>
                    <div className="cart-item-controls">
                      <strong>{money(product.price * item.quantity)}</strong>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1.5rem',
                marginTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <strong>Delivering to:</strong> {order.name} ({order.shipping})
              </div>
              <div style={{ fontSize: '1.15rem' }}>
                Total: <strong>{money(order.total)}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

