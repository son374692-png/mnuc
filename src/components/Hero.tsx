import { ArrowRight, Sparkles } from 'lucide-react';
import { stats } from '@/data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-cream-50"
    >
      {/* decorative blobs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-clay-400/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-sage-400/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: text */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-500/10 text-terracotta-600 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Fall 2026 — New Members Welcome
          </div>

          <h1 className="font-serif font-bold text-brown-900 leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
            Shaping the future of{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-terracotta-600">AI in Africa</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-sage-400/30 -z-0 rounded-full" />
            </span>{' '}
            — one model at a time.
          </h1>

          <p className="mt-6 text-lg text-brown-700/80 leading-relaxed max-w-xl">
            We are the Artificial Intelligence & Machine Learning Group at Mama
            Ngina University — a student-led community of researchers, builders,
            and dreamers pushing the boundaries of what AI can do for our
            communities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brown-800 text-cream-50 font-semibold hover:bg-brown-900 hover:shadow-xl hover:shadow-brown-900/30 transition-all"
            >
              Become a Member
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-brown-700/20 text-brown-800 font-semibold hover:border-brown-700 hover:bg-cream-100 transition-all"
            >
              View Events
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label}>
                  <Icon className="w-5 h-5 text-clay-500 mb-1.5" />
                  <div className="font-serif font-bold text-2xl text-brown-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-brown-700/60 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: image collage */}
        <div className="relative animate-fade-in lg:block hidden">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brown-900/20">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
              alt="AI technology visualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-8 w-64 bg-cream-50 rounded-2xl shadow-xl p-5 border border-cream-200 animate-float">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-sage-600" />
              </div>
              <div>
                <div className="text-xs text-brown-700/60 font-medium">Next Event</div>
                <div className="text-sm font-bold text-brown-900">
                  Deep Learning Workshop
                </div>
              </div>
            </div>
            <div className="text-xs text-brown-700/70">
              Nov 2 · Science Block · 2:00 PM
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-full bg-terracotta-500 text-cream-50 text-sm font-bold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
            120+ Members
          </div>
        </div>
      </div>
    </section>
  );
}
