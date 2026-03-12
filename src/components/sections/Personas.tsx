'use client';

import { useState } from 'react';
import { User, Building, TrendingUp, Building2, Check, ArrowRight } from 'lucide-react';
import { useGSAPReveal } from '@/components/ui/GSAPProvider';

const personas = [
  {
    icon: User,
    title: 'Syndic bénévole',
    subtitle: null,
    description: 'Vous gérez votre copropriété sur votre temps libre. Nestor vous fait gagner des heures chaque semaine. Interface simple, pas de formation nécessaire.',
    points: ['Prise en main en 5 minutes', 'Modèles de courriers prêts', 'AG guidée pas-à-pas'],
    accent: 'bg-blue-50',
    accentText: 'text-blue-600',
  },
  {
    icon: Building,
    title: 'Petit syndic pro',
    subtitle: '1–10 copropriétés',
    description: 'Vous jonglez entre vos copropriétés sans outil adapté. Nestor centralise tout et vous donne une vision claire de chaque résidence.',
    points: ['Multi-copropriétés', 'Tableaux de bord comparatifs', 'Export comptable'],
    accent: 'bg-primary/5',
    accentText: 'text-primary',
  },
  {
    icon: TrendingUp,
    title: 'Syndic en croissance',
    subtitle: '10–50 copropriétés',
    description: 'Vous recrutez, vous vous structurez. Nestor grandit avec vous. Multi-utilisateurs, rôles, permissions.',
    points: ['Gestion d\'équipe', 'Automatisations', 'API'],
    accent: 'bg-amber-50',
    accentText: 'text-amber-600',
  },
  {
    icon: Building2,
    title: 'Grand cabinet',
    subtitle: '50+ copropriétés',
    description: 'Volume, rigueur, reporting. Nestor gère l\'échelle avec des analytiques avancées et l\'IA pour détecter les anomalies.',
    points: ['Analytiques portfolio', 'IA prédictive', 'Intégrations'],
    accent: 'bg-slate-100',
    accentText: 'text-slate-700',
  },
];

export function Personas() {
  const sectionRef = useGSAPReveal({ stagger: 0.1 });
  const [active, setActive] = useState(0);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-bg-app">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header — left-aligned */}
        <div className="max-w-2xl mb-14">
          <span className="gsap-reveal inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Pour qui ?
          </span>
          <h2 className="gsap-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-text-primary leading-tight">
            Conçu pour <span className="text-primary">tous les syndics</span>
          </h2>
        </div>

        {/* Two-column layout: tabs left, content right */}
        <div className="gsap-reveal grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Tab list — left */}
          <div className="lg:col-span-2 space-y-2">
            {personas.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                  active === i
                    ? 'bg-white border border-primary/15 shadow-sm'
                    : 'hover:bg-white/60'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg ${active === i ? personas[i].accent : 'bg-slate-100'} flex items-center justify-center shrink-0 transition-colors`}>
                  <p.icon className={`w-5 h-5 ${active === i ? personas[i].accentText : 'text-slate-400'} transition-colors`} />
                </div>
                <div>
                  <div className={`font-display font-semibold text-sm ${active === i ? 'text-text-primary' : 'text-text-secondary'} transition-colors`}>
                    {p.title}
                  </div>
                  {p.subtitle && (
                    <div className="text-xs text-text-secondary/70">{p.subtitle}</div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Active persona detail — right */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-slate-200/80 p-7 lg:p-9" style={{ boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.04)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg ${personas[active].accent} flex items-center justify-center`}>
                  {(() => {
                    const Icon = personas[active].icon;
                    return <Icon className={`w-5 h-5 ${personas[active].accentText}`} />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-text-primary">
                    {personas[active].title}
                  </h3>
                  {personas[active].subtitle && (
                    <span className="text-sm text-text-secondary">{personas[active].subtitle}</span>
                  )}
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed mb-7">
                {personas[active].description}
              </p>

              <div className="space-y-3 mb-8">
                {personas[active].points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-text-primary">{point}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://app.nestor-immo.com/register"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
              >
                Commencer avec ce profil
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
