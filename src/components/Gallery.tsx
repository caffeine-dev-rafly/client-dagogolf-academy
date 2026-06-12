'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  // Keyboard controls + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    document.body.classList.add('no-scroll');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Buka galeri gambar ${i + 1} dari ${images.length}`}
            className="relative aspect-square luxury-border border-gold/5 overflow-hidden group cursor-zoom-in focus-visible:border-gold"
          >
            <Image
              src={img}
              alt={`Momen warisan Dago Golf ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold border border-white/60 px-3 py-1 bg-gold/50 backdrop-blur-sm">
                Perbesar
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Penampil gambar"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-onyx/95 backdrop-blur-sm p-4 md:p-12"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Tutup penampil"
              className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors z-10"
            >
              <X size={28} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Gambar sebelumnya"
              className="absolute left-4 md:left-8 text-white/70 hover:text-gold transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={active}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={images[active!]}
                alt={`Momen warisan Dago Golf ${active! + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Gambar berikutnya"
              className="absolute right-4 md:right-8 text-white/70 hover:text-gold transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/50">
              {active! + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
