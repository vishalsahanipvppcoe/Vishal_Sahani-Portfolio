import { certificationsData } from '@/constants/education';
import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function CertificationsSection() {
  return (
    <div className="h-full flex flex-col">
      {/* Header outside the card */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl border border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
          <Award className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Certifications &amp; Hackathons
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Recognized credentials and competitive achievements.
          </p>
        </div>
      </div>

      {/* Card container */}
      <div className="flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col justify-between shadow-sm">
        <div className="space-y-3 flex-1 flex flex-col justify-between">
          {certificationsData.map((cert, idx) => {
            const CardWrapper = cert.link ? 'a' : 'div';
            const linkProps = cert.link
              ? {
                  href: cert.link,
                  target: '_blank',
                  rel: 'noreferrer',
                }
              : {};

            return (
              <CardWrapper
                key={idx}
                {...linkProps}
                className="group flex items-center justify-between gap-3.5 rounded-xl border border-border/80 bg-muted/20 p-3.5 transition-all hover:border-emerald-500/40 hover:bg-muted/40 cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  {cert.logo ? (
                    <div className="relative h-11 w-11 shrink-0 rounded-xl border border-border bg-card p-1.5 flex items-center justify-center shadow-inner">
                      <Image
                        src={cert.logo}
                        alt={cert.organization}
                        width={36}
                        height={36}
                        className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-11 w-11 shrink-0 rounded-xl border border-border bg-card flex items-center justify-center">
                      <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-xs sm:text-sm font-bold text-foreground leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {cert.title}
                        </p>
                        {cert.badge && (
                          <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                            {cert.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {cert.organization}
                      </p>
                    </div>
                </div>

                {cert.link && (
                  <span className="inline-flex items-center gap-1 rounded-md border border-border/80 bg-background/80 px-2 py-1 text-[11px] font-medium text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors shrink-0 shadow-xs">
                    <span>Certificate</span>
                    <ExternalLink className="h-3 w-3" />
                  </span>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CertificationsSection;
