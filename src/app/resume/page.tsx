'use client';

import React from 'react';
import { Download, Mail, MapPin, Award, CheckCircle2, GraduationCap, Briefcase, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { RESUME_DATA } from '@/data/resume';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Bar Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E6E2DA]">
        <div>
          <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#183A2D] mt-1">
            Akshat Mishra — <span className="font-serif-accent font-normal text-[#214D3B]">curriculum vitae</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] text-xs font-medium flex items-center gap-2 shadow-xs transition-all hover:scale-[1.01]"
          >
            <Download className="w-4 h-4" />
            <span>Download / Print PDF</span>
          </button>
        </div>
      </div>

      {/* Main Resume Paper Card */}
      <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 sm:p-10 shadow-xs space-y-10">
        {/* Header Summary */}
        <div className="border-b border-[#E6E2DA] pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#183A2D]">
                {RESUME_DATA.header.name}
              </h2>
              <p className="text-sm font-mono text-[#214D3B] mt-1 font-semibold">
                {RESUME_DATA.header.title}
              </p>
            </div>
            <div className="space-y-1 text-xs font-mono text-[#66736C]">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#214D3B]" />
                <span>{RESUME_DATA.header.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#214D3B]" />
                <span>{RESUME_DATA.header.location}</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#66736C] mt-6 leading-relaxed">
            {RESUME_DATA.summary}
          </p>
        </div>

        {/* Technical Skill Matrix */}
        <div>
          <h3 className="text-xs font-mono font-bold text-[#214D3B] uppercase tracking-wider mb-6 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Technical Expertise & Skill Proficiency
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {RESUME_DATA.skillCategories.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA]">
                <h4 className="text-xs font-mono font-bold text-[#183A2D] mb-3">{cat.category}</h4>
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between text-[11px] font-mono mb-1">
                        <span className="text-[#66736C]">{skill.name}</span>
                        <span className="text-[#214D3B]">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 rounded-full bg-[#FCFBF8] border border-[#E6E2DA]">
                        <div
                          className="h-full rounded-full bg-[#214D3B]"
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

        {/* Experience Timeline */}
        <div>
          <h3 className="text-xs font-mono font-bold text-[#214D3B] uppercase tracking-wider mb-6 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Research & Engineering Experience
          </h3>
          <div className="space-y-6">
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="font-heading font-bold text-[#183A2D] text-base">{exp.role}</h4>
                  <span className="text-xs font-mono text-[#214D3B]">{exp.period}</span>
                </div>
                <div className="text-xs font-mono text-[#66736C] mb-3">
                  {exp.organization} • {exp.location}
                </div>
                <ul className="space-y-2 text-xs text-[#66736C] mb-4">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#214D3B] font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#FCFBF8] border border-[#E6E2DA] text-[10px] font-mono text-[#214D3B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xs font-mono font-bold text-[#214D3B] uppercase tracking-wider mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Education & Academic Performance
          </h3>
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h4 className="font-heading font-bold text-[#183A2D] text-base">{edu.degree}</h4>
                <span className="text-xs font-mono text-[#214D3B]">{edu.period}</span>
              </div>
              <div className="text-xs font-mono text-[#66736C] mb-2">
                {edu.institution} • {edu.gpa}
              </div>
              <p className="text-xs text-emerald-800 font-mono mb-3">Honors: {edu.honors}</p>
              <div className="flex flex-wrap gap-1.5">
                {edu.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2 py-0.5 rounded bg-[#FCFBF8] border border-[#E6E2DA] text-[10px] font-mono text-[#66736C]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xs font-mono font-bold text-[#214D3B] uppercase tracking-wider mb-4 flex items-center gap-2">
            <Award className="w-4 h-4" />
            Specializations & Certifications
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#66736C] font-mono">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <li key={idx} className="p-3 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#214D3B] shrink-0" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
