import React from 'react';
import Link from 'next/link';
import { Globe, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-platinum pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-onyx mb-6 block">
              DAGO<span className="font-light">GOLF</span>
            </Link>
            <p className="text-onyx/60 text-sm leading-relaxed mb-8 max-w-xs">
              Elevation of performance, tradition, and exclusive golf heritage in the heart of Bandung.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 luxury-border flex items-center justify-center text-onyx hover:bg-onyx hover:text-white transition-all">
                <Globe size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 luxury-border flex items-center justify-center text-onyx hover:bg-onyx hover:text-white transition-all">
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Programs', 'Curriculum', 'Coaches', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-xs text-onyx/60 hover:text-onyx transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Establishment</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={18} className="text-onyx/40 shrink-0 mt-0.5" />
                <span className="text-xs text-onyx/60 leading-relaxed">
                  Jl. Raya Golf Dago No.78, Bandung, West Java, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock size={18} className="text-onyx/40 shrink-0" />
                <span className="text-xs text-onyx/60">Tue - Sun: 07:00 - 21:00</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={18} className="text-onyx/40 shrink-0" />
                <span className="text-xs text-onyx/60">+62 851-7509-0700</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-platinum flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-onyx/40 space-y-4 md:space-y-0">
          <p>© 2026 DAGO GOLF ACADEMY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-onyx transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-onyx transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
