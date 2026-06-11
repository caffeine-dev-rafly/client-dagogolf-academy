import React from 'react';
import Reveal from '@/components/Reveal';
import { stats } from '@/content/data';

export default function Stats() {
  return (
    <section className="section-padding bg-white border-y border-platinum">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="space-y-2">
              <p className="text-4xl font-serif text-onyx">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
