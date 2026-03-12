'use client';

import { Hero } from '@/components/sections/Hero';
import { TrustBanner } from '@/components/sections/TrustBanner';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { AIFeatures } from '@/components/sections/AIFeatures';
import { Prestataires } from '@/components/sections/Prestataires';
import { Personas } from '@/components/sections/Personas';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <Problem />
      <Solution />
      <AIFeatures />
      <Prestataires />
      <Personas />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
