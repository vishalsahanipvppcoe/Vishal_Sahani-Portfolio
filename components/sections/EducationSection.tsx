import { educationData, certificationsData } from '@/constants/education';
import { GraduationCap, Award } from 'lucide-react';
import Image from 'next/image';

export function EducationSection() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Education &amp; Certifications
        </h2>
        <p className="text-sm text-muted-foreground">
          Academic degree &amp; recognized professional qualifications.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 flex-1 flex flex-col justify-between shadow-sm">
        <div className="space-y-4">
          {/* Degree */}
          {educationData.map((edu, idx) => (
            <div key={idx} className="rounded-lg border border-border/70 bg-muted/40 p-4">
              <div className="flex items-start gap-3.5">
                <div className="rounded-lg bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="text-xs font-bold text-foreground leading-snug">
                      {edu.institution}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">
                    {edu.degree}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 pt-1">
                    <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {edu.score}
                    </span>
                    <span className="text-xs text-muted-foreground">• {edu.duration}</span>
                    <span className="text-xs text-muted-foreground">• {edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Certifications Grid */}
          <div className="pt-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
              Certifications &amp; Hackathons
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-3.5 rounded-lg border border-border/70 bg-muted/40 p-3 transition-all hover:border-border hover:bg-muted/70"
                >
                  {cert.logo ? (
                    <div className="relative h-12 w-12 shrink-0 rounded-xl border border-border bg-card p-1.5 flex items-center justify-center shadow-inner">
                      <Image
                        src={cert.logo}
                        alt={cert.organization}
                        width={40}
                        height={40}
                        className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-12 shrink-0 rounded-xl border border-border bg-card flex items-center justify-center">
                      <Award className="h-5 w-5 text-emerald-500" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-foreground truncate">{cert.title}</p>
                    <p className="text-[11px] text-muted-foreground truncate">{cert.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;