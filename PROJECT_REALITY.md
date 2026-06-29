# PROJECT_REALITY

Last audit: 2026-06-26
Recommendation: ship
Confidence: high

## Core Problem
- Problem: Patients and job applicants in Duisburg need a trustworthy, findable, bilingual DE/TR website for Praxis für Logopädie Şimşek.
- Affected user: German- and Turkish-speaking patients, parents, caregivers, referring contacts, and logopedics applicants.
- Painful current workflow: Users must quickly understand therapy scope, location, cost/rezept basics, bilingual availability, and how to book without confusing legacy URLs.
- Desired real-world outcome: Users find the right page via search or old links, trust the practice, and call the practice for appointments or applications.
- Success criteria: Production site is crawlable, builds cleanly, core DE/TR pages are correct, legacy URLs redirect, contact phone/address are prominent, and Search Console/call data shows useful traffic.

## Current State
- Implemented: Astro 6 static site with Tailwind CSS v4, Vercel adapter, DE/TR pages, service pages, team/career/contact/legal pages, JSON-LD, robots.txt, sitemap filtering, and extensive legacy redirects.
- Implemented: Production domain `https://logopaedie-simsek.de/` is reachable and exposes the core offer, phone number, address, DE/TR positioning, service content, and legal footer links.
- Implemented: Contact flow is documented and implemented as phone-first; Resend/contact-form drift was removed from active docs.
- Implemented: GA script loading was removed and Datenschutzerklärung now states that no Google Analytics is loaded.
- Implemented: JobPosting uses a fixed `datePosted`; trailing slash canonical behavior is configured in Astro and Vercel; marked Schema/Breadcrumb URLs were normalized; duplicate page-level business schemas were removed; career claims were softened where proof was not in the repo.
- Not verified: Search Console status, Google Rich Results output after deployment, real conversion/call performance, and full visual regression matrix.
- Last stopping point: `npm run build` and `npx astro check` both pass on 2026-06-26.

## Reality Findings
- Local evidence: `package.json`, `astro.config.ts`, `vercel.json`, `src/pages/**`, `src/i18n/**`, `public/robots.txt`, and generated `dist/sitemap-0.xml` confirm the implemented static website and SEO structure.
- Local evidence: No local tests/CI were found beyond Astro check/build commands.
- External sources: Astro confirms static Astro sites can deploy to Vercel and Vercel auto-detects Astro; Tailwind documents the `@tailwindcss/vite` setup used here; Astro sitemap supports URL filtering; Google LocalBusiness requires `name` and `address` and recommends richer fields; WCAG 2.2 frames accessibility around perceivable, operable, understandable, and robust content.
- Best-practice implications: The technical stack is aligned with official docs. The site should prioritize factual local-business consistency, crawlability, structured-data validation, accessibility checks, and production observability over more visual polish.
- Key uncertainty: Whether the deployed site is producing appointment calls and whether Google accepts all structured data after the next deployment.

## Gaps And Risks
- Missing essentials: Production Search Console/Rich Results/PageSpeed/accessibility evidence still needs to be collected after deployment.
- Fixed in current working tree: package identity, Resend/contact-form doc drift, Mara content drift, GA/privacy mismatch, JobPosting dynamic date, many slashless schema URLs, and trailing slash redirect config.
- Luftschloss/drift warnings: More SEO landing pages, visual assets, or AI/LLM optimization work would be drift until production search/call data shows the next actual bottleneck.
- Risks: Static build and type check do not prove Search Console coverage, rich-result eligibility, or real conversion performance.

## Next Logical Step
1. Step: Deploy the current fix set, then run post-deploy validation: Search Console coverage, Rich Results Test for LocalBusiness/JobPosting/Breadcrumb/FAQ, PageSpeed/Core Web Vitals, redirect spot checks, and mobile accessibility smoke test.
   Why: Local build/check pass and Vercel output now includes trailing-slash redirects; remaining proof requires the deployed URL and Google tools.
   Validation: Record tested URLs, tool outcomes, failures, and fixes in `docs/production-validation-2026-06-26.md` or a successor note.
   Stop/continue rule: If crawl/index/rich-result/contact issues appear, fix those before adding features; if clean, move to conversion/content validation.

## Do Not Build Yet
- Do not add more landing pages, visual redesigns, LLM/AI SEO layers, or contact-form infrastructure until production data proves they solve a real bottleneck.
- Do not reintroduce Resend/contact forms unless the practice explicitly wants email-based appointment handling despite the current phone-only workflow.
- Do not make further career-page promises without verifying the actual current hiring offer.

## Source Links
- Astro Vercel deployment: https://docs.astro.build/en/guides/deploy/vercel/
- Astro sitemap integration: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Tailwind CSS with Vite: https://tailwindcss.com/docs/installation/using-vite
- Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google JobPosting structured data: https://developers.google.com/search/docs/appearance/structured-data/job-posting
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Production site: https://logopaedie-simsek.de/
