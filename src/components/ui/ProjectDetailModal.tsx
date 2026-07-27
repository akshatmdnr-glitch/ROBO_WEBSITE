'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, HardDrive, Activity, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { Project } from '@/data/projects';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1E1E1E]/40 backdrop-blur-xs"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-4xl bg-[#FFFBF7] border border-[#E8DED3] rounded-2xl shadow-lg overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-6 border-b border-[#E8DED3] flex items-start justify-between bg-[#FAF7F2]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-[#F8EAE3] border border-[#E8DED3] text-[#BC7A61] font-mono text-xs font-medium">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#FFFBF7] border border-[#E8DED3] text-[#666666] font-mono text-xs font-medium">
                  {project.status}
                </span>
                <span className="text-xs font-mono text-[#666666]">{project.date}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1E1E1E]">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#FFFBF7] border border-[#E8DED3] text-[#666666] hover:text-[#1E1E1E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-grow">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono font-semibold text-[#BC7A61] uppercase tracking-wider mb-2">
                Project Overview
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Performance Metrics */}
            {project.metrics && (
              <div>
                <h3 className="text-xs font-mono font-semibold text-[#BC7A61] uppercase tracking-wider mb-3">
                  Verified Performance Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DED3] flex flex-col justify-center"
                    >
                      <span className="text-[11px] font-mono text-[#666666]">{metric.label}</span>
                      <span className="text-lg font-heading font-bold text-[#1E1E1E]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-mono font-semibold text-[#BC7A61] uppercase tracking-wider mb-3">
                Key Engineering Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#1E1E1E]">
                    <CheckCircle2 className="w-4 h-4 text-[#BC7A61] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Overview */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DED3]">
              <h3 className="text-xs font-mono font-semibold text-[#BC7A61] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#BC7A61]" />
                Data & Control Pipeline Architecture
              </h3>
              <p className="font-mono text-xs text-[#1E1E1E] bg-[#FFFBF7] p-3 rounded-lg border border-[#E8DED3]">
                {project.architectureOverview}
              </p>
            </div>

            {/* Hardware & Software Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.hardware && (
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DED3]">
                  <h4 className="text-xs font-mono font-semibold text-[#1E1E1E] mb-2 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#BC7A61]" />
                    Hardware Specs
                  </h4>
                  <ul className="space-y-1 text-xs font-mono text-[#666666]">
                    {project.hardware.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DED3]">
                <h4 className="text-xs font-mono font-semibold text-[#1E1E1E] mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#BC7A61]" />
                  Software & Libraries
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.software.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-[#FFFBF7] border border-[#E8DED3] text-[11px] font-mono text-[#666666]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-[#E8DED3] bg-[#FAF7F2] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#BC7A61] hover:bg-[#A96B54] text-[#FFFBF7] text-xs font-medium flex items-center gap-2 shadow-xs transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#FFFBF7]" />
                <span>View Source Code</span>
              </a>
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono text-[#666666] hover:text-[#1E1E1E] transition-colors"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
