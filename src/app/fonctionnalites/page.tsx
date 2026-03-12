'use client';

import { LayoutDashboard, Wrench, Receipt, Vote, FolderOpen, Sparkles, MessageCircle, BarChart3, Settings, FileText, Check, ArrowRight } from 'lucide-react';
import { AppScreenshot } from '@/components/ui/AppScreenshot';
import { useGSAPReveal } from '@/components/ui/GSAPProvider';

const modules = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard intelligent',
    subtitle: 'Votre copropriété en un coup d\'œil',
    description: 'Le tableau de bord Nestor vous donne une vision instantanée de l\'état de votre copropriété. Plus besoin de naviguer entre différents outils ou onglets.',
    features: [
      'Synthèse des interventions en cours et à venir',
      'Suivi des factures et impayés en temps réel',
      'Indicateurs clés : budget, charges, taux de recouvrement',
      'Alertes et notifications personnalisables',
      'Widgets configurables selon vos priorités',
      'Vue multi-copropriétés pour les professionnels',
    ],
    variant: 'dashboard' as const,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-white',
  },
  {
    icon: Wrench,
    title: 'Interventions de A à Z',
    subtitle: 'Du signalement à la clôture, tout est tracé',
    description: 'Créez une intervention en 30 secondes. Assignez un prestataire, suivez l\'avancement, validez la facture. Tout le cycle de vie est géré dans Nestor.',
    features: [
      'Création rapide avec catégorisation automatique',
      'Attribution aux prestataires en un clic',
      'Suivi en temps réel avec timeline',
      'Photos avant/après intégrées',
      'Facturation liée automatiquement',
      'Historique complet par bâtiment et par lot',
    ],
    variant: 'interventions' as const,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-bg-app',
  },
  {
    icon: Receipt,
    title: 'Factures & Comptabilité',
    subtitle: 'Une comptabilité claire, conforme et rapide',
    description: 'Le plan comptable copropriété intégré. Saisissez, validez, exportez. Appels de charges, répartition, journal d\'écritures — tout est automatisé.',
    features: [
      'Plan comptable copropriété pré-configuré',
      'Saisie guidée des écritures',
      'Appels de charges et répartition automatique',
      'Journal d\'écritures avec recherche avancée',
      'Export comptable aux formats standards',
      'Rapprochement bancaire simplifié',
    ],
    variant: 'comptabilite' as const,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-white',
  },
  {
    icon: Vote,
    title: 'Assemblées Générales',
    subtitle: 'Des AG préparées en quelques clics',
    description: 'Préparez l\'ordre du jour, envoyez les convocations, gérez les votes en temps réel selon les articles 24, 25 et 26 de la loi. PV généré automatiquement.',
    features: [
      'Générateur d\'ordre du jour avec modèles',
      'Convocations conformes automatiques',
      'Vote en temps réel avec calcul des majorités',
      'Support articles 24, 25 et 26',
      'Émargement numérique',
      'PV d\'assemblée généré automatiquement',
    ],
    variant: 'ag' as const,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-bg-app',
  },
  {
    icon: FolderOpen,
    title: 'Gestion documentaire',
    subtitle: 'Tous vos documents, organisés et accessibles',
    description: 'Upload par glisser-déposer, classement automatique par catégorie, recherche instantanée. Finis les dossiers papier et les emails perdus.',
    features: [
      'Upload drag-and-drop multi-fichiers',
      'Classement automatique par catégorie',
      'Recherche plein texte dans les documents',
      'Versioning et historique des modifications',
      'Accès sécurisé avec permissions par rôle',
      'Partage avec les copropriétaires',
    ],
    variant: 'documents' as const,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-white',
  },
  {
    icon: Sparkles,
    title: 'IA Copilote',
    subtitle: 'Votre assistant intelligent, 24h/24',
    description: 'Posez vos questions en langage naturel et obtenez des réponses instantanées basées sur les données de votre copropriété. L\'IA qui comprend votre métier.',
    features: [
      'Questions en langage naturel',
      'Réponses contextualisées avec vos données',
      'Suggestions proactives et alertes',
      'Analyse de tendances et anomalies',
      'Rédaction assistée de courriers',
      'Résumé automatique des AG',
    ],
    variant: 'copilot' as const,
    color: 'from-blue-500 to-purple-500',
    bgColor: 'bg-bg-app',
    badge: 'IA',
  },
];

