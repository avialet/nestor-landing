'use client';

import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

interface SizeOption {
  value: string;
  label: string;
}

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  sizeLabel?: string;
  sizeOptions?: SizeOption[];
  accentBg?: string;
  accentText?: string;
  persona?: string;
  successTitle?: string;
  successText?: string;
}

const defaultSizeOptions: SizeOption[] = [
  { value: '1-20', label: 'Moins de 20 lots' },
  { value: '20-100', label: '20 à 100 lots' },
  { value: '100-500', label: '100 à 500 lots' },
  { value: '500+', label: 'Plus de 500 lots' },
];

export function LeadForm({
  title = 'Réservez votre démo gratuite',
  subtitle = '15 minutes. Votre immeuble. Sans engagement.',
  ctaText = 'Réserver ma démo →',
  sizeLabel = 'Taille de votre copropriété',
  sizeOptions = defaultSizeOptions,
  accentBg = 'bg-primary',
  accentText = 'text-white',
  persona = '',
  successTitle = 'C\'est noté !',
  successText = 'Notre équipe vous contacte dans les 4h ouvrées pour caler votre démo.',
}: LeadFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', size: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Requis';
    if (!form.email.includes('@')) e.email = 'Email invalide';
    if (!form.phone.trim()) e.phone = 'Requis';
    if (!form.size) e.size = 'Requis';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('submitting');

    try {
      // Replace with your form endpoint (Formspree, HubSpot forms, etc.)
      // Example: await fetch('https://formspree.io/f/YOUR_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...form, persona }),
      // });
      await new Promise(r => setTimeout(r, 1200));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-card-hover border border-slate-100 text-center">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 text-green-500" />
        </div>
        <h3 className="font-display font-bold text-xl text-text-primary mb-2">{successTitle}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{successText}</p>
        <div className="mt-6 pt-6 border-t border-slate-100">
          <p className="text-xs text-text-tertiary">En attendant, explorez l'app →</p>
          <a
            href="https://app.nestor-immo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
          >
            app.nestor-immo.com
          </a>
        </div>
      </div>
    );
  }

  const field = (id: keyof typeof form) => ({
    value: form[id],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm(f => ({ ...f, [id]: e.target.value }));
      if (errors[id]) setErrors(er => { const n = { ...er }; delete n[id]; return n; });
    },
  });

  return (
    <div id="demo-form" className="bg-white rounded-2xl p-7 shadow-card-hover border border-slate-100">
      <div className="mb-6">
        <h3 className="font-display font-bold text-xl text-text-primary mb-1">{title}</h3>
        <p className="text-sm text-text-secondary">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="lp-name">
            Prénom et nom
          </label>
          <input
            id="lp-name"
            type="text"
            placeholder="Marie Dupont"
            autoComplete="name"
            {...field('name')}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-all ${
              errors.name ? 'border-danger bg-red-50' : 'border-border-default focus:border-primary focus:ring-2 focus:ring-primary/10'
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-danger">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="lp-email">
            Email professionnel
          </label>
          <input
            id="lp-email"
            type="email"
            placeholder="marie@cabinet-syndic.fr"
            autoComplete="email"
            {...field('email')}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-all ${
              errors.email ? 'border-danger bg-red-50' : 'border-border-default focus:border-primary focus:ring-2 focus:ring-primary/10'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-danger">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="lp-phone">
            Téléphone
          </label>
          <input
            id="lp-phone"
            type="tel"
            placeholder="06 XX XX XX XX"
            autoComplete="tel"
            {...field('phone')}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-all ${
              errors.phone ? 'border-danger bg-red-50' : 'border-border-default focus:border-primary focus:ring-2 focus:ring-primary/10'
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-danger">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="lp-size">
            {sizeLabel}
          </label>
          <select
            id="lp-size"
            value={form.size}
            onChange={(e) => { setForm(f => ({ ...f, size: e.target.value })); if (errors.size) setErrors(er => { const n = { ...er }; delete n.size; return n; }); }}
            className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all appearance-none bg-white ${
              errors.size ? 'border-danger bg-red-50 text-text-primary' : 'border-border-default focus:border-primary focus:ring-2 focus:ring-primary/10 text-text-primary'
            } ${!form.size ? 'text-text-tertiary' : ''}`}
          >
            <option value="" disabled>Sélectionnez...</option>
            {sizeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.size && <p className="mt-1 text-xs text-danger">{errors.size}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full ${accentBg} ${accentText} font-semibold py-3.5 px-6 rounded-lg transition-all text-sm flex items-center justify-center gap-2 mt-2 disabled:opacity-70`}
        >
          {status === 'submitting' ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours…</>
          ) : ctaText}
        </button>

        {status === 'error' && (
          <p className="text-xs text-danger text-center">Une erreur est survenue. Réessayez ou écrivez à contact@nestor-immo.com</p>
        )}

        <p className="text-xs text-text-tertiary text-center pt-1">
          Sans engagement · Données hébergées en France · RGPD
        </p>
      </form>
    </div>
  );
}
