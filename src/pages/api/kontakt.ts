import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// This route is server-rendered (not pre-rendered)
export const prerender = false;

// NOTE: Set RESEND_API_KEY in your Vercel project environment variables.
// NOTE: The "from" address domain (logopaedie-simsek.de) must be verified in your Resend dashboard.
const resend = new Resend(import.meta.env.RESEND_API_KEY);

const RECIPIENT = 'info@logopaedie-simsek.de';
const FROM = 'Website <kontakt@logopaedie-simsek.de>';

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Ungültige Anfrage.' }),
      { status: 400, headers }
    );
  }

  const vorname = data.get('vorname')?.toString().trim() ?? '';
  const nachname = data.get('nachname')?.toString().trim() ?? '';
  const email = data.get('email')?.toString().trim() ?? '';
  const telefon = data.get('telefon')?.toString().trim() ?? '';
  const bereich = data.get('bereich')?.toString().trim() ?? '';
  const nachricht = data.get('nachricht')?.toString().trim() ?? '';
  const honeypot = data.get('website')?.toString() ?? '';

  // Honeypot: silently discard bot submissions
  if (honeypot) {
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  }

  if (!vorname || !nachname || !email) {
    return new Response(
      JSON.stringify({ success: false, error: 'Bitte füllen Sie alle Pflichtfelder aus.' }),
      { status: 400, headers }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }),
      { status: 400, headers }
    );
  }

  const bereichLabels: Record<string, string> = {
    sprache: 'Sprachstörungen',
    sprechen: 'Sprechstörungen',
    stimme: 'Stimmstörungen',
    schlucken: 'Schluckstörungen (Dysphagie)',
    allgemein: 'Allgemeine Beratung',
  };

  const html = `
    <h2 style="font-family:sans-serif;color:#1c1916;">Neue Terminanfrage</h2>
    <table style="font-family:sans-serif;font-size:15px;color:#1c1916;border-collapse:collapse;">
      <tr><td style="padding:6px 16px 6px 0;font-weight:bold;">Name:</td><td>${vorname} ${nachname}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;font-weight:bold;">E-Mail:</td><td><a href="mailto:${email}">${email}</a></td></tr>
      ${telefon ? `<tr><td style="padding:6px 16px 6px 0;font-weight:bold;">Telefon:</td><td>${telefon}</td></tr>` : ''}
      ${bereich ? `<tr><td style="padding:6px 16px 6px 0;font-weight:bold;">Therapiebereich:</td><td>${bereichLabels[bereich] ?? bereich}</td></tr>` : ''}
    </table>
    ${nachricht ? `<h3 style="font-family:sans-serif;color:#1c1916;margin-top:20px;">Nachricht:</h3><p style="font-family:sans-serif;font-size:15px;color:#444;line-height:1.6;">${nachricht.replace(/\n/g, '<br>')}</p>` : ''}
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
    <p style="font-family:sans-serif;font-size:12px;color:#999;">Diese E-Mail wurde automatisch von logopaedie-simsek.de gesendet.</p>
  `;

  try {
    await resend.emails.send({
      from: FROM,
      to: [RECIPIENT],
      replyTo: email,
      subject: `Neue Terminanfrage von ${vorname} ${nachname}`,
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (err) {
    console.error('[api/kontakt] Resend error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns per Telefon.' }),
      { status: 500, headers }
    );
  }
};
