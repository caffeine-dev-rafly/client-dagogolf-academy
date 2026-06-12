import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { programs } from '@/content/data';
import { waLink } from '@/lib/site';
import { ArrowUpRight } from 'lucide-react';

export default function Programs() {
  return (
    <section id="programs" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <Reveal direction="right" className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-gold" />
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold">Pilihan Program</p>
            </div>
            <h2 className="text-5xl font-serif font-bold text-onyx mb-6">Performa Terukur</h2>
            <p className="text-onyx/70 text-sm leading-relaxed">
              Kurikulum unggulan yang dirancang untuk mempercepat penguasaan keahlian dan kemahiran.
            </p>
          </Reveal>
          <a
            href={waLink('Halo Dago Golf, saya ingin melihat semua program latihan.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest border-b border-gold pb-2 text-gold hover:text-onyx hover:border-onyx transition-all whitespace-nowrap"
          >
            Lihat Semua Program
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((prog, i) => (
            <Reveal key={prog.title} delay={i * 0.12} className="group">
              <a
                href={waLink(`Halo Dago Golf, saya tertarik dengan program ${prog.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Image with editorial overlay */}
                <div className="relative aspect-[4/3] overflow-hidden luxury-border border-gold/15 group-hover:border-gold transition-colors duration-500">
                  <Image
                    src={prog.img}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                  />
                  {/* Permanent bottom gradient so the title is always legible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/85 via-onyx/20 to-transparent" />

                  {/* Big index numeral */}
                  <span className="absolute top-5 right-6 text-5xl font-serif font-bold text-white/80 group-hover:text-gold transition-colors duration-500">
                    0{i + 1}
                  </span>

                  {/* Gold corner accents */}
                  <span className="absolute top-3 left-3 h-7 w-7 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-3 right-3 h-7 w-7 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Title + CTA over the image */}
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {prog.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-bold text-gold">
                      Jelajahi Program
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Body */}
                <p className="text-sm text-onyx/70 leading-relaxed mt-7 mb-6">{prog.desc}</p>
                <div className="flex flex-wrap gap-2.5">
                  {prog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 luxury-border border-gold/25 bg-gold/5 text-[10px] uppercase tracking-widest text-gold-muted font-bold group-hover:border-gold/50 transition-colors"
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
