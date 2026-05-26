/**
 * Master list of launch project case studies.
 * Single source of truth for the home carousel, service-page projects rails,
 * and /projects/[slug] page scaffolds.
 *
 * Phase 4 adds real photography, before/after pairs, longer write-ups, and
 * client quotes per launch case study (see docs/seo/content-calendar.md).
 * Until then each slug renders a minimal placeholder page that resolves the
 * link without claiming things we can't back up.
 */

import type { PhotoTreatment } from "./services";
import type { PriorityServiceSlug } from "@/lib/brand";

export type ProjectSummary = {
  slug: string;
  suburb: string;
  scope: string;
  service: PriorityServiceSlug;
  treatment: PhotoTreatment;
};

export const PROJECTS: ProjectSummary[] = [
  {
    slug: "boutique-sunshine-beach",
    suburb: "Sunshine Beach",
    scope: "Architectural coastal, exterior plus interior",
    service: "boutique-house-painting",
    treatment: "coastal",
  },
  {
    slug: "boutique-maleny",
    suburb: "Maleny",
    scope: "Heritage Queenslander restoration",
    service: "boutique-house-painting",
    treatment: "hinterland",
  },
  {
    slug: "boutique-noosa",
    suburb: "Noosa",
    scope: "Architectural new build, limewash exterior",
    service: "boutique-house-painting",
    treatment: "coastal",
  },
  {
    slug: "pre-sale-caloundra",
    suburb: "Caloundra",
    scope: "Vendor 14-day pre-sale refresh",
    service: "house-pre-sale-painting",
    treatment: "exterior",
  },
  {
    slug: "pre-sale-sunshine-beach",
    suburb: "Sunshine Beach",
    scope: "Premium vendor with stylist",
    service: "house-pre-sale-painting",
    treatment: "coastal",
  },
  {
    slug: "pre-sale-buderim",
    suburb: "Buderim",
    scope: "Investor selling, exterior only",
    service: "house-pre-sale-painting",
    treatment: "exterior",
  },
  {
    slug: "rental-noosa",
    suburb: "Noosa",
    scope: "Between-tenancy investment turnaround",
    service: "rental-property-repaint",
    treatment: "interior",
  },
  {
    slug: "rental-buderim",
    suburb: "Buderim",
    scope: "Multi-property landlord portfolio",
    service: "rental-property-repaint",
    treatment: "exterior",
  },
  {
    slug: "rental-sippy-downs",
    suburb: "Sippy Downs",
    scope: "Student rental, 3-day turnaround",
    service: "rental-property-repaint",
    treatment: "interior",
  },
  {
    slug: "new-home-aura",
    suburb: "Aura",
    scope: "Empty-house full interior repaint",
    service: "new-home-purchase-painting",
    treatment: "interior",
  },
  {
    slug: "new-home-buderim-hinterland",
    suburb: "Buderim hinterland",
    scope: "First-home buyer with colour consult",
    service: "new-home-purchase-painting",
    treatment: "hinterland",
  },
  {
    slug: "new-home-caloundra",
    suburb: "Caloundra",
    scope: "Whole-home interior plus ceilings",
    service: "new-home-purchase-painting",
    treatment: "interior",
  },
];

export function findProject(slug: string): ProjectSummary | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
