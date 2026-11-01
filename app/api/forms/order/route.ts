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

    const name = sanitize(data.name);
    const email = sanitize(data.email);
    const phone = sanitize(data.phone);
    const street = sanitize(data.street);
    const city = sanitize(data.city);
    const zip = sanitize(data.zip);
    const country = sanitize(data.country) || 'Deutschland';
    const paymentMethod = sanitize(data.paymentMethod) || 'sepa-vorkasse';
    const notes = sanitize(data.notes);
    const items = Array.isArray(data.items) ? data.items : [];
    const total = typeof data.total === 'number' ? data.total : 0;
    const cryptoDiscount = typeof data.cryptoDiscount === 'number' ? data.cryptoDiscount : 0;
    const finalTotal = typeof data.finalTotal === 'number' ? data.finalTotal : total;
    const ageConfirmed = Boolean(data.ageConfirmed);

    if (!name || name.length < 2) {
      return NextResponse.json({ success: false, error: 'Bitte Namen angeben' }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
    }

    if (!street || !city || !zip) {
      return NextResponse.json({ success: false, error: 'Vollständige Lieferadresse erforderlich' }, { status: 400 });
    }

    if (!ageConfirmed) {
      return NextResponse.json({ success: false, error: 'Bitte bestätigen Sie das Mindestalter von 16 Jahren' }, { status: 400 });
    }

    if (!items || items.length === 0) {
      return NextResponse.json({ success: false, error: 'Warenkorb ist leer' }, { status: 400 });
    }

    // Auto-generate clean order number
    const orderNumber = `EMO-${Date.now().toString().slice(-6)}-EU`;

    // Forward to CRM / Webhook if configured
    const webhookUrl = process.env.ZOHO_ORDER_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderNumber,
            name,
            email,
            phone,
            address: `${street}, ${zip} ${city}, ${country}`,
            paymentMethod,
            items,
            subtotal: total,
            cryptoDiscount,
            finalTotal,
            notes,
            submittedAt: new Date().toISOString()
          })
        });
      } catch (webhookErr) {
        console.error('Order webhook delivery error:', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      orderNumber,
      message: 'Bestellung erfolgreich vorbereitet. Die Auftragsbestätigung und Zahlungsanweisung wurden übermittelt.',
      redirect: `/order-confirmation/?order=${orderNumber}&method=${paymentMethod}&total=${finalTotal.toFixed(2)}&name=${encodeURIComponent(name)}`
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Fehler bei der Auftragsübermittlung';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
