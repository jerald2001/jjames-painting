import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import type { ServiceContent } from "@/content/services";

export function ServicePalette({
  data,
}: {
  data: NonNullable<ServiceContent["palette"]>;
}) {
  return (
    <Section surface="cream" spacing="lg">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            {data.heading}
          </h2>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.swatches.map((s) => (
            <li
              key={s.name}
              className="overflow-hidden rounded-md border border-navy/10 bg-cream-cool"
            >
              <div
                className="aspect-square w-full"
                style={{ backgroundColor: s.hex }}
                aria-hidden="true"
              />
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  {s.brand}
                </p>
                <p className="mt-1.5 font-heading text-lg font-medium leading-tight text-navy">
                  {s.name}
                </p>
                <p className="mt-1 text-xs text-ink-muted">{s.hex}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {s.note}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href={data.leadMagnet.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            {data.leadMagnet.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
