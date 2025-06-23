"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { BlogPost } from "../types";
import { useBlogSearch } from "../hooks";
import PostsGrid from "./PostsGrid";

interface BlogSearchAndFilterProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogSearchAndFilter({
  posts,
  categories,
}: BlogSearchAndFilterProps) {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredPosts,
    clearFilters,
    hasActiveFilters,
  } = useBlogSearch({ posts });

  return (
    <>
      {/* Search Bar */}
      <AnimatedSection
        className="max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10 py-6 text-base rounded-full border-gray-200 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </AnimatedSection>

      {/* Category Filter */}
      <AnimatedSection
        className="flex flex-wrap gap-3 justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {categories.map((category, index) => (
          <Badge
            key={index}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`cursor-pointer text-sm px-4 py-2 ${
              selectedCategory === category
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </AnimatedSection>

      {/* Posts Grid */}
      <AnimatedSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {filteredPosts.length > 0 ? (
          <PostsGrid posts={filteredPosts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No articles found matching your search criteria.
            </p>
            {hasActiveFilters && (
              <Button onClick={clearFilters}>Clear Filters</Button>
            )}
          </div>
        )}
      </AnimatedSection>
    </>
  );
}
