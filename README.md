# La Recova de La Serena

Guía educativa y turística independiente, no oficial y sin fines de lucro, en español de Chile. No representa a la administración del mercado ni a sus locatarios.

## Desarrollo

Node.js 24.20.0 y pnpm 12.3.4. Instalar con `pnpm install --frozen-lockfile`, validar con `pnpm check` y construir con `pnpm build`. El proyecto conserva Astro SSR y el adaptador Cloudflare. El comando de despliegue configurado en el proyecto usa Wrangler; la configuración generada del adaptador es la entrada del build.

El dominio predeterminado es https://larecova.org; `SITE` permite establecer el origen del build. La entrada Worker normaliza las variantes de producción antes de delegar al adaptador y conserva las respuestas 404 reales.

## Contenido y fotografías

Los horarios de distintas fuentes se muestran con su fecha y alcance; la semana de festivos de una ficha no es un horario permanente. Las fotografías históricas conservadas incluyen autor, fecha, fuente, licencia y aviso de adaptación en la página. No constituyen un directorio comercial o una oferta vigente.

La página conserva su Google Analytics, mapa de Google y visor de imágenes. La explicación visible de servicios externos describe la carga de Analytics sin un selector propio. No hay módulo de clima, cuentas de usuario ni funcionalidades nuevas de base de datos.
