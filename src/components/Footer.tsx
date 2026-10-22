import { BrainCircuit, Mail, MapPin, ArrowRight } from 'lucide-react';
import { navItems } from '@/data';

export default function Footer() {
  return (
    <footer id="join" className="bg-brown-950 text-cream-100">
      {/* CTA banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
        <div className="relative rounded-3xl bg-gradient-to-br from-clay-500 to-brown-800 p-10 lg:p-16 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-terracotta-400/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-sage-500/15 rounded-full blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif font-bold text-cream-50 text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
                Ready to build the future of AI?
              </h2>
              <p className="mt-4 text-cream-100/80 text-lg max-w-xl">
                Join the AI/ML Group today. No experience required — just
                curiosity and a willingness to learn.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="mailto:aiml@mamangina.ac.ke"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cream-50 text-brown-900 font-semibold hover:bg-cream-100 hover:shadow-xl transition-all"
              >
                <Mail className="w-4.5 h-4.5" />
                Get in Touch
              </a>
              <a
                href="#events"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-cream-50/30 text-cream-50 font-semibold hover:bg-cream-50/10 transition-all"
              >
                View Events
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-10">
        <div className="grid md:grid-cols-3 gap-10 pt-10 border-t border-cream-50/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-clay-500 to-brown-700 flex items-center justify-center">
                <BrainCircuit className="w-5.5 h-5.5 text-cream-50" strokeWidth={2.2} />
              </div>
              <div className="leading-tight">
                <div className="font-serif font-bold text-cream-50 text-lg">
                  AI/ML Group
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-clay-400 font-semibold">
                  Mama Ngina University
                </div>
              </div>
            </div>
            <p className="text-sm text-cream-100/60 leading-relaxed max-w-xs">
              A student-led community exploring artificial intelligence and
              machine learning through research, projects, and events.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-cream-50 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream-100/60 hover:text-clay-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream-50 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-cream-100/60">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-clay-400" />
                aiml@mamangina.ac.ke
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-clay-400" />
                Science Block, Mama Ngina University
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream-50/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream-100/40">
            © 2026 AI/ML Group, Mama Ngina University. All rights reserved.
          </p>
          <p className="text-xs text-cream-100/40">
            Built with curiosity and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
