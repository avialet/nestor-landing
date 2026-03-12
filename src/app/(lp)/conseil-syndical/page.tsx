import type { Metadata } from 'next';
import Image from 'next/image';
import { LandingNav } from '@/components/lp/LandingNav';
import { LeadForm } from '@/components/lp/LeadForm';

export const metadata: Metadata = {
  title: 'Conseil syndical : enfin voir ce que fait votre syndic — Nestor',
  description: 'Nestor donne aux membres du conseil syndical une visibilité complète sur leur immeuble : interventions, factures, AG. En temps réel.',
};

const trustSignals = [
  { value: '100%', label: 'Transparence sur les dépenses' },
  { value: '3×', label: 'Plus vite pour valider les devis' },
  { value: 'Zéro', label: 'Mauvaise surprise en AG' },
];

const painPoints = [
  {
    n: '01',
    title: 'Vous apprenez les décisions après tout le monde',
    desc: 'Le devis a été signé. Le prestataire est déjà passé. Vous l\'apprenez en lisant le PV. Votre rôle de contrôle est vidé de son sens.',
  },
  {
    n: '02',
    title: 'Les charges, un mystère absolu',
    desc: 'Des colonnes de chiffres dans un tableau Excel. Personne pour expliquer pourquoi les charges ont augmenté de 18% cette année.',
  },
  {
    n: '03',
    title: 'Entre deux AG, vous volez à l\'aveugle',
    desc: 'Vous pouvez poser des questions à l\'AG, mais ça n\'arrive qu\'une fois par an. Les 364 autres jours, l\'immeuble avance sans vous.',
  },
  {
    n: '04',
    title: 'Les incidents s\'éternisent sans suivi',
    desc: 'Le toit fuit depuis novembre. Votre syndic dit "en cours". Vous n\'avez aucun moyen de vérifier. L\'incident traîne encore 4 mois.',
  },
];

const sizeOptions = [
  { value: '1-20', label: 'Moins de 20 lots' },
  { value: '20-50', label: '20 à 50 lots' },
  { value: '50-150', label: '50 à 150 lots' },
  { value: '150+', label: 'Plus de 150 lots' },
];

