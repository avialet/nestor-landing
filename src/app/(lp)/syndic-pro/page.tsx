import type { Metadata } from 'next';
import Image from 'next/image';
import { LandingNav } from '@/components/lp/LandingNav';
import { LeadForm } from '@/components/lp/LeadForm';

export const metadata: Metadata = {
  title: 'Doublez vos mandats sans doubler votre équipe — Nestor',
  description: 'Nestor automatise la gestion multi-copropriétés pour les syndics professionnels. Interventions, comptabilité, AG — en un seul outil.',
};

const metrics = [
  { value: '2×', label: 'plus de mandats gérés\npar collaborateur' },
  { value: '68%', label: 'de tâches administratives\nautomatisées' },
  { value: '-40%', label: 'de temps passé\nen réunion AG' },
];

const painPoints = [
  { n: '01', title: 'Vos collaborateurs noyés dans l\'administratif', desc: 'Relances, tableaux de bord, saisies comptables, convocations AG — 60% du temps part sur des tâches sans valeur ajoutée pour vos clients.' },
  { n: '02', title: 'Des outils qui ne se parlent pas', desc: 'Logiciel comptable, agenda, stockage docs, mails, Excel — chaque outil vit dans son silo. Vos données sont éparpillées, votre équipe aussi.' },
  { n: '03', title: 'La croissance est bloquée', desc: 'Vous ne pouvez pas prendre 5 nouveaux mandats sans embaucher un collaborateur. La rentabilité plafonne.' },
  { n: '04', title: 'Des clients de plus en plus exigeants', desc: 'Ils veulent des réponses en 24h, des rapports lisibles, une transparence que votre logiciel actuel ne permet pas.' },
];

const sizeOptions = [
  { value: '1-10', label: '1 à 10 copropriétés' },
  { value: '10-30', label: '10 à 30 copropriétés' },
  { value: '30-100', label: '30 à 100 copropriétés' },
  { value: '100+', label: 'Plus de 100 copropriétés' },
];

