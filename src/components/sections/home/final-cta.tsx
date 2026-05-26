import Link from "next/link";
import { Container } from "@/components/layout/container";
import { QuoteCTA } from "@/components/content/quote-cta";
import { PhoneLink } from "@/components/content/phone-link";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";

export function HomeFinalCTA() {
  return (
    <section
      className="relative isolate overflow-hidden border-t border-cream/5"
      aria-labelledby="home-cta-headline"
    >
      <div className="absolute inset-0 -z-10">
        <PhotoPlaceholder
          alt="Brushwork detail on a recently painted Sunshine Coast home"
          treatment="exterior"
        />
      </div>

      {/* Navy overlay keeps cream text legible (no flat CTA boxes per CLAUDE.md). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.155 0.13 270 / 0.92) 0%, oklch(0.225 0.145 268 / 0.78) 60%, oklch(0.225 0.145 268 / 0.62) 100%)",
        }}
      />

      <Container className="py-20 md:py-28">
        <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sky">
          <span className="h-px w-6 bg-green" aria-hidden="true" />
          Ready when you are
        </p>
        <h2
          id="home-cta-headline"
          className="font-heading text-5xl font-medium leading-[1.05] tracking-[-0.025em] text-cream md:text-7xl"
        >
          Ready for a quote?
        </h2>
        <p className="mt-5 max-w-xl text-lg text-cream/80 md:text-xl">
          We reply within one business day. Address, beds, scope.
          We&rsquo;ll come and look.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <QuoteCTA>Get a free quote</QuoteCTA>
          <PhoneLink size="lg" variant="inverse" />
        </div>
        <div className="mt-10 border-t border-cream/15 pt-7">
          <Link
            href="/for-agents"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            For real estate agents and property managers →
          </Link>
        </div>
      </Container>
    </section>
  );
}
