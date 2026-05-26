"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { PRIORITY_SERVICES } from "@/lib/brand";
import { submitQuote, type QuoteFormState } from "./actions";

const SERVICE_OPTIONS = [
  ...PRIORITY_SERVICES.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other" as const, label: "Something else / not sure yet" },
];

const initial: QuoteFormState = { status: "idle" };

export function QuoteForm() {
  const params = useSearchParams();
  const urlService = params.get("service") ?? "";
  const validUrlService =
    SERVICE_OPTIONS.find((o) => o.value === urlService)?.value ?? "";

  const [service, setService] = useState<string>(validUrlService);

  useEffect(() => {
    if (validUrlService && !service) setService(validUrlService);
  }, [validUrlService, service]);

  const [state, formAction, pending] = useActionState<QuoteFormState, FormData>(
    submitQuote,
    initial,
  );

  const conditional = useMemo(() => {
    switch (service) {
      case "house-pre-sale-painting":
        return (
          <DateField
            name="listingDate"
            label="Target listing date"
            hint="Approximate is fine."
          />
        );
      case "rental-property-repaint":
        return (
          <>
            <DateField
              name="vacateDate"
              label="Vacate date"
              hint="When the keys come back."
            />
            <RadioGroup
              name="occupancy"
              label="Occupancy at quote time"
              options={[
                { value: "vacant", label: "Vacant" },
                { value: "occupied", label: "Tenant still in" },
              ]}
            />
          </>
        );
      case "new-home-purchase-painting":
        return (
          <>
            <DateField name="settlementDate" label="Settlement date" />
            <DateField name="moveInDate" label="Move-in date (if known)" />
          </>
        );
      case "boutique-house-painting":
        return (
          <>
            <TextField
              name="homeType"
              label="Type of home"
              placeholder="Heritage Queenslander, architectural new build, coastal premium…"
            />
            <SelectField
              name="timing"
              label="Timing"
              options={[
                { value: "asap", label: "As soon as possible" },
                { value: "3-months", label: "Within 3 months" },
                { value: "6-months", label: "Within 6 months" },
                { value: "scoping", label: "Just scoping" },
              ]}
            />
          </>
        );
      default:
        return null;
    }
  }, [service]);

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
          Thanks. Your quote request is in.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
          Jamie or one of the crew will reply within one business day. Hold
          onto this reference if you need to follow up:
        </p>
        <p className="mt-5 inline-block rounded-md border border-navy/15 bg-cream px-4 py-2 font-heading text-lg text-navy">
          {state.reference}
        </p>
        <p className="mt-5 text-sm text-ink-muted">
          Have project photos? Reply to the email when it arrives and attach
          them there. We&rsquo;ll add them to your quote.
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

      <SelectField
        name="service"
        label="What's the job?"
        required
        value={service}
        onChange={setService}
        error={fieldErrors.service}
        options={[{ value: "", label: "Pick a service…" }, ...SERVICE_OPTIONS]}
      />

      <TextField
        name="name"
        label="Your name"
        required
        error={fieldErrors.name}
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
          placeholder="you@example.com"
          error={fieldErrors.email}
        />
      </div>
      <p className="-mt-3 mb-5 text-xs text-ink-muted">
        One of phone or email is enough.
      </p>

      <TextField
        name="suburb"
        label="Property suburb (or address)"
        required
        placeholder="Buderim, Noosa, Caloundra…"
        error={fieldErrors.suburb}
      />

      {conditional}

      <TextAreaField
        name="notes"
        label="Anything else worth knowing?"
        placeholder="Beds and baths, condition, parts of the house you want painted, deadline pressure, access notes."
      />

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-md bg-green px-7 text-base font-medium text-navy-deep shadow-[0_8px_24px_-12px_rgb(20_34_92/0.4)] transition-all hover:-translate-y-px hover:bg-green-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:cursor-progress disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Sending…" : "Send the quote request"}
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
  hint,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
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
      {hint && <span className="ml-2 text-xs font-normal text-ink-muted">{hint}</span>}
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

function DateField({
  name,
  label,
  hint,
}: {
  name: string;
  label: string;
  hint?: string;
}) {
  return (
    <div className="mb-5">
      <FieldLabel htmlFor={name} hint={hint}>
        {label}
      </FieldLabel>
      <input
        id={name}
        name={name}
        type="date"
        className={inputClass()}
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  required,
  value,
  onChange,
  options,
  error,
}: {
  name: string;
  label: string;
  required?: boolean;
  value?: string;
  onChange?: (v: string) => void;
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
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
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

function RadioGroup({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <fieldset className="mb-5">
      <legend className="mb-1.5 text-sm font-medium text-navy">{label}</legend>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {options.map((o) => (
          <label
            key={o.value}
            className="inline-flex items-center gap-2 text-sm text-navy"
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              className="size-4 accent-green"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
