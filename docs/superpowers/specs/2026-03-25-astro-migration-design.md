# Design Spec: Logopädie Şimşek – Astro Migration

**Date:** 2026-03-25
**Project:** test-1 (logopaedie-simsek)
**Approach:** Pure Astro + Tailwind v4 + TypeScript (latest versions)
**Goal:** 1:1 visual migration of `index.html` to a structured Astro project

---

## Overview

Migrate a single-file `index.html` (~995 lines, inline CSS + JS) into a maintainable Astro project. Visual output must be pixel-identical. No new features. No design changes.

---

## Tech Stack

| Technology | Version | Notes |
|---|---|---|
| Astro | latest | Static site generation, zero JS by default |
| Tailwind CSS | v4 latest | CSS-based config via `@theme`, no `tailwind.config.js` |
| TypeScript | 5 latest | Strict mode, typed component props and data arrays |
| Google Fonts | CDN | Fraunces + Plus Jakarta Sans (via `<link>` in Layout) |

---

## Project Structure

```
test-1/
├── astro.config.ts
├── tsconfig.json
├── package.json
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   └── sections/
│   │       ├── Hero.astro
│   │       ├── About.astro
│   │       ├── Services.astro
│   │       ├── Bilingual.astro
│   │       ├── Team.astro
│   │       ├── Praxis.astro
│   │       ├── Karriere.astro
│   │       └── Kontakt.astro
│   └── styles/
│       └── global.css
```

---

## Architecture

### Layout.astro

Wraps every page. Contains:
- `<html lang="de">`
- `<head>` with meta, title, font preconnects, font stylesheet
- `<slot />` for page content
- Global `<script>` for: Scroll Reveal (IntersectionObserver), Smooth Scroll

### pages/index.astro

Pure composition — imports and renders all section components in order:

```astro
<Layout title="Logopädie Şimşek – Sprechen. Verstehen. Verbinden." description="...">
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

---

## Tailwind v4 Theme

CSS variables from `index.html` mapped 1:1 to Tailwind v4 `@theme` tokens in `src/styles/global.css`:

```css
@import "tailwindcss";

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

/* Layout constants — kept as plain CSS custom properties (not @theme tokens,
   since they are used in calc() and fixed positioning, not as Tailwind utilities) */
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
```

Custom utility classes that cannot be expressed with Tailwind utilities alone (`.reveal`, `.btn`, `.label`, `.section-title`, `.section-subtitle`, `.wave-divider`) are kept as named CSS classes in `global.css` below the theme block.

---

## Component Details

### Header.astro
- Fixed white header (`position: fixed; top: 0; z-index: 1001`)
- Logo: inline SVG + practice name + subtitle
- CTA buttons: address (hidden on mobile) + phone number
- `<script>`: scroll shadow enhancement on `window.scroll`

### Nav.astro
- Fixed dark navbar (`background: var(--color-topbar-dark); top: var(--header-h)`)
- Desktop: 7 nav links with icons
- Tablet (≤991px): nav links hidden, address button shown; hamburger shown
- Mobile (≤767px): phone link also shown in nav bar; address button shows short text (`.nav__addr-short`) while long text (`.nav__addr-long`) is hidden via CSS
- Hamburger button: toggles `.open` on **both** `#mobileMenu` (shows dropdown) and `.nav__hamburger` itself (animates 3 bars → X via CSS)
- `<script>`: hamburger toggle (both elements), `aria-expanded` update, close-on-link-click

### Section Components

Each section component:
- Receives no props (all content is static/hardcoded in German)
- Contains its own markup with Tailwind utility classes
- Data arrays (services, team members, benefits) typed with TypeScript interfaces in the component frontmatter

**TypeScript interfaces used (defined locally in each component's frontmatter):**

`Services.astro`:

```ts
interface ServiceCard {
  icon: string;        // SVG path data
  title: string;
  text: string;
  tags: string[];
}
```

`Team.astro`:

```ts
interface TeamMember {
  initials: string;
  name: string;
  role: string;
  extra: string;
  isLead?: boolean;
  badge?: string;
}
```

`Karriere.astro`:

```ts
interface BenefitCard {
  icon: string;
  title: string;
  desc: string;
}
```

### Kontakt.astro
- Contact form with `id="contactForm"`
- `<script>`: form submit feedback (replaces button text, disables for 4s)

### Footer.astro
- Dark background, logo, nav links, social icon buttons, copyright + legal links

---

## JavaScript Behavior Mapping

| Original behavior | Location in new structure | Implementation |
|---|---|---|
| Header scroll shadow | `Header.astro` `<script>` | `window.addEventListener('scroll', ...)` |
| Hamburger menu toggle | `Nav.astro` `<script>` | Toggle `.open` class on `#mobileMenu` |
| Scroll Reveal | `Layout.astro` `<script>` | `IntersectionObserver` on `.reveal` elements |
| Smooth scroll | `Layout.astro` `<script>` | `querySelectorAll('a[href^="#"]')` |
| Form submit feedback | `Kontakt.astro` `<script>` | `form.addEventListener('submit', ...)` |

---

## Styling Strategy

1. **Tailwind utilities first** — use Tailwind classes for spacing, flexbox, grid, colors, typography wherever possible.
2. **Custom CSS for complex patterns** — keep `.btn`, `.reveal`, `.wave-divider`, `.label`, `.section-title` as named CSS classes in `global.css` (these have complex multi-property definitions that are cleaner as named classes than Tailwind).
3. **No inline styles** — replace all `style=""` attributes with Tailwind classes or CSS custom properties.
4. **Responsive** — all `@media` breakpoints from the original are replicated using Tailwind responsive prefixes (`md:`, `lg:`, etc.).

---

## Constraints

- **1:1 visual fidelity** — no design changes, no feature additions
- **Static output** — `output: 'static'` in `astro.config.ts`
- **No external component library** — no shadcn, no UI framework
- **No form backend** — form submit is still a frontend-only simulation
- **All SVGs inline** — kept as inline SVG (no sprite sheet or icon library)

---

## Build & Dev Commands

Tailwind v4 requires `@tailwindcss/vite` — **not** `@astrojs/tailwind` (that is the legacy v3 integration):

```bash
npm create astro@latest . -- --template minimal --typescript strict --no-git
npm install tailwindcss @tailwindcss/vite
npm run dev    # localhost:4321
npm run build  # dist/
```

`astro.config.ts` must register the Vite plugin manually:

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
