'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useGSAPReveal } from '@/components/ui/GSAPProvider';

export default function ContactPage() {
  const headerRef = useGSAPReveal();
  const formRef = useGSAPReveal({ stagger: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section ref={headerRef} className="bg-hero-gradient pt-32 lg:pt-40 pb-16 lg:pb-20 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Contactez-nous
          </h1>
          <p className="gsap-reveal text-lg text-blue-200/70 mt-4 max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe vous répond sous 24h.
          </p>
        </div>
      </section>

      <section ref={formRef} className="py-16 lg:py-24 bg-bg-app">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 gsap-reveal">
              {submitted ? (
                <div className="bg-white rounded-card shadow-card border border-border-default p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-success" />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-text-primary">Message envoyé !</h2>
                  <p className="text-text-secondary mt-2">Nous vous répondrons dans les 24 heures ouvrées.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-card shadow-card border border-border-default p-8">
                  <h2 className="font-display font-bold text-2xl text-text-primary mb-6">Envoyez-nous un message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Nom complet *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jean Dupont"
                        className="w-full px-4 py-3 rounded-input border border-border-default text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="jean@exemple.fr"
                        className="w-full px-4 py-3 rounded-input border border-border-default text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Téléphone</label>
                      <input
                        type="tel"
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-3 rounded-input border border-border-default text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Nombre de copropriétés</label>
                      <select className="w-full px-4 py-3 rounded-input border border-border-default text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-text-secondary">
                        <option>1 copropriété</option>
                        <option>2 à 5 copropriétés</option>
                        <option>6 à 10 copropriétés</option>
                        <option>11 à 50 copropriétés</option>
                        <option>Plus de 50 copropriétés</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Décrivez votre besoin..."
                      className="w-full px-4 py-3 rounded-input border border-border-default text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-primary hover:bg-primary-hover text-white font-semibold rounded-button transition-all group"
                  >
                    Envoyer le message
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="gsap-reveal bg-white rounded-card shadow-card border border-border-default p-6">
                <h3 className="font-display font-semibold text-lg text-text-primary mb-4">Coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary">Email</div>
                      <a href="mailto:contact@nestor-immo.com" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
                        contact@nestor-immo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary">Téléphone</div>
                      <a href="tel:+33491000000" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
                        04 91 00 00 00
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary">Adresse</div>
                      <div className="text-sm font-medium text-text-primary">Marseille, France</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gsap-reveal bg-gradient-to-br from-primary to-primary-hover rounded-card p-6 text-white">
                <Calendar className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-display font-semibold text-lg">Réservez une démo</h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed">
                  30 minutes pour découvrir Nestor en direct. Notre équipe vous présente les fonctionnalités adaptées à votre besoin.
                </p>
                <a
                  href="mailto:demo@nestor-immo.com?subject=Demande de démonstration"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-white text-primary font-semibold text-sm rounded-button hover:shadow-lg transition-all group"
                >
                  Réserver un créneau
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Trust */}
              <div className="gsap-reveal bg-white rounded-card shadow-card border border-border-default p-6">
                <div className="grid grid-cols-2 gap-3 text-xs text-text-secondary">
                  {[
                    '🔒 Données chiffrées',
                    '🇫🇷 Hébergé en France',
                    '📋 Conforme RGPD',
                    '⚡ Réponse sous 24h',
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
