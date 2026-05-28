import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { Wordmark } from "@/components/icons/wordmark";
import { LocationMap } from "@/components/content/location-map";
import {
  BUSINESS,
  LEGACY_SERVICES,
  PRIORITY_SERVICES,
  SUBURBS,
} from "@/lib/brand";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "For Agents", href: "/for-agents" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Sitemap", href: "/sitemap" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <section className="border-b border-navy/10 bg-[#faf8f5] text-navy">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-stretch lg:gap-16">
            <div className="min-h-[320px] md:min-h-[440px]">
              <LocationMap />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-green">
                Visit us
              </span>
              <h2 className="mt-3 font-heading text-3xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-4xl">
                Find us
              </h2>
              <p className="mt-4 max-w-md text-sm leading-[1.7] text-ink-soft">
                {BUSINESS.region} painters since {BUSINESS.foundedYear}, serving
                homes from Noosa to Caloundra. Get in touch to book a quote.
              </p>

              <dl className="mt-8 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                  <div>
                    <dt className="font-medium text-navy">Service area</dt>
                    <dd className="mt-0.5 text-ink-soft">
                      {BUSINESS.region}, {BUSINESS.state}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                  <div>
                    <dt className="font-medium text-navy">Phone</dt>
                    <dd className="mt-0.5">
                      <a
                        href={`tel:${BUSINESS.phoneE164}`}
                        className="text-ink-soft transition-colors hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                      >
                        {BUSINESS.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                  <div>
                    <dt className="font-medium text-navy">Hours</dt>
                    <dd className="mt-0.5 text-ink-soft">Mon–Fri 7:00–17:00</dd>
                    <dd className="text-ink-soft">Sat 8:00–13:00</dd>
                  </div>
                </div>
              </dl>

              <Link
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-cream shadow-[0_16px_36px_-16px_rgb(20_34_92/0.6)] transition-[transform,background-color] hover:bg-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green active:translate-y-px"
              >
                Open in Google Maps
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark variant="cream" size="lg" />
            <p className="mt-5 max-w-xs text-sm text-cream/75">
              {BUSINESS.tagline}
            </p>

            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-cream/55">Phone</dt>
                <dd>
                  <a
                    href={`tel:${BUSINESS.phoneE164}`}
                    className="text-cream hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                  >
                    {BUSINESS.phone}
                  </a>
                </dd>
              </div>
              {BUSINESS.email && (
                <div>
                  <dt className="text-cream/55">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-cream hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                    >
                      {BUSINESS.email}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-cream/55">Service area</dt>
                <dd>Sunshine Coast, QLD</dd>
              </div>
              <div>
                <dt className="text-cream/55">Hours</dt>
                <dd>Mon–Fri 7:00–17:00</dd>
                <dd>Sat 8:00–13:00</dd>
              </div>
            </dl>
          </div>

          <FooterColumn title="Services">
            {PRIORITY_SERVICES.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
            <div className="my-2 h-px w-8 bg-cream/15" aria-hidden="true" />
            {LEGACY_SERVICES.map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Locations">
            {[...SUBURBS]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((s) => (
                <FooterLink key={s.slug} href={`/locations/${s.slug}`}>
                  {s.name}
                </FooterLink>
              ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {COMPANY_LINKS.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
            <div className="my-3 h-px w-8 bg-cream/15" aria-hidden="true" />
            {LEGAL_LINKS.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-cream/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-cream/55">
            <span>© {year} {BUSINESS.name}.</span>
            {BUSINESS.abn && <span>ABN {BUSINESS.abn}</span>}
            {BUSINESS.qbccLicense && <span>QBCC {BUSINESS.qbccLicense}</span>}
          </div>
          <div className="flex items-center gap-4">
            {BUSINESS.socials.facebook && (
              <a
                href={BUSINESS.socials.facebook}
                className="text-xs uppercase tracking-[0.18em] text-cream/70 hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            )}
            {BUSINESS.socials.instagram && (
              <a
                href={BUSINESS.socials.instagram}
                className="text-xs uppercase tracking-[0.18em] text-cream/70 hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            )}
            <span className="text-[10px] uppercase tracking-[0.18em] text-cream/70">
              Dulux + Taubmans accredited
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-cream/55">
        {title}
      </h2>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-cream/85 transition-colors hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
      >
        {children}
      </Link>
    </li>
  );
}
