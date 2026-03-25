# Logopädie Şimşek – Astro Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate `index.html` (single-file, 995 lines) to a structured Astro + Tailwind v4 + TypeScript project with pixel-identical visual output.

**Architecture:** Pure Astro (no JS framework). Static site output. 12 `.astro` components compose into one page. Tailwind v4 `@theme` tokens replace CSS variables. All JS (hamburger, scroll reveal, smooth scroll, form feedback) lives as plain `<script>` blocks in their respective components.

**Tech Stack:** Astro (latest), Tailwind CSS v4 + `@tailwindcss/vite`, TypeScript 5 (strict), Google Fonts CDN (Fraunces, Plus Jakarta Sans)

---

## File Map

| File | Responsibility |
|---|---|
| `astro.config.ts` | Astro config: static output, Tailwind v4 Vite plugin |
| `tsconfig.json` | TypeScript strict mode |
| `src/styles/global.css` | `@import "tailwindcss"`, `@theme` tokens, `:root` layout vars, custom CSS classes |
| `src/layouts/Layout.astro` | `<html>`, `<head>`, fonts, global scripts (reveal, smooth-scroll) |
| `src/pages/index.astro` | Pure composition of all components |
| `src/components/Header.astro` | Fixed white header, logo SVG, CTA phone/address buttons |
| `src/components/Nav.astro` | Fixed dark navbar, desktop links, hamburger, mobile dropdown |
| `src/components/sections/Hero.astro` | Full-height hero, eyebrow, title, subtitle, actions, trust badges |
| `src/components/sections/About.astro` | Quote, about text, stats grid (2×2) |
| `src/components/sections/Services.astro` | 4 service cards in 2-col grid |
| `src/components/sections/Bilingual.astro` | Green USP section, language blocks |
| `src/components/sections/Team.astro` | 6 team cards (5 members + 1 CTA card) |
| `src/components/sections/Praxis.astro` | Location info, hours, map placeholder |
| `src/components/sections/Karriere.astro` | Benefits grid, career CTA |
| `src/components/sections/Kontakt.astro` | Contact form + contact info cards |
| `src/components/Footer.astro` | Dark footer, logo, links, social icons, copyright |

---

## Task 1: Project Initialization

**Files:**
- Create: `astro.config.ts`
- Create: `tsconfig.json`
- Create: `package.json` (via `npm create astro`)

- [ ] **Step 1: Scaffold Astro project**

Run in `/Users/sinanucar/Development/test-1/`:

```bash
npm create astro@latest . -- --template minimal --typescript strictest --no-git --install
```

When prompted: accept defaults. This creates `src/pages/index.astro`, `tsconfig.json`, `package.json`, `astro.config.ts`.

- [ ] **Step 2: Install Tailwind v4**

```bash
npm install tailwindcss @tailwindcss/vite
```

- [ ] **Step 3: Configure `astro.config.ts`**

Replace generated content with:

```ts
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 4: Verify TypeScript config**

Open `tsconfig.json` and confirm `"strict": true` is set (the `--typescript strictest` flag sets this). If not, add it manually:

```json
{
  "extends": "astro/tsconfigs/strictest",
  "compilerOptions": {
    "strict": true
  }
}
```

- [ ] **Step 5: Create directory structure**

```bash
mkdir -p src/styles src/layouts src/components/sections
```

- [ ] **Step 6: Verify dev server starts**

```bash
npm run dev
```

Expected: Astro dev server running at `http://localhost:4321`

- [ ] **Step 7: Commit**

```bash
git init
git add .
git commit -m "chore: init astro project with tailwind v4 and typescript"
```

---

## Task 2: Global CSS (Theme Tokens + Custom Classes)

**Files:**
- Create: `src/styles/global.css`

- [ ] **Step 1: Create `src/styles/global.css`**

