'use client';

import Image from 'next/image';
import { ChevronUp } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-xl py-6 sm:py-8 text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        {/* Left: Identity & Mini Avatar */}
        <div className="flex items-center gap-2.5">
          <div className="relative h-6 w-6 rounded-full overflow-hidden border border-emerald-500/30 ring-1 ring-emerald-500/20 shrink-0">
            <Image
              src="/vishal-profile-hd.jpg"
              alt="Vishal Sahani"
              fill
              sizes="24px"
              className="object-cover"
            />
          </div>
          <span className="font-semibold text-foreground">Vishal Sahani</span>
          <span className="text-border dark:text-slate-800">•</span>
          <span className="text-muted-foreground">Software Developer</span>
        </div>

        {/* Center: Main Section Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" aria-label="Footer Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center gap-3 text-muted-foreground text-center sm:text-right">
          <span>© {currentYear} Vishal Sahani. Built with Next.js &amp; Tailwind CSS.</span>
          <button
            onClick={scrollToTop}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border dark:border-slate-800 bg-muted/40 hover:bg-muted text-foreground transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;