"use client";

import { useState } from "react";
import { Upload, FileText } from "lucide-react";
import GlassCard from "@/components/ui/GlassCards";

const upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([
    { name: 'quantum-mechanics.pdf', size: '2.4 MB', progress: 100 },
    { name: 'ml-algorithms.docx', size: '1.8 MB', progress: 65 },
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">Upload Documents</h1>

      {/* Drop Zone */}
      <GlassCard
        className={`
          p-12 border-2 border-dashed transition-all duration-300
          ${isDragging ? 'border-cyan-500 bg-cyan-500/5' : 'border-gray-700'}
        `}
        hover={false}
      >
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-linear-to-br from-cyan-600/20 to-cyan-500/10 flex items-center justify-center ring-1 ring-cyan-500/20">
            <Upload className="w-10 h-10 text-cyan-400" />
          </div>
          <div>
            <p className="text-xl font-semibold text-white mb-2">Drop files here or click to browse</p>
            <p className="text-gray-400">PDF, DOCX, TXT up to 50MB</p>
          </div>
          <Button>Select Files</Button>
        </div>
      </GlassCard>

      {/* File List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Uploaded Files</h2>
        {files.map((file, i) => (
          <GlassCard key={i} className="p-6">
            <div className="flex items-center gap-4 mb-3">
              <FileText className="w-8 h-8 text-cyan-400" />
              <div className="flex-1">
                <p className="text-white font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">{file.size}</p>
              </div>
              <span className="text-cyan-400 text-sm font-medium">{file.progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-cyan-600 to-cyan-400 transition-all duration-500"
                style={{ width: `${file.progress}%` }}
              />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Upload;
