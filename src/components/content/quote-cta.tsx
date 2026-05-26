import Link from "next/link";
import { cn } from "@/lib/utils";

type QuoteCTAProps = {
  children?: React.ReactNode;
  href?: string;
  size?: "md" | "lg";
  /** Internal anchor used by the form (e.g. "?service=pre-sale"). */
  service?: string;
  className?: string;
};

/**
 * Primary green CTA. Use this for "Get a free quote", "Get a pre-sale quote",
 * etc. Service-tagged variants pass `service` to auto-tag the lead.
 */
export function QuoteCTA({
  children = "Get a free quote",
  href = "/contact",
  size = "lg",
  service,
  className,
}: QuoteCTAProps) {
  const target = service
    ? `${href}?service=${encodeURIComponent(service)}#quote`
    : `${href}#quote`;

  const sizeClass = {
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-7 text-base",
  }[size];

  return (
    <Link
      href={target}
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-green font-medium text-navy-deep shadow-[0_8px_24px_-12px_rgb(20_34_92/0.4)] transition-transform hover:-translate-y-px hover:bg-green-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy active:translate-y-0 active:bg-green-deep",
        sizeClass,
        className,
      )}
    >
      {children}
    </Link>
  );
}
