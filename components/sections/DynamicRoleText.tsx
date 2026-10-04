'use client';

import { useState, useEffect } from 'react';

const ROLES = [
  'MERN Stack Dev',
  'Full Stack Developer',
  'SDE',
  'AIML Engineer',
  'Exploring Agentic AI',
];

export function DynamicRolePill() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROLES.length);
        setAnimating(false);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-600/30 dark:border-cyan-500/40 bg-cyan-50/80 dark:bg-[#031824]/70 px-3.5 py-1 sm:px-4 sm:py-1.5 shadow-xs dark:shadow-cyan-500/15 backdrop-blur-sm">
      <span className="font-mono text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 select-none">
        &lt;
      </span>
      <span
        className={`font-mono text-xs sm:text-sm font-semibold tracking-wide text-cyan-950 dark:text-slate-100 transition-all duration-300 ease-out transform ${
          animating
            ? 'opacity-0 -translate-y-1.5 scale-95'
            : 'opacity-100 translate-y-0 scale-100'
        }`}
      >
        {ROLES[index]}
      </span>
      <span className="font-mono text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 select-none">
        /&gt;
      </span>
    </div>
  );
}

export const DynamicRoleText = DynamicRolePill;
export default DynamicRolePill;
