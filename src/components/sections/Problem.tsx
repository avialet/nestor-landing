'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  {
    num: '01',
    title: 'Des dizaines de mails pour une seule intervention',
    description: 'Coordonner prestataires, copropriétaires et syndic par email ? Un cauchemar logistique qui s\'éternise.',
  },
  {
    num: '02',
    title: 'Des factures qui traînent, des relances oubliées',
    description: 'Suivi comptable sur Excel, relances manuelles, erreurs de saisie. Chaque mois, la même histoire.',
  },
  {
    num: '03',
    title: 'Des AG mal préparées, des votes contestés',
    description: 'Résolutions floues, majorités mal calculées, PV tardif. L\'assemblée devient un moment de tension.',
  },
  {
    num: '04',
    title: 'Des sinistres qui s\'éternisent faute de suivi',
    description: 'Un dégât des eaux ? Entre assurance, prestataire et copropriétaires : 6 mois minimum.',
  },
];

export function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.pain-item');
    if (!items) return;

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 87%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    const header = sectionRef.current?.querySelector('.problem-header');
    if (header) {
      gsap.fromTo(header, { opacity: 0, y: 32 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: header, start: 'top 88%', toggleActions: 'play none none none' },
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#F7F5EF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">

          {/* Left: sticky label */}
          <div className="problem-header lg:pt-2">
            <div className="w-6 h-[2px] bg-red-500 mb-6" />
            <span className="block text-[11px] font-semibold text-red-500 tracking-[0.2em] uppercase mb-4">
              Le constat
            </span>
            <h2 className="text-2xl font-display font-bold text-[#0F172A] leading-tight">
              Gérer une copropriété, c&apos;est un casse-tête permanent
            </h2>
            <p className="text-sm text-[#64748B] mt-4 leading-relaxed">
              Vous méritez mieux que des outils éparpillés.
            </p>
          </div>

          {/* Right: pain points, horizontal dividers */}
          <div className="divide-y divide-[#E2DDD4]">
            {painPoints.map((pain) => (
              <div key={pain.num} className="pain-item flex items-start gap-6 py-8 group">
                <span
                  className="shrink-0 font-display font-bold text-[#E2DDD4] leading-none select-none"
                  style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
                >
                  {pain.num}
                </span>
                <div className="pt-2">
                  <h3 className="font-display font-semibold text-[#0F172A] text-lg mb-2 leading-snug">
                    {pain.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
