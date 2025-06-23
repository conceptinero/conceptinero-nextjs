import { BlogPage } from "@/features/blog";
import {
  getAllPosts,
  getAllCategories,
  transformSanityPost,
} from "@/features/blog/services";
import { sortPostsByDate } from "@/features/blog/utils";

// Transform categories for the filter
function transformCategories(
  categories: Array<{ title: string | null }>
): string[] {
  return categories?.map((cat) => cat.title || "") || [];
}

export default async function BlogPageRoute() {
  try {
    // Fetch all data in parallel
    const [postsData, categoriesData] = await Promise.all([
      getAllPosts(),
      getAllCategories(),
    ]);

    // Transform and filter valid posts
    const validPosts = postsData
      .filter((post) => post && post.slug?.current && post.title)
      .map(transformSanityPost);

    // Sort posts by date
    const sortedPosts = sortPostsByDate(validPosts);

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
