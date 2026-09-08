import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ÚNICO punto de configuración del dominio.
// Déjalo vacío para compilar sin dominio; al publicar define SITE con la URL canónica.
const site = process.env.SITE?.trim() || undefined;

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
