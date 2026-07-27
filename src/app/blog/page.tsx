'use client';

import React from 'react';
import { BookOpen, FileText, Sparkles } from 'lucide-react';
import { BLOG_SECTION_DATA } from '@/data/blogs';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
          Technical Writing & Field Notes
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#183A2D] mt-2">
          Notes & <span className="font-serif-accent font-normal text-[#214D3B]">articles</span>
        </h1>
        <p className="text-base sm:text-lg text-[#66736C] mt-4 leading-relaxed">
          {BLOG_SECTION_DATA.introMessage}
        </p>
      </div>

      {/* 3 Placeholder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_SECTION_DATA.placeholderCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-[#EDF5EF] border border-[#214D3B]/20 text-[#214D3B] font-mono text-[11px] font-medium">
                  {card.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F8F6F1] border border-[#E6E2DA] text-[10px] font-mono text-[#214D3B] font-semibold">
                  {card.status}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-[#183A2D]">
                {card.title}
              </h3>

              <p className="text-xs text-[#66736C] mt-3 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
