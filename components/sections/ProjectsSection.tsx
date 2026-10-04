import { projects } from '@/constants/projects';
import { ProjectCard } from './ProjectCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-8 sm:py-12">
      {/* Top Header Row matching reference image */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
        <div className="space-y-2">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            </span>
            FEATURED PROJECTS
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Production-ready applications, real-world systems, and AI-powered solutions engineered for impact.
          </p>
        </div>

        {/* Top Right Action Button */}
        <div className="shrink-0 pt-2 md:pt-0">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 dark:border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/30 px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300 shadow-xs transition-all duration-200 hover:border-emerald-500/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/40"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          </Link>
        </div>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;