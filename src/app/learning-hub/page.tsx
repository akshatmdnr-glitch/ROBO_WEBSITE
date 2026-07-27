'use client';

import React from 'react';
import { Layers, Sparkles, BookOpen, Clock } from 'lucide-react';

export default function ResourcesHubPage() {
  const upcomingTopics = [
    'Robotics Roadmaps',
    'Electronics Notes',
    'ROS2 Tutorials',
    'Linux Notes',
    'Computer Vision',
    'Embedded Systems',
    'Research Preparation',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 min-h-[75vh] flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-mono text-[#6C8FEF] uppercase tracking-wider font-medium">
          Open Knowledge Base
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#1E293B] mt-2">
          Resources <span className="font-serif-accent font-normal text-[#6C8FEF]">hub</span>
        </h1>
      </div>

      {/* Main Coming Soon Container */}
      <div className="bg-[#FCFBF8] border border-[#E2E8F0] rounded-2xl p-8 sm:p-12 shadow-xs text-center relative overflow-hidden">
        <div className="w-14 h-14 rounded-2xl bg-[#EAF2FF] border border-[#6C8FEF]/30 flex items-center justify-center text-[#6C8FEF] mx-auto mb-6 shadow-xs">
          <Layers className="w-7 h-7" />
        </div>

        <h2 className="text-2xl font-heading font-bold text-[#1E293B] mb-3">
          This section is currently under development.
        </h2>

        <p className="text-sm font-mono text-[#6C8FEF] mb-6 font-medium">
          Soon it will contain:
        </p>

        {/* List of upcoming topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left mb-8 font-mono text-xs text-[#52607B]">
          {upcomingTopics.map((topic, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#F8F6F1] border border-[#E2E8F0] flex items-center gap-2">
              <span className="text-[#6C8FEF] font-bold">•</span>
              <span>{topic}</span>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF2FF] border border-[#6C8FEF]/30 text-xs font-mono text-[#6C8FEF] font-semibold">
          <Clock className="w-4 h-4" />
          <span>Stay tuned.</span>
        </div>
      </div>
    </div>
  );
}
