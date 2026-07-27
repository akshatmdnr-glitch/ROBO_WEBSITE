'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Search, ArrowRight, Filter } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { PROJECTS, Project } from '@/data/projects';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';

const CATEGORIES = ['All', 'Mobile Robots', 'ROS2 Packages', 'Computer Vision', 'Embedded', 'Hardware'] as const;

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#6B7280] uppercase tracking-wider font-medium">
          Robotics Portfolio & Systems
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#1F2937] mt-2">
          Engineering <span className="font-serif-accent font-normal text-[#243B55]">projects</span> & Notebook
        </h1>
        <p className="text-base sm:text-lg text-[#6B7280] mt-4 leading-relaxed">
          Real autonomous mobile robots, ROS2 packages, embedded micro-ROS firmware, and electronics platforms built with physical hardware and verified software.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E5E1D8]">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-[#243B55] text-[#FCFBF8] font-semibold shadow-xs'
                  : 'bg-[#FCFBF8] text-[#6B7280] hover:text-[#1F2937] border border-[#E5E1D8] hover:bg-[#F8F6F1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#FCFBF8] border border-[#E5E1D8] focus:border-[#243B55] text-xs text-[#1F2937] placeholder-[#6B7280] outline-none transition-all"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center text-[#6B7280] font-mono text-sm">
          No robotics projects found matching your search query or filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              className="bg-[#FCFBF8] border border-[#E5E1D8] rounded-2xl p-6 flex flex-col justify-between glass-panel-hover group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#F8F6F1] border border-[#E5E1D8] text-[#1F2937] font-mono text-[11px] font-medium">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F8F6F1] border border-[#E5E1D8] text-[10px] font-mono text-[#6B7280] font-semibold">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-[#1F2937] group-hover:text-[#243B55] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[#6B7280] mt-3 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#F8F6F1] border border-[#E5E1D8] text-[10px] font-mono text-[#6B7280]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E1D8] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-medium text-[#243B55] hover:underline flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#FCFBF8] text-[#1F2937] hover:bg-[#F8F6F1] border border-[#E5E1D8] transition-all flex items-center gap-1.5 text-xs font-mono"
                  aria-label="GitHub Repo"
                >
                  <GithubIcon className="w-4 h-4 text-[#243B55]" />
                  <span>GitHub</span>
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
