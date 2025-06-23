"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "../types";
import { filterPostsBySearch, filterPostsByCategory } from "../utils";

interface UseBlogSearchProps {
  posts: BlogPost[];
}

export function useBlogSearch({ posts }: UseBlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filterPostsBySearch(filtered, searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filterPostsByCategory(filtered, selectedCategory);
    }

    return filtered;
  }, [posts, searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredPosts,
    clearFilters,
    hasActiveFilters: searchQuery.trim() !== "" || selectedCategory !== "All",
  };
}
