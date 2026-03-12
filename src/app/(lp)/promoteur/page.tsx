import type { Metadata } from 'next';
import Image from 'next/image';
import { LandingNav } from '@/components/lp/LandingNav';
import { LeadForm } from '@/components/lp/LeadForm';

export const metadata: Metadata = {
  title: 'Promoteurs : livrez vos copropriétés avec Nestor — Nestor',
  description: 'Nestor accompagne les promoteurs immobiliers pour une mise en copropriété sans friction. Onboarding structuré, portail acquéreur, image premium.',
};

const sizeOptions = [
  { value: '1-3', label: '1 à 3 résidences livrées / an' },
  { value: '3-10', label: '3 à 10 résidences livrées / an' },
  { value: '10-30', label: '10 à 30 résidences livrées / an' },
  { value: '30+', label: 'Plus de 30 résidences / an' },
];

const painPoints = [
  { n: '01', title: 'La mise en copropriété, le mauvais souvenir', desc: 'Levées de réserves, premier appel de charges, première AG de mise en gestion — tout se passe en même temps, sans outil structuré. C\'est votre équipe qui absorbe le chaos.' },
  { n: '02', title: 'Des acquéreurs mécontents dès le départ', desc: 'Ils ont acheté du neuf premium. Si la gestion est désorganisée dès la livraison, c\'est votre marque qui prend le coup — pas le syndic.' },
  { n: '03', title: 'Votre réputation sur les forums d\'acquéreurs', desc: 'Un seul immeuble mal géré, c\'est 10 avis négatifs et 20 ventes perdues sur votre prochain programme. Les acheteurs lisent tout.' },
  { n: '04', title: 'Le syndic provisoire livré à lui-même', desc: 'Le premier syndic n\'a pas les outils adaptés à une résidence neuve. Il improvise. Vos acquéreurs le voient.' },
];

const features = [
  { icon: '🏗️', title: 'Onboarding structuré résidence neuve', desc: 'Migration des données depuis la VEFA, configuration du plan comptable, première convocation AG — un process pas à pas pour chaque nouvelle livraison.' },
  { icon: '📱', title: 'Portail acquéreur dès la remise des clés', desc: 'Vos acheteurs accèdent à leur espace copropriétaire le jour J. Charges, documents, interventions — tout y est. Première impression : 5 étoiles.' },
  { icon: '📊', title: 'Tableau de bord promoteur multi-résidences', desc: 'Suivez l\'état de toutes vos résidences livrées en un coup d\'œil. Identifiez les points de friction avant qu\'ils deviennent des litiges.' },
  { icon: '🤝', title: 'Réseau de syndics partenaires', desc: 'Nous travaillons avec un réseau de syndics formés Nestor. Recommandez des partenaires qualifiés à vos acquéreurs.' },
];

