import { notFound } from "next/navigation";
import { BlogPostPage } from "@/features/blog";
import {
  getPostBySlug,
  getAllPostSlugs,
  transformSanityPost,
} from "@/features/blog/services";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      return {
        title: "Post Not Found | Conceptinero Blog",
        description: "The requested blog post could not be found.",
      };
    }

    const transformedPost = transformSanityPost(post);

    return {
      title: `${transformedPost.title} | Conceptinero Blog`,
      description:
        transformedPost.description ||
        `Read about ${transformedPost.title} and other SR&ED insights on the Conceptinero blog.`,
      keywords: [
        "SR&ED",
        "R&D tax credits",
        "tax credits Canada",
        "scientific research",
        "experimental development",
        ...(transformedPost.categories || []),
      ],
      authors: transformedPost.author
        ? [{ name: transformedPost.author.name }]
        : undefined,
      openGraph: {
        title: transformedPost.title,
        description:
          transformedPost.description ||
          `Read about ${transformedPost.title} on the Conceptinero blog.`,
        type: "article",
        publishedTime: transformedPost.publishedAt,
        images: transformedPost.mainImage
          ? [
              {
                url: transformedPost.mainImage.asset,
                width: 1200,
                height: 630,
                alt: transformedPost.mainImage.alt || transformedPost.title,
              },
            ]
          : [
              {
                url: "/blog/blog-1.webp",
                width: 1200,
                height: 630,
                alt: transformedPost.title,
              },
            ],
        authors: transformedPost.author
          ? [transformedPost.author.name]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: transformedPost.title,
        description:
          transformedPost.description ||
          `Read about ${transformedPost.title} on the Conceptinero blog.`,
        images: transformedPost.mainImage
          ? [transformedPost.mainImage.asset]
          : ["/blog/blog-1.webp"],
      },
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  } catch (error) {
    console.error(`Error generating metadata for post ${slug}:`, error);
    return {
      title: "Blog Post | Conceptinero",
      description:
        "Read the latest insights about SR&ED tax credits and R&D funding.",
    };
  }
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
