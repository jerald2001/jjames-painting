import { cn } from "@/lib/utils";

/**
 * Section eyebrow pattern: uppercase letter-spaced label sitting above a
 * section's H2. Per docs/anti-generic-guardrails.md: never use a pill badge.
 * A thin green accent rule sits to the left of the label.
 *
 * On surface="navy" the label tone shifts to cream/sky to keep contrast.
 */

type EyebrowProps = {
  children: React.ReactNode;
  surface?: "light" | "dark";
  className?: string;
};

export function Eyebrow({ children, surface = "light", className }: EyebrowProps) {
  const toneClass =
    surface === "dark" ? "text-sky" : "text-ink-muted";
  return (
    <p
      className={cn(
        "mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em]",
        toneClass,
        className,
      )}
    >
      <span
        className="h-px w-6 bg-green"
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
