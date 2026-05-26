# Google Search Documentation Summary

Companion to [`seo-workflow.md`](seo-workflow.md). Referenced from [`CLAUDE.md`](../../CLAUDE.md) > SEO Workflow.

Reference: [developers.google.com/search/docs](https://developers.google.com/search/docs) (retrieved 2026-05-20)

This is a condensed, actionable summary of Google's official Search documentation. It covers everything a local business website build needs to comply with and optimize for.

---

## 1. How Google Search Works

Google operates in three stages:

1. **Crawling** - Googlebot discovers pages via links and sitemaps, fetches them, and renders JavaScript using headless Chromium.
2. **Indexing** - Google analyzes content, tags, attributes, images, and videos. It detects duplicates, selects a canonical, and stores signals (language, locality, usability). Indexing is not guaranteed.
3. **Serving** - Results are ranked programmatically using hundreds of factors (location, language, device, content quality). No payment influences ranking.

Key takeaway: Google must be able to crawl, render, and understand your page. If any stage fails, the page won't rank.

---

## 2. Search Essentials (Minimum Requirements)

Every page must meet these:

- **Indexable format** - Standard HTML that Google can process.
- **Crawlable links** - Proper `<a href>` links (not JavaScript-only navigation without fallbacks).
- **Valid markup** - Semantic HTML structure with proper heading hierarchy.
- **Mobile compatibility** - Pages must function across devices.
- **Page metadata** - Valid `<title>`, meta descriptions, and structured headings.

Meeting these requirements does not guarantee indexing or ranking.

---

## 3. Content Quality and E-E-A-T

### People-First Content

Google rewards content created for humans, not search engines. Every page should:

- Provide **original information, analysis, or reporting** beyond surface-level.
- Be **comprehensive** enough that users don't need to search elsewhere.
- Use **descriptive, honest headings** without exaggeration or clickbait.
- Be **free of spelling/stylistic errors** and high production quality.
- Help visitors **achieve their goals completely**.

### E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

E-E-A-T is not a direct ranking factor, but Google's systems evaluate these qualities:

- **Experience** - Demonstrate first-hand knowledge (actual service delivery, real project photos).
- **Expertise** - Content should come from people with demonstrable subject knowledge.
- **Authoritativeness** - Sites should be recognized as trusted in their topic area.
- **Trustworthiness** - Include author bios, About pages, credentials. Avoid factual errors.

For local businesses: show real work photos, real team members, real testimonials, and real credentials. This directly signals experience and expertise.

### YMYL (Your Money or Your Life)

Topics affecting health, finances, safety, or welfare receive enhanced scrutiny. Local businesses in healthcare, legal, financial, or home services should pay extra attention to accuracy and credentials.

---

## 4. On-Page SEO

### Title Tags (`<title>`)

- Every page needs a unique `<title>` element.
- Keep it concise and descriptive (avoid vague titles like "Home").
- Include the primary keyword and location for local pages.
- Include the business name, separated by a delimiter (pipe or dash).
- Avoid keyword stuffing and boilerplate repetition across pages.
- Google may rewrite your title if it finds it inaccurate, incomplete, or stuffed.

### Meta Descriptions

- Write a unique meta description for every page.
- Make it genuinely descriptive (a persuasive pitch for why the page answers the query).
- Include a CTA and location where relevant.
- Google uses the meta description OR extracts a snippet from page content, whichever is more relevant to the search query.
- Avoid keyword-stuffed lists. They rarely display as snippets.
- Programmatic generation is fine for database-driven pages, but ensure diversity.

### Headings

- Use a single `<h1>` per page with the primary keyword.
- Use logical heading hierarchy (`<h1>` > `<h2>` > `<h3>`).
- Google says heading semantic order doesn't directly affect ranking, but it matters for accessibility and content structure.
- There is no ideal number of headings per page.

### Internal Linking

- Links are crucial for discovery and credibility.
- Use **descriptive anchor text** that indicates what the linked page is about.
- Every page should have at least one internal link pointing to it (no orphan pages).
- Link to relevant internal and external resources naturally.
- Add `rel="nofollow"` or `rel="sponsored"` to untrusted or paid links.

### Content Length

- **Google has no word count preference.** No minimum, no maximum.
- Natural variation in content length creates more keyword opportunities.
- Write as much as the topic requires. Don't pad, don't truncate.

---

## 5. Images

### Technical Requirements

- Use standard `<img>` tags with `src` attributes. Google does not index CSS background images.
- Supported formats: BMP, GIF, JPEG, PNG, WebP, SVG, AVIF.
- Implement responsive images with `srcset` and `<picture>` elements.
- Always include a fallback `src`.
- Use consistent URLs for images across pages (helps crawl budget).

### Image SEO

- **Alt text** - Write useful, information-rich descriptions. Avoid keyword stuffing. Focus on what the image shows in context of the page.
- **Filenames** - Use short, descriptive names (e.g., `kitchen-remodel-oak-cabinets.jpg` not `IMG00023.JPG`).
- **Placement** - Place images near relevant text content.
- **Quality** - High-quality, sharp images increase click-through rates.
- **Structured data** - Use `primaryImageOfPage` and `og:image` meta tags.

---

## 6. Structured Data

### Format

- **JSON-LD is recommended.** Place in `<script>` tags, separate from visible content.
- Microdata and RDFa are also accepted but JSON-LD is preferred.

### Rules

- Include all required properties for rich result eligibility.
- Structured data must describe content visible on the page. Don't add invisible structured data.
- Don't create blank pages solely to hold structured data.
- Prioritize fewer but complete and accurate properties over many incomplete ones.

### LocalBusiness Schema (Required for Local Sites)

Required properties:
- `name` - Business name.
- `address` (PostalAddress) - Full address with `streetAddress`, `addressLocality`, `addressRegion`, `postalCode`, `addressCountry`.

Recommended properties:
- `geo` (GeoCoordinates) - Latitude/longitude with at least 5 decimal places.
- `telephone` - Primary phone with country and area codes.
- `url` - Fully-qualified URL of the specific business location (must be a working link).
- `openingHoursSpecification` - Hours with `opens`, `closes`, `dayOfWeek`.
- `priceRange` - Relative price range (under 100 characters).
- `aggregateRating` / `review` - Only for sites that capture reviews about local businesses.
- `servesCuisine` - For restaurants.
- `menu` - For food establishments.
- `department` - Nested items for departments, formatted as `{store name} {department name}`.

Use the most specific `LocalBusiness` subtype available (e.g., `Restaurant`, `LegalService`, `Plumber`).

### Testing

- Validate with the **Rich Results Test** tool during development.
- Monitor with **Rich Result Status Reports** in Search Console after deployment.
- Use the **URL Inspection Tool** to verify Google can access your markup.

### Impact

Case studies from Google:
- Rotten Tomatoes: 25% higher CTR on marked-up pages.
- Food Network: 35% increase in visits after converting 80% of pages.
- Nestle: 82% higher CTR for rich result pages.

---

## 7. Crawling and Indexing

### Sitemaps

- Sitemaps help Google discover URLs but don't guarantee crawling or indexing.
- Recommended for: sites with 500+ pages, new sites with few external links, sites with rich media.
- WordPress generates sitemaps automatically (core or via SEO plugin).
- Sitemaps can include metadata for videos (duration, rating), images (location), and news (title, date).

### robots.txt

- Controls which URLs crawlers can access. It is **not** a way to hide pages from search results.
- A `robots.txt`-blocked page can still appear in search results (URL only) if other sites link to it.
- Don't block critical resources (CSS, JS, images) that Google needs to render pages.
- To prevent indexing, use `noindex` meta tag or HTTP header instead.
- robots.txt is a request, not an enforcement mechanism. Not all crawlers obey it.

### Canonical URLs

Methods to specify canonical (strongest to weakest):
1. **301 redirects** - Strongest signal. Use for deprecated duplicates.
2. **`rel="canonical"` link** - Strong signal. Place in `<head>` or send as HTTP header.
3. **Sitemap inclusion** - Weak signal. Helps but doesn't override other signals.

Best practices:
- Use **absolute URLs** in canonical tags.
- Link internally to the canonical URL consistently.
- Don't mix methods (don't point `rel="canonical"` to a different URL than your redirect).
- Google prefers HTTPS over HTTP as canonical.
- For JS-rendered content, specify canonical in the HTML source, not via JavaScript.

