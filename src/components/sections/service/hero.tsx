import { Container } from "@/components/layout/container";
import { QuoteCTA } from "@/components/content/quote-cta";
import { PhoneLink } from "@/components/content/phone-link";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { SERVICE_IMAGES } from "@/lib/photos";
import type { ServiceContent } from "@/content/services";

type ServiceHeroProps = {
  hero: ServiceContent["hero"];
  serviceSlug: ServiceContent["slug"];
};

export function ServiceHero({ hero, serviceSlug }: ServiceHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="service-hero-headline"
    >
      <div className="absolute inset-0 -z-10">
        <PhotoPlaceholder
          src={SERVICE_IMAGES[serviceSlug]}
          alt={`${hero.eyebrow} hero image`}
          treatment={hero.photoTreatment}
          priority
          sizes="100vw"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(95deg, oklch(0.962 0.008 85 / 0.92) 0%, oklch(0.962 0.008 85 / 0.65) 40%, oklch(0.962 0.008 85 / 0.15) 80%, transparent 100%)",
        }}
      />

      <Container className="relative flex min-h-[78vh] flex-col justify-center py-20 md:min-h-[80vh] md:py-28">
        <div className="max-w-[700px]">
          <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-muted md:text-sm">
            <span className="h-px w-6 bg-green" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1
            id="service-hero-headline"
            className="font-heading text-5xl font-medium leading-[0.95] tracking-[-0.035em] text-navy sm:text-6xl md:text-7xl lg:text-[5rem]"
          >
            {hero.headline.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-[580px] text-lg leading-relaxed text-ink-soft md:text-xl">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <QuoteCTA service={serviceSlug}>{hero.ctaLabel}</QuoteCTA>
            <PhoneLink size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
