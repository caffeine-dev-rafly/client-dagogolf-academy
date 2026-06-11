'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  /** Stagger order for sequential reveals (multiplies the base delay). */
  delay?: number;
  /** Extra classes on the wrapper element. */
  className?: string;
  /** Animate from this direction. */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
};

const offsets: Record<NonNullable<RevealProps['direction']>, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  className,
  direction = 'up',
}: RevealProps) {
  const reduce = useReducedMotion();
  const { x, y } = offsets[direction];

  // `initial` must be identical on server and client to avoid a hydration
  // mismatch, so it never branches on `reduce` (which differs SSR vs client).
  // Reduced-motion users instead get a near-instant snap via the transition.
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0 : 0.8,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
