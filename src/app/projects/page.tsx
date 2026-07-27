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
        <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
          Hardware & Software Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#183A2D] mt-2">
          Robotics <span className="font-serif-accent font-normal text-[#214D3B]">projects</span> & Systems
        </h1>
        <p className="text-base sm:text-lg text-[#66736C] mt-4 leading-relaxed">
          Full-stack autonomous systems, custom ROS2 C++ packages, CUDA LiDAR SLAM pipelines, and micro-ROS embedded drivers designed and built for real-world operation.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E6E2DA]">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-[#214D3B] text-[#FCFBF8] font-semibold shadow-xs'
                  : 'bg-[#FCFBF8] text-[#66736C] hover:text-[#183A2D] border border-[#E6E2DA] hover:bg-[#EDF5EF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#66736C] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] focus:border-[#214D3B] text-xs text-[#183A2D] placeholder-[#66736C] outline-none transition-all"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center text-[#66736C] font-mono text-sm">
          No robotics projects found matching your search query or filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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

                <h3 className="text-xl font-heading font-bold text-[#183A2D] group-hover:text-[#214D3B] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[#66736C] mt-3 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Metrics chips if available */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2 rounded bg-[#F8F6F1] border border-[#E6E2DA]">
                        <span className="text-[10px] font-mono text-[#66736C] block">{m.label}</span>
                        <span className="text-xs font-mono font-bold text-[#214D3B]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

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
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-medium text-[#214D3B] hover:underline flex items-center gap-1"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#F8F6F1] text-[#66736C] hover:text-[#183A2D] border border-[#E6E2DA] transition-all"
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
