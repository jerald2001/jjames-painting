import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { TrustRail } from "@/components/content/trust-rail";
import { SUBURB_HUB_LIST } from "@/content/suburbs";
import {
  breadcrumbSchema,
  combineGraph,
  localBusinessSchema,
} from "@/lib/schema";

const title = "Sunshine Coast Suburbs We Paint | J. James Painting";
const description =
  "Twelve Sunshine Coast suburbs where we paint regularly, from coastal Noosa and Sunshine Beach to hinterland Maleny and the new-build estates at Aura. Family-run since 1985.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/locations" },
  openGraph: {
    title,
    description,
    url: "/locations",
    type: "website",
    images: [{ url: "/og/default.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/default.webp"],
  },
};

const SECTIONS: Array<{
  heading: string;
  blurb: string;
  slugs: string[];
}> = [
  {
    heading: "Coast",
    blurb: "Salt-air exposure, premium architectural, vendor-heavy listing market.",
    slugs: [
      "noosa",
      "sunshine-beach",
      "peregian",
      "coolum",
      "caloundra",
      "kawana",
    ],
  },
  {
    heading: "Hinterland + inland",
    blurb: "Heritage Queenslanders, weatherboard farmhouses, family-suburban stock, new builds.",
    slugs: [
      "maleny",
      "glasshouse-mountains",
      "buderim",
      "forest-glen",
      "sippy-downs",
      "aura",
    ],
  },
];

export default function LocationsIndexPage() {
  const graph = combineGraph(
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Locations", url: "/locations" },
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
            <Eyebrow>Locations</Eyebrow>
            <h1
              className="font-heading text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-navy md:text-7xl"
            >
              Twelve Sunshine Coast
              <br />
              suburbs we paint.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              The Coast, the hinterland, and the new-build estates at the
              southern end. Each suburb&rsquo;s page covers the homes we paint
              there, the substrate concerns we watch for, and the services
              most clients ask for first.
            </p>
            <p className="mt-5 text-base text-ink-muted">
              Don&rsquo;t see your suburb? Call 0403 571 616. We usually still
              cover it.
            </p>
          </div>
        </Container>
      </Section>

      <TrustRail />

      <Section surface="cream" spacing="lg">
        <Container>
          {SECTIONS.map((section, sectionIdx) => (
            <div
              key={section.heading}
              className={sectionIdx > 0 ? "mt-16 md:mt-24" : ""}
            >
              <div className="mb-10 max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  {section.heading}
                </p>
                <h2 className="mt-3 font-heading text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-4xl">
                  {section.blurb}
                </h2>
              </div>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {section.slugs.map((slug) => {
                  const hub = SUBURB_HUB_LIST.find((h) => h.slug === slug);
                  if (!hub) return null;
                  return (
                    <li key={hub.slug}>
                      <Link
                        href={`/locations/${hub.slug}`}
                        className="group flex h-full flex-col rounded-md border border-navy/10 bg-cream-cool p-6 transition-colors hover:border-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:p-7"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-heading text-2xl font-medium leading-tight tracking-tight text-navy">
                            {hub.name}
                          </h3>
                          <ArrowUpRight
                            size={18}
                            className="mt-1 shrink-0 text-green transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {hub.heroSubhead.split(".")[0]}.
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
