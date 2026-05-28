import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/constants/projects';
import Link from 'next/link';

const ProjectsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Projects</PageHeaderHeading>

        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Scalable full-stack applications focused on performance, backend architecture, and real-world use cases
        </PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="relative w-full transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="leading-6">
                {project.title}
              </CardTitle>

              <CardDescription className="flex flex-col gap-2">
                {project.tagline}

                <Link
                  href={`/projects/${project.slug}`}
                  className="text-muted-foreground"
                >
                  Learn More...
                  <span className="absolute inset-0"></span>
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Pager
        prevHref="/about"
        nextHref="/skills-tools"
        prevTitle="About"
        nextTitle="Skills & Tools"
      />
    </>
  );
};

export default ProjectsPage;