```css
@import "tailwindcss";

/* ─── Tailwind v4 Theme Tokens ─── */
@theme {
  /* Colors */
  --color-bg: #FAF8F5;
  --color-bg-alt: #F3EDE5;
  --color-surface: #FFFFFF;
  --color-surface-2: #F0EBE3;
  --color-primary: #2A7F6F;
  --color-primary-dark: #1F6056;
  --color-primary-light: #E6F4F1;
  --color-accent: #C4714F;
  --color-accent-dark: #A85D3D;
  --color-accent-light: #F9EDE7;
  --color-text: #1C1916;
  --color-text-muted: #6B6560;
  --color-text-light: #9A928D;
  --color-border: #E2D8CF;
  --color-topbar-green: #8DC63F;
  --color-topbar-dark: #1C2A38;

  /* Typography */
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;

  /* Border radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
}

/* ─── Layout Constants (plain CSS — used in calc() and fixed positioning) ─── */
:root {
  --max-w: 1200px;
  --header-h: 80px;
  --nav-h: 50px;
  --shadow-sm: 0 2px 8px rgba(28,25,22,.06);
  --shadow-md: 0 4px 24px rgba(28,25,22,.08);
  --shadow-lg: 0 12px 48px rgba(28,25,22,.12);
}

@media (max-width: 768px) {
  :root {
    --header-h: 64px;
    --nav-h: 48px;
  }
}

/* ─── Base Reset ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body { font-family: var(--font-body); background: var(--color-bg); color: var(--color-text); line-height: 1.6; overflow-x: hidden; }
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }

/* ─── Custom Utility Classes ─── */
.container {
  width: min(var(--max-w), 100%);
  margin-inline: auto;
  padding-inline: 24px;
}

.label {
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  line-height: 1.15;
  color: var(--color-text);
}

.section-subtitle {
  font-size: 1.0625rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 600px;
}

/* ─── Buttons ─── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: .9375rem;
  font-weight: 600;
  transition: all .2s ease;
  white-space: nowrap;
  cursor: pointer;
  border: 2px solid transparent;
  min-height: 48px;
}
.btn-primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
.btn-primary:hover { background: var(--color-primary-dark); border-color: var(--color-primary-dark); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(42,127,111,.3); }
.btn-accent { background: var(--color-accent); color: #fff; border-color: var(--color-accent); }
.btn-accent:hover { background: var(--color-accent-dark); border-color: var(--color-accent-dark); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(196,113,79,.3); }
.btn-ghost { background: transparent; color: var(--color-text); border-color: var(--color-border); }
.btn-ghost:hover { background: var(--color-surface); border-color: var(--color-text-muted); transform: translateY(-1px); }
.btn-outline-white { background: transparent; color: #fff; border-color: rgba(255,255,255,.5); }
.btn-outline-white:hover { background: rgba(255,255,255,.12); border-color: #fff; }

/* ─── Scroll Reveal ─── */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .65s ease, transform .65s ease; }
.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: .1s; }
.reveal-delay-2 { transition-delay: .2s; }
.reveal-delay-3 { transition-delay: .3s; }
.reveal-delay-4 { transition-delay: .4s; }
.reveal-delay-5 { transition-delay: .5s; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

/* ─── Wave Divider ─── */
.wave-divider { display: block; width: 100%; overflow: hidden; line-height: 0; }
.wave-divider svg { display: block; width: 100%; }

/* ─── Tag ─── */
.tag {
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-size: .75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 100px;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add tailwind v4 theme tokens and custom utility classes"
```

---

## Task 3: Layout.astro

**Files:**
- Create: `src/layouts/Layout.astro`

- [ ] **Step 1: Create `src/layouts/Layout.astro`**

```astro
---
interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
import '../styles/global.css';
---
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <title>{title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <slot />
    <script>
      // Scroll Reveal
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

      // Smooth Scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const id = (anchor as HTMLAnchorElement).getAttribute('href');
          if (id === '#') return;
          const target = document.querySelector(id!);
          if (target) {
            e.preventDefault();
            const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 80;
            const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 50;
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY - headerH - navH - 16,
              behavior: 'smooth',
            });
          }
        });
      });
    </script>
  </body>
</html>
```

