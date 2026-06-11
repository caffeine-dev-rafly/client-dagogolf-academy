'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Programs', href: '#programs' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-onyx">
          DAGO<span className="font-light">GOLF</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs uppercase tracking-widest text-onyx/70 hover:text-onyx transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-onyx text-white px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-onyx/90 transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-onyx" onClick={() => setIsOpen(!isOpen)}>
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
              className="text-sm uppercase tracking-widest text-onyx/70 hover:text-onyx transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-onyx text-white w-full py-3 text-[10px] uppercase tracking-widest">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
