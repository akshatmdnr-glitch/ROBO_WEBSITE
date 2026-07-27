'use client';

import React from 'react';
import { Download, Mail, MapPin, FileText } from 'lucide-react';
import { RESUME_DATA } from '@/data/resume';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Top Bar Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E8DED3]">
        <div>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-wider font-medium">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#1E1E1E] mt-1">
            Akshat Mishra — <span className="font-serif-accent font-normal text-[#BC7A61]">curriculum vitae</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-lg bg-[#BC7A61] hover:bg-[#A96B54] text-[#FFFBF7] text-xs font-medium flex items-center gap-2 shadow-xs transition-all hover:scale-[1.01]"
          >
            <Download className="w-4 h-4" />
            <span>Download / Print PDF</span>
          </button>
        </div>
      </div>

      {/* Main Resume Paper Card */}
      <div className="bg-[#FFFBF7] border border-[#E8DED3] rounded-2xl p-6 sm:p-10 shadow-xs space-y-10">
        {/* Header Summary */}
        <div className="border-b border-[#E8DED3] pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E1E1E]">
                {RESUME_DATA.header.name}
              </h2>
              <p className="text-sm font-mono text-[#BC7A61] mt-1 font-semibold">
                {RESUME_DATA.header.title}
              </p>
            </div>
            <div className="space-y-1 text-xs font-mono text-[#666666]">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#BC7A61]" />
                <span>{RESUME_DATA.header.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#BC7A61]" />
                <span>{RESUME_DATA.header.location}</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#666666] mt-6 leading-relaxed">
            {RESUME_DATA.summary}
          </p>
        </div>

        {/* Technical Skill Matrix */}
        <div>
          <h3 className="text-xs font-mono font-bold text-[#BC7A61] uppercase tracking-wider mb-6 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Technical Expertise & Skill Proficiency
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {RESUME_DATA.skillCategories.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DED3]">
                <h4 className="text-xs font-mono font-bold text-[#1E1E1E] mb-3">{cat.category}</h4>
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between text-[11px] font-mono mb-1">
                        <span className="text-[#666666]">{skill.name}</span>
                        <span className="text-[#BC7A61]">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 rounded-full bg-[#FFFBF7] border border-[#E8DED3]">
                        <div
                          className="h-full rounded-full bg-[#BC7A61]"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
