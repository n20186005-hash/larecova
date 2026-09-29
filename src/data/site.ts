/**
 * Fuente única de los datos del establecimiento y del nombre SEO del sitio.
 * Cifras del perfil público de Google Maps revisadas en septiembre de 2026.
 * No inventar horarios, teléfonos ni servicios que no provengan de esta ficha.
 */

export const DOMAIN_URL = 'https://larecova.org';

/** Formato SEO del sitio: nombre del lugar + ciudad + guía de visita. */
export const SITE_NAME = 'La Recova La Serena — Guía de visita';

/** Alias locales con los que los visitantes buscan el mercado. */
export const SEARCH_ALIASES = [
  'La Recova',
  'Recova La Serena',
  'La Recova la Serena',
  'Mercado La Recova',
  'Mercado de La Serena'
];

export const ATTRACTION = {
  name: 'La Recova de La Serena',
  shortName: 'La Recova',
  alternateName: SEARCH_ALIASES,
  /** Categoría publicada en la ficha pública del establecimiento. */
  category: 'Market',
  description:
    'Mercado tradicional de artesanía, productos regionales y gastronomía en el centro histórico de La Serena, Chile.',
  streetAddress: 'Cienfuegos 563',
  addressLocality: 'La Serena',
  addressRegion: 'Coquimbo',
  postalCode: '1700000',
  addressCountry: 'CL',
  fullAddress: 'Cienfuegos 563, 1700000 La Serena, Coquimbo, Chile',
  telephone: '+56 51 221 3888',
  telephoneHref: 'tel:+56512213888',
  latitude: -29.9016128,
  longitude: -71.2463272,
  plusCode: '3QX3+9F La Serena, Chile',
  googleMapsUrl: 'https://maps.app.goo.gl/Y37TvRasJHfBQmFW6',
  sameAs: ['https://maps.app.goo.gl/Y37TvRasJHfBQmFW6', 'https://www.chile.travel/'],
  /** Valoración pública (Google Maps); se muestra siempre con su salvedad. */
  ratingValue: 4.1,
  reviewCount: 22485,
  ratingSnapshot: 'Google Maps, septiembre de 2026',
  isAccessibleForFree: true,
  priceRange: 'Entrada gratuita; compras y consumo por separado'
} as const;

/**
 * Horario de referencia obtenido de plataformas de viaje. Puede variar por
 * local, temporada o festivo: nunca se presenta como horario oficial.
 */
export const OPENING_HOURS_SPEC = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '10:00',
    closes: '19:00'
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday', 'Sunday'],
    opens: '09:45',
    closes: '19:00'
  }
];

export const OPENING_HOURS_ROWS = [
  { label: 'Lunes a viernes', value: '10:00 – 19:00' },
  { label: 'Sábados, domingos y festivos', value: '09:45 – 19:00' }
] as const;

export const OPENING_HOURS_NOTE =
  'Horario de referencia tomado de plataformas de viaje: cada local puede abrir o cerrar en otro horario y las horas cambian en temporada alta y festivos.';

export function withSiteName(page?: string): string {
  return page ? `${page} | ${SITE_NAME}` : SITE_NAME;
}
