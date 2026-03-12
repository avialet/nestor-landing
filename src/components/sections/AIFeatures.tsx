'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const aiFeatures = [
  {
    tag: 'Copilot',
    stat: '3s',
    title: 'Posez vos questions en langage naturel',
    description: '« Quels sont les impayés de M. Dupont ? » « Résume la dernière AG. » Réponses instantanées, sans chercher dans vos fichiers.',
  },
  {
    tag: 'Analytiques',
    stat: '98%',
    title: 'Score de santé de votre copropriété',
    description: 'Détection d\'anomalies, tendances de dépenses, alertes préventives. Nestor voit les problèmes avant qu\'ils coûtent cher.',
  },
  {
    tag: 'Maintenance',
    stat: '−60%',
    title: 'Planifiez avant que ça casse',
    description: 'Ascenseur, chaudière, toiture — Nestor anticipe les pannes et réduit les interventions urgentes de 60%.',
  },
  {
    tag: 'Factures',
    stat: '10s',
    title: 'Une facture PDF traitée en 10 secondes',
    description: 'Déposez le document. L\'IA identifie le prestataire, extrait le montant, pré-remplit la fiche. Vous validez en un clic.',
  },
];

export function AIFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = sectionRef.current?.querySelector('.ai-header');
    if (header) {
      gsap.fromTo(header, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
      });
    }

    const cards = sectionRef.current?.querySelectorAll('.ai-card');
    cards?.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.7, delay: i * 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-[#07090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="ai-header mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[2px] bg-primary shrink-0" />
            <span className="text-[11px] font-semibold text-primary tracking-[0.22em] uppercase">
              Intelligence artificielle
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end">
            <h2
              className="font-display font-bold text-white leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              L&apos;IA qui travaille<br />pendant que vous dormez.
            </h2>
            <p className="text-[#6B7C93] text-base leading-relaxed max-w-sm">
              Quatre modules qui transforment des heures de travail en quelques secondes. Sans configuration, sans formation.
            </p>
          </div>
        </div>

        {/* Feature grid — 2×2 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A2638]">
          {aiFeatures.map((f) => (
            <div key={f.tag} className="ai-card bg-[#07090E] p-8 lg:p-10 group hover:bg-[#0B1120] transition-colors duration-300">
              {/* Tag + Stat */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-[11px] font-semibold text-[#3B5170] tracking-[0.2em] uppercase">
                  {f.tag}
                </span>
                <span
                  className="font-display font-bold text-primary leading-none tracking-[-0.04em]"
                  style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
                >
                  {f.stat}
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#1A2638] mb-8" />

              {/* Content */}
              <h3 className="font-display font-semibold text-white text-[1.125rem] leading-snug mb-3">
                {f.title}
              </h3>
              <p className="text-[#6B7C93] text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
