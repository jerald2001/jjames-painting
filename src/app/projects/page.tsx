import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { TrustRail } from "@/components/content/trust-rail";
import { PROJECTS } from "@/content/projects";
import { PRIORITY_SERVICES } from "@/lib/brand";
import {
  breadcrumbSchema,
  combineGraph,
  localBusinessSchema,
} from "@/lib/schema";

const title = "Recent Painting Projects on the Sunshine Coast | J. James";
const description =
  "Recent painting work across Noosa, Buderim, Caloundra, Sunshine Beach, Maleny and the wider Sunshine Coast. Pre-sale, rental, new-home and boutique residential projects since 1985.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title,
    description,
    url: "/projects",
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

export default function ProjectsIndexPage() {
  const graph = combineGraph(
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Projects", url: "/projects" },
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
            <Eyebrow>Projects</Eyebrow>
            <h1
              className="font-heading text-5xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-7xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Recent Sunshine Coast paint work.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              A working set of pre-sale, rental, new-home and boutique
              residential projects from across the Coast. Full write-ups and
              photography roll in through the next content pass.
            </p>
          </div>
        </Container>
      </Section>

      <TrustRail />

      <Section surface="cream-cool" spacing="lg">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => {
              const service = PRIORITY_SERVICES.find((s) => s.slug === p.service);
              return (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-[0_24px_44px_-28px_rgb(20_34_92/0.45)]">
                      <PhotoPlaceholder
                        alt={`${p.scope} project in ${p.suburb}`}
                        treatment={p.treatment}
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
                        {service && (
                          <p className="mt-1.5 text-xs text-ink-muted">
                            {service.title}
                          </p>
                        )}
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-green transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </>
  );
}
