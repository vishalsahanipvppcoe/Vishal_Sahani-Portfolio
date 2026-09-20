import { skillCategories } from '@/constants/skills';
import { Code, Layout, Server, Database, Brain, Terminal } from 'lucide-react';

const CATEGORY_ICONS: Record<string, typeof Code> = {
  Languages: Code,
  Frontend: Layout,
  Backend: Server,
  'Databases & Storage': Database,
  'Tools & DevOps': Terminal,
  'AI / Machine Learning': Brain,
};

export function SkillsSection() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Technical Skills
        </h2>
        <p className="text-sm text-muted-foreground">
          Core technologies, frameworks, databases, and engineering tooling.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 flex-1 flex flex-col justify-center shadow-sm">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.title] || Code;
            return (
              <div
                key={cat.title}
                className="rounded-lg border border-border/70 bg-muted/40 p-3.5 flex flex-col justify-center transition-colors hover:border-border"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <Icon className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <h3 className="text-xs font-semibold text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground border border-border/60 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
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