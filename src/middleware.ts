import { defineMiddleware } from 'astro:middleware';

/**
 * El dominio se concentra en https://larecova.org.
 * Search Console muestra las cuatro variantes (http/https × con y sin www)
 * indexadas por separado, por lo que se redirigen aquí con 301 permanente.
 */
const CANONICAL_HOST = 'larecova.org';

const SECURITY_HEADERS: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  // Solo se redirige en el dominio de producción: localhost y los despliegues
  // de preview (workers.dev) conservan su host.
  if (host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`) {
    if (host !== CANONICAL_HOST || url.protocol !== 'https:') {
      const target = new URL(url.toString());
      target.protocol = 'https:';
      target.hostname = CANONICAL_HOST;
      target.port = '';
      return new Response(null, {
        status: 301,
        headers: {
          Location: target.toString(),
          'Cache-Control': 'public, max-age=86400'
        }
      });
    }
  }

  const response = await next();

  if (response.status === 101 || response.status === 204 || response.status === 304) {
    return response;
  }

  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(key)) headers.set(key, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
});
