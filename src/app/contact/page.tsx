'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Calendar, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import confetti from 'canvas-confetti';

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

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00E5FF', '#06B6D4', '#2563EB', '#ffffff'],
        });
      } catch (err) {
        console.error(err);
      }
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold">
          Initiate Telemetry & Discussion
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          Contact Akshat Mishra
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
          Open to Master’s lab research opportunities, ROS2 consulting, technical workshops, and open-source robotics collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left 2 Cols: Interactive Form */}
        <div className="lg:col-span-2 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#00E5FF]" />
            Send a Direct Transmission
          </h2>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B1120] border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">Transmission Received!</h3>
                <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-white font-semibold">{name}</span>. I will review your message regarding <span className="text-[#00E5FF] font-mono">{selectedTopic}</span> and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setOrganization('');
                  }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-[#0B1120] border border-[#1E293B] text-xs font-mono text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Topic Selector Buttons */}
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                    Inquiry Topic
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          selectedTopic === topic
                            ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold shadow-md shadow-[#2563EB]/30'
                            : 'bg-[#0B1120] text-[#94A3B8] hover:text-white border border-[#1E293B]'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-[#1E293B] focus:border-[#00E5FF] text-xs text-white placeholder-[#94A3B8]/60 outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane.doe@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-[#1E293B] focus:border-[#00E5FF] text-xs text-white placeholder-[#94A3B8]/60 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                    University / Lab / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Robotics Research Group / Tech Corp"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-[#1E293B] focus:border-[#00E5FF] text-xs text-white placeholder-[#94A3B8]/60 outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Briefly describe your lab inquiry, collaboration topic, or question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-[#1E293B] focus:border-[#00E5FF] text-xs text-white placeholder-[#94A3B8]/60 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-[#1D4ED8] hover:to-[#0891B2] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {submitting ? (
                    <span className="font-mono animate-pulse">Encrypting & Sending Transmission...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* Right 1 Col: Direct Info */}
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 space-y-6">
            <h3 className="font-heading font-bold text-white text-lg border-b border-[#1E293B] pb-4">
              Direct Channels
            </h3>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#0B1120] text-[#00E5FF] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#94A3B8] block text-[10px]">Email</span>
                  <a
                    href="mailto:akshatmdnr@gmail.com"
                    className="text-white hover:text-[#00E5FF] transition-colors"
                  >
                    akshatmdnr@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#0B1120] text-[#06B6D4] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#94A3B8] block text-[10px]">Current Location</span>
                  <span className="text-white">India (Open to Global MS Opportunities)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#0B1120] text-[#2563EB] shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#94A3B8] block text-[10px]">Office Hours / Chat</span>
                  <span className="text-emerald-400 font-bold">Available by appointment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6">
            <h3 className="font-heading font-bold text-white text-base mb-3">Social & Profiles</h3>
            <div className="space-y-2 text-xs font-mono">
              <a
                href="https://github.com/akshatmdnr-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0B1120] border border-[#1E293B] hover:border-[#00E5FF]/40 text-[#94A3B8] hover:text-white flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[#00E5FF]" />
                  <span>GitHub (@akshatmdnr-glitch)</span>
                </div>
                <span>→</span>
              </a>

              <a
                href="https://linkedin.com/in/akshatmishra-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0B1120] border border-[#1E293B] hover:border-[#00E5FF]/40 text-[#94A3B8] hover:text-white flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-[#06B6D4]" />
                  <span>LinkedIn (Akshat Mishra)</span>
                </div>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
