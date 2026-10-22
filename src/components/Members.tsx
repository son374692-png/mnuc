import { Linkedin, Mail } from 'lucide-react';
import { members } from '@/data';

export default function Members() {
  return (
    <section id="members" className="relative py-24 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta-600">
            Our Team
          </span>
          <h2 className="mt-4 font-serif font-bold text-brown-900 text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
            The people behind the code.
          </h2>
          <p className="mt-5 text-lg text-brown-700/75 leading-relaxed">
            Our leadership team is a mix of researchers, engineers, and
            organizers — all students dedicated to making AI accessible and
            impactful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="group bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 hover:shadow-xl hover:shadow-brown-900/8 transition-all"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-cream-50/90 flex items-center justify-center text-brown-800 hover:bg-cream-50 transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-cream-50/90 flex items-center justify-center text-brown-800 hover:bg-cream-50 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-serif font-bold text-lg text-brown-900">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-terracotta-600 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-brown-700/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