export default function SyndicPro() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <LandingNav
        ctaText="Demander une démo cabinet"
        accentClass="bg-primary hover:bg-primary-hover"
      />

      {/* HERO — dark */}
      <section className="bg-slate-900 pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-md px-3 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-300 tracking-wide uppercase">Pour les cabinets de syndic</span>
            </div>

            <h1 className="font-display font-bold text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight text-white mb-6">
              Gérez 2× plus de mandats<br />
              avec la <span className="text-primary-200">même équipe.</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-xl mb-10">
              Nestor automatise les tâches répétitives pour que vos collaborateurs se concentrent sur ce qui compte vraiment :{' '}
              <strong className="text-white font-medium">la relation client et la croissance de votre cabinet.</strong>
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-700 pt-8">
              {metrics.map((m) => (
                <div key={m.value}>
                  <p className="font-display font-bold text-3xl text-primary-200 mb-1">{m.value}</p>
                  <p className="text-xs text-slate-400 leading-tight whitespace-pre-line">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:sticky lg:top-24">
            <LeadForm
              title="Voyez Nestor pour votre cabinet"
              subtitle="Démo personnalisée 20 min · Multi-copropriétés"
              ctaText="Demander ma démo cabinet →"
              sizeLabel="Nombre de copropriétés gérées"
              sizeOptions={sizeOptions}
              persona="syndic-pro"
              successTitle="Parfait !"
              successText="Un expert Nestor dédié aux cabinets vous contacte dans les 4h ouvrées pour organiser votre démo sur mesure."
            />
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-3">Le diagnostic</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary max-w-2xl leading-tight">
            Pourquoi les cabinets plafonnent à 20-30 copropriétés.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((p) => (
            <div key={p.n} className="bg-white rounded-xl border border-slate-200 p-8">
              <span className="font-display font-bold text-4xl text-slate-100 block mb-3 leading-none">{p.n}</span>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-2">{p.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENSHOT interventions */}
      <section className="bg-slate-50 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Multi-copropriétés</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4 leading-tight">
                Toutes vos interventions,<br />
                tous vos mandats.<br />
                Un seul écran.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6 text-sm">
                Votre équipe visualise en temps réel l'état de chaque copropriété. Les urgences remontent automatiquement. Les relances partent sans action manuelle.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  'Tableau de bord multi-copropriétés centralisé',
                  'Relances automatiques prestataires et copropriétaires',
                  'Suivi avancement intervention en temps réel',
                  'Reporting mensuel généré automatiquement',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-card-hover">
              <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-slate-100">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-text-tertiary font-mono ml-2">app.nestor-immo.com/interventions</span>
              </div>
              <Image
                src="/screenshots/interventions.png"
                alt="Gestion des interventions Nestor"
                width={1440}
                height={900}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPTABILITE screenshot */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-card-hover">
              <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-slate-100">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-text-tertiary font-mono ml-2">app.nestor-immo.com/comptabilite</span>
              </div>
              <Image
                src="/screenshots/comptabilite.png"
                alt="Comptabilité copropriété Nestor"
                width={1440}
                height={900}
                className="w-full"
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Comptabilité</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4 leading-tight">
                La comptabilité de copropriété,<br />
                sans les maux de tête.
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm mb-6">
                Plan comptable M14 intégré, appels de charges automatiques, rapprochement bancaire guidé. Votre équipe comptable gagne 40% de temps.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  'Appels de charges générés automatiquement',
                  'Rapprochement bancaire en 1 clic',
                  'Rapports financiers exportables',
                  'Suivi des impayés avec relance auto',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-primary py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-5xl text-primary-200 font-serif leading-none mb-4">"</p>
          <blockquote className="font-display font-medium text-xl md:text-2xl text-white leading-relaxed mb-8">
            Nestor nous a permis de prendre 8 nouveaux mandats en 6 mois sans recruter.
            C'est la seule solution qui pense vraiment syndic professionnel.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">TR</div>
            <div className="text-left">
              <p className="font-semibold text-white text-sm">Thomas R.</p>
              <p className="text-blue-200 text-xs">Gérant · Cabinet Renard Immobilier · 45 copropriétés</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-10 max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-text-primary mb-10">Questions des cabinets</h2>
        <div className="space-y-6">
          {[
            { q: 'On a déjà un logiciel comptable, on peut l\'intégrer ?', a: 'Nestor peut coexister avec votre logiciel comptable actuel ou le remplacer entièrement. Nous évaluons ça ensemble pendant la démo.' },
            { q: 'La prise en main pour toute notre équipe ?', a: 'Onboarding en 2h pour votre équipe entière. Un Customer Success Manager dédié aux cabinets vous accompagne les 60 premiers jours.' },
            { q: 'Quel est le modèle tarifaire ?', a: 'Facturation à la copropriété, dégressive selon le volume. Les cabinets de 20+ copropriétés bénéficient de tarifs négociés. Devis personnalisé pendant la démo.' },
          ].map((f) => (
            <div key={f.q} className="border-b border-slate-200 pb-6">
              <p className="font-display font-semibold text-text-primary mb-2">{f.q}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-50 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4 leading-tight">
              Scalez votre cabinet.<br />Sans vous épuiser.
            </h2>
            <p className="text-text-secondary text-lg mb-8">Nos clients cabinets gèrent en moyenne 23 copropriétés par collaborateur. La moyenne du secteur est à 12.</p>
            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              {['✓ Démo cabinet 20 min', '✓ Migration incluse', '✓ CSM dédié', '✓ Tarif dégressif'].map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
          <LeadForm
            title="Démo cabinet sur mesure"
            subtitle="20 minutes · Adapté à votre organisation"
            ctaText="Je demande ma démo cabinet →"
            sizeLabel="Nombre de copropriétés gérées"
            sizeOptions={sizeOptions}
            persona="syndic-pro-footer"
          />
        </div>
      </section>

      <footer className="border-t border-slate-100 py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-tertiary">
          <p>© 2025 Nestor · Logiciel de gestion de copropriété</p>
          <div className="flex gap-6">
            <a href="/mentions-legales" className="hover:text-text-secondary transition-colors">Mentions légales</a>
            <a href="/contact" className="hover:text-text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
