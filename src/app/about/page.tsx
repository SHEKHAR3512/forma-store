import Link from 'next/link';
import { Icon } from '@/components/icon';
import { Newsletter } from '@/components/shell';

export const metadata = {
  title: 'Our Story — Forma',
  description: 'The story behind Forma: good things for the way you live. Intentional design, honest materials, and everyday joy.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-shell">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Our story</span>
        </div>

        <div className="page-intro">
          <span className="eyebrow">
            <span className="tiny-line" /> THE FORMA PHILOSOPHY
          </span>
          <h1>A little more considered.<br />A little more you.</h1>
          <p>We started Forma on a simple question: what if the objects in our daily life gave more than they took?</p>
        </div>

        <section className="editorial-banner" style={{ margin: '2rem 0 5rem' }}>
          <div className="editorial-photo">
            <img
              src="/images/story.jpg"
              alt="Artisan ceramics and warm wooden kitchen surfaces bathed in afternoon light"
            />
            <span className="photo-caption">CURATED WITH CARE · EST. 2024</span>
          </div>
          <div className="editorial-copy">
            <span className="eyebrow">NOT MORE THINGS. MORE MEANING.</span>
            <h2>Designed for living, not just looking.</h2>
            <p>
              In a world flooded with fast disposable goods, Forma is an antidote. We bring together homewares,
              apparel, technology, and self-care items that honor craftsmanship, durability, and understated elegance.
            </p>
            <p>
              Every piece in our catalogue is chosen because it does its job quietly and impeccably—elevating your
              morning rituals, grounding your living spaces, and lasting for seasons to come.
            </p>
          </div>
        </section>

        <section className="section" style={{ padding: '0 0 4rem' }}>
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR THREE PROMISES</span>
              <h2>How we make decisions.</h2>
            </div>
          </div>
          <div className="category-grid">
            <div className="category-card sand" style={{ minHeight: '260px' }}>
              <div className="category-number">01 <Icon name="leaf" size={24} /></div>
              <div>
                <h3>Material Honesty</h3>
                <p>Natural woods, ceramics, organic fibers, and repairable electronics. No misleading finishes or fake longevity.</p>
              </div>
            </div>
            <div className="category-card rose" style={{ minHeight: '260px' }}>
              <div className="category-number">02 <Icon name="shield" size={24} /></div>
              <div>
                <h3>Fair Sourcing</h3>
                <p>We partner with responsible studios and independent makers who treat their craftspeople and workshops with dignity.</p>
              </div>
            </div>
            <div className="category-card sage" style={{ minHeight: '260px' }}>
              <div className="category-number">03 <Icon name="box" size={24} /></div>
              <div>
                <h3>Low-Waste Packaging</h3>
                <p>Curated without superfluous plastics. Recycled cardboard, water-activated paper tape, and biodegradable padding.</p>
              </div>
            </div>
            <div className="category-card lavender" style={{ minHeight: '260px' }}>
              <div className="category-number">04 <Icon name="heart" size={24} /></div>
              <div>
                <h3>Timeless Aesthetic</h3>
                <p>Pieces that outlive fleeting micro-trends. If it won’t look handsome five years from today, it doesn’t enter the edit.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="brand-statement" style={{ margin: '2rem 0' }}>
          <span>LIVE WITH INTENTION</span>
          <span>find what belongs.</span>
          <Link href="/shop" className="button secondary" style={{ marginTop: '1.5rem', background: '#FFF' }}>
            Explore the full collection <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

