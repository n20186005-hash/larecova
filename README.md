# La Recova de La Serena — sitio independiente

Micrositio de una sola página en español de Chile para La Recova, Cienfuegos 563, La Serena. Diseño propio inspirado en sus arquerías neocoloniales, patios, tejas y artesanía regional.

## Stack

- Astro 7.3.1
- @astrojs/cloudflare 14.3.0
- @astrojs/sitemap 3.7.4
- Tailwind CSS 4.3.3 + @tailwindcss/vite 4.3.3
- TypeScript 6.0.3
- Wrangler 4.129.0
- pnpm 12.3.4
- Node.js 24.20.0 LTS

Todas las versiones están fijadas de forma exacta en `package.json`. No se usa `pnpm-workspace.yaml` porque es un proyecto de un solo paquete.

## Dominio / canonical / sitemap

El dominio se configura únicamente a través de `SITE`, consumido por el campo `site` de `astro.config.ts`.

- Sin `SITE`: el proyecto debe poder compilar; se omiten canonical/OG absolutos y no se activa `@astrojs/sitemap`.
- Con `SITE`: Astro deriva canonical, Open Graph, JSON-LD y sitemap de ese único valor.

Ejemplo de despliegue: define `SITE` en el entorno de build con la URL canónica final y vuelve a construir.

## Comandos previstos de validación

```bash
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Imágenes

Las fotografías usadas son imágenes reales de La Recova procedentes de Wikimedia Commons y Chile Travel, con crédito/fuente visible en la galería. En esta copia de trabajo permanecen referenciadas por URL porque el entorno de generación no pudo descargar archivos externos; no se sustituyeron por imágenes generadas ni por placeholders.

## Analytics

GA4: `G-HXM22WWPKP`.

## Cloudflare

`wrangler.jsonc` está preparado para el worker generado por el adaptador oficial de Astro. El proyecto no usa base de datos, login ni CMS.
