import React from 'react';
import Reveal from '@/components/Reveal';
import { curriculum } from '@/content/data';

export default function Curriculum() {
  return (
    <section id="curriculum" className="section-padding bg-onyx text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-24">
          <h2 className="text-5xl font-serif font-bold mb-6">
            <span className="text-gold">The Path</span> to Mastery
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            Our 4-step progressive curriculum ensures a solid foundation and a high-performance ceiling.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-12">
          {curriculum.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1} className="relative group">
              <div className="text-6xl font-serif font-bold text-gold/20 mb-6 group-hover:text-gold transition-colors duration-500">
                {item.step}
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
