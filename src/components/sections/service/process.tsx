import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import type { ServiceContent } from "@/content/services";
import { cn } from "@/lib/utils";

/**
 * Staggered/offset process timeline (per docs/accepted-image.md).
 * Odd steps: text left, photo right. Even steps: photo left, text right.
 */
export function ServiceProcess({
  process,
}: {
  process: ServiceContent["process"];
}) {
  return (
    <Section surface="cream-cool" spacing="lg">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            {process.heading}
          </h2>
        </div>

        <ol className="space-y-16 md:space-y-24">
          {process.steps.map((step, i) => {
            const photoRight = i % 2 === 0;
            return (
              <li
                key={step.n}
                className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
              >
                <div
                  className={cn(
                    "order-2",
                    photoRight ? "md:order-1" : "md:order-2",
                  )}
                >
                  <p
                    className="font-heading text-6xl font-medium leading-none tracking-tight text-navy md:text-7xl"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {step.n}
                  </p>
                  <div className="mt-5 h-px w-8 bg-green" aria-hidden="true" />
                  <h3 className="mt-5 font-heading text-2xl font-medium leading-tight tracking-tight text-navy md:text-3xl">
                    {step.title}
                  </h3>
                  <p
                    className="mt-3 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                </div>
                <div
                  className={cn(
                    "order-1 relative aspect-[5/4] overflow-hidden rounded-md shadow-[0_24px_44px_-28px_rgb(20_34_92/0.4)]",
                    photoRight ? "md:order-2" : "md:order-1",
                  )}
                >
                  <PhotoPlaceholder
                    alt={`${step.title} step`}
                    treatment={step.treatment}
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
