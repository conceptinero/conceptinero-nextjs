import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import ConsultationButton from "@/components/shared/ConsultationButton";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AnimatedHeader from "@/components/shared/AnimatedHeader";
import { PortableText } from "@portabletext/react";
import { BlogPost } from "./types";
import { formatDate } from "./utils";

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <AnimatedSection
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedHeader
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category, index) => (
              <Badge key={index} variant="outline">
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author.name}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime} min read
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <Image
              src={post.mainImage.asset}
              alt={post.mainImage.alt}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300">
            {post.description}
          </p>
        </AnimatedHeader>

        {/* Content */}
        <AnimatedSection
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PortableText value={post.body} />
        </AnimatedSection>

        {/* Share Section */}
        <AnimatedSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <footer className="flex items-center justify-between py-8 border-t border-gray-200 dark:border-gray-800 mb-16">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-400">
                Share this article:
              </span>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            <ConsultationButton />
          </footer>
        </AnimatedSection>
      </article>
    </div>
  );
}
