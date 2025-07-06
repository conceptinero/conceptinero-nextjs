import { BlogPage } from "@/features/blog";
import { getCachedPosts, getAllCategories } from "@/features/blog/services";
import { sortPostsByDate } from "@/features/blog/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SR&ED Insights & Resources Blog | Tax Credit Tips | Conceptinero",
  description:
    "Stay informed with the latest SR&ED news, strategies, tips, and insights about R&D tax credits in Canada. Expert advice from Conceptinero's SR&ED specialists.",
  keywords: [
    "SR&ED blog",
    "R&D tax credit tips",
    "SR&ED insights",
    "tax credit strategies",
    "SR&ED news Canada",
    "R&D funding insights",
    "SR&ED program updates",
    "tax credit resources",
    "SR&ED best practices",
    "R&D tax credit blog",
  ],
  openGraph: {
    title: "SR&ED Insights & Resources Blog | Conceptinero",
    description:
      "Stay informed with the latest SR&ED news, strategies, and insights about R&D tax credits in Canada.",
    type: "website",
    images: [
      {
        url: "/blog/blog-1.webp",
        width: 1200,
        height: 630,
        alt: "SR&ED Insights and Resources Blog by Conceptinero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SR&ED Insights & Resources Blog | Conceptinero",
    description:
      "Stay informed with the latest SR&ED news, strategies, and insights about R&D tax credits.",
    images: ["/blog/blog-1.webp"],
  },
  alternates: {
    canonical: "/blog",
  },
};

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
