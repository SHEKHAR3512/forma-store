import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@') || email.length > 254) {
      return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
    }

    const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
        });
      } catch (e) {
        console.warn('Webhook forwarding failed:', e);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'You’re on the list! Welcome to Forma.',
    });
  } catch {
    return NextResponse.json(
      { message: 'Could not process newsletter request. Please try again.' },
      { status: 500 }
    );
  }
}

