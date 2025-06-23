import { BlogPage } from "@/features/blog";
import { getCachedPosts, getAllCategories } from "@/features/blog/services";
import { sortPostsByDate } from "@/features/blog/utils";

// Transform categories for the filter
function transformCategories(
  categories: Array<{ title: string | null }>
): string[] {
  return categories?.map((cat) => cat.title || "") || [];
}

export default async function BlogPageRoute() {
  try {
    // Fetch all data in parallel - posts use cached version
    const [posts, categoriesData] = await Promise.all([
      getCachedPosts(), // Uses cached data shared with sitemap
      getAllCategories(),
    ]);

    // Sort posts by date (posts are already transformed and filtered in cache)
    const sortedPosts = sortPostsByDate(posts);

    // Transform categories
    const categories = transformCategories(categoriesData);

    return <BlogPage data={{ posts: sortedPosts, categories }} />;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Blog
          </h1>
          <p className="text-gray-600">
            We&apos;re having trouble loading the blog posts. Please try again
            later.
          </p>
        </div>
      </div>
    );
  }
}

export const revalidate = 3600;
