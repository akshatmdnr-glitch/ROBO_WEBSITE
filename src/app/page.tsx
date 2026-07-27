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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFBF8] border border-[#E6E2DA] mb-6 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
                Robotics Research Lab • Target MS 2026/27
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#183A2D] tracking-tight leading-[1.1]"
            >
              Engineering <span className="font-serif-accent font-normal text-[#214D3B]">spatial intelligence</span> & robotics <span className="font-serif-accent font-normal text-[#214D3B]">autonomy.</span>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-xl font-mono text-[#66736C] font-medium"
            >
              Akshat Mishra • Robotics Engineer & ROS2 Researcher
            </motion.p>

            {/* Short Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-[#66736C] leading-relaxed max-w-2xl"
            >
              Architecting state estimation algorithms, 2D/3D LiDAR SLAM, Model Predictive Control (MPC), and micro-ROS drivers for resilient field robotics.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] font-medium text-sm flex items-center gap-2 shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Terminal className="w-4 h-4" />
                <span>View Research Projects</span>
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
              className="mt-12 pt-8 border-t border-[#E6E2DA] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono"
            >
              <div>
                <span className="text-2xl font-bold text-[#183A2D]">4+</span>
                <p className="text-xs text-[#66736C]">Years ROS / ROS2</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#214D3B]">12+</span>
                <p className="text-xs text-[#66736C]">Open Source Repos</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#214D3B]">3</span>
                <p className="text-xs text-[#66736C]">Research Preprints</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#214D3B]">100%</span>
                <p className="text-xs text-[#66736C]">Hardware & C++ Stack</p>
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
            <div className="flex items-center gap-2 text-xs font-mono text-[#214D3B] uppercase tracking-wider mb-2">
              <Terminal className="w-4 h-4" />
              <span>Flagship Hardware & Software</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#183A2D]">
              Featured <span className="font-serif-accent font-normal text-[#214D3B]">robotics</span> Projects
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
          {featuredProjects.map((project) => (
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
                  <span className="text-[11px] font-mono text-[#66736C]">{project.date}</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-[#183A2D] group-hover:text-[#214D3B] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#66736C] mt-3 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.slice(0, 4).map((tag) => (
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
                  <span>Deep Dive Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#F8F6F1] text-[#66736C] hover:text-[#183A2D] border border-[#E6E2DA] transition-all"
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
      <section className="py-20 bg-[#FCFBF8]/60 border-y border-[#E6E2DA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
              Academic & Industry Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#183A2D] mt-2">
              Research <span className="font-serif-accent font-normal text-[#214D3B]">discovery</span> Focus
            </h2>
            <p className="text-sm text-[#66736C] mt-3">
              Pushing the boundaries of spatial intelligence, real-time factor graphs, and hardware acceleration for field robotics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_INTERESTS.map((interest, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FCFBF8] border border-[#E6E2DA] hover:border-[#214D3B]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex items-center justify-center text-[#214D3B] mb-4">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-[#183A2D] text-base mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-xs text-[#66736C] leading-relaxed mb-4">
                    {interest.description}
                  </p>
                </div>
                <div>
                  <div className="pt-3 border-t border-[#E6E2DA] text-[11px] font-mono text-[#214D3B]">
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
            <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
              Robotics Education & Tutorials
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#183A2D] mt-2">
              Empowering the Next Generation of <span className="font-serif-accent font-normal text-[#214D3B]">roboticists</span>
            </h2>
            <p className="text-sm text-[#66736C] mt-4 leading-relaxed">
              Robotics can be daunting. I create open-source learning roadmaps, electronics guides, ROS2 cheatsheets, and interactive checklists to help students and engineers build real robots faster.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#214D3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#183A2D]">Structured Step-by-Step Roadmaps</h4>
                  <p className="text-xs text-[#66736C]">From linear algebra to Cartographer SLAM and ros2_control.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#214D3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#183A2D]">Hands-On Electronics Tutorials</h4>
                  <p className="text-xs text-[#66736C]">Motor driver topologies, IMU calibration, and CAN bus buses.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#214D3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#183A2D]">Interactive Skill Progress Tracker</h4>
                  <p className="text-xs text-[#66736C]">Track your personal mastery of C++, ROS2 CLI, and TF2 trees.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/learning-hub"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] text-xs font-medium shadow-xs transition-all hover:scale-[1.01]"
              >
                <Layers className="w-4 h-4" />
                <span>Enter Learning Hub</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#E6E2DA] mb-6">
              <span className="text-xs font-mono font-semibold text-[#214D3B]">FEATURED ROADMAP</span>
              <span className="px-2 py-0.5 rounded bg-[#EDF5EF] text-[#214D3B] text-[10px] font-mono font-medium">
                BEGINNER FRIENDLY
              </span>
            </div>

            <h3 className="text-xl font-heading font-bold text-[#183A2D]">
              Robotics Engineer Roadmap (0 to AMR)
            </h3>
            <p className="text-xs text-[#66736C] mt-2 leading-relaxed">
              Curated 5-phase pathway designed to get you building physical autonomous robots.
            </p>

            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex items-center justify-between">
                <span className="text-[#183A2D] font-semibold">1. Math Foundations & C++20</span>
                <span className="text-[#214D3B]">6 Weeks</span>
              </div>
              <div className="p-3 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex items-center justify-between">
                <span className="text-[#183A2D] font-semibold">2. ROS2 Humble / Jazzy Core</span>
                <span className="text-[#214D3B]">8 Weeks</span>
              </div>
              <div className="p-3 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex items-center justify-between">
                <span className="text-[#183A2D] font-semibold">3. Gazebo Simulation & URDF</span>
                <span className="text-[#214D3B]">6 Weeks</span>
              </div>
              <div className="p-3 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex items-center justify-between">
                <span className="text-[#183A2D] font-semibold">4. SLAM & Nav2 Costmaps</span>
                <span className="text-[#214D3B]">8 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          LATEST BLOG POSTS
      ========================================= */}
      <section className="py-20 bg-[#FCFBF8]/60 border-t border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
                Technical Insights & Field Notes
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#183A2D] mt-1">
                Latest Blog Posts
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-mono text-[#214D3B] hover:underline flex items-center gap-1 font-semibold"
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
                className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 flex flex-col justify-between glass-panel-hover group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#EDF5EF] border border-[#214D3B]/20 text-[#214D3B] font-mono text-[11px] font-medium">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#66736C]">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#183A2D] group-hover:text-[#214D3B] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#66736C] mt-3 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E6E2DA] flex items-center justify-between text-xs text-[#66736C]">
                  <span>{post.date}</span>
                  <span className="text-[#214D3B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
