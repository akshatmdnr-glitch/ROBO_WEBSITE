'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, HardDrive, CheckCircle2, Layers, Activity } from 'lucide-react';
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl bg-[#111827] border border-[#1E293B] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-6 border-b border-[#1E293B] flex items-start justify-between bg-[#0B1120]/80">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#00E5FF] font-mono text-xs">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  {project.status}
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">{project.date}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1E293B]/60 text-[#94A3B8] hover:text-white hover:bg-[#1E293B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-grow">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono font-semibold text-[#06B6D4] uppercase tracking-wider mb-2">
                System Overview
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Performance Metrics */}
            {project.metrics && (
              <div>
                <h3 className="text-xs font-mono font-semibold text-[#06B6D4] uppercase tracking-wider mb-3">
                  Verified Performance Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#0B1120] border border-[#1E293B] flex flex-col justify-center"
                    >
                      <span className="text-[11px] font-mono text-[#94A3B8]">{metric.label}</span>
                      <span className="text-lg font-heading font-bold text-[#00E5FF]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-mono font-semibold text-[#06B6D4] uppercase tracking-wider mb-3">
                Key Engineering Accomplishments
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Overview */}
            <div className="p-4 rounded-xl bg-[#0B1120] border border-[#1E293B]">
              <h3 className="text-xs font-mono font-semibold text-[#06B6D4] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Data & Control Pipeline Architecture
              </h3>
              <p className="font-mono text-xs text-white bg-[#111827] p-3 rounded-lg border border-[#1E293B]">
                {project.architectureOverview}
              </p>
            </div>

            {/* Hardware & Software Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.hardware && (
                <div className="p-4 rounded-xl bg-[#0B1120] border border-[#1E293B]">
                  <h4 className="text-xs font-mono font-semibold text-white mb-2 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#06B6D4]" />
                    Hardware Specs
                  </h4>
                  <ul className="space-y-1 text-xs font-mono text-[#94A3B8]">
                    {project.hardware.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#0B1120] border border-[#1E293B]">
                <h4 className="text-xs font-mono font-semibold text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#2563EB]" />
                  Software & Libraries
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.software.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-[#111827] border border-[#1E293B] text-[11px] font-mono text-[#00E5FF]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-[#1E293B] bg-[#0B1120]/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold flex items-center gap-2 shadow-md shadow-[#2563EB]/30 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                View Source Code
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#00E5FF]/40 text-xs font-semibold text-[#00E5FF] flex items-center gap-2 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Watch Video Demo
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono text-[#94A3B8] hover:text-white transition-colors"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
