'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { waLink } from '@/lib/site';
import Logo from '@/components/Logo';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Programs', href: '#programs' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Coaches', href: '#coaches' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav link for whichever section is in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" aria-label="Dago Golf home">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={active === link.href ? 'true' : undefined}
              className={`text-xs uppercase tracking-widest transition-colors ${
                active === link.href ? 'text-gold' : 'text-onyx/70 hover:text-onyx'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={waLink('Halo Dago Golf, saya ingin booking sesi latihan.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-onyx text-white px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-gold transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-onyx"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-platinum p-6 flex flex-col space-y-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={active === link.href ? 'true' : undefined}
              className={`text-sm uppercase tracking-widest transition-colors ${
                active === link.href ? 'text-gold' : 'text-onyx/70 hover:text-onyx'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={waLink('Halo Dago Golf, saya ingin booking sesi latihan.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-onyx text-white w-full py-3 text-[10px] uppercase tracking-widest text-center hover:bg-gold transition-all"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
