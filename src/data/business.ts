// Datos del negocio: única fuente de verdad para contacto, redes y SEO.
// Todos los valores son genéricos (de ejemplo). Reemplázalos con los reales antes de publicar.

export const business = {
  name: 'Refacciones',
  tagline: 'Catálogo y Taller Especializado',
  description: 'Taller y refaccionaria especializada en transmisiones automáticas y direcciones hidráulicas.',
  siteUrl: 'https://www.ejemplo.com',

  phoneDisplay: '(000) 000 0000',
  phoneE164: '+520000000000',
  whatsappNumber: '520000000000',
  email: 'contacto@ejemplo.com',

  address: {
    locality: 'Ciudad',
    region: 'Estado',
    country: 'MX',
    display: 'Av. Principal 123, Centro',
  },

  hours: [
    { days: 'Lunes a Viernes', time: '9:00am - 6:00pm', schema: 'Mo-Fr 09:00-18:00' },
    { days: 'Sábados', time: '9:00am - 2:00pm', schema: 'Sa 09:00-14:00' },
  ],

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },

  mapsEmbedUrl: 'https://www.google.com/maps?q=M%C3%A9xico&output=embed',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Refacciones',
} as const;

export const whatsappLink = (message?: string): string =>
  `https://wa.me/${business.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const phoneLink = `tel:${business.phoneE164}`;
export const emailLink = `mailto:${business.email}`;
