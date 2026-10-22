import { useEffect, useState } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { navItems } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_4px_24px_rgba(92,58,36,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-clay-500 to-brown-800 flex items-center justify-center shadow-lg shadow-brown-900/20 group-hover:scale-105 transition-transform">
            <BrainCircuit className="w-5.5 h-5.5 text-cream-50" strokeWidth={2.2} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-brown-900 text-lg tracking-tight">
              AI/ML Group
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-clay-600 font-semibold">
              Mama Ngina University
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brown-800 hover:text-terracotta-600 hover:bg-cream-100 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#join"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brown-800 text-cream-50 text-sm font-semibold hover:bg-brown-900 hover:shadow-lg hover:shadow-brown-900/30 transition-all"
          >
            Join Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-brown-800 hover:bg-cream-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-cream-50 border-t border-cream-200 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-brown-800 font-medium hover:bg-cream-100 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 mt-2 rounded-lg bg-brown-800 text-cream-50 font-semibold text-center"
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
