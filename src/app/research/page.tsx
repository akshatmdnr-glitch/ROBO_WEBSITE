'use client';

import React from 'react';
import { Compass, GraduationCap, FileText } from 'lucide-react';
import { MASTERS_ASPIRATIONS } from '@/data/research';

export default function ResearchPage() {
  const placeholderCards = [
    {
      title: 'Research Paper #1',
      status: 'Writing',
      expected: 'Coming Soon',
      description: 'First manuscript investigating 2D LiDAR Cartographer SLAM tuning and ROS2 Nav2 costmap optimization for physical AMRs.',
    },
    {
      title: 'Research Paper #2',
      status: 'Planned',
      expected: 'In Progress',
      description: 'Exploration of embedded micro-ROS task prioritization and high-frequency motor control telemetries.',
    },
    {
      title: 'Research Notes',
      status: 'Ongoing',
      expected: 'Coming Soon',
      description: 'Mathematical derivations, factor graph state estimation notes, and spatial perception field benchmarks.',
    },
    {
      title: 'Conference Publications',
      status: 'Targeted',
      expected: 'Coming Soon',
      description: 'Submissions targeting future IEEE robotics conferences and workshop presentations.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#6B7280] uppercase tracking-wider font-medium">
          Academic Exploration
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#111827] mt-2">
          Research <span className="font-serif-accent font-normal text-[#4B5563]">journey</span>
        </h1>
      </div>

      {/* Research Statement */}
      <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-8 mb-12 shadow-xs relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E5E7EB] flex items-center justify-center">
            <Compass className="w-4 h-4 text-[#4B5563]" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-[#111827]">Research Papers</h2>
            <p className="text-xs font-mono text-[#6B7280]">Akshat Mishra • Robotics Engineer</p>
          </div>
        </div>

        <div className="space-y-3 text-base text-[#6B7280] leading-relaxed max-w-3xl">
          <p className="font-semibold text-[#111827]">
            I am currently working toward my first research publication.
          </p>
          <p className="text-sm">
            My current robotics projects are being developed with the goal of publishing research in the near future.
          </p>
        </div>
      </div>

      {/* 4 Placeholder Cards */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold text-[#111827] mb-6">
          Research Status & Active Development
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholderCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <FileText className="w-4 h-4 text-[#4B5563]" />
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-[10px] font-mono text-[#4B5563] font-semibold">
                    {card.status}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[#111827] text-base mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mt-2">{card.description}</p>
              </div>

              <div className="pt-3 border-t border-[#E5E7EB] text-[11px] font-mono text-[#6B7280]">
                Expected: {card.expected}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Master's Program Focus */}
      <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E5E7EB] flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-[#4B5563]" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-[#111827]">Graduate Program Preparation</h2>
            <p className="text-xs font-mono text-[#6B7280]">{MASTERS_ASPIRATIONS.targetDegree} ({MASTERS_ASPIRATIONS.targetTimeline})</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {MASTERS_ASPIRATIONS.preferredLabs.map((lab, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E7EB]">
              <span className="text-[#111827] font-bold text-xs block">{lab.school}</span>
              <span className="text-[11px] font-mono text-[#4B5563] mt-1 block">{lab.lab}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
