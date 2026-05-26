/**
 * Schema.org JSON-LD generators.
 * Used by page-level metadata + inline <script type="application/ld+json"> tags.
 * Built around the LocalBusiness master record in src/lib/brand.ts.
 *
 * Reference: docs/seo/local-seo.md (LocalBusiness schema spec).
 */

import { BUSINESS, SITE_URL, SUBURBS } from "./brand";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

type JsonLd = Record<string, unknown>;

/** Top-level LocalBusiness + Organization reference, used sitewide. */
export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    description:
      "Sunshine Coast painting contractors, family-run since 1985. " +
      "Rental property repaint, pre-sale painting, new-home painting, " +
      "and boutique residential work across 12 Sunshine Coast suburbs.",
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    foundingDate: String(BUSINESS.foundedYear),
    priceRange: "$$",
    image: [`${SITE_URL}/icon-512.png`],
    logo: `${SITE_URL}/icon-512.png`,
    areaServed: SUBURBS.map((s) => ({
      "@type": "Place",
      name: `${s.name}, ${BUSINESS.state}`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sunshine Coast",
      addressRegion: BUSINESS.state,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: groupedHours(),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Lead-based paint removal qualified",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Asbestos removal qualified",
      },
    ],
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    foundingDate: String(BUSINESS.foundedYear),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { "@id": ORGANIZATION_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema({
  slug,
  name,
  description,
  category = "Residential Painting",
}: {
  slug: string;
  name: string;
  description: string;
  category?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${slug}/#service`,
    name,
    description,
    serviceType: name,
    category,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: SUBURBS.map((s) => ({
      "@type": "Place",
      name: `${s.name}, ${BUSINESS.state}`,
    })),
    url: `${SITE_URL}/services/${slug}`,
  };
}

export function faqPageSchema(
  faq: Array<{ q: string; a: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(item.a),
      },
    })),
  };
}

function stripHtml(s: string): string {
  // FAQ answers in content/services.ts include HTML entities like &rsquo;
  // for visual display, but schema.org Answer text should be plain.
  return s
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&amp;/g, "&")
    .replace(/<[^>]+>/g, "");
}

/**
 * Person schema for team / leadership pages.
 * `worksFor` links the person back to the LocalBusiness graph node.
 */
export function personSchema({
  name,
  jobTitle,
  description,
  imageUrl,
  sameAs,
}: {
  name: string;
  jobTitle: string;
  description?: string;
  imageUrl?: string;
  sameAs?: string[];
}): JsonLd {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const node: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about/#person-${slug}`,
    name,
    jobTitle,
    worksFor: { "@id": ORGANIZATION_ID },
    url: `${SITE_URL}/about`,
  };
  if (description) node.description = description;
  if (imageUrl) node.image = imageUrl.startsWith("http") ? imageUrl : `${SITE_URL}${imageUrl}`;
  if (sameAs && sameAs.length) node.sameAs = sameAs;
  return node;
}

export function contactPageSchema({
  url,
  description,
}: {
  url: string;
  description: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}/#contactpage`,
    url,
    description,
    about: { "@id": ORGANIZATION_ID },
    mainEntity: { "@id": ORGANIZATION_ID },
  };
}

export function aboutPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}/#aboutpage`,
    name,
    description,
    url,
    about: { "@id": ORGANIZATION_ID },
  };
}

export function breadcrumbSchema(
  trail: Array<{ name: string; url: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Combine multiple JSON-LD blocks into a single @graph object.
 * Cleaner than emitting many separate <script> tags.
 */
export function combineGraph(...nodes: JsonLd[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map((node) => {
      const copy = { ...node };
      delete copy["@context"];
      return copy;
    }),
  };
}

function groupedHours(): JsonLd[] {
  const monFri = BUSINESS.hours
    .filter((h) => ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(h.day))
    .at(0);
  const sat = BUSINESS.hours.find((h) => h.day === "Sat");
  const out: JsonLd[] = [];
  if (monFri) {
    out.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: monFri.open,
      closes: monFri.close,
    });
  }
  if (sat) {
    out.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: sat.open,
      closes: sat.close,
    });
  }
  return out;
}
