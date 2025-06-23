import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { PostCardProps } from "../types";

interface FeaturedPostCardProps extends PostCardProps {
  layout?: "large" | "grid";
}

export default function FeaturedPostCard({
  post,
  layout = "grid",
}: FeaturedPostCardProps) {
  if (layout === "large") {
    return (
      <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
        <div className="md:flex">
          <div className="md:w-2/5 relative h-80 md:h-auto">
            <Image
              src={post.mainImage.asset}
              alt={post.mainImage.alt}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                Featured
              </Badge>
            </div>
          </div>
          <div className="md:w-3/5 p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.map((category, index) => (
                <Badge key={index} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {post.description}
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                {post.author.name}
              </div>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </div>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <Button>Read Article</Button>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
      <div className="relative h-60">
        <Image
          src={post.mainImage.asset}
          alt={post.mainImage.alt}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
            Featured
          </Badge>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((category, index) => (
            <Badge key={index} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            {post.author.name}
          </div>
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime} min read
          </div>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <Button>Read Article</Button>
        </Link>
      </div>
    </article>
  );
}