> **Note on CSS import:** In Astro with Tailwind v4, import the CSS file in the Layout rather than via `astro.config`. This ensures Tailwind processes it via the Vite plugin.

- [ ] **Step 2: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: add layout with fonts, global scripts (reveal, smooth-scroll)"
```

---

## Task 4: Header.astro

**Files:**
- Create: `src/components/Header.astro`

- [ ] **Step 1: Create `src/components/Header.astro`**

Copy the `<header class="site-header">` block from `index.html` lines 260–293 verbatim. Add the component script at the bottom:

```astro
---
// No props — static content
---

<header class="site-header" id="site-header" role="banner">
  <!-- paste exact HTML from index.html lines 261–292 -->
</header>

<style>
  .site-header {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 1001; height: var(--header-h);
    background: #fff; border-bottom: 1px solid var(--color-border);
    box-shadow: 0 1px 4px rgba(0,0,0,.06);
  }
  /* ... copy all .site-header, .header__* rules from index.html exactly */
</style>

<script>
  const siteHeader = document.getElementById('site-header') as HTMLElement;
  window.addEventListener('scroll', () => {
    siteHeader.style.boxShadow = window.scrollY > 10
      ? '0 2px 12px rgba(0,0,0,.1)'
      : '0 1px 4px rgba(0,0,0,.06)';
  }, { passive: true });
</script>
```

> **Tip:** Copy each section's CSS from `index.html` into a `<style>` block in the component. Scoped styles in Astro are fine for component-specific rules.

- [ ] **Step 2: Build check**

```bash
npm run build
```

Expected: Build succeeds, no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: add Header component with logo and contact buttons"
```

---

## Task 5: Nav.astro

**Files:**
- Create: `src/components/Nav.astro`

- [ ] **Step 1: Create `src/components/Nav.astro`**

Copy the `<nav class="site-nav">` block (lines 296–339) and `<div class="nav__mobile">` block (lines 341–349) from `index.html`. Include all `.site-nav`, `.nav__*` CSS and the hamburger script:

```astro
---
// No props
---

<nav class="site-nav" id="site-nav" role="navigation" aria-label="Hauptnavigation">
  <!-- desktop nav links, addr button, phone link, hamburger -->
  <!-- copy from index.html lines 297–339 exactly -->
</nav>

<div class="nav__mobile" id="mobileMenu" role="navigation" aria-label="Mobile Navigation">
  <!-- copy from index.html lines 342–349 exactly -->
</div>

<style>
  /* copy all .site-nav, .nav__*, .nav__mobile rules from index.html */
</style>

<script>
  const hamburger = document.getElementById('hamburger') as HTMLButtonElement;
  const mobileMenu = document.getElementById('mobileMenu') as HTMLElement;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  });

  document.querySelectorAll('.mobile-link, .nav__mobile .btn').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Menü öffnen');
    });
  });
</script>
```

> **Key behaviors to preserve:**
> - `.nav__hamburger.open` animates bars → X via CSS (`span:nth-child(1/3)` transform)
> - `.nav__addr-long` hidden at ≤767px; `.nav__addr-short` shown instead
> - `.nav__links` hidden at ≤991px; hamburger shown

- [ ] **Step 2: Build check**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.astro
git commit -m "feat: add Nav component with hamburger menu and mobile dropdown"
```

---

## Task 6: Hero.astro

**Files:**
- Create: `src/components/sections/Hero.astro`

- [ ] **Step 1: Create `src/components/sections/Hero.astro`**

Copy `<section class="hero">` (lines 354–400) from `index.html`. Include `.hero`, `.hero__*`, `.trust-badge` CSS:

```astro
---
// No props
---

<section class="hero" aria-labelledby="hero-heading">
  <!-- copy from index.html lines 355–400 exactly -->
  <!-- Note: wave-divider inline style="margin-top:..." → add class or keep as Tailwind -->
</section>

