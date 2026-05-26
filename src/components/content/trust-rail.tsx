import { cn } from "@/lib/utils";
import { TRUST_RAIL } from "@/lib/brand";

type TrustRailProps = {
  className?: string;
  /** When surface="navy", uses cream-toned text. */
  surface?: "light" | "dark";
};

/**
 * Thin band beneath the hero on every page (per docs/layouts/home.md and
 * docs/layouts/service-pre-sale.md). The first item carries emphasis,
 * the rest stay muted, slash separators between.
 */
export function TrustRail({ className, surface = "light" }: TrustRailProps) {
  const baseTone =
    surface === "dark"
      ? "bg-navy-deep text-cream/85 border-cream/10"
      : "bg-cream-cool text-ink-muted border-navy/10";
  const leadTone = surface === "dark" ? "text-cream" : "text-navy";
  const sepTone = surface === "dark" ? "text-cream/25" : "text-navy/25";

  return (
    <div
      className={cn(
        "border-y py-5 md:py-6",
        baseTone,
        className,
      )}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] leading-tight md:gap-x-6 md:text-sm">
          {TRUST_RAIL.map((item, i) => (
            <li key={item} className="flex items-center gap-3 md:gap-6">
              {i > 0 && <span className={cn("select-none", sepTone)}>/</span>}
              <span className={cn(i === 0 && `font-medium ${leadTone}`)}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
