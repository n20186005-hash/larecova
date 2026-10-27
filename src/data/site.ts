/**
 * Fuente única de los datos del establecimiento y del nombre SEO del sitio.
 * Datos públicos de Google Maps consultados el 26 de octubre de 2026.
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
  sameAs: ['https://maps.app.goo.gl/Y37TvRasJHfBQmFW6'],
  /** Valoración pública (Google Maps); se muestra siempre con su salvedad. */
  ratingValue: 4.1,
  reviewCount: 22503,
  ratingSnapshot: 'Google Maps, 26 de octubre de 2026'
} as const;

/** Fuentes con fechas y alcance distintos; no constituyen un horario unificado. */
export const OPENING_HOURS_ROWS = [
  { label: 'Maps · 26–30 octubre 2026', value: '10:00–19:00' },
  { label: 'Maps · sábado 31 octubre', value: '09:45–19:00; aviso de festivo' },
  { label: 'Maps · domingo 1 noviembre', value: 'Cerrado; aviso de Todos los Santos' },
  { label: 'SERNATUR · página Vida Urbana, sin fecha de actualización visible', value: 'Martes–viernes 10:30–19:00; sábados–domingos 10:30–14:30' },
  { label: 'SERNATUR · reporte de junio de 2026', value: 'Martes–viernes 10:30–18:00; sábados 10:30–14:30' }
] as const;
export const OPENING_HOURS_NOTE = 'Fuentes consultadas el 26 de octubre de 2026. Los horarios difieren: la semana mostrada por Maps incluye festivos y no demuestra que todos los domingos esté cerrado. Confirma la fecha y los locales que quieres visitar; no se ofrece una garantía de acceso o servicio.';

export function withSiteName(page?: string): string {
  return page ? `${page} | ${SITE_NAME}` : SITE_NAME;
}
