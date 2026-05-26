import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PRIORITY_SERVICES } from "@/lib/brand";
import type { ServiceContent } from "@/content/services";

export function ServiceRelated({
  related,
}: {
  related: ServiceContent["related"];
}) {
  return (
    <Section surface="cream" spacing="md">
      <Container>
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
          Related
        </p>
        <div className="max-w-2xl">
          <h2 className="mb-6 font-heading text-2xl font-medium leading-tight tracking-tight text-navy">
            Related services
          </h2>
          <ul className="space-y-5">
            {related.services.map((r) => {
              const svc = PRIORITY_SERVICES.find((s) => s.slug === r.slug);
              if (!svc) return null;
              return (
                <li key={r.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group flex items-start gap-3 text-navy"
                  >
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-green transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-heading text-lg font-medium leading-tight group-hover:text-green">
                        {svc.title}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">
                        {r.anchor}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
