"use client";

import {
  Home, Upload, GitBranch, Brain, FileText,
  MessageSquare, Search, BarChart3, ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/upload", icon: Upload, label: "Upload" },
  { href: "/flowchart", icon: GitBranch, label: "Flowchart" },
  { href: "/flashcards", icon: Brain, label: "Flashcards" },
  { href: "/assessment", icon: FileText, label: "Assessment" },
  { href: "/chat", icon: MessageSquare, label: "Chat" },
  { href: "/research", icon: Search, label: "Research" },
  { href: "/analytics", icon: BarChart3, label: "Analytics" },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  return (
    <aside className={`fixed lg:static w-72 bg-black border-r border-gray-900 z-50 ${isOpen ? "block" : "hidden"} lg:block`}>
      <div className="p-6 mb-6">
        <h1 className="fixed text-xl font-bold text-white">DocMind</h1>
      </div>

      <hr className="text-gray-900/80" />

      <nav className="p-4 space-y-1 fixed">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
              ${pathname === item.href
                ? "bg-cyan-500/10 text-cyan-400"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}
            onClick={() => setIsOpen(false)}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
            {pathname === item.href && <ChevronRight className="ml-auto w-4 h-4" />}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
