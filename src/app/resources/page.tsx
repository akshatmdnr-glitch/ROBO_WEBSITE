'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { RESOURCES } from '@/data/resources';

const CATEGORIES = ['All', 'Electronics Tutorial', 'ROS2 Guide', 'Recommended Book', 'Open Source Repo', 'Hardware Guide'] as const;

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredResources = RESOURCES.filter((res) => {
    return selectedCategory === 'All' || res.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#6B7280] uppercase tracking-wider font-medium">
          Curated Knowledge Base
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#111827] mt-2">
          Robotics <span className="font-serif-accent font-normal text-[#4B5563]">resources</span> & Cheatsheets
        </h1>
        <p className="text-base sm:text-lg text-[#6B7280] mt-4 leading-relaxed">
          Electronics hardware selection guides, IMU calibration tutorials, recommended textbooks, and open-source ROS2 repositories.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-[#E5E7EB]">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              selectedCategory === cat
                ? 'bg-[#4B5563] text-[#FFFFFF] font-semibold shadow-xs'
                : 'bg-[#FFFFFF] text-[#6B7280] hover:text-[#111827] border border-[#E5E7EB] hover:bg-[#F3F4F6]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#D1D5DB] rounded-2xl p-6 flex flex-col justify-between transition-all shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E5E7EB] text-[#111827] font-mono text-[11px] font-medium">
                  {item.category}
                </span>
                {item.level && (
                  <span className="text-[11px] font-mono text-[#6B7280]">{item.level}</span>
                )}
              </div>

              <h3 className="text-lg font-heading font-bold text-[#111827] mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-[#6B7280] leading-relaxed mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E5E7EB] text-[10px] font-mono text-[#6B7280]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#6B7280]">
              <span>{item.authorOrSource || 'Personal Resource'}</span>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4B5563] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open Resource</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
