'use client';

import React, { useState } from 'react';
import { BookOpen, ExternalLink, Cpu, Zap, HardDrive, Filter, Search } from 'lucide-react';
import { RESOURCES, ResourceItem } from '@/data/resources';

const CATEGORIES = ['All', 'Electronics Tutorial', 'ROS2 Guide', 'Recommended Book', 'Open Source Repo', 'Hardware Guide'] as const;

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredResources = RESOURCES.filter((res) => {
    return selectedCategory === 'All' || res.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold">
          Curated Knowledge Base
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          Robotics Learning Resources & Cheatsheets
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
          Electronics hardware selection guides, IMU calibration tutorials, recommended textbooks, and top open-source ROS2 repositories.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-[#1E293B]">
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((item) => (
          <div
            key={item.id}
            className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 flex flex-col justify-between hover:border-[#00E5FF]/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded bg-[#06B6D4]/10 text-[#00E5FF] font-mono text-[11px]">
                  {item.category}
                </span>
                {item.level && (
                  <span className="text-[11px] font-mono text-[#94A3B8]">{item.level}</span>
                )}
              </div>

              <h3 className="text-lg font-heading font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#0B1120] border border-[#1E293B] text-[10px] font-mono text-[#94A3B8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
              <span>{item.authorOrSource || 'Lab Resource'}</span>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E5FF] hover:underline flex items-center gap-1 font-semibold"
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
