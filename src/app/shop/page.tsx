import { Suspense } from 'react';
import { CatalogBrowser } from '@/components/catalog-browser';
export const metadata={title:'Shop the collection'};
export default function Shop(){return <Suspense fallback={<div className="loading-state">Gathering the good things…</div>}><CatalogBrowser/></Suspense>;}
