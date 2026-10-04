import { educationData } from '@/constants/education';
import { GraduationCap, BookOpen, School } from 'lucide-react';

function getEducationIcon(icon: string) {
  switch (icon) {
    case 'grad':
      return <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600 dark:text-emerald-400" />;
    case 'book':
      return <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600 dark:text-emerald-400" />;
    case 'school':
      return <School className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600 dark:text-emerald-400" />;
    default:
      return <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600 dark:text-emerald-400" />;
  }
}

export function EducationSection() {
  return (
    <div className="space-y-8">
      {/* 1. Header matching reference image */}
      <div className="space-y-2">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider">
          <GraduationCap className="h-3.5 w-3.5" />
          EDUCATION
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Education
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          My academic journey and qualifications.
        </p>
      </div>

      {/* 2. Timeline & Education Cards List */}
      <div className="space-y-4 sm:space-y-5">
        {educationData.map((edu, idx) => (
          <div key={idx} className="flex items-center gap-4 sm:gap-8">
            {/* Left Timeline: Node + Year + Connecting dashed line */}
            <div className="relative flex items-center gap-3 sm:gap-4 shrink-0 min-w-[130px] sm:min-w-[170px]">
              {/* Vertical Dashed Line connecting nodes */}
              {idx < educationData.length - 1 && (
                <div className="absolute left-[11px] top-[26px] bottom-[-42px] sm:bottom-[-46px] w-[2px] border-l-2 border-dashed border-emerald-500/40 dark:border-emerald-500/30 pointer-events-none z-0" />
              )}

              {/* Circular Node */}
              <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 dark:border-emerald-400/80 bg-background dark:bg-[#050f15] shadow-xs dark:shadow-emerald-500/20">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              </div>

              {/* Year Range */}
              <span className="font-mono text-xs sm:text-sm font-medium text-foreground/85 dark:text-slate-300 tracking-wide select-none">
                {edu.duration}
              </span>
            </div>

            {/* Right Card: Icon Box + Details */}
            <div className="flex-1 rounded-2xl border border-border dark:border-slate-800/80 bg-card dark:bg-[#070d19]/90 p-4 sm:p-6 shadow-sm dark:shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-border/90 dark:hover:border-slate-700 hover:shadow-md dark:hover:shadow-emerald-950/20 flex items-center gap-4 sm:gap-5">
              {/* Icon Container */}
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 shadow-inner">
                {getEducationIcon(edu.icon)}
              </div>

              {/* Institution & Degree */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-foreground leading-snug">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground leading-snug">
                  {edu.degree}
                </p>

                {/* Score Pill if present */}
                {edu.score && (
                  <div className="mt-2.5">
                    <span className="inline-flex items-center rounded-lg border border-emerald-500/30 dark:border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 shadow-xs">
                      {edu.score}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;