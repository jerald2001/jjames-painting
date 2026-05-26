import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { QuoteCTA } from "@/components/content/quote-cta";
import { PhoneLink } from "@/components/content/phone-link";
import { TrustRail } from "@/components/content/trust-rail";
import {
  breadcrumbSchema,
  combineGraph,
  localBusinessSchema,
} from "@/lib/schema";
import { cn } from "@/lib/utils";

const title = "Reviews and Testimonials | J. James Painting Contractors";
const description =
  "Real client reviews of J. James Painting Contractors. Real named reviews from Sunshine Coast vendors, landlords, property managers, and homeowners.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title,
    description,
    url: "/testimonials",
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

/**
 * Sample reviews — same set + treatment as home page. Visible "Sample
 * review" pill on each card + the section-level banner make it clear
 * these are illustrative scope samples. Real consented reviews replace
 * them when client supplies them (brief §13).
 */
const SAMPLE = [
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
    offset: "md:mt-10",
  },
  {
    quote:
      "Heritage cottage repaint, done the right way. They asked the questions other painters didn&rsquo;t.",
    scope: "Heritage Queenslander",
    treatment: "hinterland" as const,
    rotation: "md:-rotate-1",
    offset: "md:mt-5",
  },
];

export default function TestimonialsPage() {
  const graph = combineGraph(
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Testimonials", url: "/testimonials" },
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
            <Eyebrow>What clients say</Eyebrow>
            <h1
              className="font-heading text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-navy md:text-7xl"
            >
              Real reviews,
              <br />
              real Sunshine Coast homes.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              The named reviews land here as soon as the consent paperwork
              comes back from our last vendor and landlord clients. In the
              meantime, three illustrative scope samples below give the
              shape of what we hear.
            </p>
            <div className="mt-9">
              <Link
                href="https://www.google.com/search?q=J.+James+Painting+Contractors+Sunshine+Coast+reviews"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                Read our Google reviews
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <TrustRail />

      <Section surface="cream" spacing="lg">
        <Container>
          <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
            {SAMPLE.map((t) => (
              <li
                key={t.scope}
                className={cn("transition-transform", t.rotation, t.offset)}
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
                    <Quote
                      size={20}
                      strokeWidth={1.5}
                      className="text-green"
                      aria-hidden="true"
                    />
                    <blockquote className="mt-3 font-heading text-lg italic leading-snug text-navy md:text-xl">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `&ldquo;${t.quote}&rdquo;`,
                        }}
                      />
                    </blockquote>
                    <footer className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                      {t.scope}
                    </footer>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-md border border-navy/10 bg-cream-cool px-6 py-6 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                Heads up
              </p>
              <p className="mt-2 max-w-xl text-sm text-ink-soft md:text-base">
                The reviews above are illustrative scope samples written for
                this page. Real named reviews with suburb and project detail
                replace them as consent paperwork lands.
              </p>
            </div>
            <Link
              href="https://www.google.com/search?q=J.+James+Painting+Contractors+Sunshine+Coast+reviews"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:mt-0"
            >
              Read our Google reviews
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section surface="cream-cool" spacing="lg">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-16">
            <div>
              <Eyebrow>Worked with us?</Eyebrow>
              <h2 className="font-heading text-3xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
                Send us your review.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                Reviews on Google help other Sunshine Coast vendors and
                landlords find us. We&rsquo;ll add your review here too if
                you give us the nod.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <QuoteCTA>Get a quote for next time</QuoteCTA>
              <PhoneLink size="lg" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
