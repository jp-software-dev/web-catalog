import { business } from '../data/business';

/** Datos estructurados (JSON-LD) de negocio local para Google. */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: business.name,
    description: business.description,
    url: business.siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    openingHours: business.hours.map(h => h.schema),
    sameAs: Object.values(business.social),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
