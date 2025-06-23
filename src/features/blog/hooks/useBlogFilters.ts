import { useMemo } from "react";
import { BlogPost } from "../types";
import {
  getFeaturedPosts,
  getRegularPosts,
  extractCategories,
  sortPostsByDate,
} from "../utils";

interface UseBlogFiltersProps {
  posts: BlogPost[];
}

export function useBlogFilters({ posts }: UseBlogFiltersProps) {
  const sortedPosts = useMemo(() => sortPostsByDate(posts), [posts]);

  const featuredPosts = useMemo(
    () => getFeaturedPosts(sortedPosts),
    [sortedPosts]
  );

  const regularPosts = useMemo(
    () => getRegularPosts(sortedPosts),
    [sortedPosts]
  );

  const categories = useMemo(() => extractCategories(posts), [posts]);

  const postStats = useMemo(
    () => ({
      total: posts.length,
      featured: featuredPosts.length,
      regular: regularPosts.length,
      categories: categories.length - 1, // Exclude "All"
    }),
    [posts.length, featuredPosts.length, regularPosts.length, categories.length]
  );

  return {
    sortedPosts,
    featuredPosts,
    regularPosts,
    categories,
    postStats,
  };
}
