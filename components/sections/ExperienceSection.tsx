import { experiences } from '@/constants/experience';

export function ExperienceSection() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Work Experience &amp; Leadership
        </h2>
        <p className="text-sm text-muted-foreground">
          Software development internships &amp; engineering leadership.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 flex-1 flex flex-col justify-between shadow-sm">
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex items-start gap-3.5">
              {/* Number Badge */}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold mt-0.5">
                {exp.id}
              </span>

              {/* Content */}
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.duration}</span>
                  {exp.metrics && (
                    <>
                      <span>•</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{exp.metrics}</span>
                    </>
                  )}
                </div>

                {/* Tech stack pills if any */}
                {exp.techStack && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground border border-border/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                {exp.points && (
                  <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-emerald-500 select-none font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;