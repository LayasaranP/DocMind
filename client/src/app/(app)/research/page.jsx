"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, FileText, ArrowRight, BookOpen, Globe, LayoutDashboard, UploadCloud, MoreHorizontal, Link as LinkIcon } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCards';
import Button from '@/components/ui/Button';

const Research = () => {
  const [query, setQuery] = useState('Impact of Quantum Computing on High-Frequency Trading algorithms by 2030');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState({
    title: "Quantum Computing in HFT: A 2030 Outlook",
    generatedTime: "2 mins ago",
    sourcesCount: 12,
    confidence: "High Confidence",
    executiveSummary: `The integration of quantum computing into high-frequency trading (HFT) represents a paradigm shift expected to materialize by the late 2020s. Unlike classical algorithms limited by binary processing, quantum algorithms utilize superposition to analyze vast datasets simultaneously <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-cyan-600 rounded-full align-text-top">1</span>. This capability will likely render current arbitrage strategies obsolete, pushing firms towards quantum-resistant cryptography and optimization models <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-cyan-600 rounded-full align-text-top">2</span>.`,
    sources: [
      { id: 1, source: 'IBM Research', date: 'Nov 2024', title: 'Quantum Advantage in Financial Services', snippet: '...demonstrating how quantum algorithms can reduce calculation times for complex derivatives from...' },
      { id: 2, source: 'Bloomberg Tech', date: 'Jan 2025', title: 'The Race for HFT Supremacy', snippet: 'Top firms are quietly acquiring quantum hardware startups to gain nanosecond advantages in...' },
      { id: 3, source: 'MIT Technology Review', date: 'Dec 2024', title: 'Quantum Algorithms in Finance', snippet: 'Detailed analysis of potential quantum applications in market prediction and risk management...' },
    ]
  });

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    // In a real app, you'd fetch results here. For now, we use the mock state.
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header and Search */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white">What do you want to research today?</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">AI-powered research assistant with source citations</p>
          
          <div className="relative max-w-3xl mx-auto">
            <GlassCard className="p-4 relative z-10" hover={false}>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Ask a research question..."
                    className="
                      w-full pl-12 pr-4 py-3 rounded-xl
                      bg-gray-900 border border-gray-800
                      text-white placeholder-gray-500
                      focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10
                      transition-all duration-300
                    "
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm hover:bg-cyan-500/20 transition-colors">
                      <Globe className="w-4 h-4" />
                      Web Sources
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 text-gray-400 text-sm hover:bg-gray-700 transition-colors">
                      <LayoutDashboard className="w-4 h-4" />
                      Internal Docs
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 text-gray-400 text-sm hover:bg-gray-700 transition-colors">
                      <UploadCloud className="w-4 h-4" />
                      Upload PDF
                    </button>
                  </div>
                  <Button 
                    onClick={handleSearch} 
                    disabled={isSearching}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg shadow-lg shadow-cyan-500/20"
                  >
                    {isSearching ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Searching...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Deep Research
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </GlassCard>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center text-gray-500 text-sm">
              <Sparkles className="w-3 h-3 mr-2 text-cyan-400" />
              Uses 12 tokens per search • Approx time: 45s
            </div>
          </div>
        </div>

        {/* Results */}
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Main Article */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8 h-full bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white">{results.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full" />
                      Generated {results.generatedTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {results.sourcesCount} Sources Analyzed
                    </span>
                    <span className="flex items-center gap-1 text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      {results.confidence}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <LayoutDashboard className="w-5 h-5 text-cyan-400" />
                      Executive Summary
                    </h3>
                    <p 
                      className="text-gray-300 leading-relaxed text-lg"
                      dangerouslySetInnerHTML={{ __html: results.executiveSummary }}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-6">
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                      <LinkIcon className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                      <BookOpen className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Sidebar Sources */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Cited Sources
              </h3>
              <div className="space-y-4">
                {results.sources.map((source, i) => (
                  <GlassCard key={i} className="p-4 bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between relative">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Globe className="w-3 h-3" />
                          {source.source}
                          <span>•</span>
                          {source.date}
                        </div>
                        <h4 className="text-base font-semibold text-white leading-tight pr-6">
                          {source.title}
                        </h4>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {source.snippet}
                        </p>
                      </div>
                      <span className="absolute top-0 right-0 text-xs font-medium text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded-md">
                        {source.id}
                      </span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {!results && !isSearching && (
          <GlassCard className="p-12 text-center" hover={false}>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center ring-1 ring-cyan-500/20">
                <Search className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Start Your Research</h3>
              <p className="text-gray-400">Ask any question and get AI-powered insights with citations</p>
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  );
};

export default Research;