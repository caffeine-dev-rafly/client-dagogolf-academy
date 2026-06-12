import React from 'react';
import { EMAIL, SITE_URL } from '@/lib/site';

// Structured data helps Google show a rich result (map, hours, phone) for
// local searches like "golf academy Bandung". Update geo coords + sameAs links.
const schema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Dago Golf Academy',
  description:
    'Akademi golf bersejarah di dataran tinggi Bandung yang menawarkan pelatihan elit, program junior, dan analisis swing berbasis AI.',
  url: SITE_URL,
  telephone: '+62-851-7509-0700',
  email: EMAIL,
  foundingDate: '1917',
  priceRange: '$$$',
  image: `${SITE_URL}/images/hero.jpeg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dago heritage 1917, Jl. Cigadung Raya Barat No.5, RT.05/RW.02, Cigadung, Kec. Cibeunying Kaler',
    addressLocality: 'Bandung',
    addressRegion: 'Jawa Barat',
    addressCountry: 'ID',
    postalCode: '40191',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.8651,
    longitude: 107.6191,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '16:00',
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