const aiModules = [
  {
    icon: MessageCircle,
    title: 'Copilot IA conversationnel',
    description: 'Interrogez Nestor comme vous parleriez à un collaborateur. Il comprend le contexte de votre copropriété et répond avec précision.',
    features: ['Compréhension du langage naturel', 'Réponses sourcées depuis vos données', 'Historique de conversation'],
  },
  {
    icon: BarChart3,
    title: 'Analytiques prédictives',
    description: 'Score de santé, détection d\'anomalies, projections budgétaires. Nestor vous aide à prendre les bonnes décisions au bon moment.',
    features: ['Score de santé copropriété', 'Détection d\'anomalies comptables', 'Projections budgétaires'],
  },
  {
    icon: Settings,
    title: 'Maintenance prédictive',
    description: 'Anticipez les pannes et planifiez les travaux. L\'IA analyse l\'historique et prédit les interventions nécessaires.',
    features: ['Prédiction de pannes', 'Planning de maintenance optimal', 'Réduction de 60% des urgences'],
  },
  {
    icon: FileText,
    title: 'Réception IA de factures',
    description: 'Déposez un PDF, l\'IA fait le reste. Extraction automatique du prestataire, montant, date et catégorie. Validation en un clic.',
    features: ['OCR intelligent sur PDF', 'Pré-remplissage automatique', 'Validation en 10 secondes'],
  },
];

function FeatureSection({ module, index }: { module: typeof modules[0]; index: number }) {
  const ref = useGSAPReveal({ y: 60 });
  const reversed = index % 2 === 1;

  return (
    <section ref={ref} className={`py-16 lg:py-24 ${module.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${reversed ? 'lg:order-2' : ''}`}>
            <div className="gsap-reveal flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center`}>
                <module.icon className="w-5 h-5 text-white" />
              </div>
              {module.badge && (
                <span className="px-2 py-0.5 bg-primary text-white text-xs font-semibold rounded-full">{module.badge}</span>
              )}
            </div>
            <h2 className="gsap-reveal text-3xl sm:text-4xl font-display font-bold text-text-primary leading-tight">
              {module.title}
            </h2>
            <p className="gsap-reveal text-primary font-medium mt-1">{module.subtitle}</p>
            <p className="gsap-reveal text-text-secondary mt-4 leading-relaxed">
              {module.description}
            </p>
            <div className="gsap-reveal space-y-3 mt-6">
              {module.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-sm text-text-secondary">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`gsap-reveal ${reversed ? 'lg:order-1' : ''}`}>
            <AppScreenshot module={module.title} variant={module.variant} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FonctionnalitesPage() {
  const headerRef = useGSAPReveal();
  const aiRef = useGSAPReveal({ stagger: 0.15 });

  return (
    <>
      {/* Hero */}
      <section ref={headerRef} className="bg-hero-gradient pt-32 lg:pt-40 pb-16 lg:pb-20 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gsap-reveal">
            <span className="inline-block text-sm font-semibold text-blue-200 bg-white/10 border border-white/10 px-3 py-1 rounded-full mb-4">
              Fonctionnalités
            </span>
          </div>
          <h1 className="gsap-reveal text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Tout ce dont vous avez besoin, <span className="text-primary">rien de superflu</span>
          </h1>
          <p className="gsap-reveal text-lg text-blue-200/70 mt-4 max-w-2xl mx-auto">
            Six modules essentiels + quatre modules IA pour couvrir 100% de vos besoins de gestion de copropriété.
          </p>
        </div>
      </section>

      {/* Feature sections */}
      {modules.map((module, i) => (
        <FeatureSection key={module.title} module={module} index={i} />
      ))}

      {/* AI Modules */}
      <section ref={aiRef} className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #090B14 0%, #0F1629 50%, #162040 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="gsap-reveal">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                Intelligence artificielle
              </span>
            </div>
            <h2 className="gsap-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              L&apos;IA qui comprend la copropriété
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiModules.map((m) => (
              <div key={m.title} className="gsap-reveal bg-white/5 backdrop-blur-sm border border-white/10 rounded-card p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-300">
                <m.icon className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="font-display font-semibold text-xl text-white mb-2">{m.title}</h3>
                <p className="text-sm text-blue-200/60 leading-relaxed mb-4">{m.description}</p>
                <div className="space-y-2">
                  {m.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-blue-200/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-app text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            Prêt à découvrir Nestor ?
          </h2>
          <p className="text-text-secondary mt-3">14 jours d&apos;essai gratuit. Aucune carte bancaire requise.</p>
          <a
            href="https://app.nestor-immo.com/register"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-button text-lg transition-all group"
          >
            Démarrer mon essai gratuit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </>
  );
}
