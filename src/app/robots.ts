import { MetadataRoute } from "next";
import { BLOG_CONFIG } from "@/features/blog/constants";

// Enable ISR for robots.txt - revalidate every day
export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BLOG_CONFIG.SITE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/", "/api/", "/_next/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
