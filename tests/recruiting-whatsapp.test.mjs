import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import {
  RECRUITING_EMAIL,
  RECRUITING_EMAIL_BODY,
  RECRUITING_EMAIL_HREF,
  RECRUITING_EMAIL_HREF_TR,
  RECRUITING_EMAIL_SUBJECT,
  RECRUITING_EMAIL_SUBJECT_TR,
  RECRUITING_EMAIL_BODY_TR,
  RECRUITING_PHONE_DISPLAY,
  RECRUITING_PHONE_HREF,
  WHATSAPP_HREF,
  WHATSAPP_HREF_TR,
  WHATSAPP_MESSAGE,
  WHATSAPP_MESSAGE_TR,
  WHATSAPP_NUMBER,
} from '../src/lib/recruiting-whatsapp.mjs';

const ALLOWED_PAGE_FILES = new Set([
  'src/pages/karriere.astro',
  'src/pages/kariyer.astro',
  'src/pages/datenschutz.astro',
]);

async function listAstroFiles(directoryUrl, rootUrl = directoryUrl) {
  const entries = await readdir(directoryUrl, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryUrl = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, directoryUrl);

    if (entry.isDirectory()) {
      files.push(...await listAstroFiles(entryUrl, rootUrl));
    } else if (entry.isFile() && entry.name.endsWith('.astro')) {
      const relativePath = path
        .relative(fileURLToPath(rootUrl), fileURLToPath(entryUrl))
        .split(path.sep)
        .join('/');
      files.push({ url: entryUrl, relative: `src/pages/${relativePath}` });
    }
  }

  return files;
}

test('uses the same canonical WhatsApp contract', () => {
  assert.equal(WHATSAPP_NUMBER, '4915510062296');
  assert.equal(
    WHATSAPP_MESSAGE,
    'Hallo, ich interessiere mich für die Stelle als Logopäd:in / Sprachtherapeut:in in Duisburg.',
  );
  assert.equal(
    WHATSAPP_HREF,
    `https://wa.me/4915510062296?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  );
  assert.doesNotMatch(WHATSAPP_HREF, /utm_|fbclid|paid_meta/i);
  assert.equal(
    WHATSAPP_MESSAGE_TR,
    "Merhaba, Duisburg'daki dil ve konuşma terapisti pozisyonuyla ilgileniyorum.",
  );
  assert.equal(
    WHATSAPP_HREF_TR,
    `https://wa.me/4915510062296?text=${encodeURIComponent(WHATSAPP_MESSAGE_TR)}`,
  );
  assert.equal(RECRUITING_PHONE_DISPLAY, '+49 155 10062296');
  assert.equal(RECRUITING_PHONE_HREF, 'tel:+4915510062296');
  assert.equal(RECRUITING_EMAIL, 'social@logopaedie-simsek.de');
  assert.equal(RECRUITING_EMAIL_SUBJECT, 'Interesse an der Stelle in Duisburg');
  assert.equal(
    RECRUITING_EMAIL_BODY,
    'Hallo,\n\nich interessiere mich für die Stelle als Logopäd:in / Sprachtherapeut:in in Duisburg und freue mich über eine Rückmeldung.\n\nViele Grüße',
  );
  assert.equal(
    RECRUITING_EMAIL_HREF,
    `mailto:${RECRUITING_EMAIL}?subject=${encodeURIComponent(RECRUITING_EMAIL_SUBJECT)}&body=${encodeURIComponent(RECRUITING_EMAIL_BODY)}`,
  );
  assert.equal(RECRUITING_EMAIL_SUBJECT_TR, "Duisburg'daki pozisyonla ilgileniyorum");
  assert.equal(
    RECRUITING_EMAIL_BODY_TR,
    "Merhaba,\n\nDuisburg'daki dil ve konuşma terapisti pozisyonuyla ilgileniyorum ve geri dönüşünüzü bekliyorum.\n\nSaygılarımla",
  );
  assert.equal(
    RECRUITING_EMAIL_HREF_TR,
    `mailto:${RECRUITING_EMAIL}?subject=${encodeURIComponent(RECRUITING_EMAIL_SUBJECT_TR)}&body=${encodeURIComponent(RECRUITING_EMAIL_BODY_TR)}`,
  );
});

test('limits WhatsApp page links to career and privacy pages', async () => {
  for (const file of await listAstroFiles(new URL('../src/pages/', import.meta.url))) {
    const source = await readFile(file.url, 'utf8');
    if (source.includes('RecruitingWhatsAppLink')) {
      assert.ok(ALLOWED_PAGE_FILES.has(file.relative));
    }
  }
});

