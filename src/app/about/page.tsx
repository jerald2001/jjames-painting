import type { Metadata } from "next";
import { Award, ShieldCheck, FileCheck, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { QuoteCTA } from "@/components/content/quote-cta";
import { PhoneLink } from "@/components/content/phone-link";
import { TrustRail } from "@/components/content/trust-rail";
import { BUSINESS, SITE_URL } from "@/lib/brand";
import {
  aboutPageSchema,
  breadcrumbSchema,
  combineGraph,
  localBusinessSchema,
  organizationSchema,
  personSchema,
} from "@/lib/schema";

const title = "About J. James Painting Contractors | Family-Run Since 1985";
const description =
  "Sunshine Coast painting business, family-run since 1985. Started as Hume and Staff Painters. QBCC licensed, lead and asbestos qualified, Dulux and Taubmans accredited.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    type: "profile",
    images: [
      {
        url: "/og/about.webp",
        width: 1200,
        height: 630,
        alt: "Federation-style Sunshine Coast home painted by J. James Painting Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/about.webp"],
  },
};

const TIMELINE = [
  {
    year: "1985",
    title: "Founded as Hume and Staff Painters.",
    body:
      "Two painters, a ute, and a Sunshine Coast that had half the houses it has today. The business started painting homes from Caloundra to Noosa one job at a time.",
  },
  {
    year: "1990s–2000s",
    title: "Scope expanded into commercial and industrial.",
    body:
      "As the Coast grew, so did the workload. The crew added commercial and industrial painting to the residential side, plus the qualifications that come with handling lead-based paint and asbestos on older homes.",
  },
  {
    year: "Today",
    title: "Renamed J. James, same family at the helm.",
    body:
      "Now run by Jamie James with a small permanent crew and long-standing subcontractor relationships. Same family ownership. Same local focus. Four specialty service lines that suit how Sunshine Coast houses change hands.",
  },
];

const QUALIFICATIONS = [
  {
    icon: ShieldCheck,
    title: "QBCC licensed and insured",
    body:
      "Queensland Building and Construction Commission licensed. Full public liability and workers comp. Certificates available on request.",
  },
  {
    icon: FileCheck,
    title: "Lead-based paint qualified",
    body:
      "Many Sunshine Coast homes built before 1970 carry lead-based paint. We're qualified to test, prep, and remove it safely. Safety documentation on every job.",
  },
  {
    icon: FileCheck,
    title: "Asbestos removal qualified",
    body:
      "Pre-1990 fibrocement walls, eaves, and soffits can contain asbestos. Qualified to identify and remove it under Queensland regulations.",
  },
  {
    icon: Award,
    title: "Dulux + Taubmans accredited",
    body:
      "Dulux Accredited Painter and Taubmans Endorsed. Both accreditations require ongoing trade standards, product specification training, and customer feedback.",
  },
];

const JAMIE = {
  name: "Jamie James",
  jobTitle: "Owner and lead painter",
  description:
    "Second-generation Sunshine Coast painter. Runs the business day to day, quotes most jobs personally, and still picks up a brush on the boutique work.",
};

