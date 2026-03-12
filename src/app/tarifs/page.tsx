'use client';

import { useState } from 'react';
import { Check, X, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { useGSAPReveal, useCountUp } from '@/components/ui/GSAPProvider';

const plans = [
  {
    name: 'Essentiel',
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: 'Pour démarrer sereinement',
    cta: 'Commencer gratuitement',
    ctaLink: 'https://app.nestor-immo.com/register?plan=essential',
    popular: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 79,
    yearlyPrice: 63,
    description: 'Pour les syndics ambitieux',
    cta: 'Essai gratuit 14 jours',
    ctaLink: 'https://app.nestor-immo.com/register?plan=pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Pour les grands cabinets',
    cta: 'Contactez-nous',
    ctaLink: '/contact',
    popular: false,
  },
];

const comparisonFeatures = [
  { category: 'Général', features: [
    { name: 'Copropriétés', values: ['1', '5', 'Illimité'] },
    { name: 'Lots', values: ['50', 'Illimité', 'Illimité'] },
    { name: 'Utilisateurs', values: ['1', '5', 'Illimité'] },
    { name: 'Stockage documents', values: ['5 Go', '50 Go', 'Illimité'] },
  ]},
  { category: 'Modules', features: [
    { name: 'Dashboard', values: [true, true, true] },
    { name: 'Interventions', values: [true, true, true] },
    { name: 'Factures', values: [true, true, true] },
    { name: 'Documents', values: [true, true, true] },
    { name: 'Comptabilité de base', values: [true, true, true] },
    { name: 'Comptabilité avancée', values: [false, true, true] },
    { name: 'Assemblées Générales', values: [false, true, true] },
    { name: 'Prestataires avec évaluations', values: [false, true, true] },
  ]},
  { category: 'Intelligence Artificielle', features: [
    { name: 'IA Copilote', values: [false, true, true] },
    { name: 'Analytiques IA', values: [false, true, true] },
    { name: 'Réception IA (PDF)', values: [false, true, true] },
    { name: 'Maintenance prédictive', values: [false, false, true] },
  ]},
  { category: 'Support & Intégrations', features: [
    { name: 'Support email', values: [true, true, true] },
    { name: 'Support prioritaire', values: [false, true, true] },
    { name: 'Account manager dédié', values: [false, false, true] },
    { name: 'API & webhooks', values: [false, false, true] },
    { name: 'SSO / SAML', values: [false, false, true] },
    { name: 'SLA 99.9%', values: [false, false, true] },
  ]},
];

function PlanRecommendation({ count }: { count: number }) {
  if (count <= 1) return <span className="text-primary font-semibold">Essentiel</span>;
  if (count <= 5) return <span className="text-primary font-semibold">Pro</span>;
  return <span className="text-primary font-semibold">Enterprise</span>;
}

export default function TarifsPage() {
  const headerRef = useGSAPReveal();
  const pricingRef = useGSAPReveal({ stagger: 0.12 });
  const tableRef = useGSAPReveal();
  const calcRef = useGSAPReveal();
  const faqRef = useGSAPReveal({ stagger: 0.08 });

  const [annual, setAnnual] = useState(false);
  const [coproCount, setCoproCount] = useState(1);

  return (
    <>
      {/* Hero */}
      <section ref={headerRef} className="bg-hero-gradient pt-32 lg:pt-40 pb-16 lg:pb-20 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Des tarifs simples, <span className="text-primary">sans surprise</span>
          </h1>
          <p className="gsap-reveal text-lg text-blue-200/70 mt-4 max-w-2xl mx-auto">
            Pas d&apos;engagement. Pas de frais cachés. Annulez quand vous voulez.
          </p>
          {/* Toggle */}
          <div className="gsap-reveal flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-blue-200/50'}`}>Mensuel</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? 'bg-primary' : 'bg-white/20'}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${annual ? 'translate-x-7' : 'translate-x-0.5'}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-blue-200/50'}`}>
              Annuel <span className="text-success">-20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section ref={pricingRef} className="py-16 bg-bg-app -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start -mt-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`gsap-reveal relative bg-white rounded-card p-6 lg:p-8 ${
                  plan.popular
                    ? 'border-2 border-primary shadow-xl shadow-primary/10 md:-mt-4 md:mb-4'
                    : 'border border-border-default shadow-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      <Sparkles className="w-3.5 h-3.5" />
                      Populaire
                    </span>
                  </div>
                )}

                <h3 className="font-display font-bold text-xl text-text-primary">{plan.name}</h3>
                <p className="text-sm text-text-secondary mt-1">{plan.description}</p>

                <div className="my-6">
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
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-button font-semibold text-sm transition-all group ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary-hover text-white'
                      : 'bg-slate-100 text-text-primary hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-secondary mt-8">
            Tous les prix sont HT. TVA 20% applicable. • 14 jours d&apos;essai gratuit sur tous les plans.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section ref={tableRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="gsap-reveal text-3xl font-display font-bold text-text-primary text-center mb-12">
            Comparatif détaillé
          </h2>
          <div className="gsap-reveal overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border-default">
                  <th className="text-left py-4 pr-4 w-1/3"></th>
                  {plans.map((p) => (
                    <th key={p.name} className={`text-center py-4 px-4 font-display font-semibold ${p.popular ? 'text-primary' : 'text-text-primary'}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((cat) => (
                  <>
                    <tr key={cat.category}>
                      <td colSpan={4} className="pt-8 pb-3 font-display font-semibold text-sm text-text-primary uppercase tracking-wider">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((f) => (
                      <tr key={f.name} className="border-b border-border-default/50">
                        <td className="py-3 pr-4 text-sm text-text-secondary">{f.name}</td>
                        {f.values.map((v, i) => (
                          <td key={i} className="py-3 px-4 text-center">
                            {typeof v === 'boolean' ? (
                              v ? (
                                <Check className="w-5 h-5 text-success mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm font-medium text-text-primary">{v}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section ref={calcRef} className="py-16 lg:py-24 bg-bg-app">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gsap-reveal text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-text-primary">
              Quel plan pour vous ?
            </h2>
            <p className="text-text-secondary mt-2">Déplacez le curseur pour trouver le plan adapté.</p>
          </div>

          <div className="gsap-reveal bg-white rounded-card shadow-card-hover border border-border-default p-8">
            <label className="block text-sm font-medium text-text-primary mb-4">
              Combien de copropriétés gérez-vous ?
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={coproCount}
              onChange={(e) => setCoproCount(Number(e.target.value))}
              className="w-full h-2 bg-primary-100 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-text-secondary mt-2">
              <span>1</span>
              <span>10</span>
              <span>25</span>
              <span>50</span>
              <span>100+</span>
            </div>

            <div className="mt-8 p-6 bg-primary-light rounded-card text-center">
              <div className="font-display font-bold text-5xl text-primary">{coproCount}</div>
              <div className="text-sm text-text-secondary mt-1">copropriété{coproCount > 1 ? 's' : ''}</div>
              <div className="mt-4 text-lg font-display font-semibold text-text-primary">
                Nous vous recommandons le plan <PlanRecommendation count={coproCount} />
              </div>
              <a
                href={coproCount <= 1 ? 'https://app.nestor-immo.com/register?plan=essential' : coproCount <= 5 ? 'https://app.nestor-immo.com/register?plan=pro' : '/contact'}
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-button transition-all group"
              >
                {coproCount > 50 ? 'Contactez-nous' : 'Démarrer l\'essai gratuit'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Tarifs */}
      <section ref={faqRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="gsap-reveal text-3xl font-display font-bold text-text-primary text-center mb-10">
            Questions sur les tarifs
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Puis-je changer de plan à tout moment ?', a: 'Oui, vous pouvez passer à un plan supérieur à tout moment. La différence est calculée au prorata. Pour un downgrade, le changement prend effet à la fin de votre période de facturation.' },
              { q: 'L\'essai gratuit est-il sans engagement ?', a: 'Totalement. Vous n\'avez pas besoin de renseigner de carte bancaire pour commencer votre essai de 14 jours. À la fin de l\'essai, vous choisissez votre plan ou vous arrêtez.' },
              { q: 'Y a-t-il des frais de mise en place ?', a: 'Non, aucun frais de mise en place. Votre compte est opérationnel en quelques minutes. L\'import de données est gratuit et accompagné par notre équipe.' },
              { q: 'Proposez-vous des remises pour les associations ?', a: 'Oui, nous proposons des tarifs préférentiels pour les associations de copropriétaires et les syndics bénévoles. Contactez-nous pour en discuter.' },
            ].map((faq) => (
              <div key={faq.q} className="gsap-reveal bg-bg-app rounded-card border border-border-default p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-text-primary">{faq.q}</h3>
                    <p className="text-sm text-text-secondary mt-2 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
