import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Please provide your name.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json({ error: 'Please enter a message of at least 5 characters.' }, { status: 400 });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, topic, message, timestamp: new Date().toISOString() }),
        });
      } catch (e) {
        console.warn('Contact webhook failed:', e);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out. A Forma concierge will get back to you within 24 hours.',
    });
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

