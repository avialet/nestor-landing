'use client';

import { useGSAPReveal } from '@/components/ui/GSAPProvider';

const painPoints = [
  {
    title: 'Des dizaines de mails et appels pour une seule intervention',
    description: 'Coordonner prestataires, copropriétaires et syndic par email ? Un cauchemar logistique.',
  },
  {
    title: 'Des factures qui traînent, des relances oubliées',
    description: 'Suivi comptable sur Excel, relances manuelles, erreurs de saisie. Chaque mois, c\'est la même histoire.',
  },
  {
    title: 'Des AG mal préparées, des votes contestés',
    description: 'Résolutions floues, majorités mal calculées, PV tardif. L\'AG devient un moment de tension.',
  },
  {
    title: 'Des sinistres qui s\'éternisent faute de suivi',
    description: 'Un dégât des eaux ? Entre l\'assurance, le prestataire et les copropriétaires, c\'est 6 mois minimum.',
  },
];

export function Problem() {
  const sectionRef = useGSAPReveal({ stagger: 0.12 });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="gsap-reveal inline-block text-xs font-semibold text-danger uppercase tracking-wider mb-4">
            Le constat
          </span>
          <h2 className="gsap-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-text-primary leading-tight">
            Gérer une copropriété, c&apos;est un{' '}
            <span className="text-danger">casse-tête</span> permanent
          </h2>
          <p className="gsap-reveal text-lg text-text-secondary mt-4 leading-relaxed">
            Vous méritez mieux que des outils éparpillés et des process bancals.
          </p>
        </div>

        {/* Stacked list instead of identical card grid */}
        <div className="space-y-4">
          {painPoints.map((pain, i) => (
            <div
              key={pain.title}
              className="gsap-reveal group flex items-start gap-5 py-5 px-6 rounded-xl bg-red-50/50 border border-red-100/60 transition-colors duration-200 hover:bg-red-50"
            >
              <span className="shrink-0 w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-sm font-bold text-danger mt-0.5">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display font-semibold text-base text-text-primary mb-1">
                  {pain.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
