import React from 'react';

export function Monogram({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Dago Golf monogram"
      className="shrink-0"
    >
      <rect width="64" height="64" rx="14" fill="#111111" />
      <rect x="3" y="3" width="58" height="58" rx="12" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.5" />
      <path
        fill="#D4AF37"
        fillRule="evenodd"
        d="M20 16 H33 C47 16 54 23 54 32 C54 41 47 48 33 48 H20 Z M28 24 H33 C43 24 45 28 45 32 C45 36 43 40 33 40 H28 Z"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Monogram />
      <span className="text-2xl font-serif font-bold tracking-tighter text-onyx leading-none">
        DAGO<span className="font-light">GOLF</span><span className="font-light text-gold">ACADEMY</span>
      </span>
    </span>
  );
}
