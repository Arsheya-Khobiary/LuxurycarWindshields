import { Users, Star, Clock, ShieldCheck } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    headline: '500+',
    title: 'Happy customers',
    subtitle: 'Luxury & fleet vehicles served across London & Greater London',
    accent: 'violet' as const,
  },
  {
    icon: Star,
    headline: '5.0',
    title: 'Average rating',
    subtitle: 'Consistent five-star reviews from real owners',
    showStars: true,
    accent: 'blue' as const,
  },
  {
    icon: Clock,
    headline: '24/7',
    title: 'Always available',
    subtitle: 'Emergency line — we pick up when you need us most',
    accent: 'red' as const,
  },
  {
    icon: ShieldCheck,
    headline: '5yr',
    title: 'Replacement warranty',
    subtitle: 'Confidence backed by our workmanship on fitted glass',
    accent: 'violet' as const,
  },
] as const;

const accentStyles = {
  violet: {
    iconBox:
      'border-violet-200/80 bg-violet-50 text-violet-700 group-hover:border-violet-300 group-hover:bg-violet-100/80',
    glow: 'bg-violet-400/15',
    line: 'from-violet-400/50',
  },
  blue: {
    iconBox:
      'border-blue-200/80 bg-blue-50 text-blue-700 group-hover:border-blue-300 group-hover:bg-blue-100/80',
    glow: 'bg-blue-400/15',
    line: 'from-blue-400/50',
  },
  red: {
    iconBox:
      'border-red-200/80 bg-red-50 text-red-700 group-hover:border-red-200 group-hover:bg-red-50',
    glow: 'bg-red-400/12',
    line: 'from-red-400/50',
  },
} as const;

export function TrustMetrics() {
  return (
    <section
      className="relative isolate overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/80 text-slate-900"
      aria-labelledby="trust-metrics-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-[12%] h-64 w-64 rounded-full bg-violet-400/[0.11] blur-[80px]" />
        <div className="absolute top-1/2 right-[8%] h-56 w-72 rounded-full bg-blue-400/[0.09] blur-[90px]" />
        <div className="absolute bottom-0 left-1/3 h-48 w-96 rounded-full bg-red-500/[0.05] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative h-px w-full overflow-hidden bg-gradient-to-r from-transparent via-indigo-400/45 to-transparent">
        <div className="trust-metrics-shimmer absolute inset-y-0 w-2/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mb-8 text-center lg:mb-12">
          <p
            id="trust-metrics-heading"
            className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Professional car glass replacement across London and surrounding areas. If your windscreen is cracked,
            highly damaged, or fully shattered, our team provides fast and reliable replacements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {metrics.map((item, index) => {
            const a = accentStyles[item.accent];
            return (
              <article
                key={item.title}
                className="trust-metric-card group relative overflow-hidden rounded-2xl border border-violet-200/80 bg-gradient-to-br from-slate-100/95 via-violet-50/85 to-slate-100/90 p-7 shadow-[0_2px_24px_-4px_rgba(79,70,229,0.12)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-0.5 hover:border-violet-300/90 hover:shadow-[0_20px_40px_-12px_rgba(79,70,229,0.18)] sm:p-8"
                style={{ animationDelay: `${80 + index * 75}ms` }}
              >
                <div
                  className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70 ${a.glow}`}
                  aria-hidden
                />
                <div className="relative flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300 ${a.iconBox}`}
                    >
                      <item.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div
                      className={`h-px flex-1 self-center bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-sm:hidden ${a.line}`}
                    />
                  </div>

                  <div>
                    {item.showStars ? (
                      <div className="mb-2 flex gap-0.5" aria-label="Five out of five stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-violet-600 text-violet-600"
                            aria-hidden
                          />
                        ))}
                      </div>
                    ) : null}
                    <p className="text-4xl font-black tabular-nums tracking-tight sm:text-5xl">
                      <span className="bg-gradient-to-br from-violet-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                        {item.headline}
                      </span>
                    </p>
                    <h3 className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.subtitle}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
