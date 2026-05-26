/**
 * Per-service content for the priority service template.
 * Wireframe reference: docs/layouts/service-pre-sale.md.
 *
 * Copy is Phase 3 draft (already anti-slop checked at the wireframe stage).
 * Phase 4 polishes against copywriting/anti-slop-kill-list.md and runs
 * claude-seo:seo-content + claude-seo:seo-page on each page.
 */

import type { PriorityServiceSlug } from "@/lib/brand";

export type PhotoTreatment = "coastal" | "hinterland" | "interior" | "exterior";

export type ServiceContent = {
  slug: PriorityServiceSlug;
  /** Primary keyword per docs/seo/site-structure.md. */
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    /** Multi-line H1; lines separated by \n. */
    headline: string;
    subhead: string;
    ctaLabel: string;
    photoTreatment: PhotoTreatment;
  };
  intro: {
    audienceHeading: string;
    audienceBody: string;
    outcomeHeading: string;
    outcomeBody: string;
  };
  /** Optional 3-card "why this works" block. Boutique skips it. */
  roi?: {
    eyebrow: string;
    heading: string;
    cards: Array<{ title: string; body: string }>;
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: Array<{
      n: string;
      title: string;
      body: string;
      treatment: PhotoTreatment;
    }>;
  };
  /** Optional before/after spotlight. Linked to a launch case study. */
  beforeAfter?: {
    eyebrow: string;
    heading: string;
    scope: string;
    timeline: string;
    caseStudySlug: string;
  };
  /** Cross-link to /for-agents. Pre-Sale + Rental ship this; New Home + Boutique skip. */
  agentBridge?: {
    heading: string;
    body: string;
    quote?: { body: string; attribution: string };
  };
  /** Colour swatch grid. Pre-Sale ships; others skip or replace. */
  palette?: {
    eyebrow: string;
    heading: string;
    leadMagnet: { label: string; href: string };
    swatches: Array<{ brand: string; name: string; hex: string; note: string }>;
  };
  /** 3 project example cards. */
  projects: Array<{
    slug: string;
    suburb: string;
    scope: string;
    treatment: PhotoTreatment;
  }>;
  faq: Array<{ q: string; a: string }>;
  related: {
    services: Array<{ slug: PriorityServiceSlug; anchor: string }>;
    blog: Array<{ slug: string; title: string }>;
  };
  finalCTA: {
    heading: string;
    subhead: string;
    ctaLabel: string;
    photoTreatment: PhotoTreatment;
  };
};

