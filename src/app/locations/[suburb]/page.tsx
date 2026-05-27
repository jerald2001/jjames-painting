import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { PROJECT_IMAGES, SUBURB_IMAGES } from "@/lib/photos";
import { QuoteCTA } from "@/components/content/quote-cta";
import { PhoneLink } from "@/components/content/phone-link";
import { TrustRail } from "@/components/content/trust-rail";
import {
  PRIORITY_SERVICES,
  SUBURBS,
  type SuburbSlug,
} from "@/lib/brand";
import { findProject } from "@/content/projects";
import { getSuburbHub, SUBURB_HUB_LIST } from "@/content/suburbs";
import {
  breadcrumbSchema,
  combineGraph,
  localBusinessSchema,
} from "@/lib/schema";

type Params = { suburb: string };

export function generateStaticParams(): Params[] {
  return SUBURB_HUB_LIST.map((h) => ({ suburb: h.slug }));
}

function isSuburbSlug(s: string): s is SuburbSlug {
  return SUBURBS.some((sb) => sb.slug === s);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { suburb } = await params;
  if (!isSuburbSlug(suburb)) return {};
  const hub = getSuburbHub(suburb);
  if (!hub) return {};
  return {
    title: { absolute: hub.metaTitle },
    description: hub.metaDescription,
    alternates: { canonical: `/locations/${hub.slug}` },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: `/locations/${hub.slug}`,
      type: "website",
      images: [{ url: "/og/default.webp", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: hub.metaTitle,
      description: hub.metaDescription,
      images: ["/og/default.webp"],
    },
  };
}

export default async function SuburbHubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { suburb } = await params;
  if (!isSuburbSlug(suburb)) notFound();
  const hub = getSuburbHub(suburb);
  if (!hub) notFound();

  const projects = hub.projectSlugs
    .map((slug) => findProject(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const orderedServices = hub.servicePriority
    .map((slug) => PRIORITY_SERVICES.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const graph = combineGraph(
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Locations", url: "/locations" },
      { name: hub.name, url: `/locations/${hub.slug}` },
    ]),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <section
        className="relative isolate overflow-hidden"
        aria-labelledby="suburb-headline"
      >
        <div className="absolute inset-0 -z-10">
          <PhotoPlaceholder
            src={SUBURB_IMAGES[hub.slug]}
            alt={`${hub.name} Sunshine Coast painting work`}
            treatment={hub.heroTreatment}
            priority
            sizes="100vw"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(95deg, oklch(0.962 0.008 85 / 0.92) 0%, oklch(0.962 0.008 85 / 0.65) 40%, oklch(0.962 0.008 85 / 0.15) 80%, transparent 100%)",
          }}
        />

        <Container className="relative flex min-h-[60vh] flex-col justify-end py-16 md:min-h-[68vh] md:py-24">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted"
          >
            <Link href="/locations" className="hover:text-green">
              Locations
            </Link>
            <span aria-hidden="true" className="mx-2 text-navy/30">
              /
            </span>
            <span className="text-navy">{hub.name}</span>
          </nav>
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
            <span className="h-px w-6 bg-green" aria-hidden="true" />
            Sunshine Coast, QLD
          </p>
          <h1
            id="suburb-headline"
            className="max-w-3xl font-heading text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-navy md:text-7xl"
          >
            {hub.headlinePhrase}.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {hub.heroSubhead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <QuoteCTA>Get a quote in {hub.name}</QuoteCTA>
            <PhoneLink size="lg" />
          </div>
        </Container>
      </section>

      <TrustRail />

      <Section surface="cream" spacing="lg">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <Eyebrow>Local context</Eyebrow>
              <h2 className="font-heading text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-4xl">
                What we paint in {hub.name}.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                {hub.localContext}
              </p>
            </div>
            <div>
              <Eyebrow>What we watch for</Eyebrow>
              <h2 className="font-heading text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-4xl">
                Substrate and exposure notes.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                {hub.substrateNotes}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="cream-cool" spacing="lg">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>Services in {hub.name}</Eyebrow>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
              The work we&rsquo;re asked for most here, in order.
            </h2>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2">
            {orderedServices.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-5 rounded-md border border-navy/10 bg-cream p-6 transition-colors hover:border-green md:p-7"
                >
                  <span className="font-heading text-3xl font-medium leading-none tracking-tight text-navy/35 md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-medium leading-tight text-navy md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                      {s.blurb}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-green transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {projects.length > 0 && (
        <Section surface="cream" spacing="lg">
          <Container>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Recent work in {hub.name}</Eyebrow>
                <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
                  Projects you can read about.
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                View all projects →
              </Link>
            </div>
            <ul className="grid gap-6 md:grid-cols-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-[0_24px_44px_-28px_rgb(20_34_92/0.45)]">
                      <PhotoPlaceholder
                        src={PROJECT_IMAGES[p.slug]}
                        alt={`${p.scope} project in ${p.suburb}`}
                        treatment={p.treatment}
                        sizes="(min-width: 768px) 33vw, 100vw"
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
          </Container>
        </Section>
      )}

      <Section surface="navy" spacing="lg" as="aside">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-16">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sky">
                <span className="h-px w-6 bg-green" aria-hidden="true" />
                Quotes for {hub.name}
              </p>
              <h2 className="font-heading text-3xl font-medium leading-[1.05] tracking-[-0.025em] text-cream md:text-5xl">
                {hub.ctaLine}
              </h2>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <QuoteCTA>Get a free quote</QuoteCTA>
              <PhoneLink size="lg" variant="inverse" />
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="cream" spacing="md">
        <Container>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
            Other Sunshine Coast suburbs
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {SUBURB_HUB_LIST.filter((s) => s.slug !== hub.slug).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/locations/${s.slug}`}
                  className="text-navy underline-offset-4 hover:text-green hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
