'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { ModeSwitcher } from '@/components/mode-switcher';
import { Menu, X, FileText } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#education', label: 'Education', id: 'education' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

      const scrollPx = document.documentElement.scrollTop || window.scrollY || 0;
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = winHeight > 0 ? Math.min(100, Math.max(0, (scrollPx / winHeight) * 100)) : 0;
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      {/* Top Viewport Green Scroll Progress Line */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[70] bg-emerald-400 dark:bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)] transition-[width] duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Rectangular Navbar Stuck to Top - Transparent */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-background/85 backdrop-blur-md border-border shadow-xs'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Left: Monogram Logo + Avatar */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
              aria-label="Vishal Sahani - Home"
            >
              <div className="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full overflow-hidden border border-emerald-500/30 dark:border-emerald-400/40 ring-1 ring-emerald-500/20 dark:ring-emerald-400/20 group-hover:border-emerald-500 dark:group-hover:border-emerald-300 transition-all shrink-0">
                <Image
                  src="/vishal-profile-hd.jpg"
                  alt="Vishal Sahani"
                  fill
                  sizes="32px"
                  priority
                  className="object-cover"
                />
              </div>
              <span className="font-mono font-black text-sm sm:text-base tracking-wider text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                VS
              </span>
            </Link>

            {/* Center: Desktop Navigation Links (Uppercase & Tracked, Uniform Color) */}
            <nav
              className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold tracking-widest uppercase"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-1 text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Actions (Theme Toggle + Resume) */}
            <div className="hidden md:flex items-center gap-3">
              <ModeSwitcher className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-emerald-500/30 dark:border-emerald-400/30 bg-emerald-50 dark:bg-emerald-400/10 px-3.5 text-xs font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-400/20 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <FileText className="h-3.5 w-3.5" />
                Resume
              </a>
            </div>

            {/* Mobile Right: Theme Toggle + Menu Button */}
            <div className="flex md:hidden items-center gap-1.5">
              <ModeSwitcher className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card/80 text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl px-4 py-4 md:hidden shadow-lg">
            <nav className="flex flex-col space-y-2 text-xs font-semibold tracking-wider uppercase" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <span>{link.label}</span>
                </a>
              ))}

              <div className="pt-3 border-t border-border">
                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-2 text-xs font-semibold tracking-wider uppercase rounded-lg border border-emerald-500/30 dark:border-emerald-400/30 bg-emerald-50 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-400/20 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Resume
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}