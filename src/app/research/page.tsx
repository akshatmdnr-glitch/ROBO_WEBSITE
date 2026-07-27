'use client';

import React from 'react';
import { Compass, GraduationCap, Sparkles, BookOpen, FileText } from 'lucide-react';
import { RESEARCH_JOURNEY_DATA, MASTERS_ASPIRATIONS } from '@/data/research';

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
          Academic Exploration
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#183A2D] mt-2">
          {RESEARCH_JOURNEY_DATA.sectionTitle}
        </h1>
        <p className="text-sm font-mono text-[#214D3B] mt-4 font-semibold">
          {RESEARCH_JOURNEY_DATA.statusMessage}
        </p>
      </div>

      {/* Preparation Statement */}
      <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-8 mb-16 shadow-xs relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex items-center justify-center text-[#214D3B]">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-[#183A2D]">Graduate Research Preparation</h2>
            <p className="text-xs font-mono text-[#214D3B]">Akshat Mishra // Robotics Research Lab</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-[#66736C] leading-relaxed mb-6">
          {RESEARCH_JOURNEY_DATA.subHeading}
        </p>

        {/* Focus Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESEARCH_JOURNEY_DATA.focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] flex flex-col justify-between"
            >
              <h3 className="font-heading font-bold text-[#183A2D] text-sm mb-1">
                • {area.title}
              </h3>
              <p className="text-xs text-[#66736C] leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Placeholder Cards */}
      <div className="mb-16">
        <div className="mb-8">
          <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
            Future Research Outputs
          </span>
          <h2 className="text-3xl font-heading font-bold text-[#183A2D] mt-1">
            Research <span className="font-serif-accent font-normal text-[#214D3B]">portfolio</span> Cards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESEARCH_JOURNEY_DATA.placeholderCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <FileText className="w-5 h-5 text-[#214D3B]" />
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EDF5EF] border border-[#214D3B]/20 text-[10px] font-mono text-[#214D3B] font-medium">
                    {card.status}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[#183A2D] text-base mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-[#66736C] leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Master's Program Goals */}
      <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex items-center justify-center text-[#214D3B]">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-[#183A2D]">Target Academic Graduate Programs</h2>
            <p className="text-xs font-mono text-[#66736C]">{MASTERS_ASPIRATIONS.targetDegree} ({MASTERS_ASPIRATIONS.targetTimeline})</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {MASTERS_ASPIRATIONS.preferredLabs.map((lab, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA]">
              <span className="text-[#183A2D] font-bold text-xs block">{lab.school}</span>
              <span className="text-[11px] font-mono text-[#214D3B] mt-1 block">{lab.lab}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
