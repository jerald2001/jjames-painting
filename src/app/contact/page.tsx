import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhoneLink } from "@/components/content/phone-link";
import { TrustRail } from "@/components/content/trust-rail";
import { BUSINESS, SITE_URL, SUBURBS } from "@/lib/brand";
import {
  breadcrumbSchema,
  combineGraph,
  contactPageSchema,
  localBusinessSchema,
  organizationSchema,
} from "@/lib/schema";
import { QuoteForm } from "./quote-form";

const title = "Contact J. James Painting | Sunshine Coast Free Quote";
const description =
  "Get a free Sunshine Coast painting quote. Tell us the suburb, beds, and what you want painted. We reply within one business day. Call 0403 571 616.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
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

export default function ContactPage() {
  const graph = combineGraph(
    localBusinessSchema(),
    organizationSchema(),
    contactPageSchema({
      url: `${SITE_URL}/contact`,
      description,
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" },
    ]),
  );

  const monFri = BUSINESS.hours.find((h) => h.day === "Mon");
  const sat = BUSINESS.hours.find((h) => h.day === "Sat");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <Section surface="cream" spacing="lg" topBorder={false}>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1
              className="font-heading text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-navy md:text-7xl"
            >
              Get a free quote.
              <br />
              We reply within a day.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Tell us the suburb, the beds, and what you want painted. Jamie
              or one of the crew comes back within one business day with a
              window and a price.
            </p>
          </div>
        </Container>
      </Section>

      <TrustRail />

      <span id="quote" aria-hidden="true" />
      <Section surface="cream" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <div>
              <Suspense fallback={<FormSkeleton />}>
                <QuoteForm />
              </Suspense>
            </div>

            <aside className="space-y-10 lg:pt-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  Prefer to call
                </p>
                <p className="mt-2 font-heading text-3xl font-medium tracking-tight text-navy md:text-4xl">
                  {BUSINESS.phone}
                </p>
                <div className="mt-5">
                  <PhoneLink size="lg" />
                </div>
              </div>

              <dl className="space-y-7 border-t border-navy/10 pt-7 text-sm">
                <div>
                  <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    <Clock size={14} aria-hidden="true" />
                    Hours
                  </dt>
                  <dd className="mt-2 space-y-0.5 text-navy">
                    <p>
                      Mon–Fri{" "}
                      {monFri ? `${monFri.open}–${monFri.close}` : "7:00–17:00"}
                    </p>
                    <p>
                      Sat {sat ? `${sat.open}–${sat.close}` : "8:00–13:00"}
                    </p>
                    <p className="text-ink-muted">Sun closed</p>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    <MapPin size={14} aria-hidden="true" />
                    Service area
                  </dt>
                  <dd className="mt-2 text-navy">
                    Sunshine Coast, QLD. Coast and hinterland.
                  </dd>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-ink-soft">
                    {[...SUBURBS]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((s, i) => (
                        <li key={s.slug}>
                          {s.name}
                          {i < SUBURBS.length - 1 && (
                            <span aria-hidden="true" className="ml-3 text-navy/25">
                              ·
                            </span>
                          )}
                        </li>
                      ))}
                  </ul>
                  <p className="mt-3 text-xs text-ink-muted">
                    Don&rsquo;t see your suburb? Call. We usually still cover
                    it.
                  </p>
                </div>

                <div>
                  <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    <Phone size={14} aria-hidden="true" />
                    What happens next
                  </dt>
                  <dd className="mt-2 text-navy">
                    Reply within one business day. Free site visit if the
                    job needs one. Written quote you can compare against
                    others.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

function FormSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="h-[520px] animate-pulse rounded-md border border-navy/10 bg-cream-cool"
    />
  );
}
