import Link from 'next/link';
import { Icon } from '@/components/icon';

export const metadata = {
  title: 'The Journal — Forma',
  description: 'Essays, design conversations, and inspiration on living thoughtfully with the things you love.',
};

export const articles = [
  {
    slug: 'living-with-intention',
    title: 'Living with less, living with intention.',
    excerpt: 'Why paring back the noise in our homes creates space for clarity, calmness, and rituals that truly matter.',
    date: 'October 12, 2024',
    readTime: '4 min read',
    category: 'Philosophy',
    image: '/images/hero.jpg',
  },
  {
    slug: 'the-quiet-morning',
    title: 'The architecture of a quiet morning.',
    excerpt: 'How thoughtful light, tactile ceramics, and a slower pace can transform the first thirty minutes of your day.',
    date: 'September 28, 2024',
    readTime: '5 min read',
    category: 'Rituals',
    image: '/images/story.jpg',
  },
  {
    slug: 'materials-that-age',
    title: 'Why natural materials age better than trends.',
    excerpt: 'Solid wood, unglazed clay, and vegetable-tanned leather tell stories over time that plastic polymers never will.',
    date: 'September 15, 2024',
    readTime: '6 min read',
    category: 'Craftsmanship',
    image: '/images/hero.jpg',
  },
];

export default function JournalPage() {
  return (
    <div className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>The Journal</span>
      </div>

      <div className="page-intro">
        <span className="eyebrow">
          <span className="tiny-line" /> THE FORMA JOURNAL
        </span>
        <h1>Stories for slow living.</h1>
        <p>Conversations on design, materials, and everyday rituals worth keeping.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {articles.map(article => (
          <article
            key={article.slug}
            style={{
              background: 'var(--surface-raised)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
              <img
                src={article.image}
                alt={article.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <span className="eyebrow">{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0.4rem 0 0.75rem', lineHeight: 1.3 }}>
                <Link href={`/journal/${article.slug}`}>{article.title}</Link>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                {article.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{article.date}</span>
                <Link href={`/journal/${article.slug}`} className="text-link">
                  Read article <Icon name="arrow" size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

