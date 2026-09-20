import { Project } from '@/constants/projects';
import { ExternalLink, Github, Clock } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-border/80">
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-foreground tracking-tight">{project.title}</h3>
              {project.comingSoon && (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:text-amber-400">
                  <Clock className="h-2.5 w-2.5" />
                  Coming Soon
                </span>
              )}
            </div>
            <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">{project.subtitle}</p>
          </div>
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-mono font-semibold text-muted-foreground border border-border">
            {project.number}
          </span>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features / Highlights */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {project.featuresTitle || 'Features & Highlights'}
          </h4>
          <ul className="mt-2.5 space-y-2 text-sm text-muted-foreground">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-500 select-none font-bold">•</span>
                <span className="leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
        {project.comingSoon ? (
          <>
            <button
              type="button"
              disabled
              className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-dashed border-amber-500/30 bg-amber-500/5 px-3 text-xs font-medium text-amber-600 dark:text-amber-400/90 cursor-not-allowed select-none"
            >
              <Clock className="h-3.5 w-3.5" />
              Live Demo (Coming Soon)
            </button>
            <button
              type="button"
              disabled
              className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-dashed border-border bg-muted/40 px-3 text-xs font-medium text-muted-foreground cursor-not-allowed select-none"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub (Coming Soon)
            </button>
          </>
        ) : (
          <>
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 dark:bg-emerald-500 px-4 text-xs font-semibold text-white hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors duration-150 shadow-sm"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-4 text-xs font-semibold text-foreground hover:bg-muted transition-colors duration-150"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </>
        )}
      </div>
    </div>
  );
}
