"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCards";


const Chat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI learning assistant. Ask me anything about your uploaded materials.' },
    { role: 'user', content: 'Can you explain quantum entanglement?' },
    { role: 'assistant', content: 'Quantum entanglement is a phenomenon where particles become correlated in such a way that the quantum state of one particle cannot be described independently of the others, even when separated by large distances.' },
  ]);
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <h1 className="text-4xl font-bold text-white mb-6">AI Chat Assistant</h1>

      <GlassCard className="flex-1 p-6 overflow-y-auto mb-4" hover={false}>
        <div className="space-y-6">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                ${msg.role === 'user' 
                  ? 'bg-linear-to-br from-cyan-600 to-cyan-500' 
                  : 'bg-linear-to-br from-indigo-600 to-purple-500'
                }
              `}>
                {msg.role === 'user' ? 'U' : 'AI'}
              </div>
              <div className={`
                max-w-2xl px-6 py-4 rounded-2xl
                ${msg.role === 'user'
                  ? 'bg-gray-800 text-white'
                  : 'bg-linear-to-br from-gray-900 to-gray-800 border-l-2 border-cyan-500/50 text-gray-100'
                }
              `}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about your materials..."
          className="
            w-full px-6 py-4 pr-14 rounded-2xl
            bg-gray-900 border border-gray-700
            text-white placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-cyan-500/50
            transition-all
          "
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-linear-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400">
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
