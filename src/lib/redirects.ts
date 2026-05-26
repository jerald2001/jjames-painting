/**
 * Migration redirect map from the original WordPress site to the rebuild.
 *
 * Source URLs come from the live RankMath sitemaps at
 * jjamespaintingcontractorsqld.com.au (pulled 2026-05-26).
 *
 * Brief §20 risk: "consolidating 48 suburb pages without a proper redirect
 * plan would tank current rankings". This is that plan. Every URL with
 * earned authority on the old site lands on its best equivalent here.
 *
 * Convention:
 * - Sources written without trailing slash; Next normalizes inbound /foo/
 *   to /foo at the trailingSlash:false default.
 * - All redirects permanent: true (HTTP 301).
 * - Out-of-area suburbs that aren't in the new 12 hubs redirect to the
 *   geographically nearest hub. See REDIRECT_NEIGHBOUR_MAP for the
 *   reasoning per slug. When no nearest equivalent is sensible, the
 *   redirect goes to /locations (the suburb index).
 */

export type Redirect = {
  source: string;
  destination: string;
  permanent: true;
};

const r = (source: string, destination: string): Redirect => ({
  source,
  destination,
  permanent: true,
});

// Suburbs in the new site's hub list. Source: src/lib/brand.ts SUBURBS.
const HUBS = [
  "buderim",
  "caloundra",
  "coolum",
  "forest-glen",
  "glasshouse-mountains",
  "kawana",
  "maleny",
  "noosa",
  "peregian",
  "sippy-downs",
  "sunshine-beach",
  "aura",
] as const;

/**
 * Geographic nearest-hub assignments for the original site's "off-list"
 * suburbs. Based on Sunshine Coast geography, not painting history.
 */
const REDIRECT_NEIGHBOUR_MAP: Record<string, string> = {
  // Coast band, south of Caloundra
  "bells-creek": "caloundra",
  "corbould-park": "caloundra",
  "pelican-waters": "caloundra",
  parklands: "caloundra",
  currimundi: "caloundra",
  // Aura precinct
  nirimba: "aura",
  // Mooloolaba / mid-coast
  warana: "kawana",
  "twin-waters": "kawana",
  maroochydore: "kawana",
  "mountain-creek": "sippy-downs",
  // Inland north
  nambour: "forest-glen",
  woombye: "forest-glen",
  "bli-bli": "forest-glen",
  // South hinterland
  landsborough: "glasshouse-mountains",
};

/**
 * Legacy URLs that name a suburb we can't confidently place. Safer to land
 * them on the locations index than to guess wrong.
 */
const UNKNOWN_SUBURBS = ["brews", "cartwright-point"];

// Service-level catchalls
const BOUTIQUE = "/services/boutique-house-painting";
const LOCATIONS_INDEX = "/locations";

const explicit: Redirect[] = [
  // Top-level page renames
  r("/about-us", "/about"),
  r("/quote", "/contact#quote"),

  // Generic "painters" hub URLs route to the /services index now that it
  // ships. The "near me" / region URLs stay on / since they're more
  // location-shopping than service-shopping.
  r("/painters", "/services"),
  r("/house-painter-near-me", "/"),
  r("/house-painter-in-sunshine-coast-region-qld", "/"),
  r("/painters-on-the-sunshine-coast-region-qld", "/"),

  // Old testimonials index and detail pages land on the home testimonials
  // section. When a real /testimonials page ships, swap these.
  r("/testimonials", "/"),
  r("/wpt-testimonial/alan-cameron", "/"),
  r("/wpt-testimonial/garry-and-jeannette", "/"),
  r("/wpt-testimonial/grant-mcdonald", "/"),
  r("/wpt-testimonial/happy-customer", "/"),
  r("/wpt-testimonial/lindsay-woods", "/"),
  r("/wpt-testimonial/phil-osborne", "/"),

  // Service-line legacy pages. Legacy services live as anchor sections on
  // /services, so each lands on the right card via fragment.
  r("/high-end-project-painters", BOUTIQUE),
  r("/residential", "/services#residential"),
  r("/commercial", "/services#commercial"),
  r("/industrial", "/services#industrial"),

  // Category archives → /services index
  r("/category/exterior-house-painters", "/services#exterior"),
  r("/category/high-end-project-painters", BOUTIQUE),
  r("/category/house-painter", "/services"),
  r("/category/interior-painting", "/services#interior"),
  r("/category/painters", "/services"),

  // Off-list /interior-painting-in-X
  r("/interior-painting-in-sunshine-coast-region", LOCATIONS_INDEX),
  r("/interior-painting-in-glasshouse", "/locations/glasshouse-mountains"), // typo of glasshouse-mountains
  // Off-list /exterior-house-painter-in-X
  r("/exterior-house-painter-in-sunshine-coast", LOCATIONS_INDEX),
  r("/exterior-house-painter-in-maleney", "/locations/maleny"), // typo of maleny

  // Off-list bare suburb URLs (not in our 12 hubs)
  r("/maroochydore", "/locations/kawana"),
  r("/nambour", "/locations/forest-glen"),
  r("/twin-waters", "/locations/kawana"),
];

