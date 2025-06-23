import AnimatedSection from "@/components/shared/AnimatedSection";
import { FeaturedPostsProps } from "../types";
import FeaturedPostCard from "./FeaturedPostCard";

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <AnimatedSection
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {posts.length === 1 ? (
        // Single featured post - original large layout
        <FeaturedPostCard post={posts[0]} layout="large" />
      ) : (
        // Multiple featured posts - grid layout
        <>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Articles
          </h2>
          {posts.length % 2 === 1 ? (
            // Odd number of posts - first post spans full width
            <div className="space-y-8">
              {/* First featured post - full width */}
              <FeaturedPostCard post={posts[0]} layout="large" />

              {/* Remaining posts in grid */}
              {posts.length > 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {posts.slice(1).map((post, index) => (
                    <AnimatedSection
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                    >
                      <FeaturedPostCard post={post} layout="grid" />
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Even number of posts - regular grid
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <AnimatedSection
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <FeaturedPostCard post={post} layout="grid" />
                </AnimatedSection>
              ))}
            </div>
          )}
        </>
      )}
    </AnimatedSection>
  );
}
