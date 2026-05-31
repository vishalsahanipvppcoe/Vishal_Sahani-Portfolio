"use client";

import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { mySkills } from "@/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-20">
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
              className: "mr-2 size-4",
            })}
            {item.title}
          </Badge>
        ))}
      </div>
    </section>
  );
}