import { experiences } from '@/constants/experience';
import { ExternalLink, Briefcase, MapPin, Globe, Coffee, Users, MessageSquare, Calendar, Cloud, GitBranch } from 'lucide-react';
import { SiReact, SiTypescript, SiNodedotjs, SiExpress, SiSpringboot, SiMysql, SiRedis, SiDocker, SiTailwindcss } from 'react-icons/si';

const TECH_ICONS: Record<string, React.ReactNode> = {
  'React.js': <SiReact className="h-4 w-4 text-[#00d8ff] shrink-0" />,
  'React 18': <SiReact className="h-4 w-4 text-[#00d8ff] shrink-0" />,
  'TypeScript': <SiTypescript className="h-4 w-4 text-[#3178c6] shrink-0" />,
  'Node.js': <SiNodedotjs className="h-4 w-4 text-[#5fa04e] shrink-0" />,
  'Express.js': <SiExpress className="h-4 w-4 text-foreground/80 dark:text-slate-300 shrink-0" />,
  'AWS (EC2, S3, DynamoDB, SQS)': <Cloud className="h-4 w-4 text-[#ff9900] shrink-0" />,
  'Redis': <SiRedis className="h-4 w-4 text-[#dc382d] shrink-0" />,
  'Docker': <SiDocker className="h-4 w-4 text-[#2496ed] shrink-0" />,
  'Tailwind CSS': <SiTailwindcss className="h-4 w-4 text-[#06b6d4] shrink-0" />,
  'GitHub Actions CI/CD': <GitBranch className="h-4 w-4 text-[#2088ff] shrink-0" />,
  'Java': <Coffee className="h-4 w-4 text-amber-500 shrink-0" />,
  'Spring Boot': <SiSpringboot className="h-4 w-4 text-[#6db33f] shrink-0" />,
  'REST APIs': <Globe className="h-4 w-4 text-[#00b4d8] shrink-0" />,
  'MySQL': <SiMysql className="h-4 w-4 text-[#00758f] shrink-0" />,
  'Leadership': <Users className="h-4 w-4 text-purple-400 shrink-0" />,
  'Communication': <MessageSquare className="h-4 w-4 text-sky-400 shrink-0" />,
  'Event Management': <Calendar className="h-4 w-4 text-emerald-400 shrink-0" />,
};

export function ExperienceSection() {
  return (
    <div className="h-full flex flex-col">
      {/* Top Header outside the card */}
      <div className="mb-5 space-y-2">
        {/* Pill Badge matching reference image */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider">
          <Briefcase className="h-3.5 w-3.5" />
          EXPERIENCE
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Work Experience &amp; Leadership
        </h2>
        <p className="text-sm text-muted-foreground">
          Internships, roles, and leadership experiences that shaped my journey.
        </p>
      </div>

      {/* Main Experience Card */}
      <div className="flex-1 rounded-2xl border border-border dark:border-slate-800/80 bg-card dark:bg-[#070d19]/90 p-5 sm:p-7 flex flex-col justify-between shadow-sm dark:shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-border/90 dark:hover:border-slate-700">
        <div className="space-y-6 sm:space-y-7 flex-1 flex flex-col justify-between py-1">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="flex items-start gap-3.5 sm:gap-4">
              {/* Left Timeline: Number Circle + Connecting Line */}
              <div className="flex flex-col items-center shrink-0">
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-sm font-bold mt-0.5 shadow-xs">
                  {exp.id}
                </span>
                {idx < experiences.length - 1 && (
                  <div className="w-[2px] bg-gradient-to-b from-emerald-500/50 via-border/60 to-emerald-500/30 flex-1 my-2 min-h-[55px]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2.5 min-w-0">
                {/* Header: Role & Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="self-start sm:self-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">
                    {exp.duration}
                  </span>
                </div>

                {/* Subtitle: Company & Location */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-[13.5px] text-muted-foreground">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>{exp.company}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <span className="font-semibold text-foreground">{exp.company}</span>
                  )}

                  {exp.type && (
                    <>
                      <span className="text-border dark:text-slate-700">•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                        {exp.type}
                      </span>
                    </>
                  )}
                </div>

                {/* Bullet Points */}
                {exp.points && (
                  <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-sm text-muted-foreground/90 leading-relaxed pt-1">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 select-none font-bold text-base leading-tight mt-0.5 shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack Pills */}
                {exp.techStack && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-lg border border-border/80 dark:border-slate-800 bg-muted/60 dark:bg-slate-900/90 px-3 py-1 text-xs font-medium text-foreground/90 dark:text-slate-300 shadow-xs hover:border-emerald-500/40 transition-colors"
                      >
                        {TECH_ICONS[tech]}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
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