test('adds the WhatsApp link to the practice home career CTA', async () => {
  const careerSection = await readFile(
    new URL('../src/components/sections/Karriere.astro', import.meta.url),
    'utf8',
  );

  assert.match(careerSection, /<RecruitingWhatsAppLink\b/);
});

test('uses the recruiting-only CTA on both career pages and explains its scope', async () => {
  const [germanCareer, turkishCareer, privacy, germanTranslations, turkishTranslations] = await Promise.all([
    readFile(new URL('../src/pages/karriere.astro', import.meta.url), 'utf8'),
    readFile(new URL('../src/pages/kariyer.astro', import.meta.url), 'utf8'),
    readFile(new URL('../src/pages/datenschutz.astro', import.meta.url), 'utf8'),
    readFile(new URL('../src/i18n/de.ts', import.meta.url), 'utf8'),
    readFile(new URL('../src/i18n/tr.ts', import.meta.url), 'utf8'),
  ]);

  for (const source of [germanCareer, turkishCareer]) {
    assert.match(source, /<RecruitingWhatsAppLink\b/);
    assert.match(source, /application_whatsapp_cta/);
  }
  assert.match(turkishCareer, /href=\{WHATSAPP_HREF_TR\}/);
  assert.match(germanTranslations, /application_whatsapp_cta: "WhatsApp für Bewerbungen"/);
  assert.match(turkishTranslations, /application_whatsapp_cta: "Başvurular için WhatsApp"/);
  assert.match(privacy, /ausschließlich auf den Karriereflächen/i);
  assert.match(privacy, /dient nicht der Patient:innenkommunikation/i);
  assert.match(privacy, /WhatsApp Ireland Limited/);
});

test('renders a prominent, accessible WhatsApp-green recruiting button', async () => {
  const component = await readFile(
    new URL('../src/components/RecruitingWhatsAppLink.astro', import.meta.url),
    'utf8',
  );

  assert.match(component, /<svg[^>]*aria-hidden="true"/);
  assert.match(component, /recruiting-whatsapp-button/);
  assert.match(component, /background: #25d366/i);
  assert.match(component, /color: #102118/i);
  assert.match(component, /min-height: 44px/i);
  assert.match(component, /:focus-visible/);
  assert.match(component, /outline: 3px solid #fff/i);
});

test('keeps telephone and email as icon-labelled alternatives in every career CTA group', async () => {
  const sources = await Promise.all([
    readFile(new URL('../src/components/sections/Karriere.astro', import.meta.url), 'utf8'),
    readFile(new URL('../src/pages/karriere.astro', import.meta.url), 'utf8'),
    readFile(new URL('../src/pages/kariyer.astro', import.meta.url), 'utf8'),
  ]);

  for (const source of sources.slice(0, 2)) {
    assert.match(source, /href=\{RECRUITING_PHONE_HREF\}/);
    assert.match(source, /href=\{RECRUITING_EMAIL_HREF\}/);
    assert.match(source, /aria-hidden="true"[^>]*><path d="M22 16\.92/);
    assert.match(source, /aria-hidden="true"[^>]*><rect width="20" height="16"/);
  }

  assert.match(sources[2], /href=\{RECRUITING_PHONE_HREF\}/);
  assert.match(sources[2], /href=\{RECRUITING_EMAIL_HREF_TR\}/);
  assert.match(sources[2], /aria-hidden="true"[^>]*><path d="M22 16\.92/);
  assert.match(sources[2], /aria-hidden="true"[^>]*><rect width="20" height="16"/);
});

test('keeps every home career CTA visible in a responsive grid with sufficient phone contrast', async () => {
  const careerSection = await readFile(
    new URL('../src/components/sections/Karriere.astro', import.meta.url),
    'utf8',
  );

  assert.match(careerSection, /grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/);
  assert.match(careerSection, /<RecruitingWhatsAppLink class="w-full"/);
  assert.match(careerSection, /href=\{RECRUITING_PHONE_HREF\}[^>]*bg-accent text-white/);
  assert.doesNotMatch(careerSection, /href=\{RECRUITING_PHONE_HREF\}[^>]*bg-accent text-text/);
});

test('keeps the privacy heading responsive without changing its desktop size', async () => {
  const privacy = await readFile(
    new URL('../src/pages/datenschutz.astro', import.meta.url),
    'utf8',
  );

  assert.match(
    privacy,
    /<h1 class="[^"]*text-\[1\.625rem\][^"]*min-\[360px\]:text-\[2rem\][^"]*md:text-\[2\.75rem\][^"]*hyphens-auto[^"]*">Datenschutzerklärung<\/h1>/,
  );
});
