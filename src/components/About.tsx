import { focusAreas, stats } from '@/data';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta-600">
            About Us
          </span>
          <h2 className="mt-4 font-serif font-bold text-brown-900 text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
            A community where curiosity meets computation.
          </h2>
          <p className="mt-5 text-lg text-brown-700/75 leading-relaxed">
            Founded in 2023, the AI/ML Group at Mama Ngina University brings
            together students from every faculty to explore artificial
            intelligence — not just as a technology, but as a tool for solving
            problems that matter to our communities.
          </p>
        </div>

        {/* Image + quote */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-xl shadow-brown-900/15">
            <img
              src="https://images.pexels.com/photos/8199160/pexels-photo-8199160.jpeg?auto=compress&cs=tinysrgb&h=750&w=940"
              alt="Students studying together"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Quote className="w-10 h-10 text-clay-400 mb-4" />
            <blockquote className="font-serif text-2xl lg:text-3xl text-brown-900 leading-snug">
              "We believe the next breakthrough in AI won't come from Silicon
              Valley. It will come from students who understand the problems
              their own communities face — and have the tools to solve them."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-clay-500/20 flex items-center justify-center font-serif font-bold text-clay-600">
                SG
              </div>
              <div>
                <div className="font-semibold text-brown-900">
                  Prof. Samuel Gitau
                </div>
                <div className="text-sm text-brown-700/60">
                  Faculty Advisor · Computer Science Dept.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Focus areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group p-7 bg-cream-50 rounded-2xl border border-cream-200 hover:border-clay-400 hover:shadow-xl hover:shadow-brown-900/8 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-clay-400 to-brown-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-cream-50" strokeWidth={2} />
                </div>
                <h3 className="font-serif font-bold text-lg text-brown-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-brown-700/70 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
