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
        <span className="text-xs font-mono text-[#214D3B] uppercase tracking-wider font-medium">
          Initiate Telemetry & Discussion
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#183A2D] mt-2">
          Contact <span className="font-serif-accent font-normal text-[#214D3B]">Akshat Mishra</span>
        </h1>
        <p className="text-base sm:text-lg text-[#66736C] mt-4 leading-relaxed">
          Open to Master’s lab research opportunities, ROS2 consulting, technical workshops, and open-source robotics collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left 2 Cols: Interactive Form */}
        <div className="lg:col-span-2 bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 sm:p-10 shadow-xs relative">
          <h2 className="text-xl font-heading font-bold text-[#183A2D] mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#214D3B]" />
            Send a Direct Transmission
          </h2>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EDF5EF] border border-emerald-600/30 flex items-center justify-center text-emerald-700 mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#183A2D]">Transmission Received!</h3>
                <p className="text-sm text-[#66736C] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-[#183A2D] font-semibold">{name}</span>. I will review your message regarding <span className="text-[#214D3B] font-mono">{selectedTopic}</span> and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setOrganization('');
                  }}
                  className="mt-6 px-6 py-2.5 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] text-xs font-mono text-[#214D3B] hover:bg-[#EDF5EF] transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Topic Selector Buttons */}
                <div>
                  <label className="block text-xs font-mono text-[#66736C] uppercase tracking-wider mb-2">
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
                            ? 'bg-[#214D3B] text-[#FCFBF8] font-semibold shadow-xs'
                            : 'bg-[#F8F6F1] text-[#66736C] hover:text-[#183A2D] border border-[#E6E2DA]'
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
                    <label className="block text-xs font-mono text-[#66736C] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] focus:border-[#214D3B] text-xs text-[#183A2D] placeholder-[#66736C] outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-[#66736C] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane.doe@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] focus:border-[#214D3B] text-xs text-[#183A2D] placeholder-[#66736C] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-xs font-mono text-[#66736C] uppercase tracking-wider mb-2">
                    University / Lab / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Robotics Research Group / Tech Corp"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] focus:border-[#214D3B] text-xs text-[#183A2D] placeholder-[#66736C] outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-[#66736C] uppercase tracking-wider mb-2">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Briefly describe your lab inquiry, collaboration topic, or question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] focus:border-[#214D3B] text-xs text-[#183A2D] placeholder-[#66736C] outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-lg bg-[#214D3B] hover:bg-[#183A2D] text-[#FCFBF8] font-medium text-xs flex items-center justify-center gap-2 shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {submitting ? (
                    <span className="font-mono animate-pulse">Sending Transmission...</span>
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
          <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6 space-y-6">
            <h3 className="font-heading font-bold text-[#183A2D] text-lg border-b border-[#E6E2DA] pb-4">
              Direct Channels
            </h3>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] text-[#214D3B] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#66736C] block text-[10px]">Email</span>
                  <a
                    href="mailto:akshatmdnr@gmail.com"
                    className="text-[#183A2D] hover:text-[#214D3B] font-medium transition-colors"
                  >
                    akshatmdnr@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] text-[#214D3B] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#66736C] block text-[10px]">Current Location</span>
                  <span className="text-[#183A2D]">India (Open to Global MS Opportunities)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#F8F6F1] border border-[#E6E2DA] text-[#214D3B] shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#66736C] block text-[10px]">Office Hours / Chat</span>
                  <span className="text-emerald-700 font-bold">Available by appointment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FCFBF8] border border-[#E6E2DA] rounded-2xl p-6">
            <h3 className="font-heading font-bold text-[#183A2D] text-base mb-3">Social & Profiles</h3>
            <div className="space-y-2 text-xs font-mono">
              <a
                href="https://github.com/akshatmdnr-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] hover:border-[#214D3B]/30 text-[#66736C] hover:text-[#183A2D] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[#214D3B]" />
                  <span>GitHub (@akshatmdnr-glitch)</span>
                </div>
                <span>→</span>
              </a>

              <a
                href="https://linkedin.com/in/akshatmishra-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#F8F6F1] border border-[#E6E2DA] hover:border-[#214D3B]/30 text-[#66736C] hover:text-[#183A2D] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-[#214D3B]" />
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
