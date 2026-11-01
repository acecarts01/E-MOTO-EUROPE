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
    const data = await req.json();

    const company = sanitize(data.company);
    const contactPerson = sanitize(data.contactPerson);
    const email = sanitize(data.email);
    const phone = sanitize(data.phone);
    const vatId = sanitize(data.vatId);
    const country = sanitize(data.country);
    const businessType = sanitize(data.businessType);
    const estimatedVolume = sanitize(data.estimatedVolume);
    const message = sanitize(data.message);

    if (!company || company.length < 2) {
      return NextResponse.json({ success: false, error: 'Bitte Firmennamen angeben' }, { status: 400 });
    }

    if (!contactPerson) {
      return NextResponse.json({ success: false, error: 'Bitte Ansprechpartner angeben' }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Gültige geschäftliche E-Mail erforderlich' }, { status: 400 });
    }

    if (!vatId) {
      return NextResponse.json({ success: false, error: 'USt-IdNr. oder Steuernummer für B2B-Konditionen erforderlich' }, { status: 400 });
    }

    const b2bNumber = `B2B-${Date.now().toString().slice(-5)}-DE`;

    const webhookUrl = process.env.ZOHO_WHOLESALE_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            b2bNumber,
            company,
            contactPerson,
            email,
            phone,
            vatId,
            country,
            businessType,
            estimatedVolume,
            message,
            submittedAt: new Date().toISOString()
          })
        });
      } catch (err) {
        console.error('Zoho Wholesale webhook error:', err);
      }
    }

    return NextResponse.json({
      success: true,
      b2bNumber,
      message: 'Ihre B2B-Händleranfrage ist eingegangen. Wir prüfen Ihre USt-IdNr. und schalten die Konditionen frei.',
      redirect: `/b2b-confirmation/?ref=${b2bNumber}&company=${encodeURIComponent(company)}`
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Fehler bei der Händleranfrage';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
