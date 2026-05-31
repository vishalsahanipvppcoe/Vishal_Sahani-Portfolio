import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import StatsSection from "@/components/sections/StatsSection";

export default async function HomePage() {
  return (
    <>
      {/* Introduction */}
      <section id="home" className="min-h-screen py-20">

        <PageHeader>
          <PageHeaderHeading>Vishal Sahani</PageHeaderHeading>

          <PageHeaderHeading className="mt-2 text-muted-foreground">
            Full Stack Developer (MERN) | Building Scalable Web Apps
          </PageHeaderHeading>

          <PageHeaderDescription>
            I build scalable and high-performance web applications using the
            MERN stack, focusing on clean architecture, optimized APIs, and
            real-world problem solving.
            <br />
            <br />
            Currently pursuing B.E. in Information Technology from Mumbai
            University, I have hands-on experience developing production-level
            projects with authentication, payment integration, and database
            optimization.
            <br />
            <br />
            My key projects include <strong>AI Placement Platform</strong>,
            <strong> StudyNotion (EdTech Platform)</strong>, and{" "}
            <strong>Wanderlust</strong>, where I worked on backend scalability,
            REST APIs, and user-centric features.
          </PageHeaderDescription>

          <PageActions>
            <Button asChild size="sm" className="rounded-md">
              <Link
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <ExternalLink className="size-3" strokeWidth={2} />
              </Link>
            </Button>

            <Button asChild size="sm" className="rounded-md">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Contact Me
                <ExternalLink className="size-3" strokeWidth={2} />
              </a>
            </Button>
          </PageActions>
        </PageHeader>
      </section>

      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <StatsSection />
      <ContactSection />
    </>
  );
}