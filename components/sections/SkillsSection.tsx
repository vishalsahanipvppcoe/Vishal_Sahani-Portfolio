import { skillCategories } from '@/constants/skills';
import { Code2, Monitor, Server, Database, Wrench, Brain } from 'lucide-react';

interface CategoryConfig {
  icon: typeof Code2;
  iconStyle: string;
}

const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  'Languages': {
    icon: Code2,
    iconStyle: 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
  'Frontend': {
    icon: Monitor,
    iconStyle: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  'Backend': {
    icon: Server,
    iconStyle: 'border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400',
  },
  'Database & Storage': {
    icon: Database,
    iconStyle: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  'Tools & DevOps': {
    icon: Wrench,
    iconStyle: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  'AI / ML': {
    icon: Brain,
    iconStyle: 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
  'AIML': {
    icon: Brain,
    iconStyle: 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
  'AI/ML': {
    icon: Brain,
    iconStyle: 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
  'AI / Machine Learning': {
    icon: Brain,
    iconStyle: 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
};

export function SkillsSection() {
  return (
    <div className="h-full flex flex-col">
      {/* Top Header outside the card */}
      <div className="mb-5 space-y-2">
        {/* Pill Badge matching reference image */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider">
          <Wrench className="h-3.5 w-3.5" />
          SKILLS
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Technical Skills
        </h2>
        <p className="text-sm text-muted-foreground">
          Core technologies, frameworks, databases, and engineering tooling.
        </p>
      </div>

      {/* Main Skills Card */}
      <div className="flex-1 rounded-2xl border border-border dark:border-slate-800/80 bg-card dark:bg-[#070d19]/90 p-5 sm:p-7 flex flex-col justify-between shadow-sm dark:shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-border/90 dark:hover:border-slate-700">
        {/* Grid of 6 Technical Categories: 3 Rows x 2 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 flex-1 auto-rows-fr">
          {skillCategories.map((cat) => {
            const config = CATEGORY_CONFIG[cat.title] || {
              icon: Code2,
              iconStyle: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
            };
            const Icon = config.icon;

            return (
              <div
                key={cat.title}
                className="rounded-xl border border-border/80 dark:border-slate-800/80 bg-muted/20 dark:bg-slate-900/60 p-3 sm:p-3.5 flex flex-col justify-start transition-all hover:border-border dark:hover:border-slate-700 hover:bg-muted/30"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className={`h-7 w-7 sm:h-8 sm:w-8 rounded-lg border ${config.iconStyle} flex items-center justify-center shrink-0`}>
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[13px] sm:text-sm font-bold text-foreground tracking-tight whitespace-nowrap truncate">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-card dark:bg-[#070d19] border border-border/80 dark:border-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-medium text-foreground/90 dark:text-slate-200 hover:border-emerald-500/30 transition-colors select-none shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;