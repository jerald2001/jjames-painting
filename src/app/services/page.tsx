import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { QuoteCTA } from "@/components/content/quote-cta";
import { PhoneLink } from "@/components/content/phone-link";
import { TrustRail } from "@/components/content/trust-rail";
import {
  LEGACY_SERVICES,
  PRIORITY_SERVICES,
  type LegacyServiceSlug,
} from "@/lib/brand";
import {
  breadcrumbSchema,
  combineGraph,
  localBusinessSchema,
} from "@/lib/schema";

const title = "All Painting Services on the Sunshine Coast | J. James Painting";
const description =
  "Four signature service lines plus the residential, commercial, industrial, and specialty coatings work we've carried since 1985. Family-run Sunshine Coast painting.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title,
    description,
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const PRIORITY_TREATMENT: Record<
  string,
  "coastal" | "hinterland" | "interior" | "exterior"
> = {
  "boutique-house-painting": "coastal",
  "house-pre-sale-painting": "exterior",
  "rental-property-repaint": "interior",
  "new-home-purchase-painting": "hinterland",
};

const LEGACY_BLURBS: Record<LegacyServiceSlug, string> = {
  residential:
    "General residential repaints outside the four signature lines. Whole-house refreshes, single rooms, exterior touch-ups.",
  commercial:
    "Shopfronts, office fitouts, restaurant interiors, body-corp common areas. After-hours scheduling when the trade hours don't suit.",
  industrial:
    "Warehouses, factories, plant rooms. Spec'd for the substrate and the access. PPE and safety paperwork to suit the site.",
  interior:
    "Walls, trims, ceilings, feature walls. Whole-house interior repaints or one room at a time.",
  exterior:
    "Full exteriors, weatherboard restoration, rendered walls, coastal product systems. Heavier specs on coast-facing walls.",
  "body-corporate":
    "Common-area maintenance programs for unit blocks and resorts. Multi-year plans with annual reviews.",
  "specialty-coatings":
    "Limewash, lime-render, textured finishes, metallic and protective coatings. Specified to substrate and design intent.",
  "lead-asbestos-removal":
    "Qualified pre-1990 prep and removal under Queensland regulations. Test, plan, remove, document.",
};

export default function ServicesIndexPage() {
  const graph = combineGraph(
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
    ]),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <Section surface="cream" spacing="lg" topBorder={false}>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h1
              className="font-heading text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-navy md:text-7xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              What we paint, in order.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Four signature service lines for the kind of work that defines
              Sunshine Coast property today. Plus the residential, commercial,
              industrial, and specialty coatings work we&rsquo;ve carried since
              1985.
            </p>
          </div>
        </Container>
      </Section>

      <TrustRail />

      <Section surface="cream" spacing="lg">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>Signature services</Eyebrow>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
              Four conversations the Coast is actually having.
            </h2>
          </div>

          <ul className="grid gap-6 md:grid-cols-2">
            {PRIORITY_SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
                >
                  <article className="flex h-full w-full flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-md">
                      <PhotoPlaceholder
                        alt={`${s.title} project example`}
                        treatment={PRIORITY_TREATMENT[s.slug] ?? "coastal"}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, oklch(0.225 0.145 268 / 0) 50%, oklch(0.225 0.145 268 / 0.6) 100%)",
                        }}
                      />
                    </div>
                    <div className="mt-5 flex flex-1 items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-2xl font-medium leading-tight text-navy md:text-3xl">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">
                          {s.blurb}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={22}
                        className="mt-1 shrink-0 text-green transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section surface="cream-cool" spacing="lg">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>Everything else we paint</Eyebrow>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
              The work behind the signature lines.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
              We still do all of it. Call about anything below or send the
              property address through the quote form. We&rsquo;ll quote the
              same way we quote the signature work.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEGACY_SERVICES.map((s) => (
              <li
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24 rounded-md border border-navy/10 bg-cream p-6 md:p-7"
              >
                <h3 className="font-heading text-xl font-medium leading-tight text-navy md:text-2xl">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                  {LEGACY_BLURBS[s.slug]}
                </p>
                <Link
                  href={`/contact?service=other#quote`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  Talk to us about this
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section
        surface="navy"
        spacing="lg"
        as="aside"
        className="relative isolate overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 80% 30%, oklch(0.745 0.095 237 / 0.18), transparent 65%), radial-gradient(ellipse 60% 70% at 20% 80%, oklch(0.55 0.18 134 / 0.12), transparent 60%)",
          }}
        />
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-16">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sky">
                <span className="h-px w-6 bg-green" aria-hidden="true" />
                Not sure which fits?
              </p>
              <h2 className="font-heading text-3xl font-medium leading-[1.05] tracking-[-0.025em] text-cream md:text-5xl">
                Send the address. We&rsquo;ll tell you which service the job sits under.
              </h2>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <QuoteCTA>Get a free quote</QuoteCTA>
              <PhoneLink size="lg" variant="inverse" />
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-cream/65">
                <Phone size={12} aria-hidden="true" />
                Mon–Fri 7:00–17:00 · Sat 8:00–13:00
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
