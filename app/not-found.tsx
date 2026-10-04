import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-500 mb-3">
        404 — Page Not Found
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
        Oops. This page doesn&apos;t exist.
      </h1>
      <p className="text-sm sm:text-base text-muted-foreground max-w-md mb-8">
        The page you&apos;re looking for may have been moved, deleted, or never existed. Head back to the portfolio.
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 px-6 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors duration-150"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
