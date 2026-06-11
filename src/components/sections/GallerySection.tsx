import React from 'react';
import Reveal from '@/components/Reveal';
import Gallery from '@/components/Gallery';
import { galleryImages } from '@/content/data';

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-platinum/5">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-serif font-bold text-onyx">
            Heritage <br /> <span className="text-gold">Visualized</span>
          </h2>
        </Reveal>
        <Gallery images={galleryImages} />
      </div>
    </section>
  );
}
