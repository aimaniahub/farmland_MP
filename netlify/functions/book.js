import nodemailer from 'nodemailer';
function bookingEmailHtml(data) {
  const block = data.preferredBlock ? data.preferredBlock : 'Not specified';
  const notes = data.notes ? data.notes : '—';
  return `<!doctype html><html><head><meta charset="utf-8"></head><body style="font-family:Arial,sans-serif;background:#fafafa;padding:16px;"><table width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden"><tr><td style="background:#0C3B2E;color:#ffffff;padding:16px 20px;font-size:18px;font-weight:600">New Sandalwood Booking</td></tr><tr><td style="padding:20px"><div style="font-size:14px;color:#111827;line-height:1.6"><p>You have received a new booking enquiry.</p><ul style="list-style:none;padding:0;margin:12px 0"><li><strong>Name:</strong> ${data.name}</li><li><strong>Email:</strong> ${data.email}</li><li><strong>Mobile:</strong> ${data.mobile}</li><li><strong>Product:</strong> ${data.product || 'Sandalwood'}</li><li><strong>Preferred Block:</strong> ${block}</li><li><strong>Notes:</strong> ${notes}</li></ul><p style="color:#6b7280;font-size:12px">This message was generated from the website booking form.</p></div></td></tr></table></body></html>`;
}
function bookingEmailText(data) {
  const block = data.preferredBlock ? data.preferredBlock : 'Not specified';
  const notes = data.notes ? data.notes : '—';
  return `New Sandalwood Booking\nName: ${data.name}\nEmail: ${data.email}\nMobile: ${data.mobile}\nProduct: ${data.product || 'Sandalwood'}\nPreferred Block: ${block}\nNotes: ${notes}`;
}
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}
export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: { ...corsHeaders() }, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: { ...corsHeaders() }, body: JSON.stringify({ error: 'Method not allowed' }) };
  }
  try {
    const data = JSON.parse(event.body || '{}');
    // Basic validation
    if (!data.name || !data.email || !data.mobile) {
      return { statusCode: 400, headers: { ...corsHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Missing required fields' }) };
    }
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || '587');
    const smtpSecure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.MAIL_FROM || smtpUser;
    const toEmail = process.env.MAIL_TO || process.env.CONTACT_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      return { statusCode: 500, headers: { ...corsHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Email not configured' }) };
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass }
    });

    const subject = `New Sandalwood Booking — ${data.name}`;

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject,
      text: bookingEmailText(data),
      html: bookingEmailHtml(data),
      replyTo: data.email
    });

    return {
      statusCode: 200,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true })
    };
  } catch (e) {
    return { statusCode: 500, headers: { ...corsHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Server error' }) };
  }
}