<style>
  /* copy all .hero, .hero__*, .trust-badge rules */
</style>
```

> **Inline styles to convert:** The original has no inline styles in the Hero section — it's clean.

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Hero.astro
git commit -m "feat: add Hero section"
```

---

## Task 7: About.astro

**Files:**
- Create: `src/components/sections/About.astro`

- [ ] **Step 1: Create `src/components/sections/About.astro`**

Copy `<section class="about">` (lines 403–443). Include `.about`, `.about__*`, `.stat-card` CSS:

```astro
---
// No props
---

<section class="about" id="about" aria-labelledby="about-heading">
  <!-- copy from index.html lines 404–443 exactly -->
</section>

<style>
  /* copy .about, .about__*, .stat-card rules */
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/About.astro
git commit -m "feat: add About section with quote and stats grid"
```

---

## Task 8: Services.astro

**Files:**
- Create: `src/components/sections/Services.astro`

- [ ] **Step 1: Define TypeScript interface and data array in frontmatter**

```astro
---
interface ServiceCard {
  title: string;
  text: string;
  tags: string[];
}

const services: ServiceCard[] = [
  {
    title: 'Sprachstörungen',
    text: 'Diagnostik und Therapie bei Beeinträchtigungen im Sprachverstehen und Sprachausdruck – von der kindlichen Sprachentwicklungsverzögerung bis zur erworbenen Aphasie nach Schlaganfall.',
    tags: ['Sprachentwicklung', 'Aphasie', 'Frühförderung'],
  },
  {
    title: 'Sprechstörungen',
    text: 'Behandlung motorisch bedingter Sprechstörungen sowie Redefluss- und Aussprachestörungen. Ob Stottern, Poltern oder Lispeln – wir begleiten Sie auf Ihrem Weg.',
    tags: ['Dysarthrie', 'Stottern', 'Lispeln', 'Sprechapraxie'],
  },
  {
    title: 'Stimmstörungen',
    text: 'Therapie bei funktionellen und organischen Stimmstörungen. Wir helfen dabei, die Stimme als wichtigstes Kommunikationsmittel zu stärken und langfristig zu schützen.',
    tags: ['Dysphonie', 'Stimme', 'Funktionell'],
  },
  {
    title: 'Schluckstörungen (Dysphagie)',
    text: 'Diagnostik und Therapie von Schluckstörungen bei Erwachsenen und Kindern – zur Sicherung der Ernährung, Lebensqualität und Vermeidung von Folgeerkrankungen.',
    tags: ['Dysphagie', 'Schlucken', 'Ernährung'],
  },
];
---
```

> **Note on SVG complexity:** The 4 service icons each use different SVG structures (multi-path). The `svgPath` field was removed from the interface. Use the typed array only for `title`, `text`, `tags` — render the SVG icon inline per card, copying from `index.html` lines 456–502.

- [ ] **Step 2: Build the component with typed data**

```astro
<section class="services" id="leistungen" aria-labelledby="services-heading">
  <div class="container">
    <header class="services__header">
      <!-- header content -->
    </header>
    <div class="services__grid">
      <!-- 4 service card articles — copy from index.html lines 454–503 -->
    </div>
  </div>
  <!-- wave divider with mt-20 instead of inline style -->
</section>

<style>
  /* copy .services, .services__*, .service-card, .service-card__* rules */
</style>
```

- [ ] **Step 3: Replace inline `style="margin-top:80px;"` on wave divider**

Replace with a CSS class in `<style>`:

```css
.services .wave-divider { margin-top: 80px; }
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Services.astro
git commit -m "feat: add Services section with 4 therapy cards"
```

---

## Task 9: Bilingual.astro

**Files:**
- Create: `src/components/sections/Bilingual.astro`

- [ ] **Step 1: Create `src/components/sections/Bilingual.astro`**

Copy `<section class="bilingual">` (lines 513–548). Include all `.bilingual`, `.lang-block*` CSS.

**Inline styles to convert** (lines 537–539):

