import React from 'react';
import { EMAIL, SITE_URL } from '@/lib/site';

// Structured data helps Google show a rich result (map, hours, phone) for
// local searches like "golf academy Bandung". Update geo coords + sameAs links.
const schema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Dago Golf Academy',
  description:
    'Historic golf academy in the Bandung highlands offering elite coaching, junior programs, and AI-driven swing analysis.',
  url: SITE_URL,
  telephone: '+62-851-7509-0700',
  email: EMAIL,
  foundingDate: '1917',
  priceRange: '$$$',
  image: `${SITE_URL}/images/hero.jpeg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Golf Dago No.78',
    addressLocality: 'Bandung',
    addressRegion: 'West Java',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.8651,
    longitude: 107.6191,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00',
    closes: '21:00',
  },
  sameAs: [] as string[],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
