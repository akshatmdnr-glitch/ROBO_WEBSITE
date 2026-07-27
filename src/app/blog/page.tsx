'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Search, Clock, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogs';

const CATEGORIES = ['All', 'ROS2', 'SLAM & Math', 'Embedded C++', 'Computer Vision'] as const;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
          Technical Writing & Field Notes
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#183A2D] mt-2">
          Robotics <span className="font-serif-accent font-normal text-[#214D3B]">engineering</span> Blog
        </h1>
        <p className="text-base sm:text-lg text-[#66736C] mt-4 leading-relaxed">
          Deep dives into ROS2 Nav2 costmap plugins, Extended Kalman Filter state estimation math, micro-ROS STM32 FreeRTOS firmware, and CUDA point cloud processing.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E6E2DA]">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-[#214D3B] text-[#FCFBF8] font-semibold shadow-xs'
                  : 'bg-[#FCFBF8] text-[#66736C] hover:text-[#183A2D] border border-[#E6E2DA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#66736C] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FCFBF8] border border-[#E6E2DA] focus:border-[#214D3B] text-xs text-[#183A2D] placeholder-[#66736C] outline-none transition-all"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-[#FCFBF8] border border-[#E6E2DA] hover:border-[#214D3B]/30 rounded-2xl p-6 flex flex-col justify-between transition-all group shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-[#EDF5EF] border border-[#214D3B]/20 text-[#214D3B] font-mono text-[11px] font-medium">
                  {post.category}
                </span>
                <span className="text-[11px] font-mono text-[#66736C] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-[#183A2D] group-hover:text-[#214D3B] transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs text-[#66736C] mt-3 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#F8F6F1] border border-[#E6E2DA] text-[10px] font-mono text-[#66736C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E6E2DA] flex items-center justify-between text-xs text-[#66736C]">
              <span>{post.date}</span>
              <span className="text-[#214D3B] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Article
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
