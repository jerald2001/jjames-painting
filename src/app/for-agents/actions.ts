"use server";

/**
 * Partner-enquiry server action. Separate from the consumer quote flow
 * (src/app/contact/actions.ts) so referral leads are tagged differently
 * and follow-up routes through Jamie's agent-network workflow.
 *
 * Phase 4 placeholder: validates, logs, returns a JJA-prefixed reference
 * (vs JJ- for the consumer flow) so the two streams are distinguishable
 * in logs. Phase 5 wires real delivery the same way as the consumer
 * action — body-only swap.
 */

export type PartnerFormState =
  | { status: "idle" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

const ROLES = [
  "real-estate-agent",
  "property-manager",
  "conveyancer",
  "builder",
  "body-corporate",
  "other",
] as const;

const VOLUMES = [
  "occasional",
  "monthly",
  "weekly",
  "portfolio",
] as const;

function looksLikeEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function looksLikePhone(v: string): boolean {
  const digits = v.replace(/\D/g, "");
  return digits.length >= 8 && /^[\d+\s()-]+$/.test(v);
}

export async function submitPartner(
  _prev: PartnerFormState,
  formData: FormData,
): Promise<PartnerFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const agency = String(formData.get("agency") ?? "").trim();
  const role = String(formData.get("role") ?? "");
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const volume = String(formData.get("volume") ?? "");
  const notes = String(formData.get("notes") ?? "").trim();

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = "Please add your name.";
  if (agency.length < 2)
    fieldErrors.agency = "Add the agency or firm name.";
  if (!ROLES.includes(role as (typeof ROLES)[number]))
    fieldErrors.role = "Pick the role that fits.";
  if (!phone && !email)
    fieldErrors.phone = "Add a phone number or an email so we can reply.";
  if (phone && !looksLikePhone(phone))
    fieldErrors.phone = "That phone number doesn't look right.";
  if (email && !looksLikeEmail(email))
    fieldErrors.email = "That email doesn't look right.";
  if (volume && !VOLUMES.includes(volume as (typeof VOLUMES)[number]))
    fieldErrors.volume = "Pick the volume that fits.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "A couple of fields need a fix.",
      fieldErrors,
    };
  }

  const reference = `JJA-${Date.now().toString(36).toUpperCase()}`;
  // Phase 5 swap: replace this log with the real partner-stream notification.
  console.log("[partner-enquiry]", {
    reference,
    name,
    agency,
    role,
    phone,
    email,
    volume,
    notes: notes.slice(0, 4000),
    receivedAt: new Date().toISOString(),
  });

  return { status: "success", reference };
}
