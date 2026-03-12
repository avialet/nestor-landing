'use client';

import { Star } from 'lucide-react';
import { useGSAPReveal } from '@/components/ui/GSAPProvider';

const testimonials = [
  {
    name: 'Sophie M.',
    role: 'Syndic bénévole à Marseille',
    text: 'Je passais mes week-ends sur la paperasse. Avec Nestor, je gère tout en 2h par semaine. L\'IA copilote me fait gagner un temps fou sur les questions des copropriétaires.',
    initials: 'SM',
    color: 'bg-blue-600',
    rating: 5,
    highlight: 'en 2h par semaine',
  },
  {
    name: 'Jean-Pierre D.',
    role: 'Cabinet Immobilier du Vieux-Port',
    text: 'La comptabilité était notre point noir. Nestor a tout simplifié. Mes comptables adorent le journal d\'écritures et les exports. On a divisé notre temps de saisie par 3.',
    initials: 'JP',
    color: 'bg-slate-700',
    rating: 5,
    highlight: 'divisé par 3',
  },
  {
    name: 'Marie L.',
    role: 'Gestionnaire chez Foncia Sud',
    text: 'Le copilot IA est bluffant. Je pose une question, j\'ai la réponse en 3 secondes avec les données de la copro. Mes clients sont impressionnés par notre réactivité.',
    initials: 'ML',
    color: 'bg-emerald-600',
    rating: 5,
    highlight: '3 secondes',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useGSAPReveal({ stagger: 0.15 });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header — left-aligned */}
        <div className="max-w-2xl mb-14">
          <span className="gsap-reveal inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Témoignages
          </span>
          <h2 className="gsap-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-text-primary leading-tight">
            Ils ont adopté <span className="text-primary">Nestor</span>
          </h2>
        </div>

        {/* Asymmetric layout: featured + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured testimonial — takes 3 cols */}
          <div className="gsap-reveal lg:col-span-3">
            <div className="h-full bg-[#0C1220] rounded-xl p-8 lg:p-10 flex flex-col">
              <Stars count={testimonials[0].rating} />

              <blockquote className="text-lg lg:text-xl text-slate-300 leading-relaxed mt-6 flex-1">
                &ldquo;{testimonials[0].text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                <div className={`w-11 h-11 rounded-full ${testimonials[0].color} flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{testimonials[0].initials}</span>
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-white">{testimonials[0].name}</div>
                  <div className="text-xs text-slate-400">{testimonials[0].role}</div>
                </div>
                <div className="ml-auto">
                  <span className="inline-block px-3 py-1 bg-white/5 rounded-lg text-xs font-semibold text-primary-200">
                    {testimonials[0].highlight}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Two stacked testimonials — takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {testimonials.slice(1).map((t) => (
              <div
                key={t.name}
                className="gsap-reveal flex-1 bg-white rounded-xl border border-slate-200/80 p-6 lg:p-7 flex flex-col"
                style={{ boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.04)' }}
              >
                <Stars count={t.rating} />

                <blockquote className="text-sm text-text-secondary leading-relaxed mt-4 flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center`}>
                    <span className="text-white text-[10px] font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-xs text-text-primary">{t.name}</div>
                    <div className="text-[11px] text-text-secondary">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
