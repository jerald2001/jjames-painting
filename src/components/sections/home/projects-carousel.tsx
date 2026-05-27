import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { PROJECT_IMAGES } from "@/lib/photos";

type LaunchProject = {
  slug: string;
  suburb: string;
  scope: string;
  treatment: "coastal" | "hinterland" | "interior" | "exterior";
};

/**
 * Phase 4 replaces these placeholders with real case studies from
 * docs/seo/content-calendar.md launch project set. Cards link to
 * /projects/[slug]. Pages will 404 until Phase 4 writes the case studies.
 */
const LAUNCH_PROJECTS: LaunchProject[] = [
  {
    slug: "boutique-sunshine-beach",
    suburb: "Sunshine Beach",
    scope: "Architectural coastal, exterior + interior",
    treatment: "coastal",
  },
  {
    slug: "pre-sale-caloundra",
    suburb: "Caloundra",
    scope: "Vendor 14-day pre-sale refresh",
    treatment: "exterior",
  },
  {
    slug: "rental-noosa",
    suburb: "Noosa",
    scope: "Between-tenancy investment property",
    treatment: "interior",
  },
  {
    slug: "boutique-maleny",
    suburb: "Maleny",
    scope: "Heritage Queenslander restoration",
    treatment: "hinterland",
  },
  {
    slug: "new-home-aura",
    suburb: "Aura",
    scope: "Empty-house pre-move repaint",
    treatment: "interior",
  },
  {
    slug: "rental-buderim",
    suburb: "Buderim",
    scope: "Multi-property landlord portfolio",
    treatment: "exterior",
  },
];

export function HomeProjectsCarousel() {
  return (
    <Section surface="cream" spacing="lg">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Recent work</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            Sunshine Coast homes we&rsquo;ve painted lately.
          </h2>
        </div>
      </Container>

      <div
        className="relative overflow-x-auto pb-2"
        aria-label="Recent projects carousel"
      >
        <ul
          className="flex snap-x snap-mandatory gap-5 px-6 md:px-8 lg:gap-7"
          style={{ scrollPaddingLeft: "24px" }}
        >
          {LAUNCH_PROJECTS.map((p) => (
            <li
              key={p.slug}
              className="w-[78vw] shrink-0 snap-start md:w-[340px] lg:w-[380px]"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-[0_24px_44px_-28px_rgb(20_34_92/0.45)]">
                  <PhotoPlaceholder
                    src={PROJECT_IMAGES[p.slug]}
                    alt={`${p.scope} in ${p.suburb}`}
                    treatment={p.treatment}
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 340px, 78vw"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                      {p.suburb}
                    </p>
                    <p className="mt-2 font-heading text-xl font-medium leading-tight text-navy">
                      {p.scope}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Container className="mt-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
        >
          View all projects
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </Container>
    </Section>
  );
}
