"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "./ui/button";

type PagerProps = {
  prevHref?: string;
  nextHref?: string;
  prevTitle?: string;
  nextTitle?: string;
};

const Pager = ({
  prevHref,
  nextHref,
  prevTitle = "Previous",
  nextTitle = "Next",
}: PagerProps) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between w-full mt-8">
      {/* Previous Button */}
      {prevHref && prevHref !== pathname ? (
        <Button variant="ghost" asChild>
          <Link href={prevHref} className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            {prevTitle}
          </Link>
        </Button>
      ) : (
        <div />
      )}

      {/* Next Button */}
      {nextHref && nextHref !== pathname && (
        <Button variant="ghost" className="ml-auto" asChild>
          <Link href={nextHref} className="flex items-center gap-1">
            {nextTitle}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default Pager;