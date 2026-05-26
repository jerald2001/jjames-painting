/**
 * Per-suburb content for /locations/[suburb] hubs.
 *
 * Brief §9.6 mandates these be rewritten as unique pages, not duplicate
 * templates of the original site's 48 programmatic /house-painter-in-X
 * variants. Each suburb gets its own local context paragraph, substrate
 * concerns, common service requests, and project examples. No claims
 * about specific projects we haven't done; no fabricated street names
 * or counts.
 *
 * Linked from: header nav, footer locations column, home suburbs section,
 * /locations index. Sitemap regenerates when this list changes.
 */

import type { PriorityServiceSlug, SuburbSlug } from "@/lib/brand";
import type { PhotoTreatment } from "./services";

export type SuburbHubContent = {
  slug: SuburbSlug;
  name: string;
  /** Used in title + H1: "Painters in Buderim", etc. */
  headlinePhrase: string;
  /** Hero subhead, 1-2 sentences specific to this suburb. */
  heroSubhead: string;
  /** Photo treatment for the hero placeholder until real shots arrive. */
  heroTreatment: PhotoTreatment;
  /** Primary keyword per docs/seo/topic-clusters.md. */
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  /** 2-3 sentence local context paragraph. What kind of homes, what era, what market. */
  localContext: string;
  /** What the painter watches for on this suburb's homes. Substrates, climate, age. */
  substrateNotes: string;
  /** Services in the order they're most commonly requested in this suburb. */
  servicePriority: PriorityServiceSlug[];
  /** Project slugs that exist for this suburb (cross-reference content/projects.ts). */
  projectSlugs: string[];
  /** Closing line that goes above the CTA. Specific to suburb mood. */
  ctaLine: string;
};

