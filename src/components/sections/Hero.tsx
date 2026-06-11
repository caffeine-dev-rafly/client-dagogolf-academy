import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Dago Golf Course in the Bandung highlands"
          fill
          sizes="100vw"
          className="object-cover opacity-60 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.5em] text-onyx/80 mb-8 animate-fade-in font-bold">
          ESTABLISHED 1917 • <span className="text-gold">BANDUNG</span>
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter text-onyx mb-12 leading-[0.85]">
          DAGO GOLF <br /> <span className="font-light italic text-gold">HERITAGE</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#contact"
            className="bg-onyx text-white px-12 py-5 text-xs uppercase tracking-widest hover:bg-gold transition-all duration-500 flex items-center group shadow-xl"
          >
            Begin Training
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#curriculum"
            className="luxury-border text-onyx px-12 py-5 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-500"
          >
            Explore Heritage
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-[1px] h-12 bg-gold" />
      </div>
    </section>
  );
}
