// Re-export blog services from the sanity lib
export {
  getAllPosts,
  getPostBySlug,
  getAllPostSlugs,
  getFeaturedPosts,
  getAllCategories,
  transformSanityPost,
} from "@/sanity/lib/blogService";

// Blog-specific service functions
export const blogServices = {
  // Could add blog-specific analytics, caching, etc. here in the future
} as const;

// Cached data layer for optimized performance
import { unstable_cache } from "next/cache";
import {
  getAllPosts as _getAllPosts,
  transformSanityPost,
} from "@/sanity/lib/blogService";
import { BLOG_CONFIG } from "../constants";

// Cached version of getAllPosts with same revalidation as blog pages
export const getCachedPosts = unstable_cache(
  async () => {
    const posts = await _getAllPosts();
    return posts
      .filter((post) => post && post.slug?.current && post.title)
      .map(transformSanityPost);
  },
  ["blog-posts"], // Cache key
  {
    revalidate: BLOG_CONFIG.REVALIDATE_INTERVAL, // Same as blog pages
    tags: ["blog-posts"], // For tag-based revalidation
  }
);

// Optimized function for sitemap that uses the same cache
export const getPostsForSitemap = getCachedPosts;
