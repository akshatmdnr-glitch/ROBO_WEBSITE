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
        <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold">
          Open Robotics Education
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          Robotics Learning Hub & Roadmaps
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
          Free, structured learning resources for students and engineers. Explore step-by-step roadmaps, track your core technical skills, and master ROS2 commands.
        </p>
      </div>

      {/* Interactive Progress Bar Banner */}
      <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 mb-16 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-[#00E5FF]" />
              Your Personal Robotics Skill Tracker
            </h2>
            <p className="text-xs text-[#94A3B8] mt-1 font-mono">
              Check off topics as you master them below. Progress is saved locally in your browser!
            </p>
          </div>
          <div className="flex items-center gap-3 self-end sm:self-center">
            <span className="text-2xl font-heading font-extrabold text-[#00E5FF]">{progressPercent}%</span>
            <span className="text-xs font-mono text-[#94A3B8]">({completedCount}/{totalSkills} Skills)</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 rounded-full bg-[#0B1120] overflow-hidden border border-[#1E293B]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#00E5FF]"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Roadmaps Section */}
      <div className="mb-20">
        <div className="flex items-center gap-2 text-xs font-mono text-[#06B6D4] uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" />
          <span>Learning Pathways</span>
        </div>
        <h2 className="text-3xl font-heading font-bold text-white mb-8">
          Structured Robotics Roadmaps
        </h2>

        <div className="space-y-12">
          {ROADMAPS.map((roadmap) => (
            <div
              key={roadmap.id}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#1E293B]">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#2563EB]/20 text-[#00E5FF] font-mono text-xs mr-3">
                    {roadmap.level}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">Est. {roadmap.estimatedMonths}</span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-2">{roadmap.title}</h3>
                </div>
              </div>

              <p className="text-sm text-[#94A3B8] mb-8 leading-relaxed">{roadmap.description}</p>

              {/* Step Flow */}
              <div className="space-y-6">
                {roadmap.steps.map((step, idx) => (
                  <div
                    key={step.id}
                    className="p-5 rounded-xl bg-[#0B1120] border border-[#1E293B] flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#111827] border border-[#06B6D4]/40 flex items-center justify-center text-[#00E5FF] font-mono text-xs font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-white text-base">{step.title}</h4>
                        <p className="text-xs text-[#94A3B8] mt-1">{step.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {step.keyTopics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-[#111827] border border-[#1E293B] text-[10px] font-mono text-[#00E5FF]"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-[#06B6D4] shrink-0 self-end md:self-center">
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
        <h2 className="text-3xl font-heading font-bold text-white mb-2">
          Robotics Core Competency Checklist
        </h2>
        <p className="text-sm text-[#94A3B8] mb-8">
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
                    ? 'bg-[#0B1120] border-emerald-500/40 text-white shadow-md'
                    : 'bg-[#111827] border-[#1E293B] text-[#94A3B8] hover:border-[#06B6D4]/40'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Square className="w-5 h-5 text-[#94A3B8]" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${isChecked ? 'line-through text-[#94A3B8]' : 'text-white'}`}>
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B1120] text-[#06B6D4]">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ROS2 Command Cheatsheet */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] uppercase tracking-wider mb-2">
          <Terminal className="w-4 h-4" />
          <span>Quick Reference</span>
        </div>
        <h2 className="text-3xl font-heading font-bold text-white mb-6">
          ROS2 CLI Command Cheatsheet
        </h2>

        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 space-y-3">
          {ROS2_CHEAT_SHEET.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#0B1120] border border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs"
            >
              <div className="space-y-1">
                <span className="text-[#00E5FF] font-semibold block">{item.command}</span>
                <span className="text-[11px] text-[#94A3B8]">{item.description}</span>
              </div>
              <button
                onClick={() => copyCommand(item.command)}
                className="px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1E293B] hover:border-[#00E5FF]/40 text-[#94A3B8] hover:text-white flex items-center gap-1.5 self-end sm:self-center transition-all"
              >
                {copiedCmd === item.command ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[11px]">Copied</span>
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
