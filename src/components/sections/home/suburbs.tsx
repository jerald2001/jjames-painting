import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhoneLink } from "@/components/content/phone-link";
import { SUBURBS } from "@/lib/brand";

export function HomeSuburbs() {
  // Display the suburbs grouped by approximate geography for readability.
  const coast = ["noosa", "sunshine-beach", "peregian", "coolum", "kawana", "caloundra"];
  const hinterland = ["maleny", "buderim", "forest-glen", "sippy-downs", "glasshouse-mountains", "aura"];
  const coastSubs = SUBURBS.filter((s) => coast.includes(s.slug));
  const hinterSubs = SUBURBS.filter((s) => hinterland.includes(s.slug));

  return (
    <Section surface="cream-cool" spacing="lg">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Service area</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            We paint across the Sunshine Coast.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div className="relative rounded-md border border-navy/10 bg-cream p-8 md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
              }}
            />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
              Sunshine Coast, QLD
            </p>
            <p className="mt-3 font-heading text-2xl font-medium tracking-tight text-navy">
              Twelve suburbs across coast and hinterland.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              From the salt edge at Sunshine Beach to the heritage weatherboards
              of Maleny. We&rsquo;ve painted houses on both sides of the
              Bruce Highway since 1985.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <PhoneLink size="md" />
              <span className="text-xs text-ink-muted">
                Don&rsquo;t see your suburb? Call.
              </span>
            </div>
          </div>

          <div>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                Coast
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {coastSubs.map((s) => (
                  <SuburbLink key={s.slug} slug={s.slug} name={s.name} />
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-navy/10 pt-7">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                Hinterland &amp; inland
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {hinterSubs.map((s) => (
                  <SuburbLink key={s.slug} slug={s.slug} name={s.name} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SuburbLink({ slug, name }: { slug: string; name: string }) {
  return (
    <li>
      <Link
        href={`/locations/${slug}`}
        className="group inline-flex items-center gap-1.5 font-heading text-lg text-navy underline decoration-navy/0 decoration-2 underline-offset-4 transition-all hover:decoration-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
      >
        <MapPin
          size={14}
          className="text-green opacity-70 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
        {name}
      </Link>
    </li>
  );
}
