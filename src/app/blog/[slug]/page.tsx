'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Share2, Tag, Cpu, User } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogs';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostDetail({ params }: BlogPageProps) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-white font-heading">Blog Post Not Found</h1>
        <p className="text-xs text-[#94A3B8] mt-2 mb-6">The technical article you requested does not exist.</p>
        <Link href="/blog" className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-semibold">
          Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#00E5FF] hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Blog Articles</span>
      </Link>

      {/* Article Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-md bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#00E5FF] font-mono text-xs">
            {post.category}
          </span>
          <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-[#111827] border border-[#1E293B] text-xs font-mono text-[#94A3B8]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Author Card */}
      <div className="p-4 rounded-xl bg-[#111827] border border-[#1E293B] flex items-center gap-4 mb-10">
        <div className="w-10 h-10 rounded-full bg-[#0B1120] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
          <User className="w-5 h-5" />
        </div>
        <div>
          <span className="text-sm font-bold text-white block">{post.author.name}</span>
          <span className="text-xs font-mono text-[#06B6D4]">{post.author.role}</span>
        </div>
      </div>

      {/* Content Render */}
      <div className="prose prose-invert max-w-none text-[#F8FAFC] space-y-6 text-sm sm:text-base leading-relaxed border-t border-[#1E293B] pt-8">
        <div className="whitespace-pre-line font-sans">{post.content}</div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-[#1E293B] flex items-center justify-between">
        <Link
          href="/blog"
          className="text-xs font-mono text-[#00E5FF] hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>More Articles</span>
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-xs font-semibold"
        >
          Ask Question / Discuss Post
        </Link>
      </div>
    </article>
  );
}
