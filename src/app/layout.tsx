import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nestor — Logiciel de gestion de copropriété intelligent',
  description: 'Simplifiez la gestion de votre copropriété avec Nestor. Interventions, factures, AG, documents, comptabilité et IA copilote. Essai gratuit.',
  keywords: 'gestion copropriété, syndic, logiciel syndic, copropriété, assemblée générale, comptabilité copropriété, IA copropriété',
  openGraph: {
    title: 'Nestor — Logiciel de gestion de copropriété intelligent',
    description: 'Simplifiez la gestion de votre copropriété avec Nestor. Interventions, factures, AG, documents, comptabilité et IA copilote.',
    url: 'https://www.nestor-immo.com',
    siteName: 'Nestor',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nestor — Logiciel de gestion de copropriété intelligent',
    description: 'Simplifiez la gestion de votre copropriété avec Nestor.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
