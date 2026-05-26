import { cn } from "@/lib/utils";

/**
 * Typographic wordmark used in header and footer.
 * Two-line treatment: "J.James" in Fraunces serif over "Painting Contractors"
 * in small uppercase Inter.
 */
export function Wordmark({
  className,
  variant = "navy",
  size = "md",
}: {
  className?: string;
  variant?: "navy" | "cream";
  size?: "sm" | "md" | "lg";
}) {
  const tone =
    variant === "cream"
      ? { primary: "text-cream", secondary: "text-cream/70" }
      : { primary: "text-navy", secondary: "text-ink-muted" };

  const sizeClass = {
    sm: { primary: "text-xl", secondary: "text-[10px]" },
    md: { primary: "text-2xl", secondary: "text-[11px]" },
    lg: { primary: "text-3xl", secondary: "text-xs" },
  }[size];

  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-heading font-semibold tracking-tight",
          sizeClass.primary,
          tone.primary,
        )}
      >
        J.James
      </span>
      <span
        className={cn(
          "mt-1 uppercase tracking-[0.18em]",
          sizeClass.secondary,
          tone.secondary,
        )}
      >
        Painting Contractors
      </span>
    </span>
  );
}
