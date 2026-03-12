import type { Metadata } from 'next';
import Image from 'next/image';
import { LandingNav } from '@/components/lp/LandingNav';
import { LeadForm } from '@/components/lp/LeadForm';

export const metadata: Metadata = {
  title: 'Gérez votre copropriété en 45 min/semaine — Nestor',
  description: 'Nestor simplifie la gestion de copropriété pour les syndics bénévoles. Moins de stress, moins de temps perdu, des voisins enfin satisfaits.',
};

const painPoints = [
  {
    n: '01',
    title: 'Des heures à courir après les devis',
    desc: '3 prestataires à contacter, 12 échanges de mails, un devis qui arrive 3 semaines après. Alors que vous avez votre propre travail.',
  },
  {
    n: '02',
    title: 'La comptabilité mensuelle, votre cauchemar',
    desc: 'Excel qui plante, charges mal réparties, copropriétaires qui appellent parce qu\'ils ne comprennent pas leur relevé. Vous n\'êtes pas comptable.',
  },
  {
    n: '03',
    title: 'L\'AG que vous redoutez chaque année',
    desc: 'Préparer l\'ordre du jour, animer les votes, rédiger le PV — pour ensuite l\'envoyer et corriger les erreurs. Tout seul.',
  },
  {
    n: '04',
    title: 'Le sentiment d\'être seul face à tout',
    desc: 'Vos voisins attendent des réponses immédiates. Mais qui vous aide, vous ?',
  },
];

const features = [
  {
    icon: '🔧',
    title: 'Interventions',
    desc: 'Créez une intervention en 2 clics. Nestor envoie les demandes aux prestataires et relance automatiquement.',
  },
  {
    icon: '📊',
    title: 'Comptabilité',
    desc: 'Plan comptable prérempli pour la copropriété. Saisissez les factures, Nestor génère les appels de charges.',
  },
  {
    icon: '🗳️',
    title: 'Assemblées générales',
    desc: 'Ordre du jour, convocations, votes en temps réel, PV automatique. L\'AG la plus simple de votre vie.',
  },
  {
    icon: '🤖',
    title: 'IA copilote',
    desc: '"Quel est l\'état de notre fonds travaux ?" — posez vos questions en français, Nestor répond avec vos données.',
  },
];