```html
<!-- Original inline style on the extra block inside bilingual__card: -->
<div style="padding-top:24px;border-top:1px solid rgba(255,255,255,.15);">
  <p style="font-size:.875rem;color:rgba(255,255,255,.75);line-height:1.6;">...</p>
</div>
```

Convert to named classes:

```css
/* in <style> */
.bilingual__card-footer {
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,.15);
}
.bilingual__card-footer p {
  font-size: .875rem;
  color: rgba(255,255,255,.75);
  line-height: 1.6;
}
```

And the CTA link inline `style="margin-top:32px;"` → add `class="btn btn-outline-white bilingual__cta-btn"` with:

```css
.bilingual__cta-btn { margin-top: 32px; }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Bilingual.astro
git commit -m "feat: add Bilingual section, replace inline styles with CSS classes"
```

---

## Task 10: Team.astro

**Files:**
- Create: `src/components/sections/Team.astro`

- [ ] **Step 1: Define TypeScript interface and data array**

```astro
---
interface TeamMember {
  initials: string;
  name: string;
  role: string;
  extra: string;
  isLead?: boolean;
  badge?: string;
}

const members: TeamMember[] = [
  { initials: 'EŞ', name: 'Emel Şimşek-Uçar', role: 'Staatl. gepr. Logopädin', extra: 'Gründerin und Leitung der Praxis...', isLead: true, badge: 'Praxisleitung' },
  { initials: 'SP', name: 'Sarah P.', role: 'Logopädin B.Sc.', extra: 'Bachelor of Science in Logopädie...' },
  { initials: 'LK', name: 'Lena K.', role: 'Logopädin B.H.', extra: 'Bachelor of Health in Logopädie...' },
  { initials: 'MA', name: 'Mira A.', role: 'Logopädin', extra: 'Fokus auf Redeflusstörungen...' },
  { initials: 'YD', name: 'Yasemin D.', role: 'Logopädin', extra: 'Zweisprachige Logopädin (DE/TR)...' },
];
---
```

- [ ] **Step 2: Build the component**

Render the 5 team members via the array using `{members.map(...)}`. The 6th card ("Du fehlst noch hier!") is rendered as a separate static block — it has special styling (gradient background, dashed border, centered content, CTA button) that doesn't fit the member pattern.

**Inline styles on the 6th card to convert** (lines 610–618): Add a `.team-card--vacant` CSS class.

```css
.team-card--vacant {
  background: linear-gradient(135deg, var(--color-accent-light), var(--color-primary-light));
  border: 2px dashed var(--color-border);
  display: flex;
  flex-direction: column;
}
.team-card--vacant .team-card__avatar {
  background: transparent;
  height: 200px;
}
.team-card--vacant .team-card__body {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Team.astro
git commit -m "feat: add Team section with typed member array and vacant card"
```

---

## Task 11: Praxis.astro

**Files:**
- Create: `src/components/sections/Praxis.astro`

- [ ] **Step 1: Create `src/components/sections/Praxis.astro`**

Copy `<section class="praxis">` (lines 631–). Include `.praxis`, `.praxis__*`, `.info-row`, `.map-placeholder`, `.hours-grid` CSS.

**Inline style to convert** (line 633):

```html
<!-- Original: -->
<div style="margin-bottom:56px;display:flex;flex-direction:column;gap:12px;">
```

Convert to `.praxis__header` class:

```css
.praxis__header { margin-bottom: 56px; display: flex; flex-direction: column; gap: 12px; }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Praxis.astro
git commit -m "feat: add Praxis section with location info, hours, map placeholder"
```

---

## Task 12: Karriere.astro

**Files:**
- Create: `src/components/sections/Karriere.astro`

- [ ] **Step 1: Define typed benefit data and build component**

```astro
---
interface BenefitCard {
  icon: string; // SVG viewBox path strings (keep as inline SVG for complex icons)
  title: string;
  desc: string;
}
---
```

