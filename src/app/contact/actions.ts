"use server";

import { PRIORITY_SERVICES, type PriorityServiceSlug } from "@/lib/brand";

/**
 * Phase 4 placeholder. Validates the form payload and logs it to the
 * server console. Phase 5 wires real delivery — likely Resend with the
 * client's verified sending domain, or Formspree if speed beats fidelity.
 *
 * The signature is intentionally already action-state-shaped (formData in,
 * { ok | error } out) so swapping the body for real send doesn't touch the
 * client component.
 */

export type QuoteFormState =
  | { status: "idle" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

const SERVICE_SLUGS: ReadonlyArray<PriorityServiceSlug | "other"> = [
  ...PRIORITY_SERVICES.map((s) => s.slug),
  "other",
];

function looksLikeEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function looksLikePhone(v: string): boolean {
  // Australian mobile/landline tolerant: digits + spaces + + - ( ) only, at least 8 digits.
  const digits = v.replace(/\D/g, "");
  return digits.length >= 8 && /^[\d+\s()-]+$/.test(v);
}

export async function submitQuote(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const service = String(formData.get("service") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const suburb = String(formData.get("suburb") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  // Service-specific fields (all optional at this layer; trimmed for storage).
  const detailKeys = [
    "listingDate",
    "vacateDate",
    "settlementDate",
    "moveInDate",
    "occupancy",
    "homeType",
    "timing",
  ] as const;
  const details: Record<string, string> = {};
  for (const key of detailKeys) {
    const v = String(formData.get(key) ?? "").trim();
    if (v) details[key] = v;
  }

  const fieldErrors: Record<string, string> = {};
  if (!SERVICE_SLUGS.includes(service as (typeof SERVICE_SLUGS)[number])) {
    fieldErrors.service = "Pick the service that fits best.";
  }
  if (name.length < 2) {
    fieldErrors.name = "Please add your name.";
  }
  if (!phone && !email) {
    fieldErrors.phone = "Add a phone number or an email so we can reply.";
  }
  if (phone && !looksLikePhone(phone)) {
    fieldErrors.phone = "That phone number doesn't look right.";
  }
  if (email && !looksLikeEmail(email)) {
    fieldErrors.email = "That email doesn't look right.";
  }
  if (suburb.length < 2) {
    fieldErrors.suburb = "Add the suburb (or address) of the property.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "A couple of fields need a fix.",
      fieldErrors,
    };
  }

  const reference = `JJ-${Date.now().toString(36).toUpperCase()}`;
  // Phase 5 swap: replace this log with the real email send.
  console.log("[quote-form]", {
    reference,
    service,
    name,
    phone,
    email,
    suburb,
    details,
    notes: notes.slice(0, 4000),
    receivedAt: new Date().toISOString(),
  });

  return { status: "success", reference };
}
