import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import TimelineViewer from "@/components/timeline-viewer";
import { experiences } from "@/constants/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20">
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>

        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Building scalable systems with a strong focus on backend engineering
        </PageHeaderHeading>

        <PageHeaderDescription>
          Developed full-stack applications using the MERN stack, with a primary focus on backend systems,
          REST API design, and efficient database architecture. Delivered solutions involving authentication,
          payment integration, and performance-optimized workflows.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Designed and optimized APIs, structured MongoDB databases, and implemented clean, maintainable code
          using industry-standard tools such as Git, GitHub, and Postman to ensure efficient development and collaboration.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Served as a TPO Student Coordinator, coordinating with teams and managing placement-related activities,
          demonstrating leadership, communication, and organizational capabilities alongside technical expertise.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-6">
        <TimelineViewer data={experiences} />
      </div>
    </section>
  );
}