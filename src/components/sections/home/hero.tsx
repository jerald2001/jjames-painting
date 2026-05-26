import { Container } from "@/components/layout/container";
import { QuoteCTA } from "@/components/content/quote-cta";
import { PhoneLink } from "@/components/content/phone-link";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";

export function HomeHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="home-hero-headline"
    >
      <div className="absolute inset-0 -z-10">
        <PhotoPlaceholder
          alt="A recently repainted Sunshine Coast Queenslander in late afternoon light"
          treatment="coastal"
          priority
        />
      </div>

      {/* Cream-fade left overlay keeps the eyebrow + H1 legible without flattening
          the right side of the image. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(95deg, oklch(0.962 0.008 85 / 0.92) 0%, oklch(0.962 0.008 85 / 0.65) 40%, oklch(0.962 0.008 85 / 0.15) 80%, transparent 100%)",
        }}
      />

      <Container className="relative flex min-h-[85vh] flex-col justify-center py-20 md:min-h-[88vh] md:py-28">
        <div className="max-w-[700px]">
          <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-muted md:text-sm">
            <span className="h-px w-6 bg-green" aria-hidden="true" />
            Sunshine Coast painting since 1985
          </p>
          <h1
            id="home-hero-headline"
            className="font-heading text-5xl font-medium leading-[0.95] tracking-[-0.035em] text-navy sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Painted to sell.
            <br />
            Painted to last.
          </h1>
          <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-ink-soft md:text-xl">
            Family-run painters serving Noosa, Buderim, Caloundra, Sunshine
            Beach, Maleny and the wider Sunshine Coast. Rental repaints,
            pre-sale prep, new-home refreshes, and boutique residential work.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <QuoteCTA>Get a free quote</QuoteCTA>
            <PhoneLink size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
