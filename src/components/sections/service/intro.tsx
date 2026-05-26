import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { ServiceContent } from "@/content/services";

export function ServiceIntro({ intro }: { intro: ServiceContent["intro"] }) {
  return (
    <Section surface="cream-cool" spacing="lg" topBorder={false}>
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:divide-x md:divide-green/30">
          <div className="md:pr-8">
            <h2 className="font-heading text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-navy md:text-4xl">
              {intro.audienceHeading}
            </h2>
            <p
              className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
              dangerouslySetInnerHTML={{ __html: intro.audienceBody }}
            />
          </div>
          <div className="md:pl-8">
            <h2 className="font-heading text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-navy md:text-4xl">
              {intro.outcomeHeading}
            </h2>
            <p
              className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
              dangerouslySetInnerHTML={{ __html: intro.outcomeBody }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
