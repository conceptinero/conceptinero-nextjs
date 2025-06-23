// Main page components
export { default as BlogPage } from "./BlogPage";
export { default as BlogPostPage } from "./BlogPostPage";

// Component exports (re-exported from components/index.ts)
export {
  BlogHero,
  FeaturedPosts,
  PostsGrid,
  PostCard,
  FeaturedPostCard,
  BlogSearchAndFilter,
  ShareButton,
} from "./components";

// Types
export type {
  BlogPost,
  BlogPageData,
  FeaturedPostsProps,
  PostsGridProps,
  PostCardProps,
  BlogFilters,
} from "./types";

// Utilities
export {
  filterPostsBySearch,
  filterPostsByCategory,
  extractCategories,
  sortPostsByDate,
  getFeaturedPosts,
  getRegularPosts,
  formatDate,
  calculateReadingTime,
} from "./utils";

// Services
export {
  getAllPosts,
  getPostBySlug,
  getAllPostSlugs,
  getFeaturedPosts as getFeaturedPostsService,
  getAllCategories,
  transformSanityPost,
} from "./services";

// Hooks
export { useBlogSearch, useBlogFilters } from "./hooks";

// Constants
export { BLOG_CONFIG, BLOG_ROUTES, BLOG_ANIMATIONS } from "./constants";
