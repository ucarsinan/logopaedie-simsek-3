import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const legacyRedirectPairs = [
  // Old /leistungen/ structure
  ['/leistungen', '/therapie/'],
  ['/leistungen/sprachstoerungen', '/therapieangebot/sprachstoerungen/'],
  ['/leistungen/sprechstoerungen', '/therapieangebot/sprechstoerungen/'],
  ['/leistungen/stimmtherapie', '/therapieangebot/stimmtherapie/'],
  ['/leistungen/schluckstoerungen', '/therapieangebot/schluckstoerungen/'],
  ['/leistungen/kinder-und-jugendliche', '/therapieangebot/kinder-und-jugendliche/'],
  ['/leistungen/erwachsene', '/therapieangebot/erwachsene/'],

  // Old WordPress site structure (preserves backlinks & Google index entries)
  ['/therapieangebot', '/therapie/'],
  ['/therapie/therapie-bei-erwachsenen', '/therapieangebot/erwachsene/'],
  ['/therapie/therapie-bei-kindern-und-jugendlichen', '/therapieangebot/kinder-und-jugendliche/'],
  ['/stimmtherapie', '/therapieangebot/stimmtherapie/'],
  ['/informationen', '/kostenuebernahme/'],
  ['/praxis', '/#praxis'],
  ['/anfahrt', '/kontakt/'],
  ['/jobs', '/karriere/'],

  // Old Turkish WordPress structure
  ['/2/tuerkische-logopaedie', '/tuerkische-logopaedie-duisburg/'],
  ['/2/tuerkische-sprachtherapie', '/tuerkische-sprachtherapie/'],
  ['/2/tuerkische-logopaedie-duisburg', '/tuerkische-logopaedie-duisburg/'],
  ['/2/tuerkische-sprachtherapie-duisburg', '/tuerkische-sprachtherapie/'],

  // Consolidate duplicate Turkish SEO pages (cannibalization fix)
  ['/tuerkische-logopaedie', '/tuerkische-logopaedie-duisburg/'],
  ['/tuerkische-sprachtherapie-duisburg', '/tuerkische-sprachtherapie/'],
  ['/muayenehane', '/anasayfa/#praxis'],
  ['/ulasim', '/iletisim/'],
  ['/bilgi', '/tr/kostenuebernahme/'],
  ['/bilgiler', '/tr/kostenuebernahme/'],
  ['/tr', '/anasayfa/'],
  ['/tr/hizmetler', '/terapi/'],
  ['/tr/hizmetler/ses-terapisi', '/terapi/ses-terapisi/'],
  ['/tr/hizmetler/dil-bozuklugu', '/terapi/dil-bozuklugu/'],
  ['/tr/hizmetler/konusma-bozuklugu', '/terapi/konusma-bozuklugu/'],
  ['/tr/hizmetler/yutma-bozuklugu', '/terapi/yutma-bozuklugu/'],
] as const;

const legacyRedirects = Object.fromEntries(legacyRedirectPairs);

export default defineConfig({
  site: 'https://logopaedie-simsek.de',
  output: 'static',
  adapter: vercel(),
  redirects: legacyRedirects,
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
