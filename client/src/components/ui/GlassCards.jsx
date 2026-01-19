"use client";

import { motion } from 'framer-motion';

const GlassCards = ({ children, className = '', hover = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`
      bg-[#1C1C1C] border border-[#2D2D2D]
      rounded-2xl shadow-xl
      ${hover ? 'hover:border-[#3D3D3D] transition-all duration-300' : ''}
      ${className}
    `}
  >
    {children}
  </motion.div>
);

export default GlassCards;