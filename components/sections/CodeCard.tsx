'use client';

import { useState, useEffect } from 'react';

const CODE_ROLES = [
  'Software Developer',
  'Full Stack Developer',
  'AI/ML Engineer',
  'SDE',
];

export function CodeCard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % CODE_ROLES.length);
        setAnimating(false);
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full rounded-2xl border border-border dark:border-slate-800/80 bg-slate-950 dark:bg-[#070d19]/90 p-5 sm:p-6 shadow-sm dark:shadow-xl backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-border/90 dark:hover:border-slate-700 transition-all duration-300">
      {/* Top window bar */}
      <div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
        </div>
        <span className="font-mono text-xs text-slate-400 select-none pl-2 tracking-wide">
          vishal.js
        </span>
      </div>

      {/* Code body with line number gutter */}
      <div className="flex items-start gap-4 font-mono text-xs sm:text-[13px] leading-relaxed my-auto py-1">
        {/* Line Numbers Gutter */}
        <div className="select-none text-slate-600 dark:text-slate-500 font-mono text-right flex flex-col space-y-1 sm:space-y-1.5 shrink-0 pr-3 border-r border-slate-800/60">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
        </div>

        {/* Code Content */}
        <div className="flex-1 min-w-0 space-y-1 sm:space-y-1.5">
          <div>
            <span className="text-cyan-400 font-semibold">const</span>{' '}
            <span className="text-white font-semibold">vishal</span>{' '}
            <span className="text-slate-400">=</span>{' '}
            <span className="text-yellow-400">{'{'}</span>
          </div>

          <div className="pl-4 sm:pl-5 flex items-center flex-wrap gap-x-1">
            <span className="text-sky-400 font-medium">role:</span>{' '}
            <span className="text-emerald-400">&quot;</span>
            <span
              className={`font-semibold text-emerald-400 transition-all duration-300 inline-block ${
                animating ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
              }`}
            >
              {CODE_ROLES[roleIndex]}
            </span>
            <span className="text-emerald-400">&quot;,</span>
          </div>

          <div className="pl-4 sm:pl-5">
            <span className="text-sky-400 font-medium">passion:</span>{' '}
            <span className="text-emerald-400">&quot;Building real-world solutions&quot;,</span>
          </div>

          <div className="pl-4 sm:pl-5">
            <span className="text-sky-400 font-medium">currently:</span>{' '}
            <span className="text-emerald-400">&quot;Final Year B.E. IT&quot;,</span>
          </div>

          <div className="pl-4 sm:pl-5">
            <span className="text-sky-400 font-medium">focus:</span>{' '}
            <span className="text-yellow-400">[</span>
            <span className="text-emerald-400">&quot;AI/ML&quot;</span>
            <span className="text-slate-400">, </span>
            <span className="text-emerald-400">&quot;Full Stack&quot;</span>
            <span className="text-slate-400">, </span>
            <span className="text-emerald-400">&quot;System Design&quot;</span>
            <span className="text-yellow-400">]</span>
            <span className="text-slate-400">,</span>
          </div>

          <div className="pl-4 sm:pl-5">
            <span className="text-sky-400 font-medium">goal:</span>{' '}
            <span className="text-emerald-400">&quot;Create technology that makes an impact&quot;,</span>
          </div>

          <div>
            <span className="text-yellow-400">{'}'};</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeCard;
