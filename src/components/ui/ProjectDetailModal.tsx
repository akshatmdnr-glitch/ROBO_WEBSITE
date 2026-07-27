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
          className="fixed inset-0 bg-[#171717]/40 backdrop-blur-xs"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-4xl bg-[#FFFFFF] border border-[#E8E2D8] rounded-2xl shadow-lg overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-6 border-b border-[#E8E2D8] flex items-start justify-between bg-[#FAF8F5]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-[#F5ECE7] border border-[#E8E2D8] text-[#8A5A44] font-mono text-xs font-medium">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#E8E2D8] text-[#6E6E6E] font-mono text-xs font-medium">
                  {project.status}
                </span>
                <span className="text-xs font-mono text-[#6E6E6E]">{project.date}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#171717]">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E8E2D8] text-[#6E6E6E] hover:text-[#171717] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-grow">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono font-semibold text-[#8A5A44] uppercase tracking-wider mb-2">
                Project Overview
              </h3>
              <p className="text-sm text-[#6E6E6E] leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Performance Metrics */}
            {project.metrics && (
              <div>
                <h3 className="text-xs font-mono font-semibold text-[#8A5A44] uppercase tracking-wider mb-3">
                  Verified Performance Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] flex flex-col justify-center"
                    >
                      <span className="text-[11px] font-mono text-[#6E6E6E]">{metric.label}</span>
                      <span className="text-lg font-heading font-bold text-[#171717]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-mono font-semibold text-[#8A5A44] uppercase tracking-wider mb-3">
                Key Engineering Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#8A5A44] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Overview */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
              <h3 className="text-xs font-mono font-semibold text-[#8A5A44] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#8A5A44]" />
                Data & Control Pipeline Architecture
              </h3>
              <p className="font-mono text-xs text-[#171717] bg-[#FFFFFF] p-3 rounded-lg border border-[#E8E2D8]">
                {project.architectureOverview}
              </p>
            </div>

            {/* Hardware & Software Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.hardware && (
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                  <h4 className="text-xs font-mono font-semibold text-[#171717] mb-2 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#8A5A44]" />
                    Hardware Specs
                  </h4>
                  <ul className="space-y-1 text-xs font-mono text-[#6E6E6E]">
                    {project.hardware.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h4 className="text-xs font-mono font-semibold text-[#171717] mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#8A5A44]" />
                  Software & Libraries
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.software.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-[#FFFFFF] border border-[#E8E2D8] text-[11px] font-mono text-[#6E6E6E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-[#E8E2D8] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#8A5A44] hover:bg-[#6F4635] text-[#FFFFFF] text-xs font-medium flex items-center gap-2 shadow-xs transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#FFFFFF]" />
                <span>View Source Code</span>
              </a>
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono text-[#6E6E6E] hover:text-[#171717] transition-colors"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
