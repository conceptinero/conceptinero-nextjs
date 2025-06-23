import AnimatedSection from "@/components/shared/AnimatedSection";
import { PostsGridProps } from "../types";
import PostCard from "./PostCard";

interface PostsGridExtendedProps extends PostsGridProps {
  emptyMessage?: string;
}

export default function PostsGrid({
  posts,
  emptyMessage = "No articles found.",
}: PostsGridExtendedProps) {
  if (posts.length === 0) {
    return (
      <AnimatedSection
        className="col-span-full text-center py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {emptyMessage}
        </p>
      </AnimatedSection>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <AnimatedSection
          key={post.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
        >
          <PostCard post={post} />
        </AnimatedSection>
      ))}
    </div>
  );
}
