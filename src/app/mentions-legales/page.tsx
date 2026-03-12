'use client';

import { useGSAPReveal } from '@/components/ui/GSAPProvider';

export default function MentionsLegalesPage() {
  const headerRef = useGSAPReveal();
  const contentRef = useGSAPReveal({ stagger: 0.05 });

  return (
    <>
      <section ref={headerRef} className="bg-hero-gradient pt-32 lg:pt-40 pb-16 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="gsap-reveal text-4xl sm:text-5xl font-display font-bold text-white">
            Mentions légales
          </h1>
        </div>
      </section>

      <section ref={contentRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="gsap-reveal space-y-10">
            <div>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-4">1. Éditeur du site</h2>
              <p className="text-text-secondary leading-relaxed">
                Le site www.nestor-immo.com est édité par la société Nestor SAS, au capital de 10 000 euros, immatriculée au Registre du Commerce et des Sociétés de Marseille, dont le siège social est situé à Marseille, France.
              </p>
              <ul className="text-text-secondary space-y-1 mt-3">
                <li>Directeur de la publication : [Nom du dirigeant]</li>
                <li>Email : contact@nestor-immo.com</li>
                <li>Téléphone : 04 91 00 00 00</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-4">2. Hébergement</h2>
              <p className="text-text-secondary leading-relaxed">
                Le site et l&apos;application sont hébergés en France par des prestataires certifiés, garantissant la conformité avec la réglementation européenne sur la protection des données.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-4">3. Propriété intellectuelle</h2>
              <p className="text-text-secondary leading-relaxed">
                L&apos;ensemble du contenu du site (textes, images, vidéos, logos, icônes, logiciels) est protégé par le droit d&apos;auteur et le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-4">4. Protection des données personnelles (RGPD)</h2>
              <p className="text-text-secondary leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données personnelles.
              </p>
              <ul className="text-text-secondary space-y-1 mt-3">
                <li>Responsable du traitement : Nestor SAS</li>
                <li>Finalité : Gestion des demandes de contact, fourniture du service Nestor</li>
                <li>Base légale : Exécution du contrat, consentement, intérêt légitime</li>
                <li>Durée de conservation : Les données sont conservées pendant la durée du contrat et 3 ans après la fin de la relation commerciale</li>
                <li>DPO : dpo@nestor-immo.com</li>
              </ul>
              <p className="text-text-secondary mt-3">
                Pour exercer vos droits, contactez-nous à dpo@nestor-immo.com ou par courrier à l&apos;adresse du siège social.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-4">5. Cookies</h2>
              <p className="text-text-secondary leading-relaxed">
                Le site utilise des cookies strictement nécessaires au fonctionnement du service. Des cookies d&apos;analyse d&apos;audience peuvent être déposés avec votre consentement. Vous pouvez gérer vos préférences à tout moment via le bandeau cookies ou les paramètres de votre navigateur.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-4">6. Conditions générales de vente</h2>
              <p className="text-text-secondary leading-relaxed">
                Les conditions générales de vente régissant l&apos;utilisation du service Nestor sont disponibles lors de la souscription à un abonnement. Elles définissent les droits et obligations des parties, les modalités d&apos;abonnement, de facturation et de résiliation.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-4">7. Limitation de responsabilité</h2>
              <p className="text-text-secondary leading-relaxed">
                Nestor SAS s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur le site. Toutefois, elle ne saurait être tenue responsable d&apos;omissions, d&apos;inexactitudes ou de défauts de mise à jour. L&apos;utilisation du site et de l&apos;application se fait sous la responsabilité de l&apos;utilisateur.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-4">8. Droit applicable</h2>
              <p className="text-text-secondary leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux de Marseille seront seuls compétents.
              </p>
            </div>

            <div className="border-t border-border-default pt-6">
              <p className="text-sm text-text-secondary">
                Dernière mise à jour : mars 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
