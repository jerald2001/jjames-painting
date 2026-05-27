# Client Checklist — J. James Painting Contractors

What we still need from the client to finish and launch the new site, grouped
by priority. "Where it lives" points at the code that consumes each item.

**Scrape status legend:**
- ✅ **Confirmed (official site)** — found on jjamespaintingcontractorsqld.com.au and already populated in code.
- ⚠️ **Unverified lead** — found on a third-party directory (Yellow Pages / Google), NOT on the official site. Not written into code; client must confirm.
- ❌ **Not found** — needs the client to supply from scratch.

Most empty fields are conditionally hidden in the UI, so the site renders
cleanly today — supplying them switches the relevant blocks back on.

---

## 1. Launch blockers — cannot go live without these

### 1.1 Quote + agent form delivery
- **What:** The `/contact` quote form and `/for-agents` partner form currently validate input and return a success reference, but only `console.log` the submission — **leads are not delivered anywhere**. For a lead-gen site this must be wired before launch.
- **Where it lives:** `src/app/contact/actions.ts`, `src/app/for-agents/actions.ts` (both note "Phase 5 wires real delivery — Resend or Formspree").
- **Found via scraping:** n/a (engineering task).
- **Client needs to supply:**
  1. **Lead destination email** — the inbox that should receive enquiries. Likely `jjamespainting@gmail.com` (scraped) — confirm, or give a preferred address.
  2. **Delivery method decision:** either a sending domain we can verify with Resend (e.g. `mail.jjamespainting...`), or approval to use a Formspree/transactional fallback that forwards to the Gmail inbox. Format: written go-ahead + domain DNS access if using Resend.

---

## 2. Pre-launch recommended — get these before DNS cutover

### 2.1 Business email (verify)
- **What:** Public contact email, shown in the footer and used for replies.
- **Where it lives:** `src/lib/brand.ts` → `BUSINESS.email`; rendered in `src/components/layout/footer.tsx`.
- **Found via scraping:** ✅ `jjamespainting@gmail.com` (official site — homepage footer + about). **Already populated.**
- **Client needs to supply:** Confirm this is the right inbound address, or replace. Format: single email address.

