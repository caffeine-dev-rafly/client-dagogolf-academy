import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { programs } from '@/content/data';
import { waLink } from '@/lib/site';

export default function Programs() {
  return (
    <section id="programs" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <Reveal direction="right" className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-4">SELECT PROGRAMS</p>
            <h2 className="text-5xl font-serif font-bold text-onyx mb-6">Tailored Performance</h2>
            <p className="text-onyx/70 text-sm leading-relaxed">
              Flagship curricula designed to accelerate skill acquisition and mastery.
            </p>
          </Reveal>
          <a
            href={waLink('Halo Dago Golf, saya ingin melihat semua program latihan.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest border-b border-gold pb-2 text-gold hover:text-onyx hover:border-onyx transition-all whitespace-nowrap"
          >
            View All Programs
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {programs.map((prog, i) => (
            <Reveal key={prog.title} delay={i * 0.12} className="group">
              <a
                href={waLink(`Halo Dago Golf, saya tertarik dengan program ${prog.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <div className="aspect-[16/9] mb-8 overflow-hidden luxury-border relative border-gold/10 group-hover:border-gold transition-colors duration-500">
                  <Image
                    src={prog.img}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-onyx/20 group-hover:bg-onyx/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] uppercase tracking-widest text-white font-bold bg-gold px-4 py-2 shadow-lg">
                      Explore Program
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-onyx mb-4 group-hover:text-gold transition-colors">
                  {prog.title}
                </h3>
                <p className="text-sm text-onyx/60 leading-relaxed mb-8">{prog.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {prog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gold/10 text-[10px] uppercase tracking-widest text-gold-muted font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
