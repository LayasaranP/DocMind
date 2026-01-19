"use client";
import { useState } from "react";
import GlassCard from "@/components/ui/GlassCards";

export default function ChatWindow() {
  const [messages] = useState([
    { role: "assistant", content: "Hello! Ask me anything." }
  ]);

  return (
    <GlassCard className="p-6 h-[70vh] overflow-y-auto">
      {messages.map((m, i) => (
        <div key={i} className="mb-4">
          <strong>{m.role}:</strong> {m.content}
        </div>
      ))}
    </GlassCard>
  );
}
