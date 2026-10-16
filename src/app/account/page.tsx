'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/components/store';
import { Icon } from '@/components/icon';

export default function AccountPage() {
  const store = useStore();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(store.profile?.name ?? 'Morgan Lee');
  const [email, setEmail] = useState(store.profile?.email ?? 'morgan@example.com');
  const [feedback, setFeedback] = useState('');

  if (!store.ready) {
    return <div className="loading-state">Loading your account…</div>;
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    store.saveProfile({ name, email });
    setEditing(false);
    setFeedback('Profile details saved.');
    setTimeout(() => setFeedback(''), 3000);
  }

  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Account</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> YOUR PROFILE
        </span>
        <h1>Welcome back, {store.profile?.name?.split(' ')[0] ?? 'Friend'}.</h1>
        <p>Manage your shopping preferences, saved details, orders, and wishlist.</p>
      </div>

      <div className="checkout-layout">
        <section>
          <div className="confirmation-card" style={{ marginTop: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Personal Details</h2>
              {!editing && (
                <button
                  type="button"
                  className="text-button"
                  onClick={() => setEditing(true)}
                >
                  Edit details
                </button>
              )}
            </div>

            {editing ? (
              <form onSubmit={handleSave}>
                <div className="form-grid">
                  <label>
                    Full Name
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      minLength={2}
                    />
                  </label>
                  <label>
                    Email Address
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                  <button type="submit" className="button small">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="button secondary small"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ lineHeight: 1.8, fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                <p>
                  <strong>Name:</strong> {store.profile?.name ?? name}
                </p>
                <p>
                  <strong>Email:</strong> {store.profile?.email ?? email}
                </p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  These details will automatically pre-fill your checkout forms for quick purchasing.
                </p>
              </div>
            )}

            {feedback && (
              <p style={{ color: 'var(--action-accent)', fontWeight: 600, marginTop: '0.75rem', fontSize: '0.875rem' }}>
                ✓ {feedback}
              </p>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <div className="confirmation-card" style={{ margin: 0 }}>
              <span className="eyebrow">SAVED FINDS</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{store.wishlist.length} Items</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Your curated personal shortlist of favorites.
              </p>
              <Link href="/wishlist" className="button secondary small">
                View wishlist <Icon name="arrow" size={14} />
              </Link>
            </div>

            <div className="confirmation-card" style={{ margin: 0 }}>
              <span className="eyebrow">ORDER HISTORY</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{store.orders.length} Placed</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Review past demo purchases and tracking numbers.
              </p>
              <Link href="/orders" className="button secondary small">
                View past orders <Icon name="arrow" size={14} />
              </Link>
            </div>
          </div>
        </section>

        <aside className="order-summary" style={{ top: '6rem' }}>
          <h2>Account Actions</h2>
          <div className="product-promises" style={{ border: 'none', padding: 0 }}>
            <div>
              <Icon name="shield" />
              <div>
                <strong>Local Browser Storage</strong>
                <p>All data stays private on your device.</p>
              </div>
            </div>
            <div>
              <Icon name="truck" />
              <div>
                <strong>Fast Express Checkout</strong>
                <p>Saved details pass automatically to Stripe.</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="text-button"
            style={{ color: 'var(--status-error)', marginTop: '1rem' }}
            onClick={() => {
              if (confirm('Are you sure you want to clear your demo cart, wishlist, and orders?')) {
                localStorage.removeItem('forma-store-v1');
                window.location.reload();
              }
            }}
          >
            Reset demo session data
          </button>
        </aside>
      </div>
    </div>
  );
}

