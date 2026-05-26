import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";

const STEPS = [
  {
    n: "01",
    title: "We come and quote",
    body: "Free site visit, transparent pricing, no pressure. Most quotes come back within one business day.",
  },
  {
    n: "02",
    title: "We schedule around you",
    body: "Tenant turnover, listing dates, settlement weeks. The schedule fits the deadline, not the other way around.",
  },
  {
    n: "03",
    title: "We paint, you sign off",
    body: "Full walkthrough, before and after photos, no surprises. The first call back is from the next vendor you refer.",
  },
];

export function HomeHowItWorks() {
  return (
    <Section surface="cream-cool" spacing="lg">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            Three steps from kerb to keys.
          </h2>
        </div>

        <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
          {STEPS.map((s) => (
            <li key={s.n} className="border-t border-navy/15 pt-6">
              <p
                className="font-heading text-6xl font-medium leading-none tracking-tight text-navy md:text-7xl"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                {s.n}
              </p>
              <div className="mt-5 h-px w-8 bg-green" aria-hidden="true" />
              <h3 className="mt-5 font-heading text-2xl font-medium tracking-tight text-navy">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
