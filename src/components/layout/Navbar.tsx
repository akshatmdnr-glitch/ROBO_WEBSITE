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
          ? 'bg-[#F3EEF9]/90 backdrop-blur-md border-b border-[#E5D9F2] shadow-lg shadow-[#7C3AED]/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#9333EA] p-[1px] shadow-lg shadow-[#7C3AED]/20 group-hover:shadow-[#7C3AED]/40 transition-all duration-300">
            <div className="w-full h-full bg-[#FFFFFF] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[#7C3AED] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-[#1E152A] tracking-wide flex items-center gap-1.5">
              AKSHAT MISHRA
              <span className="inline-block w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#7C3AED] uppercase">
              ROBOTICS LAB // ROS2
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FFFFFF]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E5D9F2] shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#645874] hover:text-[#1E152A] hover:bg-[#F3EEF9]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#9333EA] rounded-full -z-10 shadow-sm shadow-[#7C3AED]/30"
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
          <div className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5D9F2] flex items-center gap-2 text-[11px] font-mono text-[#645874]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>SYS: ONLINE</span>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:from-[#6D28D9] hover:to-[#7E22CE] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#7C3AED]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E5D9F2] text-[#645874] hover:text-[#1E152A] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#7C3AED]" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#F3EEF9]/95 backdrop-blur-xl border-b border-[#E5D9F2] px-4 pt-4 pb-6 mt-3 shadow-2xl"
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
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white font-bold shadow-md shadow-[#7C3AED]/30'
                        : 'bg-[#FFFFFF] text-[#645874] hover:text-[#1E152A] hover:bg-[#E5D9F2]/50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#7C3AED]'}`} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[#E5D9F2] flex items-center justify-between text-xs font-mono text-[#645874]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                ROS2 Humble / Jazzy Ready
              </span>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#7C3AED] hover:underline font-semibold"
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
