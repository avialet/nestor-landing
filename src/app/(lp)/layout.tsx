import type { ReactNode } from 'react';

// Landing pages layout — no global Navbar/Footer (each LP has its own)
export default function LPLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
