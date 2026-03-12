'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { AppScreenshot } from '@/components/ui/AppScreenshot';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Variant = 'dashboard' | 'interventions' | 'comptabilite' | 'ag' | 'documents' | 'copilot';

const features: {
  num: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  variant: Variant;
  accent: string;
  flip?: boolean;
}[] = [
  {
    num: '01',
    tag: 'Vue d\'ensemble',
    title: 'Tout votre immeuble en un seul regard.',
    description: 'Le dashboard centralise interventions en cours, factures à valider, impayés et tendances. Plus besoin de naviguer entre dix outils.',
    bullets: ['Alertes en temps réel', 'Indicateurs clés personnalisables', 'Historique complet'],
    variant: 'dashboard',
    accent: '#2563EB',
  },
  {
    num: '02',
    tag: 'Interventions',
    title: 'Du signalement à la clôture, sans rien perdre.',
    description: 'Créez une intervention, assignez un prestataire, suivez l\'avancement, déclenchez la facturation. Tout dans un seul fil.',
    bullets: ['Suivi prestataire intégré', 'Notification automatique', 'Facturation en un clic'],
    variant: 'interventions',
    accent: '#16A34A',
    flip: true,
  },
  {
    num: '03',
    tag: 'Comptabilité',
    title: 'Vos comptes, enfin lisibles.',
    description: 'Plan comptable copropriété, appels de charges, journal d\'écritures, rapprochements bancaires. Conforme, précis, auditable.',
    bullets: ['Plan comptable normé', 'Appels de charges automatisés', 'Export comptable'],
    variant: 'comptabilite',
    accent: '#D97706',
  },
  {
    num: '04',
    tag: 'Assemblées',
    title: 'Des AG préparées, tenues et clôturées en 48h.',
    description: 'Convocations, résolutions, votes en temps réel, calcul automatique des majorités, PV généré instantanément.',
    bullets: ['Votes en ligne ou présentiel', 'Majorités calculées automatiquement', 'PV en un clic'],
    variant: 'ag',
    accent: '#7C3AED',
    flip: true,
  },
];

function FeatureRow({
  feature,
  index,
}: {
  feature: typeof features[0];
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;
    const fromX = feature.flip ? 40 : -40;
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: fromX * -1 },
      {
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: rowRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: fromX },
      {
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: rowRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [feature.flip]);

  const textCol = (
    <div ref={textRef} className="flex flex-col justify-center py-8 lg:py-0">
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-[11px] font-bold tracking-[0.2em] uppercase"
          style={{ color: feature.accent }}
        >
          {feature.tag}
        </span>
        <span className="text-[#CBD5E1] text-xs">—</span>
        <span className="text-[11px] font-semibold text-[#94A3B8] tracking-wider">{feature.num}</span>
      </div>
      <h3
        className="font-display font-bold text-[#0F172A] leading-[1.1] tracking-[-0.025em] mb-5"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
      >
        {feature.title}
      </h3>
      <p className="text-[#64748B] text-base leading-relaxed mb-7 max-w-sm">
        {feature.description}
      </p>
      <ul className="space-y-2.5">
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-center gap-3 text-sm text-[#334155]">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: feature.accent }}
            />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );

  const imageCol = (
    <div ref={imageRef} className="relative">
      <AppScreenshot module={feature.variant} variant={feature.variant} />
    </div>
  );

  return (
    <div
      ref={rowRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-20 ${
        index < features.length - 1 ? 'border-b border-[#E2E8F0]' : ''
      }`}
    >
      {feature.flip ? (
        <>
          <div className="order-2 lg:order-1">{imageCol}</div>
          <div className="order-1 lg:order-2">{textCol}</div>
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </div>
  );
}

export function Solution() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(headerRef.current, { opacity: 0, y: 36 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: headerRef.current, start: 'top 88%', toggleActions: 'play none none none' },
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div ref={headerRef} className="mb-4 lg:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-[2px] bg-primary shrink-0" />
            <span className="text-[11px] font-semibold text-primary tracking-[0.22em] uppercase">
              La solution
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end">
            <h2
              className="font-display font-bold text-[#0F172A] leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Un seul outil.<br />Pour tout gérer.
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed max-w-sm">
              Six modules pensés pour couvrir 100% de vos besoins. Sans intégration, sans double saisie, sans friction.
            </p>
          </div>
        </div>

        {/* Alternating feature rows */}
        {features.map((feature, i) => (
          <FeatureRow key={feature.num} feature={feature} index={i} />
        ))}

        {/* Bottom CTA */}
        <div className="pt-10 flex items-center justify-between border-t border-[#E2E8F0]">
          <p className="text-sm text-[#94A3B8]">+ Documents, Prestataires, Sinistres…</p>
          <a
            href="/fonctionnalites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
          >
            Toutes les fonctionnalités
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
