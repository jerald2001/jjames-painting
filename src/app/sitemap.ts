import type { MetadataRoute } from "next";
import { SITE_URL, PRIORITY_SERVICES } from "@/lib/brand";
import { PROJECTS } from "@/content/projects";

/**
 * Sitemap is intentionally limited to routes that resolve today.
 * Phase 4/5 routes (/about, /contact, /for-agents, /testimonials,
 * /blog, /locations/[suburb]) get added here as they're built so
 * crawlers never see a 404 from the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
  };

  const about: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/about`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  };

  const services: MetadataRoute.Sitemap = PRIORITY_SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectsIndex: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/projects`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  };

  const projects: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [home, about, ...services, projectsIndex, ...projects];
}
