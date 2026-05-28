"use client";

import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { mySkills } from '@/constants';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>

        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Technologies I use to build scalable and high-performance applications
        </PageHeaderHeading>

        <PageHeaderDescription>
          Strong foundation in full stack development with expertise in the MERN stack, 
          focusing on backend systems, REST API design, and database optimization. 
          Experienced in building production-level applications with authentication, 
          payment integration, and scalable architecture.
        </PageHeaderDescription>
      </PageHeader>

      {/* Skills & Tools */}
      <div
        id="badges"
        className="flex flex-wrap items-center justify-center gap-2 my-4"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: 'mr-2 size-4',
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};

export default SkillsToolsPage;