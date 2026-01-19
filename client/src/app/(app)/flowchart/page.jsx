"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, X } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCards';
import Button from '@/components/ui/Button';

const Flowchart = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [zoom, setZoom] = useState(1);

  const nodes = [
    { id: 1, label: 'Machine Learning', x: 400, y: 50, type: 'root' },
    { id: 2, label: 'Supervised Learning', x: 200, y: 200, type: 'branch' },
    { id: 3, label: 'Unsupervised Learning', x: 600, y: 200, type: 'branch' },
    { id: 4, label: 'Classification', x: 100, y: 350, type: 'leaf' },
    { id: 5, label: 'Regression', x: 300, y: 350, type: 'leaf' },
    { id: 6, label: 'Clustering', x: 500, y: 350, type: 'leaf' },
    { id: 7, label: 'Dimensionality Reduction', x: 700, y: 350, type: 'leaf' },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 },
  ];

  const getNodeColor = (type) => {
    switch (type) {
      case 'root': return 'from-cyan-600 to-cyan-500';
      case 'branch': return 'from-indigo-600 to-indigo-500';
      case 'leaf': return 'from-purple-600 to-purple-500';
      default: return 'from-gray-700 to-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Knowledge Flowchart</h1>
          <p className="text-gray-400">Visual concept mapping from your materials</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}>
            <span className="text-xl">−</span>
          </Button>
          <span className="text-gray-400 w-16 text-center">{Math.round(zoom * 100)}%</span>
          <Button variant="secondary" onClick={() => setZoom(Math.min(2, zoom + 0.1))}>
            <span className="text-xl">+</span>
          </Button>
        </div>
      </div>

      {/* Flowchart Viewer */}
      <GlassCard className="p-8 overflow-hidden" hover={false}>
        <div className="relative w-full h-[600px] bg-gray-950 rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-300"
            style={{ transform: `scale(${zoom})` }}
          >
            {/* Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {connections.map((conn, i) => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                return (
                  <line
                    key={i}
                    x1={fromNode.x + 80}
                    y1={fromNode.y + 40}
                    x2={toNode.x + 80}
                    y2={toNode.y + 40}
                    stroke="rgb(34, 211, 238)"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    strokeDasharray="5,5"
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: node.id * 0.1 }}
                className="absolute"
                style={{ left: node.x, top: node.y }}
                onClick={() => setSelectedNode(node)}
              >
                <div
                  className={`
                    w-40 px-6 py-4 rounded-xl
                    bg-gradient-to-br ${getNodeColor(node.type)}
                    border-2 ${selectedNode?.id === node.id ? 'border-cyan-400' : 'border-transparent'}
                    shadow-2xl shadow-black/50
                    cursor-pointer hover:scale-110 hover:shadow-cyan-500/30
                    transition-all duration-300
                  `}
                >
                  <p className="text-white font-semibold text-center text-sm leading-tight">
                    {node.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Node Details */}
      {selectedNode && (
        <GlassCard className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${getNodeColor(selectedNode.type)} bg-opacity-20 ring-1 ring-cyan-500/20`}>
                <GitBranch className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{selectedNode.label}</h3>
                <p className="text-gray-400 mb-4">
                  {selectedNode.type === 'root' && 'Root concept - the foundation of this topic'}
                  {selectedNode.type === 'branch' && 'Branch concept - a major subcategory'}
                  {selectedNode.type === 'leaf' && 'Leaf concept - a specific technique or application'}
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm">
                    {selectedNode.type}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-gray-800 text-gray-400 text-sm">
                    3 references
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="p-2 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </GlassCard>
      )}

      {/* Legend */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Legend</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-500" />
            <span className="text-gray-300 text-sm">Root Concept</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-500" />
            <span className="text-gray-300 text-sm">Branch Concept</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500" />
            <span className="text-gray-300 text-sm">Leaf Concept</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default Flowchart;
