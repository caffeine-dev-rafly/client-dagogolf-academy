import React from 'react';
import Reveal from '@/components/Reveal';
import { features } from '@/content/data';
import { Award, Users, Target, Cpu } from 'lucide-react';

const icons = {
  award: Award,
  target: Target,
  users: Users,
  cpu: Cpu,
} as const;

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <Reveal direction="right" className="lg:col-span-1">
            <h2 className="text-4xl font-serif font-bold text-onyx mb-6">
              Unrivaled <br /> <span className="text-gold">Excellence</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold mb-8" />
            <p className="text-onyx/70 text-sm leading-relaxed mb-8">
              Why Dago Golf Academy remains the definitive choice for those seeking to master the game with precision and style.
            </p>
          </Reveal>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
            {features.map((feature, i) => {
              const Icon = icons[feature.icon];
              return (
                <Reveal key={feature.title} delay={i * 0.1} className="space-y-4 group">
                  <div className="w-12 h-12 luxury-border flex items-center justify-center text-onyx group-hover:border-gold group-hover:text-gold transition-all duration-500">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-onyx group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-onyx/60 leading-relaxed">{feature.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
