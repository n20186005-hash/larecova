import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ÚNICO punto de configuración del dominio.
// Precedencia: variable de entorno SITE (builds de staging/CI) > dominio canónico.
const site = process.env.SITE?.trim() || 'https://larecova.org';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