// Bare /:suburb URLs that map directly to /locations/:suburb (our 12)
const bareSuburb: Redirect[] = HUBS.map((slug) =>
  r(`/${slug}`, `/locations/${slug}`),
);

// /painters-in-:suburb URLs
const paintersIn: Redirect[] = HUBS.map((slug) =>
  r(`/painters-in-${slug}`, `/locations/${slug}`),
);

// /exterior-house-painter-in-:suburb URLs (singular)
const exteriorPainter: Redirect[] = HUBS.map((slug) =>
  r(`/exterior-house-painter-in-${slug}`, `/locations/${slug}`),
);

// /exterior-house-painters-in-:suburb URLs (plural)
const exteriorPainters: Redirect[] = HUBS.map((slug) =>
  r(`/exterior-house-painters-in-${slug}`, `/locations/${slug}`),
);

// /interior-painting-in-:suburb URLs
const interiorPainting: Redirect[] = HUBS.map((slug) =>
  r(`/interior-painting-in-${slug}`, `/locations/${slug}`),
);

// /high-end-project-painters-in-:suburb URLs → boutique service page
const highEndIn: Redirect[] = HUBS.map((slug) =>
  r(`/high-end-project-painters-in-${slug}`, BOUTIQUE),
);

// /house-painting-in-:offlist-suburb URLs → nearest hub or /locations
const offListHousePainting: Redirect[] = Object.entries(
  REDIRECT_NEIGHBOUR_MAP,
).map(([slug, neighbour]) =>
  r(`/house-painting-in-${slug}`, `/locations/${neighbour}`),
);

// Catch the few remaining off-list painters-in-X URLs by reusing the same
// neighbour map (these don't all exist in the old sitemap, but it's cheap
// future-proofing for similar URL guesses or external backlinks).
const offListPaintersIn: Redirect[] = Object.entries(
  REDIRECT_NEIGHBOUR_MAP,
).map(([slug, neighbour]) =>
  r(`/painters-in-${slug}`, `/locations/${neighbour}`),
);

// /exterior-house-painter-in-:offlist-suburb URLs (singular)
const offListExteriorPainter: Redirect[] = Object.entries(
  REDIRECT_NEIGHBOUR_MAP,
).map(([slug, neighbour]) =>
  r(`/exterior-house-painter-in-${slug}`, `/locations/${neighbour}`),
);

// /interior-painting-in-:offlist-suburb URLs
const offListInteriorPainting: Redirect[] = Object.entries(
  REDIRECT_NEIGHBOUR_MAP,
).map(([slug, neighbour]) =>
  r(`/interior-painting-in-${slug}`, `/locations/${neighbour}`),
);

// Unknown-suburb legacy URLs → /locations index
const unknownSuburbRedirects: Redirect[] = UNKNOWN_SUBURBS.flatMap((slug) => [
  r(`/house-painting-in-${slug}`, LOCATIONS_INDEX),
  r(`/painters-in-${slug}`, LOCATIONS_INDEX),
  r(`/exterior-house-painter-in-${slug}`, LOCATIONS_INDEX),
  r(`/interior-painting-in-${slug}`, LOCATIONS_INDEX),
]);

export const MIGRATION_REDIRECTS: Redirect[] = [
  ...explicit,
  ...bareSuburb,
  ...paintersIn,
  ...exteriorPainter,
  ...exteriorPainters,
  ...interiorPainting,
  ...highEndIn,
  ...offListHousePainting,
  ...offListPaintersIn,
  ...offListExteriorPainter,
  ...offListInteriorPainting,
  ...unknownSuburbRedirects,
];
