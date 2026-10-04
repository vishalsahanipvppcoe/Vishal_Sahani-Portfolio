import { Project } from '@/constants/projects';
import Link from 'next/link';
import Image from 'next/image';
import {
  ExternalLink,
  Github,
  Clock,
  ArrowRight,
  Zap,
  Check,
  GraduationCap,
} from 'lucide-react';
import {
  SiReact,
  SiNodedotjs,
  SiGooglegemini,
  SiNvidia,
  SiMongodb,
  SiJsonwebtokens,
  SiDocker,
  SiRedis,
  SiRazorpay,
  SiFlutter,
  SiSpringboot,
  SiPostgresql,
  SiFirebase,
  SiGooglemaps,
  SiPython,
  SiFlask,
  SiOpencv,
  SiVite,
  SiTailwindcss,
  SiGit,
  SiYolo,
} from 'react-icons/si';

function TwilioIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.381-.008.008 5.352 0 11.971V12c0 6.64 5.359 12 12 12 6.64 0 12-5.36 12-12 0-6.641-5.36-12-12-12zm0 20.801c-4.846.015-8.786-3.904-8.801-8.75V12c-.014-4.846 3.904-8.786 8.75-8.801H12c4.847-.014 8.786 3.904 8.801 8.75V12c.015 4.847-3.904 8.786-8.75 8.801H12zm5.44-11.76c0 1.359-1.12 2.479-2.481 2.479-1.366-.007-2.472-1.113-2.479-2.479 0-1.361 1.12-2.481 2.479-2.481 1.361 0 2.481 1.12 2.481 2.481zm0 5.919c0 1.36-1.12 2.48-2.481 2.48-1.367-.008-2.473-1.114-2.479-2.48 0-1.359 1.12-2.479 2.479-2.479 1.361-.001 2.481 1.12 2.481 2.479zm-5.919 0c0 1.36-1.12 2.48-2.479 2.48-1.368-.007-2.475-1.113-2.481-2.48 0-1.359 1.12-2.479 2.481-2.479 1.358-.001 2.479 1.12 2.479 2.479zm0-5.919c0 1.359-1.12 2.479-2.479 2.479-1.367-.007-2.475-1.112-2.481-2.479 0-1.361 1.12-2.481 2.481-2.481 1.358 0 2.479 1.12 2.479 2.481z" />
    </svg>
  );
}

interface TechMeta {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const TECH_META_MAP: Record<string, TechMeta> = {
  'React.js': { icon: SiReact, color: 'text-[#0284c7] dark:text-[#61DAFB]' },
  'Node.js': { icon: SiNodedotjs, color: 'text-[#16a34a] dark:text-[#5FA04E]' },
  'Gemini API': { icon: SiGooglegemini, color: 'text-[#7c3aed] dark:text-[#8E75FF]' },
  'NVIDIA API': { icon: SiNvidia, color: 'text-[#65a30d] dark:text-[#76B900]' },
  'MongoDB': { icon: SiMongodb, color: 'text-[#15803d] dark:text-[#47A248]' },
  'JWT Auth': { icon: SiJsonwebtokens, color: 'text-[#9333ea] dark:text-[#A855F7]' },
  'Docker': { icon: SiDocker, color: 'text-[#0284c7] dark:text-[#2496ED]' },
  'Redis': { icon: SiRedis, color: 'text-[#dc2626] dark:text-[#DC382D]' },
  'Razorpay': { icon: SiRazorpay, color: 'text-[#2563eb] dark:text-[#3395FF]' },
  'Flutter': { icon: SiFlutter, color: 'text-[#0284c7] dark:text-[#47C5FB]' },
  'Spring Boot': { icon: SiSpringboot, color: 'text-[#16a34a] dark:text-[#6DB33F]' },
  'PostgreSQL': { icon: SiPostgresql, color: 'text-[#2563eb] dark:text-[#4169E1]' },
  'Firebase': { icon: SiFirebase, color: 'text-[#d97706] dark:text-[#FFCA28]' },
  'Google Maps API': { icon: SiGooglemaps, color: 'text-[#16a34a] dark:text-[#34A853]' },
  'Python': { icon: SiPython, color: 'text-[#ca8a04] dark:text-[#FFD43B]' },
  'Flask': { icon: SiFlask, color: 'text-foreground/80 dark:text-slate-100' },
  'YOLOv8': { icon: SiYolo, color: 'text-[#0891b2] dark:text-[#00FFFF]' },
  'OpenCV': { icon: SiOpencv, color: 'text-[#4f46e5] dark:text-[#5C3EE8]' },
  'Vite': { icon: SiVite, color: 'text-[#7c3aed] dark:text-[#646CFF]' },
  'Tailwind CSS': { icon: SiTailwindcss, color: 'text-[#0891b2] dark:text-[#06B6D4]' },
  'Twilio': { icon: TwilioIcon, color: 'text-[#dc2626] dark:text-[#F22F46]' },
  'Git': { icon: SiGit, color: 'text-[#ea580c] dark:text-[#F05032]' },
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-border dark:border-slate-800/80 bg-card dark:bg-[#070d19]/90 p-5 sm:p-6 shadow-sm dark:shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-border/90 dark:hover:border-slate-700 hover:shadow-md dark:hover:shadow-emerald-950/20">
      <div>
        {/* 1. Preview Image Mockup Frame */}
        <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/80 dark:border-slate-800/80 bg-muted/40 dark:bg-slate-950 shadow-inner group-hover:border-border dark:group-hover:border-slate-700 transition-colors">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted text-xs text-muted-foreground">
              No preview available
            </div>
          )}
        </div>

