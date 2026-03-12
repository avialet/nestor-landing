'use client';

import Image from 'next/image';

interface NestorLogoProps {
  size?: number;
  white?: boolean;
}

export function NestorLogo({ size = 40, white = false }: NestorLogoProps) {
  return (
    <div
      style={{ width: size, height: size, position: 'relative' }}
      className={white ? 'invert brightness-200' : ''}
    >
      <Image
        src="/logo-nestor.png"
        alt="Nestor"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

export function NestorLogoFull({
  white = false,
  size = 'default',
}: {
  white?: boolean;
  size?: 'sm' | 'default' | 'lg';
}) {
  const heights = { sm: 44, default: 56, lg: 72 };
  const h = heights[size];
  // Logo is landscape ~2:1, so width = h * 2
  const w = Math.round(h * 2.06);

  return (
    <div style={{ position: 'relative', width: w, height: h }}>
      <Image
        src="/logo-nestor.png"
        alt="Nestor — Gestion de copropriété"
        fill
        className={`object-contain object-left ${white ? 'brightness-0 invert' : ''}`}
        priority
      />
    </div>
  );
}
