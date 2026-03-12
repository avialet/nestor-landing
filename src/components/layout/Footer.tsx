'use client';

import Link from 'next/link';
import { NestorLogoFull } from '@/components/ui/NestorLogo';

const footerLinks = {
  produit: [
    { label: 'Fonctionnalités', href: '/fonctionnalites' },
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'Démo', href: 'https://app.nestor-immo.com' },
    { label: 'Changelog', href: '#' },
  ],
  ressources: [
    { label: 'Blog (bientôt)', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Support', href: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGV', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/mentions-legales' },
    { label: 'RGPD', href: '/mentions-legales' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#090B14]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <NestorLogoFull white size="default" />
            <p className="text-slate-500 text-sm mt-4 leading-relaxed max-w-xs">
              La gestion de copropriété, simplifiée par l&apos;intelligence artificielle.
            </p>
          </div>

          {/* Produit */}
          <div>
            <h4 className="font-display font-semibold text-xs text-slate-400 uppercase tracking-wider mb-4">Produit</h4>
            <ul className="space-y-2.5">
              {footerLinks.produit.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-display font-semibold text-xs text-slate-400 uppercase tracking-wider mb-4">Ressources</h4>
            <ul className="space-y-2.5">
              {footerLinks.ressources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-display font-semibold text-xs text-slate-400 uppercase tracking-wider mb-4">Légal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © 2026 Nestor. Tous droits réservés.
          </p>
          <span className="text-xs text-slate-600">
            Données hébergées en France
          </span>
        </div>
      </div>
    </footer>
  );
}
