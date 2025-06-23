import { MetadataRoute } from "next";
import { getPostsForSitemap } from "@/features/blog/services";
import { BLOG_CONFIG, BLOG_ROUTES } from "@/features/blog/constants";

// Enable ISR for the sitemap - revalidate every hour
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BLOG_CONFIG.SITE_URL;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: BLOG_ROUTES.ABSOLUTE.INDEX(baseUrl),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Dynamic blog routes using cached data
  try {
    const posts = await getPostsForSitemap(); // Uses same cache as blog pages
    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: BLOG_ROUTES.ABSOLUTE.POST(baseUrl, post.slug),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return static routes only if blog fetch fails
    return staticRoutes;
  }
}
