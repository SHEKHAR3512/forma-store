'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/icon';

export default function ContactPage() {
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      topic: (form.elements.namedItem('topic') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error ?? 'Failed to send message');
      setSuccess(true);
      form.reset();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Contact</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> HERE TO HELP
        </span>
        <h1>We’d love to hear from you.</h1>
        <p>Questions about an order, a specific piece in our collection, or just want to say hello?</p>
      </div>

      <div className="checkout-layout">
        <section>
          {success ? (
            <div className="confirmation-card" style={{ marginTop: 0 }}>
              <span className="status-badge placed">Message received</span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>
                Thank you for getting in touch.
              </h2>
              <p>
                A member of the Forma team will review your message and reply via email within 24 hours.
              </p>
              <button
                type="button"
                className="button secondary"
                style={{ marginTop: '1.5rem' }}
                onClick={() => setSuccess(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <label>
                  Your Name
                  <input name="name" required minLength={2} placeholder="Alex Morgan" maxLength={100} />
                </label>
                <label>
                  Email Address
                  <input name="email" type="email" required placeholder="alex@example.com" maxLength={254} />
                </label>
                <label className="span-two">
                  Subject / Topic
                  <select name="topic" defaultValue="order">
                    <option value="order">Order inquiry & tracking</option>
                    <option value="product">Product advice & sizing</option>
                    <option value="returns">Returns & replacements</option>
                    <option value="partnership">Press & collaborations</option>
                    <option value="general">General feedback</option>
                  </select>
                </label>
                <label className="span-two">
                  How can we help?
                  <textarea
                    name="message"
                    required
                    minLength={5}
                    rows={6}
                    placeholder="Tell us a little bit about what you need..."
                  />
                </label>
              </div>

              {error && <p className="error-message" role="alert">{error}</p>}

              <button type="submit" disabled={busy} className="button">
                {busy ? 'Sending message...' : 'Send message'} <Icon name="arrow" size={18} />
              </button>
            </form>
          )}
        </section>

        <aside className="order-summary" style={{ top: '6rem' }}>
          <h2>Direct Concierge</h2>
          <div className="product-promises" style={{ border: 'none', padding: 0 }}>
            <div>
              <Icon name="mail" />
              <div>
                <strong>Email us directly</strong>
                <p>care@forma-lifestyle.demo</p>
                <small className="small-print">Replies within 1 business day</small>
              </div>
            </div>
            <div>
              <Icon name="box" />
              <div>
                <strong>Studio Hours</strong>
                <p>Monday – Friday: 9am – 6pm EST</p>
                <small className="small-print">Saturday: 10am – 4pm EST</small>
              </div>
            </div>
            <div>
              <Icon name="truck" />
              <div>
                <strong>Order Support</strong>
                <p>
                  Need to check a parcel? Use our{' '}
                  <Link href="/track-order" className="text-button" style={{ display: 'inline' }}>
                    Order Tracker
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Looking for quick answers?
            </p>
            <Link href="/faq" className="text-link" style={{ marginTop: '0.5rem' }}>
              Browse Frequently Asked Questions <Icon name="arrow" size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

