import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20">
      <PageHeader>
        <PageHeaderHeading>About Me</PageHeaderHeading>

        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Full Stack Developer building scalable and real-world applications.
        </PageHeaderHeading>

        <PageHeaderDescription>
          I’m Vishal Sahani, an Information Technology student at Mumbai University (PVPPCOE),
          specializing in the MERN stack with a strong focus on backend systems, API design,
          and performance optimization.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Developed production-level applications with authentication, payment integration,
          and optimized database architecture. Built projects like <strong>AI Placement Platform</strong>,
          <strong> StudyNotion</strong>, and <strong>Wanderlust</strong>, focusing on scalable system design and real-world problem solving.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Skilled in REST APIs, role-based access control, and system design. Experience includes
          working as a <strong>TPO Student Coordinator</strong> and participating in national-level
          hackathons like <strong>QUASAR</strong>. Currently focused on Data Structures & Algorithms
          and building high-impact systems as a Software Engineer.
        </PageHeaderDescription>
      </PageHeader>
    </section>
  );
}