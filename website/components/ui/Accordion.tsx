'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Item {
  q: string;
  a: string;
}

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-xl border border-honey-light overflow-hidden" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-honey-light/30 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-charcoal text-sm lg:text-base pr-4">{item.q}</span>
            <span className="flex-shrink-0 text-honey">
              {open === i ? <Minus size={18} /> : <Plus size={18} />}
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? '200px' : '0' }}
          >
            <div className="px-6 pb-4 text-mid text-sm lg:text-base leading-relaxed">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}