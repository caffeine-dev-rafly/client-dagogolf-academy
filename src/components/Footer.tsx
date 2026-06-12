import React from 'react';
import Link from 'next/link';
import { MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { waLink, EMAIL, ADDRESS, OPENING_HOURS } from '@/lib/site';
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
              Peningkatan performa, tradisi, dan warisan golf eksklusif di jantung kota Bandung.
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
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Navigasi</h4>
            <ul className="space-y-4">
              {[
                { label: 'Layanan', id: 'services' },
                { label: 'Program', id: 'programs' },
                { label: 'Kurikulum', id: 'curriculum' },
                { label: 'Pelatih', id: 'coaches' },
                { label: 'Galeri', id: 'gallery' },
              ].map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.id}`} className="text-xs text-onyx/70 hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Lokasi</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={18} className="text-gold/60 shrink-0 mt-0.5" />
                <span className="text-xs text-onyx/70 leading-relaxed">{ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock size={18} className="text-gold/60 shrink-0" />
                <span className="text-xs text-onyx/70">Setiap Hari: {OPENING_HOURS}</span>
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
          <p>© 2026 DAGO GOLF ACADEMY. HAK CIPTA DILINDUNGI.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-onyx transition-colors">Privasi</Link>
            <Link href="#" className="hover:text-onyx transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
