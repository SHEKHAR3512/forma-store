import {Suspense} from 'react';
import {Checkout} from '@/components/checkout';
export const metadata={title:'Secure checkout'};
export default function Page(){return <Suspense fallback={<div className="loading-state">Preparing checkout…</div>}><Checkout/></Suspense>;}
