import { NextResponse } from 'next/server';
import { getProduct, totals } from '@/lib/catalog';

export async function GET() {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const isAvailable = Boolean(
    stripeKey && (stripeKey.startsWith('sk_test_') || stripeKey.startsWith('sk_live_'))
  );
  return NextResponse.json({
    stripeAvailable: isAvailable,
    mode: stripeKey?.startsWith('sk_live_') ? 'live' : 'test',
    message: isAvailable
      ? 'Stripe test payment provider is configured.'
      : 'Stripe credentials not configured. Demo instant checkout is available without credentials.',
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, coupon, express, email } = body;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey || (!stripeKey.startsWith('sk_test_') && !stripeKey.startsWith('sk_live_'))) {
      return NextResponse.json(
        {
          error:
            'Stripe payment is not configured. Add STRIPE_SECRET_KEY in .env.local to enable Stripe checkout, or select Demo Checkout.',
        },
        { status: 503 }
      );
    }

    const appUrl = process.env.APP_URL || 'http://localhost:3000';
    const sum = totals(items, coupon, express);

    // Build Stripe checkout session using native fetch to Stripe API
    const lineItems = items.map((item: { productId: number; quantity: number }, idx: number) => {
      const product = getProduct(item.productId);
      return {
        [`line_items[${idx}][price_data][currency]`]: 'usd',
        [`line_items[${idx}][price_data][product_data][name]`]: product?.title ?? 'Product',
        [`line_items[${idx}][price_data][product_data][description]`]: product?.description?.slice(0, 200) ?? '',
        [`line_items[${idx}][price_data][unit_amount]`]: Math.round((product?.price ?? 0) * 100),
        [`line_items[${idx}][quantity]`]: item.quantity,
      };
    });

    const formData = new URLSearchParams();
    formData.append('mode', 'payment');
    formData.append('success_url', `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`);
    formData.append('cancel_url', `${appUrl}/checkout?cancelled=true`);
    if (email) {
      formData.append('customer_email', email);
    }

    // Append line items
    for (const itemObj of lineItems) {
      for (const [key, value] of Object.entries(itemObj)) {
        formData.append(key, String(value));
      }
    }

    // Shipping fee line item if applicable
    if (sum.shipping > 0) {
      const idx = items.length;
      formData.append(`line_items[${idx}][price_data][currency]`, 'usd');
      formData.append(
        `line_items[${idx}][price_data][product_data][name]`,
        express ? 'Express Delivery (2-3 business days)' : 'Standard Delivery (5-7 business days)'
      );
      formData.append(
        `line_items[${idx}][price_data][unit_amount]`,
        String(Math.round(sum.shipping * 100))
      );
      formData.append(`line_items[${idx}][quantity]`, '1');
    }

    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const session = await stripeRes.json();
    if (!stripeRes.ok) {
      throw new Error(session.error?.message || 'Failed to create Stripe checkout session');
    }

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'An error occurred initiating checkout';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

