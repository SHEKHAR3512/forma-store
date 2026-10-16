import data from '@/data/products.json';
export type Product = (typeof data.products)[number];
export const products: Product[] = data.products.filter(p => !['vehicle', 'motorcycle', 'groceries'].includes(p.category));
export const money = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
export const label = (s: string) => s.replaceAll('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
export const groups: Record<string, string[]> = {
  'Home & Living': ['furniture', 'home-decoration', 'kitchen-accessories'],
  'Style & Accessories': ['mens-shirts', 'mens-shoes', 'mens-watches', 'womens-bags', 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches', 'sunglasses', 'tops'],
  'Tech & Audio': ['laptops', 'mobile-accessories', 'smartphones', 'tablets'],
  'Beauty & Wellness': ['beauty', 'fragrances', 'skin-care', 'sports-accessories'],
};
export const categoryGroup = (category: string) => Object.keys(groups).find(g => groups[g].includes(category)) ?? label(category);
export const featuredIds = [101, 47, 14, 8, 46, 80, 103, 89];
export const featured = featuredIds.map(id => products.find(p => p.id === id)).filter((p): p is Product => !!p);
export const getProduct = (id: string | number) => products.find(p => p.id === Number(id));
export function totals(items: { productId: number; quantity: number }[], coupon = '', express = false) {
  const subtotal = Math.round(items.reduce((sum, item) => sum + (getProduct(item.productId)?.price ?? 0) * item.quantity, 0) * 100) / 100;
  const discount = coupon.toUpperCase() === 'WELCOME10' ? Math.round(subtotal * 10) / 100 : 0;
  const shipping = subtotal === 0 ? 0 : express ? 14.95 : subtotal - discount >= 100 ? 0 : 7.95;
  return { subtotal, discount, shipping, total: Math.round((subtotal - discount + shipping) * 100) / 100 };
}
