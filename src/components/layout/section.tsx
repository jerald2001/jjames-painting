import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Background layer for rhythm. "cream" = base, "cream-cool" = elevated, "navy" = dark/inverse. */
  surface?: "cream" | "cream-cool" | "navy";
  /** Vertical padding. */
  spacing?: "sm" | "md" | "lg" | "xl";
  /** Top hairline border in navy/10. Default true for inner sections. */
  topBorder?: boolean;
  as?: "section" | "aside" | "article" | "div";
};

export function Section({
  children,
  className,
  surface = "cream",
  spacing = "lg",
  topBorder = true,
  as: As = "section",
}: SectionProps) {
  const surfaceClass = {
    cream: "bg-cream text-ink",
    "cream-cool": "bg-cream-cool text-ink",
    navy: "bg-navy text-cream",
  }[surface];

  const spacingClass = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-28",
    xl: "py-24 md:py-36",
  }[spacing];

  const borderClass = topBorder
    ? surface === "navy"
      ? "border-t border-cream/10"
      : "border-t border-navy/10"
    : "";

  return (
    <As className={cn(surfaceClass, spacingClass, borderClass, className)}>
      {children}
    </As>
  );
}
