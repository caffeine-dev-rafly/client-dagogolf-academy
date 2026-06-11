import React from 'react';
import Reveal from '@/components/Reveal';
import { services } from '@/content/data';
import { waLink } from '@/lib/site';
import { ChevronRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-platinum/5 border-t border-platinum">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-24">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-4">ACADEMY SERVICES</p>
          <h2 className="text-5xl font-serif font-bold text-onyx">Professional Development</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Reveal
              key={service}
              delay={(i % 3) * 0.1}
              className="bg-white p-12 luxury-border hover:border-gold hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="text-gold/30 text-6xl font-serif font-bold mb-8 group-hover:text-gold transition-colors">
                0{i + 1}
              </div>
              <h3 className="text-xl font-serif font-bold text-onyx mb-4 group-hover:text-gold transition-colors">
                {service}
              </h3>
              <p className="text-sm text-onyx/60 leading-relaxed mb-8">
                Comprehensive solutions tailored for every level of player, from junior enthusiasts to competitive professionals.
              </p>
              <a
                href={waLink(`Halo Dago Golf, saya ingin bertanya tentang layanan: ${service}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[11px] uppercase tracking-widest font-bold text-onyx hover:text-gold transition-all"
              >
                Inquire Service <ChevronRight size={14} className="ml-1" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
