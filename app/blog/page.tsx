"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Search, Clock, Calendar, User } from "lucide-react";
import ConsultationButton from "@/components/shared/ConsultationButton";

const blogPosts = [
  {
    id: "1",
    title: "What Qualifies as SR&ED? A Comprehensive Guide",
    excerpt:
      "Understanding the criteria for eligible SR&ED activities can be challenging. This guide breaks down the key requirements and provides real-world examples.",
    category: "SR&ED Basics",
    date: "June 15, 2023",
    author: "Alexandra Thompson",
    readTime: "8 min read",
    image: "/blog/blog-1.webp",
    featured: true,
  },
  {
    id: "2",
    title: "Maximizing Your SR&ED Claim: Eligible Expenses",
    excerpt:
      "Learn which expenses can be included in your SR&ED claim and how to properly document them to maximize your tax credits.",
    category: "Strategy",
    date: "May 22, 2023",
    author: "David Chen",
    readTime: "6 min read",
    image: "/blog/blog-2.webp",
    featured: false,
  },
  {
    id: "3",
    title: "Common SR&ED Audit Triggers and How to Avoid Them",
    excerpt:
      "CRA audits can be stressful and time-consuming. Learn about the common triggers for SR&ED audits and how to prepare your claim to minimize audit risk.",
    category: "Compliance",
    date: "April 8, 2023",
    author: "Michael Rodriguez",
    readTime: "7 min read",
    image: "/blog/blog-3.webp",
    featured: false,
  },
  {
    id: "4",
    title: "Documenting SR&ED Projects: Best Practices",
    excerpt:
      "Proper documentation is crucial for successful SR&ED claims. Learn about the best practices for documenting your R&D activities throughout the year.",
    category: "Documentation",
    date: "February 28, 2023",
    author: "James Kim",
    readTime: "9 min read",
    image: "/blog/blog-5.webp",
    featured: false,
  },
  {
    id: "5",
    title: "2023 SR&ED Program Updates: What You Need to Know",
    excerpt:
      "Stay up-to-date on the latest changes to the SR&ED program and how they might affect your claims.",
    category: "News",
    date: "January 12, 2023",
    author: "Alexandra Thompson",
    readTime: "4 min read",
    image: "/blog/blog-6.webp",
    featured: false,
  },
];

const categories = [
  "All",
  "SR&ED Basics",
  "Strategy",
  "Compliance",
  "Funding",
  "Documentation",
  "News",
  "Case Studies",
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [consultationOpen, setConsultationOpen] = useState(false);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              SR&ED Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest news, strategies, and insights about
              the SR&ED program and R&D tax credits in Canada.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
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
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-60 md:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
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
                    <Badge className="mb-3" variant="outline">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button>Read Article</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
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
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <Badge className="mb-3" variant="outline">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No articles found matching your search criteria.
                </p>
                <Button
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated on SR&ED
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for the latest SR&ED program updates,
              strategies, and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-md"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 dark:bg-blue-800 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Maximize Your SR&ED Tax Credits?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book your free strategy session today and discover how we can help
              your business claim the tax credits you deserve.
            </p>
            <ConsultationButton
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8"
            />
          </div>
        </div>
      </section>
    </>
  );
}
