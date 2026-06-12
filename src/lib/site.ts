export const SITE_URL = 'https://dagogolf.com'; // TODO: set to the real production domain
// Central place for contact details so they stay consistent site-wide.
export const WHATSAPP_NUMBER = '6285175090700'; // +62 851-7509-0700
export const EMAIL = 'info@dagogolf.com';
export const ADDRESS = 'Dago heritage 1917, Jl. Cigadung Raya Barat No.5, RT.05/RW.02, Cigadung, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40191';
export const OPENING_HOURS = '08.00-16.00';

/** Build a wa.me link with an optional prefilled message. */
export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
