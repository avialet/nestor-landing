'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NestorLogoFull } from '@/components/ui/NestorLogo';
import gsap from 'gsap';

const navLinks = [
  { label: 'Fonctionnalités', href: '/fonctionnalites' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      gsap.fromTo(
        '.mobile-nav-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.06, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <NestorLogoFull white={!scrolled} size="default" />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? 'text-text-secondary hover:text-text-primary'
                      : 'text-blue-100/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://app.nestor-immo.com/login"
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
                    : 'text-blue-100/80 hover:text-white'
                }`}
              >
                Connexion
              </a>
              <a
                href="https://app.nestor-immo.com/register"
                className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors duration-200 flex items-center gap-2 group"
              >
                Essai gratuit
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative z-10 p-2 rounded-lg transition-colors ${
                scrolled || mobileOpen ? 'text-text-primary' : 'text-white'
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20">
          <div className="px-6 py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-nav-item text-lg font-display font-medium text-text-primary py-3.5 border-b border-slate-100 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3 mobile-nav-item">
              <a
                href="https://app.nestor-immo.com/login"
                className="text-center py-3 px-6 rounded-lg border border-slate-200 text-text-primary font-medium hover:bg-slate-50 transition-colors"
              >
                Connexion
              </a>
              <a
                href="https://app.nestor-immo.com/register"
                className="text-center py-3 px-6 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition-colors"
              >
                Essai gratuit — 14 jours
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
