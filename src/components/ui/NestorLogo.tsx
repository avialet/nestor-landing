'use client';

export function NestorLogo({ size = 40, white = false }: { size?: number; white?: boolean }) {
  const primaryColor = white ? '#FFFFFF' : '#2563EB';
  const darkColor = white ? 'rgba(255,255,255,0.7)' : '#1D4ED8';
  const lightColor = white ? 'rgba(255,255,255,0.85)' : '#3B82F6';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Isometric cube - left face */}
      <path
        d="M24 12L8 22V38L24 48V32L24 12Z"
        fill={darkColor}
      />
      {/* Isometric cube - right face */}
      <path
        d="M24 12L40 22V38L24 48V32L24 12Z"
        fill={primaryColor}
      />
      {/* Isometric cube - top face */}
      <path
        d="M24 12L40 22L24 32L8 22L24 12Z"
        fill={lightColor}
      />
      {/* N letter */}
      <path
        d="M18 26V38L22 36V30L26 36V24L22 26V32L18 26Z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M26 24V36L30 34V22L26 24Z"
        fill="white"
        opacity="0.95"
      />
    </svg>
  );
}

export function NestorLogoFull({ white = false, size = 'default' }: { white?: boolean; size?: 'sm' | 'default' | 'lg' }) {
  const sizes = {
    sm: { logo: 28, text: 'text-lg', sub: 'text-[10px]' },
    default: { logo: 36, text: 'text-xl', sub: 'text-xs' },
    lg: { logo: 48, text: 'text-3xl', sub: 'text-sm' },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <NestorLogo size={s.logo} white={white} />
      <div className="flex flex-col">
        <span className={`font-display font-bold ${s.text} leading-none ${white ? 'text-white' : 'text-text-primary'}`}>
          Nestor
        </span>
        <span className={`font-display font-light ${s.sub} ${white ? 'text-blue-200' : 'text-text-secondary'} tracking-widest uppercase`}>
          Copropriétés
        </span>
      </div>
    </div>
  );
}
