/**
 * Single source of truth for brand-critical data.
 * NAP, suburbs, services, and trust signals — referenced by header, footer,
 * schema utilities, and content components.
 *
 * Update NAP in one place and it propagates site-wide.
 * Per docs/seo/local-seo.md, NAP must appear identically on every page.
 */

export const SITE_URL = "https://jjamespaintingcontractorsqld.com.au";

export const BUSINESS = {
  name: "J. James Painting Contractors",
  shortName: "J. James Painting",
  alternateName: "J. James Painting",
  tagline: "Sunshine Coast painters since 1985.",
  foundedYear: 1985,
  phone: "0403 571 616",
  phoneE164: "+61403571616",
  email: "", // TBC from client (see docs/seo/local-seo.md open items)
  abn: "", // TBC
  qbccLicense: "", // TBC
  region: "Sunshine Coast",
  state: "QLD",
  country: "AU",
  hours: [
    { day: "Mon", open: "07:00", close: "17:00" },
    { day: "Tue", open: "07:00", close: "17:00" },
    { day: "Wed", open: "07:00", close: "17:00" },
    { day: "Thu", open: "07:00", close: "17:00" },
    { day: "Fri", open: "07:00", close: "17:00" },
    { day: "Sat", open: "08:00", close: "13:00" },
  ],
  socials: {
    facebook: "", // TBC
    instagram: "", // TBC
  },
  // Sunshine Coast region centroid placeholder. Replace with the address-derived
  // coordinates once the client confirms the address (per docs/seo/local-seo.md).
  geo: {
    latitude: -26.65,
    longitude: 153.05,
  },
} as const;

export type SuburbSlug =
  | "buderim"
  | "maleny"
  | "forest-glen"
  | "sippy-downs"
  | "caloundra"
  | "sunshine-beach"
  | "noosa"
  | "peregian"
  | "coolum"
  | "glasshouse-mountains"
  | "aura"
  | "kawana";

export type Suburb = {
  slug: SuburbSlug;
  name: string;
  /** One-line local context used in nav, footer, and suburb hubs. */
  blurb: string;
  /** Primary cluster fit per docs/seo/topic-clusters.md. */
  primaryCluster: "rental" | "pre-sale" | "new-home" | "boutique";
};

export const SUBURBS: Suburb[] = [
  {
    slug: "buderim",
    name: "Buderim",
    blurb: "Established suburban stock, vendor and landlord market.",
    primaryCluster: "rental",
  },
  {
    slug: "caloundra",
    name: "Caloundra",
    blurb: "Mixed coastal stock, vendor and landlord market.",
    primaryCluster: "pre-sale",
  },
  {
    slug: "coolum",
    name: "Coolum",
    blurb: "Coastal residential, mid-market.",
    primaryCluster: "pre-sale",
  },
  {
    slug: "forest-glen",
    name: "Forest Glen",
    blurb: "Newer-build family homes.",
    primaryCluster: "rental",
  },
  {
    slug: "glasshouse-mountains",
    name: "Glasshouse Mountains",
    blurb: "Semi-rural acreage, weatherboard farmhouses.",
    primaryCluster: "boutique",
  },
  {
    slug: "kawana",
    name: "Kawana",
    blurb: "Mixed waterfront and canal homes.",
    primaryCluster: "pre-sale",
  },
  {
    slug: "maleny",
    name: "Maleny",
    blurb: "Heritage Queenslanders, hinterland weatherboards.",
    primaryCluster: "boutique",
  },
  {
    slug: "noosa",
    name: "Noosa",
    blurb: "Premium architectural and coastal character homes.",
    primaryCluster: "boutique",
  },
  {
    slug: "peregian",
    name: "Peregian",
    blurb: "Coastal premium with holiday-home crossover.",
    primaryCluster: "boutique",
  },
  {
    slug: "sippy-downs",
    name: "Sippy Downs",
    blurb: "University precinct, rental-heavy stock.",
    primaryCluster: "rental",
  },
  {
    slug: "sunshine-beach",
    name: "Sunshine Beach",
    blurb: "Coastal salt exposure, premium beachfront.",
    primaryCluster: "boutique",
  },
  {
    slug: "aura",
    name: "Aura",
    blurb: "Large new-build estate, brand-new homes.",
    primaryCluster: "new-home",
  },
];

export type PriorityServiceSlug =
  | "rental-property-repaint"
  | "house-pre-sale-painting"
  | "new-home-purchase-painting"
  | "boutique-house-painting";

export type PriorityService = {
  slug: PriorityServiceSlug;
  /** Service-line short label for nav and footer. */
  shortName: string;
  /** Display title used on the homepage bento grid + service page hero. */
  title: string;
  /** One-liner used in the bento grid description. */
  oneLiner: string;
  /** Sentence used on the service hub blurb / mega-menu. */
  blurb: string;
  /** Service-tagged quote CTA label (auto-tags the lead). */
  ctaLabel: string;
};

export const PRIORITY_SERVICES: PriorityService[] = [
  {
    slug: "boutique-house-painting",
    shortName: "Boutique",
    title: "Boutique house painting",
    oneLiner: "Architectural, heritage, and coastal premium homes.",
    blurb:
      "Master-painter-level finishes for homes that deserve more than a quick coat.",
    ctaLabel: "Book a consultation",
  },
  {
    slug: "house-pre-sale-painting",
    shortName: "Pre-Sale",
    title: "House pre-sale painting",
    oneLiner: "Painted ready for inspection in days, not weeks.",
    blurb:
      "Fast-turn painting for vendors and agents preparing a home for market.",
    ctaLabel: "Get a pre-sale quote",
  },
  {
    slug: "rental-property-repaint",
    shortName: "Rental Repaint",
    title: "Rental property repaint",
    oneLiner: "Repaint between tenants. Re-let faster.",
    blurb:
      "Quick turnaround between tenancies, durable finishes, PM coordination.",
    ctaLabel: "Get a rental repaint quote",
  },
  {
    slug: "new-home-purchase-painting",
    shortName: "New Home",
    title: "New home painting",
    oneLiner: "Just bought a place? Paint it before you move in.",
    blurb:
      "Settlement-to-keys painting for new owners. Empty house, faster job.",
    ctaLabel: "Get a new-home quote",
  },
];

export type LegacyServiceSlug =
  | "residential"
  | "commercial"
  | "industrial"
  | "interior"
  | "exterior"
  | "body-corporate"
  | "specialty-coatings"
  | "lead-asbestos-removal";

export const LEGACY_SERVICES: Array<{ slug: LegacyServiceSlug; name: string }> = [
  { slug: "residential", name: "Residential" },
  { slug: "commercial", name: "Commercial" },
  { slug: "industrial", name: "Industrial" },
  { slug: "interior", name: "Interior" },
  { slug: "exterior", name: "Exterior" },
  { slug: "body-corporate", name: "Body corporate" },
  { slug: "specialty-coatings", name: "Specialty coatings" },
  { slug: "lead-asbestos-removal", name: "Lead & asbestos removal" },
];

/**
 * Trust rail items that sit under every page hero (per docs/layouts/home.md
 * and docs/layouts/service-pre-sale.md).
 * The first item carries emphasis (font-medium navy); the rest stay muted.
 */
export const TRUST_RAIL: string[] = [
  "Since 1985",
  "Family-run, locally owned",
  "Fully insured",
  "Dulux + Taubmans accredited",
  "Lead & asbestos qualified",
];
