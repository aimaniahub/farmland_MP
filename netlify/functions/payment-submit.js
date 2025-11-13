function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

function badRequest(message) {
  return { statusCode: 400, headers: { ...corsHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ error: message }) };
}

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: { ...corsHeaders() }, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: { ...corsHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    // Required fields
    const required = ['name','email','mobile','quantity','amount','utr','paymentDate','buyerFullName'];
    const missing = required.filter(k => !String(data[k] || '').trim());
    if (missing.length) return badRequest('Missing fields: ' + missing.join(', '));

    const qty = Number(data.quantity);
    const amt = Number(data.amount);
    if (!Number.isFinite(qty) || qty <= 0) return badRequest('Invalid quantity');
    if (!Number.isFinite(amt) || amt <= 0) return badRequest('Invalid amount');

    // Price validation (optional, enabled if PRICE_PER_PLANT present)
    const pricePerPlant = Number(process.env.PRICE_PER_PLANT || process.env.VITE_PRICE_PER_PLANT || 0);
    if (pricePerPlant > 0) {
      const expected = pricePerPlant * qty;
      if (amt !== expected) {
        return badRequest(`Amount mismatch. Expected ${expected} for ${qty} @ ${pricePerPlant}`);
      }
    }

    const appUrl = process.env.APPSCRIPT_URL;
    const secret = process.env.APPSCRIPT_SECRET;
    if (!appUrl || !secret) {
      return { statusCode: 500, headers: { ...corsHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Server not configured' }) };
    }

    // Forward to Apps Script
    const payload = {
      secret,
      name: data.name,
      buyerFullName: data.buyerFullName || data.name,
      email: data.email,
      mobile: data.mobile,
      quantity: qty,
      preferredBlock: data.preferredBlock || '',
      notes: data.notes || '',
      amount: amt,
      utr: String(data.utr),
      paymentDate: data.paymentDate,
      screenshotUrl: data.screenshotUrl || ''
    };

    const res = await fetch(appUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const contentType = (res.headers.get('content-type') || '').toLowerCase();
    const text = await res.text();
    let json;
    if (contentType.includes('application/json')) {
      try { json = JSON.parse(text); } catch {}
    } else {
      try { json = JSON.parse(text); } catch {}
    }

    if (!res.ok) {
      return { statusCode: 502, headers: { ...corsHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ error: (json && json.error) || 'Upstream error', raw: contentType.includes('json') ? undefined : text }) };
    }

    // If upstream didn't return JSON but responded OK, proceed with ok:true so frontend can continue and generate local acknowledgement.
    if (!json || json.ok !== true) {
      json = { ok: true, note: 'upstream-non-json', raw: contentType.includes('json') ? undefined : text };
    }

    return { statusCode: 200, headers: { ...corsHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify(json) };
  } catch (e) {
    return { statusCode: 500, headers: { ...corsHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Server error' }) };
  }
}
