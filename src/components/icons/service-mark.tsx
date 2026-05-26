import type { PriorityServiceSlug } from "@/lib/brand";

type ServiceMarkProps = {
  service: PriorityServiceSlug;
  size?: number;
  className?: string;
};

/**
 * Inline brand-style icon for each priority service.
 * Mirrors the SVGs in assets/icons/industry/ but lives as inline JSX so we can
 * recolor via currentColor where needed without spinning up SVG sprites.
 */
export function ServiceMark({ service, size = 48, className }: ServiceMarkProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    className,
  } as const;

  switch (service) {
    case "rental-property-repaint":
      return (
        <svg {...common} role="img">
          <title>Rental property repaint</title>
          <g
            stroke="#13225C"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={22} cy={36} r={9} />
            <line x1={30} y1={34} x2={52} y2={34} />
            <line x1={46} y1={34} x2={46} y2={40} />
            <line x1={40} y1={34} x2={40} y2={38} />
          </g>
          <circle cx={22} cy={36} r={4} fill="#13225C" />
          <path
            d="M 22 14 Q 26 18, 22 24"
            stroke="#5DBE2E"
            strokeWidth={3.5}
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={22} cy={25.5} r={2.4} fill="#5DBE2E" />
        </svg>
      );

    case "house-pre-sale-painting":
      return (
        <svg {...common} role="img">
          <title>House pre-sale painting</title>
          <g
            stroke="#13225C"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 12 32 L 32 16 L 52 32 L 52 52 L 12 52 Z" />
          </g>
          <rect x={28} y={40} width={8} height={12} fill="#13225C" rx={1} />
          <g stroke="#13225C" strokeWidth={2.5} fill="#5DBE2E" strokeLinejoin="round">
            <path d="M 44 16 L 56 16 L 60 20 L 56 24 L 44 24 Z" />
          </g>
          <circle cx={46} cy={20} r={1.5} fill="#13225C" />
          <line
            x1={44}
            y1={20}
            x2={40}
            y2={20}
            stroke="#6FB6E8"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      );

    case "new-home-purchase-painting":
      return (
        <svg {...common} role="img">
          <title>New home painting</title>
          <g
            stroke="#13225C"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 14 54 L 14 16 L 42 16 L 42 54" />
            <path
              d="M 14 16 L 36 12 L 36 54 L 14 50 Z"
              fill="#13225C"
              fillOpacity={0.04}
            />
          </g>
          <path
            d="M 42 54 L 56 50 L 56 18 L 42 16"
            fill="#6FB6E8"
            fillOpacity={0.3}
          />
          <circle cx={20} cy={34} r={1.6} fill="#13225C" />
          <g
            stroke="#5DBE2E"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={50} cy={30} r={4} />
            <line x1={48} y1={33} x2={46} y2={40} />
            <line x1={46} y1={38} x2={49} y2={38} />
          </g>
          <circle cx={50} cy={30} r={1.5} fill="#5DBE2E" />
        </svg>
      );

    case "boutique-house-painting":
      return (
        <svg {...common} role="img">
          <title>Boutique house painting</title>
          <rect x={29} y={10} width={6} height={26} rx={2} fill="#13225C" />
          <rect x={26} y={34} width={12} height={5} rx={1} fill="#13225C" />
          <line
            x1={27}
            y1={36.5}
            x2={37}
            y2={36.5}
            stroke="#2C3E80"
            strokeWidth={1}
          />
          <path
            d="M 27 39 Q 25 46, 27 54 L 37 54 Q 39 46, 37 39 Z"
            fill="#5DBE2E"
          />
          <line
            x1={30}
            y1={40}
            x2={29}
            y2={52}
            stroke="#13225C"
            strokeWidth={1}
            opacity={0.35}
            strokeLinecap="round"
          />
          <line
            x1={34}
            y1={40}
            x2={35}
            y2={52}
            stroke="#13225C"
            strokeWidth={1}
            opacity={0.35}
            strokeLinecap="round"
          />
          <path
            d="M 32 5 L 36 9 L 32 13 L 28 9 Z"
            fill="none"
            stroke="#13225C"
            strokeWidth={2}
            strokeLinejoin="round"
          />
          <path
            d="M 40 52 Q 50 50, 56 44"
            stroke="#6FB6E8"
            strokeWidth={2.5}
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={56} cy={44} r={1.6} fill="#6FB6E8" />
        </svg>
      );
  }
}
