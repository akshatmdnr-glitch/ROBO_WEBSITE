'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research Journey' },
  { href: '/roadmaps', label: 'Roadmaps' },
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
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DED3] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg bg-[#FFFBF7] border border-[#E8DED3] flex items-center justify-center shadow-xs">
            <Cpu className="w-4 h-4 text-[#BC7A61]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm text-[#1E1E1E] tracking-tight flex items-center gap-1.5">
              Robofolio
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#BC7A61]" />
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#666666] uppercase">
              Robotics & Perception
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FFFBF7] backdrop-blur-md px-3 py-1 rounded-full border border-[#E8DED3] shadow-xs">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#FFFBF7] font-semibold'
                    : 'text-[#666666] hover:text-[#1E1E1E] hover:bg-[#F8EAE3]/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#BC7A61] rounded-full -z-10 shadow-xs"
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
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-[#BC7A61] hover:bg-[#A96B54] text-[#FFFBF7] text-xs font-medium tracking-wide shadow-xs transition-all"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-[#FFFBF7] border border-[#E8DED3] text-[#666666] hover:text-[#1E1E1E] transition-colors"
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
            className="lg:hidden bg-[#FFFBF7] border-b border-[#E8DED3] px-4 py-6 space-y-3"
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
                        ? 'bg-[#BC7A61] text-[#FFFBF7] font-bold'
                        : 'text-[#666666] hover:text-[#1E1E1E] hover:bg-[#F8EAE3]/50'
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
