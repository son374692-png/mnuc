import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { events } from '@/data';

export default function Events() {
  return (
    <section id="events" className="relative py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta-600">
              Upcoming Events
            </span>
            <h2 className="mt-4 font-serif font-bold text-brown-900 text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              Learn, build, and connect.
            </h2>
          </div>
          <a
            href="#join"
            className="inline-flex items-center gap-2 text-brown-800 font-semibold hover:text-terracotta-600 transition-colors whitespace-nowrap"
          >
            See all events
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {events.map((event) => (
            <article
              key={event.id}
              className="group bg-cream-100 rounded-2xl overflow-hidden border border-cream-200 hover:shadow-2xl hover:shadow-brown-900/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-cream-50/95 backdrop-blur text-brown-900 text-xs font-bold uppercase tracking-wide">
                  {event.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-brown-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-brown-700/70 leading-relaxed mb-5">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2.5 text-brown-800">
                    <Calendar className="w-4 h-4 text-clay-500" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-brown-700/70">
                    <Clock className="w-4 h-4 text-clay-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-brown-700/70">
                    <MapPin className="w-4 h-4 text-clay-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <a
                  href="#join"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-500 transition-colors"
                >
                  Register
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
