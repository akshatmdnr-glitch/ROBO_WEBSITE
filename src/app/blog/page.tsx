'use client';

import React from 'react';
import { FileText, Clock, Sparkles } from 'lucide-react';

export default function NotesPage() {
  const futureTopics = [
    'Project Write-ups',
    'Engineering Notes',
    'ROS2 Tutorials',
    'Research Notes',
    'Development Logs',
  ];

  const comingSoonCards = [
    {
      title: 'Project Write-ups & Hardware Logs',
      category: 'Systems & Hardware',
      status: 'Coming Soon',
      desc: 'Step-by-step documentation on physical AMR chassis assembly, CAN bus wiring, motor driver torque control, and LiDAR sensor integration.',
    },
    {
      title: 'ROS2 & Algorithm Notebook',
      category: 'Software & Math',
      status: 'Coming Soon',
      desc: 'Technical notes on ROS2 C++ lifecycle nodes, Cartographer 2D SLAM parameters, TEB local planner tuning, and TF2 coordinate frames.',
    },
    {
      title: 'Graduate Research Preparation',
      category: 'Academic Journal',
      status: 'Coming Soon',
      desc: 'Summaries of fundamental 3D SLAM papers, Extended Kalman Filter derivations, and upcoming research draft progress updates.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 min-h-[75vh]">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#6C8FEF] uppercase tracking-wider font-medium">
          Personal Engineering Notebook
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#1E293B] mt-2">
          Technical <span className="font-serif-accent font-normal text-[#6C8FEF]">notes</span>
        </h1>
        <p className="text-sm font-mono text-[#6C8FEF] mt-4 font-semibold">
          This section is currently under development.
        </p>
      </div>

      {/* Future Content Notice */}
      <div className="bg-[#FCFBF8] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 mb-12 shadow-xs">
        <h2 className="text-lg font-heading font-bold text-[#1E293B] mb-3">
          Future content will include:
        </h2>
        <div className="flex flex-wrap gap-2 font-mono text-xs text-[#52607B]">
          {futureTopics.map((topic, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-[#F8F6F1] border border-[#E2E8F0] text-[#1E293B] font-medium"
            >
              • {topic}
            </span>
          ))}
        </div>
      </div>

      {/* 3 Elegant Coming Soon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {comingSoonCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#FCFBF8] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-[#EAF2FF] border border-[#6C8FEF]/30 text-[#6C8FEF] font-mono text-[11px] font-medium">
                  {card.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F8F6F1] border border-[#E2E8F0] text-[10px] font-mono text-[#6C8FEF] font-semibold">
                  {card.status}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-[#1E293B]">
                {card.title}
              </h3>

              <p className="text-xs text-[#52607B] mt-3 leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#6C8FEF]">
              <span>Notebook Entry #{idx + 1}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Coming Soon
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
