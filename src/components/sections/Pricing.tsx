'use client';

import { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { useGSAPReveal } from '@/components/ui/GSAPProvider';

const plans = [
  {
    name: 'Essentiel',
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: 'Pour démarrer sereinement',
    cta: 'Commencer gratuitement',
    ctaLink: 'https://app.nestor-immo.com/register?plan=essential',
    popular: false,
    features: [
      'Jusqu\'à 1 copropriété',
      '50 lots max',
      'Interventions, factures, documents',
      'Comptabilité de base',
      '1 utilisateur',
      'Support email',
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 79,
    yearlyPrice: 63,
    description: 'Pour les syndics ambitieux',
    cta: 'Essai gratuit 14 jours',
    ctaLink: 'https://app.nestor-immo.com/register?plan=pro',
    popular: true,
    features: [
      'Jusqu\'à 5 copropriétés',
      'Lots illimités',
      'Tout Essentiel +',
      'Assemblées générales complètes',
      'Prestataires avec évaluations',
      'IA Copilote + Analytiques',
      'Réception IA (upload PDF)',
      '5 utilisateurs',
      'Support prioritaire',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Pour les grands cabinets',
    cta: 'Contactez-nous',
    ctaLink: '/contact',
    popular: false,
    features: [
      'Copropriétés illimitées',
      'Tout Pro +',
      'Maintenance prédictive IA',
      'API & webhooks',
      'SSO / SAML',
      'Utilisateurs illimités',
      'Account manager dédié',
      'SLA 99.9%',
    ],
  },
];

export function Pricing() {
  const sectionRef = useGSAPReveal({ stagger: 0.12 });
  const [annual, setAnnual] = useState(false);

  return (
    <section ref={sectionRef} id="tarifs" className="py-24 lg:py-32 bg-bg-app">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header — left-aligned */}
        <div className="max-w-2xl mb-14">
          <span className="gsap-reveal inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Tarifs
          </span>
          <h2 className="gsap-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-text-primary leading-tight">
            Des tarifs simples, <span className="text-primary">sans surprise</span>
          </h2>
          <p className="gsap-reveal text-lg text-text-secondary mt-4">
            Pas d&apos;engagement. Pas de frais cachés. Annulez quand vous voulez.
          </p>

          {/* Toggle */}
          <div className="gsap-reveal flex items-center gap-4 mt-6">
            <span className={`text-sm font-medium ${!annual ? 'text-text-primary' : 'text-text-secondary'}`}>Mensuel</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-primary' : 'bg-slate-200'}`}
            >
              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-text-primary' : 'text-text-secondary'}`}>
              Annuel
              <span className="ml-1.5 text-xs text-emerald-600 font-semibold">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`gsap-reveal relative rounded-xl p-6 lg:p-8 transition-all duration-200 ${
                plan.popular
                  ? 'bg-white border-2 border-primary shadow-lg md:-mt-3 md:mb-3'
                  : 'bg-white border border-slate-200/80 hover:border-slate-300'
              }`}
              style={!plan.popular ? { boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.04)' } : undefined}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-md">
                    <Sparkles className="w-3 h-3" />
                    Populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-lg text-text-primary">{plan.name}</h3>
                <p className="text-sm text-text-secondary mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <div className="flex items-baseline gap-1">
                    {annual && (
                      <span className="text-lg text-text-secondary line-through mr-1">{plan.monthlyPrice}€</span>
                    )}
                    <span className="font-display font-bold text-4xl text-text-primary">
                      {annual ? plan.yearlyPrice : plan.monthlyPrice}€
                    </span>
                    <span className="text-text-secondary text-sm">/mois</span>
                  </div>
                ) : (
                  <div className="font-display font-bold text-3xl text-text-primary">Sur mesure</div>
                )}
              </div>

              <a
                href={plan.ctaLink}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm transition-colors duration-200 group ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'bg-slate-100 text-text-primary hover:bg-slate-200'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-primary/8' : 'bg-slate-50'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-slate-400'}`} />
                    </div>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="gsap-reveal text-sm text-text-secondary mt-10">
          Tous les prix sont HT. TVA 20% applicable. 14 jours d&apos;essai gratuit sur tous les plans.
        </p>
      </div>
    </section>
  );
}
