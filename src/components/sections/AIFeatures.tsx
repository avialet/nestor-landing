'use client';

import { MessageCircle, BarChart3, Settings, FileText } from 'lucide-react';
import { useGSAPReveal } from '@/components/ui/GSAPProvider';

const aiFeatures = [
  {
    icon: MessageCircle,
    title: 'Copilot IA',
    description: 'Interrogez Nestor comme un assistant : « Quels sont les impayés de M. Dupont ? », « Résume la dernière AG ». Réponses instantanées.',
    stat: '3 sec',
    statLabel: 'temps de réponse moyen',
  },
  {
    icon: BarChart3,
    title: 'Analytiques prédictives',
    description: 'Score de santé de votre copropriété, détection d\'anomalies, tendances de dépenses, recommandations d\'optimisation.',
    stat: '98%',
    statLabel: 'précision de détection',
  },
  {
    icon: Settings,
    title: 'Maintenance prédictive',
    description: 'Nestor anticipe les pannes : ascenseur, chaudière, toiture. Planifiez avant que ça casse. Réduisez les urgences de 60%.',
    stat: '-60%',
    statLabel: 'interventions urgentes',
  },
  {
    icon: FileText,
    title: 'Réception IA',
    description: 'Déposez une facture PDF. L\'IA la lit, l\'analyse, identifie le prestataire, extrait le montant, et la pré-remplit pour validation.',
    stat: '10s',
    statLabel: 'par facture traitée',
  },
];

export function AIFeatures() {
  const sectionRef = useGSAPReveal({ stagger: 0.12, y: 30 });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0C1220]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="gsap-reveal inline-block text-xs font-semibold text-primary-200 uppercase tracking-wider mb-4">
            Intelligence artificielle
          </span>
          <h2 className="gsap-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-white leading-tight">
            L&apos;IA au service de votre copropriété
          </h2>
          <p className="gsap-reveal text-lg text-slate-400 mt-4 leading-relaxed">
            Quatre modules qui transforment des heures de travail en quelques secondes.
          </p>
        </div>

        <div className="space-y-3">
          {aiFeatures.map((feature) => (
            <div
              key={feature.title}
              className="gsap-reveal group flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 p-6 lg:py-7 lg:px-8 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors duration-200"
            >
              <div className="flex items-center gap-4 sm:w-56 shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-primary-200" />
                </div>
                <h3 className="font-display font-semibold text-base text-white">
                  {feature.title}
                </h3>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                {feature.description}
              </p>

              <div className="sm:text-right shrink-0 sm:w-32">
                <div className="font-display font-bold text-2xl text-white">{feature.stat}</div>
                <div className="text-xs text-slate-500">{feature.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
