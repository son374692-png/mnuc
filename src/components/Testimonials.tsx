import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const next = useCallback(
    () => setActive((p) => (p + 1) % count),
    [count]
  );
  const prev = () => setActive((p) => (p - 1 + count) % count);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative py-24 lg:py-32 bg-brown-900 overflow-hidden">
      {/* decorative shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-terracotta-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-clay-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-clay-400">
          Voices from the Community
        </span>
        <h2 className="mt-4 font-serif font-bold text-cream-50 text-3xl sm:text-4xl lg:text-5xl leading-tight">
          What our members say
        </h2>

        <div className="mt-12 relative">
          <Quote className="w-14 h-14 text-clay-500/30 mx-auto mb-6" />

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-terracotta-400 text-terracotta-400"
              />
            ))}
          </div>

          <div className="min-h-[160px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`transition-all duration-500 absolute ${
                  i === active
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <p className="font-serif text-xl lg:text-2xl text-cream-100 leading-relaxed max-w-3xl mx-auto">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-clay-400"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-cream-50">{t.name}</div>
                    <div className="text-sm text-clay-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-cream-50/20 text-cream-50 flex items-center justify-center hover:bg-cream-50/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active
                      ? 'w-8 bg-terracotta-400'
                      : 'w-2 bg-cream-50/30 hover:bg-cream-50/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-cream-50/20 text-cream-50 flex items-center justify-center hover:bg-cream-50/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
