import type { Metadata } from 'next';
import { StoreProvider } from '@/components/store';
import { Header, Footer } from '@/components/shell';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Forma — Good things for your everyday', template: '%s · Forma' }, description: 'Discover a considered collection of home, style, tech and everyday essentials. A thoughtfully designed demo shopping experience.', robots: { index: false, follow: true } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body><StoreProvider><Header/><main id="main">{children}</main><Footer/></StoreProvider></body></html>;}
