'use client';

import { NestorLogoFull } from '@/components/ui/NestorLogo';

interface LandingNavProps {
  ctaText?: string;
  ctaHref?: string;
  accentClass?: string;
}

export function LandingNav({
  ctaText = 'Réserver ma démo',
  ctaHref = '#demo-form',
  accentClass = 'bg-primary hover:bg-primary-hover',
}: LandingNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <NestorLogoFull size="sm" />
        <a
          href={ctaHref}
          className={`${accentClass} text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors`}
        >
          {ctaText}
        </a>
      </div>
    </nav>
  );
}
