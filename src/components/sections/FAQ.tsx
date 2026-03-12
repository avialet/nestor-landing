'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGSAPReveal } from '@/components/ui/GSAPProvider';
import gsap from 'gsap';

const faqs = [
  {
    q: 'Est-ce que Nestor convient à un syndic bénévole ?',
    a: 'Absolument. Nestor a été conçu pour être simple d\'utilisation, même sans formation. L\'interface est intuitive et vous êtes guidé à chaque étape. La plupart de nos utilisateurs bénévoles prennent en main l\'outil en moins de 5 minutes.',
  },
  {
    q: 'Mes données sont-elles sécurisées ?',
    a: 'Vos données sont chiffrées en AES-256, hébergées en France sur des serveurs certifiés. Nous sommes conformes RGPD et réalisons des audits de sécurité réguliers. Vos données vous appartiennent et sont exportables à tout moment.',
  },
  {
    q: 'Puis-je importer mes données existantes ?',
    a: 'Oui. Nestor propose un import depuis Excel/CSV pour vos copropriétaires, lots, prestataires et écritures comptables. Notre équipe peut vous accompagner gratuitement pour la migration initiale.',
  },
  {
    q: 'Comment fonctionne l\'IA Copilote ?',
    a: 'L\'IA analyse les données de votre copropriété (factures, interventions, AG) et répond à vos questions en langage naturel. Elle ne partage jamais vos données avec d\'autres copropriétés. L\'IA est disponible sur le plan Pro et supérieur.',
  },
  {
    q: 'Que se passe-t-il si je dépasse ma limite de lots ?',
    a: 'Nous vous préviendrons avant d\'atteindre la limite. Vous pourrez facilement passer au plan supérieur sans interruption de service. Aucune donnée n\'est perdue lors du changement de plan.',
  },
  {
    q: 'Y a-t-il un engagement minimum ?',
    a: 'Non, aucun engagement. Vous pouvez annuler votre abonnement à tout moment. En cas d\'annulation, vous conservez l\'accès jusqu\'à la fin de votre période de facturation.',
  },
  {
    q: 'Proposez-vous une formation ?',
    a: 'Le plan Pro inclut une session d\'onboarding de 30 minutes. De plus, des tutoriels vidéo et une documentation complète sont disponibles. Notre support répond en moins de 2h en moyenne.',
  },
  {
    q: 'Nestor est-il conforme au RGPD ?',
    a: 'Oui, totalement. Données hébergées en France, DPO nommé, registre de traitement à jour, droit à l\'oubli et export de données intégrés. Nous pouvons vous fournir notre documentation RGPD sur demande.',
  },
];

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.to(contentRef.current, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.35,
      ease: 'power2.out',
    });
  }, [isOpen]);

  return (
    <div className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
      isOpen ? 'border-primary/15 bg-white shadow-sm' : 'border-slate-200/80 hover:border-slate-300'
    }`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
      >
        <span className="font-display font-semibold text-text-primary pr-4 text-[15px]">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-text-secondary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm text-text-secondary leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const sectionRef = useGSAPReveal({ stagger: 0.08 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={sectionRef} id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Header — left column */}
          <div className="lg:col-span-2">
            <span className="gsap-reveal inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="gsap-reveal text-3xl sm:text-4xl font-display font-bold text-text-primary leading-tight">
              Questions fréquentes
            </h2>
            <p className="gsap-reveal text-text-secondary mt-4 leading-relaxed">
              Tout ce que vous devez savoir pour commencer. Une question non couverte ?{' '}
              <a href="/contact" className="text-primary font-medium hover:text-primary-hover transition-colors">
                Contactez-nous
              </a>
            </p>
          </div>

          {/* FAQ items — right column */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="gsap-reveal">
                <FAQItem
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  toggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
