import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/content/eyebrow";
import { PhotoPlaceholder } from "@/components/content/photo-placeholder";
import { PRIORITY_SERVICES } from "@/lib/brand";
import { cn } from "@/lib/utils";

/**
 * Asymmetric bento grid. Boutique = largest tile, Pre-Sale + Rental stack right,
 * New Home spans full width below. Per docs/layouts/home.md section 4.
 */

// Helper: photo treatment hint per service for the gradient mesh placeholder.
const TREATMENT: Record<string, "coastal" | "hinterland" | "interior" | "exterior"> = {
  "boutique-house-painting": "coastal",
  "house-pre-sale-painting": "exterior",
  "rental-property-repaint": "interior",
  "new-home-purchase-painting": "hinterland",
};

// Tile size templates per slug.
const TILE_LAYOUT: Record<string, string> = {
  "boutique-house-painting": "md:col-span-2 md:row-span-2 aspect-[5/6] md:aspect-auto",
  "house-pre-sale-painting": "aspect-[5/4] md:aspect-[5/4]",
  "rental-property-repaint": "aspect-[5/4] md:aspect-[5/4]",
  "new-home-purchase-painting": "md:col-span-3 aspect-[12/5]",
};

export function HomeServiceBento() {
  return (
    <Section surface="cream" spacing="lg" topBorder={false}>
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>What we do best</Eyebrow>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-navy md:text-5xl">
            Four specialties, four conversations.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:auto-rows-auto md:gap-5">
          {PRIORITY_SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={cn(
                "group relative isolate flex overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green",
                TILE_LAYOUT[s.slug],
              )}
            >
              <div className="absolute inset-0 -z-10">
                <PhotoPlaceholder
                  alt={`${s.title} project example`}
                  treatment={TREATMENT[s.slug]}
                />
              </div>

              {/* Bottom-up navy gradient keeps text legible without flattening the photo. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.225 0.145 268 / 0) 35%, oklch(0.225 0.145 268 / 0.85) 100%)",
                }}
              />

              <div className="mt-auto flex w-full items-end justify-between gap-6 p-6 md:p-7">
                <div>
                  <h3 className="font-heading text-2xl font-medium tracking-tight text-cream md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-cream/85 md:text-base">
                    {s.oneLiner}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-cream transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
