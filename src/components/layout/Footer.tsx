import React from 'react';
import Link from 'next/link';
import { Cpu, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

export default function Footer() {
  return (
    <footer className="bg-[#F8F6F1] border-t border-[#E5E1D8] relative z-10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E5E1D8]">
          {/* Column 1: Brand */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FCFBF8] border border-[#E5E1D8] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[#243B55]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#1F2937] text-sm">AKSHAT MISHRA</h3>
                <p className="text-[10px] font-mono text-[#6B7280] uppercase">ROBOTICS & PERCEPTION</p>
              </div>
            </div>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Personal portfolio, research journal, and engineering notebook exploring autonomous robots, ROS2, and spatial perception.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/akshatmdnr-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FCFBF8] border border-[#E5E1D8] flex items-center justify-center text-[#6B7280] hover:text-[#1F2937] hover:border-[#CBD5E1] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4 text-[#243B55]" />
              </a>
              <a
                href="https://linkedin.com/in/akshatmishra-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FCFBF8] border border-[#E5E1D8] flex items-center justify-center text-[#6B7280] hover:text-[#1F2937] hover:border-[#CBD5E1] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-[#243B55]" />
              </a>
              <a
                href="mailto:akshatmdnr@gmail.com"
                className="w-8 h-8 rounded-lg bg-[#FCFBF8] border border-[#E5E1D8] flex items-center justify-center text-[#6B7280] hover:text-[#1F2937] hover:border-[#CBD5E1] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-[#243B55]" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1F2937]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#6B7280]">
              <li>
                <Link href="/projects" className="hover:text-[#1F2937] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-[#1F2937] transition-colors">
                  Research Journey
                </Link>
              </li>
              <li>
                <Link href="/learning-hub" className="hover:text-[#1F2937] transition-colors">
                  Resources Hub
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#1F2937] transition-colors">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#1F2937] transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stack */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1F2937]">
              Core Focus
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['ROS2 Humble', 'C++20', 'LiDAR SLAM', 'PX4 Autopilot', 'ESP32', 'Computer Vision', 'Embedded Systems'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded bg-[#FCFBF8] border border-[#E5E1D8] text-[11px] font-mono text-[#6B7280]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Research Intent */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1F2937]">
              Research Intent
            </h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Documenting projects and building autonomous platforms in preparation for graduate studies in robotics.
            </p>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1 text-xs text-[#243B55] hover:underline font-medium pt-1"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© {new Date().getFullYear()} Akshat Mishra. Engineering Notebook.</p>
          <div className="flex items-center gap-3 text-[11px] font-mono text-[#6B7280]">
            <span>Next.js • Tailwind CSS • Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
