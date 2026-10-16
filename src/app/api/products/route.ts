import { NextResponse } from 'next/server';
import { products, groups, label } from '@/lib/catalog';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() ?? '';
  const category = searchParams.get('category') ?? '';
  const sort = searchParams.get('sort') ?? 'curated';
  const limit = Math.min(Number(searchParams.get('limit') ?? 20), 100);
  const skip = Number(searchParams.get('skip') ?? 0);

  let filtered = products.filter(p => {
    const matchesQuery = !q || `${p.title} ${p.brand} ${p.category} ${p.description}`.toLowerCase().includes(q);
    const matchesCat = !category || (groups[category]?.includes(p.category) ?? p.category === category);
    return matchesQuery && matchesCat;
  });

  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const paginated = filtered.slice(skip, skip + limit);

  return NextResponse.json({
    products: paginated,
    total: filtered.length,
    skip,
    limit,
    categories: Object.keys(groups),
  });
}