export default function Promoteur() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <LandingNav
        ctaText="Parler à un expert Nestor"
        accentClass="bg-violet-700 hover:bg-violet-800"
      />

      {/* HERO — premium dark */}
      <section className="bg-[#0F0A1E] pt-28 pb-24 px-6 md:px-10 relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #7C3AED 0%, transparent 50%), radial-gradient(circle at 70% 30%, #4F46E5 0%, transparent 50%)' }} />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-16 items-start relative">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-900/50 border border-violet-700/50 rounded-md px-3 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold text-violet-300 tracking-wide uppercase">Pour les promoteurs immobiliers</span>
            </div>

            <h1 className="font-display font-bold text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight text-white mb-6">
              Vos copropriétés neuves<br />
              méritent un gestionnaire<br />
              <span className="text-violet-400">à leur hauteur.</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-xl mb-10">
              Les 2 premières années d'une copropriété définissent sa réputation pour 20 ans.
              <strong className="text-white font-medium"> Nestor transforme cette période critique</strong> en avantage concurrentiel pour vos programmes.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 border-t border-slate-800 pt-8">
              {[
                { v: '4.8★', l: 'Note moyenne des résidences\nNestor sur les forums acquéreurs' },
                { v: '-65%', l: 'De réclamations post-livraison\npour nos promoteurs partenaires' },
                { v: '48h', l: 'Pour mettre en ligne\nune nouvelle résidence' },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display font-bold text-3xl text-violet-300 mb-1">{s.v}</p>
                  <p className="text-xs text-slate-500 leading-tight whitespace-pre-line">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:sticky lg:top-24">
            <LeadForm
              title="Échangez avec un expert Nestor"
              subtitle="Démo 30 min · Adapté aux promoteurs"
              ctaText="Demander mon rendez-vous →"
              sizeLabel="Résidences livrées par an"
              sizeOptions={sizeOptions}
              accentBg="bg-violet-700 hover:bg-violet-800"
              persona="promoteur"
              successTitle="Parfait, à très vite !"
              successText="Notre responsable partenariats promoteurs vous contacte dans les 4h ouvrées pour organiser votre rendez-vous sur mesure."
            />
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-3">Ce que vous vivez</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary max-w-2xl leading-tight">
            La mise en copropriété, maillon faible<br />
            de vos livraisons.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((p) => (
            <div key={p.n} className="relative bg-white rounded-xl border border-slate-200 p-8 overflow-hidden">
              <span className="absolute top-4 right-6 font-display font-bold text-6xl text-slate-50 leading-none select-none">{p.n}</span>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-3 relative">{p.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed relative">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-violet-50 border-y border-violet-100 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-violet-600 mb-3">La solution Nestor Promoteurs</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary max-w-2xl leading-tight">
              De la livraison au premier AG.<br />
              Sans accroc.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl border border-violet-100 p-7 shadow-card hover:shadow-card-hover transition-shadow">
                <span className="text-2xl mb-4 block">{f.icon}</span>
                <h3 className="font-display font-semibold text-lg text-text-primary mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOT */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-violet-600 mb-3">Interface acquéreur</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4 leading-tight">
              Une première impression<br />
              à la hauteur de<br />
              vos programmes.
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Dès la remise des clés, vos acquéreurs accèdent à un espace copropriétaire moderne, clair, et rassurant. L'interface Nestor reflète le standing de vos résidences.
            </p>
            <div className="flex items-center gap-3 bg-violet-50 rounded-lg p-4 border border-violet-100">
              <div className="text-2xl">💬</div>
              <p className="text-sm text-text-secondary italic">"Le premier truc qu'on a aimé quand on a emménagé, c'est l'appli de gestion. Ça change tout." — Acheteur, résidence Les Quinconces, Bordeaux</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-card-hover">
            <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-slate-100">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-text-tertiary font-mono ml-2">app.nestor-immo.com/dashboard</span>
            </div>
            <Image
              src="/screenshots/dashboard.png"
              alt="Interface Nestor — résidence neuve"
              width={1440}
              height={900}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-slate-900 py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-5xl text-violet-700 font-serif leading-none mb-4">"</p>
          <blockquote className="font-display font-medium text-xl md:text-2xl text-white leading-relaxed mb-8">
            On propose Nestor systématiquement à nos syndics partenaires depuis 1 an.
            Nos acheteurs le mentionnent dans leurs avis 5 étoiles — et ça, ça vaut cher.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-violet-700 flex items-center justify-center text-white font-bold text-sm">LB</div>
            <div className="text-left">
              <p className="font-semibold text-white text-sm">Laurent B.</p>
              <p className="text-slate-400 text-xs">Directeur Commercial · Groupe Meridian Développement · 12 programmes livrés</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-3">Partenariat promoteur</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">Du rendez-vous à votre première résidence en ligne</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: '1', title: 'Rendez-vous promoteur', desc: '30 minutes avec notre responsable partenariats. On adapte Nestor à votre process de livraison spécifique.' },
            { n: '2', title: 'Intégration à votre workflow', desc: 'On configure l\'onboarding Nestor pour chaque type de résidence. Votre équipe reçoit un kit de démarrage clé en main.' },
            { n: '3', title: 'Livraison premium', desc: 'À la remise des clés, vos acquéreurs ont accès à leur espace. Votre syndic partenaire est opérationnel dès J+1.' },
          ].map((s) => (
            <div key={s.n} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-700 text-white font-display font-bold flex items-center justify-center text-lg">{s.n}</div>
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
          <h2 className="font-display font-bold text-2xl text-text-primary mb-10">Questions promoteurs</h2>
          <div className="space-y-6">
            {[
              { q: 'Peut-on imposer Nestor contractuellement au syndic dans l\'acte de VEFA ?', a: 'Nous vous fournissons un addendum type à intégrer dans votre contrat syndic. Notre équipe juridique peut vous accompagner sur ce point.' },
              { q: 'Intégration avec notre CRM ou ERP promoteur ?', a: 'API disponible pour l\'intégration avec vos outils de gestion de programme. Nous l\'évaluons ensemble pendant le rendez-vous.' },
              { q: 'Y a-t-il un tarif partenaire promoteur ?', a: 'Oui. Les promoteurs partenaires bénéficient de conditions préférentielles pour leurs syndics partenaires et d\'un accompagnement dédié à chaque livraison.' },
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
      <section className="bg-[#0F0A1E] py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
              Transformez vos livraisons<br />
              en argument commercial.
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Rejoignez les promoteurs qui utilisent Nestor pour offrir une expérience post-achat à la hauteur de leurs programmes.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              {['✓ Rendez-vous 30 min', '✓ Kit promoteur inclus', '✓ API disponible', '✓ Tarif partenaire'].map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
          <LeadForm
            title="Parler à un expert"
            subtitle="30 min · Partenariat promoteur · Sur mesure"
            ctaText="Je demande mon rendez-vous →"
            sizeLabel="Résidences livrées par an"
            sizeOptions={sizeOptions}
            accentBg="bg-violet-700 hover:bg-violet-800"
            persona="promoteur-footer"
          />
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-[#0F0A1E] py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© 2025 Nestor · Logiciel de gestion de copropriété</p>
          <div className="flex gap-6">
            <a href="/mentions-legales" className="hover:text-slate-400 transition-colors">Mentions légales</a>
            <a href="/contact" className="hover:text-slate-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
