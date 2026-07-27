'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Terminal, FileText, Compass, BookOpen, Layers, Send, User } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research Journey' },
  { href: '/learning-hub', label: 'Resources Hub' },
  { href: '/blog', label: 'Notes' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
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
          ? 'bg-[#F8F6F1]/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-[#6C8FEF] p-[1px] shadow-xs transition-all duration-300">
            <div className="w-full h-full bg-[#FCFBF8] rounded-[7px] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#6C8FEF] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base text-[#1E293B] tracking-tight flex items-center gap-1.5">
              AKSHAT MISHRA
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6C8FEF]" />
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#52607B] uppercase">
              ROBOTICS & PERCEPTION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FCFBF8] backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E2E8F0] shadow-xs">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#FCFBF8] font-semibold'
                    : 'text-[#52607B] hover:text-[#1E293B] hover:bg-[#EAF2FF]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#6C8FEF] rounded-full -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Status & Contact CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-[#FCFBF8] border border-[#E2E8F0] flex items-center gap-2 text-[11px] font-mono text-[#52607B]">
            <span className="w-2 h-2 rounded-full bg-[#6C8FEF] animate-pulse" />
            <span>PORTFOLIO v1.1</span>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-[#6C8FEF] hover:bg-[#5A7DE6] text-[#FCFBF8] text-xs font-medium tracking-wide shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-[#FCFBF8] border border-[#E2E8F0] text-[#52607B] hover:text-[#1E293B] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FCFBF8] border-b border-[#E2E8F0] px-4 py-6 space-y-3"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#6C8FEF] text-[#FCFBF8] font-bold'
                        : 'text-[#52607B] hover:text-[#1E293B] hover:bg-[#EAF2FF]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
