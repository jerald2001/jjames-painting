import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { cn } from "@/lib/utils";

/**
 * Three testimonial cards in a collage/overlap layout.
 * Sample copy until the client supplies signed-permission quotes (see brief §13).
 * The visible "Sample review" pill on each card + the section-level banner
 * make it clear these are illustrative, not real, claims.
 */
const TESTIMONIALS = [
  {
    quote:
      "Painted our listing in four days. Photos went up Friday and the offer landed the following Wednesday.",
    scope: "Pre-sale exterior + interior",
    treatment: "exterior" as const,
    rotation: "md:-rotate-1",
    offset: "md:mt-0",
  },
  {
    quote:
      "Rental repainted between tenants in three days. Owner photo pack landed the same week.",
    scope: "Rental between-tenancy",
    treatment: "interior" as const,
    rotation: "md:rotate-1",
    offset: "md:mt-12",
  },
  {
    quote:
      "Heritage cottage repaint, done the right way. They asked the questions other painters didn&rsquo;t.",
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
              key={t.scope}
              className={cn(
                "transition-transform",
                t.rotation,
                t.offset,
              )}
            >
              <article className="overflow-hidden rounded-md border border-navy/10 bg-cream-cool shadow-[0_16px_40px_-24px_rgb(20_34_92/0.35)]">
                <div className="relative aspect-[4/3]">
                  <PhotoPlaceholder
                    alt={`Sample ${t.scope.toLowerCase()} project`}
                    treatment={t.treatment}
                  />
                  <span className="absolute left-4 top-4 rounded-sm bg-navy/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cream">
                    Sample review
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <blockquote className="font-heading text-lg italic leading-snug text-navy md:text-xl">
                    <span dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }} />
                  </blockquote>
                  <footer className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    {t.scope}
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-md border border-navy/10 bg-cream-cool px-5 py-4 md:flex md:items-center md:justify-between md:gap-6">
          <p className="text-sm text-ink-soft">
            The reviews above are illustrative scope samples. Real named
            reviews land here once consent is signed.
          </p>
          <Link
            href="https://www.google.com/search?q=J.+James+Painting+Contractors+Sunshine+Coast+reviews"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:mt-0"
          >
            Read our Google reviews
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