### 2.2 QBCC licence (verify)
- **What:** Queensland Building and Construction Commission licence number, shown in footer + about credentials block, and a compliance/trust signal.
- **Where it lives:** `src/lib/brand.ts` → `BUSINESS.qbccLicense`; `footer.tsx`; `src/app/about/page.tsx` credentials block.
- **Found via scraping:** ✅ Company Lic. **1281728** (populated) and Owner Lic. **1149471** (noted in code comment) — both from the official site (home + about).
- **Client needs to supply:** Confirm the licence number(s) are current/active and which to display publicly. Format: confirm number + licence class. (Worth a QBCC register check before launch since it's a public legal claim.)

### 2.3 Physical address + service-area decision
- **What:** Street/postal address (or a confirmed "service-area only, no public address"). Needed for accurate LocalBusiness schema and to align with Google Business Profile.
- **Where it lives:** `src/lib/schema.ts` `address` (currently only `addressLocality: "Sunshine Coast"`, no street/postcode); `src/lib/brand.ts` (no address field exists yet — would be added).
- **Found via scraping:** ⚠️ Unverified lead — directories list **"5 Newing Way, Caloundra West QLD 4551"**. NOT on the official site, so not written into code.
- **Client needs to supply:** Either confirm that address (and whether it can be shown publicly), or confirm service-area-only. Format: street, suburb, state, postcode — or "service area only."

### 2.4 Map coordinates (geo)
- **What:** Latitude/longitude for LocalBusiness schema.
- **Where it lives:** `src/lib/brand.ts` → `BUSINESS.geo` (currently a placeholder Sunshine Coast centroid `-26.65, 153.05`).
- **Found via scraping:** ❌ Not found. Derived from the address once 2.3 is confirmed.
- **Client needs to supply:** Nothing directly — we derive it from the confirmed address. Blocked by 2.3.

### 2.5 ABN
- **What:** Australian Business Number, shown in footer + about credentials block (hidden until supplied).
- **Where it lives:** `src/lib/brand.ts` → `BUSINESS.abn`; `footer.tsx`; `about/page.tsx`.
- **Found via scraping:** ❌ Not found on the official site.
- **Client needs to supply:** The 11-digit ABN. Format: `XX XXX XXX XXX`.

### 2.6 Trust-rail claims (verify accreditations)
- **What:** The site states as live fact: "Fully insured", "Dulux + Taubmans accredited", "Lead & asbestos qualified". These are factual claims that should be verified to avoid false-advertising risk.
- **Where it lives:** `src/lib/brand.ts` → `TRUST_RAIL`; `src/lib/schema.ts` `hasCredential` (lead/asbestos); various service-page copy.
- **Found via scraping:** Site asserts long-standing paint-company relationships but does not name specific accreditations.
- **Client needs to supply:** Written confirmation of: current public-liability insurance, Dulux/Taubmans accreditation status, and lead/asbestos qualifications. Format: yes/no per claim + any certificate numbers.

### 2.7 Partner-logo entitlement (held)
- **What:** Dulux / Taubmans logos were scraped from the legacy site but held pending permission to display.
- **Where it lives:** Not yet wired (assets in `assets/scraped/jjames-original/`). A trust strip would consume them if approved.
- **Found via scraping:** Logos present on legacy site (entitlement unconfirmed).
- **Client needs to supply:** Confirmation they're entitled to use the brand logos (ties to 2.6). Format: written confirmation.

---

## 3. Post-launch — can follow after the site is live

### 3.1 Social media links
- **What:** Facebook / Instagram profile links; footer icons appear only when set. Also feeds `sameAs` in schema (recommended).
- **Where it lives:** `src/lib/brand.ts` → `BUSINESS.socials`; `footer.tsx`.
- **Found via scraping:** ⚠️ A Facebook page likely exists (seen in Google results) but was not linked from the official site and is unconfirmed. Instagram not found. Skipped per instruction.
- **Client needs to supply:** Full profile URLs. Format: `https://facebook.com/...`, `https://instagram.com/...`.

### 3.2 Project case studies (12)
- **What:** Each `/projects/[slug]` shows a "Case study coming soon" scaffold — needs a real write-up, scope detail, timeline, photos, and (optionally) a client quote. Pages resolve cleanly today, so this degrades gracefully.
- **Where it lives:** `src/app/projects/[slug]/page.tsx`; `src/content/projects.ts`.
- **Found via scraping:** n/a (client content).
- **Client needs to supply:** Per project — scope/timeline detail, 2–4 photos, optional client testimonial + permission to publish. Format: short brief + image files per project.

### 3.3 Photography (shoot day)
- **What:** Several slots use interim imagery flagged in code:
  - Real **Jamie portrait** for the about team section (currently a captioned project photo). `src/app/about/page.tsx` — `TODO(photography-day)`.
  - **Before/after pairs** for the pre-sale page (currently designed gradients). `src/components/sections/service/before-after.tsx`.
  - **Hi-res originals** — current project photos are 640px (soft on full-bleed heroes). `public/photos/`, `src/lib/photos.ts`.
  - **Suburb-specific shots** — suburb heroes reuse representative regional homes. `src/lib/photos.ts` `SUBURB_IMAGES`.
- **Found via scraping:** Legacy photos reused (640px, exteriors + interiors). No portrait / before-after / suburb-specific available.
- **Client needs to supply:** A photography day on 3–4 Sunshine Coast jobs: owner headshot, before/after pairs, hi-res project shots. Format: high-resolution JPEGs (ideally ≥2000px wide).

### 3.4 Google Business Profile alignment + indexing (Phase 6)
- **What:** Verify GBP NAP matches the site exactly; submit sitemap to Google Search Console; capture an SEO drift baseline.
- **Where it lives:** Deployment tasks (see `PLAN.md` Phase 6); NAP source is `src/lib/brand.ts`.
- **Found via scraping:** n/a.
- **Client needs to supply:** GBP access (or confirm NAP), GSC access. Format: account access / confirmation.

---

## Quick-fill summary (for the client)

| # | Item | Status | What we need |
|---|------|--------|--------------|
| 1.1 | Form lead delivery | blocker | destination email + delivery method |
| 2.1 | Business email | ✅ scraped | confirm `jjamespainting@gmail.com` |
| 2.2 | QBCC licence | ✅ scraped | confirm 1281728 / 1149471 active |
| 2.3 | Physical address | ⚠️ unverified | confirm address or "service-area only" |
| 2.4 | Geo coords | ❌ | derived from 2.3 |
| 2.5 | ABN | ❌ | 11-digit ABN |
| 2.6 | Insurance / accreditation claims | verify | yes/no + certs |
| 2.7 | Partner-logo permission | held | written OK |
| 3.1 | Social links | ⚠️ unverified | profile URLs |
| 3.2 | 12 case studies | ❌ | briefs + photos |
| 3.3 | Photography | ❌ | shoot day, hi-res |
| 3.4 | GBP / GSC | ❌ | account access |