### Redirects

- Use **301 (permanent)** redirects for moved pages.
- Don't chain multiple redirects if avoidable.
- Google treats redirect targets as strong canonical signals.

---

## 8. Mobile-First Indexing

Google uses the **mobile version** of your site for indexing and ranking.

### Requirements

- **Content parity** - Mobile content must match desktop in quantity and quality. Only mobile-visible content gets indexed.
- **Metadata parity** - Same `<title>`, meta descriptions, and structured data on both versions.
- **Responsive design is recommended** - Same HTML/URL for all devices, display adapts via CSS.
- Don't lazy-load primary content that requires user interaction to appear.
- Don't block mobile resources via `robots.txt`.
- Same `robots` meta tags on mobile and desktop.

### Images on Mobile

- High-quality, supported formats.
- Same alt text, titles, captions, and filenames as desktop.
- Stable URLs (don't use dynamic/changing image paths).

---

## 9. Page Experience

Google evaluates page experience holistically. There is no single "page experience signal."

### Factors

1. **Core Web Vitals** - LCP, INP, CLS. Direct ranking factor, but good scores alone don't guarantee top rankings.
2. **HTTPS** - Pages must be served securely.
3. **Mobile-friendly** - Content must display well on mobile devices.
4. **No excessive ads** - Ads must not distract from or interfere with content.
5. **No intrusive interstitials** - Avoid popups that block content access.
6. **Clear content hierarchy** - Users should easily distinguish main content from secondary elements.

Relevance always takes priority. A relevant page with mediocre experience can outrank a less relevant page with perfect experience.

---

## 10. AI and Generative Search Optimization

### What Works

- Traditional SEO best practices remain foundational. AI features use the same ranking systems.
- Create unique, valuable content with distinctive perspectives.
- Write for humans. AI systems understand natural language.
- Use semantic HTML for structure (benefits accessibility and AI understanding).
- Incorporate high-quality, relevant images and videos.
- Maintain accurate Google Business Profiles for local visibility.

### What Doesn't Work (Debunked Tactics)

- **LLMS.txt files** - Not needed. Standard crawlable content is sufficient.
- **Content chunking** - Don't artificially fragment content. AI systems understand multi-topic pages.
- **AI-specific keyword optimization** - Systems understand synonyms and general intent.
- **Fake mentions/citations** - Focus on genuine quality.
- **Over-reliance on structured data** - Helpful for rich results but not required for AI visibility.

---

## 11. Spam Policies (Violations That Get You Penalized)

Violations result in ranking demotion or complete removal from search results.

### Content Spam
- **Keyword stuffing** - Unnatural repetition of terms.
- **Scaled content abuse** - Mass-generating pages via AI, scraping, or templates with minimal value.
- **Thin affiliate content** - Copied product descriptions without original analysis.
- **Scraped content** - Republishing others' work without adding value.
- **Hidden text/links** - White text on white background, zero-opacity elements, off-screen positioning.

### Deceptive Practices
- **Cloaking** - Showing different content to users vs. search engines.
- **Sneaky redirects** - Redirecting users to different content than what was crawled.
- **Doorway pages** - Pages targeting similar queries to funnel users through intermediaries.
- **Misleading functionality** - Fake tools or services that don't work.

### Link Manipulation
- **Buying/selling links** for ranking (without `rel="nofollow"` or `rel="sponsored"`).
- **Excessive link exchanges** ("link to me and I'll link to you").
- **Automated link-building programs**.
- **Required linking in ToS** without third-party choice.
- **Keyword-rich hidden widgets** distributed across sites.

### Technical Abuse
- **Expired domain abuse** - Buying old domains to exploit their authority.
- **Site reputation abuse** - Publishing third-party content to exploit host site authority.
- **Machine-generated traffic** - Automated queries or scraping.
- **Malware/unwanted software** - Back button hijacking, homepage hijacking.

### Consequences
- Rank lower or disappear from results entirely.
- Restricted from Search features (Top Stories, Discover).
- Manual actions from Google's review team.
- Broader search removal for repeat offenders.

---

## 12. JavaScript SEO

### How Google Handles JS

1. Crawls and fetches the page HTML.
2. Queues for rendering using headless Chromium.
3. Executes JavaScript and indexes the rendered output.

### Best Practices

- Server-side rendering is still preferable for speed and compatibility.
- Titles and meta descriptions can be set via JavaScript, but HTML is more reliable.
- Use the **History API** for client-side routing, not fragment-based (`#`) navigation.
- Use content fingerprinting for JS/CSS filenames (e.g., `main.2bb85551.js`) because Googlebot caches aggressively.
- Don't rely on JavaScript to remove a `noindex` tag set in HTML. Once Google sees `noindex`, it may skip rendering.
- Test with the URL Inspection Tool to verify how Google sees your JS-rendered pages.

For WordPress classic themes with minimal JS, this is low-risk. Keep JavaScript lean and ensure critical content is in the HTML.

---

## 13. Quick Reference for Local Business Sites

Priority checklist derived from these guidelines:

- [ ] Every page has a unique `<title>` with primary keyword + location + business name
- [ ] Every page has a unique meta description with CTA + location
- [ ] Single `<h1>` per page with primary keyword
- [ ] LocalBusiness JSON-LD schema on every page (most specific subtype)
- [ ] NAP (Name, Address, Phone) consistent across all pages and matches GBP
- [ ] `rel="canonical"` set on every page
- [ ] HTTPS enabled
- [ ] Responsive design (mobile-first)
- [ ] All images have descriptive alt text (no keyword stuffing)
- [ ] Images use `srcset`/`<picture>` for responsive delivery
- [ ] Internal links with descriptive anchor text (no orphan pages)
- [ ] XML sitemap submitted to Search Console
- [ ] robots.txt allows access to all critical resources
- [ ] No intrusive interstitials or popups
- [ ] Core Web Vitals passing (LCP, INP, CLS)
- [ ] Real photos of work, team, and location (not stock photos)
- [ ] Author/business credentials visible (About page, team bios)
- [ ] Open Graph and Twitter Card meta tags on every page
- [ ] No spam policy violations (no keyword stuffing, cloaking, link schemes)
- [ ] Structured data validated with Rich Results Test
