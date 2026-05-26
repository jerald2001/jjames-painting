import { TrustRail } from "@/components/content/trust-rail";
import { HomeHero } from "@/components/sections/home/hero";
import { HomeServiceBento } from "@/components/sections/home/service-bento";
import { HomeWhyUs } from "@/components/sections/home/why-us";
import { HomeProjectsCarousel } from "@/components/sections/home/projects-carousel";
import { HomeHowItWorks } from "@/components/sections/home/how-it-works";
import { HomeTestimonials } from "@/components/sections/home/testimonials";
import { HomeSuburbs } from "@/components/sections/home/suburbs";
import { HomeFinalCTA } from "@/components/sections/home/final-cta";
import {
  combineGraph,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

export default function HomePage() {
  const graph = combineGraph(
    localBusinessSchema(),
    organizationSchema(),
    websiteSchema(),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <HomeHero />
      <TrustRail />
      <HomeServiceBento />
      <HomeWhyUs />
      <HomeProjectsCarousel />
      <HomeHowItWorks />
      <HomeTestimonials />
      <HomeSuburbs />
      <HomeFinalCTA />
    </>
  );
}
