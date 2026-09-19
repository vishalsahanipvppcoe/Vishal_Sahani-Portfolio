import { siteConfig } from '@/config/site';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-xl py-8 text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        {/* Left: Identity */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">Vishal Sahani</span>
          <span className="text-border">•</span>
          <span className="text-muted-foreground">Software Developer</span>
        </div>

        {/* Center: Verified Profile Links */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline transition-colors"
          >
            Resume
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors duration-150"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.leetcode}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors duration-150"
          >
            LeetCode
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-muted-foreground text-right">
          <span>© {currentYear} Vishal Sahani. Built with Next.js &amp; Tailwind.</span>
        </div>
      </div>
    </footer>
  );
}