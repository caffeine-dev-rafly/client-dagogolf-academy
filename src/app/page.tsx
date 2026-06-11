import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Programs from '@/components/sections/Programs';
import Curriculum from '@/components/sections/Curriculum';
import Coaches from '@/components/sections/Coaches';
import GallerySection from '@/components/sections/GallerySection';
import Reviews from '@/components/sections/Reviews';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Programs />
      <Curriculum />
      <Coaches />
      <GallerySection />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
