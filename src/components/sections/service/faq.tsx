import { Plus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import type { ServiceContent } from "@/content/services";

/**
 * Accessible accordion using native <details>/<summary>.
 * FAQPage schema is emitted by the parent page wrapper for the correct JSON-LD
 * structure (Phase 3 build: src/lib/schema.ts faqPageSchema).
 */
export function ServiceFAQ({ faq }: { faq: ServiceContent["faq"] }) {
  return (
    <Section surface="cream" spacing="lg">
      <Container width="narrow">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            What people ask before booking.
          </h2>
        </div>

        <ul className="divide-y divide-navy/10 border-y border-navy/10">
          {faq.map((item) => (
            <li key={item.q}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition-colors hover:bg-cream-cool/40 focus-visible:bg-cream-cool focus-visible:outline-none">
                  <h3 className="font-heading text-lg font-medium leading-snug text-navy md:text-xl">
                    {item.q}
                  </h3>
                  <Plus
                    size={20}
                    className="mt-1 shrink-0 text-navy transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <div className="pb-7 pr-12">
                  <p
                    className="text-base leading-relaxed text-ink-soft md:text-lg"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
