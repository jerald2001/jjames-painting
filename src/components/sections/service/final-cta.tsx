import { Container } from "@/components/layout/container";
import { QuoteCTA } from "@/components/content/quote-cta";
import { PhoneLink } from "@/components/content/phone-link";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { SERVICE_IMAGES } from "@/lib/photos";
import type { ServiceContent } from "@/content/services";

export function ServiceFinalCTA({
  data,
  serviceSlug,
}: {
  data: ServiceContent["finalCTA"];
  serviceSlug: ServiceContent["slug"];
}) {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="service-final-cta-heading"
    >
      <div className="absolute inset-0 -z-10">
        <PhotoPlaceholder
          src={SERVICE_IMAGES[serviceSlug]}
          alt="A recently painted Sunshine Coast home"
          treatment={data.photoTreatment}
          sizes="100vw"
        />
      </div>
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
          id="service-final-cta-heading"
          className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-cream md:text-6xl"
        >
          {data.heading}
        </h2>
        <p
          className="mt-5 max-w-xl text-lg text-cream/80 md:text-xl"
          dangerouslySetInnerHTML={{ __html: data.subhead }}
        />
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <QuoteCTA service={serviceSlug}>{data.ctaLabel}</QuoteCTA>
          <PhoneLink size="lg" variant="inverse" />
        </div>
      </Container>
    </section>
  );
}
