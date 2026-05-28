import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        {/* Heading */}
        <PageHeaderHeading>About Me</PageHeaderHeading>

        {/* Subheading */}
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Full Stack Developer building scalable and real-world applications.
        </PageHeaderHeading>

        {/* Paragraph 1 */}
        <PageHeaderDescription>
          I’m Vishal Sahani, an Information Technology student at Mumbai University (PVPPCOE),
          specializing in the MERN stack with a strong focus on backend systems, API design,
          and performance optimization.
        </PageHeaderDescription>

        {/* Paragraph 2 */}
        <PageHeaderDescription>
          Developed production-level applications with authentication, payment integration,
          and optimized database architecture. Built projects like <strong>AI Placement Platform</strong>,
          <strong> StudyNotion</strong>, and <strong>Wanderlust</strong>, focusing on scalable system design and real-world problem solving.
        </PageHeaderDescription>

        {/* Paragraph 3 */}
        <PageHeaderDescription>
          Skilled in REST APIs, role-based access control, and system design. Experience includes
          working as a <strong>TPO Student Coordinator</strong> and participating in national-level
          hackathons like <strong>QUASAR</strong>. Currently focused on Data Structures & Algorithms
          and building high-impact systems as a Software Engineer.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};

export default AboutMePage;