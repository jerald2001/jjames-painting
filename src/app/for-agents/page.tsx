import type { Metadata } from "next";
import {
  Camera,
  Clock,
  FileCheck,
  Receipt,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhoneLink } from "@/components/content/phone-link";
import { TrustRail } from "@/components/content/trust-rail";
import { BUSINESS, SITE_URL } from "@/lib/brand";
import {
  breadcrumbSchema,
  combineGraph,
  contactPageSchema,
  localBusinessSchema,
  organizationSchema,
} from "@/lib/schema";
import { PartnerForm } from "./partner-form";

const title = "For Agents and Property Managers | J. James Painting";
const description =
  "The Sunshine Coast painter your agency clients won't complain about. Pre-sale fast-turn jobs, vendor or agency invoicing, before-after photo packs, direct PM coordination.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/for-agents" },
  openGraph: {
    title,
    description,
    url: "/for-agents",
    type: "website",
    images: [
      {
        url: "/og/for-agents.webp",
        width: 1200,
        height: 630,
        alt: "Open-plan Sunshine Coast home painted and ready for listing photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/for-agents.webp"],
  },
};

const VALUE_PROPS = [
  {
    icon: Clock,
    title: "Fast turnaround on pre-sale jobs",
    body:
      "Most pre-sale repaints finish in 3 to 7 working days. We schedule to the listing date, not the other way around. Quote inside one business day of the address landing in our inbox.",
  },
  {
    icon: Receipt,
    title: "Invoicing the way you need it",
    body:
      "Vendor-paid, agency-arranged, or split. We've billed every variant. Tax invoice on completion with the breakdown your bookkeeper actually wants.",
  },
  {
    icon: Camera,
    title: "Before-and-after photo packs",
    body:
      "Owner reports get a clean photo pack the day we finish. No more chasing for documentation that proves the work landed.",
  },
  {
    icon: Users,
    title: "Direct PM coordination",
    body:
      "Key collection, tenant communication, between-tenancy access. We talk to whoever's in the loop so you don't have to relay.",
  },
  {
    icon: ShieldCheck,
    title: "Insured and QBCC licensed",
    body:
      "Full public liability and workers comp. QBCC licensed. Lead and asbestos qualified for the older Coast stock. Certificates on file if your compliance team asks.",
  },
  {
    icon: FileCheck,
    title: "One business day reply, always",
    body:
      "Send the address. Jamie or one of the crew comes back the next business day with a window and a price. We do this for one job or for forty.",
  },
];

const WORKFLOW = [
  {
    n: "01",
    title: "Send the property.",
    body:
      "Address, listing date or vacate date, scope you'd like. Reply to a previous email, send a new one, or call.",
  },
  {
    n: "02",
    title: "Quote within a business day.",
    body:
      "Site visit if the job needs one. Written quote you can forward to the vendor or PM as-is.",
  },
  {
    n: "03",
    title: "Scheduled to your calendar.",
    body:
      "Photo day, inspection day, vacate day. We work backward from your dates.",
  },
  {
    n: "04",
    title: "Photo pack and invoice to the right party.",
    body:
      "Finish day: before-and-after pack plus invoice. Vendor-paid, agency-arranged, or split.",
  },
];

export default function ForAgentsPage() {
  const graph = combineGraph(
    localBusinessSchema(),
    organizationSchema(),
    contactPageSchema({
      url: `${SITE_URL}/for-agents`,
      description,
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "For Agents", url: "/for-agents" },
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
            <Eyebrow>For agents and property managers</Eyebrow>
            <h1
              className="font-heading text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-navy md:text-7xl"
            >
              The painter your clients won&rsquo;t complain about.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Pre-sale paint refreshes on the agent&rsquo;s timeline.
              Between-tenancy repaints on the PM&rsquo;s timeline. Photo packs
              for the owner reports, and the same crew on the next job.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#partner-form"
                className="inline-flex h-12 items-center justify-center rounded-md bg-green px-7 text-base font-medium text-navy-deep shadow-[0_8px_24px_-12px_rgb(20_34_92/0.4)] transition-all hover:-translate-y-px hover:bg-green-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                Become a referral partner
              </a>
              <PhoneLink size="lg" />
            </div>
          </div>
        </Container>
      </Section>

      <TrustRail />

      <Section surface="cream" spacing="lg">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>What we do for agencies</Eyebrow>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
              Six things that matter when you&rsquo;re the one recommending.
            </h2>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_PROPS.map((v) => {
              const Icon = v.icon;
              return (
                <li
                  key={v.title}
                  className="rounded-md border border-navy/10 bg-cream-cool p-6 md:p-7"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-navy"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 font-heading text-xl font-medium leading-tight text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                    {v.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section surface="cream-cool" spacing="lg">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>How the workflow runs</Eyebrow>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
              Four steps, no surprises.
            </h2>
          </div>

          <ol className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:grid-cols-4 lg:gap-8">
            {WORKFLOW.map((w) => (
              <li key={w.n}>
                <p className="font-heading text-6xl font-medium leading-none tracking-[-0.025em] text-navy md:text-7xl">
                  {w.n}
                </p>
                <div className="mt-5 h-px w-10 bg-green" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-xl font-medium leading-tight text-navy md:text-2xl">
                  {w.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {w.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <span id="partner-form" aria-hidden="true" />
      <Section surface="cream" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>Become a referral partner</Eyebrow>
              <h2 className="mb-8 font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
                Set up an account.
              </h2>
              <PartnerForm />
            </div>

            <aside className="space-y-10 lg:pt-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  Prefer to call
                </p>
                <p className="mt-2 font-heading text-3xl font-medium tracking-tight text-navy md:text-4xl">
                  {BUSINESS.phone}
                </p>
                <p className="mt-3 text-sm text-ink-muted">
                  Ask for Jamie. The first conversation is usually about your
                  listings calendar or your PM workflow, not paint.
                </p>
                <div className="mt-5">
                  <PhoneLink size="lg" />
                </div>
              </div>

              <div className="border-t border-navy/10 pt-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  Who we work with
                </p>
                <ul className="mt-4 space-y-2 text-sm text-navy">
                  <li>Real estate agents and agency principals</li>
                  <li>Property managers</li>
                  <li>Conveyancers and buyer&rsquo;s agents</li>
                  <li>Builders and project managers</li>
                  <li>Body corporate managers</li>
                </ul>
              </div>

              <div className="border-t border-navy/10 pt-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  Insurance and licensing
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy">
                  QBCC licensed. Full public liability and workers comp.
                  Lead and asbestos removal qualified. Certificates available
                  on request.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