const HUBS: SuburbHubContent[] = [
  {
    slug: "buderim",
    name: "Buderim",
    headlinePhrase: "Painters in Buderim",
    heroSubhead:
      "Family homes, investor portfolios, and the occasional architectural rebuild. Painting Buderim houses across most of the streets that climb the hill.",
    heroTreatment: "exterior",
    primaryKeyword: "painters Buderim",
    metaTitle: "Painters in Buderim | J. James Painting",
    metaDescription:
      "Painters in Buderim. Pre-sale repaints, rental turnovers, and full-home refreshes across the hill and the surrounding suburbs. Family-run since 1985.",
    localContext:
      "Buderim is the Sunshine Coast's busiest established-suburb painting market. Most of the stock is 1980s and 1990s brick-veneer with timber trims, plus a layer of newer architectural builds along the ridge. Vendor and landlord traffic is steady year-round.",
    substrateNotes:
      "Older trims on Buderim houses oxidise faster than the brickwork wants you to think. We always look at fascias and barge boards before the body. Termite-replaced sections in older homes get a sealer pass before topcoat.",
    servicePriority: [
      "rental-property-repaint",
      "house-pre-sale-painting",
      "new-home-purchase-painting",
      "boutique-house-painting",
    ],
    projectSlugs: ["rental-buderim", "pre-sale-buderim", "new-home-buderim-hinterland"],
    ctaLine:
      "If your Buderim home is going on market, going between tenants, or just due, send the address.",
  },
  {
    slug: "caloundra",
    name: "Caloundra",
    headlinePhrase: "Painters in Caloundra",
    heroSubhead:
      "From Kings Beach up to Currimundi. Pre-sale work, holiday-let refreshes, and the family homes in between.",
    heroTreatment: "coastal",
    primaryKeyword: "painters Caloundra",
    metaTitle: "Painters in Caloundra | J. James Painting",
    metaDescription:
      "Painters in Caloundra. Pre-sale vendor turnarounds, holiday-let refreshes, and family-home repaints from Kings Beach to Currimundi. Family-run since 1985.",
    localContext:
      "Caloundra mixes pre-war beach cottages, 1970s walk-ups, and waves of newer family-home subdivisions. The pre-sale market moves on a calendar that follows the school terms and the spring listings rush.",
    substrateNotes:
      "Coast-facing trims in Kings Beach and Moffat see proper salt exposure. We spec the system heavier on those walls. Older fibrocement eaves on the inland streets sometimes need an asbestos test before disturbance.",
    servicePriority: [
      "house-pre-sale-painting",
      "new-home-purchase-painting",
      "rental-property-repaint",
      "boutique-house-painting",
    ],
    projectSlugs: ["pre-sale-caloundra", "new-home-caloundra"],
    ctaLine:
      "Listing date in mind? Tell us when, and we'll fit the paint into the runway.",
  },
  {
    slug: "coolum",
    name: "Coolum",
    headlinePhrase: "Painters in Coolum",
    heroSubhead:
      "Coolum Beach across to Mount Coolum. Coastal repaints, family-home refreshes, holiday-let turnovers between bookings.",
    heroTreatment: "coastal",
    primaryKeyword: "painters Coolum",
    metaTitle: "Painters in Coolum | J. James Painting",
    metaDescription:
      "Painters in Coolum and Coolum Beach. Coastal exterior repaints, holiday-let refreshes, and family-home painting. Family-run Sunshine Coast painters since 1985.",
    localContext:
      "Coolum's split between the older fibro-and-timber beach stock close to the surf club and the newer brick-and-Hardie builds inland toward the freeway. Holiday lets and short-stays sit alongside the long-term family homes.",
    substrateNotes:
      "Salt drift reaches well past the dunes. Coast-side exteriors get a Dulux Weathershield spec by default. Pre-1990 timber and fibro stock often hides lead in the older paint layers; we test before sanding.",
    servicePriority: [
      "house-pre-sale-painting",
      "rental-property-repaint",
      "boutique-house-painting",
      "new-home-purchase-painting",
    ],
    projectSlugs: [],
    ctaLine: "Tell us the street and what you want painted. Quote within a day.",
  },
  {
    slug: "forest-glen",
    name: "Forest Glen",
    headlinePhrase: "Painters in Forest Glen",
    heroSubhead:
      "Mostly newer family stock with a handful of acreage holdouts. The kind of houses you paint before the kids ding the walls.",
    heroTreatment: "interior",
    primaryKeyword: "painters Forest Glen",
    metaTitle: "Painters in Forest Glen | J. James Painting",
    metaDescription:
      "Painters in Forest Glen. New-home repaints, family-home refreshes, and the occasional acreage exterior. Family-run Sunshine Coast painters since 1985.",
    localContext:
      "Forest Glen sits in the suburban band between Buderim and the hinterland. Most of the stock is 2000s onward family builds with Hardie cladding and Colorbond roofs. Newer-buyer repaints and child-proof finishes dominate the work mix.",
    substrateNotes:
      "Hardie cladding holds paint well but flashing junctions are where coast humidity finds its way in. Newer builds often need touch-up rather than full repaint, which we'll tell you straight at quote time.",
    servicePriority: [
      "new-home-purchase-painting",
      "rental-property-repaint",
      "house-pre-sale-painting",
      "boutique-house-painting",
    ],
    projectSlugs: [],
    ctaLine: "Just bought the place? Quote between settlement and move-in.",
  },
  {
    slug: "glasshouse-mountains",
    name: "Glasshouse Mountains",
    headlinePhrase: "Painters around the Glasshouse Mountains",
    heroSubhead:
      "Semi-rural acreage, weatherboard farmhouses, and the boutique builds that have started landing in the hills.",
    heroTreatment: "hinterland",
    primaryKeyword: "painters Glasshouse Mountains",
    metaTitle: "Painters around the Glasshouse Mountains | J. James Painting",
    metaDescription:
      "Painters serving the Glasshouse Mountains. Weatherboard farmhouse exteriors, acreage home repaints, boutique residential. Family-run Sunshine Coast painters since 1985.",
    localContext:
      "The Glasshouse area runs from working acreage to the newer boutique builds the hinterland has attracted in the last decade. Travel between jobs takes longer than the coast, so we usually batch multiple visits into the same week.",
    substrateNotes:
      "Older weatherboard farmhouses out here are often the original 1940s-50s timber. Lead-paint qualified prep is most of the work. Wide rural eaves and high gables push access work onto scaffold rather than ladder.",
    servicePriority: [
      "boutique-house-painting",
      "house-pre-sale-painting",
      "new-home-purchase-painting",
      "rental-property-repaint",
    ],
    projectSlugs: [],
    ctaLine: "Acreage or boutique build out this way? Worth a phone call first.",
  },
  {
    slug: "kawana",
    name: "Kawana",
    headlinePhrase: "Painters in Kawana",
    heroSubhead:
      "Canal-front homes, mid-Coast family stock, and the apartment work that sits behind the strip.",
    heroTreatment: "coastal",
    primaryKeyword: "painters Kawana",
    metaTitle: "Painters in Kawana | J. James Painting",
    metaDescription:
      "Painters in Kawana, Bokarina, Warana, and Wurtulla. Canal-front exteriors, family-home repaints, body-corp common-area work. Family-run since 1985.",
    localContext:
      "Kawana stretches from the surf side across to the canals at Wurtulla and Parrearra. The painting work splits between canal-front homes that copy the salt exposure of the beach houses and the inland family stock that mostly needs interior refreshes.",
    substrateNotes:
      "Canal-front render holds salt against the wall in a way pure beachfront doesn't, because the water stays close. We treat exposed render with a sealer + Weathershield spec. Body-corp common areas often need a colour match against the developer's original spec.",
    servicePriority: [
      "house-pre-sale-painting",
      "rental-property-repaint",
      "boutique-house-painting",
      "new-home-purchase-painting",
    ],
    projectSlugs: [],
    ctaLine: "Canal-front, beachside, or inland. Same number.",
  },
  {
    slug: "maleny",
    name: "Maleny",
    headlinePhrase: "Painters in Maleny",
    heroSubhead:
      "Heritage Queenslanders, hinterland weatherboards, and the boutique restorations that take the time they take.",
    heroTreatment: "hinterland",
    primaryKeyword: "painters Maleny",
    metaTitle: "Painters in Maleny | J. James Painting",
    metaDescription:
      "Painters in Maleny and the Blackall Range. Heritage Queenslander restoration, weatherboard repaints, boutique residential. Family-run since 1985.",
    localContext:
      "Maleny is heritage country. A lot of the houses are Queenslanders that have been in the same families for two or three generations. The painting work here is slower and more careful than on the coast. Prep is most of the bill, and the right traditional colour is half the conversation.",
    substrateNotes:
      "Pre-1970 weatherboard stock often carries lead in the older paint layers. We're qualified to test, prep, and remove it. Tongue-and-groove timber and bullnose verandah lining need different sanding than modern cladding, and we plan for it.",
    servicePriority: [
      "boutique-house-painting",
      "house-pre-sale-painting",
      "rental-property-repaint",
      "new-home-purchase-painting",
    ],
    projectSlugs: ["boutique-maleny"],
    ctaLine:
      "Heritage Queenslander or hinterland boutique? Start with a site visit.",
  },
  {
    slug: "noosa",
    name: "Noosa",
    headlinePhrase: "Painters in Noosa",
    heroSubhead:
      "Architectural coastal premium, character cottages, vendor refreshes for the listing market that drives the suburb.",
    heroTreatment: "coastal",
    primaryKeyword: "painters Noosa",
    metaTitle: "Painters in Noosa | J. James Painting",
    metaDescription:
      "Painters in Noosa, Noosaville, and Tewantin. Boutique architectural, pre-sale vendor repaints, rental turnovers. Family-run Sunshine Coast painters since 1985.",
    localContext:
      "Noosa's painting market is split three ways. Boutique exterior work on the architectural premium homes around Noosa Heads and Little Cove. Pre-sale vendor refreshes through the agency network. Investor and PM rental work across Noosaville and Tewantin.",
    substrateNotes:
      "Salt-air and high UV are the constants here. We spec exteriors heavier than inland equivalents and prefer brushed finishes over sprayed on coast-facing walls because the cleanup of overspray near landscaped gardens is more trouble than it saves.",
    servicePriority: [
      "boutique-house-painting",
      "house-pre-sale-painting",
      "rental-property-repaint",
      "new-home-purchase-painting",
    ],
    projectSlugs: ["boutique-noosa", "rental-noosa"],
    ctaLine: "Boutique, vendor, or rental. The agency network knows us.",
  },
  {
    slug: "peregian",
    name: "Peregian",
    headlinePhrase: "Painters in Peregian",
    heroSubhead:
      "Peregian Beach across to Peregian Springs. Coastal premium, holiday-home turnover, family stock in between.",
    heroTreatment: "coastal",
    primaryKeyword: "painters Peregian",
    metaTitle: "Painters in Peregian | J. James Painting",
    metaDescription:
      "Painters in Peregian Beach and Peregian Springs. Coastal premium homes, holiday-let turnover, family repaints. Family-run Sunshine Coast painters since 1985.",
    localContext:
      "Peregian Beach has the older surf-village stock and the newer architectural coastal homes; Peregian Springs is mostly post-2000s family builds around the golf course. Service requests bend toward boutique on the beach side and rental or pre-sale on the Springs side.",
    substrateNotes:
      "Beach-side timber gets the full coastal spec. Springs-side estates have body-corp colour rules in some streets, so we read the rules before quoting and line the spec up.",
    servicePriority: [
      "boutique-house-painting",
      "house-pre-sale-painting",
      "rental-property-repaint",
      "new-home-purchase-painting",
    ],
    projectSlugs: [],
    ctaLine: "Beach side or Springs side, same crew, same number.",
  },
  {
    slug: "sippy-downs",
    name: "Sippy Downs",
    headlinePhrase: "Painters in Sippy Downs",
    heroSubhead:
      "University precinct, lots of rentals, a lot of fast turnarounds between leases.",
    heroTreatment: "interior",
    primaryKeyword: "painters Sippy Downs",
    metaTitle: "Painters in Sippy Downs | J. James Painting",
    metaDescription:
      "Painters in Sippy Downs. Between-tenancy rental repaints, student-share turnovers, family-home refreshes. Family-run Sunshine Coast painters since 1985.",
    localContext:
      "Sippy Downs is the Coast's main rental-turnover suburb. The university and the surrounding family-home estates produce steady year-round work for between-tenancy repaints, with a peak around the late-January re-let window.",
    substrateNotes:
      "Student-share wall wear is heavier than family-home wear. We spec scuff-resistant systems on high-traffic walls and semi-gloss on all trims so the next bond clean doesn't take the paint off.",
    servicePriority: [
      "rental-property-repaint",
      "house-pre-sale-painting",
      "new-home-purchase-painting",
      "boutique-house-painting",
    ],
    projectSlugs: ["rental-sippy-downs"],
    ctaLine:
      "Property manager with a portfolio? We schedule multi-property weeks at this end of the Coast often.",
  },
  {
    slug: "sunshine-beach",
    name: "Sunshine Beach",
    headlinePhrase: "Painters in Sunshine Beach",
    heroSubhead:
      "Architectural coastal premium, salt-exposure repaints, and the vendor work the agency network sends our way.",
    heroTreatment: "coastal",
    primaryKeyword: "painters Sunshine Beach",
    metaTitle: "Painters in Sunshine Beach | J. James Painting",
    metaDescription:
      "Painters in Sunshine Beach. Boutique architectural coastal, salt-exposure exterior repaints, vendor pre-sale work. Family-run Sunshine Coast painters since 1985.",
    localContext:
      "Sunshine Beach is one of the Coast's most demanding paint environments. Salt-air carry from the surf works on every coast-facing wall. The architectural homes here are also some of the Coast's highest finish expectations, so the work is half spec, half execution.",
    substrateNotes:
      "Coast-facing render and timber here see the same exposure as Noosa Heads. We default to a heavier Weathershield spec and brush over spray on detail walls. Lead testing on pre-1990 stock is standard.",
    servicePriority: [
      "boutique-house-painting",
      "house-pre-sale-painting",
      "rental-property-repaint",
      "new-home-purchase-painting",
    ],
    projectSlugs: ["boutique-sunshine-beach", "pre-sale-sunshine-beach"],
    ctaLine: "Architectural, vendor, or just a tired coast-facing exterior? Send the address.",
  },
  {
    slug: "aura",
    name: "Aura",
    headlinePhrase: "Painters in Aura",
    heroSubhead:
      "New-build estate. Empty-house repaints between settlement and move-in. Quick turnarounds while the build is fresh.",
    heroTreatment: "interior",
    primaryKeyword: "painters Aura",
    metaTitle: "Painters in Aura | J. James Painting",
    metaDescription:
      "Painters in Aura. New-home repaints before move-in, colour consultation, builder defect-list work. Family-run Sunshine Coast painters since 1985.",
    localContext:
      "Aura is the Coast's biggest new-build estate. Most of the work here is repainting brand-new homes between settlement and move-in. Buyers who want the builder-spec white swapped out for a colour they'd actually chosen.",
    substrateNotes:
      "Builder-spec acrylic on Aura homes is fine but thin; one coat over it usually isn't enough for the swap. We plan two coats minimum on the colour change. Defect-list patches from the builder need to dry and be reworked before we go over them.",
    servicePriority: [
      "new-home-purchase-painting",
      "rental-property-repaint",
      "boutique-house-painting",
      "house-pre-sale-painting",
    ],
    projectSlugs: ["new-home-aura"],
    ctaLine:
      "Settlement coming up? Tell us the date and we'll fit between key handover and your removalist.",
  },
];

export const SUBURB_HUBS: Record<SuburbSlug, SuburbHubContent> = HUBS.reduce(
  (acc, hub) => {
    acc[hub.slug] = hub;
    return acc;
  },
  {} as Record<SuburbSlug, SuburbHubContent>,
);

export function getSuburbHub(slug: string): SuburbHubContent | undefined {
  return (SUBURB_HUBS as Record<string, SuburbHubContent | undefined>)[slug];
}

export const SUBURB_HUB_LIST: SuburbHubContent[] = HUBS;
