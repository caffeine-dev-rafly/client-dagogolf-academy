import React from 'react';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { waLink, EMAIL, ADDRESS } from '@/lib/site';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-onyx text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <Reveal direction="right">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-4">INQUIRIES</p>
            <h2 className="text-6xl font-serif font-bold mb-12">
              Contact <br /> <span className="text-gold">The Academy</span>
            </h2>

            <div className="space-y-8">
              <div className="group cursor-default">
                <p className="text-[11px] uppercase tracking-widest text-gold mb-2">Location</p>
                <p className="text-sm leading-relaxed text-white/80 group-hover:text-white transition-colors">{ADDRESS}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gold mb-2">Email</p>
                <a href={`mailto:${EMAIL}`} className="text-sm text-white/80 hover:text-gold transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gold mb-2">WhatsApp</p>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  +62 851-7509-0700
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
