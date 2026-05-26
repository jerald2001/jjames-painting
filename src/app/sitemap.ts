import type { MetadataRoute } from "next";
import { SITE_URL, PRIORITY_SERVICES } from "@/lib/brand";
import { PROJECTS } from "@/content/projects";
import { SUBURB_HUB_LIST } from "@/content/suburbs";

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

  const contact: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/contact`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
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

  const locationsIndex: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/locations`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  };

  const locations: MetadataRoute.Sitemap = SUBURB_HUB_LIST.map((h) => ({
    url: `${SITE_URL}/locations/${h.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    home,
    about,
    contact,
    ...services,
    projectsIndex,
    ...projects,
    locationsIndex,
    ...locations,
  ];
}
