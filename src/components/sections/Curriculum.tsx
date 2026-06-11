import React from 'react';
import Reveal from '@/components/Reveal';
import { curriculum } from '@/content/data';

export default function Curriculum() {
  return (
    <section id="curriculum" className="section-padding bg-onyx text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-gold" />
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold font-bold">Kurikulum</p>
            <span className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="text-5xl font-serif font-bold mb-6">
            Perjalanan Belajar yang <span className="text-gold">Terstruktur</span>
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
            Metodologi 4 tahap kami telah terbukti menghasilkan pegolf yang teknikal, strategis,
            dan siap berkompetisi.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-12">
          {curriculum.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1} className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl leading-none">{item.icon}</span>
                <span className="text-5xl font-serif font-bold text-gold/20 group-hover:text-gold transition-colors duration-500">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
