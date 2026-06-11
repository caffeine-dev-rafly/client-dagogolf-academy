'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, CheckCircle2, RotateCcw } from 'lucide-react';
import { waLink } from '@/lib/site';

const subjects = ['Junior Program', 'Private Session', 'AI Analysis', 'Tournament Prep'];

const fieldBase =
  'peer w-full bg-transparent border-b border-white/20 py-3 text-sm text-white outline-none ' +
  'focus:border-gold transition-colors placeholder-transparent';

const labelBase =
  'absolute left-0 top-3 text-sm text-white/40 pointer-events-none transition-all duration-200 ' +
  'peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-gold ' +
  'peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px] ' +
  'peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-gold';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      'Halo Dago Golf Academy,',
      '',
      `Nama: ${name || '-'}`,
      `Email: ${email || '-'}`,
      `Topik: ${subject}`,
      '',
      message || '(no message)',
    ].join('\n');
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const reset = () => {
    setName('');
    setEmail('');
    setSubject(subjects[0]);
    setMessage('');
    setSent(false);
  };

  return (
    <div className="relative bg-white/[0.04] p-8 md:p-12 luxury-border border-gold/15 backdrop-blur-sm">
      {/* Gold corner accents */}
      <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-gold/60" />
      <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-gold/60" />

      <div className="mb-10">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-2">Send an Inquiry</p>
        <p className="text-sm text-white/50">Tell us your goals — we usually reply within a few hours.</p>
      </div>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-12 text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">WhatsApp Opened</h3>
            <p className="text-sm text-white/60 max-w-xs mx-auto mb-8">
              We&rsquo;ve prefilled your message — just press send in WhatsApp to reach the academy directly.
            </p>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-gold hover:text-white transition-colors"
            >
              <RotateCcw size={14} /> Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-9"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="relative">
              <input
                id="cf-name"
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldBase}
              />
              <label htmlFor="cf-name" className={labelBase}>
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                id="cf-email"
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldBase}
              />
              <label htmlFor="cf-email" className={labelBase}>
                Email Address
              </label>
            </div>

            {/* Subject — segmented selector instead of a default dropdown */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-3">I&rsquo;m interested in</p>
              <div className="flex flex-wrap gap-2.5">
                {subjects.map((s) => {
                  const selected = subject === s;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSubject(s)}
                      aria-pressed={selected}
                      className={`px-4 py-2 text-[11px] uppercase tracking-widest font-bold border transition-all duration-300 ${
                        selected
                          ? 'bg-gold border-gold text-onyx shadow-lg shadow-gold/20'
                          : 'border-white/20 text-white/60 hover:border-gold/50 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="cf-message"
                rows={4}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${fieldBase} resize-none`}
              />
              <label htmlFor="cf-message" className={labelBase}>
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 bg-gold text-onyx py-5 text-xs uppercase tracking-widest font-bold hover:bg-white transition-all duration-500 shadow-xl"
            >
              <MessageCircle size={16} />
              Send via WhatsApp
            </button>

            <p className="text-center text-[10px] text-white/30 tracking-wide">
              Opens WhatsApp with your details prefilled. No spam, ever.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
