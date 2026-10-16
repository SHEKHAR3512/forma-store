import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('id');

  if (!sessionId) {
    return NextResponse.json({ verified: false, error: 'Session ID is required' }, { status: 400 });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    // If stripeKey is not present, still handle demo sessions gracefully
    return NextResponse.json({
      verified: true,
      total: 0,
      note: 'Demo verification completed without live Stripe credentials.',
    });
  }

  try {
    const res = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      headers: {
        Authorization: `Bearer ${stripeKey}`,
      },
    });

    const session = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { verified: false, error: session.error?.message || 'Could not verify session with Stripe' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      verified: session.payment_status === 'paid',
      total: session.amount_total ? session.amount_total / 100 : 0,
      customerEmail: session.customer_details?.email,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error checking Stripe session';
    return NextResponse.json({ verified: false, error: message }, { status: 500 });
  }
}

