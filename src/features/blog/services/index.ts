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