        {/* 2. Number, Title, and Badge Header */}
        <div className="flex items-start gap-3">
          {/* Number Box */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 dark:border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-950/40 font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400 shadow-xs">
            {project.number}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {project.title}
              </h3>

              {/* Status Badge */}
              {project.badge === 'Live' && (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 dark:border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  </span>
                  Live
                </span>
              )}

              {project.comingSoon && (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-500/30 dark:border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                  <Clock className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                  Coming Soon
                </span>
              )}

              {project.badge === 'Academic Project' && (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sky-500/30 dark:border-sky-500/40 bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-600 dark:text-sky-400">
                  <GraduationCap className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                  Academic Project
                </span>
              )}
            </div>

            {/* Subtitle in Emerald */}
            <p className="mt-1 text-xs sm:text-[13px] font-semibold text-emerald-600 dark:text-emerald-400 leading-tight">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* 3. Description */}
        <p className="mt-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed min-h-[44px]">
          {project.description || project.overview}
        </p>

        {/* 4. Tech Stack Pills with Brand Icons */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => {
            const meta = TECH_META_MAP[tech];
            const Icon = meta?.icon;
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 dark:border-slate-800 bg-muted/60 dark:bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-foreground/90 dark:text-slate-300 shadow-xs transition-colors hover:border-border dark:hover:border-slate-700"
              >
                {Icon && <Icon className={`h-3.5 w-3.5 ${meta.color} shrink-0`} />}
                {tech}
              </span>
            );
          })}
        </div>

        {/* 5. Key Features */}
        <div className="mt-6">
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase mb-3">
            <Zap className="h-3.5 w-3.5 fill-emerald-600 dark:fill-emerald-400 text-emerald-600 dark:text-emerald-400" />
            KEY FEATURES
          </div>
          <ul className="space-y-2.5">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-foreground/80 dark:text-slate-300 leading-snug">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6. Action Buttons */}
      <div className="mt-8 flex items-center gap-3 pt-2">
        {project.comingSoon ? (
          <>
            <div className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-amber-500/30 dark:border-amber-500/40 bg-amber-500/5 px-2 text-center text-xs font-semibold text-amber-600 dark:text-amber-400/90 cursor-default select-none">
              <Clock className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
              <div className="leading-tight">
                <div>Live Project</div>
                <div className="text-[10px] opacity-75">(Coming Soon)</div>
              </div>
            </div>
            <div className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border dark:border-slate-800 bg-muted/40 dark:bg-[#0f172a]/60 px-2 text-center text-xs font-semibold text-muted-foreground dark:text-slate-400 cursor-default select-none">
              <Github className="h-4 w-4 shrink-0 text-muted-foreground dark:text-slate-400" />
              <div className="leading-tight">
                <div>GitHub</div>
                <div className="text-[10px] opacity-75">(Coming Soon)</div>
              </div>
            </div>
          </>
        ) : (
          <>
            {project.badge === 'Academic Project' || !project.links.live || project.links.live === '#' ? (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 dark:bg-emerald-500 px-4 text-xs sm:text-sm font-bold text-white shadow-xs transition-all duration-200 hover:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Details</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 dark:bg-emerald-500 px-4 text-xs sm:text-sm font-bold text-white shadow-xs transition-all duration-200 hover:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Project</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            )}

            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border dark:border-slate-800 bg-card hover:bg-muted dark:bg-[#0f172a]/90 px-4 text-xs sm:text-sm font-semibold text-foreground dark:text-slate-200 transition-all duration-200 hover:border-border/90 dark:hover:border-slate-700 dark:hover:bg-slate-800 shadow-xs"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
