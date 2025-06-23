import { BlogPost } from "../types";

/**
 * Filters posts by search query
 */
export function filterPostsBySearch(
  posts: BlogPost[],
  query: string
): BlogPost[] {
  if (!query.trim()) return posts;

  const searchQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery) ||
      post.description.toLowerCase().includes(searchQuery) ||
      post.author.name.toLowerCase().includes(searchQuery)
  );
}

/**
 * Filters posts by category
 */
export function filterPostsByCategory(
  posts: BlogPost[],
  category: string
): BlogPost[] {
  if (category === "All" || !category) return posts;
  return posts.filter((post) => post.categories.includes(category));
}

/**
 * Extracts unique categories from posts
 */
export function extractCategories(posts: BlogPost[]): string[] {
  const categories = new Set<string>();
  posts.forEach((post) => {
    post.categories.forEach((category) => categories.add(category));
  });
  return ["All", ...Array.from(categories).sort()];
}

/**
 * Sorts posts by publish date (newest first)
 */
export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Filters posts to get only featured ones
 */
export function getFeaturedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter((post) => post.featured);
}

/**
 * Filters posts to get only non-featured ones
 */
export function getRegularPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter((post) => !post.featured);
}

/**
 * Formats date for display
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Calculates estimated reading time based on word count
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
