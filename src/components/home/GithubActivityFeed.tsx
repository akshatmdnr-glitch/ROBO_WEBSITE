'use client';

import React from 'react';
import { GitCommit, GitFork, Star, GitPullRequest, Code, ExternalLink } from 'lucide-react';

export default function GithubActivityFeed() {
  const activities = [
    {
      repo: 'akshatmishra/aurabot-ros2',
      type: 'Commit to main',
      message: 'feat(nav2): optimized TEB planner obstacle clearance distance & inflation radius',
      time: '3 hours ago',
      stars: 48,
      forks: 14,
    },
    {
      repo: 'akshatmishra/pulse-slam-cuda',
      type: 'Published release v1.2.0',
      message: 'release: 14x faster CUDA voxel downsampling kernel with Eigen alignment',
      time: '2 days ago',
      stars: 92,
      forks: 23,
    },
    {
      repo: 'akshatmishra/microros-stm32-actuator',
      type: 'Merged Pull Request #8',
      message: 'fix(can-fd): solved FreeRTOS task buffer overflow under 1KHz joint telemetry',
      time: '4 days ago',
      stars: 64,
      forks: 19,
    },
    {
      repo: 'akshatmishra/titanquad-mpc',
      type: 'Commit to feature/cbf-safety',
      message: 'math: formulated convex quadratic program solver for stance leg force distribution',
      time: '1 week ago',
      stars: 110,
      forks: 31,
    },
  ];

  return (
    <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 shadow-xs relative overflow-hidden group">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E6E2DA] mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] flex items-center justify-center text-[#214D3B]">
            <GitCommit className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-[#183A2D] text-base">GitHub Activity & Contributions</h3>
            <p className="text-xs text-[#66736C] font-mono">Live code telemetry @akshatmdnr-glitch</p>
          </div>
        </div>
        <a
          href="https://github.com/akshatmdnr-glitch"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] hover:bg-[#EDF5EF] text-xs font-mono text-[#214D3B] flex items-center gap-1.5 transition-all"
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
            className="p-4 rounded-xl bg-[#F8F6F1]/80 border border-[#E6E2DA] hover:border-[#214D3B]/30 hover:bg-[#FCFBF8] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/item"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] text-[#214D3B]">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[#214D3B] group-hover/item:underline">
                    {item.repo}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EDF5EF] text-[#214D3B] font-medium">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-[#183A2D] font-mono mt-1 leading-snug">
                  {item.message}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#66736C] self-end sm:self-center">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                {item.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5 text-[#214D3B]" />
                {item.forks}
              </span>
              <span className="text-[11px] text-[#66736C]">{item.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Commit Graph Simulation Bar */}
      <div className="mt-6 pt-4 border-t border-[#E6E2DA] flex items-center justify-between text-xs text-[#66736C]">
        <span className="font-mono text-[11px]">842 contributions in the last year</span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-mono text-[#66736C]">Less</span>
          {[0.2, 0.4, 0.6, 0.8, 1.0].map((v, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: `rgba(33, 77, 59, ${v})` }}
            />
          ))}
          <span className="text-[10px] font-mono text-[#66736C]">More</span>
        </div>
      </div>
    </div>
  );
}
