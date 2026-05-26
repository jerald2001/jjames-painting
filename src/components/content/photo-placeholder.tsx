import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoPlaceholderProps = {
  /** Optional src for when a real photo is available. */
  src?: string;
  alt: string;
  /** Visual treatment when no src is provided. Each treatment is a designed
   *  gradient mesh, not a missing-image grey block. */
  treatment?: "coastal" | "hinterland" | "interior" | "exterior";
  className?: string;
  /** For Next/Image priority loading on hero photo only. */
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
};

/**
 * Until Phase 4 photography arrives, sections that need imagery render a
 * designed gradient mesh in the brand palette instead of a stock placeholder.
 * The component takes a `src` prop optionally — once real photos exist, we
 * just pass `src` and the placeholder swaps out.
 */
export function PhotoPlaceholder({
  src,
  alt,
  treatment = "coastal",
  className,
  priority = false,
  fill = true,
  sizes = "100vw",
}: PhotoPlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  // Designed placeholder per treatment.
  const treatments: Record<string, string> = {
    coastal: `
      radial-gradient(ellipse 70% 60% at 30% 20%, oklch(0.745 0.095 237 / 0.55), transparent 60%),
      radial-gradient(ellipse 80% 70% at 75% 70%, oklch(0.225 0.145 268 / 0.45), transparent 65%),
      linear-gradient(160deg, oklch(0.962 0.008 85) 0%, oklch(0.85 0.04 240) 100%)
    `,
    hinterland: `
      radial-gradient(ellipse 60% 50% at 20% 80%, oklch(0.715 0.12 132 / 0.4), transparent 65%),
      radial-gradient(ellipse 70% 65% at 80% 25%, oklch(0.225 0.145 268 / 0.4), transparent 60%),
      linear-gradient(200deg, oklch(0.935 0.014 75) 0%, oklch(0.5 0.08 268) 100%)
    `,
    interior: `
      radial-gradient(ellipse 90% 70% at 50% 0%, oklch(0.962 0.008 85) 0%, oklch(0.85 0.025 70) 60%, transparent 100%),
      radial-gradient(ellipse 40% 30% at 50% 95%, oklch(0.225 0.145 268 / 0.5), transparent 75%),
      linear-gradient(180deg, oklch(0.92 0.02 80) 0%, oklch(0.55 0.06 260) 100%)
    `,
    exterior: `
      radial-gradient(ellipse 70% 60% at 50% 30%, oklch(0.745 0.095 237 / 0.4), transparent 60%),
      radial-gradient(ellipse 90% 50% at 50% 100%, oklch(0.225 0.145 268 / 0.55), transparent 65%),
      linear-gradient(180deg, oklch(0.85 0.04 240) 0%, oklch(0.25 0.12 268) 100%)
    `,
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative h-full w-full overflow-hidden",
        className,
      )}
      style={{ background: treatments[treatment] }}
    >
      {/* Subtle SVG noise overlay for tactile depth per anti-generic-guardrails. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
