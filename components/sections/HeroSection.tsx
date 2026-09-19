import { siteConfig } from '@/config/site';
import { ArchitectureCard } from './ArchitectureCard';
import { ArrowUpRight, Download, MapPin, Code2, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="about" className="pt-8 pb-14 md:pt-12 md:pb-16 border-b border-border">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Bio & Info */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          {/* Header Row: Photo + Badge + Heading */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Profile Photo - Full HD & Crisp */}
            <div className="relative group shrink-0">
              <div className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-2xl p-[2px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 shadow-xl shadow-emerald-500/15 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-emerald-500/25">
                <div className="relative h-full w-full rounded-[14px] overflow-hidden bg-card">
                  <Image
                    src="/vishal-profile-hd.jpg"
                    alt="Vishal Sahani - Software Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              {/* Online / Active status indicator */}
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-background ring-2 ring-background">
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            </div>

            {/* Availability Badge & Heading */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for SDE Roles
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Hi, I&apos;m <span className="text-emerald-600 dark:text-emerald-400">Vishal Sahani</span>
              </h1>
            </div>
          </div>

          {/* Heading Tagline */}
          <p className="text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
            Software Developer with hands-on experience building scalable REST APIs, full-stack applications, and real-time backend solutions through industry internships and personal projects.
          </p>

          {/* Supporting Pitch */}
          <p className="text-sm leading-relaxed text-muted-foreground max-w-xl">
            Proficient in Java, MERN Stack, AI/ML, MySQL, JWT Authentication, and modern development tools.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-3 text-xs font-medium text-foreground">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              Mumbai, Maharashtra
            </span>
            <a
              href={siteConfig.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-3 text-xs font-medium text-muted-foreground hover:border-border/80 hover:text-foreground transition-colors duration-150"
            >
              <Code2 className="h-3.5 w-3.5 text-amber-500" />
              LeetCode
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-3 text-xs font-medium text-muted-foreground hover:border-border/80 hover:text-foreground transition-colors duration-150"
            >
              <Github className="h-3.5 w-3.5 text-muted-foreground" />
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-3 text-xs font-medium text-muted-foreground hover:border-border/80 hover:text-foreground transition-colors duration-150"
            >
              <Linkedin className="h-3.5 w-3.5 text-blue-500" />
              LinkedIn
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 px-5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors duration-150"
            >
              Explore Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-muted transition-colors duration-150"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column: Architecture Card */}
        <div className="lg:col-span-5 flex flex-col">
          <ArchitectureCard />
        </div>
      </div>
    </section>
  );
}
