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
import { RESEARCH_INTERESTS } from '@/data/research';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const latestBlogs = BLOG_POSTS.slice(0, 3);

  return (
    <div className="relative min-h-screen">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden border-b border-[#1E293B]">
        {/* Dynamic Canvas Background */}
        <InteractiveLidarCanvas />

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827]/90 border border-[#06B6D4]/30 backdrop-blur-md mb-6 shadow-lg shadow-[#06B6D4]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold">
                Robotics Researcher & Educator • Target MS 2026/27
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Hi, I'm <span className="text-gradient-primary">Akshat Mishra</span>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg sm:text-2xl font-mono text-[#06B6D4] font-medium"
            >
              Robotics Engineer • ROS2 Developer • Autonomous Systems Enthusiast
            </motion.p>

            {/* Short Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl"
            >
              Architecting spatial intelligence algorithms, 2D/3D LiDAR SLAM, Model Predictive Control (MPC), and zero-overhead micro-ROS embedded drivers for next-generation field robotics.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-[#1D4ED8] hover:to-[#0891B2] text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#2563EB]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Terminal className="w-4 h-4" />
                <span>View Projects</span>
              </Link>

              <Link
                href="/learning-hub"
                className="px-6 py-3.5 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#00E5FF]/40 text-white font-semibold text-sm flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Layers className="w-4 h-4 text-[#00E5FF]" />
                <span>Learning Hub</span>
              </Link>

              <a
                href="https://github.com/akshatmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#00E5FF]/40 text-[#94A3B8] hover:text-white font-semibold text-sm flex items-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <Link
                href="/resume"
                className="px-5 py-3.5 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#00E5FF]/40 text-[#94A3B8] hover:text-white font-semibold text-sm flex items-center gap-2 transition-all"
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
              className="mt-12 pt-8 border-t border-[#1E293B]/80 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono"
            >
              <div>
                <span className="text-2xl font-bold text-white">4+</span>
                <p className="text-xs text-[#94A3B8]">Years ROS / ROS2</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#00E5FF]">12+</span>
                <p className="text-xs text-[#94A3B8]">Open Source Repos</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#06B6D4]">3</span>
                <p className="text-xs text-[#94A3B8]">Research Preprints</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-emerald-400">100%</span>
                <p className="text-xs text-[#94A3B8]">Hardware & C++ Stack</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          FEATURED PROJECTS SECTION
      ========================================= */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] uppercase tracking-wider mb-2">
              <Terminal className="w-4 h-4" />
              <span>Flagship Hardware & Software</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Featured Robotics Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono text-[#00E5FF] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Explore All Projects ({PROJECTS.length})</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 flex flex-col justify-between glass-panel-hover group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#00E5FF] font-mono text-[11px]">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#94A3B8]">{project.date}</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#0B1120] border border-[#1E293B] text-[10px] font-mono text-[#94A3B8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1E293B] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[#00E5FF] hover:underline flex items-center gap-1"
                >
                  <span>Deep Dive Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0B1120] text-[#94A3B8] hover:text-white hover:border-[#00E5FF]/40 border border-[#1E293B] transition-all"
                  aria-label="GitHub repo"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          RESEARCH INTERESTS PREVIEW
      ========================================= */}
      <section className="py-20 bg-[#0B1120]/80 border-y border-[#1E293B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider font-semibold">
              Academic & Industry Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              Research Focus Areas
            </h2>
            <p className="text-sm text-[#94A3B8] mt-3">
              Pushing the boundaries of spatial intelligence, real-time factor graphs, and hardware acceleration for field robotics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_INTERESTS.map((interest, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-[#06B6D4]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-[#06B6D4]/30 flex items-center justify-center text-[#00E5FF] mb-4">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {interest.description}
                  </p>
                </div>
                <div>
                  <div className="pt-3 border-t border-[#1E293B]/80 text-[11px] font-mono text-[#00E5FF]">
                    Focus: {interest.currentFocus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          LEARNING HUB & ROADMAPS PREVIEW
      ========================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold">
              Robotics Education & Tutorials
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              Empowering the Next Generation of Roboticists
            </h2>
            <p className="text-sm text-[#94A3B8] mt-4 leading-relaxed">
              Robotics can be daunting. I create open-source learning roadmaps, electronics guides, ROS2 cheatsheets, and interactive checklists to help students and engineers build real robots faster.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Structured Step-by-Step Roadmaps</h4>
                  <p className="text-xs text-[#94A3B8]">From linear algebra to Cartographer SLAM and ros2_control.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Hands-On Electronics Tutorials</h4>
                  <p className="text-xs text-[#94A3B8]">Motor driver topologies, IMU calibration, and CAN bus buses.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Interactive Skill Progress Tracker</h4>
                  <p className="text-xs text-[#94A3B8]">Track your personal mastery of C++, ROS2 CLI, and TF2 trees.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/learning-hub"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-xs font-semibold shadow-md shadow-[#2563EB]/30 transition-all hover:scale-[1.02]"
              >
                <Layers className="w-4 h-4" />
                <span>Enter Learning Hub</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#1E293B] mb-6">
              <span className="text-xs font-mono font-semibold text-[#00E5FF]">FEATURED ROADMAP 2026</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
                BEGINNER FRIENDLY
              </span>
            </div>

            <h3 className="text-xl font-heading font-bold text-white">
              Robotics Engineer Roadmap (0 to AMR)
            </h3>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
              Curated 5-phase pathway designed to get you building physical autonomous robots.
            </p>

            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] flex items-center justify-between">
                <span className="text-white font-semibold">1. Math Foundations & C++20</span>
                <span className="text-[#06B6D4]">6 Weeks</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] flex items-center justify-between">
                <span className="text-white font-semibold">2. ROS2 Humble / Jazzy Core</span>
                <span className="text-[#06B6D4]">8 Weeks</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] flex items-center justify-between">
                <span className="text-white font-semibold">3. Gazebo Simulation & URDF</span>
                <span className="text-[#06B6D4]">6 Weeks</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] flex items-center justify-between">
                <span className="text-white font-semibold">4. SLAM & Nav2 Costmaps</span>
                <span className="text-[#06B6D4]">8 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          LATEST BLOG POSTS
      ========================================= */}
      <section className="py-20 bg-[#0B1120]/80 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider font-semibold">
                Technical Insights & Field Notes
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-1">
                Latest Blog Posts
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-mono text-[#00E5FF] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>View All Posts</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 flex flex-col justify-between glass-panel-hover group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#00E5FF] font-mono text-[11px]">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#94A3B8]">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>{post.date}</span>
                  <span className="text-[#00E5FF] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </span>
                </div>
              </Link>
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
          CONTACT / FOOTER CTA
      ========================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0B1120] to-[#111827] border-t border-[#1E293B] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-12 h-12 rounded-2xl bg-[#0B1120] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mx-auto mb-6 shadow-xl shadow-[#00E5FF]/10">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white">
            Let's Build Autonomous Systems Together
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            Whether you are discussing Master's research, open-source ROS2 packages, or robotics lab opportunities, I'd love to connect.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold text-sm shadow-xl shadow-[#2563EB]/40 transition-all hover:scale-105"
            >
              Initiate Contact
            </Link>
            <a
              href="mailto:akshat.mishra.robotics@gmail.com"
              className="px-8 py-4 rounded-xl bg-[#0B1120] border border-[#1E293B] hover:border-[#00E5FF]/40 text-white font-semibold text-sm transition-all hover:scale-105"
            >
              akshat.mishra.robotics@gmail.com
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
