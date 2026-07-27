'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, FileText, ArrowRight, ChevronRight, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import InteractiveLidarCanvas from '@/components/home/InteractiveLidarCanvas';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';
import { PROJECTS, Project } from '@/data/projects';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <div>
        {/* =========================================
            1. HERO SECTION (Centered & Balanced)
        ========================================= */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 overflow-hidden border-b border-[#E2E8F0]">
          {/* Dynamic Lidar Canvas Background */}
          <InteractiveLidarCanvas />

          {/* Hero Content Overlay (Visually Centered) */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <div className="space-y-6 flex flex-col items-center">
              {/* Status Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFBF8] border border-[#E2E8F0] shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#6C8FEF] animate-pulse" />
                <span className="text-xs font-mono text-[#6C8FEF] uppercase tracking-wider font-medium">
                  Robotics Engineer • Research Portfolio
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#1E293B] tracking-tight leading-[1.12] max-w-3xl"
              >
                Engineering the <span className="font-serif-accent font-normal text-[#6C8FEF]">future</span> of intelligent robotics.
              </motion.h1>

              {/* Role Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg font-mono text-[#6C8FEF] font-semibold"
              >
                Akshat Mishra — Robotics Engineer & Autonomous Systems Researcher
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-[#52607B] leading-relaxed max-w-2xl mx-auto"
              >
                Building autonomous robotic systems using ROS2, computer vision, embedded systems, and intelligent perception while preparing for graduate research in robotics.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4 flex flex-wrap items-center justify-center gap-3"
              >
                <Link
                  href="/projects"
                  className="px-6 py-3.5 rounded-lg bg-[#6C8FEF] hover:bg-[#5A7DE6] text-[#FCFBF8] font-medium text-sm flex items-center gap-2 shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Explore Projects</span>
                </Link>

                <Link
                  href="/research"
                  className="px-6 py-3.5 rounded-lg bg-[#FCFBF8] border border-[#E2E8F0] hover:bg-[#EAF2FF] text-[#1E293B] font-medium text-sm flex items-center gap-2 transition-all"
                >
                  <span>Research Journey</span>
                </Link>

                <a
                  href="https://github.com/akshatmdnr-glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-lg bg-[#FCFBF8] border border-[#E2E8F0] hover:bg-[#EAF2FF] text-[#52607B] hover:text-[#1E293B] font-medium text-sm flex items-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#6C8FEF]" />
                  <span>GitHub</span>
                </a>

                <Link
                  href="/resume"
                  className="px-5 py-3.5 rounded-lg bg-[#FCFBF8] border border-[#E2E8F0] hover:bg-[#EAF2FF] text-[#52607B] hover:text-[#1E293B] font-medium text-sm flex items-center gap-2 transition-all"
                >
                  <FileText className="w-4 h-4 text-[#6C8FEF]" />
                  <span>Resume</span>
                </Link>
              </motion.div>

              {/* Centered Statistics Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-10 mt-6 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono w-full max-w-2xl"
              >
                <div>
                  <span className="text-2xl font-bold text-[#1E293B]">5</span>
                  <p className="text-xs text-[#52607B]">Core Projects</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#6C8FEF]">ROS2</span>
                  <p className="text-xs text-[#52607B]">Humble & Jazzy</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#6C8FEF]">C++ / Py</span>
                  <p className="text-xs text-[#52607B]">Perception & SLAM</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#6C8FEF]">100%</span>
                  <p className="text-xs text-[#52607B]">Real Systems</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            2. FEATURED PROJECTS SECTION
        ========================================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#6C8FEF] uppercase tracking-wider mb-2">
                <Terminal className="w-4 h-4" />
                <span>Featured Robotics Builds</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#1E293B]">
                Selected Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono text-[#6C8FEF] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>View All Projects ({PROJECTS.length})</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                className="bg-[#FCFBF8] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between glass-panel-hover group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#EAF2FF] border border-[#6C8FEF]/30 text-[#6C8FEF] font-mono text-[11px] font-medium">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F8F6F1] border border-[#E2E8F0] text-[10px] font-mono text-emerald-700 font-semibold">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#1E293B] group-hover:text-[#6C8FEF] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#52607B] mt-3 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#F8F6F1] border border-[#E2E8F0] text-[10px] font-mono text-[#52607B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium text-[#6C8FEF] hover:underline flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#F8F6F1] text-[#52607B] hover:text-[#1E293B] border border-[#E2E8F0] transition-all flex items-center gap-1.5 text-xs font-mono"
                    aria-label="GitHub repo"
                  >
                    <GithubIcon className="w-4 h-4 text-[#6C8FEF]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
