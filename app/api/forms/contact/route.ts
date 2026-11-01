import { NextRequest, NextResponse } from 'next/server';

function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/[<>]/g, '');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    let data: Record<string, unknown> = {};
    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      data = await req.json();
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData();
      formData.forEach((value, key) => {
        data[key] = value;
      });
    }

    const name = sanitize(data.name);
    const email = sanitize(data.email);
    const phone = sanitize(data.phone);
    const subject = sanitize(data.subject) || 'Technische Fachanfrage E-MOTO EUROPE';
    const message = sanitize(data.message);
    const botcheck = sanitize(data.botcheck);

    // Spam honeypot
    if (botcheck) {
      return NextResponse.json({ success: true, redirect: '/inquiry-confirmation/' });
    }

    if (!name || name.length < 2) {
      return NextResponse.json({ success: false, error: 'Bitte geben Sie Ihren vollständigen Namen an.' }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }, { status: 400 });
    }

    if (!message || message.length < 5) {
      return NextResponse.json({ success: false, error: 'Bitte geben Sie eine Nachricht mit mindestens 5 Zeichen ein.' }, { status: 400 });
    }

    const ticketNumber = `TKT-${Date.now().toString().slice(-5)}-EU`;

    const webhookUrl = process.env.ZOHO_CONTACT_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ticketNumber,
            name,
            email,
            phone,
            subject,
            message,
            source: 'E-MOTO EUROPE - Kontaktformular',
            submittedAt: new Date().toISOString()
          })
        });
      } catch (webhookErr) {
        console.error('Contact webhook delivery error:', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      ticketNumber,
      message: 'Ihre Nachricht wurde erfolgreich an unsere technische Werkstatt übermittelt.',
      redirect: `/inquiry-confirmation/?ticket=${ticketNumber}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Interner Verarbeitungsfehler';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
