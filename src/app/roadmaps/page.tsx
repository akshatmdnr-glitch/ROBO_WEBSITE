'use client';

import React, { useState } from 'react';
import { Zap, Cpu, Compass, GraduationCap, Clock, ArrowRight, X } from 'lucide-react';

export default function RoadmapsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const categories = [
    {
      id: 'electronics',
      title: 'Electronics',
      icon: Zap,
      status: 'Coming Soon',
      subtitle: 'Visual learning flowcharts covering:',
      topics: [
        'Circuit Fundamentals',
        'Components',
        'Sensors',
        'Motor Drivers',
        'Embedded Electronics',
        'PCB Design',
        'Robotics Electronics',
      ],
    },
    {
      id: 'software-robotics',
      title: 'Software & Robotics',
      icon: Cpu,
      status: 'Coming Soon',
      subtitle: 'Learning flowcharts covering:',
      topics: [
        'Linux',
        'Git',
        'C++',
        'Python',
        'ROS2',
        'Navigation2',
        'MoveIt2',
        'Computer Vision',
        'SLAM',
        'Robot Learning',
      ],
    },
    {
      id: 'mathematics',
      title: 'Mathematics',
      icon: Compass,
      status: 'Coming Soon',
      subtitle: 'Learning paths covering:',
      topics: [
        'Linear Algebra',
        'Calculus',
        'Probability',
        'Statistics',
        'Optimization',
        'Control Theory',
      ],
    },
    {
      id: 'research',
      title: 'Research',
      icon: GraduationCap,
      status: 'Coming Soon',
      subtitle: 'Learning roadmap covering:',
      topics: [
        'Reading Research Papers',
        'Literature Reviews',
        'Scientific Writing',
        'Publications',
        'Conferences',
        'Master\'s Preparation',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 min-h-[80vh]">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-[#BC7A61] uppercase tracking-wider font-medium">
            Learning Paths
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#F8EAE3] border border-[#E8DED3] text-[10px] font-mono text-[#BC7A61] font-semibold flex items-center gap-1">
            <span>🚧</span>
            <span>Under Development</span>
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#1E1E1E]">
          Roadmaps
        </h1>

        <p className="text-base sm:text-lg text-[#666666] mt-3 leading-relaxed">
          Structured learning paths documenting my journey through Robotics, Electronics, Software Engineering, Mathematics, and Research.
        </p>
      </div>

      {/* Introduction Container */}
      <div className="bg-[#FFFBF7] border border-[#E8DED3] rounded-2xl p-6 sm:p-8 mb-12 shadow-xs space-y-2">
        <h2 className="text-lg font-heading font-bold text-[#1E1E1E]">
          This section is currently under development.
        </h2>
        <p className="text-sm text-[#666666] leading-relaxed">
          Soon it will contain interactive learning roadmaps, visual flowcharts, study plans, and structured guides covering the complete robotics learning journey.
        </p>
      </div>

      {/* 4 Premium Roadmap Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          return (
            <div
              key={cat.id}
              className="bg-[#FFFBF7] border border-[#E8DED3] rounded-2xl p-6 sm:p-8 flex flex-col justify-between glass-panel-hover group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DED3] flex items-center justify-center text-[#BC7A61]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F8EAE3] border border-[#E8DED3] text-[10px] font-mono text-[#BC7A61] font-semibold">
                    {cat.status}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#1E1E1E] group-hover:text-[#BC7A61] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs font-mono text-[#666666] mt-2 mb-4">
                  {cat.subtitle}
                </p>

                {/* Subtopic Bullet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {cat.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#1E1E1E]">
                      <span className="text-[#BC7A61] font-bold">•</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DED3] flex items-center justify-between">
                <button
                  onClick={() => setActiveModal(cat.title)}
                  className="text-xs font-medium text-[#BC7A61] hover:underline flex items-center gap-1"
                >
                  <span>View Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#1E1E1E]/40 backdrop-blur-xs"
            onClick={() => setActiveModal(null)}
          />
          <div className="relative w-full max-w-md bg-[#FFFBF7] border border-[#E8DED3] rounded-2xl p-6 shadow-xl z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8DED3]">
              <div>
                <span className="text-[10px] font-mono text-[#BC7A61] uppercase tracking-wider block">
                  Coming Soon
                </span>
                <h3 className="font-heading font-bold text-[#1E1E1E] text-lg">
                  {activeModal}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg bg-[#FAF7F2] border border-[#E8DED3] text-[#666666] hover:text-[#1E1E1E]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DED3] text-center space-y-2">
              <Clock className="w-5 h-5 text-[#BC7A61] mx-auto" />
              <p className="text-xs font-mono font-semibold text-[#1E1E1E]">
                This roadmap is currently under development.
              </p>
              <p className="text-[11px] text-[#666666]">
                Full visual flowcharts, topic breakdowns, and study guides will be published soon.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