Copy `<section class="karriere">` content. Include `.karriere`, `.benefits-grid`, `.benefit-card` CSS.

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Karriere.astro
git commit -m "feat: add Karriere section with benefits grid and career CTA"
```

---

## Task 13: Kontakt.astro

**Files:**
- Create: `src/components/sections/Kontakt.astro`

- [ ] **Step 1: Create `src/components/sections/Kontakt.astro`**

Copy `<section class="kontakt">` content. Include all `.kontakt`, `.form-*`, `.contact-card` CSS.

Add the form script at the bottom:

```astro
<script>
  const form = document.getElementById('contactForm') as HTMLFormElement | null;
  if (form) {
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const originalBtnClone = submitBtn.cloneNode(true) as HTMLButtonElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('submitBtn') as HTMLButtonElement;
      btn.textContent = '✓ Anfrage gesendet!';
      btn.style.background = 'var(--color-primary)';
      btn.disabled = true;
      setTimeout(() => {
        btn.replaceWith(originalBtnClone.cloneNode(true));
      }, 4000);
    });
  }
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Kontakt.astro
git commit -m "feat: add Kontakt section with form and submit feedback"
```

---

## Task 14: Footer.astro

**Files:**
- Create: `src/components/Footer.astro`

- [ ] **Step 1: Create `src/components/Footer.astro`**

Copy `<footer>` block (lines ~850–920). Include `footer`, `.footer__*`, `.social-btn` CSS.

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: add Footer component"
```

---

## Task 15: Compose index.astro

**Files:**
- Modify: `src/pages/index.astro` (replace generated placeholder with full composition)

- [ ] **Step 1: Replace `src/pages/index.astro` with full composition**

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/sections/Hero.astro';
import About from '../components/sections/About.astro';
import Services from '../components/sections/Services.astro';
import Bilingual from '../components/sections/Bilingual.astro';
import Team from '../components/sections/Team.astro';
import Praxis from '../components/sections/Praxis.astro';
import Karriere from '../components/sections/Karriere.astro';
import Kontakt from '../components/sections/Kontakt.astro';
import Footer from '../components/Footer.astro';
---

<Layout
  title="Logopädie Şimşek – Sprechen. Verstehen. Verbinden."
  description="Praxis für Logopädie Şimşek – Zweisprachige Sprachtherapie (Deutsch & Türkisch) für alle Altersgruppen im Herzen von Duisburg. Staatlich geprüfte Logopädin Emel Şimşek-Uçar."
>
  <Header />
  <Nav />
  <main>
    <Hero />
    <About />
    <Services />
    <Bilingual />
    <Team />
    <Praxis />
    <Karriere />
    <Kontakt />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: compose index page from all section components"
```

---

## Task 16: Final Build Verification

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: Successful build with no errors. Output in `dist/`.

- [ ] **Step 2: Preview the built site**

```bash
npm run preview
```

Open `http://localhost:4321` and visually compare against the original `index.html` opened directly in a browser.

**Checklist — verify each section:**
- [ ] Fixed header visible with logo and contact buttons
- [ ] Dark nav bar with all 7 links; hamburger visible on mobile
- [ ] Mobile menu opens/closes when hamburger is clicked
- [ ] Hero section: eyebrow, title, subtitle, two CTA buttons, 4 trust badges
- [ ] About section: quote left, stats grid right
- [ ] Services: 4 cards in 2-column grid with tags
- [ ] Bilingual: green background, language blocks, CTA button
- [ ] Team: 5 member cards + 1 vacant card
- [ ] Praxis: info rows, hours grid, map placeholder
- [ ] Karriere: benefits grid, career CTA block
- [ ] Kontakt: form + 3 contact cards
- [ ] Footer: dark background, links, social buttons
- [ ] Scroll reveal animations work
- [ ] Smooth scroll to anchors works
- [ ] Form submit shows success message for 4 seconds
- [ ] No inline styles remaining in HTML output

- [ ] **Step 3: Check TypeScript**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final build verification — astro migration complete"
```