export default function ConseilSyndical() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <LandingNav
        ctaText="Proposer Nestor à mon syndic"
        accentClass="bg-emerald-600 hover:bg-emerald-700"
      />

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-md px-3 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700 tracking-wide uppercase">Pour les conseils syndicaux</span>
            </div>

            <h1 className="font-display font-bold text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight text-text-primary mb-6">
              Enfin savoir exactement<br />
              ce que fait <span className="text-emerald-600">votre syndic.</span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed max-w-xl mb-8">
              Les membres du conseil syndical ont le <strong className="text-text-primary font-medium">droit à la transparence</strong>.
              Nestor vous donne la visibilité sur votre immeuble que vous méritez — sans attendre l'AG.
            </p>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-6 border border-emerald-100 bg-emerald-50 rounded-xl p-5 mb-8">
              {trustSignals.map((t) => (
                <div key={t.value} className="text-center">
                  <p className="font-display font-bold text-2xl text-emerald-700 mb-1">{t.value}</p>
                  <p className="text-xs text-emerald-600 leading-tight">{t.label}</p>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#10523E', '#2563EB', '#D97706', '#6366F1'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: c }}>
                    {['IM', 'PL', 'RC', 'FD'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">200+</strong> membres de conseil syndical utilisent Nestor
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:sticky lg:top-24">
            <LeadForm
              title="Demandez une démo pour votre immeuble"
              subtitle="On contacte votre syndic ensemble si vous le souhaitez."
              ctaText="Je demande une démo →"
              sizeLabel="Taille de votre immeuble"
              sizeOptions={sizeOptions}
              accentBg="bg-emerald-600 hover:bg-emerald-700"
              persona="conseil-syndical"
              successTitle="On vous rappelle très vite !"
              successText="Notre équipe vous contacte sous 4h pour organiser une démo adaptée à votre immeuble et, si vous le souhaitez, pour contacter votre syndic directement."
            />
          </div>
        </div>
      </section>

      {/* PAIN — dark */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">La réalité actuelle</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white max-w-2xl leading-tight">
              Être dans le conseil syndical, ce n'est pas ça.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-slate-800">
            {painPoints.map((p) => (
              <div key={p.n} className="bg-slate-900 p-8 md:p-10">
                <span className="font-display font-bold text-5xl text-slate-700 mb-4 block leading-none">{p.n}</span>
                <h3 className="font-display font-semibold text-xl text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">Ce que Nestor vous donne</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-tight">
              La transparence que<br />
              vous étiez en droit<br />
              d'attendre.
            </h2>
            <ul className="space-y-5">
              {[
                { icon: '👁️', title: 'Accès lecture temps réel', desc: 'Toutes les interventions, factures, devis — accessibles 24h/24 depuis votre téléphone.' },
                { icon: '✅', title: 'Validation des devis', desc: 'Approuvez les dépenses en ligne avant qu\'elles soient engagées. Vous reprenez le contrôle.' },
                { icon: '📋', title: 'Suivi des sinistres', desc: 'Chaque incident a une timeline complète. Vous voyez exactement où ça en est.' },
                { icon: '📁', title: 'Documents centralisés', desc: 'PV, contrats, relevés de charges — classés, searchables, disponibles pour tous les membres.' },
              ].map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="text-xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-text-primary text-sm mb-1">{f.title}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                  </div>
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
              <span className="text-xs text-text-tertiary font-mono ml-2">app.nestor-immo.com/assemblees</span>
            </div>
            <Image
              src="/screenshots/assemblees.png"
              alt="Assemblées générales Nestor"
              width={1440}
              height={900}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-y border-emerald-100 bg-emerald-50 py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-4xl text-emerald-300 font-serif leading-none mb-4">"</p>
          <blockquote className="font-display font-medium text-xl md:text-2xl text-text-primary leading-relaxed mb-6">
            Pour la première fois en 8 ans, je comprends vraiment ce qui se passe dans notre immeuble.
            J'ai approuvé 3 devis depuis mon téléphone cette semaine.
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">IM</div>
            <div>
              <p className="font-semibold text-text-primary text-sm">Isabelle M.</p>
              <p className="text-text-secondary text-xs">Présidente du conseil syndical · Immeuble de 36 lots · Paris 15e</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-3">Comment ça marche</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">De votre demande à votre accès</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: '1', title: 'Démo avec notre équipe', desc: 'On vous montre exactement ce que vous pourrez voir et contrôler. 15 minutes depuis votre téléphone.' },
            { n: '2', title: 'On contacte votre syndic', desc: 'Si vous le souhaitez, on présente Nestor directement à votre syndic. Argumentaire inclus.' },
            { n: '3', title: 'Accès en 48h', desc: 'Dès que votre syndic adopte Nestor, vous recevez votre accès membre du conseil syndical.' },
          ].map((s) => (
            <div key={s.n} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white font-display font-bold flex items-center justify-center text-lg">{s.n}</div>
              <div>
                <h3 className="font-display font-semibold text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-text-primary mb-10">Vos questions</h2>
          <div className="space-y-6">
            {[
              { q: 'C\'est le syndic qui doit décider d\'utiliser Nestor ?', a: 'Oui. Mais beaucoup de nos clients ont été convaincus par leur conseil syndical. Nous pouvons vous fournir un argumentaire et même co-présenter Nestor à votre syndic.' },
              { q: 'On peut voir les contrats en cours ?', a: 'Tous les documents sont accessibles selon les droits configurés par le syndic. En général, les membres du conseil syndical ont accès aux devis, factures, contrats et PV.' },
              { q: 'Mon syndic actuel peut adopter Nestor ?', a: 'Oui. Nestor s\'adapte à tous les syndics — bénévoles et professionnels. Migration guidée, formation incluse, prise en main en moins d\'une journée.' },
            ].map((f) => (
              <div key={f.q} className="border-b border-slate-200 pb-6">
                <p className="font-display font-semibold text-text-primary mb-2">{f.q}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4 leading-tight">
              Votre immeuble mérite<br />
              cette transparence.
            </h2>
            <p className="text-text-secondary text-lg mb-8">Prenez 15 minutes. On vous montre ce que vous pourrez voir et contrôler. Sans engagement, sans carte de crédit.</p>
            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              {['✓ Démo 15 min', '✓ Accès membre conseil syndical', '✓ Argumentaire pour votre syndic', '✓ Sans engagement'].map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
          <LeadForm
            title="Demandez votre démo"
            subtitle="15 minutes · votre immeuble · gratuit"
            ctaText="Je demande ma démo →"
            sizeLabel="Taille de votre immeuble"
            sizeOptions={sizeOptions}
            accentBg="bg-emerald-600 hover:bg-emerald-700"
            persona="conseil-syndical-footer"
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
