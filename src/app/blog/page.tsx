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
        <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold">
          Technical Writing & Field Notes
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          Robotics Engineering Blog
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
          Deep dives into ROS2 Nav2 costmap plugins, Extended Kalman Filter state estimation math, micro-ROS STM32 FreeRTOS firmware, and CUDA point cloud processing.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1E293B]">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold shadow-md shadow-[#2563EB]/30'
                  : 'bg-[#111827] text-[#94A3B8] hover:text-white border border-[#1E293B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#111827] border border-[#1E293B] focus:border-[#00E5FF] text-xs text-white placeholder-[#94A3B8] outline-none transition-all"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 flex flex-col justify-between glass-panel-hover group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#00E5FF] font-mono text-[11px]">
                  {post.category}
                </span>
                <span className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#0B1120] border border-[#1E293B] text-[10px] font-mono text-[#94A3B8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#94A3B8]">
              <span>{post.date}</span>
              <span className="text-[#00E5FF] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
