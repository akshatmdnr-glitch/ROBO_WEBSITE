'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Terminal, FileText, Compass, BookOpen, Layers, Send, User } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: Cpu },
  { href: '/about', label: 'About', icon: User },
  { href: '/projects', label: 'Projects', icon: Terminal },
  { href: '/research', label: 'Research', icon: Compass },
  { href: '/learning-hub', label: 'Learning Hub', icon: Layers },
  { href: '/blog', label: 'Blog', icon: FileText },
  { href: '/resources', label: 'Resources', icon: BookOpen },
  { href: '/resume', label: 'Resume', icon: FileText },
  { href: '/contact', label: 'Contact', icon: Send },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6F1]/90 backdrop-blur-md border-b border-[#E6E2DA] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-[#214D3B] p-[1px] shadow-xs transition-all duration-300">
            <div className="w-full h-full bg-[#FCFBF8] rounded-[7px] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#214D3B] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base text-[#183A2D] tracking-tight flex items-center gap-1.5">
              AKSHAT MISHRA
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#214D3B]" />
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#66736C] uppercase">
              ROBOTICS RESEARCH LAB
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FCFBF8] backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E6E2DA] shadow-xs">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#FCFBF8] font-semibold'
                    : 'text-[#66736C] hover:text-[#183A2D] hover:bg-[#EDF5EF]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#214D3B] rounded-full -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* System Status & Contact CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-[#FCFBF8] border border-[#E6E2DA] flex items-center gap-2 text-[11px] font-mono text-[#66736C]">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>LAB: ACTIVE</span>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] text-xs font-medium tracking-wide shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#FCFBF8] border border-[#E6E2DA] text-[#66736C] hover:text-[#183A2D] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#214D3B]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#FCFBF8] border-b border-[#E6E2DA] px-4 pt-4 pb-6 mt-3 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-[#214D3B] text-[#FCFBF8] font-semibold'
                        : 'bg-[#F8F6F1] text-[#66736C] hover:text-[#183A2D] hover:bg-[#EDF5EF]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#FCFBF8]' : 'text-[#214D3B]'}`} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[#E6E2DA] flex items-center justify-between text-xs font-mono text-[#66736C]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                ROS2 Humble / Jazzy
              </span>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#214D3B] hover:underline font-semibold"
              >
                Contact Lab →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
