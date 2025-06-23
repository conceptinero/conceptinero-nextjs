// Blog configuration constants
export const BLOG_CONFIG = {
  // Pagination
  POSTS_PER_PAGE: 12,
  FEATURED_POSTS_LIMIT: 3,

  // Content limits
  EXCERPT_LENGTH: 160,
  TITLE_MAX_LENGTH: 80,

  // Reading time calculation
  WORDS_PER_MINUTE: 200,

  // Cache/revalidation
  REVALIDATE_INTERVAL: 3600, // 1 hour

  // Meta tags
  DEFAULT_META: {
    title: "SR&ED Insights & Resources - Conceptinero",
    description:
      "Stay informed with the latest news, strategies, and insights about the SR&ED program and R&D tax credits in Canada.",
    keywords: ["SR&ED", "tax credits", "R&D", "Canada", "CRA", "innovation"],
  },
} as const;

// Blog routes
export const BLOG_ROUTES = {
  INDEX: "/blog",
  POST: (slug: string) => `/blog/${slug}`,
  CATEGORY: (category: string) =>
    `/blog?category=${encodeURIComponent(category)}`,
  SEARCH: (query: string) => `/blog?search=${encodeURIComponent(query)}`,
} as const;

// Animation configurations
export const BLOG_ANIMATIONS = {
  HERO: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  FEATURED: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.1 },
  },
  POSTS_GRID: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    stagger: 0.1,
  },
} as const;
