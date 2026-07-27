'use client';

import React from 'react';
import { GitCommit, GitFork, Star, Code, ExternalLink } from 'lucide-react';

export default function GithubActivityFeed() {
  const activities = [
    {
      repo: 'akshatmdnr-glitch/ros2-learning-journey',
      type: 'Commit to main',
      message: 'feat(tf2): added custom C++ transform listener node with non-blocking callbacks',
      time: '3 hours ago',
      stars: 18,
      forks: 5,
    },
    {
      repo: 'akshatmdnr-glitch/lidar-mapping-robot',
      type: 'Published release v1.0.0',
      message: 'release: 2D Cartographer SLAM tuning for indoor obstacle costmap filtering',
      time: '2 days ago',
      stars: 34,
      forks: 8,
    },
    {
      repo: 'akshatmdnr-glitch/esp32-robotics-projects',
      type: 'Merged Pull Request #4',
      message: 'fix(free-rtos): solved encoder pulse buffer overflow under high PWM velocity',
      time: '4 days ago',
      stars: 22,
      forks: 6,
    },
    {
      repo: 'akshatmdnr-glitch/drone-project',
      type: 'Commit to feature/offboard',
      message: 'px4: offboard Micro XRCE-DDS trajectory setpoint publisher verification',
      time: '1 week ago',
      stars: 29,
      forks: 7,
    },
  ];

  return (
    <div className="bg-[#FCFBF8] border border-[#E2E8F0] rounded-2xl p-6 shadow-xs relative overflow-hidden group">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#F8F6F1] border border-[#E2E8F0] flex items-center justify-center text-[#6C8FEF]">
            <GitCommit className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-[#1E293B] text-base">GitHub Activity & Code Telemetry</h3>
            <p className="text-xs text-[#52607B] font-mono">Development logs @akshatmdnr-glitch</p>
          </div>
        </div>
        <a
          href="https://github.com/akshatmdnr-glitch"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-[#FCFBF8] border border-[#E2E8F0] hover:bg-[#EAF2FF] text-xs font-mono text-[#6C8FEF] flex items-center gap-1.5 transition-all"
        >
          <span>Follow on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Activity Timeline List */}
      <div className="space-y-3">
        {activities.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#F8F6F1]/80 border border-[#E2E8F0] hover:border-[#6C8FEF]/30 hover:bg-[#FCFBF8] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/item"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 rounded-lg bg-[#FCFBF8] border border-[#E2E8F0] text-[#6C8FEF]">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[#6C8FEF] group-hover/item:underline">
                    {item.repo}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAF2FF] text-[#6C8FEF] font-medium">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-[#1E293B] font-mono mt-1 leading-snug">
                  {item.message}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#52607B] self-end sm:self-center">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                {item.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5 text-[#6C8FEF]" />
                {item.forks}
              </span>
              <span className="text-[11px] text-[#52607B]">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
