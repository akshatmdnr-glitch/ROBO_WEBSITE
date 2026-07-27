'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, FileText, ArrowRight, ChevronRight } from 'lucide-react';
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
            1. HERO SECTION (Welcoming & Personal)
        ========================================= */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden border-b border-[#E8E2D8]">
          {/* Subtle Canvas Background */}
          <InteractiveLidarCanvas />

          {/* Hero Content Overlay */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <div className="space-y-6 flex flex-col items-center">
              
              {/* Welcoming Greeting & Name */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2 text-center"
              >
                <span className="text-sm font-mono text-[#8A5A44] font-medium tracking-wide block">
                  Hello —
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#171717] tracking-tight leading-[1.1]">
                  <span className="font-normal text-[#6E6E6E] block text-2xl sm:text-4xl mb-1">I'm</span>
                  Akshat Mishra
                </h1>
              </motion.div>

              {/* Subtitle Line */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xs sm:text-sm font-mono text-[#6E6E6E] font-normal tracking-wide pt-1"
              >
                Robotics Engineer • ROS2 Developer • Computer Vision • Embedded Systems
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base sm:text-lg text-[#6E6E6E] font-normal leading-relaxed max-w-2xl mx-auto pt-2"
              >
                Building autonomous robotic systems and documenting my journey toward graduate research in Robotics.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="pt-6 flex flex-wrap items-center justify-center gap-3"
              >
                {/* Primary Button */}
                <Link
                  href="/projects"
                  className="px-6 py-3 rounded-lg bg-[#8A5A44] hover:bg-[#6F4635] text-[#FFFFFF] font-medium text-sm flex items-center gap-2 shadow-xs transition-all"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Explore Projects</span>
                </Link>

                {/* Secondary Buttons */}
                <Link
                  href="/research"
                  className="px-6 py-3 rounded-lg bg-[#FFFFFF] border border-[#E8E2D8] hover:bg-[#F5ECE7] text-[#171717] font-medium text-sm flex items-center gap-2 transition-all"
                >
                  <span>Research Journey</span>
                </Link>

                <a
                  href="https://github.com/akshatmdnr-glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg bg-[#FFFFFF] border border-[#E8E2D8] hover:bg-[#F5ECE7] text-[#171717] font-medium text-sm flex items-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#8A5A44]" />
                  <span>GitHub</span>
                </a>

                <Link
                  href="/resume"
                  className="px-5 py-3 rounded-lg bg-[#FFFFFF] border border-[#E8E2D8] hover:bg-[#F5ECE7] text-[#171717] font-medium text-sm flex items-center gap-2 transition-all"
                >
                  <FileText className="w-4 h-4 text-[#8A5A44]" />
                  <span>Resume</span>
                </Link>
              </motion.div>

              {/* Statistics Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="pt-10 mt-8 border-t border-[#E8E2D8] grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono w-full max-w-2xl"
              >
                <div>
                  <span className="text-2xl font-bold text-[#171717]">5</span>
                  <p className="text-xs text-[#6E6E6E]">Core Projects</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#171717]">ROS2</span>
                  <p className="text-xs text-[#6E6E6E]">Humble & Jazzy</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#171717]">C++ / Py</span>
                  <p className="text-xs text-[#6E6E6E]">Perception & SLAM</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#171717]">100%</span>
                  <p className="text-xs text-[#6E6E6E]">Real Hardware</p>
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
              <div className="flex items-center gap-2 text-xs font-mono text-[#6E6E6E] uppercase tracking-wider mb-2">
                <Terminal className="w-4 h-4 text-[#8A5A44]" />
                <span>Featured Builds</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#171717]">
                Selected Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono text-[#8A5A44] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>View All Projects ({PROJECTS.length})</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -2 }}
                className="bg-[#FFFFFF] border border-[#E8E2D8] rounded-2xl p-6 flex flex-col justify-between glass-panel-hover group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#F5ECE7] border border-[#E8E2D8] text-[#8A5A44] font-mono text-[11px] font-medium">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] text-[10px] font-mono text-[#6E6E6E] font-semibold">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#171717] group-hover:text-[#8A5A44] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#6E6E6E] mt-3 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E8E2D8] text-[10px] font-mono text-[#6E6E6E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E2D8] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium text-[#8A5A44] hover:underline flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] text-[#6E6E6E] hover:text-[#171717] border border-[#E8E2D8] transition-all flex items-center gap-1.5 text-xs font-mono"
                    aria-label="GitHub repo"
                  >
                    <GithubIcon className="w-4 h-4 text-[#8A5A44]" />
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
