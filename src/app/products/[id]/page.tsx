import { notFound } from 'next/navigation';
import { getProduct, products, categoryGroup } from '@/lib/catalog';
import { ProductDetail } from '@/components/product-detail';
import { ProductCard } from '@/components/product-card';
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const p=getProduct((await params).id);return {title:p?.title??'Product not found',description:p?.description};}
export default async function ProductPage({params}:{params:Promise<{id:string}>}){const p=getProduct((await params).id);if(!p)notFound();const related=products.filter(x=>x.id!==p.id&&categoryGroup(x.category)===categoryGroup(p.category)).slice(0,4);return <div className="page-shell"><ProductDetail product={p}/><section className="related"><div className="section-heading"><div><span className="eyebrow">GOOD COMPANY</span><h2>You might also love.</h2></div></div><div className="product-grid">{related.map(p=><ProductCard key={p.id} product={p}/>)}</div></section></div>;}
