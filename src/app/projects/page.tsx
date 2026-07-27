'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Search, ArrowRight, Filter, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { PROJECTS, Project } from '@/data/projects';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';

const CATEGORIES = ['All', 'Mobile Robots', 'ROS2 Packages', 'Computer Vision', 'Simulation', 'Embedded'] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold">
          Hardware & Software Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          Robotics Projects & Engineering Systems
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
          Full-stack autonomous systems, custom ROS2 C++ packages, CUDA LiDAR SLAM pipelines, and micro-ROS embedded drivers designed and built for real-world operation.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1E293B]">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold shadow-md shadow-[#2563EB]/30'
                  : 'bg-[#111827] text-[#94A3B8] hover:text-white border border-[#1E293B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#111827] border border-[#1E293B] focus:border-[#00E5FF] text-xs text-white placeholder-[#94A3B8] outline-none transition-all"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center text-[#94A3B8] font-mono text-sm">
          No robotics projects found matching your search query or filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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

                <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Metrics chips if available */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2 rounded bg-[#0B1120] border border-[#1E293B]">
                        <span className="text-[10px] font-mono text-[#94A3B8] block">{m.label}</span>
                        <span className="text-xs font-mono font-bold text-[#00E5FF]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
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
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-[#00E5FF] hover:underline flex items-center gap-1"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0B1120] text-[#94A3B8] hover:text-white hover:border-[#00E5FF]/40 border border-[#1E293B] transition-all"
                  aria-label="GitHub Repo"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
