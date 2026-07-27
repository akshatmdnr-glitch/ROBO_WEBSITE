'use client';

import React from 'react';
import { Cpu, GraduationCap, Mail } from 'lucide-react';
import Link from 'next/link';
import { MASTERS_ASPIRATIONS } from '@/data/research';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-[#6C8FEF] uppercase tracking-wider font-medium">
          About Akshat Mishra
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#1E293B] mt-2">
          Building <span className="font-serif-accent font-normal text-[#6C8FEF]">spatial intelligence</span> & Perception
        </h1>
        <p className="text-base sm:text-lg text-[#52607B] mt-4 leading-relaxed">
          I am an aspiring Robotics Engineer and future graduate researcher dedicated to building autonomous mobile robots, ROS2 navigation stacks, and real-time 3D perception algorithms.
        </p>
      </div>

      {/* Grid: Bio & Aspirations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        {/* Left Column: Bio */}
        <div className="lg:col-span-2 space-y-6 text-[#52607B] leading-relaxed text-sm sm:text-base">
          <div className="bg-[#FCFBF8] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-heading font-bold text-[#1E293B] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#6C8FEF]" />
              My Journey in Robotics
            </h2>
            <p>
              My passion for robotics began with a fundamental question: how can a physical machine map an unknown environment and navigate through it autonomously using noisy sensors?
            </p>
            <p>
              I document my learning journey across physical builds: building ROS2 node architectures, 2D LiDAR SLAM mapping with Cartographer, micro-ROS firmware for ESP32 and STM32, and quadcopter control with PX4.
            </p>
            <p>
              I believe in a tight hardware-software co-design: a great robotics engineer must understand motor drive telemetry and sensor noise characteristics as thoroughly as C++ memory management and spatial transforms.
            </p>
          </div>

          <div className="bg-[#FCFBF8] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-heading font-bold text-[#1E293B] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#6C8FEF]" />
              Master's Aspirations & Academic Goals
            </h2>
            <p>
              I am preparing for Master of Science applications in Robotics and Autonomous Systems for upcoming academic cycles.
            </p>
            <p>
              My goal in graduate school is to pursue research in 3D multi-modal SLAM state estimation (fusing LiDAR, stereo vision, and high-frequency IMU) and trajectory optimization under unmapped field conditions.
            </p>
          </div>
        </div>

        {/* Right Column: Aspirations & Quick Info */}
        <div className="space-y-6">
          <div className="bg-[#FCFBF8] border border-[#E2E8F0] rounded-2xl p-6">
            <h3 className="text-xs font-mono font-semibold text-[#6C8FEF] uppercase tracking-wider mb-4">
              Graduate Program Focus
            </h3>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-[#F8F6F1] border border-[#E2E8F0]">
                <span className="text-[#52607B] block text-[10px]">Target Degree</span>
                <span className="text-[#1E293B] font-bold">{MASTERS_ASPIRATIONS.targetDegree}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F6F1] border border-[#E2E8F0]">
                <span className="text-[#52607B] block text-[10px]">Timeline</span>
                <span className="text-[#6C8FEF] font-bold">{MASTERS_ASPIRATIONS.targetTimeline}</span>
              </div>
            </div>

            <h4 className="text-xs font-mono font-semibold text-[#1E293B] uppercase tracking-wider mt-6 mb-3">
              Target Laboratories
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#52607B]">
              {MASTERS_ASPIRATIONS.preferredLabs.map((lab, idx) => (
                <li key={idx} className="p-2.5 rounded-lg bg-[#F8F6F1] border border-[#E2E8F0]">
                  <span className="text-[#1E293B] font-semibold block">{lab.school}</span>
                  <span className="text-[11px] text-[#6C8FEF]">{lab.lab}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FCFBF8] border border-[#E2E8F0] rounded-2xl p-6 text-center">
            <h3 className="font-heading font-bold text-[#1E293B] text-base">Let's Connect</h3>
            <p className="text-xs text-[#52607B] mt-2 mb-4">
              Interested in discussing research or prospective lab roles?
            </p>
            <Link
              href="/contact"
              className="w-full py-2.5 rounded-lg bg-[#6C8FEF] hover:bg-[#5A7DE6] text-[#FCFBF8] text-xs font-medium flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Akshat</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