export default function SyndicBenevole() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <LandingNav
        ctaText="Réserver ma démo — gratuit"
        accentClass="bg-amber-500 hover:bg-amber-600"
      />

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-md px-3 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-amber-700 tracking-wide uppercase">Pour les syndics bénévoles</span>
            </div>

            <h1 className="font-display font-bold text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight text-text-primary mb-6">
              Gérez votre copropriété<br />
              en <span className="text-amber-500">45 minutes</span><br />
              par semaine.
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed max-w-xl mb-8">
              Vous avez accepté d'aider votre immeuble. Personne ne vous a dit que ça prendrait autant de temps.{' '}
              <strong className="text-text-primary font-medium">Nestor s'occupe du reste</strong> — sans formation, sans prise de tête.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#2563EB', '#16A34A', '#D97706', '#DC2626'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: c }}>
                    {['ML', 'FA', 'DP', 'SC'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-400 text-sm mb-0.5">{'★★★★★'}</div>
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">150+</strong> syndics bénévoles utilisent Nestor
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:sticky lg:top-24">
            <LeadForm
              title="Voyez Nestor en 15 min"
              subtitle="Démo gratuite · votre immeuble · sans engagement"
              ctaText="Réserver ma démo gratuite →"
              accentBg="bg-amber-500 hover:bg-amber-600"
              sizeLabel="Taille de votre copropriété"
              persona="syndic-benevole"
              successTitle="Parfait ! On vous rappelle bientôt."
              successText="Notre équipe vous contacte dans les 4h ouvrées pour caler une démo de 15 minutes, sur votre immeuble."
            />
          </div>
        </div>
      </section>

      {/* SCREENSHOT */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-20">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-card-hover bg-white">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-text-tertiary font-mono ml-2">app.nestor-immo.com/dashboard</span>
          </div>
          <Image
            src="/screenshots/dashboard.png"
            alt="Tableau de bord Nestor — vue d'ensemble copropriété"
            width={1440}
            height={900}
            className="w-full"
            priority
          />
        </div>
        <p className="text-center text-sm text-text-tertiary mt-4">Vue d'ensemble en temps réel — tout ce qui se passe dans votre immeuble, d'un coup d'œil.</p>
      </section>

      {/* PAIN — dark section */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Le quotidien sans Nestor</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white max-w-2xl leading-tight">
              Vous méritez mieux que ça.
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
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-500 mb-3">La solution</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary max-w-2xl leading-tight">
            Un seul outil pensé<br />pour les syndics bénévoles.
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl">Pas besoin d'être comptable ou informaticien. Si vous savez envoyer un mail, vous savez utiliser Nestor.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-slate-200 p-7 hover:shadow-card-hover transition-shadow">
              <span className="text-2xl mb-4 block">{f.icon}</span>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-amber-50 border-y border-amber-100 py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-4xl text-amber-300 font-serif leading-none mb-4">"</p>
          <blockquote className="font-display font-medium text-xl md:text-2xl text-text-primary leading-relaxed mb-6">
            Avant Nestor, je passais 6 heures par semaine à répondre aux mails et à chercher des devis.
            Maintenant c'est 30 minutes. Et mes voisins sont enfin satisfaits.
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-sm">MD</div>
            <div>
              <p className="font-semibold text-text-primary text-sm">Marie D.</p>
              <p className="text-text-secondary text-xs">Syndic bénévole · Immeuble de 24 lots · Lyon</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-3">3 étapes</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">De la démo à votre immeuble en ligne</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: '1', title: 'Démo personnalisée', desc: '15 minutes avec un expert Nestor. On adapte la présentation à votre immeuble et vos questions.' },
            { n: '2', title: 'Migration guidée', desc: 'On importe vos données existantes (copropriétaires, comptabilité). Votre équipe ne reparte pas de zéro.' },
            { n: '3', title: 'Pris en main en 1 jour', desc: 'Interface intuitive. Formation incluse. Support réactif. Vos voisins voient la différence dès le premier mois.' },
          ].map((s) => (
            <div key={s.n} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-display font-bold flex items-center justify-center text-lg">{s.n}</div>
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
          <h2 className="font-display font-bold text-2xl text-text-primary mb-10">Questions fréquentes</h2>
          <div className="space-y-6">
            {[
              { q: 'Je ne suis pas comptable, je vais m\'en sortir ?', a: 'Oui, sans hésitation. Nestor guide chaque étape avec des instructions simples. Nos clients les plus satisfaits ne sont pas comptables. La prise en main prend moins d\'une heure.' },
              { q: 'Combien ça coûte ?', a: 'À partir de 49€/mois pour une copropriété, sans engagement. La démo est gratuite et sans carte de crédit. On vous donne un tarif exact pendant la démo.' },
              { q: 'Mes données sont-elles sécurisées ?', a: 'Hébergement en France, chiffrement AES-256, conformité RGPD complète. Vos données ne sont jamais partagées ni revendues.' },
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
              Prêt à récupérer vos weekends ?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Rejoignez 150+ syndics bénévoles qui ont choisi Nestor pour gérer leur immeuble sereinement.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              {['✓ Démo gratuite 15 min', '✓ Migration incluse', '✓ Sans engagement', '✓ Support humain'].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <LeadForm
            title="Réservez votre démo"
            subtitle="C'est gratuit, c'est rapide, ça change tout."
            ctaText="Je réserve ma démo →"
            accentBg="bg-amber-500 hover:bg-amber-600"
            persona="syndic-benevole-footer"
          />
        </div>
      </section>

      {/* FOOTER */}
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
