import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import TimelineViewer from "@/components/timeline-viewer";
import { education } from "@/constants/education";

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen py-20">
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>

        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Strong academic foundation in Information Technology and software engineering
        </PageHeaderHeading>

        <PageHeaderDescription>
          Pursuing a Bachelor of Engineering (B.E.) in Information Technology from
          Mumbai University at Vasantdada Patil Pratishthan&apos;s College of Engineering (PVPPCOE), Mumbai.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Built a solid foundation in core computer science subjects including Data Structures & Algorithms,
          Database Management Systems, Operating Systems, and Computer Networks.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Complementing academics with hands-on project development in the MERN stack,
          focusing on building scalable applications and applying concepts to real-world scenarios.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-6">
        <TimelineViewer data={education} />
      </div>
    </section>
  );
}