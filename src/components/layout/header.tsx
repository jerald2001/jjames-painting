import Link from "next/link";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/icons/wordmark";
import { PhoneLink } from "@/components/content/phone-link";
import { QuoteCTA } from "@/components/content/quote-cta";
import { BUSINESS, PRIORITY_SERVICES } from "@/lib/brand";
import { MobileNav } from "./mobile-nav";
import { NAV_LINKS } from "./nav-links";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream-cool/85 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 md:gap-6 md:px-8 md:py-5">
        <Link
          href="/"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
        >
          <Wordmark size="md" className="max-sm:[&_>span:first-child]:text-xl" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((item) =>
            item.label === "Services" ? (
              <ServicesMenuLink key={item.label} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-sm px-3 py-2 text-sm font-medium text-navy transition-colors hover:text-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PhoneLink variant="ghost" size="md" />
          <QuoteCTA size="md">Get a quote</QuoteCTA>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy/15 bg-cream-cool text-navy transition-colors hover:border-navy/30 hover:bg-cream-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green active:bg-cream-warm/80"
          >
            <Phone size={16} aria-hidden="true" />
            <span className="sr-only">
              Call {BUSINESS.name} on {BUSINESS.phone}
            </span>
          </a>
          <QuoteCTA size="md" className="h-10 px-3 text-sm">
            Quote
          </QuoteCTA>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function ServicesMenuLink() {
  return (
    <div className="group relative">
      <Link
        href="/services"
        className="inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium text-navy transition-colors hover:text-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
      >
        Services
        <svg
          aria-hidden="true"
          width={12}
          height={12}
          viewBox="0 0 12 12"
          className="transition-transform group-hover:rotate-180"
        >
          <path
            d="M2 4 L6 8 L10 4"
            stroke="currentColor"
            strokeWidth={1.5}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <div
        className={cn(
          "pointer-events-none invisible absolute left-1/2 top-full mt-2 w-[440px] -translate-x-1/2 rounded-md border border-navy/10 bg-cream-cool p-5 opacity-0 shadow-[0_24px_48px_-24px_rgb(20_34_92/0.25)] transition-all",
          "group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100",
          "focus-within:pointer-events-auto focus-within:visible focus-within:opacity-100",
        )}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
          Priority services
        </p>
        <ul className="space-y-1">
          {PRIORITY_SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="block rounded-sm border-l-2 border-transparent px-3 py-2 text-sm text-navy transition-colors hover:border-green hover:bg-cream-warm focus-visible:border-green focus-visible:bg-cream-warm focus-visible:outline-none"
              >
                <span className="font-medium">{s.title}</span>
                <span className="mt-0.5 block text-xs text-ink-muted">
                  {s.oneLiner}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-navy/10 pt-3">
          <Link
            href="/services"
            className="text-xs font-medium uppercase tracking-[0.18em] text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            All services →
          </Link>
        </div>
      </div>
    </div>
  );
}
