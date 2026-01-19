"use client";

import { Menu, LogOut } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-900 z-30">
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={onMenuClick} className="lg:hidden">
          <Menu />
        </button>
        <button className="p-2 rounded-xl hover:bg-gray-800">
          <LogOut />
        </button>
      </div>
    </header>
  );
}
