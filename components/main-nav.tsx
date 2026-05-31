"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Icons } from "./icons";

export function MainNav() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Intro" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "stats", label: "Stats" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const pageSections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      }
    );

    pageSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden md:flex items-center">
      {/* Logo */}
      <Link href="/" className="mr-4 flex items-center gap-2">
        <Icons.logo className="h-6 w-6 shrink-0" />

        <span className="hidden lg:inline-block font-semibold tracking-tight whitespace-nowrap">
          {siteConfig.name}
        </span>
      </Link>

      {/* Normal Desktop Navigation */}
      <nav className="flex items-center">
        <div className="flex items-center gap-5 xl:hidden">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className="group flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
            <ExternalLink className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.resume}
            className="group flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            Resume
            <ExternalLink className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* XL Screens Section Navigation */}
        <div className="hidden xl:flex items-center gap-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "relative text-xs transition-all duration-300 hover:text-foreground whitespace-nowrap",
                activeSection === section.id
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {section.label}

              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-current transition-all duration-300",
                  activeSection === section.id ? "w-full" : "w-0"
                )}
              />
            </a>
          ))}

          <div className="mx-1 h-4 w-px bg-border" />

          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className="group flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.resume}
            className="group flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Resume
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </nav>
    </div>
  );
}