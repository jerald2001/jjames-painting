import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { BUSINESS, SITE_URL } from "@/lib/brand";
import {
  breadcrumbSchema,
  combineGraph,
  localBusinessSchema,
} from "@/lib/schema";

const title = "Privacy Policy | J. James Painting Contractors";
const description =
  "How J. James Painting Contractors collects, uses, and protects your personal information. Compliant with the Australian Privacy Principles.";

const LAST_UPDATED = "2026-05-26";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title,
    description,
    url: "/privacy-policy",
    type: "website",
    images: [{ url: "/og/default.webp", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const graph = combineGraph(
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Privacy policy", url: "/privacy-policy" },
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
            <Eyebrow>Legal</Eyebrow>
            <h1
              className="font-heading text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-navy md:text-6xl"
            >
              Privacy policy.
            </h1>
            <p className="mt-6 text-sm text-ink-muted">
              Last updated {LAST_UPDATED}.
            </p>
          </div>
        </Container>
      </Section>

      <Section surface="cream" spacing="md">
        <Container>
          <div className="prose mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-ink-soft md:text-lg">
            <Block heading="Who we are">
              <p>
                {BUSINESS.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                &ldquo;our&rdquo;) is a Sunshine Coast painting business
                established in 1985. Our website is{" "}
                <Link
                  href={SITE_URL}
                  className="text-navy underline-offset-4 hover:text-green hover:underline"
                >
                  {SITE_URL.replace(/^https?:\/\//, "")}
                </Link>
                .
              </p>
              <p>
                We handle personal information in line with the Australian
                Privacy Principles (APPs) under the Privacy Act 1988 (Cth).
                This page explains what that means in practice.
              </p>
            </Block>

            <Block heading="What we collect">
              <p>
                We only collect the information needed to quote, schedule, and
                deliver painting work, and to follow up on enquiries.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Contact details you give us through the quote form, partner
                  form, or by phone or email: name, agency or firm, phone,
                  email, property address or suburb.
                </li>
                <li>
                  Job-specific information you share with us: photos of the
                  property, project notes, settlement or listing dates,
                  occupancy status, scope preferences.
                </li>
                <li>
                  Basic website analytics: page views, referring source,
                  device and browser type. Collected through standard
                  analytics tools, no personal identifiers attached.
                </li>
              </ul>
            </Block>

            <Block heading="How we use it">
              <ul className="ml-5 list-disc space-y-2">
                <li>To reply to your enquiry and prepare your quote.</li>
                <li>
                  To schedule and deliver the painting work, including
                  coordinating with your agent, property manager, or
                  conveyancer when you&rsquo;ve asked us to.
                </li>
                <li>
                  To invoice you (or the party you&rsquo;ve nominated) and
                  keep records as required by Australian tax and consumer
                  law.
                </li>
                <li>
                  To follow up after a job, including the occasional
                  satisfaction check or a request to use a project photo
                  with your written consent.
                </li>
                <li>
                  To improve the website, measure which pages are useful,
                  and fix what isn&rsquo;t.
                </li>
              </ul>
            </Block>

            <Block heading="Who we share it with">
              <p>
                We don&rsquo;t sell your information. We share it only when
                we have to, and only with parties involved in delivering
                your job:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Your nominated agent, property manager, conveyancer, or
                  builder, when coordinating the work.
                </li>
                <li>
                  Trade suppliers (Dulux, Taubmans, hardware suppliers) for
                  the purpose of ordering products for your job.
                </li>
                <li>
                  Our accountant and bookkeeper for invoicing and tax
                  compliance.
                </li>
                <li>
                  Third-party service providers we use to run the website
                  and quote process (hosting, email delivery, analytics).
                  These providers handle data under their own privacy
                  obligations.
                </li>
                <li>
                  Australian regulators or law enforcement, if we&rsquo;re
                  legally required to disclose.
                </li>
              </ul>
            </Block>

            <Block heading="How we store and protect it">
              <p>
                Quote enquiries and job records are kept in business systems
                with access limited to the people who need them. Paper
                records (signed quotes, certificates) are kept secure at our
                office.
              </p>
              <p>
                The website itself is served over HTTPS. The contact and
                partner forms post directly to our systems and aren&rsquo;t
                cached by third parties.
              </p>
            </Block>

            <Block heading="How long we keep it">
              <p>
                We keep job records for the period required under Australian
                tax law (currently seven years). Enquiries that don&rsquo;t
                turn into jobs are kept for up to two years and then
                deleted.
              </p>
            </Block>

            <Block heading="Cookies and analytics">
              <p>
                Our website uses a small number of cookies for basic
                functionality (session, form state). We use standard
                analytics to understand which pages people find useful. We
                don&rsquo;t use third-party advertising cookies or sell
                analytics data.
              </p>
              <p>
                You can clear cookies or block them in your browser settings.
                The site will still work; analytics will see fewer pages.
              </p>
            </Block>

            <Block heading="Your rights">
              <p>
                Under the Privacy Act, you can ask us:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>What personal information we hold about you.</li>
                <li>To correct anything that&rsquo;s wrong.</li>
                <li>
                  To delete information we no longer need (subject to the
                  record-keeping rules above).
                </li>
              </ul>
              <p>
                To do any of the above, call us on{" "}
                <a
                  href={`tel:${BUSINESS.phoneE164}`}
                  className="text-navy underline-offset-4 hover:text-green hover:underline"
                >
                  {BUSINESS.phone}
                </a>
                . We&rsquo;ll respond within a reasonable time.
              </p>
            </Block>

            <Block heading="Complaints">
              <p>
                If you think we&rsquo;ve mishandled your personal information,
                start by telling us so we can fix it. If you&rsquo;re not
                satisfied with our response, you can lodge a complaint with
                the Office of the Australian Information Commissioner at{" "}
                <Link
                  href="https://www.oaic.gov.au"
                  className="text-navy underline-offset-4 hover:text-green hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  oaic.gov.au
                </Link>
                .
              </p>
            </Block>

            <Block heading="Changes to this policy">
              <p>
                We&rsquo;ll update this page if our practices change. The
                last-updated date at the top of this page reflects the most
                recent change.
              </p>
            </Block>

            <Block heading="Contact">
              <p>
                Questions about this policy?{" "}
                <Link
                  href="/contact"
                  className="text-navy underline-offset-4 hover:text-green hover:underline"
                >
                  Send us a message
                </Link>{" "}
                or call{" "}
                <a
                  href={`tel:${BUSINESS.phoneE164}`}
                  className="text-navy underline-offset-4 hover:text-green hover:underline"
                >
                  {BUSINESS.phone}
                </a>
                .
              </p>
            </Block>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Block({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 font-heading text-2xl font-medium leading-tight tracking-tight text-navy md:text-3xl">
        {heading}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
