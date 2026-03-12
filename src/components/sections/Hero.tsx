'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { AppScreenshot } from '@/components/ui/AppScreenshot';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MICRO_STATS = [
  { value: '99.9%', label: 'Disponibilité' },
  { value: '< 3s', label: 'Réponse IA' },
  { value: 'France', label: 'Hébergement' },
  { value: 'RGPD', label: 'Conformité' },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.fromTo(
      [line1Ref.current, line2Ref.current, line3Ref.current],
      { opacity: 0, y: 64, skewY: 1.5 },
      { opacity: 1, y: 0, skewY: 0, duration: 1.1, stagger: 0.11 }
    )
      .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.55')
      .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.45')
      .fromTo(rightRef.current, { opacity: 0, x: 36 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }, '-=1.05')
      .fromTo(screenshotRef.current, { opacity: 0, y: 48 }, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }, '-=0.6');

    const obj = { value: 0 };
    gsap.to(obj, {
      value: 150,
      duration: 2.2,
      delay: 0.9,
      ease: 'power2.out',
      onUpdate: () => {
        if (counterRef.current) counterRef.current.textContent = Math.round(obj.value).toString();
      },
    });

    if (screenshotRef.current) {
      gsap.to(screenshotRef.current, {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#07090E]">
      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.025]">
          {[25, 50, 75].map((p) => (
            <div key={p} className="absolute top-0 bottom-0 border-l border-white" style={{ left: `${p}%` }} />
          ))}
        </div>
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] opacity-[0.18]"
          style={{ background: 'radial-gradient(ellipse at center top, #2563EB 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 lg:pt-48 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">

          {/* ── Left: Headline ── */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-5 h-[2px] bg-primary shrink-0" />
              <span className="text-[11px] font-semibold text-primary tracking-[0.22em] uppercase">
                Logiciel de gestion copropriété
              </span>
            </div>

            <div className="mb-3 overflow-hidden">
              <div
                ref={line1Ref}
                className="font-display font-bold text-white leading-[1.02] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)' }}
              >
                La gestion
              </div>
            </div>
            <div className="mb-3 overflow-hidden">
              <div
                ref={line2Ref}
                className="font-display font-bold text-primary leading-[1.02] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)' }}
              >
                de copropriété
              </div>
            </div>
            <div className="mb-10 overflow-hidden">
              <div
                ref={line3Ref}
                className="font-display font-bold text-white leading-[1.02] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)' }}
              >
                enfin en avance.
              </div>
            </div>

            <p
              ref={subtitleRef}
              className="text-[1.0625rem] text-[#6B7C93] max-w-md leading-relaxed mb-10"
            >
              Nestor centralise interventions, factures, assemblées et documents.
              L&apos;IA anticipe les problèmes avant qu&apos;ils arrivent.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="https://app.nestor-immo.com/register"
                className="group flex items-center gap-2.5 px-7 py-4 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-hover transition-colors duration-200"
              >
                Démarrer gratuitement
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#demo-form"
                className="flex items-center gap-2 px-7 py-4 text-[#6B7C93] text-sm font-medium hover:text-white transition-colors duration-200 border border-[#1C2637] rounded-lg hover:border-[#2A3A55]"
              >
                Voir la démo
              </a>
            </div>
          </div>

          {/* ── Right: Stats panel ── */}
          <div ref={rightRef} className="pt-4 lg:pt-[5.5rem]">
            <div className="mb-3 p-6 border border-[#1A2638] rounded-xl bg-[#0B1120]">
              <div className="text-[3.75rem] font-display font-bold text-white leading-none mb-1 tracking-[-0.04em]">
                <span ref={counterRef}>0</span>
                <span className="text-primary">+</span>
              </div>
              <div className="text-sm text-[#6B7C93]">copropriétés nous font confiance</div>
              <div className="mt-5 pt-5 border-t border-[#1A2638] flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1.5 text-xs text-[#6B7C93]">4.9/5 avis vérifiés</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {MICRO_STATS.map((stat) => (
                <div key={stat.label} className="p-4 border border-[#1A2638] rounded-xl bg-[#0B1120]">
                  <div className="font-display font-bold text-white text-xl mb-0.5 tracking-[-0.02em]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#6B7C93] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot — full width below, fades into bg */}
        <div ref={screenshotRef} className="mt-16 lg:mt-20 relative">
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 z-10"
            style={{ background: 'linear-gradient(to bottom, transparent, #07090E)' }}
          />
          <AppScreenshot module="Dashboard" variant="dashboard" floating={false} />
        </div>
      </div>
    </section>
  );
}
