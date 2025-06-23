import { groq } from "next-sanity";

// Query for all published posts with author and category details
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    featured,
    readTime,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      _id,
      name,
      slug,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    categories[]->{
      _id,
      title,
      slug
    },
    body
  }
`;

// Query for a single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    featured,
    readTime,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      _id,
      name,
      slug,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    categories[]->{
      _id,
      title,
      slug
    },
    body
  }
`;

// Query for all post slugs (for static generation)
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

// Query for featured posts
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    featured,
    readTime,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      _id,
      name,
      slug,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    categories[]->{
      _id,
      title,
      slug
    },
    body
  }
`;

// Query for all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
  }
`;
