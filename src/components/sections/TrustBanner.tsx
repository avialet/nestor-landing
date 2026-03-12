'use client';

import { Shield, Server, Headphones, Lock, Zap, CreditCard } from 'lucide-react';

const trustItems = [
  { icon: Lock, label: 'Chiffrement AES-256' },
  { icon: Server, label: 'Hébergé en France' },
  { icon: Shield, label: 'Conforme RGPD' },
  { icon: Zap, label: 'Disponibilité 99.9%' },
  { icon: Headphones, label: 'Support réactif' },
  { icon: CreditCard, label: 'Sans engagement' },
];

export function TrustBanner() {
  return (
    <section className="relative bg-white border-y border-slate-100 py-5 overflow-hidden">
      <div className="marquee-container flex">
        {[0, 1].map((set) => (
          <div
            key={set}
            className={`flex items-center gap-10 shrink-0 ${
              set === 0 ? 'animate-marquee' : 'animate-marquee2'
            }`}
            style={{ paddingRight: '2.5rem' }}
          >
            <span className="text-sm font-display font-semibold text-text-primary whitespace-nowrap px-4">
              Conçu pour les syndics bénévoles et professionnels
            </span>
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 whitespace-nowrap text-sm text-text-secondary"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
