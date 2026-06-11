import React from 'react';
import Link from 'next/link';
import { MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { waLink, EMAIL, ADDRESS } from '@/lib/site';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-platinum pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 inline-block" aria-label="Dago Golf home">
              <Logo />
            </Link>
            <p className="text-onyx/70 text-sm leading-relaxed mb-8 max-w-xs">
              Elevation of performance, tradition, and exclusive golf heritage in the heart of Bandung.
            </p>
            <div className="flex space-x-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 luxury-border flex items-center justify-center text-onyx hover:bg-gold hover:border-gold hover:text-white transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email Dago Golf"
                className="w-10 h-10 luxury-border flex items-center justify-center text-onyx hover:bg-gold hover:border-gold hover:text-white transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Programs', 'Curriculum', 'Coaches', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-xs text-onyx/70 hover:text-gold transition-colors">
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
                <MapPin size={18} className="text-gold/60 shrink-0 mt-0.5" />
                <span className="text-xs text-onyx/70 leading-relaxed">{ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock size={18} className="text-gold/60 shrink-0" />
                <span className="text-xs text-onyx/70">Tue - Sun: 07:00 - 21:00</span>
              </div>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group w-fit"
              >
                <Phone size={18} className="text-gold/60 shrink-0" />
                <span className="text-xs text-onyx/70 group-hover:text-gold transition-colors">
                  +62 851-7509-0700
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-platinum flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-onyx/50 space-y-4 md:space-y-0">
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
