'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

const TOPICS = [
  'Master’s Research / Lab Inquiry',
  'ROS2 Project Collaboration',
  'Speaking / Workshop',
  'General Inquiry',
] as const;

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>(TOPICS[0]);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <span className="text-xs font-mono text-[#6B7280] uppercase tracking-wider font-medium">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#111827] mt-2">
          Contact <span className="font-serif-accent font-normal text-[#4B5563]">Akshat Mishra</span>
        </h1>
        <p className="text-base sm:text-lg text-[#6B7280] mt-4 leading-relaxed">
          Open to Master’s lab research opportunities, ROS2 consulting, technical discussions, and robotics collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left 2 Cols: Form */}
        <div className="lg:col-span-2 bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-6 sm:p-10 shadow-xs relative">
          <h2 className="text-xl font-heading font-bold text-[#111827] mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#4B5563]" />
            Send a Direct Message
          </h2>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] mx-auto shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#111827]">Message Received!</h3>
                <p className="text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-[#111827] font-semibold">{name}</span>. I will review your message regarding <span className="text-[#4B5563] font-mono">{selectedTopic}</span> and respond as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setOrganization('');
                  }}
                  className="mt-6 px-6 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5E7EB] text-xs font-mono text-[#4B5563] hover:bg-[#FFFFFF] transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Topic selector */}
                <div>
                  <label className="block text-xs font-mono text-[#6B7280] uppercase tracking-wider mb-2">
                    Inquiry Topic
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {TOPICS.map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono text-left transition-all ${
                          selectedTopic === topic
                            ? 'bg-[#4B5563] text-[#FFFFFF] font-medium shadow-xs'
                            : 'bg-[#FAF8F5] text-[#6B7280] hover:text-[#111827] border border-[#E5E7EB]'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#6B7280] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alexander Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5E7EB] focus:border-[#4B5563] text-xs text-[#111827] placeholder-[#6B7280] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#6B7280] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alexander@robotics-lab.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5E7EB] focus:border-[#4B5563] text-xs text-[#111827] placeholder-[#6B7280] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#6B7280] uppercase tracking-wider mb-1">
                    Institution / University / Company
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Autonomous Systems Lab, ETH Zurich"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5E7EB] focus:border-[#4B5563] text-xs text-[#111827] placeholder-[#6B7280] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#6B7280] uppercase tracking-wider mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your research inquiry, project context, or question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5E7EB] focus:border-[#4B5563] text-xs text-[#111827] placeholder-[#6B7280] outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-[#4B5563] hover:bg-[#374151] text-[#FFFFFF] text-xs font-medium tracking-wide shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* Right 1 Col: Info */}
        <div className="space-y-6">
          <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-6 shadow-xs">
            <h3 className="text-xs font-mono font-semibold text-[#111827] uppercase tracking-wider mb-4">
              Direct Channels
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E7EB]">
                <span className="text-[10px] font-mono text-[#6B7280] uppercase block">Primary Email</span>
                <a
                  href="mailto:akshatmdnr@gmail.com"
                  className="text-xs font-mono text-[#111827] font-bold hover:text-[#4B5563] transition-colors"
                >
                  akshatmdnr@gmail.com
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E7EB]">
                <span className="text-[10px] font-mono text-[#6B7280] uppercase block">Code Repositories</span>
                <a
                  href="https://github.com/akshatmdnr-glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#111827] font-bold hover:text-[#4B5563] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <GithubIcon className="w-4 h-4 text-[#4B5563]" />
                  <span>github.com/akshatmdnr-glitch</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E7EB]">
                <span className="text-[10px] font-mono text-[#6B7280] uppercase block">Professional Network</span>
                <a
                  href="https://linkedin.com/in/akshatmishra-robotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#111827] font-bold hover:text-[#4B5563] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#4B5563]" />
                  <span>linkedin.com/in/akshatmishra-robotics</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
