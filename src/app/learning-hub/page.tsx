'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckSquare, Square, Copy, Check, Terminal, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { ROADMAPS, SKILL_CHECKLIST, ROS2_CHEAT_SHEET } from '@/data/learning';

export default function LearningHubPage() {
  const [checkedSkills, setCheckedSkills] = useState<Record<string, boolean>>({});
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('akshat_robotics_skills');
    if (saved) {
      try {
        setCheckedSkills(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const toggleSkill = (id: string) => {
    const updated = { ...checkedSkills, [id]: !checkedSkills[id] };
    setCheckedSkills(updated);
    localStorage.setItem('akshat_robotics_skills', JSON.stringify(updated));
  };

  const totalSkills = SKILL_CHECKLIST.length;
  const completedCount = Object.values(checkedSkills).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalSkills) * 100);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
          Open Robotics Education
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#183A2D] mt-2">
          Robotics <span className="font-serif-accent font-normal text-[#214D3B]">learning</span> Hub & Roadmaps
        </h1>
        <p className="text-base sm:text-lg text-[#66736C] mt-4 leading-relaxed">
          Free, structured learning resources for students and engineers. Explore step-by-step roadmaps, track your core technical skills, and master ROS2 commands.
        </p>
      </div>

      {/* Interactive Progress Bar Banner */}
      <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 sm:p-8 mb-16 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-[#183A2D] flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-[#214D3B]" />
              Your Personal Robotics Skill Tracker
            </h2>
            <p className="text-xs text-[#66736C] mt-1 font-mono">
              Check off topics as you master them below. Progress is saved locally in your browser!
            </p>
          </div>
          <div className="flex items-center gap-3 self-end sm:self-center">
            <span className="text-2xl font-heading font-bold text-[#214D3B]">{progressPercent}%</span>
            <span className="text-xs font-mono text-[#66736C]">({completedCount}/{totalSkills} Skills)</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-[#F8F6F1] overflow-hidden border border-[#E6E2DA]">
          <motion.div
            className="h-full bg-[#214D3B]"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Roadmaps Section */}
      <div className="mb-20">
        <div className="flex items-center gap-2 text-xs font-mono text-[#214D3B] uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" />
          <span>Learning Pathways</span>
        </div>
        <h2 className="text-3xl font-heading font-bold text-[#183A2D] mb-8">
          Structured Robotics Roadmaps
        </h2>

        <div className="space-y-12">
          {ROADMAPS.map((roadmap) => (
            <div
              key={roadmap.id}
              className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#E6E2DA]">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#EDF5EF] text-[#214D3B] font-mono text-xs font-medium mr-3">
                    {roadmap.level}
                  </span>
                  <span className="text-xs font-mono text-[#66736C]">Est. {roadmap.estimatedMonths}</span>
                  <h3 className="text-2xl font-heading font-bold text-[#183A2D] mt-2">{roadmap.title}</h3>
                </div>
              </div>

              <p className="text-sm text-[#66736C] mb-8 leading-relaxed">{roadmap.description}</p>

              {/* Step Flow */}
              <div className="space-y-4">
                {roadmap.steps.map((step, idx) => (
                  <div
                    key={step.id}
                    className="p-5 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#FCFBF8] border border-[#E6E2DA] flex items-center justify-center text-[#214D3B] font-mono text-xs font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[#183A2D] text-base">{step.title}</h4>
                        <p className="text-xs text-[#66736C] mt-1">{step.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {step.keyTopics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-[#FCFBF8] border border-[#E6E2DA] text-[10px] font-mono text-[#214D3B]"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-[#214D3B] shrink-0 self-end md:self-center font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Skill Checklist */}
      <div className="mb-20">
        <h2 className="text-3xl font-heading font-bold text-[#183A2D] mb-2">
          Robotics Core Competency Checklist
        </h2>
        <p className="text-sm text-[#66736C] mb-8">
          Click any skill below to mark it off on your checklist.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_CHECKLIST.map((item) => {
            const isChecked = !!checkedSkills[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleSkill(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                  isChecked
                    ? 'bg-[#EDF5EF] border-emerald-600/40 text-[#183A2D]'
                    : 'bg-[#FCFBF8] border-[#E6E2DA] text-[#66736C] hover:border-[#214D3B]/30'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-700" />
                  ) : (
                    <Square className="w-5 h-5 text-[#66736C]" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${isChecked ? 'line-through text-[#66736C]' : 'text-[#183A2D]'}`}>
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8F6F1] text-[#214D3B] font-medium">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#66736C] mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ROS2 Command Cheatsheet */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#214D3B] uppercase tracking-wider mb-2">
          <Terminal className="w-4 h-4" />
          <span>Quick Reference</span>
        </div>
        <h2 className="text-3xl font-heading font-bold text-[#183A2D] mb-6">
          ROS2 CLI Command Cheatsheet
        </h2>

        <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 space-y-3">
          {ROS2_CHEAT_SHEET.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs"
            >
              <div className="space-y-1">
                <span className="text-[#214D3B] font-semibold block">{item.command}</span>
                <span className="text-[11px] text-[#66736C]">{item.description}</span>
              </div>
              <button
                onClick={() => copyCommand(item.command)}
                className="px-3 py-1.5 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] hover:bg-[#EDF5EF] text-[#66736C] hover:text-[#183A2D] flex items-center gap-1.5 self-end sm:self-center transition-all"
              >
                {copiedCmd === item.command ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-emerald-700 text-[11px] font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
