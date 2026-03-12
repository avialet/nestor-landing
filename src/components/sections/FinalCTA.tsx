'use client';

import { ArrowRight } from 'lucide-react';
import { useGSAPReveal } from '@/components/ui/GSAPProvider';

export function FinalCTA() {
  const sectionRef = useGSAPReveal();

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0C1220]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="gsap-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-white leading-tight">
            Prêt à simplifier votre gestion de copropriété ?
          </h2>
          <p className="gsap-reveal text-lg text-slate-400 mt-4">
            Essai gratuit 14 jours. Aucune carte bancaire requise.
          </p>

          <div className="gsap-reveal flex flex-col sm:flex-row items-start gap-4 mt-10">
            <a
              href="https://app.nestor-immo.com/register"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0C1220] font-semibold rounded-lg text-base hover:bg-slate-100 transition-colors duration-200"
            >
              Démarrer mon essai gratuit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="/contact"
              className="px-7 py-3.5 border border-slate-600 text-slate-300 font-medium rounded-lg text-base hover:border-slate-400 hover:text-white transition-colors duration-200"
            >
              Demander une démo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
