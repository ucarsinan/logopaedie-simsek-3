import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://logopaedie-simsek.de',
  output: 'static',
  adapter: vercel(),
  redirects: {
    // Old /leistungen/ structure
    '/leistungen/': '/therapieangebot/',
    '/leistungen/sprachstoerungen': '/therapieangebot/sprachstoerungen',
    '/leistungen/sprachstoerungen/': '/therapieangebot/sprachstoerungen/',
    '/leistungen/sprechstoerungen': '/therapieangebot/sprechstoerungen',
    '/leistungen/sprechstoerungen/': '/therapieangebot/sprechstoerungen/',
    '/leistungen/stimmtherapie': '/therapieangebot/stimmtherapie',
    '/leistungen/stimmtherapie/': '/therapieangebot/stimmtherapie/',
    '/leistungen/schluckstoerungen': '/therapieangebot/schluckstoerungen',
    '/leistungen/schluckstoerungen/': '/therapieangebot/schluckstoerungen/',
    '/leistungen/kinder-und-jugendliche': '/therapieangebot/kinder-und-jugendliche',
    '/leistungen/kinder-und-jugendliche/': '/therapieangebot/kinder-und-jugendliche/',
    '/leistungen/erwachsene': '/therapieangebot/erwachsene',
    '/leistungen/erwachsene/': '/therapieangebot/erwachsene/',
    // Old WordPress site structure (preserves backlinks & Google index entries)
    '/therapie/': '/therapieangebot/',
    '/therapie/therapie-bei-erwachsenen/': '/therapieangebot/erwachsene/',
    '/therapie/therapie-bei-kindern-und-jugendlichen/': '/therapieangebot/kinder-und-jugendliche/',
    '/stimmtherapie/': '/therapieangebot/stimmtherapie/',
    '/informationen/': '/',
    '/anfahrt/': '/kontakt/',
    '/jobs/': '/karriere/',
    '/praxis/': '/',
  },
  integrations: [sitemap({
    filter: (page) => ![
      'https://logopaedie-simsek.de/impressum/',
      'https://logopaedie-simsek.de/datenschutz/',
      'https://logopaedie-simsek.de/barrierefreiheit/',
    ].includes(page),
  })],
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss() as any],
  },
});
