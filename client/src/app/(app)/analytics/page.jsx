"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Star, FileText, Clock, Brain, Upload, GitBranch } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCards';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('week');

  const studyData = [
    { date: 'Mon', hours: 2.5, flashcards: 12 },
    { date: 'Tue', hours: 3.2, flashcards: 18 },
    { date: 'Wed', hours: 1.8, flashcards: 8 },
    { date: 'Thu', hours: 4.1, flashcards: 24 },
    { date: 'Fri', hours: 2.9, flashcards: 15 },
    { date: 'Sat', hours: 3.5, flashcards: 20 },
    { date: 'Sun', hours: 2.2, flashcards: 10 },
  ];

  const topicMastery = [
    { topic: 'Quantum Computing', mastery: 87, color: 'cyan' },
    { topic: 'Machine Learning', mastery: 92, color: 'indigo' },
    { topic: 'Neural Networks', mastery: 78, color: 'purple' },
    { topic: 'Data Structures', mastery: 95, color: 'emerald' },
  ];

  const recentTests = [
    { name: 'Quantum Physics Quiz', score: 85, date: '2 days ago', questions: 20 },
    { name: 'ML Algorithms Test', score: 92, date: '5 days ago', questions: 15 },
    { name: 'CS Fundamentals', score: 78, date: '1 week ago', questions: 25 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Learning Analytics</h1>
          <p className="text-gray-400">Track your progress and insights</p>
        </div>
        <div className="flex gap-2">
          {['week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`
                px-4 py-2 rounded-xl font-medium transition-all
                ${timeRange === range
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }
              `}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Study Time Chart */}
      <GlassCard className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-cyan-400" />
          Study Time Overview
        </h2>
        <div className="h-64">
          <div className="flex items-end justify-between h-full gap-2">
            {studyData.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gray-900 rounded-t-lg overflow-hidden flex-1 flex items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(day.hours / 5) * 100}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-gray-950 px-2 py-1 rounded-lg text-xs text-white whitespace-nowrap">
                        {day.hours}h
                      </div>
                    </div>
                  </motion.div>
                </div>
                <span className="text-xs text-gray-500">{day.date}</span>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Topic Mastery */}
      <GlassCard className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Star className="w-5 h-5 text-cyan-400" />
          Topic Mastery
        </h2>
        <div className="space-y-4">
          {topicMastery.map((topic, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-200 font-medium">{topic.topic}</span>
                <span className="text-cyan-400 font-bold">{topic.mastery}%</span>
              </div>
              <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${topic.mastery}%` }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className={`h-full bg-gradient-to-r from-${topic.color}-600 to-${topic.color}-400`}
                />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Recent Tests */}
      <GlassCard className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-400" />
          Recent Assessments
        </h2>
        <div className="space-y-3">
          {recentTests.map((test, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-1">{test.name}</h3>
                  <p className="text-sm text-gray-500">{test.questions} questions • {test.date}</p>
                </div>
                <div className="text-right">
                  <div className={`
                    text-2xl font-bold
                    ${test.score >= 90 ? 'text-emerald-400' : test.score >= 70 ? 'text-cyan-400' : 'text-amber-400'}
                  `}>
                    {test.score}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Activity Timeline */}
      <GlassCard className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-cyan-400" />
          Activity Timeline
        </h2>
        <div className="space-y-6">
          {[
            { time: '2 hours ago', action: 'Completed 24 flashcards', icon: Brain, color: 'cyan' },
            { time: '5 hours ago', action: 'Scored 92% on ML test', icon: TrendingUp, color: 'emerald' },
            { time: '1 day ago', action: 'Uploaded 3 new documents', icon: Upload, color: 'indigo' },
            { time: '2 days ago', action: 'Generated knowledge flowchart', icon: GitBranch, color: 'purple' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="relative">
                <div className={`p-2 rounded-lg bg-${item.color}-500/10 ring-1 ring-${item.color}-500/20`}>
                  <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                </div>
                {i < 3 && (
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-800" />
                )}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-white font-medium">{item.action}</p>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default Analytics;