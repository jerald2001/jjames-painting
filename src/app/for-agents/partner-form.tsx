"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { submitPartner, type PartnerFormState } from "./actions";

const initial: PartnerFormState = { status: "idle" };

const ROLES = [
  { value: "real-estate-agent", label: "Real estate agent" },
  { value: "property-manager", label: "Property manager" },
  { value: "conveyancer", label: "Conveyancer" },
  { value: "builder", label: "Builder" },
  { value: "body-corporate", label: "Body corporate manager" },
  { value: "other", label: "Other" },
];

const VOLUMES = [
  { value: "occasional", label: "A few jobs a year" },
  { value: "monthly", label: "Monthly referrals" },
  { value: "weekly", label: "Weekly referrals" },
  { value: "portfolio", label: "Managing a portfolio" },
];

export function PartnerForm() {
  const [state, formAction, pending] = useActionState<
    PartnerFormState,
    FormData
  >(submitPartner, initial);

  if (state.status === "success") {
    return (
      <div
        className="rounded-md border border-green/40 bg-cream-cool p-7 md:p-9"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          size={32}
          strokeWidth={1.5}
          className="text-green"
          aria-hidden="true"
        />
        <h2 className="mt-5 font-heading text-2xl font-medium leading-tight text-navy md:text-3xl">
          Thanks. Jamie will reach out.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
          We&rsquo;ll be in touch within one business day to set up an account
          and walk through the workflow. Hold onto this reference:
        </p>
        <p className="mt-5 inline-block rounded-md border border-navy/15 bg-cream px-4 py-2 font-heading text-lg text-navy">
          {state.reference}
        </p>
      </div>
    );
  }

  const fieldErrors = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form
      action={formAction}
      className="rounded-md border border-navy/10 bg-cream-cool p-6 md:p-8"
      noValidate
    >
      {state.status === "error" && (
        <div
          className="mb-6 flex items-start gap-3 rounded-sm border border-red-200 bg-red-50 p-4 text-sm text-red-900"
          role="alert"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}

      <TextField
        name="name"
        label="Your name"
        required
        autoComplete="name"
        error={fieldErrors.name}
      />

      <TextField
        name="agency"
        label="Agency or firm"
        required
        autoComplete="organization"
        placeholder="Ray White Noosa, McGrath Buderim, etc."
        error={fieldErrors.agency}
      />

      <SelectField
        name="role"
        label="Your role"
        required
        options={[{ value: "", label: "Pick a role…" }, ...ROLES]}
        error={fieldErrors.role}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          name="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          placeholder="0403 571 616"
          error={fieldErrors.phone}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@agency.com.au"
          error={fieldErrors.email}
        />
      </div>
      <p className="-mt-3 mb-5 text-xs text-ink-muted">
        One of phone or email is enough.
      </p>

      <SelectField
        name="volume"
        label="How often might you refer?"
        options={[{ value: "", label: "Pick what fits…" }, ...VOLUMES]}
        error={fieldErrors.volume}
      />

      <TextAreaField
        name="notes"
        label="Anything else worth knowing?"
        placeholder="The first property you might send, suburbs you cover, invoicing preference (vendor-paid vs agency-arranged), or just a note."
      />

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-md bg-green px-7 text-base font-medium text-navy-deep shadow-[0_8px_24px_-12px_rgb(20_34_92/0.4)] transition-all hover:-translate-y-px hover:bg-green-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:cursor-progress disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Sending…" : "Send the partner enquiry"}
      </button>

      <p className="mt-5 text-xs text-ink-muted">
        We reply within one business day. We don&rsquo;t share your details
        with anyone outside the team.
      </p>
    </form>
  );
}

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-navy"
    >
      {children}
      {required && (
        <span className="ml-1 text-green" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

function inputClass(error?: string): string {
  const base =
    "block w-full rounded-md border bg-cream px-3 py-2.5 text-base text-navy placeholder:text-ink-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2";
  return error
    ? `${base} border-red-300 focus-visible:outline-red-400`
    : `${base} border-navy/15 focus-visible:outline-green`;
}

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p className="mt-1.5 text-xs text-red-700" role="alert">
      {error}
    </p>
  );
}

function TextField({
  name,
  label,
  required,
  type = "text",
  placeholder,
  autoComplete,
  error,
}: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div className="mb-5">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={inputClass(error)}
      />
      <FieldError error={error} />
    </div>
  );
}

function TextAreaField({
  name,
  label,
  placeholder,
  error,
}: {
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="mb-6">
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <textarea
        id={name}
        name={name}
        rows={4}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={inputClass(error) + " resize-y"}
      />
      <FieldError error={error} />
    </div>
  );
}

function SelectField({
  name,
  label,
  required,
  options,
  error,
}: {
  name: string;
  label: string;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
  error?: string;
}) {
  return (
    <div className="mb-5">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <select
        id={name}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        className={inputClass(error)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <FieldError error={error} />
    </div>
  );
}
