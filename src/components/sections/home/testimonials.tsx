import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { cn } from "@/lib/utils";

/**
 * Three testimonial cards in a collage/overlap layout.
 * Placeholder content. Phase 4 swaps in real named testimonials with suburb
 * + project consent per docs/seo/local-seo.md anti-gating rules.
 */
const TESTIMONIALS = [
  {
    quote:
      "Jamie&rsquo;s team painted our listing in four days. Photos went up Friday and the offer landed the following Wednesday.",
    name: "Sarah",
    suburb: "Noosa",
    scope: "Pre-sale exterior + interior",
    treatment: "exterior" as const,
    rotation: "md:-rotate-1",
    offset: "md:mt-0",
  },
  {
    quote:
      "We painted the rental between tenants in three days. Owner reports went out Friday morning with before and after photos.",
    name: "Mark",
    suburb: "Buderim",
    scope: "Rental between-tenancy",
    treatment: "interior" as const,
    rotation: "md:rotate-1",
    offset: "md:mt-12",
  },
  {
    quote:
      "Heritage cottage repaint, done the right way. They asked the questions other painters didn&rsquo;t.",
    name: "Anna",
    suburb: "Maleny",
    scope: "Heritage Queenslander",
    treatment: "hinterland" as const,
    rotation: "md:-rotate-1",
    offset: "md:mt-6",
  },
];

export function HomeTestimonials() {
  return (
    <Section surface="cream" spacing="lg">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>What clients say</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            Real reviews, real homes.
          </h2>
        </div>

        <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name + t.suburb}
              className={cn(
                "transition-transform",
                t.rotation,
                t.offset,
              )}
            >
              <article className="overflow-hidden rounded-md border border-navy/10 bg-cream-cool shadow-[0_16px_40px_-24px_rgb(20_34_92/0.35)]">
                <div className="relative aspect-[4/3]">
                  <PhotoPlaceholder
                    alt={`${t.scope} in ${t.suburb}`}
                    treatment={t.treatment}
                  />
                </div>
                <div className="p-6 md:p-7">
                  <blockquote className="font-heading text-lg italic leading-snug text-navy md:text-xl">
                    <span dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }} />
                  </blockquote>
                  <footer className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    {t.name} · {t.suburb} · {t.scope}
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            See all reviews
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <span className="text-xs text-ink-muted">
            Google Reviews integration coming in Phase 4
          </span>
        </div>
      </Container>
    </Section>
  );
}
