import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@/components/icon';
import { articles } from '../page';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  return {
    title: article ? `${article.title} — Forma Journal` : 'Article Not Found',
    description: article?.excerpt,
  };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) notFound();

  return (
    <article className="page-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/journal">The Journal</Link>
        <span>/</span>
        <span>{article.category}</span>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <span className="eyebrow">{article.category}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>·</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{article.readTime}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.5rem' }}>
          {article.title}
        </h1>

        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
          {article.excerpt}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2.5rem' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--surface-dark)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
            FM
          </div>
          <div>
            <strong style={{ display: 'block', fontSize: '0.9375rem' }}>Forma Editorial Desk</strong>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Published on {article.date}</span>
          </div>
        </div>

        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', maxHeight: '480px' }}>
          <img
            src={article.image}
            alt={article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="prose" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
          <p>
            When we take inventory of the spaces we inhabit, the sheer number of objects competing for our attention can be overwhelming. Yet, human beings thrive on simplicity and tactile calm. An uncluttered shelf, a single ceramic cup that feels balanced in your palm, or a linen throw with an organic drape can fundamentally change the tempo of a home.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--action-accent)', paddingLeft: '1.5rem', margin: '2.5rem 0', fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.35rem', lineHeight: 1.5 }}>
            “The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.”
          </blockquote>

          <h2>The Intention Behind Everyday Objects</h2>
          <p>
            Consider the items you use every day. Does your kettle pour with precision? Does your coat hang with ease? When tools perform their tasks effortlessly, they fade into the background, leaving you to experience the moment itself.
          </p>
          <p>
            This is the heartbeat behind Forma’s curation. We spend months testing, touching, and evaluating goods so that when they finally arrive at your door, they feel like they have always belonged there.
          </p>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/journal" className="text-link">
            ← Back to all stories
          </Link>
          <Link href="/shop" className="button">
            Shop the collection <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

