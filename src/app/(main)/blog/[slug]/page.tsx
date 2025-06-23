import { notFound } from "next/navigation";
import { BlogPostPage } from "@/features/blog";
import {
  getPostBySlug,
  getAllPostSlugs,
  transformSanityPost,
} from "@/features/blog/services";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostRoute({ params }: BlogPostPageProps) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      notFound();
    }

    const transformedPost = transformSanityPost(post);

    return <BlogPostPage post={transformedPost} />;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    notFound();
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export const revalidate = 3600;
