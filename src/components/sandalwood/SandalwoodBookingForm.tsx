import React, { useEffect, useMemo, useRef, useState } from 'react';

const SandalwoodBookingForm: React.FC = () => {
  // Step 1: enquiry details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [block, setBlock] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');

  // Stepper and statuses
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [ackUrl, setAckUrl] = useState<string>('');
  const [ackFilename, setAckFilename] = useState<string>('');

  // For viewport alignment/scroll
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Smoothly bring the form into view on step change
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  // Step 2/3/4: payment info
  const [amount, setAmount] = useState<string>('');
  const [utr, setUtr] = useState<string>('');
  const [paymentDate, setPaymentDate] = useState<string>('');
  const [screenshotUrl, setScreenshotUrl] = useState<string>('');
  const [buyerFullName, setBuyerFullName] = useState<string>('');

  const PRICE_PER_PLANT = Number((import.meta as any).env?.VITE_PRICE_PER_PLANT || 0);
  const expectedAmount = useMemo(() => {
    const q = Number(quantity || 0);
    if (!PRICE_PER_PLANT || !q) return 0;
    return PRICE_PER_PLANT * q;
  }, [PRICE_PER_PLANT, quantity]);

  const resetAll = () => {
    if (ackUrl) {
      try { URL.revokeObjectURL(ackUrl); } catch {}
    }
    setName('');
    setEmail('');
    setMobile('');
    setBlock('');
    setQuantity('');
    setNotes('');
    setAmount('');
    setUtr('');
    setPaymentDate('');
    setScreenshotUrl('');
    setBuyerFullName('');
    setAckUrl('');
    setAckFilename('');
    setError('');
    setSubmitting(false);
    setStep(1);
  };

  const proceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !mobile || !quantity || Number(quantity) <= 0) {
      setError('Please fill all required fields.');
      return;
    }
    // Prefill amount and buyer name
    if (expectedAmount > 0) setAmount(String(expectedAmount));
    if (!buyerFullName) setBuyerFullName(name);
    setStep(2);
  };

  const proceedAfterPayment = () => {
    // Move to UTR capture
    setStep(3);
  };

  const proceedToBuyerName = () => {
    setError('');
    if (!utr || !paymentDate) {
      setError('Please enter UTR and payment date/time.');
      return;
    }
    if (!amount || Number(amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    // Simple UTR length sanity check
    if (utr.trim().length < 6) {
      setError('UTR seems too short. Please verify.');
      return;
    }
    setStep(4);
  };

  const submitAll = async () => {
    setError('');
    if (!buyerFullName) {
      setError('Please enter buyer full name.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/.netlify/functions/payment-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          mobile,
          quantity: Number(quantity),
          preferredBlock: block || '',
          notes: notes || '',
          amount: Number(amount),
          utr: utr.trim(),
          paymentDate,
          screenshotUrl: screenshotUrl || '',
          buyerFullName
        })
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed');
      // Build local plain-text acknowledgement for download
      const createdAt = new Date();
      const fmt = (d: Date) => `${('0'+d.getDate()).slice(-2)}-${d.toLocaleString('en-US',{month:'short'})}-${d.getFullYear()} ${('0'+d.getHours()).slice(-2)}:${('0'+d.getMinutes()).slice(-2)}`;
      const safe = (s: string) => s.replace(/\r?\n/g, ' ').trim();
      const lines = [
        'Provisional Acknowledgement',
        '----------------------------------------',
        `Issued At: ${fmt(createdAt)}`,
        '',
        `Buyer Name: ${safe(buyerFullName)}`,
        `Email: ${safe(email)}`,
        `Mobile: ${safe(mobile)}`,
        `Product: Sandalwood`,
        `Quantity: ${Number(quantity)}`,
        `Amount Paid: ₹${Number(amount)}`,
        `Payment Date: ${paymentDate}`,
        `UTR: ${safe(utr)}`,
        block ? `Preferred Block: ${safe(block)}` : '',
        notes ? `Notes: ${safe(notes)}` : '',
        screenshotUrl ? `Payment Screenshot: ${safe(screenshotUrl)}` : '',
        '',
        'We have received your payment details. Your final certificate will be emailed after UTR verification.',
        'Thank you for your support.'
      ].filter(Boolean).join('\n');

      const blob = new Blob([lines], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60);
      const fname = `sandalwood-acknowledgement-${slug(buyerFullName || name)}-${Date.now()}.txt`;
      setAckUrl(url);
      setAckFilename(fname);
      setStep(5);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book" className="py-10 sm:py-12 bg-[#FAFAF7]">
      <div ref={sectionRef} className="max-w-2xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-serif text-[#0C3B2E] mb-6">Book Now</h2>
        <div className="flex items-center gap-2 text-xs sm:text-sm mb-4">
          <span className={"px-2 py-1 rounded-full " + (step>=1? 'bg-[#0C3B2E] text-white':'bg-gray-200')}>1</span>
          <span className="hidden sm:inline">Details</span>
          <span className="opacity-60">→</span>
          <span className={"px-2 py-1 rounded-full " + (step>=2? 'bg-[#0C3B2E] text-white':'bg-gray-200')}>2</span>
          <span className="hidden sm:inline">Payment</span>
          <span className="opacity-60">→</span>
          <span className={"px-2 py-1 rounded-full " + (step>=3? 'bg-[#0C3B2E] text-white':'bg-gray-200')}>3</span>
          <span className="hidden sm:inline">UTR</span>
          <span className="opacity-60">→</span>
          <span className={"px-2 py-1 rounded-full " + (step>=4? 'bg-[#0C3B2E] text-white':'bg-gray-200')}>4</span>
          <span className="hidden sm:inline">Buyer</span>
        </div>
        {step === 1 && (
          <form onSubmit={proceedToPayment} className="bg-white rounded-2xl border border-[#EAE6DF] p-4 sm:p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="name">Name</label>
              <input id="name" required value={name} onChange={e=>setName(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
              <p className="text-xs text-gray-500 mt-1">Required</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
              <p className="text-xs text-gray-500 mt-1">Required</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="mobile">Mobile</label>
              <input id="mobile" inputMode="tel" required value={mobile} onChange={e=>setMobile(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
              <p className="text-xs text-gray-500 mt-1">Required</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="quantity">Sandalwood Plants Quantity</label>
              <input id="quantity" type="number" min={1} step={1} required value={quantity} onChange={e=>setQuantity(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
              <p className="text-xs text-gray-500 mt-1">Required</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="block">Preferred Block (optional)</label>
              <select id="block" value={block} onChange={e=>setBlock(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]">
                <option value="">Select</option>
                <option value="Block A">Block A</option>
                <option value="Block B">Block B</option>
                <option value="Block C">Block C</option>
                <option value="Block D">Block D</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="notes">Notes (optional)</label>
              <textarea id="notes" value={notes} onChange={e=>setNotes(e.target.value)} rows={4} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
            </div>

            {error && <div className="text-sm text-red-600" role="alert">{error}</div>}

            <button className="inline-flex sm:inline-flex w-full sm:w-auto justify-center items-center rounded-2xl bg-[#0C3B2E] text-white px-6 py-3 font-semibold hover:scale-[1.02] transition-transform">
              Proceed to Payment
            </button>
          </form>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl border border-[#EAE6DF] p-4 sm:p-6 space-y-4">
            <h3 className="text-xl font-semibold text-[#0C3B2E]">Payment Details</h3>
            <div className="rounded-xl bg-[#FAFAF7] p-4 text-sm text-[#222]">
              <p>Bank: Canara Bank</p>
              <p>Account Name: Dynamic Earth Farming Pvt Ltd</p>
              <p>Account Number: 120034423927</p>
              <p>IFSC: CNRB0003022</p>
            </div>
            {PRICE_PER_PLANT > 0 && (
              <div className="text-sm text-[#222]">
                <p>Price per plant: ₹{PRICE_PER_PLANT}</p>
                <p>Quantity: {Number(quantity) || 0}</p>
                <p className="font-semibold">Expected total: ₹{expectedAmount || 0}</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="amount">Amount Paid (₹)</label>
              <input id="amount" type="number" min={1} value={amount} onChange={e=>setAmount(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
              <p className="text-xs text-gray-500 mt-1">Enter the amount you paid via bank/UPI.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button onClick={()=>setStep(1)} className="inline-flex justify-center items-center rounded-2xl border border-[#0C3B2E] text-[#0C3B2E] px-6 py-3 font-semibold hover:scale-[1.02] transition-transform w-full sm:w-auto">Back</button>
              <button onClick={proceedAfterPayment} className="inline-flex justify-center items-center rounded-2xl bg-[#0C3B2E] text-white px-6 py-3 font-semibold hover:scale-[1.02] transition-transform w-full sm:w-auto">I have paid</button>
            </div>
            {error && <div className="text-sm text-red-600" role="alert" aria-live="polite">{error}</div>}
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-2xl border border-[#EAE6DF] p-4 sm:p-6 space-y-4">
            <h3 className="text-xl font-semibold text-[#0C3B2E]">Payment Confirmation</h3>
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="utr">UTR Number</label>
              <input id="utr" value={utr} onChange={e=>setUtr(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
              <p className="text-xs text-gray-500 mt-1">Required</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="pdate">Payment Date & Time</label>
              <input id="pdate" type="datetime-local" value={paymentDate} onChange={e=>setPaymentDate(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
              <p className="text-xs text-gray-500 mt-1">Required</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="ss">Payment Screenshot Link (optional)</label>
              <input id="ss" placeholder="https://..." value={screenshotUrl} onChange={e=>setScreenshotUrl(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
              <p className="text-xs text-gray-500 mt-1">Paste a public link (Drive shared link etc.), optional.</p>
            </div>

            {error && <div className="text-sm text-red-600" role="alert" aria-live="polite">{error}</div>}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button onClick={()=>setStep(2)} className="inline-flex justify-center items-center rounded-2xl border border-[#0C3B2E] text-[#0C3B2E] px-6 py-3 font-semibold hover:scale-[1.02] transition-transform w-full sm:w-auto">Back</button>
              <button onClick={proceedToBuyerName} className="inline-flex justify-center items-center rounded-2xl bg-[#0C3B2E] text-white px-6 py-3 font-semibold hover:scale-[1.02] transition-transform w-full sm:w-auto">Continue</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-white rounded-2xl border border-[#EAE6DF] p-4 sm:p-6 space-y-4">
            <h3 className="text-xl font-semibold text-[#0C3B2E]">Certificate Details</h3>
            <div>
              <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="buyer">Buyer Full Name (for certificate)</label>
              <input id="buyer" value={buyerFullName} onChange={e=>setBuyerFullName(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
              <p className="text-xs text-gray-500 mt-1">This name will appear on your certificate.</p>
            </div>

            {error && <div className="text-sm text-red-600" role="alert">{error}</div>}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button onClick={()=>setStep(3)} className="inline-flex justify-center items-center rounded-2xl border border-[#0C3B2E] text-[#0C3B2E] px-6 py-3 font-semibold hover:scale-[1.02] transition-transform w-full sm:w-auto">Back</button>
              <button onClick={submitAll} disabled={submitting} className="inline-flex justify-center items-center rounded-2xl bg-[#0C3B2E] text-white px-6 py-3 font-semibold disabled:opacity-60 hover:scale-[1.02] transition-transform w-full sm:w-auto" aria-busy={submitting}>
                {submitting ? 'Submitting…' : 'Get Certificate'}
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div role="dialog" aria-modal="true" className="bg-white rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md p-5 sm:p-6 text-center max-h-[90vh] overflow-y-auto">
              <img src="/logo.svg" alt="Bharatvan" className="mx-auto h-10 mb-3" />
              <h3 className="text-xl font-semibold text-[#0C3B2E]">Acknowledgement Ready</h3>
              <p className="mt-2 text-[#222] opacity-80">We have recorded your payment details. You can download a provisional acknowledgement (.txt) now. The final certificate will be emailed after UTR verification.</p>
              {ackUrl ? (
                <a href={ackUrl} download={ackFilename || 'acknowledgement.txt'} className="mt-4 inline-flex items-center rounded-2xl bg-[#0C3B2E] text-white px-5 py-2 font-semibold hover:scale-[1.02] transition-transform">Download Acknowledgement</a>
              ) : (
                <p className="text-sm text-gray-600 mt-3">Link unavailable. Please check your email.</p>
              )}
              <button onClick={resetAll} className="mt-5 inline-flex items-center justify-center rounded-2xl border border-[#0C3B2E] text-[#0C3B2E] px-5 py-2 font-semibold hover:scale-[1.02] transition-transform w-full sm:w-auto">Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SandalwoodBookingForm;
