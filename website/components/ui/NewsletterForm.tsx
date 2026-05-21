'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 py-4 text-center">
        <span className="text-4xl" role="img" aria-label="abelha">🐝</span>
        <p className="text-honey font-semibold">Obrigado! Serás dos primeiros a saber.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
      <label htmlFor="newsletter-email" className="sr-only">Email</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="o.teu@email.pt"
        className="flex-1 px-4 py-3 rounded-full border border-honey-light bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-honey"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-full bg-honey text-dark font-semibold text-sm hover:bg-honey-dark transition-colors whitespace-nowrap"
      >
        Receber Novidades
      </button>
    </form>
  );
}