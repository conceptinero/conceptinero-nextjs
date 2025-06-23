import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, BookOpen } from "lucide-react";
import ConsultationButton from "@/components/shared/ConsultationButton";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AnimatedHeader from "@/components/shared/AnimatedHeader";
import { PortableText } from "@portabletext/react";
import { BlogPost } from "./types";
import { formatDate } from "./utils";
import { ShareButton, portableTextComponents } from "./components";

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0">
          <Image
            src={post.mainImage.asset}
            alt={post.mainImage.alt}
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Back Button */}
        <AnimatedSection
          className="absolute top-8 left-8 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog">
            <Button
              variant="secondary"
              className="bg-white/90 hover:bg-white backdrop-blur-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </AnimatedSection>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <AnimatedHeader
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category, index) => (
                  <Badge
                    key={index}
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  {post.author.name}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {formatDate(post.publishedAt)}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {post.readTime} min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Article
                </div>
              </div>
            </AnimatedHeader>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Intro */}
        <AnimatedSection
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-light border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
            {post.description}
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <AnimatedSection
          className="prose-custom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-none">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        </AnimatedSection>

        {/* Article Footer */}
        <AnimatedSection
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Ready to Maximize Your SR&ED Tax Credits?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Get expert guidance on your SR&ED claim and discover how much
                  your business could receive.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ShareButton />
                <ConsultationButton />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </article>
    </div>
  );
}
