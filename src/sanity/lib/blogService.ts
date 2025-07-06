import { client } from "./client";
import { urlFor } from "./image";
import {
  postsQuery,
  postBySlugQuery,
  postSlugsQuery,
  featuredPostsQuery,
  categoriesQuery,
  authorsQuery,
} from "./queries";
import type {
  PostsQueryResult,
  PostBySlugQueryResult,
  CategoriesQueryResult,
  AuthorsQueryResult,
} from "../types";

// Type for a single post from the query result
type SanityPost = NonNullable<PostBySlugQueryResult>;

// Type for a single author from the query result
type SanityAuthor = AuthorsQueryResult[0];

// Transform Sanity post to match our component structure
export function transformSanityPost(post: SanityPost) {
  if (!post) {
    throw new Error("Post is null or undefined");
  }

  return {
    slug: post.slug?.current || "",
    title: post.title || "",
    description: post.description || "",
    categories: post.categories?.map((cat) => cat.title || "") || [],
    publishedAt: post.publishedAt || "",
    author: {
      name: post.author?.name || "",
      slug: post.author?.slug?.current || "",
    },
    readTime: post.readTime || 0,
    mainImage: {
      asset: post.mainImage?.asset?.url || "",
      alt: post.mainImage?.alt || "",
    },
    featured: post.featured || false,
    body: post.body || [],
  };
}

// Helper function to convert Sanity block content to plain text
function blocksToText(blocks: SanityAuthor["bio"]): string {
  if (!blocks) return "";

  return blocks
    .filter((block) => block._type === "block")
    .map(
      (block) =>
        block.children
          ?.filter((child) => child._type === "span")
          .map((span) => span.text)
          .join("") || ""
    )
    .join(" ")
    .trim();
}

// Transform Sanity author to match our component structure
export function transformSanityAuthor(author: SanityAuthor) {
  if (!author) {
    throw new Error("Author is null or undefined");
  }

  return {
    id: author._id,
    name: author.name || "",
    role: author.role || "",
    bio: blocksToText(author.bio),
    image: author.image?.asset
      ? urlFor(author.image).width(400).height(400).url()
      : "",
    slug: author.slug?.current || "",
  };
}

// Fetch all posts
export async function getAllPosts(): Promise<PostsQueryResult> {
  try {
    return await client.fetch(postsQuery);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

// Fetch all post slugs for static generation
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const slugs: Array<string | null> = await client.fetch(postSlugsQuery);
    return slugs.filter((slug): slug is string => slug !== null);
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return [];
  }
}

// Fetch featured posts
export async function getFeaturedPosts(): Promise<PostsQueryResult> {
  try {
    return await client.fetch(featuredPostsQuery);
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

// Fetch all categories
export async function getAllCategories(): Promise<CategoriesQueryResult> {
  try {
    return await client.fetch(categoriesQuery);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Fetch all authors
export async function getAllAuthors(): Promise<AuthorsQueryResult> {
  try {
    return await client.fetch(authorsQuery);
  } catch (error) {
    console.error("Error fetching authors:", error);
    return [];
  }
}

// Cached version of getAllAuthors for better performance
let authorsCache: AuthorsQueryResult | null = null;
let authorsCacheTime = 0;
const AUTHORS_CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function getCachedAuthors(): Promise<AuthorsQueryResult> {
  const now = Date.now();

  if (authorsCache && now - authorsCacheTime < AUTHORS_CACHE_DURATION) {
    return authorsCache;
  }

  try {
    authorsCache = await getAllAuthors();
    authorsCacheTime = now;
    return authorsCache;
  } catch (error) {
    console.error("Error fetching cached authors:", error);
    return authorsCache || []; // Return cached data if available, empty array otherwise
  }
}
