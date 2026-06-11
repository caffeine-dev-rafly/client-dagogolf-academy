import React from 'react';
import Reveal from '@/components/Reveal';
import { reviews } from '@/content/data';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-24">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-gold text-gold" />
            ))}
          </div>
          <h2 className="text-4xl font-serif font-bold text-onyx">Trusted by Professionals</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 0.1}
              className="p-12 luxury-border border-gold/5 hover:border-gold/30 hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              <Quote size={24} className="text-gold/30 mb-8 group-hover:text-gold transition-colors" />
              <p className="text-sm text-onyx/70 italic leading-relaxed mb-8 flex-grow">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-[11px] font-bold text-gold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold group-hover:text-gold transition-colors">
                    {review.name}
                  </p>
                  <p className="text-[10px] text-onyx/50 uppercase tracking-widest">Member</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
