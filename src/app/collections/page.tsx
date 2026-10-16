import Link from 'next/link';
import { groups, products, getProduct } from '@/lib/catalog';
import { ProductImage } from '@/components/product-card';
import { Icon } from '@/components/icon';
export const metadata={title:'Collections'};
export default function Collections(){return <div className="page-shell"><div className="page-intro"><span className="eyebrow">A DIFFERENT WAY TO DISCOVER</span><h1>Find your kind of good.</h1><p>Four collections. Countless ways to make them your own.</p></div><div className="collection-grid">{Object.entries(groups).map(([name,categories],i)=><Link href={`/shop?category=${encodeURIComponent(name)}`} className={`collection-tile ${['sand','rose','sage','lavender'][i]}`} key={name}><span className="eyebrow">COLLECTION 0{i+1}</span><ProductImage product={getProduct([14,89,101,8][i])!}/><div><h2>{name}</h2><span>{products.filter(p=>categories.includes(p.category)).length} considered finds <Icon name="arrow"/></span></div></Link>)}</div></div>;}
