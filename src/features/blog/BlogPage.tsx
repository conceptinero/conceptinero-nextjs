import { BlogPageData } from "./types";
import { getFeaturedPosts, getRegularPosts, extractCategories } from "./utils";
import { BlogHero, FeaturedPosts, BlogSearchAndFilter } from "./components";

interface BlogPageProps {
  data: BlogPageData;
}

export default function BlogPage({ data }: BlogPageProps) {
  const { posts } = data;

  // Use utility functions directly since this is a server component
  const featuredPosts = getFeaturedPosts(posts);
  const regularPosts = getRegularPosts(posts);
  const categories = extractCategories(posts);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <BlogHero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Posts */}
        <FeaturedPosts posts={featuredPosts} />

        {/* All Articles Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            All Articles
          </h2>

          {/* Search and Filter with Posts Grid */}
          <BlogSearchAndFilter posts={regularPosts} categories={categories} />
        </section>
      </div>
    </div>
  );
}
