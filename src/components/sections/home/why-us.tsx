import { Clock, ShieldCheck, Award, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    icon: Clock,
    title: "40 years on the Sunshine Coast",
    body: "Established 1985. Family business under the same name and most of the same team. Sunshine Coast homes are what we know.",
  },
  {
    icon: ShieldCheck,
    title: "Fully qualified",
    body: "QBCC licensed and insured. Lead-based paint and asbestos removal qualifications. Real safety documentation on every job.",
  },
  {
    icon: Award,
    title: "Premium brand partners",
    body: "Dulux Accredited Painter and Taubmans Endorsed. Long-standing relationships with builders and trades across the Coast.",
  },
  {
    icon: Sparkles,
    title: "Detail-led finish",
    body: "Boutique-grade prep and finish across every job, not just the boutique ones. The reason the same clients call us back.",
  },
];

export function HomeWhyUs() {
  return (
    <Section surface="cream-cool" spacing="lg">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Why us</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            Forty years on the Sunshine Coast.
          </h2>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <li
              key={p.title}
              className="rounded-md border border-navy/10 bg-cream p-7 transition-colors hover:border-navy/25"
            >
              <p.icon
                size={28}
                strokeWidth={1.75}
                className="text-navy"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-heading text-xl font-medium leading-tight text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
