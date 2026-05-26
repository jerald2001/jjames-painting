import Link from "next/link";
import { Container } from "@/components/layout/container";

type Crumb = { name: string; href?: string };

export function ServiceBreadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-navy/10 bg-cream-cool/60"
    >
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-ink-muted">
          {trail.map((c, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={c.name} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className="text-navy/30" aria-hidden="true">/</span>
                )}
                {isLast || !c.href ? (
                  <span className="font-medium text-navy">{c.name}</span>
                ) : (
                  <Link
                    href={c.href}
                    className="hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                  >
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
