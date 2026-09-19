import { Cpu, Server, Database, Globe, Layers, ArrowRight } from 'lucide-react';

export function ArchitectureCard() {
  return (
    <div className="w-full h-full rounded-xl border border-border bg-card p-5 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
        <div>
          <h3 className="text-sm font-semibold text-foreground">System Architecture</h3>
          <p className="text-xs text-muted-foreground">AI SaaS &amp; Microservices Flow</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Production Ready
        </span>
      </div>

      {/* Diagram Content */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 items-stretch my-auto py-1">
        {/* Step 1: Client & AI */}
        <div className="flex flex-col justify-between gap-2.5">
          <div className="rounded-lg border border-border/70 bg-muted/40 p-2.5 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Globe className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
              <span>React.js / Android</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">Web UI • Java/Kotlin Client</p>
          </div>

          <div className="rounded-lg border border-border/70 bg-muted/40 p-2.5 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Cpu className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span>Gemini / NVIDIA</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">LLM Analysis &amp; Prompts</p>
          </div>
        </div>

        {/* Center: API Gateway & Backend Services */}
        <div className="flex flex-col justify-between gap-2.5">
          <div className="rounded-md border border-border/70 bg-muted/40 py-1 px-2 text-center text-[10px] font-medium text-foreground flex items-center justify-center gap-1">
            <span className="text-muted-foreground">API Gateway</span>
            <ArrowRight className="h-2.5 w-2.5 text-emerald-500" />
          </div>

          <div className="w-full rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-center flex-1 flex flex-col justify-center shadow-inner">
            <Server className="mx-auto h-4 w-4 text-emerald-500 mb-1" />
            <div className="text-xs font-semibold text-foreground">Spring Boot / Node.js</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">Microservices • JWT Auth</p>
          </div>

          <div className="rounded-md border border-border/70 bg-muted/40 py-1 px-2 text-center text-[10px] font-medium text-muted-foreground">
            Redis • Docker
          </div>
        </div>

        {/* Right: Databases & Storage */}
        <div className="flex flex-col justify-between gap-2.5">
          <div className="rounded-lg border border-border/70 bg-muted/40 p-2.5 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Database className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span>MongoDB / PostgreSQL</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">Spatial Data &amp; Documents</p>
          </div>

          <div className="rounded-lg border border-border/70 bg-muted/40 p-2.5 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Layers className="h-3.5 w-3.5 text-blue-500 shrink-0" />
              <span>Redis + Firebase</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">Caching &amp; Push Events</p>
          </div>
        </div>
      </div>

      {/* Architecture Telemetry Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px]">
        <span className="flex items-center gap-1.5 text-foreground font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Sub-150ms Gateway Routing
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">Containerized Services</span>
      </div>
    </div>
  );
}
