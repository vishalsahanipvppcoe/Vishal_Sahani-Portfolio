import { TimelineViewerData } from '@/types/TimelineViewer.types';

const TimelineViewer = ({ data }: { data: TimelineViewerData[] }) => {
  return (
    <ol className="relative mb-10 border-border border-s">
      {data.map((item, index) => {
        return (
          <li className="mb-10 ms-6" key={index}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full -start-3 ring-8 ring-background dark:bg-emerald-950">
              <svg
                className="w-2.5 h-2.5 text-emerald-700 dark:text-emerald-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>

            <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
              {item.title}
              {item.latest && (
                <span className="bg-emerald-100 text-emerald-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-emerald-950 dark:text-emerald-300 ms-3 border border-emerald-500/20">
                  Latest
                </span>
              )}
            </h3>

            <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">
              {item.date}
            </time>

            <p className="mb-4 text-base font-normal text-muted-foreground">
              {item.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
};
export default TimelineViewer;
