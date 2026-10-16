import { mkdir, writeFile, readFile } from 'node:fs/promises';
const endpoint = 'https://dummyjson.com/products?limit=0';
let data;
try { const r = await fetch(endpoint, { signal: AbortSignal.timeout(20000) }); if (!r.ok) throw new Error(String(r.status)); data = await r.json(); await writeFile('src/data/products.json', JSON.stringify(data, null, 2)); }
catch (e) { console.warn('Using bundled catalogue:', e.message); data = JSON.parse(await readFile('src/data/products.json', 'utf8')); }
await mkdir('public/images/products', { recursive: true });
let cursor = 0, downloaded = 0;
async function worker() { while (cursor < data.products.length) { const p = data.products[cursor++]; try { const r = await fetch(p.thumbnail, { signal: AbortSignal.timeout(15000) }); if (!r.ok) throw new Error(String(r.status)); await writeFile(`public/images/products/${p.id}.webp`, Buffer.from(await r.arrayBuffer())); downloaded++; } catch { console.warn(`Image unavailable for ${p.id}`); } } }
await Promise.all(Array.from({ length: 8 }, worker));
console.log(`Saved ${data.products.length} API products and ${downloaded} local thumbnails.`);
