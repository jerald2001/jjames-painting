import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import type { ServiceContent } from "@/content/services";

export function ServiceProjects({
  projects,
  eyebrow = "More projects",
}: {
  projects: ServiceContent["projects"];
  eyebrow?: string;
}) {
  return (
    <Section surface="cream-cool" spacing="lg">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <Eyebrow className="mb-0">{eyebrow}</Eyebrow>
          <Link
            href="/projects"
            className="text-sm font-medium text-navy hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            View all projects →
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-[0_24px_44px_-28px_rgb(20_34_92/0.45)]">
                  <PhotoPlaceholder
                    alt={`${p.scope} in ${p.suburb}`}
                    treatment={p.treatment}
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                      {p.suburb}
                    </p>
                    <p className="mt-2 font-heading text-xl font-medium leading-tight text-navy">
                      {p.scope}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
