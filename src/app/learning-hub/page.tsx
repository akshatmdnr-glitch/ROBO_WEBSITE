'use client';

import React from 'react';
import { Layers, Clock } from 'lucide-react';

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
        <span className="text-xs font-mono text-[#6E6E6E] uppercase tracking-wider font-medium">
          Open Knowledge Base
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#171717] mt-2">
          Resources <span className="font-serif-accent font-normal text-[#8A5A44]">hub</span>
        </h1>
      </div>

      {/* Main Container */}
      <div className="bg-[#FFFFFF] border border-[#E8E2D8] rounded-2xl p-8 sm:p-12 shadow-xs text-center relative overflow-hidden">
        <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#8A5A44] mx-auto mb-6 shadow-xs">
          <Layers className="w-6 h-6" />
        </div>

        <h2 className="text-2xl font-heading font-bold text-[#171717] mb-3">
          This section is currently under development.
        </h2>

        <p className="text-sm font-mono text-[#6E6E6E] mb-6 font-medium">
          Soon it will contain:
        </p>

        {/* List of upcoming topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left mb-8 font-mono text-xs text-[#6E6E6E]">
          {upcomingTopics.map((topic, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center gap-2">
              <span className="text-[#8A5A44] font-bold">•</span>
              <span className="text-[#171717]">{topic}</span>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5ECE7] border border-[#E8E2D8] text-xs font-mono text-[#8A5A44] font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Stay tuned.</span>
        </div>
      </div>
    </div>
  );
}
