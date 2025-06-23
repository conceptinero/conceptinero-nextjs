import { transformSanityPost } from "@/sanity/lib/blogService";

// Transformed blog post type
export type BlogPost = ReturnType<typeof transformSanityPost>;

// Blog page props
export interface BlogPageData {
  posts: BlogPost[];
  categories: string[];
}

// Featured posts layout props
export interface FeaturedPostsProps {
  posts: BlogPost[];
}

// Regular posts grid props
export interface PostsGridProps {
  posts: BlogPost[];
}

// Individual post card props
export interface PostCardProps {
  post: BlogPost;
}

// Blog filters state
export interface BlogFilters {
  searchQuery: string;
  selectedCategory: string;
}
