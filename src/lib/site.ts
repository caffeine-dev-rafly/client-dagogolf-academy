export const SITE_URL = 'https://dagogolf.com'; // TODO: set to the real production domain
// Central place for contact details so they stay consistent site-wide.
export const WHATSAPP_NUMBER = '6285175090700'; // +62 851-7509-0700
export const EMAIL = 'info@dagogolf.com';
export const ADDRESS = 'Jl. Raya Golf Dago No.78, Bandung, West Java, Indonesia';

/** Build a wa.me link with an optional prefilled message. */
export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
