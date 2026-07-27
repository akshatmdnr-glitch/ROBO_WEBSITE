import React from 'react';
import Link from 'next/link';
import { Cpu, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/BrandIcons';

export default function Footer() {
  return (
    <footer className="bg-[#F8F6F1] border-t border-[#E2E8F0] relative z-10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E2E8F0]">
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FCFBF8] border border-[#E2E8F0] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#6C8FEF]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#1E293B] text-base">AKSHAT MISHRA</h3>
                <p className="text-[10px] font-mono text-[#6C8FEF] uppercase">ROBOTICS & PERCEPTION</p>
              </div>
            </div>
            <p className="text-xs text-[#52607B] leading-relaxed">
              Personal portfolio, research journal, and engineering notebook exploring autonomous robots, ROS2, and 3D perception.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/akshatmdnr-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FCFBF8] border border-[#E2E8F0] flex items-center justify-center text-[#52607B] hover:text-[#6C8FEF] hover:border-[#6C8FEF]/40 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/akshatmishra-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FCFBF8] border border-[#E2E8F0] flex items-center justify-center text-[#52607B] hover:text-[#6C8FEF] hover:border-[#6C8FEF]/40 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:akshatmdnr@gmail.com"
                className="w-8 h-8 rounded-lg bg-[#FCFBF8] border border-[#E2E8F0] flex items-center justify-center text-[#52607B] hover:text-[#6C8FEF] hover:border-[#6C8FEF]/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C8FEF]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#52607B]">
              <li>
                <Link href="/projects" className="hover:text-[#1E293B] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-[#1E293B] transition-colors">
                  Research Journey
                </Link>
              </li>
              <li>
                <Link href="/learning-hub" className="hover:text-[#1E293B] transition-colors">
                  Resources Hub
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#1E293B] transition-colors">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#1E293B] transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stack & Focus */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C8FEF]">
              Core Focus
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['ROS2 Humble', 'C++20', 'LiDAR SLAM', 'PX4 Autopilot', 'ESP32', 'Computer Vision', 'Embedded Systems'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded bg-[#FCFBF8] border border-[#E2E8F0] text-[11px] font-mono text-[#52607B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Research Intent */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C8FEF]">
              Research Intent
            </h4>
            <p className="text-xs text-[#52607B] leading-relaxed">
              Documenting projects and building autonomous platforms in preparation for graduate studies in robotics.
            </p>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1 text-xs text-[#6C8FEF] hover:underline font-medium pt-1"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52607B]">
          <p>© {new Date().getFullYear()} Akshat Mishra. Robotics & Spatial Intelligence Notebook.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Next.js • Tailwind CSS • Framer Motion</span>
            <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
            <span className="text-[#6C8FEF]">Portfolio v1.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
