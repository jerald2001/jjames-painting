import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import type { ServiceContent } from "@/content/services";

export function ServiceROI({ roi }: { roi: NonNullable<ServiceContent["roi"]> }) {
  return (
    <Section surface="cream" spacing="lg">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{roi.eyebrow}</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            {roi.heading}
          </h2>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {roi.cards.map((c) => (
            <li
              key={c.title}
              className="rounded-md border border-navy/10 bg-cream-cool p-7 transition-colors hover:border-navy/25"
            >
              <h3 className="font-heading text-xl font-medium leading-snug tracking-tight text-navy md:text-2xl">
                {c.title}
              </h3>
              <p
                className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base"
                dangerouslySetInnerHTML={{ __html: c.body }}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
