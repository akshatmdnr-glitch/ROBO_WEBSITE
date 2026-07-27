import React from 'react';
import Link from 'next/link';
import { Cpu, Mail, BookOpen, ArrowUpRight, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/BrandIcons';

export default function Footer() {
  return (
    <footer className="bg-[#F3EEF9] border-t border-[#E5D9F2] relative z-10 pt-16 pb-12 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E5D9F2]">
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5D9F2] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#1E152A] text-base">AKSHAT MISHRA</h3>
                <p className="text-[10px] font-mono text-[#7C3AED]">ROBOTICS RESEARCH LAB</p>
              </div>
            </div>
            <p className="text-xs text-[#645874] leading-relaxed">
              Engineering spatial intelligence, ROS2 control systems, and real-time SLAM algorithms for next-generation autonomous robots.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/akshatmdnr-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#E5D9F2] flex items-center justify-center text-[#645874] hover:text-[#7C3AED] hover:border-[#7C3AED]/40 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/akshatmishra-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#E5D9F2] flex items-center justify-center text-[#645874] hover:text-[#7C3AED] hover:border-[#7C3AED]/40 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:akshatmdnr@gmail.com"
                className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#E5D9F2] flex items-center justify-center text-[#645874] hover:text-[#7C3AED] hover:border-[#7C3AED]/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#E5D9F2] flex items-center justify-center text-[#645874] hover:text-[#7C3AED] hover:border-[#7C3AED]/40 transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7C3AED]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#645874]">
              <li>
                <Link href="/projects" className="hover:text-[#1E152A] transition-colors">
                  Robotics Projects
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-[#1E152A] transition-colors">
                  Research & Publications
                </Link>
              </li>
              <li>
                <Link href="/learning-hub" className="hover:text-[#1E152A] transition-colors">
                  Learning Hub & Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#1E152A] transition-colors">
                  Technical Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#1E152A] transition-colors">
                  Electronics & ROS2 Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stack & Focus */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7C3AED]">
              Core Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['ROS2 Humble', 'C++20', 'CUDA', 'Nav2', 'Cartographer', 'STM32 micro-ROS', 'Isaac Sim', 'Python', 'OpenCV'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded bg-[#FFFFFF] border border-[#E5D9F2] text-[11px] font-mono text-[#645874]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: MS & Research Intent */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7C3AED]">
              Master's Aspirations
            </h4>
            <p className="text-xs text-[#645874] leading-relaxed">
              Seeking Master's opportunities in Robotics & Autonomous Systems starting 2026/2027. Open to lab collaborations.
            </p>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1 text-xs text-[#7C3AED] hover:underline font-medium pt-1"
            >
              <span>View Full Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#645874]">
          <p>© {new Date().getFullYear()} Akshat Mishra. Built for the future of robotics.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Next.js • Tailwind CSS • Framer Motion</span>
            <span className="w-1 h-1 rounded-full bg-[#E5D9F2]" />
            <span className="text-[#7C3AED]">Vercel Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
