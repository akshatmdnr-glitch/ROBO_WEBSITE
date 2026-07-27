'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
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
        <h1 className="text-2xl font-bold text-[#183A2D] font-heading">Notes & Articles</h1>
        <p className="text-xs text-[#66736C] mt-2 mb-6">
          Technical articles, tutorials, project write-ups and research notes will be published here as I continue my robotics journey.
        </p>
        <Link href="/blog" className="px-5 py-2.5 rounded-lg bg-[#214D3B] text-[#FCFBF8] text-xs font-medium hover:bg-[#183A2D] transition-all">
          Back to Notes & Articles
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#214D3B] hover:underline mb-8 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Notes & Articles</span>
      </Link>

      {/* Article Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-md bg-[#EDF5EF] border border-[#214D3B]/20 text-[#214D3B] font-mono text-xs font-medium">
            {post.category}
          </span>
          <span className="text-xs font-mono text-[#66736C] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span className="text-xs font-mono text-[#66736C] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#183A2D] leading-tight">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-[#FCFBF8] border border-[#E6E2DA] text-xs font-mono text-[#66736C]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Render */}
      <div className="prose max-w-none text-[#183A2D] space-y-6 text-sm sm:text-base leading-relaxed border-t border-[#E6E2DA] pt-8">
        <div className="whitespace-pre-line font-sans text-[#183A2D]">{post.content}</div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-[#E6E2DA] flex items-center justify-between">
        <Link
          href="/blog"
          className="text-xs font-mono text-[#214D3B] hover:underline flex items-center gap-2 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>More Articles</span>
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] text-xs font-medium shadow-xs transition-all"
        >
          Ask Question / Discuss Post
        </Link>
      </div>
    </article>
  );
}
