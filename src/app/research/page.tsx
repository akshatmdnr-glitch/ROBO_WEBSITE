'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, FileText, Download, Copy, Check, ExternalLink, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { PUBLICATIONS, RESEARCH_INTERESTS, MASTERS_ASPIRATIONS, Publication } from '@/data/research';

export default function ResearchPage() {
  const [expandedBibtex, setExpandedBibtex] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedAbstract, setExpandedAbstract] = useState<string | null>(null);

  const handleCopyBibtex = (pub: Publication) => {
    if (!pub.bibtex) return;
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold">
          Academic Research & Preprints
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          Robotics Research & Spatial Intelligence
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
          Investigating GPU-accelerated factor graph optimization, resilient multi-modal LiDAR-Inertial SLAM, and safety-critical Model Predictive Control under unmapped dynamic field conditions.
        </p>
      </div>

      {/* Research Statement Card */}
      <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 mb-16 shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-white">Research Vision & Philosophy</h2>
            <p className="text-xs font-mono text-[#06B6D4]">Akshat Mishra // Robotics Research Lab</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          "Autonomous field robots operating in GPS-denied, unstructured environments cannot rely on idealized assumptions. My research centers on tightly coupled multi-sensor fusion, parallelized state estimation on edge hardware (NVIDIA Jetson / CUDA), and low-latency micro-ROS execution to guarantee resilient robot behavior."
        </p>
      </div>

      {/* Research Focus Areas Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold text-white mb-8">Primary Research Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_INTERESTS.map((interest, idx) => (
            <div
              key={idx}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 hover:border-[#00E5FF]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-heading font-bold text-white mb-2 text-[#00E5FF]">
                  {interest.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {interest.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {interest.keyTopics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 rounded bg-[#0B1120] border border-[#1E293B] text-[11px] font-mono text-[#94A3B8]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-[#1E293B] text-xs font-mono text-[#06B6D4]">
                Current Work: {interest.currentFocus}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications & Preprints */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider font-semibold">
              Papers & Manuscripts
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Publications & Preprints
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 hover:border-[#06B6D4]/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full font-mono text-xs font-semibold ${
                      pub.status === 'Published'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : pub.status === 'In Review'
                        ? 'bg-[#2563EB]/20 text-[#00E5FF] border border-[#2563EB]/40'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {pub.status}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">{pub.year}</span>
                </div>
                <span className="text-xs font-mono text-[#06B6D4] font-semibold">{pub.venue}</span>
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-2">{pub.title}</h3>

              <p className="text-xs font-mono text-[#94A3B8] mb-4">
                Authors: {pub.authors.join(', ')}
              </p>

              {/* Abstract */}
              <div className="mb-4">
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {pub.abstract}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#0B1120] border border-[#1E293B] text-[10px] font-mono text-[#00E5FF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E293B]">
                <div className="flex items-center gap-3">
                  {pub.pdfUrl && (
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#1D4ED8] transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  )}

                  {pub.codeUrl && (
                    <a
                      href={pub.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-[#0B1120] border border-[#1E293B] text-xs font-semibold text-[#00E5FF] flex items-center gap-1.5 hover:border-[#00E5FF]/40 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {pub.bibtex && (
                    <button
                      onClick={() => handleCopyBibtex(pub)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#0B1120] border border-[#1E293B] text-xs font-mono text-[#94A3B8] hover:text-white flex items-center gap-1.5 transition-all"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>BibTeX</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {pub.bibtex && (
                  <button
                    onClick={() =>
                      setExpandedBibtex(expandedBibtex === pub.id ? null : pub.id)
                    }
                    className="text-xs font-mono text-[#06B6D4] hover:underline flex items-center gap-1"
                  >
                    <span>{expandedBibtex === pub.id ? 'Hide Citation' : 'Show BibTeX'}</span>
                    {expandedBibtex === pub.id ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>

              {/* BibTeX Code Snippet Block */}
              {expandedBibtex === pub.id && pub.bibtex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 rounded-xl bg-[#0B1120] border border-[#1E293B] font-mono text-xs text-[#00E5FF] overflow-x-auto"
                >
                  <pre>{pub.bibtex}</pre>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Master's Research Intent */}
      <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0B1120] border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-white text-lg">Looking for Graduate Lab Opportunities</h3>
            <p className="text-xs text-[#94A3B8] mt-1 max-w-xl">
              I am actively seeking Master's thesis advising, research assistantships, and joint laboratory projects for 2026/2027.
            </p>
          </div>
        </div>
        <a
          href="mailto:akshat.mishra.robotics@gmail.com"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-xs font-semibold shrink-0 shadow-md shadow-[#2563EB]/30 transition-all hover:scale-105"
        >
          Discuss Academic Research
        </a>
      </div>
    </div>
  );
}
