export function HeroStats() {
  return (
    <div className="w-full h-full rounded-2xl border border-sky-500/20 dark:border-sky-500/20 bg-[#060c18] dark:bg-[#060c18]/95 p-6 sm:p-8 shadow-[0_0_30px_rgba(14,165,233,0.06)] dark:shadow-[0_0_35px_rgba(14,165,233,0.08)] backdrop-blur-sm flex flex-col justify-center items-center group hover:border-sky-500/35 transition-all duration-300">
      {/* 3 Columns divided by subtle navy-slate borders matching exact reference */}
      <div className="w-full grid grid-cols-3 divide-x divide-[#162238] my-auto">
        {/* 1. RED: 2+ INTERNSHIPS */}
        <div className="flex flex-col items-center justify-center px-2 sm:px-4 text-center">
          {/* Red Briefcase Icon Box */}
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#0d1728] border border-slate-800/80 shadow-inner mb-3 transition-transform duration-200 group-hover:scale-105">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              {/* Handle */}
              <path
                d="M8.5 7V5.5C8.5 4.67 9.17 4 10 4H14C14.83 4 15.5 4.67 15.5 5.5V7"
                stroke="#FF4655"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Main Body */}
              <rect x="3.5" y="7" width="17" height="12" rx="2.5" fill="#FF4655" />
              {/* Center dividing slit */}
              <path d="M3.5 12H20.5" stroke="#0D1728" strokeWidth="1.5" />
              {/* Clasp / Tab */}
              <rect x="10.5" y="11" width="3" height="2" rx="0.5" fill="#FFFFFF" opacity="0.9" />
            </svg>
          </div>

          <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#FF4655] drop-shadow-[0_0_14px_rgba(255,70,85,0.35)] transition-transform duration-200 group-hover:scale-105">
            2+
          </div>

          <div className="mt-3 text-[11px] sm:text-xs font-bold tracking-[0.18em] text-white uppercase select-none">
            INTERNSHIPS
          </div>

          <p className="mt-2 text-[11px] sm:text-xs text-[#8fa3bf] leading-relaxed">
            Industry experience
            <br />
            &amp; collaborations
          </p>
        </div>

        {/* 2. AMBER: 6+ PROJECTS */}
        <div className="flex flex-col items-center justify-center px-2 sm:px-4 text-center">
          {/* Amber Isometric 3D Cube Icon Box */}
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#0d1728] border border-slate-800/80 shadow-inner mb-3 transition-transform duration-200 group-hover:scale-105">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              {/* Top face */}
              <path d="M12 3.5L19 7.5L12 11.5L5 7.5L12 3.5Z" fill="#FBBF24" />
              {/* Right face */}
              <path d="M12 11.5L19 7.5V15.5L12 19.5V11.5Z" fill="#D97706" />
              {/* Left face */}
              <path d="M12 11.5L5 7.5V15.5L12 19.5V11.5Z" fill="#F59E0B" />
              {/* Center dividing lines */}
              <path d="M12 11.5V19.5" stroke="#B45309" strokeWidth="0.8" />
              <path d="M5 7.5L12 11.5L19 7.5" stroke="#FDE68A" strokeWidth="0.5" opacity="0.6" />
            </svg>
          </div>

          <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#FBBF24] drop-shadow-[0_0_14px_rgba(251,191,36,0.35)] transition-transform duration-200 group-hover:scale-105">
            6+
          </div>

          <div className="mt-3 text-[11px] sm:text-xs font-bold tracking-[0.18em] text-white uppercase select-none">
            PROJECTS
          </div>

          <p className="mt-2 text-[11px] sm:text-xs text-[#8fa3bf] leading-relaxed">
            Real-world applications
            <br />
            &amp; open source
          </p>
        </div>

        {/* 3. EMERALD / MINT: 10+ TECHNOLOGIES */}
        <div className="flex flex-col items-center justify-center px-2 sm:px-4 text-center">
          {/* Mint Database Stack Icon Box */}
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#0d1728] border border-slate-800/80 shadow-inner mb-3 transition-transform duration-200 group-hover:scale-105">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              {/* Top cylinder layer */}
              <path d="M5 6C5 4.5 8.13 3.5 12 3.5C15.87 3.5 19 4.5 19 6V8C19 9.5 15.87 10.5 12 10.5C8.13 10.5 5 9.5 5 8V6Z" fill="#00DF8F" />
              <ellipse cx="12" cy="6" rx="7" ry="2.2" fill="#34D399" />
              <ellipse cx="12" cy="5.8" rx="4.5" ry="1.4" fill="#6EE7B7" />

              {/* Middle cylinder layer */}
              <path d="M5 10.5C5 9.5 7.5 8.6 10.5 8.4V9.6C8 9.8 6.5 10.3 6.5 10.9C6.5 11.5 8.8 12.1 12 12.1C15.2 12.1 17.5 11.5 17.5 10.9C17.5 10.3 16 9.8 13.5 9.6V8.4C16.5 8.6 19 9.5 19 10.5V12.5C19 13.8 15.87 14.8 12 14.8C8.13 14.8 5 13.8 5 12.5V10.5Z" fill="#00DF8F" />
              {/* Center latch */}
              <rect x="10.8" y="10.3" width="2.4" height="1.2" rx="0.5" fill="#0D1728" />

              {/* Bottom cylinder layer */}
              <path d="M5 14.8C5 13.8 7.5 12.9 10.5 12.7V13.9C8 14.1 6.5 14.6 6.5 15.2C6.5 15.8 8.8 16.4 12 16.4C15.2 16.4 17.5 15.8 17.5 15.2C17.5 14.6 16 14.1 13.5 13.9V12.7C16.5 12.9 19 13.8 19 14.8V17C19 18.5 15.87 19.5 12 19.5C8.13 19.5 5 18.5 5 17V14.8Z" fill="#059669" />
              {/* Center latch */}
              <rect x="10.8" y="14.6" width="2.4" height="1.2" rx="0.5" fill="#0D1728" />
            </svg>
          </div>

          <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#00DF8F] drop-shadow-[0_0_14px_rgba(0,223,143,0.35)] transition-transform duration-200 group-hover:scale-105">
            10+
          </div>

          <div className="mt-3 text-[11px] sm:text-xs font-bold tracking-[0.18em] text-white uppercase select-none">
            TECHNOLOGIES
          </div>

          <p className="mt-2 text-[11px] sm:text-xs text-[#8fa3bf] leading-relaxed">
            Languages, frameworks
            <br />
            &amp; tools
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroStats;