const PRE_SALE: ServiceContent = {
  slug: "house-pre-sale-painting",
  primaryKeyword: "pre-sale house painter Sunshine Coast",
  metaTitle: "Pre-Sale House Painting Sunshine Coast | Painted Ready for Market",
  metaDescription:
    "Fast-turn pre-sale painting for Sunshine Coast vendors. Neutral palettes, agent coordination, photo-ready in days. Family-run since 1985.",
  hero: {
    eyebrow: "House pre-sale painting",
    headline: "Painted to sell.\nReady for inspection\nin days, not weeks.",
    subhead:
      "For vendors with a listing date and an agent who wants the photos to land. Neutral palettes that broaden buyer appeal. Tight scheduling around stylists and inspections.",
    ctaLabel: "Get a pre-sale quote",
    photoTreatment: "exterior",
  },
  intro: {
    audienceHeading: "For vendors and agents getting a home ready for the market.",
    audienceBody:
      "Selling in 30–90 days. Photos in two weeks. Inspections starting soon. We&rsquo;ve been painting Sunshine Coast homes between contract and listing for over 40 years.",
    outcomeHeading: "A fresh coat is one of the highest-return improvements before a listing.",
    outcomeBody:
      "Neutral palettes photograph well, broaden buyer appeal, and signal a well-maintained home from the kerb. On the right schedule, the paint job pays for itself in the sale price.",
  },
  roi: {
    eyebrow: "Why a pre-sale paint pays",
    heading: "Three reasons vendors choose to repaint before listing.",
    cards: [
      {
        title: "High-ROI cosmetic improvement",
        body: "Most real estate research puts a fresh coat near the top of the cost-to-value ratio for cosmetic pre-listing improvements. The work is visible from every photo.",
      },
      {
        title: "Faster days on market",
        body: "Homes that look move-in ready spend less time on market. Neutral, even, photograph-friendly finishes are what buyers are scrolling for.",
      },
      {
        title: "Stronger first listing photos",
        body: "The day photos go up is the day the listing earns its scrolls. A repainted home gives the photographer something that lights well, holds colour, and feels intentional.",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    heading: "Four steps from quote to listing.",
    steps: [
      {
        n: "01",
        title: "Quote within 24 hours of your call.",
        body: "Quick site visit, honest scope, transparent pricing. We&rsquo;ll tell you which parts of the house are worth painting and which aren&rsquo;t.",
        treatment: "exterior",
      },
      {
        n: "02",
        title: "Scheduled around your listing date.",
        body: "We block windows that fit your agent&rsquo;s calendar. Photo days, inspection days, stylist days. The schedule fits the deadline.",
        treatment: "interior",
      },
      {
        n: "03",
        title: "Paint in 3–7 days.",
        body: "Most pre-sale jobs finish inside a single week. Faster for partial scopes. We work clean, we work quiet, we work around tenants if you&rsquo;re still occupied.",
        treatment: "interior",
      },
      {
        n: "04",
        title: "Walkthrough before photo day.",
        body: "Final touch-ups before the stylists arrive. You sign off, we leave. The listing photos look the way the home should.",
        treatment: "exterior",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Recent pre-sale work",
    heading: "Caloundra, 14 days to listing.",
    scope: "Full exterior repaint, weatherboard restoration, trim and gutter line refresh. Dulux Weathershield system.",
    timeline: "5 working days. Listing photos two days later.",
    caseStudySlug: "pre-sale-caloundra",
  },
  agentBridge: {
    heading: "For real estate agents and property managers.",
    body: "Vendor-paid or agency-arranged invoicing. Before and after photo packs for your owner reports. Direct PM coordination when the property&rsquo;s tenanted.",
    quote: {
      body: "Jamie&rsquo;s team painted three of our vendor listings this quarter. Each one was ready for photo day on time.",
      attribution: "Real estate partner, Noosa",
    },
  },
  palette: {
    eyebrow: "Agent-recommended palettes",
    heading: "Neutrals that photograph well.",
    leadMagnet: {
      label: "Download our pre-sale colour guide",
      href: "/lead-magnet/pre-sale-colour-guide",
    },
    swatches: [
      {
        brand: "Dulux",
        name: "Natural White Half",
        hex: "#EDE7DA",
        note: "Warm interior neutral. Works across most living spaces.",
      },
      {
        brand: "Dulux",
        name: "Lexicon Quarter",
        hex: "#E7E8E5",
        note: "Cool, photographs cleanly under coastal southern light.",
      },
      {
        brand: "Taubmans",
        name: "White Tea",
        hex: "#F0E8D9",
        note: "Subtle warmth for older Sunshine Coast homes.",
      },
      {
        brand: "Dulux",
        name: "Antique White U.S.A.",
        hex: "#E9E1CC",
        note: "The classic Australian builder neutral. Broad buyer appeal.",
      },
    ],
  },
  projects: [
    {
      slug: "pre-sale-caloundra",
      suburb: "Caloundra",
      scope: "Vendor 14-day refresh",
      treatment: "exterior",
    },
    {
      slug: "pre-sale-sunshine-beach",
      suburb: "Sunshine Beach",
      scope: "Premium vendor with stylist",
      treatment: "coastal",
    },
    {
      slug: "pre-sale-buderim",
      suburb: "Buderim",
      scope: "Investor selling, exterior only",
      treatment: "exterior",
    },
  ],
  faq: [
    {
      q: "How fast can you turn around a pre-sale paint?",
      a: "Most pre-sale jobs finish in 3–7 working days. Smaller scopes (interior touch-ups, single-coat freshens) can be done in 1–2 days. Larger full-exterior repaints sit at the higher end. Call with your listing date and we&rsquo;ll commit to a window.",
    },
    {
      q: "Do you coordinate with my real estate agent and stylist?",
      a: "Yes. We&rsquo;ll schedule directly with the agent and around the stylist&rsquo;s photo day. Many of our pre-sale clients come to us through Sunshine Coast agency referrals, so the workflow is familiar.",
    },
    {
      q: "How much does a pre-sale repaint cost on the Sunshine Coast?",
      a: "Cost depends on square metres, condition, scope (interior/exterior/both), and access. A typical 4-bedroom interior refresh sits in one range, full exterior in another, and combined jobs split the difference. We quote transparently after a free site visit.",
    },
    {
      q: "What colours photograph best for property listings?",
      a: "Neutral, slightly warm whites broaden buyer appeal and photograph evenly under both natural and styled lighting. We recommend Dulux Natural White Half, Lexicon Quarter, Antique White U.S.A. and Taubmans White Tea as the safe vendor set. See the palette section above.",
    },
    {
      q: "Can you work around inspection bookings?",
      a: "Yes. We work around scheduled open homes and private inspections. If you&rsquo;re still occupying the home through the painting period, we plan rooms in an order that keeps you living comfortably while we work.",
    },
    {
      q: "What if my listing date moves?",
      a: "It happens. Tell us as soon as the new date is locked and we&rsquo;ll re-schedule the window. The earlier we know, the easier the reschedule.",
    },
  ],
  related: {
    services: [
      {
        slug: "boutique-house-painting",
        anchor: "For higher-end vendors with architectural or character homes",
      },
      {
        slug: "rental-property-repaint",
        anchor: "For investor-vendors selling a rented property",
      },
    ],
    blog: [
      {
        slug: "best-neutral-paint-colours-selling-sunshine-coast-home",
        title: "Best neutral paint colours for selling a Sunshine Coast home",
      },
      {
        slug: "pre-sale-paint-refresh-checklist-real-estate-agents",
        title: "The pre-sale paint refresh checklist for real estate agents",
      },
    ],
  },
  finalCTA: {
    heading: "Get a pre-sale quote.",
    subhead: "Address, beds, target listing date. We reply within one business day.",
    ctaLabel: "Open the quote form",
    photoTreatment: "interior",
  },
};

const RENTAL: ServiceContent = {
  slug: "rental-property-repaint",
  primaryKeyword: "rental property painter Sunshine Coast",
  metaTitle: "Rental Property Repaint Sunshine Coast | Between-Tenancy Painters",
  metaDescription:
    "Fast between-tenancy rental repaints across the Sunshine Coast. Durable finishes, PM coordination, multi-property packages. Family-run since 1985.",
  hero: {
    eyebrow: "Rental property repaint",
    headline: "Repaint between tenants.\nRe-let faster.",
    subhead:
      "For investors and property managers turning over a rental on a tight schedule. Durable neutral finishes, PM coordination, multi-property packages, before and after photos for owner reports.",
    ctaLabel: "Get a rental repaint quote",
    photoTreatment: "interior",
  },
  intro: {
    audienceHeading: "For landlords and property managers between tenancies.",
    audienceBody:
      "Vacancy week is expensive. Painters that show up late cost rent. We&rsquo;ve been turning Sunshine Coast rentals between tenants since 1985.",
    outcomeHeading: "Durable, neutral, broadly appealing.",
    outcomeBody:
      "Semi-gloss trims that survive bond cleans. Washable wall paints. Scuff-resistant systems on high-traffic walls. Neutral palettes that don&rsquo;t put the next tenant off.",
  },
  roi: {
    eyebrow: "Why landlords repaint between tenants",
    heading: "Three reasons the paint cost earns itself back.",
    cards: [
      {
        title: "Re-let faster",
        body: "A freshly painted rental shows better at open homes and on listing photos. The vacancy week pays for itself.",
      },
      {
        title: "Higher rental yield",
        body: "Updated finishes pull better-quality applicants and support a small step up in advertised rent on most markets.",
      },
      {
        title: "Deductible repair",
        body: "Repainting is treated as a deductible repair in many tax situations. Talk to your accountant; we&rsquo;ll provide the invoice and scope of work for your records.",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    heading: "Four steps from walkthrough to re-let.",
    steps: [
      {
        n: "01",
        title: "Quick walkthrough and quote.",
        body: "We can quote off photos or pop in between tenants. Most rental quotes come back within 24 hours.",
        treatment: "interior",
      },
      {
        n: "02",
        title: "Scheduled to vacate dates.",
        body: "We work to the day the keys come back. Carpet cleaners and pest control after us if needed.",
        treatment: "interior",
      },
      {
        n: "03",
        title: "Painted in 2–4 days.",
        body: "Most single-property between-tenancy jobs finish inside a working week. Multi-property portfolios scheduled in a wave.",
        treatment: "interior",
      },
      {
        n: "04",
        title: "Before and after photos for owner reports.",
        body: "We send through the photo pack the day we finish. Direct invoicing to the agency or to the owner.",
        treatment: "exterior",
      },
    ],
  },
  agentBridge: {
    heading: "For property managers and agencies.",
    body: "Multi-property scheduling, direct PM coordination, key collection and handover, before and after photo packs for every property. The painter PMs recommend without checking first.",
    quote: {
      body: "We use J. James for the rentals we don&rsquo;t want to think about twice.",
      attribution: "Property manager, Buderim",
    },
  },
  projects: [
    {
      slug: "rental-noosa",
      suburb: "Noosa",
      scope: "Between-tenancy investment turnaround",
      treatment: "interior",
    },
    {
      slug: "rental-buderim",
      suburb: "Buderim",
      scope: "Multi-property landlord portfolio",
      treatment: "exterior",
    },
    {
      slug: "rental-sippy-downs",
      suburb: "Sippy Downs",
      scope: "Student rental, 3-day turnaround",
      treatment: "interior",
    },
  ],
  faq: [
    {
      q: "How fast can you repaint between tenants?",
      a: "Most single-property between-tenancy jobs finish in 2–4 working days. Larger or multi-property scopes scheduled in a wave. Tell us the vacate and re-let dates and we&rsquo;ll fit the window.",
    },
    {
      q: "Can you work while the property is still occupied?",
      a: "We can, but it&rsquo;s usually quicker and cheaper to paint between tenants when the place is empty. If the tenant is leaving in stages, we&rsquo;ll plan rooms around them.",
    },
    {
      q: "Do you do multi-property portfolios?",
      a: "Yes. We schedule multi-property landlords in waves so the team can move efficiently between sites. Single invoice across the portfolio, single point of contact.",
    },
    {
      q: "Which paint systems do you use on rentals?",
      a: "Semi-gloss trims, washable matte or low-sheen on walls, scuff-resistant systems on high-traffic areas. We use Dulux and Taubmans systems matched to the wear pattern. The trims survive bond cleans.",
    },
    {
      q: "Can you invoice the agency directly?",
      a: "Yes, agency-invoiced or owner-invoiced, your call. Most of our rental work runs through property managers who hand us keys and collect the photo pack at the end.",
    },
  ],
  related: {
    services: [
      {
        slug: "house-pre-sale-painting",
        anchor: "For investor-vendors selling instead of re-letting",
      },
      {
        slug: "boutique-house-painting",
        anchor: "For premium short-stay or executive-rental properties",
      },
    ],
    blog: [
      {
        slug: "cost-to-repaint-rental-sunshine-coast",
        title: "How much does it cost to repaint a rental between tenants on the Sunshine Coast?",
      },
      {
        slug: "working-with-property-managers-coordinating-tenant-turnover-paint",
        title: "Working with property managers — coordinating tenant-turnover paint",
      },
    ],
  },
  finalCTA: {
    heading: "Get a rental repaint quote.",
    subhead: "Property address, beds, vacate date. We reply within one business day.",
    ctaLabel: "Open the quote form",
    photoTreatment: "interior",
  },
};

const NEW_HOME: ServiceContent = {
  slug: "new-home-purchase-painting",
  primaryKeyword: "new home painter Sunshine Coast",
  metaTitle: "New Home Painting Sunshine Coast | Paint Before You Move In",
  metaDescription:
    "Repaint your new Sunshine Coast home before you move in. Empty-house painting, colour consultation, settlement-to-keys scheduling. Family-run since 1985.",
  hero: {
    eyebrow: "New home painting",
    headline: "Just bought a place?\nPaint it before\nyou move in.",
    subhead:
      "For new owners between settlement and move-in. Empty house, faster job, no furniture to shift. Colour consultation included. We co-ordinate with your conveyancer and removalist.",
    ctaLabel: "Get a new-home quote",
    photoTreatment: "interior",
  },
  intro: {
    audienceHeading: "For new owners between settlement and move-in.",
    audienceBody:
      "Two to six weeks between contract and the day the furniture arrives. The single best time to repaint. We&rsquo;ve been doing settlement-to-keys paints across the Sunshine Coast for 40 years.",
    outcomeHeading: "Empty house. Easier job. Better result.",
    outcomeBody:
      "No furniture to shift, no living in dust. The painters cover the floors, paint every wall, every trim, every ceiling that needs it, and leave a clean house ready for your removalist.",
  },
  roi: {
    eyebrow: "Why paint before moving in",
    heading: "Three reasons new owners do this first.",
    cards: [
      {
        title: "Empty-house economics",
        body: "Painting an empty house is faster, cheaper, and cleaner than painting around your furniture six months later. Most homes paint in half the time.",
      },
      {
        title: "Settle once",
        body: "Move into a finished home, not a renovation site. The day the removalist arrives, the house is done.",
      },
      {
        title: "Make it yours from day one",
        body: "Colour consultation included. We&rsquo;ll bring sample pots, walk you through the light at different times of day, and help you commit to a palette.",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    heading: "Four steps from settlement to keys.",
    steps: [
      {
        n: "01",
        title: "Quote after settlement is confirmed.",
        body: "We can quote off photos and the contract. A site visit between settlement and possession locks the scope.",
        treatment: "exterior",
      },
      {
        n: "02",
        title: "Colour consultation.",
        body: "We&rsquo;ll bring sample pots and look at the house with you. Light, fittings, floors, future furniture. Decide together.",
        treatment: "interior",
      },
      {
        n: "03",
        title: "Painted between settlement and move-in.",
        body: "Most whole-home interior repaints finish inside 5–10 working days. Co-ordinated around your removalist date.",
        treatment: "interior",
      },
      {
        n: "04",
        title: "Walk through before the truck arrives.",
        body: "You walk through, sign off, the removalist arrives, the furniture goes in. The first night you sleep in the house, it&rsquo;s the version you wanted.",
        treatment: "interior",
      },
    ],
  },
  projects: [
    {
      slug: "new-home-aura",
      suburb: "Aura",
      scope: "Empty-house full interior repaint",
      treatment: "interior",
    },
    {
      slug: "new-home-buderim-hinterland",
      suburb: "Buderim hinterland",
      scope: "First-home buyer with colour consult",
      treatment: "hinterland",
    },
    {
      slug: "new-home-caloundra",
      suburb: "Caloundra",
      scope: "Whole-home interior + ceilings",
      treatment: "interior",
    },
  ],
  faq: [
    {
      q: "How much does it cost to repaint a whole house interior?",
      a: "Whole-home interior repaints vary by square metres, ceiling heights, and scope (walls only / walls plus trims / walls plus trims plus ceilings). We quote transparently after a site visit. Empty houses paint faster, which keeps the price lower than a furnished repaint.",
    },
    {
      q: "Do you offer colour consultation?",
      a: "Yes, included. We bring sample pots, look at the house with you in natural light, talk through your furniture and floors, and help you commit to a palette. Most clients land on three colours: walls, trims, ceilings.",
    },
    {
      q: "Can you co-ordinate with my conveyancer or removalist?",
      a: "Yes. Tell us the settlement and removalist dates and we&rsquo;ll fit the window. The conveyancer&rsquo;s involvement usually stops at handover; we then deal with you and the removalist directly.",
    },
    {
      q: "What about builder&rsquo;s defects on a brand-new home?",
      a: "We&rsquo;ll happily work around a builder&rsquo;s defect list. If the build is still under warranty, we&rsquo;ll paint over their patches and rework once the builder&rsquo;s patches dry.",
    },
    {
      q: "Can you do exterior at the same time?",
      a: "Yes. Many new-owner jobs combine interior with exterior touch-ups, full exterior repaints, or coastal product upgrades. Tell us what you want and we&rsquo;ll scope both at once.",
    },
  ],
  related: {
    services: [
      {
        slug: "boutique-house-painting",
        anchor: "For buyers of architectural, heritage or coastal-premium homes",
      },
      {
        slug: "house-pre-sale-painting",
        anchor: "For buyers planning to sell again within a few years",
      },
    ],
    blog: [
      {
        slug: "paint-before-or-after-you-move-in",
        title: "Should you paint before or after you move in?",
      },
      {
        slug: "colour-consultation-first-home-buyers",
        title: "Colour consultation for first-home buyers",
      },
    ],
  },
  finalCTA: {
    heading: "Get a new-home quote.",
    subhead: "Settlement date, move-in date, address. We reply within one business day.",
    ctaLabel: "Open the quote form",
    photoTreatment: "interior",
  },
};

const BOUTIQUE: ServiceContent = {
  slug: "boutique-house-painting",
  primaryKeyword: "boutique house painter Sunshine Coast",
  metaTitle: "Boutique House Painters Sunshine Coast | Heritage, Coastal, Architectural",
  metaDescription:
    "Boutique residential painting across Noosa, Sunshine Beach, Maleny and the Sunshine Coast. Heritage Queenslanders, architectural new builds, coastal premium. Family-run since 1985.",
  hero: {
    eyebrow: "Boutique house painting",
    headline: "Painting for homes\nthat deserve more\nthan a quick coat.",
    subhead:
      "Architectural, heritage and coastal-premium homes across Noosa, Sunshine Beach, Peregian, Buderim hinterland and Maleny. Extra prep. Expert surface diagnosis. Master-painter-level finish.",
    ctaLabel: "Book a consultation",
    photoTreatment: "coastal",
  },
  intro: {
    audienceHeading: "For owners of homes worth getting right.",
    audienceBody:
      "Architectural new builds. Coastal premium. Character and heritage Queenslanders. The houses where the detail in the finish is the difference between a paint job and a result.",
    outcomeHeading: "The finish you can feel before you can see it.",
    outcomeBody:
      "Prep that takes as long as the painting. Product systems specified for the substrate, the exposure, and the design. Colour consultation that goes deeper than three swatches. Master-painter execution on every cut, every brushline, every cornice.",
  },
  process: {
    eyebrow: "How we work",
    heading: "Five steps from first conversation to final walkthrough.",
    steps: [
      {
        n: "01",
        title: "Site visit and consultation.",
        body: "We come, we look, we listen. Substrate, condition, architecture, your taste. Most boutique jobs start with an hour-long walkthrough.",
        treatment: "coastal",
      },
      {
        n: "02",
        title: "Detailed proposal.",
        body: "Written scope, product systems, colour direction, timing. We&rsquo;ll explain what we&rsquo;d do, what we wouldn&rsquo;t, and why.",
        treatment: "hinterland",
      },
      {
        n: "03",
        title: "Meticulous prep.",
        body: "Surface diagnosis, repairs, sanding, sealing, undercoating. Most of the time on a boutique job is here.",
        treatment: "exterior",
      },
      {
        n: "04",
        title: "Finish.",
        body: "Brush, roll, or spray as the surface and finish demand. Limewash, lime-render, specialty coatings where they fit.",
        treatment: "interior",
      },
      {
        n: "05",
        title: "Final walkthrough.",
        body: "We walk every wall with you. Touch-ups before we leave. Care notes for the finish where they matter.",
        treatment: "coastal",
      },
    ],
  },
  projects: [
    {
      slug: "boutique-sunshine-beach",
      suburb: "Sunshine Beach",
      scope: "Architectural coastal, exterior + interior",
      treatment: "coastal",
    },
    {
      slug: "boutique-maleny",
      suburb: "Maleny",
      scope: "Heritage Queenslander restoration",
      treatment: "hinterland",
    },
    {
      slug: "boutique-noosa",
      suburb: "Noosa",
      scope: "Architectural new build, limewash exterior",
      treatment: "coastal",
    },
  ],
  faq: [
    {
      q: "Do you paint heritage Queenslanders?",
      a: "Yes, regularly. Many of the homes we work on in Maleny, Buderim hinterland and Noosa are weatherboard Queenslanders that need lead-paint qualified preparation, traditional colour palettes, and careful timber repair before paint.",
    },
    {
      q: "Do you do limewash, lime-render and specialty coatings?",
      a: "Yes. We work with limewash and lime-render finishes on coastal premium homes, and apply specialty coatings (textured, metallic, acoustic) where the architecture calls for them. We&rsquo;ll spec the system to the substrate and the design intent.",
    },
    {
      q: "What product systems do you use on coastal exteriors?",
      a: "Dulux Weathershield and Taubmans All Weather as the default spine. We adjust by exposure, substrate, and finish. Coast-facing walls usually carry a heavier system than protected walls; we spec accordingly.",
    },
    {
      q: "Can you work with my architect or interior designer?",
      a: "Yes. Many of our boutique jobs come through architects and designers we&rsquo;ve worked with for years. We&rsquo;ll attend specification meetings, mock-up colours on site, and adjust to the design intent.",
    },
    {
      q: "Are you accredited?",
      a: "Yes. Dulux Accredited Painter and Taubmans Endorsed. QBCC licensed. Lead-based paint and asbestos qualifications. We can provide certificates on request.",
    },
  ],
  related: {
    services: [
      {
        slug: "house-pre-sale-painting",
        anchor: "For vendors of architectural or character homes",
      },
      {
        slug: "new-home-purchase-painting",
        anchor: "For buyers moving into a premium home",
      },
    ],
    blog: [
      {
        slug: "heritage-queenslander-repaints-whats-different",
        title: "Heritage Queenslander repaints — what&rsquo;s different",
      },
      {
        slug: "exterior-paint-coastal-conditions-sunshine-coast",
        title: "Choosing exterior paint for Sunshine Coast coastal conditions",
      },
    ],
  },
  finalCTA: {
    heading: "Book a consultation.",
    subhead: "Address, type of home, your timeline. We&rsquo;ll come and look.",
    ctaLabel: "Book a consultation",
    photoTreatment: "coastal",
  },
};

export const SERVICE_CONTENT: Record<PriorityServiceSlug, ServiceContent> = {
  "house-pre-sale-painting": PRE_SALE,
  "rental-property-repaint": RENTAL,
  "new-home-purchase-painting": NEW_HOME,
  "boutique-house-painting": BOUTIQUE,
};
