import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/brand";

type PhoneLinkProps = {
  variant?: "outlined" | "ghost" | "inverse";
  size?: "md" | "lg";
  className?: string;
  showDot?: boolean;
  /** Override the displayed label. Defaults to the formatted phone number. */
  label?: string;
};

/**
 * Sitewide tel: link with a small green dot accent.
 * Persistent in header (ghost), sticky mobile bar (outlined), used as
 * secondary CTA next to the green Quote button.
 */
export function PhoneLink({
  variant = "outlined",
  size = "md",
  className,
  showDot = true,
  label,
}: PhoneLinkProps) {
  const sizeClass = {
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base",
  }[size];

  const variantClass = {
    outlined:
      "border border-navy/15 bg-cream-cool text-navy hover:border-navy/30 hover:bg-cream-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green active:bg-cream-warm/80",
    ghost:
      "text-navy hover:text-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green active:text-navy-deep",
    inverse:
      "border border-cream/25 bg-transparent text-cream hover:border-green hover:bg-cream/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green active:bg-cream/10",
  }[variant];

  return (
    <a
      href={`tel:${BUSINESS.phoneE164}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-md font-medium transition-colors",
        sizeClass,
        variantClass,
        className,
      )}
      aria-label={`Call ${BUSINESS.name} on ${BUSINESS.phone}`}
    >
      {showDot && (
        <span
          className="block size-1.5 rounded-full bg-green"
          aria-hidden="true"
        />
      )}
      {label ?? BUSINESS.phone}
    </a>
  );
}
