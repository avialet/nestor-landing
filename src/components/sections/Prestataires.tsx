'use client';

import { Star, FileCheck, Clock, TrendingUp } from 'lucide-react';
import { useGSAPReveal, useCountUp } from '@/components/ui/GSAPProvider';

export function Prestataires() {
  const sectionRef = useGSAPReveal({ stagger: 0.1 });
  const countRef1 = useCountUp(4);
  const countRef2 = useCountUp(96);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="gsap-reveal inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              Prestataires
            </span>
            <h2 className="gsap-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-text-primary leading-tight">
              Vos prestataires, enfin <span className="text-primary">sous contrôle</span>
            </h2>
            <p className="gsap-reveal text-lg text-text-secondary mt-4 leading-relaxed">
              Évaluez, comparez, suivez. Chaque prestataire a sa fiche complète : contrats, évaluations multi-critères, historique d&apos;interventions, performance.
            </p>

            <div className="gsap-reveal grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Star, label: 'Note sur 4 critères', color: 'text-amber-500' },
                { icon: FileCheck, label: 'Contrats avec alertes', color: 'text-primary' },
                { icon: Clock, label: 'Timeline unifiée', color: 'text-slate-600' },
                { icon: TrendingUp, label: 'Taux de réussite', color: 'text-emerald-600' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-text-secondary">
                  <item.icon className={`w-4.5 h-4.5 ${item.color} shrink-0`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="gsap-reveal flex gap-10 mt-10">
              <div>
                <div className="font-display font-bold text-4xl text-text-primary">
                  <span ref={countRef1}>0</span>
                  <span className="text-primary ml-1">critères</span>
                </div>
                <div className="text-sm text-text-secondary mt-1">d&apos;évaluation</div>
              </div>
              <div>
                <div className="font-display font-bold text-4xl text-text-primary">
                  <span ref={countRef2}>0</span>
                  <span className="text-primary">%</span>
                </div>
                <div className="text-sm text-text-secondary mt-1">satisfaction client</div>
              </div>
            </div>
          </div>

          {/* Mockup — Fiche prestataire */}
          <div className="gsap-reveal">
            <div className="bg-white rounded-xl border border-slate-200/80 p-6 max-w-md mx-auto" style={{ boxShadow: '0 4px 16px 0 rgb(0 0 0 / 0.06)' }}>
              {/* Prestataire header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-base">EP</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-text-primary">Europ&apos;Plomberie</div>
                  <div className="text-sm text-text-secondary">Plomberie • Marseille 13001</div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <Star className="w-3.5 h-3.5 text-slate-200" />
                </div>
              </div>

              {/* Ratings */}
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Réactivité', value: 92, color: 'bg-emerald-500' },
                  { label: 'Qualité', value: 88, color: 'bg-primary' },
                  { label: 'Prix', value: 75, color: 'bg-amber-500' },
                  { label: 'Fiabilité', value: 95, color: 'bg-blue-500' },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span className="text-xs text-text-secondary w-16">{r.label}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.value}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-text-primary w-8 text-right">{r.value}%</span>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-semibold text-text-primary mb-3">Dernières interventions</div>
                {[
                  { date: '12 mars', label: 'Fuite bât. B — Résolu', status: 'bg-emerald-500' },
                  { date: '28 fév', label: 'Remplacement vanne — Résolu', status: 'bg-emerald-500' },
                  { date: '15 fév', label: 'Débouchage — En cours', status: 'bg-amber-500' },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-3 py-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${t.status}`} />
                    <span className="text-xs text-text-secondary flex-1">{t.label}</span>
                    <span className="text-[10px] text-text-secondary/60">{t.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
