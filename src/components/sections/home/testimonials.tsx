import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { BUSINESS } from "@/lib/brand";

/**
 * Real client reviews carried over verbatim from the legacy site's testimonials
 * page (jjamespaintingcontractorsqld.com.au/testimonials). Text only, no photos.
 */
const REVIEWS = [
  {
    quote:
      "I've had several homes and a complex renovation built over the past six years, and have always had J. James Painting Contractor complete their work on time and with attention to detail.",
    name: "Garry and Jeannette",
  },
  {
    quote:
      "The painters have left, completed all the work and I have to say an excellent, professional job. Totally professional, polite and incredibly efficient.",
    name: "Alan Cameron",
  },
  {
    quote:
      "They have been painting for my company now for two years. In that time I have found their knowledge, attitude, and quality to the trade to be of the highest standard.",
    name: "Grant McDonald",
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

        <ul className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <li key={r.name}>
              <article className="flex h-full flex-col rounded-md border border-navy/10 bg-cream-cool p-7 shadow-[0_16px_40px_-24px_rgb(20_34_92/0.35)]">
                <div
                  className="flex gap-1 text-green"
                  role="img"
                  aria-label="Rated five out of five stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-heading text-lg italic leading-snug text-navy">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  {r.name}
                </footer>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-3 border-t border-navy/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-ink-soft">
            More reviews from homeowners and builders across the Sunshine Coast.
          </p>
          <Link
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            Read our Google reviews
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
