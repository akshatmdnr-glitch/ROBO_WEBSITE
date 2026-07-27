'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Terminal,
  FileText,
  Compass,
  Layers,
  BookOpen,
  Cpu,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import InteractiveLidarCanvas from '@/components/home/InteractiveLidarCanvas';
import GithubActivityFeed from '@/components/home/GithubActivityFeed';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';
import { PROJECTS, Project } from '@/data/projects';
import { BLOG_POSTS } from '@/data/blogs';
import { RESEARCH_JOURNEY_DATA } from '@/data/research';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 overflow-hidden border-b border-[#E6E2DA]">
        {/* Dynamic Canvas Background */}
        <InteractiveLidarCanvas />

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
          <div className="max-w-3xl w-full mx-auto text-left space-y-6">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFBF8] border border-[#E6E2DA] shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
                Robotics Research Lab • Target MS 2026/27
              </span>
            </motion.div>

            {/* Main Title - Exactly 2 lines */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#183A2D] tracking-tight leading-[1.12]"
            >
              Engineering the <span className="font-serif-accent font-normal text-[#214D3B]">future</span>
              <br />
              of intelligent robotics.
            </motion.h1>

            {/* Role Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl font-mono text-[#214D3B] font-semibold"
            >
              Akshat Mishra • Robotics Engineer & ROS2 Researcher
            </motion.p>

            {/* Short Intro Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#66736C] leading-relaxed max-w-2xl"
            >
              Building autonomous robotic systems using ROS2, computer vision, embedded systems, and intelligent perception while preparing for graduate research in robotics.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] font-medium text-sm flex items-center gap-2 shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Terminal className="w-4 h-4" />
                <span>View Projects</span>
              </Link>

              <Link
                href="/learning-hub"
                className="px-6 py-3.5 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] hover:bg-[#EDF5EF] text-[#183A2D] font-medium text-sm flex items-center gap-2 transition-all"
              >
                <Layers className="w-4 h-4 text-[#214D3B]" />
                <span>Learning Hub</span>
              </Link>

              <a
                href="https://github.com/akshatmdnr-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] hover:bg-[#EDF5EF] text-[#66736C] hover:text-[#183A2D] font-medium text-sm flex items-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <Link
                href="/resume"
                className="px-5 py-3.5 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] hover:bg-[#EDF5EF] text-[#66736C] hover:text-[#183A2D] font-medium text-sm flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </Link>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-8 border-t border-[#E6E2DA] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono"
            >
              <div>
                <span className="text-2xl font-bold text-[#183A2D]">5</span>
                <p className="text-xs text-[#66736C]">Core Projects</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#214D3B]">ROS2</span>
                <p className="text-xs text-[#66736C]">Humble & Jazzy</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#214D3B]">C++ / Py</span>
                <p className="text-xs text-[#66736C]">Perception & Control</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#214D3B]">100%</span>
                <p className="text-xs text-[#66736C]">Hardware & Software</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. PROJECTS SECTION
      ========================================= */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#214D3B] uppercase tracking-wider mb-2">
              <Terminal className="w-4 h-4" />
              <span>Real Hardware & Software Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#183A2D]">
              Robotics <span className="font-serif-accent font-normal text-[#214D3B]">projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono text-[#214D3B] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Explore All Projects ({PROJECTS.length})</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 flex flex-col justify-between glass-panel-hover group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#EDF5EF] border border-[#214D3B]/20 text-[#214D3B] font-mono text-[11px] font-medium">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F8F6F1] border border-[#E6E2DA] text-[10px] font-mono text-emerald-800 font-semibold">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-[#183A2D] group-hover:text-[#214D3B] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#66736C] mt-3 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#F8F6F1] border border-[#E6E2DA] text-[10px] font-mono text-[#66736C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E6E2DA] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-[#214D3B] hover:underline flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#F8F6F1] text-[#66736C] hover:text-[#183A2D] border border-[#E6E2DA] transition-all flex items-center gap-1.5 text-xs font-mono"
                  aria-label="GitHub repo"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}

          {/* Reserved Space for Future Projects */}
          <div className="bg-[#F8F6F1]/60 border border-dashed border-[#E6E2DA] rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[280px]">
            <div className="w-10 h-10 rounded-xl bg-[#FCFBF8] border border-[#E6E2DA] flex items-center justify-center text-[#214D3B]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-[#183A2D] text-base">Future Projects Slot</h4>
            <p className="text-xs text-[#66736C] max-w-xs leading-relaxed">
              Space reserved for upcoming robotics builds, SLAM prototypes, and research developments.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          3. RESEARCH SECTION (Research Journey)
      ========================================= */}
      <section className="py-20 bg-[#FCFBF8]/60 border-y border-[#E6E2DA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
              Academic Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#183A2D] mt-2">
              Research <span className="font-serif-accent font-normal text-[#214D3B]">journey</span>
            </h2>
            <p className="text-sm font-mono text-[#214D3B] mt-3 font-semibold">
              Research portfolio currently under development.
            </p>
            <p className="text-xs sm:text-sm text-[#66736C] mt-2">
              I am currently preparing for graduate research in Robotics with a focus on:
            </p>

            {/* 6 Focus Areas Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                'SLAM',
                'Robot Perception',
                'Computer Vision',
                'Autonomous Navigation',
                'Robot Learning',
                'Embedded Robotics',
              ].map((topic, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3.5 py-1.5 rounded-full bg-[#FCFBF8] border border-[#E6E2DA] text-xs font-mono text-[#183A2D] font-medium shadow-xs"
                >
                  • {topic}
                </span>
              ))}
            </div>
          </div>

          {/* 4 Elegant Placeholder Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Publications',
                status: 'Coming Soon',
                desc: 'Peer-reviewed journal and conference papers will be listed here.',
              },
              {
                title: 'Technical Reports',
                status: 'Coming Soon',
                desc: 'System architecture breakdowns and hardware benchmarks.',
              },
              {
                title: 'Research Notes',
                status: 'Coming Soon',
                desc: 'Mathematical derivations and field experiment logs.',
              },
              {
                title: 'Conference Papers',
                status: 'Coming Soon',
                desc: 'Workshop papers and conference presentations in autonomy.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FCFBF8] border border-[#E6E2DA] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Compass className="w-5 h-5 text-[#214D3B]" />
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EDF5EF] border border-[#214D3B]/20 text-[10px] font-mono text-[#214D3B] font-medium">
                      {card.status}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[#183A2D] text-base mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#66736C] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          LEARNING HUB PREVIEW
      ========================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
              Robotics Education & Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#183A2D] mt-2">
              Open Robotics <span className="font-serif-accent font-normal text-[#214D3B]">learning</span> Hub
            </h2>
            <p className="text-sm text-[#66736C] mt-4 leading-relaxed">
              Explore step-by-step roadmaps, hands-on electronics guides, ROS2 cheatsheets, and interactive checklists to master real robot engineering.
            </p>

            <div className="mt-8">
              <Link
                href="/learning-hub"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] text-xs font-medium shadow-xs transition-all"
              >
                <Layers className="w-4 h-4" />
                <span>Enter Learning Hub</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 shadow-xs">
            <h3 className="text-xl font-heading font-bold text-[#183A2D] mb-3">
              Robotics Engineer Pathway
            </h3>
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex justify-between">
                <span className="text-[#183A2D] font-semibold">1. Math & C++ Fundamentals</span>
                <span className="text-[#214D3B]">Phase 1</span>
              </div>
              <div className="p-3 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex justify-between">
                <span className="text-[#183A2D] font-semibold">2. ROS2 Nodes & TF2</span>
                <span className="text-[#214D3B]">Phase 2</span>
              </div>
              <div className="p-3 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex justify-between">
                <span className="text-[#183A2D] font-semibold">3. Gazebo Simulation & URDF</span>
                <span className="text-[#214D3B]">Phase 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. BLOG SECTION (Notes & Articles)
      ========================================= */}
      <section className="py-20 bg-[#FCFBF8]/60 border-t border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
              Technical Writing & Field Notes
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#183A2D] mt-1">
              Notes & <span className="font-serif-accent font-normal text-[#214D3B]">articles</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#66736C] mt-3 leading-relaxed">
              Technical articles, tutorials, project write-ups and research notes will be published here as I continue my robotics journey.
            </p>
          </div>

          {/* 3 Elegant Placeholder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ROS2 Tutorials',
                category: 'ROS2 & Navigation',
                status: 'Coming Soon',
                desc: 'Step-by-step guides covering ROS2 nodes, launch files, TF2 transforms, and Nav2 costmap setup.',
              },
              {
                title: 'Project Documentation',
                category: 'System Architecture',
                status: 'Coming Soon',
                desc: 'In-depth architecture breakdowns, hardware schematics, and code walkthroughs for physical robot builds.',
              },
              {
                title: 'Research Notes',
                category: 'Spatial Intelligence',
                desc: 'Summaries of robotics research papers, mathematical derivations for SLAM, and trajectory control notes.',
                status: 'Coming Soon',
              },
            ].map((post, idx) => (
              <div
                key={idx}
                className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#EDF5EF] border border-[#214D3B]/20 text-[#214D3B] font-mono text-[11px] font-medium">
                      {post.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F8F6F1] border border-[#E6E2DA] text-[10px] font-mono text-[#214D3B] font-medium">
                      {post.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#183A2D]">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#66736C] mt-3 leading-relaxed">
                    {post.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          GITHUB ACTIVITY SECTION
      ========================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GithubActivityFeed />
      </section>

      {/* =========================================
          CONTACT CTA
      ========================================= */}
      <section className="py-20 bg-[#F8F6F1] border-t border-[#E6E2DA] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-10 h-10 rounded-xl bg-[#FCFBF8] border border-[#E6E2DA] flex items-center justify-center text-[#214D3B] mx-auto mb-6 shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#183A2D]">
            Let's Build Autonomous <span className="font-serif-accent font-normal text-[#214D3B]">robots</span> Together
          </h2>

          <p className="text-base sm:text-lg text-[#66736C] mt-4 max-w-2xl mx-auto">
            Whether you are discussing Master's research, open-source ROS2 packages, or robotics lab opportunities, I'd love to connect.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] font-medium text-sm shadow-xs transition-all hover:scale-[1.01]"
            >
              Initiate Contact
            </Link>
            <a
              href="mailto:akshatmdnr@gmail.com"
              className="px-8 py-4 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] hover:bg-[#EDF5EF] text-[#183A2D] font-medium text-sm transition-all"
            >
              akshatmdnr@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
