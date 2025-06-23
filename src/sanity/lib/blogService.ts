import { client } from "./client";
import {
  postsQuery,
  postBySlugQuery,
  postSlugsQuery,
  featuredPostsQuery,
  categoriesQuery,
} from "./queries";
import type {
  PostsQueryResult,
  PostBySlugQueryResult,
  CategoriesQueryResult,
} from "../types";

// Type for a single post from the query result
type SanityPost = NonNullable<PostBySlugQueryResult>;

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
