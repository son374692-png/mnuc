import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-cream-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta-600">
            FAQ
          </span>
          <h2 className="mt-4 font-serif font-bold text-brown-900 text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Questions, answered.
          </h2>
          <p className="mt-5 text-lg text-brown-700/70 leading-relaxed">
            Everything you need to know about joining and participating in the
            AI/ML Group.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-clay-400 bg-cream-100 shadow-md shadow-brown-900/5'
                    : 'border-cream-200 bg-cream-50 hover:border-clay-400/50'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif font-semibold text-lg text-brown-900">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? 'bg-terracotta-500 text-cream-50'
                        : 'bg-cream-200 text-brown-800'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-brown-700/75 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
