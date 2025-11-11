import React, { useState } from 'react';

const SandalwoodBookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [block, setBlock] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !mobile || !quantity || Number(quantity) <= 0) {
      setError('Please fill all required fields.');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch('/.netlify/functions/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, mobile, product: 'Sandalwood', quantity: Number(quantity), preferredBlock: block || undefined, notes: notes || undefined })
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="book" className="py-12 bg-[#FAFAF7]">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-serif text-[#0C3B2E] mb-6">Book Now</h2>
        <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-[#EAE6DF] p-6 space-y-4">
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
            <input id="mobile" required value={mobile} onChange={e=>setMobile(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
            <p className="text-xs text-gray-500 mt-1">Required</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#222] mb-1" htmlFor="quantity">Sandalwood Plants Quantity</label>
            <input id="quantity" type="number" min={1} step={1} required value={quantity} onChange={e=>setQuantity(e.target.value)} className="w-full rounded-xl border border-[#EAE6DF] px-3 py-2 outline-none focus:ring-2 focus:ring-[#0C3B2E]" />
            <p className="text-xs text-gray-500 mt-1">Required</p>
          </div>
          <input type="hidden" name="product" value="Sandalwood" readOnly />
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

          <button disabled={status==='submitting'} className="inline-flex items-center rounded-2xl bg-[#0C3B2E] text-white px-6 py-3 font-semibold disabled:opacity-60 hover:scale-[1.02] transition-transform" aria-busy={status==='submitting'}>
            {status==='submitting' ? 'Submitting…' : 'Submit Interest'}
          </button>
          {status==='success' && (
            <p className="text-green-700 mt-2">Thanks! We received your interest. We will contact you shortly.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default SandalwoodBookingForm;
