import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import type { ServiceContent } from "@/content/services";

export function ServiceAgentBridge({
  data,
}: {
  data: NonNullable<ServiceContent["agentBridge"]>;
}) {
  return (
    <section
      className="relative isolate overflow-hidden border-y border-cream/5 bg-navy text-cream"
      aria-labelledby="agent-bridge-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 80% 30%, oklch(0.745 0.095 237 / 0.18), transparent 65%), radial-gradient(ellipse 60% 70% at 20% 80%, oklch(0.55 0.18 134 / 0.15), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      <Container className="py-20 md:py-24">
        <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sky">
          <span className="h-px w-6 bg-green" aria-hidden="true" />
          For agents and property managers
        </p>
        <h2
          id="agent-bridge-heading"
          className="max-w-3xl font-heading text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-cream md:text-5xl"
        >
          {data.heading}
        </h2>
        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg"
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
        <div className="mt-9">
          <Link
            href="/for-agents"
            className="inline-flex items-center gap-2 rounded-md border border-cream/30 px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-green hover:bg-cream/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green active:bg-cream/10"
          >
            Become a referral partner
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
