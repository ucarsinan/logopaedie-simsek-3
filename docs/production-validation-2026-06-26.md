# Production Validation Notes - 2026-06-26

## Scope
- Multi-agent reality follow-up for `logopaedie-simsek-3`.
- Focus: production SEO/schema risks, content drift, project metadata drift, privacy/analytics mismatch.

## Fixed Locally
- Removed Google Analytics script loading and aligned `datenschutz` text to state that no GA is loaded.
- Removed stale Resend/contact-form documentation from active agent docs; current flow is phone-first.
- Renamed package metadata from `test-1` to `logopaedie-simsek-3`.
- Aligned Mara Nießalla snippets across DE/TR homepage/team contexts with her profile: adult therapy, house visits as needed, also children and adolescents.
- Replaced abbreviated visible practice names such as `Praxis Şimşek` with `Praxis für Logopädie Şimşek` phrasing. `#TeamSimsek` remains as the career/team slogan.
- Set fixed `JobPosting.datePosted` to `2026-04-23`.
- Removed non-reciprocal `tr` hreflang from `/tuerkische-logopaedie-duisburg/`.
- Added `trailingSlash: 'always'` in Astro and `"trailingSlash": true` in Vercel config.
- Normalized marked JSON-LD `url`, service URLs, and Breadcrumb `item` URLs to slash canonical forms.
- Removed duplicate page-level business schemas from contact/location pages; the central `Layout.astro` business schema remains authoritative.
- Softened career claims that need offer-level proof: salary, 4-day week, training cost coverage, and immediate-start wording.

## Verified Locally
- `npx astro check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: passed.
- `.vercel/output/config.json` now contains 308 redirect rules for slashless non-file paths.
- Sitemap generation still succeeds.

## Still Requires Post-Deploy Validation
- Google Search Console coverage/indexing.
- Google Rich Results Test for homepage, contact, career, therapy detail, and Turkish pages.
- PageSpeed/Core Web Vitals on production after deploy.
- Live redirect spot checks for slashless URLs after deployment.
- Mobile accessibility smoke test on production.
