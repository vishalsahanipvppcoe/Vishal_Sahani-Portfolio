import { projects } from '@/constants/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 border-b border-border">
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Featured Projects
        </h2>
        <p className="text-sm text-muted-foreground">
          Production SaaS and distributed backend applications engineered for scale, AI capabilities, and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;