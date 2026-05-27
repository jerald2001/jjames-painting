/**
 * Real J. James project photography, mapped to the slots that render it.
 *
 * Source: 12 authentic project photos scraped from the legacy site
 * (assets/scraped/jjames-original/, see MANIFEST.md), copied into
 * public/photos/. Six exteriors (dj1, dj4, dj8, dj10, dj12, dj13) and six
 * interiors (dj2, dj3, dj5, dj7, dj9, dj11).
 *
 * Resolution note: these are 640x427. Fine for cards and tiles, borderline
 * for full-bleed heroes on retina displays. Replace with client-supplied
 * originals or shoot-day photography when available.
 *
 * Not wired (intentionally): the /about owner portrait (no real headshot
 * exists), the pre-sale before/after pair (no real "before" shot exists),
 * and service process-step thumbnails (kept as designed gradients). All
 * three are flagged for the photography day.
 */

import type { PhotoTreatment } from "@/content/services";

const BASE = "/photos";

/** Per-project hero + card image, keyed by project slug (content/projects.ts).
 *  Drives the home carousel, service project rails, suburb cards, /projects
 *  grid, and /projects/[slug] hero. */
export const PROJECT_IMAGES: Record<string, string> = {
  "boutique-sunshine-beach": `${BASE}/jjamesdj10.jpg`,
  "boutique-maleny": `${BASE}/jjamesdj8.jpg`,
  "boutique-noosa": `${BASE}/jjamesdj13.jpg`,
  "pre-sale-caloundra": `${BASE}/jjamesdj12.jpg`,
  "pre-sale-sunshine-beach": `${BASE}/jjamesdj1.jpg`,
  "pre-sale-buderim": `${BASE}/jjamesdj4.jpg`,
  "rental-noosa": `${BASE}/jjamesdj9.jpg`,
  "rental-buderim": `${BASE}/jjamesdj1.jpg`,
  "rental-sippy-downs": `${BASE}/jjamesdj3.jpg`,
  "new-home-aura": `${BASE}/jjamesdj11.jpg`,
  "new-home-buderim-hinterland": `${BASE}/jjamesdj7.jpg`,
  "new-home-caloundra": `${BASE}/jjamesdj5.jpg`,
};

/** Generic fallback by photo treatment, for slots with no project context. */
export const TREATMENT_IMAGES: Record<PhotoTreatment, string> = {
  coastal: `${BASE}/jjamesdj10.jpg`,
  hinterland: `${BASE}/jjamesdj8.jpg`,
  interior: `${BASE}/jjamesdj2.jpg`,
  exterior: `${BASE}/jjamesdj4.jpg`,
};

/** Per-service hero, tile, and final-CTA image (strongest shot per line). */
export const SERVICE_IMAGES: Record<string, string> = {
  "house-pre-sale-painting": `${BASE}/jjamesdj12.jpg`,
  "rental-property-repaint": `${BASE}/jjamesdj9.jpg`,
  "new-home-purchase-painting": `${BASE}/jjamesdj11.jpg`,
  "boutique-house-painting": `${BASE}/jjamesdj8.jpg`,
};

/** Suburb hero background. Local project photo where one exists, else a
 *  treatment-appropriate representative shot. NOTE: these are real regional
 *  J. James homes, not photographed in the named suburb. */
export const SUBURB_IMAGES: Record<string, string> = {
  buderim: `${BASE}/jjamesdj4.jpg`,
  caloundra: `${BASE}/jjamesdj12.jpg`,
  coolum: `${BASE}/jjamesdj1.jpg`,
  "forest-glen": `${BASE}/jjamesdj2.jpg`,
  "glasshouse-mountains": `${BASE}/jjamesdj7.jpg`,
  kawana: `${BASE}/jjamesdj10.jpg`,
  maleny: `${BASE}/jjamesdj8.jpg`,
  noosa: `${BASE}/jjamesdj13.jpg`,
  peregian: `${BASE}/jjamesdj12.jpg`,
  "sippy-downs": `${BASE}/jjamesdj3.jpg`,
  "sunshine-beach": `${BASE}/jjamesdj10.jpg`,
  aura: `${BASE}/jjamesdj11.jpg`,
};

/** Home hero — dusk character home matches the "late afternoon light" copy. */
export const HOME_HERO_IMAGE = `${BASE}/jjamesdj13.jpg`;
/** Home final-CTA background. */
export const HOME_CTA_IMAGE = `${BASE}/jjamesdj4.jpg`;
