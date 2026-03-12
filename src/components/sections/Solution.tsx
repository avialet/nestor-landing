'use client';

import { LayoutDashboard, Wrench, Receipt, Vote, FolderOpen, Sparkles, ArrowRight } from 'lucide-react';
import { AppScreenshot } from '@/components/ui/AppScreenshot';
import { useGSAPReveal } from '@/components/ui/GSAPProvider';
import { useState } from 'react';

const mainFeatures = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard intelligent',
    description: 'Vue d\'ensemble en temps réel : interventions en cours, factures à valider, impayés, tendances. Tout est là, en un coup d\'œil.',
    variant: 'dashboard' as const,
    accentLight: 'bg-blue-50',
    accentText: 'text-blue-600',
  },
  {
    icon: Wrench,
    title: 'Interventions de A à Z',
    description: 'Créez, planifiez, suivez chaque intervention. Du signalement à la clôture, avec suivi prestataire et facturation intégrée.',
    variant: 'interventions' as const,
    accentLight: 'bg-emerald-50',
    accentText: 'text-emerald-600',
  },
];

const secondaryFeatures = [
  {
    icon: Receipt,
    title: 'Factures & Comptabilité',
    description: 'Plan comptable, appels de charges, journal d\'écritures.',
    variant: 'comptabilite' as const,
  },
  {
    icon: Vote,
    title: 'Assemblées Générales',
    description: 'Résolutions, votes en temps réel, PV automatique.',
    variant: 'ag' as const,
  },
  {
    icon: FolderOpen,
    title: 'Gestion documentaire',
    description: 'Documents classés, recherche instantanée, accès sécurisé.',
    variant: 'documents' as const,
  },
  {
    icon: Sparkles,
    title: 'IA Copilote',
    description: 'Questions en langage naturel, réponses contextualisées.',
    variant: 'copilot' as const,
    badge: 'IA',
  },
];

export function Solution() {
  const sectionRef = useGSAPReveal({ stagger: 0.1 });
  const [activeVariant, setActiveVariant] = useState<'dashboard' | 'interventions' | 'comptabilite' | 'ag' | 'documents' | 'copilot' | 'prestataires'>('dashboard');

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-bg-app">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header — left-aligned */}
        <div className="max-w-2xl mb-16">
          <span className="gsap-reveal inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            La solution
          </span>
          <h2 className="gsap-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-text-primary leading-tight">
            Un seul outil pour tout gérer.{' '}
            <span className="text-primary">Avec l&apos;IA en plus.</span>
          </h2>
          <p className="gsap-reveal text-lg text-text-secondary mt-4 leading-relaxed">
            Six modules pensés pour couvrir 100% de vos besoins de gestion de copropriété.
          </p>
        </div>

        {/* Two main features — asymmetric cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {mainFeatures.map((feature) => (
            <div
              key={feature.title}
              className="gsap-reveal group cursor-pointer"
              onMouseEnter={() => setActiveVariant(feature.variant)}
            >
              <div className={`relative p-7 lg:p-8 rounded-xl border transition-all duration-200 ${
                activeVariant === feature.variant
                  ? 'border-primary/20 bg-white shadow-md'
                  : 'border-slate-200/80 bg-white hover:border-slate-300'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-lg ${feature.accentLight} flex items-center justify-center shrink-0`}>
                    <feature.icon className={`w-5 h-5 ${feature.accentText}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mt-1.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Four secondary features — compact row */}
        <div className="gsap-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {secondaryFeatures.map((feature) => (
            <button
              key={feature.title}
              onClick={() => setActiveVariant(feature.variant)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                activeVariant === feature.variant
                  ? 'border-primary/20 bg-white shadow-sm'
                  : 'border-slate-200/60 bg-white/60 hover:bg-white hover:border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-1.5">
                <feature.icon className={`w-4 h-4 shrink-0 ${
                  activeVariant === feature.variant ? 'text-primary' : 'text-text-secondary'
                }`} />
                <h3 className={`font-display font-semibold text-sm ${
                  activeVariant === feature.variant ? 'text-text-primary' : 'text-text-secondary'
                }`}>
                  {feature.title}
                </h3>
                {feature.badge && (
                  <span className="px-1.5 py-0.5 bg-primary text-white text-[9px] font-bold rounded">
                    {feature.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-text-secondary/80 leading-relaxed pl-7">
                {feature.description}
              </p>
            </button>
          ))}
        </div>

        {/* Screenshot preview */}
        <div className="gsap-reveal max-w-5xl">
          <AppScreenshot
            module={activeVariant}
            variant={activeVariant}
            className="transition-all duration-500"
          />
        </div>

        {/* CTA link */}
        <div className="gsap-reveal mt-10">
          <a
            href="/fonctionnalites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
          >
            Découvrir toutes les fonctionnalités
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
