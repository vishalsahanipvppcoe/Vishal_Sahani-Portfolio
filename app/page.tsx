import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 pb-20">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Projects */}
      <ProjectsSection />

      {/* 3. Work Experience & Technical Skills (58% / 42% ratio on desktop) */}
      <section id="experience" className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 h-full">
          <ExperienceSection />
        </div>
        <div id="skills" className="lg:col-span-5 h-full">
          <SkillsSection />
        </div>
      </section>

      {/* 4. Education Section (Full width matching user reference image) */}
      <section id="education" className="py-8 sm:py-12 border-b border-border">
        <EducationSection />
      </section>

      {/* 5. Certifications & Contact Section (2-column on desktop) */}
      <section id="certifications-contact" className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-5">
          <CertificationsSection />
        </div>
        <div className="lg:col-span-7">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}