'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { AppScreenshot } from '@/components/ui/AppScreenshot';
import gsap from 'gsap';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(subtitleRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(
        screenshotRef.current,
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: 'quart.out' },
        '-=0.3'
      )
      .fromTo(socialRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2');
  }, []);

  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 lg:pt-44 pb-24">
        {/* Badge — simple, no glassmorphism */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary-100 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            Nouveau — IA Copilote
          </span>
        </div>

        {/* Title — left-aligned, no gradient text */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-display font-bold text-white leading-[1.08] max-w-4xl"
        >
          La gestion de copropriété enfin{' '}
          <span className="text-primary-200">simple, intelligente</span>{' '}
          et sereine.
        </h1>

        {/* Subtitle — left-aligned */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mt-6 leading-relaxed"
        >
          Nestor centralise vos interventions, factures, assemblées et documents
          dans une interface unique. Avec l&apos;IA en copilote, vous anticipez
          au lieu de subir.
        </p>

        {/* CTAs — no gradient, solid buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4 mt-10">
          <a
            href="https://app.nestor-immo.com/register"
            className="group px-7 py-3.5 bg-primary text-white font-semibold rounded-lg text-base hover:bg-primary-hover transition-colors duration-200 flex items-center gap-2"
          >
            Essayer gratuitement
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="https://app.nestor-immo.com"
            className="px-7 py-3.5 border border-slate-600 text-slate-300 font-medium rounded-lg text-base hover:border-slate-400 hover:text-white transition-colors duration-200"
          >
            Voir la démo
          </a>
        </div>

        {/* Screenshot — no glow wrapper */}
        <div ref={screenshotRef} className="mt-16 lg:mt-20 max-w-5xl">
          <AppScreenshot module="Dashboard" variant="dashboard" floating={false} />
        </div>

        {/* Social proof */}
        <div ref={socialRef} className="mt-10 flex flex-col sm:flex-row items-start gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-1.5">
              {['#2563EB', '#475569', '#16A34A', '#D97706'].map((c, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-[#111B2E] flex items-center justify-center text-[8px] font-semibold text-white"
                  style={{ backgroundColor: c }}
                >
                  {['SM', 'JP', 'ML', 'AD'][i]}
                </div>
              ))}
            </div>
            <span>Adopté par <strong className="text-slate-300">150+</strong> copropriétés</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-700" />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1">4.9/5 — avis vérifiés</span>
          </div>
        </div>
      </div>
    </section>
  );
}
