import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrustRail } from "@/components/content/trust-rail";
import { ServiceBreadcrumb } from "@/components/sections/service/breadcrumb";
import { ServiceHero } from "@/components/sections/service/hero";
import { ServiceIntro } from "@/components/sections/service/intro";
import { ServiceROI } from "@/components/sections/service/roi";
import { ServiceProcess } from "@/components/sections/service/process";
import { ServiceBeforeAfter } from "@/components/sections/service/before-after";
import { ServiceAgentBridge } from "@/components/sections/service/agent-bridge";
import { ServicePalette } from "@/components/sections/service/palette";
import { ServiceProjects } from "@/components/sections/service/projects";
import { ServiceFAQ } from "@/components/sections/service/faq";
import { ServiceFinalCTA } from "@/components/sections/service/final-cta";
import { ServiceRelated } from "@/components/sections/service/related";
import { SERVICE_CONTENT } from "@/content/services";
import { PRIORITY_SERVICES, type PriorityServiceSlug } from "@/lib/brand";
import {
  breadcrumbSchema,
  combineGraph,
  faqPageSchema,
  serviceSchema,
} from "@/lib/schema";

type Params = { service: string };

export function generateStaticParams(): Params[] {
  return PRIORITY_SERVICES.map((s) => ({ service: s.slug }));
}

function isPriorityServiceSlug(s: string): s is PriorityServiceSlug {
  return PRIORITY_SERVICES.some((p) => p.slug === s);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service } = await params;
  if (!isPriorityServiceSlug(service)) return {};
  const c = SERVICE_CONTENT[service];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/services/${c.slug}` },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `/services/${c.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service } = await params;
  if (!isPriorityServiceSlug(service)) notFound();

  const content = SERVICE_CONTENT[service];
  const serviceMeta = PRIORITY_SERVICES.find((s) => s.slug === service);
  if (!serviceMeta) notFound();

  const graph = combineGraph(
    serviceSchema({
      slug: content.slug,
      name: serviceMeta.title,
      description: content.metaDescription,
    }),
    faqPageSchema(content.faq),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: serviceMeta.title, url: `/services/${content.slug}` },
    ]),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <ServiceBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: serviceMeta.shortName },
        ]}
      />
      <ServiceHero hero={content.hero} serviceSlug={content.slug} />
      <TrustRail />
      <ServiceIntro intro={content.intro} />
      {content.roi && <ServiceROI roi={content.roi} />}
      <ServiceProcess process={content.process} />
      {content.beforeAfter && <ServiceBeforeAfter data={content.beforeAfter} />}
      {content.agentBridge && (
        <ServiceAgentBridge data={content.agentBridge} />
      )}
      {content.palette && <ServicePalette data={content.palette} />}
      <ServiceProjects projects={content.projects} />
      <ServiceFAQ faq={content.faq} />
      <ServiceFinalCTA data={content.finalCTA} serviceSlug={content.slug} />
      <ServiceRelated related={content.related} />
    </>
  );
}
