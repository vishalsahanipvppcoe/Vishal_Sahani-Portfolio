import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        {/* Name */}
        <PageHeaderHeading>Vishal Sahani</PageHeaderHeading>

        {/* Tagline */}
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Full Stack Developer (MERN) | Building Scalable Web Apps
        </PageHeaderHeading>

        {/* Description */}
        <PageHeaderDescription>
          I build scalable and high-performance web applications using the MERN stack,
          focusing on clean architecture, optimized APIs, and real-world problem solving.
          <br /><br />
          Currently pursuing B.E. in Information Technology from Mumbai University, I have
          hands-on experience developing production-level projects with authentication,
          payment integration, and database optimization.
          <br /><br />
          My key projects include <strong>AI Placement Platform</strong>,
          <strong> StudyNotion (EdTech Platform)</strong>, and <strong>Wanderlust</strong>,
          where I worked on backend scalability, REST APIs, and user-centric features.
        </PageHeaderDescription>

        {/* Buttons */}
        <PageActions>
          {/* Resume */}
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

          {/* Contact Me (LinkedIn ONLY) */}
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

      {/* Pager */}
      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Home"
        nextTitle="About Me"
      />
    </>
  );
};

export default IntroductionPage;