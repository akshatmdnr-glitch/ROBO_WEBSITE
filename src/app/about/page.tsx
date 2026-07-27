'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Compass, GraduationCap, Award, CheckCircle2, ChevronRight, Download, Mail } from 'lucide-react';
import Link from 'next/link';
import { RESUME_DATA } from '@/data/resume';
import { MASTERS_ASPIRATIONS } from '@/data/research';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
          About Akshat Mishra
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#183A2D] mt-2">
          Engineering Resilient <span className="font-serif-accent font-normal text-[#214D3B]">spatial intelligence</span>
        </h1>
        <p className="text-base sm:text-lg text-[#66736C] mt-4 leading-relaxed">
          I am a Robotics Engineer, ROS2 Developer, and future Master’s student dedicated to building autonomous robots that operate with precision in unpredictable physical environments.
        </p>
      </div>

      {/* Grid: Bio & Aspirations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        {/* Left Column: Bio */}
        <div className="lg:col-span-2 space-y-6 text-[#66736C] leading-relaxed text-sm sm:text-base">
          <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-heading font-bold text-[#183A2D] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#214D3B]" />
              My Journey in Robotics
            </h2>
            <p>
              My passion for robotics began with a fundamental question: how can a machine build a internal representation of an unknown room and navigate safely through it using only noisy sensors?
            </p>
            <p>
              Over the past 4 years, I have transitioned from building basic micro-controller motor drivers to architecting complete ROS2 C++ lifecycle node pipelines, CUDA-accelerated LiDAR SLAM, and Model Predictive Control algorithms for physical Autonomous Mobile Robots (AMRs) and quadrupeds.
            </p>
            <p>
              I believe in a tight hardware-software co-design paradigm: a great robotics software engineer must understand motor torque curves, CAN bus latency jitter, and IMU noise characteristics as thoroughly as C++ memory management and factor graph optimization.
            </p>
          </div>

          <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-heading font-bold text-[#183A2D] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#214D3B]" />
              Master's Aspirations & Academic Goals
            </h2>
            <p>
              I am currently preparing for Master of Science applications in Robotics and Autonomous Systems for the 2026/2027 academic cycle.
            </p>
            <p>
              My goal in graduate school is to pursue fundamental research in 3D multi-modal SLAM state estimation (fusing LiDAR, stereo vision, and high-frequency IMU) and safety-critical trajectory optimization under harsh, unmapped field conditions.
            </p>
          </div>
        </div>

        {/* Right Column: Aspirations & Quick Info */}
        <div className="space-y-6">
          <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6">
            <h3 className="text-xs font-mono font-semibold text-[#214D3B] uppercase tracking-wider mb-4">
              Graduate Program Focus
            </h3>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA]">
                <span className="text-[#66736C] block text-[10px]">Target Degree</span>
                <span className="text-[#183A2D] font-bold">{MASTERS_ASPIRATIONS.targetDegree}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA]">
                <span className="text-[#66736C] block text-[10px]">Timeline</span>
                <span className="text-[#214D3B] font-bold">{MASTERS_ASPIRATIONS.targetTimeline}</span>
              </div>
            </div>

            <h4 className="text-xs font-mono font-semibold text-[#183A2D] uppercase tracking-wider mt-6 mb-3">
              Target Laboratories
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#66736C]">
              {MASTERS_ASPIRATIONS.preferredLabs.map((lab, idx) => (
                <li key={idx} className="p-2.5 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA]">
                  <span className="text-[#183A2D] font-semibold block">{lab.school}</span>
                  <span className="text-[11px] text-[#214D3B]">{lab.lab}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 text-center">
            <h3 className="font-heading font-bold text-[#183A2D] text-base">Let's Connect</h3>
            <p className="text-xs text-[#66736C] mt-2 mb-4">
              Interested in discussing research or prospective lab roles?
            </p>
            <Link
              href="/contact"
              className="w-full py-2.5 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] text-xs font-medium flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Akshat</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Technical Expertise Matrix */}
      <div className="mb-16">
        <div className="mb-8">
          <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
            Technical Competencies
          </span>
          <h2 className="text-3xl font-heading font-bold text-[#183A2D] mt-1">
            Engineering Skill Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6">
              <h3 className="font-heading font-bold text-[#183A2D] text-base mb-4 text-[#214D3B]">
                {cat.category}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#183A2D]">{skill.name}</span>
                      <span className="text-[#214D3B]">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#F8F6F1] border border-[#E6E2DA]">
                      <div
                        className="h-full rounded-full bg-[#214D3B]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
