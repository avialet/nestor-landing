'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

type AppScreenshotProps = {
  module: string;
  variant?: 'dashboard' | 'interventions' | 'comptabilite' | 'ag' | 'documents' | 'copilot' | 'prestataires';
  className?: string;
  floating?: boolean;
};

const screenshotMap: Record<string, string> = {
  dashboard: '/screenshots/dashboard.png',
  interventions: '/screenshots/interventions.png',
  comptabilite: '/screenshots/comptabilite.png',
  ag: '/screenshots/assemblees.png',
};

function MockSidebar() {
  const items = [
    { label: 'Dashboard', active: true },
    { label: 'Interventions', active: false },
    { label: 'Factures', active: false },
    { label: 'Copropriétés', active: false },
    { label: 'Documents', active: false },
    { label: 'AG', active: false },
  ];
  return (
    <div className="w-[60px] md:w-[180px] bg-[#090B14] flex flex-col py-4 shrink-0">
      {/* Logo area */}
      <div className="px-3 md:px-4 mb-6 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-white text-xs font-bold">N</span>
        </div>
        <span className="hidden md:block text-white text-sm font-display font-semibold">Nestor</span>
      </div>
      {/* Nav items */}
      <div className="flex flex-col gap-1 px-2">
        {items.map((item) => (
          <div
            key={item.label}
            className={`relative flex items-center gap-2.5 px-2 md:px-3 py-2 rounded-lg text-xs transition-colors ${
              item.active
                ? 'bg-[#1C2138] text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {item.active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-primary rounded-r-full" />
            )}
            <div className={`w-4 h-4 rounded ${item.active ? 'bg-primary/30' : 'bg-slate-700'}`} />
            <span className="hidden md:block">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockDashboard() {
  return (
    <div className="flex-1 p-3 md:p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="h-5 w-40 bg-slate-200 rounded" />
          <div className="h-3 w-24 bg-slate-100 rounded mt-1.5" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-20 bg-primary/10 rounded-button border border-primary/20" />
          <div className="h-8 w-8 bg-primary rounded-button" />
        </div>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { color: 'bg-primary', label: '12', sub: 'En cours' },
          { color: 'bg-success', label: '89', sub: 'Résolu' },
          { color: 'bg-warning', label: '3', sub: 'En attente' },
          { color: 'bg-danger', label: '2', sub: 'Urgent' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-card p-3 border border-slate-100 shadow-sm">
            <div className={`w-8 h-1 ${stat.color} rounded-full mb-2 opacity-60`} />
            <div className="font-display font-bold text-lg text-slate-800">{stat.label}</div>
            <div className="text-[10px] text-slate-400">{stat.sub}</div>
          </div>
        ))}
      </div>
      {/* Chart area */}
      <div className="bg-white rounded-card p-4 border border-slate-100 shadow-sm">
        <div className="h-3 w-28 bg-slate-200 rounded mb-3" />
        <div className="flex items-end gap-2 h-24">
          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: i === 11 ? '#2563EB' : i >= 9 ? '#3B82F6' : '#DBEAFE',
              }}
            />
          ))}
        </div>
      </div>
      {/* Recent items */}
      <div className="bg-white rounded-card p-4 border border-slate-100 shadow-sm">
        <div className="h-3 w-36 bg-slate-200 rounded mb-3" />
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-warning' : 'bg-success'}`} />
            <div className="flex-1">
              <div className="h-2.5 w-3/4 bg-slate-100 rounded" />
            </div>
            <div className="h-5 w-14 bg-slate-50 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MockInterventions() {
  return (
    <div className="flex-1 p-3 md:p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-5 w-32 bg-slate-200 rounded" />
        <div className="h-8 w-32 bg-primary rounded-button flex items-center justify-center">
          <span className="text-white text-[10px]">+ Intervention</span>
        </div>
      </div>
      <div className="flex gap-2 mb-2">
        {['Toutes', 'En cours', 'Planifié', 'Terminé'].map((tab, i) => (
          <div key={tab} className={`h-7 px-3 rounded-full text-[10px] flex items-center ${i === 0 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
            {tab}
          </div>
        ))}
      </div>
      {[
        { status: 'bg-primary', title: 'Fuite toiture bât. A', priority: 'Urgent' },
        { status: 'bg-warning', title: 'Réparation ascenseur', priority: 'Normal' },
        { status: 'bg-success', title: 'Entretien espaces verts', priority: 'Bas' },
        { status: 'bg-primary', title: 'Remplacement interphone', priority: 'Normal' },
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-card p-3 border border-slate-100 shadow-sm flex items-center gap-3">
          <div className={`w-2.5 h-10 ${item.status} rounded-full opacity-60`} />
          <div className="flex-1">
            <div className="text-xs font-medium text-slate-800">{item.title}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Assigné • {item.priority}</div>
          </div>
          <div className="flex -space-x-1">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MockComptabilite() {
  return (
    <div className="flex-1 p-3 md:p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-5 w-28 bg-slate-200 rounded" />
        <div className="flex gap-2">
          <div className="h-7 px-3 bg-slate-100 rounded-button text-[10px] flex items-center text-slate-500">Export</div>
          <div className="h-7 px-3 bg-primary rounded-button text-[10px] flex items-center text-white">+ Écriture</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Recettes', value: '45 230 €', color: 'text-success' },
          { label: 'Dépenses', value: '38 100 €', color: 'text-danger' },
          { label: 'Solde', value: '7 130 €', color: 'text-primary' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-card p-3 border border-slate-100 shadow-sm text-center">
            <div className="text-[10px] text-slate-400">{s.label}</div>
            <div className={`font-display font-bold text-sm ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-card border border-slate-100 shadow-sm overflow-hidden">
        <div className="grid grid-cols-5 gap-2 px-3 py-2 bg-slate-50 text-[9px] text-slate-400 font-medium">
          <div>Date</div><div>Libellé</div><div>Compte</div><div>Débit</div><div>Crédit</div>
        </div>
        {[
          { date: '12/03', label: 'EDF Électricité', compte: '601', debit: '1 250 €', credit: '' },
          { date: '10/03', label: 'Appel charges T1', compte: '701', debit: '', credit: '4 500 €' },
          { date: '08/03', label: 'Gardiennage Mars', compte: '615', debit: '890 €', credit: '' },
          { date: '05/03', label: 'Assurance MRH', compte: '616', debit: '320 €', credit: '' },
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-5 gap-2 px-3 py-2 text-[10px] border-t border-slate-50">
            <div className="text-slate-400">{row.date}</div>
            <div className="text-slate-700 font-medium">{row.label}</div>
            <div className="text-slate-400">{row.compte}</div>
            <div className="text-danger">{row.debit}</div>
            <div className="text-success">{row.credit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockCopilot() {
  return (
    <div className="flex-1 p-3 md:p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
          <span className="text-white text-[8px]">✦</span>
        </div>
        <div className="h-4 w-24 bg-slate-200 rounded" />
        <div className="ml-auto h-5 px-2 bg-purple-50 rounded-full text-[9px] text-purple-600 flex items-center">IA</div>
      </div>
      <div className="flex-1 space-y-3 overflow-hidden">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-primary text-white text-[11px] px-3 py-2 rounded-xl rounded-tr-md max-w-[75%]">
            Quels sont les impayés de la résidence Les Oliviers ?
          </div>
        </div>
        {/* AI response */}
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 shrink-0 flex items-center justify-center mt-0.5">
            <span className="text-white text-[7px]">✦</span>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl rounded-tl-md p-3 text-[11px] text-slate-700 max-w-[80%] shadow-sm">
            <p className="mb-2">Voici les impayés pour la résidence <span className="font-semibold text-primary">Les Oliviers</span> :</p>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center bg-red-50 px-2 py-1 rounded">
                <span className="text-slate-600">M. Dupont — Lot 12</span>
                <span className="text-danger font-semibold">1 250 €</span>
              </div>
              <div className="flex justify-between items-center bg-red-50 px-2 py-1 rounded">
                <span className="text-slate-600">Mme Martin — Lot 8</span>
                <span className="text-danger font-semibold">890 €</span>
              </div>
            </div>
            <p className="mt-2 text-slate-500">Total : <span className="font-semibold text-danger">2 140 €</span> sur 2 copropriétaires.</p>
          </div>
        </div>
      </div>
      {/* Input */}
      <div className="mt-3 flex gap-2">
        <div className="flex-1 h-9 bg-white border border-slate-200 rounded-lg px-3 flex items-center text-[10px] text-slate-400">
          Posez une question à Nestor IA...
        </div>
        <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white text-xs">→</span>
        </div>
      </div>
    </div>
  );
}

function MockGeneric({ label }: { label: string }) {
  return (
    <div className="flex-1 p-3 md:p-5 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <div className="w-5 h-5 rounded bg-primary/30" />
        </div>
        <div className="text-sm font-display font-semibold text-slate-700">{label}</div>
        <div className="text-[10px] text-slate-400 mt-1">Module Nestor</div>
      </div>
    </div>
  );
}

const variantMap: Record<string, React.FC> = {
  dashboard: MockDashboard,
  interventions: MockInterventions,
  comptabilite: MockComptabilite,
  copilot: MockCopilot,
};

export function AppScreenshot({ module, variant = 'dashboard', className = '', floating = false }: AppScreenshotProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floating && containerRef.current) {
      gsap.to(containerRef.current, {
        y: -15,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, [floating]);

  const screenshotSrc = screenshotMap[variant];
  const Content = variantMap[variant] || (() => <MockGeneric label={module} />);

  return (
    <div ref={containerRef} className={`${className}`}>
      <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#F8FAFC]">
        {/* Browser chrome */}
        <div className="bg-[#f1f3f5] px-4 py-2.5 flex items-center gap-3 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-md px-4 py-1 text-[11px] text-slate-400 flex items-center gap-2 border border-slate-200 max-w-xs w-full justify-center">
              <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              app.nestor-immo.com
            </div>
          </div>
        </div>
        {/* App content */}
        {screenshotSrc ? (
          <div className="relative w-full aspect-[1440/900]">
            <Image
              src={screenshotSrc}
              alt={`Nestor — ${module}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              priority={variant === 'dashboard'}
            />
          </div>
        ) : (
          <div className="flex h-[280px] md:h-[380px] overflow-hidden">
            <MockSidebar />
            <Content />
          </div>
        )}
      </div>
    </div>
  );
}
