import {Suspense} from 'react';
import {CheckoutSuccess} from '@/components/checkout';
export const metadata={title:'Order confirmation'};
export default function Page(){return <Suspense fallback={<div className="loading-state">Checking your order…</div>}><CheckoutSuccess/></Suspense>;}
