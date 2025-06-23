import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { PostCardProps } from "../types";

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={post.mainImage.asset}
          alt={post.mainImage.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-grow">
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
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {post.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            {post.author.name}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime} min read
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <Link href={`/blog/${post.slug}`}>
          <Button variant="outline" className="w-full">
            Read Article
          </Button>
        </Link>
      </div>
    </article>
  );
}
