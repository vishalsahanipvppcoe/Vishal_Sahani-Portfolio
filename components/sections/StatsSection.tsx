export const dynamic = "force-dynamic";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
//import { getViewsServerAction } from "@/app/actions/getAndSetViewsServerAction";
//import { getLoveCountServerAction } from "@/app/actions/getAndSetLoveCountServerAction";
import { getGitHubStatsServerAction } from "@/app/actions/getGitHubStatsServerAction";
//import LoveButtonComponent from "@/app/stats/LoveButtonComponent";
import GitHubGraphs from "@/app/stats/GitHubGraphs";

const StatCard = ({
  title,
  value,
  className = "",
}: {
  title: string;
  value: string | number;
  className?: string;
}) => (
  <div
    className={`card border border-border/40 rounded-xl p-4 w-full h-full transition-transform duration-200 hover:scale-105 ${className}`}
  >
    <div className="card-content">
      <h3 className="text-lg font-semibold tracking-tight card-title text-muted-foreground">
        {title}
      </h3>
      <span className="text-5xl font-bold leading-tight tracking-tight card-value">
        {value}
      </span>
    </div>
  </div>
);

export default async function StatsSection() {
 // const views = await getViewsServerAction();
 // const loveCount = await getLoveCountServerAction();
  const githubStats = await getGitHubStatsServerAction();

  const githubStatCards = [
    {
      title: "Hireable",
      value: githubStats.hireable && "Yes",
      className: githubStats.hireable && "bg-green-500/20",
    },
    {
      title: "Total Public Repositories",
      value: githubStats.public_repos,
    },
    {
      title: "Followers",
      value: githubStats.followers,
    },
    {
      title: "Following",
      value: githubStats.following,
    },
    {
      title: "Current Company",
      value: githubStats.company,
    },
    {
      title: "Location",
      value: githubStats.location,
    },
  ];

  return (
    <section id="stats" className="min-h-screen py-20">
      <PageHeader>
        <PageHeaderHeading>About this portfolio</PageHeaderHeading>
        <PageHeaderDescription>
          Insights and metrics about this portfolio website
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        {/* Keep your existing Total Views card */}

        {/* Keep your existing Appreciation Count card */}
      </div>

      <PageHeader className="mt-8 mb-4">
        <PageHeaderHeading>GitHub Stats</PageHeaderHeading>
        <PageHeaderDescription>
          Insights and metrics about my GitHub profile
        </PageHeaderDescription>
      </PageHeader>

      <div className="flex items-center justify-center w-full p-4 mb-8 border border-border/40 rounded-xl">
        <GitHubGraphs />
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-4 card-container md:grid-cols-3">
          {githubStatCards.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.value || "Limit Reached"}
              className={card.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}