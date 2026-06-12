import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { coaches } from '@/content/data';
import { waLink } from '@/lib/site';
import { ArrowUpRight, BadgeCheck } from 'lucide-react';

export default function Coaches() {
  return (
    <section id="coaches" className="section-padding relative overflow-hidden">
      {/* Decorative gold wash */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <Reveal className="max-w-3xl mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-gold" />
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold font-bold">Instruktur Ahli</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-onyx leading-[0.9] tracking-tight">
            Sosok di Balik <br />
            <span className="font-light italic text-gold">Kemahiran Anda</span>
          </h2>
          <p className="mt-8 text-onyx/60 text-base leading-relaxed max-w-xl">
            Puluhan tahun pengalaman turnamen, dirumuskan menjadi metode pelatihan yang memadukan dasar-dasar abadi dengan presisi modern berbasis data.
          </p>
        </Reveal>

        {/* Coach cards */}
        <div className="space-y-24 md:space-y-32">
          {coaches.map((coach, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={coach.name} delay={0.05}>
                <div
                  className={`group grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    flip ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Portrait */}
                  <div className="lg:col-span-5 [direction:ltr]">
                    <div className="relative">
                      {/* Watermark numeral */}
                      <span
                        className={`absolute -top-12 ${
                          flip ? '-right-4' : '-left-4'
                        } text-[10rem] leading-none font-serif font-bold text-gold/10 select-none transition-colors duration-700 group-hover:text-gold/20`}
                      >
                        0{i + 1}
                      </span>

                      <div className="relative aspect-[4/5] luxury-border border-gold/20 overflow-hidden grayscale group-hover:grayscale-0 group-hover:border-gold transition-all duration-700">
                        <Image
                          src={coach.img}
                          alt={`${coach.name}, ${coach.role}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 via-transparent to-transparent" />
                      </div>

                      {/* Gold corner accents */}
                      <span className="absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Detail */}
                  <div className="lg:col-span-7 [direction:ltr]">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-4">{coach.role}</p>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-onyx mb-6 group-hover:text-gold transition-colors duration-500">
                      {coach.name}
                    </h3>

                    <p className="text-lg font-serif italic text-onyx/70 leading-relaxed mb-8 max-w-lg">
                      &ldquo;{coach.tagline}&rdquo;
                    </p>

                    {/* Stats */}
                    <div className="flex gap-12 mb-8">
                      {coach.stats.map((s) => (
                        <div key={s.label}>
                          <p className="text-3xl font-serif font-bold text-onyx">{s.value}</p>
                          <p className="text-[10px] uppercase tracking-widest text-gold font-bold mt-1">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      {coach.specialties.map((sp) => (
                        <span
                          key={sp}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 luxury-border border-gold/20 text-[10px] uppercase tracking-widest text-onyx/70 font-bold group-hover:border-gold/40 transition-colors"
                        >
                          <BadgeCheck size={12} className="text-gold" />
                          {sp}
                        </span>
                      ))}
                    </div>

                    <a
                      href={waLink(`Halo Dago Golf, saya ingin booking sesi dengan ${coach.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-onyx text-white px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:bg-gold transition-all duration-500 shadow-lg group/btn"
                    >
                      Booking Sesi dengan {coach.name}
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