export default function AboutPage() {
  const graph = combineGraph(
    localBusinessSchema(),
    organizationSchema(),
    aboutPageSchema({
      name: title,
      description,
      url: `${SITE_URL}/about`,
    }),
    personSchema({
      name: JAMIE.name,
      jobTitle: JAMIE.jobTitle,
      description: JAMIE.description,
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
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
            <Eyebrow>About</Eyebrow>
            <h1
              className="font-heading text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-navy md:text-7xl"
            >
              Family business.
              <br />
              Same coast. Since 1985.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              We started in 1985 as Hume and Staff Painters. The name changed
              to J. James along the way. The family ownership, the local crew,
              and the way we paint houses, none of that did.
            </p>
          </div>
        </Container>
      </Section>

      <TrustRail />

      <Section surface="cream" spacing="lg">
        <Container>
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Forty years on the Coast</Eyebrow>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
              How J. James got here.
            </h2>
          </div>

          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {TIMELINE.map((t) => (
              <li key={t.year}>
                <p className="font-heading text-6xl font-medium leading-none tracking-[-0.025em] text-navy md:text-7xl">
                  {t.year}
                </p>
                <div className="mt-5 h-px w-10 bg-green" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-xl font-medium leading-tight text-navy md:text-2xl">
                  {t.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section surface="cream-cool" spacing="lg">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>The team</Eyebrow>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
              Who you call when you call J. James.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
            {/* TODO(photography-day): swap this project showcase for a real
                portrait of Jamie once shoot-day headshots exist. No authentic
                portrait is available yet, so we surface recent work (clearly
                captioned as such) rather than ship a stock face. */}
            <figure className="relative aspect-[4/5] overflow-hidden rounded-md shadow-[0_24px_44px_-28px_rgb(20_34_92/0.4)]">
              <PhotoPlaceholder
                src="/photos/jjamesdj8.jpg"
                alt="Recent boutique project by J. James Painting: a heritage Queenslander restoration in Maleny"
                treatment="hinterland"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, oklch(0.225 0.145 268 / 0.72))",
                }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs font-medium uppercase tracking-[0.18em] text-cream/90">
                Recent boutique project, Maleny
              </figcaption>
            </figure>
            <article>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                {JAMIE.jobTitle}
              </p>
              <h3 className="mt-2 font-heading text-3xl font-medium leading-tight tracking-tight text-navy md:text-4xl">
                {JAMIE.name}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                {JAMIE.description}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
                Jamie&rsquo;s the person on the other end of the phone when you
                call about a quote, and the painter walking you through the
                finish on a boutique job. Most quotes are done within a
                business day of the call.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
                Beyond Jamie, J. James runs as a small permanent crew with
                long-standing subcontractor relationships across the Coast. We
                bring in extra hands by suburb and by job type, never by
                volume.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <QuoteCTA>Get a quote from Jamie</QuoteCTA>
                <PhoneLink size="lg" />
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section surface="cream" spacing="lg">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>Qualifications and insurance</Eyebrow>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
              Licensed, insured, and qualified for the older houses.
            </h2>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {QUALIFICATIONS.map((q) => {
              const Icon = q.icon;
              return (
                <li
                  key={q.title}
                  className="rounded-md border border-navy/10 bg-cream-cool p-7"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-navy"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 font-heading text-xl font-medium leading-tight text-navy">
                    {q.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {q.body}
                  </p>
                </li>
              );
            })}
          </ul>

          {(BUSINESS.qbccLicense || BUSINESS.abn) && (
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm text-ink-muted">
              {BUSINESS.qbccLicense && (
                <div className="flex items-baseline gap-3">
                  <dt className="text-xs font-medium uppercase tracking-[0.18em]">
                    QBCC
                  </dt>
                  <dd className="font-heading text-base text-navy">
                    {BUSINESS.qbccLicense}
                  </dd>
                </div>
              )}
              {BUSINESS.abn && (
                <div className="flex items-baseline gap-3">
                  <dt className="text-xs font-medium uppercase tracking-[0.18em]">
                    ABN
                  </dt>
                  <dd className="font-heading text-base text-navy">
                    {BUSINESS.abn}
                  </dd>
                </div>
              )}
            </dl>
          )}
        </Container>
      </Section>

      <Section
        surface="navy"
        spacing="lg"
        as="aside"
        className="relative isolate overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 80% 20%, oklch(0.745 0.095 237 / 0.18), transparent 65%), radial-gradient(ellipse 60% 70% at 20% 80%, oklch(0.55 0.18 134 / 0.12), transparent 60%)",
          }}
        />
        <Container>
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sky">
            <span className="h-px w-6 bg-green" aria-hidden="true" />
            Premium product partners
          </p>
          <h2 className="max-w-3xl font-heading text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-cream md:text-5xl">
            Painting with the products we trust on the Coast.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
            <article>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky">
                Dulux Accredited Painter
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream/80 md:text-lg">
                Dulux Weathershield on coast-facing exteriors. Wash&amp;Wear
                interiors that survive a rental cycle. Accreditation means
                ongoing trade standards, product specification training, and
                customer feedback Dulux reviews.
              </p>
            </article>
            <article>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky">
                Taubmans Endorsed Painter
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream/80 md:text-lg">
                Taubmans All Weather on protected exteriors. Endeavour for
                broad interior coverage. Endorsement carries the same trade
                standards expectation as the Dulux accreditation.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section surface="cream" spacing="lg">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-16">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-6xl">
                Call Jamie. Or send the address.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                Free quotes. No pressure. Most quotes come back within one
                business day.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <QuoteCTA>Get a free quote</QuoteCTA>
              <PhoneLink size="lg" />
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-ink-muted">
                <Phone size={12} aria-hidden="true" />
                Mon–Fri 7:00–17:00 · Sat 8:00–13:00
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
