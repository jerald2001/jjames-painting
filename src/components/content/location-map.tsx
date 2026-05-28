import { BUSINESS } from "@/lib/brand";

/**
 * Keyless Google Maps embed for the business profile. Rendered in the footer,
 * so it appears on every page. No competing CTA sits beside the iframe
 * (per CLAUDE.md); the only adjacent link opens the same map.
 */
export function LocationMap() {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-navy/10 shadow-[0_24px_60px_-28px_rgb(20_34_92/0.45)]">
      <iframe
        src={BUSINESS.googleMapsEmbedUrl}
        title={`${BUSINESS.name} on Google Maps`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-full min-h-[320px] w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
