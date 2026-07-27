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
          className="relative w-full max-w-4xl bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl shadow-xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-6 border-b border-[#E6E2DA] flex items-start justify-between bg-[#F8F6F1]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-[#EDF5EF] border border-[#214D3B]/20 text-[#214D3B] font-mono text-xs font-medium">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#EDF5EF] border border-emerald-600/30 text-emerald-700 font-mono text-xs font-medium">
                  {project.status}
                </span>
                <span className="text-xs font-mono text-[#66736C]">{project.date}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#183A2D]">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] text-[#66736C] hover:text-[#183A2D] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-grow">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono font-semibold text-[#214D3B] uppercase tracking-wider mb-2">
                System Overview
              </h3>
              <p className="text-sm text-[#66736C] leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Performance Metrics */}
            {project.metrics && (
              <div>
                <h3 className="text-xs font-mono font-semibold text-[#214D3B] uppercase tracking-wider mb-3">
                  Verified Performance Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] flex flex-col justify-center"
                    >
                      <span className="text-[11px] font-mono text-[#66736C]">{metric.label}</span>
                      <span className="text-lg font-heading font-bold text-[#214D3B]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-mono font-semibold text-[#214D3B] uppercase tracking-wider mb-3">
                Key Engineering Accomplishments
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#183A2D]">
                    <CheckCircle2 className="w-4 h-4 text-[#214D3B] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Overview */}
            <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA]">
              <h3 className="text-xs font-mono font-semibold text-[#214D3B] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Data & Control Pipeline Architecture
              </h3>
              <p className="font-mono text-xs text-[#183A2D] bg-[#FCFBF8] p-3 rounded-lg border border-[#E6E2DA]">
                {project.architectureOverview}
              </p>
            </div>

            {/* Hardware & Software Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.hardware && (
                <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA]">
                  <h4 className="text-xs font-mono font-semibold text-[#183A2D] mb-2 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#214D3B]" />
                    Hardware Specs
                  </h4>
                  <ul className="space-y-1 text-xs font-mono text-[#66736C]">
                    {project.hardware.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA]">
                <h4 className="text-xs font-mono font-semibold text-[#183A2D] mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#214D3B]" />
                  Software & Libraries
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.software.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-[#FCFBF8] border border-[#E6E2DA] text-[11px] font-mono text-[#214D3B]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-[#E6E2DA] bg-[#F8F6F1] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] text-xs font-medium flex items-center gap-2 shadow-xs transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                View Source Code
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] hover:bg-[#EDF5EF] text-xs font-medium text-[#214D3B] flex items-center gap-2 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Watch Video Demo
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono text-[#66736C] hover:text-[#183A2D] transition-colors"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
