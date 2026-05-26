import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import type { ServiceContent } from "@/content/services";

/**
 * Static side-by-side before/after. Phase 4 can swap in a drag-slider
 * component once the real photo pairs are available.
 */
export function ServiceBeforeAfter({
  data,
}: {
  data: NonNullable<ServiceContent["beforeAfter"]>;
}) {
  return (
    <Section surface="cream" spacing="lg">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            {data.heading}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-md shadow-[0_24px_44px_-28px_rgb(20_34_92/0.4)]">
            <PhotoPlaceholder alt="Before painting" treatment="hinterland" />
            <figcaption className="absolute left-4 top-4 rounded-sm bg-navy/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cream">
              Before
            </figcaption>
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-md shadow-[0_24px_44px_-28px_rgb(20_34_92/0.4)]">
            <PhotoPlaceholder alt="After painting" treatment="exterior" />
            <figcaption className="absolute left-4 top-4 rounded-sm bg-green px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-navy-deep">
              After
            </figcaption>
          </figure>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[2fr_1fr] md:gap-12">
          <dl className="space-y-4 text-base text-ink-soft">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                Scope
              </dt>
              <dd
                className="mt-1 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.scope }}
              />
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                Timeline
              </dt>
              <dd
                className="mt-1 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.timeline }}
              />
            </div>
          </dl>
          <Link
            href={`/projects/${data.caseStudySlug}`}
            className="inline-flex items-center gap-2 self-end text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            View full case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
