import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { QuoteCTA } from "@/components/content/quote-cta";
import { PhoneLink } from "@/components/content/phone-link";
import { TrustRail } from "@/components/content/trust-rail";
import { findProject, PROJECTS } from "@/content/projects";
import { PRIORITY_SERVICES } from "@/lib/brand";
import {
  breadcrumbSchema,
  combineGraph,
  localBusinessSchema,
} from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  const title = `${project.scope}, ${project.suburb} | J. James Painting`;
  const description = `Sunshine Coast painting project in ${project.suburb}: ${project.scope.toLowerCase()}. Family-run since 1985.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [{ url: "/og/default.webp", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/default.webp"],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const service = PRIORITY_SERVICES.find((s) => s.slug === project.service);

  const graph = combineGraph(
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Projects", url: "/projects" },
      { name: `${project.scope}, ${project.suburb}`, url: `/projects/${project.slug}` },
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
        aria-labelledby="project-headline"
      >
        <div className="absolute inset-0 -z-10">
          <PhotoPlaceholder
            alt={`${project.scope} project in ${project.suburb}`}
            treatment={project.treatment}
            priority
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
            <Link href="/projects" className="hover:text-green">
              Projects
            </Link>
            <span aria-hidden="true" className="mx-2 text-navy/30">
              /
            </span>
            <span className="text-navy">{project.suburb}</span>
          </nav>
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
            <span className="h-px w-6 bg-green" aria-hidden="true" />
            Project
          </p>
          <h1
            id="project-headline"
            className="max-w-3xl font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-6xl"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {project.scope}, {project.suburb}.
          </h1>
        </Container>
      </section>

      <TrustRail />

      <Section surface="cream" spacing="lg">
        <Container>
          <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
            <div>
              <Eyebrow>Case study coming soon</Eyebrow>
              <h2 className="font-heading text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-4xl">
                We&rsquo;re writing this one up.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                Photography and the full project write-up land here in the next
                content pass. In the meantime, you can read about the service
                this project sits under, or call us about a similar job.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <QuoteCTA>Get a quote for similar work</QuoteCTA>
                <PhoneLink size="lg" />
              </div>
            </div>

            <aside className="rounded-md border border-navy/10 bg-cream-cool p-6 md:p-7">
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    Suburb
                  </dt>
                  <dd className="mt-1.5 font-heading text-lg text-navy">
                    {project.suburb}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    Scope
                  </dt>
                  <dd className="mt-1.5 leading-relaxed text-ink-soft">
                    {project.scope}
                  </dd>
                </div>
                {service && (
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                      Service
                    </dt>
                    <dd className="mt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="group inline-flex items-center gap-2 font-heading text-lg text-navy hover:text-green"
                      >
                        {service.title}
                        <ArrowUpRight
                          size={16}
                          className="text-green transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
